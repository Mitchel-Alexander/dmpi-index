#!/usr/bin/env python3
"""
Build-time data loader: per-document summary.

Mostly passes through coding-data/index.csv; adds an `engaged_count` column
derived from summary.engaged for downstream sort/filter ergonomics.

Today: 86 rows.
"""

from __future__ import annotations

import csv
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent.parent
CODING_DATA = ROOT / "coding-data"
INDEX_CSV = CODING_DATA / "index.csv"
DATA_DIR = CODING_DATA / "data"


def main() -> int:
    if not INDEX_CSV.exists():
        print(f"coding-data/index.csv not found. Run `npm run sync`.", file=sys.stderr)
        return 1

    # Build a doc_id → engaged_count lookup from the JSONs (authoritative).
    engaged_by_id = {}
    for jp in sorted(DATA_DIR.glob("*.json")):
        d = json.loads(jp.read_text())
        engaged_by_id[d["id"]] = d["summary"]["engaged"]

    with open(INDEX_CSV) as f:
        reader = csv.DictReader(f)
        rows = list(reader)

    out_fieldnames = list(reader.fieldnames or [])
    if "engaged_count" not in out_fieldnames:
        out_fieldnames.append("engaged_count")

    w = csv.DictWriter(sys.stdout, fieldnames=out_fieldnames)
    w.writeheader()
    for r in rows:
        r["engaged_count"] = engaged_by_id.get(r["file"], "")
        w.writerow(r)

    print(f"[documents.csv] {len(rows)} rows", file=sys.stderr)
    return 0


if __name__ == "__main__":
    sys.exit(main())
