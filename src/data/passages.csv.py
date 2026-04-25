#!/usr/bin/env python3
"""
Build-time data loader: long-format passage-coding rows.

Reads coding-data/data/*.json and emits one CSV row per
(passage_id, doc_id, subcategory) tuple to stdout. Logs to stderr.

Output columns:
    doc_id, lab, genre, corpus, period, date, title,
    passage_id, section, excerpt, notes,
    subcategory, stance, scale_type, engagement_type, genre_departure

Today: 389 rows from 86 documents. Ceiling at 1.0: ~5K rows.
"""

from __future__ import annotations

import csv
import json
import sys
from pathlib import Path

# Path resolution. Loader runs with CWD at the project root (Framework
# convention). coding-data/ holds the synced corpus snapshot.
ROOT = Path(__file__).resolve().parent.parent.parent  # src/data/ -> src/ -> root
CODING_DATA = ROOT / "coding-data"
DATA_DIR = CODING_DATA / "data"

# Bring _codebook.py into scope for THREE_STATE_SUBCATS (scale-type derivation).
sys.path.insert(0, str(CODING_DATA))
from _codebook import THREE_STATE_SUBCATS  # noqa: E402


def main() -> int:
    if not DATA_DIR.exists():
        print(f"coding-data/data not found at {DATA_DIR}", file=sys.stderr)
        print("Run `npm run sync` first.", file=sys.stderr)
        return 1

    fieldnames = [
        "doc_id", "lab", "genre", "corpus", "period", "date", "title",
        "passage_id", "section", "excerpt", "notes",
        "subcategory", "stance", "scale_type", "engagement_type", "genre_departure",
    ]
    w = csv.DictWriter(sys.stdout, fieldnames=fieldnames)
    w.writeheader()

    n_docs = 0
    n_rows = 0
    for jp in sorted(DATA_DIR.glob("*.json")):
        d = json.loads(jp.read_text())
        n_docs += 1
        for p in d.get("passages", []):
            for c in p["codings"]:
                sc = c["subcategory"]
                w.writerow({
                    "doc_id": d["id"],
                    "lab": d["lab"],
                    "genre": d["genre"],
                    "corpus": d["corpus"],
                    "period": d["period"],
                    "date": d["date"],
                    "title": d["title"],
                    "passage_id": p["id"],
                    "section": p["section"],
                    "excerpt": p["excerpt"],
                    "notes": p.get("notes", ""),
                    "subcategory": sc,
                    "stance": c["stance"],
                    "scale_type": "three-state" if sc in THREE_STATE_SUBCATS else "full",
                    "engagement_type": c["engagement_type"],
                    "genre_departure": "true" if c["genre_departure"] else "false",
                })
                n_rows += 1

    print(f"[passages.csv] {n_rows} rows from {n_docs} documents", file=sys.stderr)
    return 0


if __name__ == "__main__":
    sys.exit(main())
