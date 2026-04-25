#!/usr/bin/env python3
"""
Pass-through loader: serves the synced codebook markdown to the dashboard
with the YAML frontmatter stripped (the frontmatter is for vault tooling;
the dashboard renders the body).
"""

from __future__ import annotations

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent.parent
SRC = ROOT / "coding-data" / "codebook.md"

if not SRC.exists():
    print(f"coding-data/codebook.md not found. Run `npm run sync`.", file=sys.stderr)
    sys.exit(1)

text = SRC.read_text()
# Strip the leading YAML frontmatter (--- ... --- block at the top of file).
text = re.sub(r"^---\s*\n.*?\n---\s*\n+", "", text, count=1, flags=re.DOTALL)
sys.stdout.write(text)
print(f"[codebook.md] {len(text.splitlines())} lines", file=sys.stderr)
