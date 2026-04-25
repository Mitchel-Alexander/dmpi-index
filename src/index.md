---
title: Digital Minds Policy Index
toc: false
---

# Digital Minds Policy Index

An index of public policy positions taken by leading commercial AI labs —
**Anthropic, OpenAI, and Google** — on digital minds, AI consciousness, and
AI welfare. Built via [directed content analysis](./methodology) of the labs'
own public documents.

```js
const documents = await FileAttachment("data/documents.csv").csv();
const passages = await FileAttachment("data/passages.csv").csv();
import {searchParams} from "./components/url-state.js";
import {SUBCATS, LABS, buildCellSummary, renderGrid, renderCellPanel} from "./components/grid.js";
```

```js
const cellSummary = buildCellSummary(documents);
const selectedKey = searchParams.get("cell");
```

<div class="grid-wrapper">
  ${renderGrid(cellSummary, selectedKey)}
</div>

${renderCellPanel(selectedKey, cellSummary, passages, documents)}

---

## At a glance

<div class="grid grid-cols-4" style="gap: 1rem; margin: 1rem 0;">
  <div class="card"><h2 style="margin: 0;">${documents.length}</h2><h3 style="margin: 0;">documents</h3></div>
  <div class="card"><h2 style="margin: 0;">${passages.length}</h2><h3 style="margin: 0;">passage-codings</h3></div>
  <div class="card"><h2 style="margin: 0;">3</h2><h3 style="margin: 0;">labs</h3></div>
  <div class="card"><h2 style="margin: 0;">18</h2><h3 style="margin: 0;">subcategories</h3></div>
</div>

## Starting points

Pre-filtered explore views grounded in the analytical findings.

<div class="grid grid-cols-3" style="gap: 1rem; margin-bottom: 1rem;">
  <a class="card" href="./explore?lab=anthropic,openai,google" style="text-decoration: none; color: inherit;">
    <h3 style="margin-top: 0;">How do labs differ?</h3>
    <p style="margin: 0;">Cross-lab divergence on agency, welfare, and consciousness — Anthropic enters via patienthood, Google via moral agency, OpenAI abstains from both.</p>
  </a>
  <a class="card" href="./explore?subcat=1.1,2.1,5.1,6.1,6.2" style="text-decoration: none; color: inherit;">
    <h3 style="margin-top: 0;">Welfare and consciousness</h3>
    <p style="margin: 0;">Where does the welfare apparatus appear? Anthropic-exclusive in the core corpus; partial extensions in institutional research.</p>
  </a>
  <a class="card" href="./explore?subcat=3.1,3.2,4.2" style="text-decoration: none; color: inherit;">
    <h3 style="margin-top: 0;">What about agency?</h3>
    <p style="margin: 0;">Agency is the cross-lab fault line. Anthropic denies → investigates → acknowledges. Google centres moral agency. OpenAI sets agency aside.</p>
  </a>
</div>

```js
display(html`
  <p style="font-size: 0.85em; color: var(--theme-foreground-muted);">
    DMPI is a pre-publication build. See <a href="./methodology">Methodology</a>
    for the codebook, sources, and citation. Source data is downloadable as
    <a href="${FileAttachment("data/passages.csv").href}">passages.csv</a> and
    <a href="${FileAttachment("data/documents.csv").href}">documents.csv</a>.
  </p>
`);
```

<style>

/* ===== Grid ===== */

.grid-wrapper { overflow-x: auto; margin: 1.5rem 0; }

table.dmpi-grid {
  border-collapse: collapse;
  font-size: 0.85em;
  width: 100%;
  min-width: 720px;
  table-layout: fixed;
}

table.dmpi-grid th, table.dmpi-grid td {
  border: 1px solid var(--theme-foreground-faintest);
  padding: 6px 10px;
  text-align: left;
  vertical-align: middle;
}

table.dmpi-grid .grid-corner {
  width: 30%;
  background: var(--theme-background-alt);
}

table.dmpi-grid .grid-lab-header {
  width: 23.3%;
  text-align: center;
  font-weight: 600;
  background: var(--theme-background-alt);
}

table.dmpi-grid .grid-subcat-header {
  font-weight: normal;
  background: var(--theme-background-alt);
}
.subcat-code {
  display: inline-block;
  font-family: var(--monospace);
  font-weight: 600;
  margin-right: 0.5em;
  color: var(--theme-foreground-muted);
}
.subcat-name { display: inline-block; }

table.dmpi-grid .grid-cell {
  cursor: pointer;
  text-align: center;
  font-variant-numeric: tabular-nums;
  transition: filter 120ms ease, outline 120ms ease;
}
table.dmpi-grid .grid-cell:hover { filter: brightness(0.92); }
table.dmpi-grid .grid-cell:focus-visible {
  outline: 2px solid var(--theme-foreground);
  outline-offset: -2px;
}
table.dmpi-grid .grid-cell--selected {
  outline: 2px solid var(--theme-foreground);
  outline-offset: -2px;
  font-weight: 600;
}
table.dmpi-grid .grid-cell--empty {
  color: var(--theme-foreground-muted);
}

