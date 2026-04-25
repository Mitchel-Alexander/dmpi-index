---
title: Methodology
toc: true
---

# Methodology

DMPI uses **directed content analysis** (DCA) — a deductive coding method in
which a codebook derived from research literature is applied to lab policy
documents. The codebook captures 18 subcategories spanning empirical claims
about machine consciousness and agency, normative positions on welfare and
moral status, and behavioural/policy commitments.

```js
const documents = await FileAttachment("data/documents.csv").csv();
const passages = await FileAttachment("data/passages.csv").csv();
const lastSyncedRaw = await FileAttachment("data/last-synced.txt").text().catch(() => null);
const lastSynced = lastSyncedRaw ? lastSyncedRaw.trim() : null;
import {marked} from "npm:marked";
```

## At a glance

<div class="grid grid-cols-4" style="gap: 1rem; margin: 1rem 0;">
  <div class="card"><h2 style="margin: 0;">${documents.length}</h2><h3 style="margin: 0;">documents</h3></div>
  <div class="card"><h2 style="margin: 0;">${passages.length}</h2><h3 style="margin: 0;">passage-codings</h3></div>
  <div class="card"><h2 style="margin: 0;">3</h2><h3 style="margin: 0;">labs</h3></div>
  <div class="card"><h2 style="margin: 0;">v0.2</h2><h3 style="margin: 0;">codebook version</h3></div>
</div>

```js
display(html`<p style="color: var(--theme-foreground-muted); font-size: 0.9em;">
  <strong>Corpus snapshot:</strong> ${lastSynced ? new Date(lastSynced).toLocaleDateString("en-GB", {year: "numeric", month: "long", day: "numeric"}) : "unknown"}
  · pre-publication build (${"0.2"})
</p>`);
```

## Scope

DMPI v0.2 covers three labs: **Anthropic, OpenAI, and Google**. The selection
is criteria-driven: leading commercial frontier AI labs with public English-language
policy footprints (system cards, constitutions/specs, safety reports/RSPs) and
the largest deployed user bases. The aim is to make these labs' positions
visible, comparable, and citeable — not to score performance against
prescriptive criteria.

**Out of scope for v0.2** (each is a deliberate omission, not an oversight):

- **xAI** — minimal policy footprint at the time of corpus close; no system-card
  or spec equivalents in the public record. Re-evaluate in v2.
- **Meta** — open-weights documentation patterns differ structurally; the
  closest analogues (model cards) lack the consciousness/welfare/moral-status
  surface that anchors DMPI's coding instrument. Re-evaluate when policy
  documents land.
- **DeepMind as distinct from Google** — the corpus treats Google as a single
  organisational entity; DeepMind-specific documents (e.g. institutional
  research papers) are coded under "Google" with a `genre: rp` (research paper)
  label. The 0.3 institutional-research expansion already includes 12 GDM
  papers under this rule.
- **Microsoft (as distinct from OpenAI)** — Microsoft's AI policy positions
  largely route through the OpenAI partnership at the policy document layer.
  Independent Microsoft positioning may warrant separate coverage in v2.
- **Major Chinese labs** (DeepSeek, Qwen/Alibaba, Zhipu, etc.) — language and
  jurisdictional silence patterns differ enough that they belong in a sister
  index rather than this one. v2 candidate.

## Coding model

**Hybrid coding (development round 1, v0.1–0.2).** Claude (Opus / Sonnet) performs
first-pass coding from extracted source text against the codebook. Mitchel
performs second-pass review against the original PDFs / HTML. Disagreements are
resolved by discussion, with the codebook decision rule as arbiter. The
`coded_by` field in JSON records the first-pass coder; `reviewed_by` records
the second-pass reviewer. **Single human coder. No double-coding for inter-rater
reliability has been performed yet.** The methodology notes' §17 Conflict-of-Interest
Sensitivity discusses the COI implications and the planned 1.0 multi-model
mitigation.

**Planned 1.0** (Q3 2026, post external partner review): three-model automated
pass (Claude + Gemini + GPT) with cross-referenced human adjudication.
Agreement rates surfaced per subcategory.

## Codebook

