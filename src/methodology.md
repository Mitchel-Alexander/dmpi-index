---
title: Methodology
---

# Methodology

DMPI uses **directed content analysis** (DCA) — a deductive coding method in
which a codebook derived from research literature is applied to lab policy
documents. The codebook captures 18 subcategories spanning empirical claims
about machine consciousness and agency, normative positions on welfare and
moral status, and behavioural/policy commitments.

This page is a placeholder during MVP. The full methodology note (with the
codebook, anchor texts, and decision rules) lives in the working-paper draft;
links and downloads will appear here in beta.

## Codebook (v0.2)

The codebook contains 18 subcategories grouped into 8 main categories. Six are
three-state (absent / present / denied); twelve are full-scale (absent /
denied / acknowledged / investigated / affirmed). See
`projects/dmpi/ref-codebook.md` in the source repo.

## Source data

```js
const documents = FileAttachment("data/documents.csv").csv({typed: true});
const passages = FileAttachment("data/passages.csv").csv({typed: true});
const schema = FileAttachment("data/schema.json").json();
```

```js
display(html`
  <ul>
    <li><a href="${FileAttachment("data/passages.csv").href}">passages.csv</a> — long-format passage-coding rows (${passages.length} rows). One row per <code>(passage_id, doc_id, subcategory)</code> tuple.</li>
    <li><a href="${FileAttachment("data/documents.csv").href}">documents.csv</a> — per-document summary (${documents.length} rows).</li>
    <li><a href="${FileAttachment("data/schema.json").href}">schema.json</a> — Pydantic-derived JSON Schema for per-document records.</li>
  </ul>
`);
```

## Citation

```
DMPI: Digital Minds Policy Index (2026). Mitchel Pass et al.
[Pre-publication]. https://dmpi-index.vercel.app
```

## Pipeline

The dashboard is a static read-only consumer of the canonical coding artefacts.
Markdown coding records are the single source of truth; JSONs and this index
are derived. See `projects/dmpi/ref-data-schema.md` for the data contract and
`projects/dmpi/ref-parser-spec-2026-04-25.md` for the parser specification.

## Audit-trail fields

Every coded document carries: `coded_by`, `coded_date`, `reviewed_by`,
`reviewed_date`, `codebook_version`. These are surfaced in `documents.csv`
and viewable in the per-document detail pages.