.cell-stance { font-weight: 500; }
.cell-count {
  display: inline-block;
  background: rgba(0,0,0,0.18);
  border-radius: 999px;
  padding: 0 6px;
  font-size: 0.85em;
  margin-left: 4px;
  font-weight: 600;
}

/* ===== Stance colours (Tailwind-style hues, deliberately muted) ===== */

.stance--absent       { background: #f3f4f6; color: #6b7280; }
.stance--denied       { background: #fee2e2; color: #991b1b; }
.stance--acknowledged { background: #fef3c7; color: #92400e; }
.stance--investigated { background: #dbeafe; color: #1e40af; }
.stance--affirmed     { background: #dcfce7; color: #166534; }
.stance--present      { background: #e0e7ff; color: #3730a3; }

/* ===== Cell detail modal (native <dialog>) ===== */

dialog.cell-modal {
  /* Pin to the right edge of the viewport, full-height side panel.
     Override the browser's centring default for showModal() via fixed
     positioning + auto-margin reset. */
  position: fixed;
  top: 1rem;
  right: 1rem;
  bottom: 1rem;
  left: auto;
  margin: 0;
  width: min(560px, calc(100vw - 2rem));
  max-width: calc(100vw - 2rem);
  max-height: calc(100vh - 2rem);
  padding: 0;
  border: 1px solid var(--theme-foreground-faintest);
  border-radius: 8px;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.25);
  background: var(--theme-background);
  color: var(--theme-foreground);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
dialog.cell-modal::backdrop {
  background: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(1px);
}
dialog.cell-modal[open] {
  animation: cell-modal-in 180ms ease-out;
}
@keyframes cell-modal-in {
  from { opacity: 0; transform: translateX(20px); }
  to   { opacity: 1; transform: translateX(0); }
}

/* On narrow viewports (≤ 720px wide, e.g. phones in portrait), let the
   panel span the full width so it remains usable. */
@media (max-width: 720px) {
  dialog.cell-modal {
    top: auto;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100vw;
    max-width: 100vw;
    max-height: 80vh;
    border-radius: 8px 8px 0 0;
  }
  @keyframes cell-modal-in {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
}

.cell-modal-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 1.25rem 0.5rem 1.25rem;
  border-bottom: 1px solid var(--theme-foreground-faintest);
  background: var(--theme-background-alt);
}
.cell-modal-header h3 {
  margin: 0;
  font-size: 1.05em;
  line-height: 1.4;
}
.cell-modal-close {
  background: transparent;
  border: 1px solid var(--theme-foreground-faintest);
  border-radius: 999px;
  width: 28px; height: 28px;
  font-size: 1.1em;
  cursor: pointer;
  line-height: 1;
  flex-shrink: 0;
}
.cell-modal-close:hover { background: var(--theme-background); }

.cell-modal > div,
dialog.cell-modal > p {
  padding: 1rem 1.25rem 1.25rem 1.25rem;
  overflow-y: auto;
  margin: 0;
}

.cell-modal-summary {
  margin: 0 0 1rem 0;
  font-size: 0.9em;
  color: var(--theme-foreground-muted);
}
.cell-modal-docs {
  list-style: none;
  margin: 0;
  padding: 0;
}
.cell-modal-doc {
  border-top: 1px solid var(--theme-foreground-faintest);
  padding: 0.75rem 0;
}
.cell-modal-doc:first-child { border-top: none; padding-top: 0; }
.cell-modal-doc-header {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}
.cell-modal-doc-header a { text-decoration: none; }
.cell-modal-doc-header a:hover { text-decoration: underline; }
.cell-modal-doc-meta {
  font-size: 0.85em;
  color: var(--theme-foreground-muted);
}
.cell-modal-passage {
  margin: 0.5rem 0 0.75rem 0;
  padding: 0.5rem 0.75rem;
  border-left: 3px solid var(--theme-foreground-faintest);
  background: var(--theme-background-alt);
  border-radius: 0 4px 4px 0;
}
.cell-modal-excerpt {
  margin: 0 0 0.5rem 0;
  font-style: italic;
  font-size: 0.95em;
}
.cell-modal-passage footer {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.4rem;
  font-size: 0.85em;
}
.cell-modal-passage-section {
  color: var(--theme-foreground-muted);
  font-size: 0.85em;
}

/* ===== Pills (shared across grid + panel + document detail) ===== */

.pill {
  display: inline-block;
  padding: 1px 8px;
  border-radius: 999px;
  font-size: 0.85em;
  background: var(--theme-foreground-faintest);
}
.pill-anthropic { background: #fee2e2; color: #991b1b; }
.pill-openai   { background: #dcfce7; color: #166534; }
.pill-google   { background: #dbeafe; color: #1e40af; }
.pill-sc       { background: #f3e8ff; color: #6b21a8; }
.pill-spec     { background: #ffe4e6; color: #9f1239; }
.pill-sr       { background: #ecfeff; color: #155e75; }
.pill-rp       { background: #fef3c7; color: #92400e; }
.pill-engagement { background: #f1f5f9; color: #334155; }

/* ===== Cards (used below the grid for stats + CTAs) ===== */

@media (max-width: 720px) {
  table.dmpi-grid { font-size: 0.78em; }
  table.dmpi-grid th, table.dmpi-grid td { padding: 4px 6px; }
  .subcat-name { display: none; }
}
</style>