The full codebook lives at [`/codebook`](./codebook). Each of the 18
subcategories has a definition, anchor passage, decision rule, keyword tiers,
and stance guidance. Linked from each row label in the home-page grid.

## How DMPI is different from prescriptive indexes

DMPI is **descriptive** rather than prescriptive. Indexes like the FLI AI Safety
Index, AI Lab Watch, and SaferAI define what labs *should* do and score against
those criteria. DMPI codes what labs have *said* (and have not said) without
assigning scores. The aim is to make the current state of corporate positions
visible and comparable, so researchers, journalists, and policymakers can draw
their own conclusions.

The DMPI's subject matter — consciousness, welfare, moral status, machine
agency — does not appear as a category, criterion, or indicator in any
existing index surveyed. That absence is consistent with the pattern DMPI
documents in the labs' own literature.

## Citation

```
DMPI: Digital Minds Policy Index (2026). [Pre-publication v0.2]. Mitchel Pass.
https://dmpi-index.vercel.app
```

## Source data

```js
display(html`
  <ul>
    <li><a href="${FileAttachment("data/passages.csv").href}">passages.csv</a> — long-format passage-coding rows (${passages.length} rows). One row per <code>(passage_id, doc_id, subcategory)</code> tuple.</li>
    <li><a href="${FileAttachment("data/documents.csv").href}">documents.csv</a> — per-document summary (${documents.length} rows).</li>
    <li><a href="${FileAttachment("data/schema.json").href}">schema.json</a> — Pydantic-derived JSON Schema for per-document records.</li>
  </ul>
`);
```

## Audit trail

Every coded document carries: `coded_by`, `coded_date`, `reviewed_by`,
`reviewed_date`, `codebook_version`. These appear in `documents.csv` and the
per-document detail pages. The pipeline is: markdown coding records (canonical)
→ Pydantic-validated JSONs → derived `index.csv` and `passages.csv`. See
`ref-data-schema.md` and `ref-parser-spec-2026-04-25.md` in the source
project for the full data contract and parser specification.

---

## Methodology notes (full)

The full methodology document — 18 sections covering coding methodology, genre
priors, engagement type, stance scale coding, multi-coding, keyword tiering,
epistemic positioning, absence/silence, corpus scoping, norm emergence
analytical framework, external validation, robustness, sentience as
phenomenal-consciousness proxy, V1 finalisation, COI sensitivity, and the 0.3
institutional-research expansion — is sourced verbatim from the DMPI vault and
rendered below.

```js
const methodologyText = await FileAttachment("data/methodology-notes.txt").text();
const renderer = new marked.Renderer();
const baseHeading = renderer.heading.bind(renderer);
renderer.heading = function (text, level, raw) {
  if (level === 2) {
    const slug = String(raw).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 60);
    return `<h2 id="m-${slug}">${text}</h2>\n`;
  }
  return baseHeading(text, level, raw);
};
const methodologyHtml = marked(methodologyText, {renderer, mangle: false, headerIds: false});
const container = document.createElement("div");
container.className = "methodology-rendered";
container.innerHTML = methodologyHtml;
display(container);
```

<style>
.methodology-rendered { line-height: 1.55; }
.methodology-rendered h2 {
  margin-top: 2.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid var(--theme-foreground-faintest);
  scroll-margin-top: 4rem;
}
.methodology-rendered h3 { margin-top: 1.75rem; }
.methodology-rendered table {
  border-collapse: collapse;
  margin: 1rem 0;
  font-size: 0.92em;
}
.methodology-rendered table th, .methodology-rendered table td {
  border: 1px solid var(--theme-foreground-faintest);
  padding: 4px 8px;
  text-align: left;
  vertical-align: top;
}
.methodology-rendered table th { background: var(--theme-background-alt); }
.methodology-rendered blockquote {
  border-left: 3px solid var(--theme-foreground-faintest);
  margin: 0.5rem 0;
  padding: 0.25rem 0.75rem;
  color: var(--theme-foreground-muted);
}
.methodology-rendered code {
  background: var(--theme-background-alt);
  padding: 1px 4px;
  border-radius: 3px;
  font-size: 0.92em;
}
</style>
