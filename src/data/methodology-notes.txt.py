#!/usr/bin/env python3
"""
Pass-through loader: serves the synced methodology-notes markdown
with YAML frontmatter stripped.
"""

from __future__ import annotations

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent.parent
SRC = ROOT / "coding-data" / "methodology-notes.md"

if not SRC.exists():
    print(f"coding-data/methodology-notes.md not found. Run `npm run sync`.", file=sys.stderr)
    sys.exit(1)

text = SRC.read_text()
text = re.sub(r"^---\s*\n.*?\n---\s*\n+", "", text, count=1, flags=re.DOTALL)
sys.stdout.write(text)
print(f"[methodology-notes.md] {len(text.splitlines())} lines", file=sys.stderr)
