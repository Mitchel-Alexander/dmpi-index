# DMPI Index

Digital Minds Policy Index — interactive index of public policy positions taken
by leading commercial AI labs (Anthropic, OpenAI, Google) on digital minds,
AI consciousness, and AI welfare.

86 documents · 232 passages · 18 subcategories · directed content analysis (DCA)
under codebook v0.2.

## Local development

```sh
# 1. Sync data from the vault
npm run sync

# 2. Install JS deps
npm install

# 3. Install Python deps for the data loaders
pip3 install -r requirements.txt

# 4. Start the preview server
npm run dev
```

Open http://localhost:3000.

## Build

```sh
npm run build      # output to dist/
```

## Deploy

```sh
npm run deploy:preview   # Vercel preview
npm run deploy           # production
```

Vercel runs `pip3 install -r requirements.txt && npm run build` per `vercel.json`.

## Layout

```
dmpi-index/
├── src/                       # Observable Framework source root
│   ├── index.md               # Landing — overview + corpus structure
│   ├── explore.md             # Filtered table view
│   ├── document.[id].md       # Single-document detail (parameterised)
│   ├── methodology.md         # About + codebook + downloads
│   ├── data/                  # Build-time data loaders
│   │   ├── passages.csv.py    # Long-format passage-coding rows
│   │   └── documents.csv.py   # Per-document summary
│   └── components/            # Local JS modules
│       └── url-state.js       # Reactive query-string + hash plumbing
├── coding-data/               # Synced from vault — input to loaders
│   ├── data/                  # 86 per-document JSONs
│   ├── _codebook.py           # Subcategories, scale-types, enums
│   ├── schema.json            # Pydantic-derived JSON Schema
│   └── index.csv              # 86-row document summary
├── scripts/
│   └── sync-from-vault.sh     # rsync from vault → coding-data/
├── observablehq.config.js     # Framework config
├── vercel.json                # Vercel deploy config
├── requirements.txt           # Python deps for loaders
└── package.json
```

## Data layer

Markdown is canonical (in the vault). The dashboard is a read-only consumer.

- `coding-data/data/*.json` — one JSON per coded document (Pydantic-validated).
- `coding-data/schema.json` — JSON Schema (front-end typing source).
- Build-time loaders in `src/data/` aggregate the JSONs into `passages.csv` and
  `documents.csv`, served at stable public paths (`/data/passages.csv` etc.).

To refresh against the vault:

```sh
npm run sync       # copies vault → coding-data/, commit before deploy
```

## Status

**Phase 1 MVP** — landing + explore + document detail + 3-of-7 filters + URL state.
See `projects/dmpi/ref-index-mvp-plan-2026-04-25.md` in the vault for the plan.
