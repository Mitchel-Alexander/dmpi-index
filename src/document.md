---
title: Document detail
toc: false
---

```js
import * as Plot from "npm:@observablehq/plot";
import {searchParams} from "./components/url-state.js";
const documents = await FileAttachment("data/documents.csv").csv({typed: true});
```

```js
const docId = searchParams.get("id");
const doc = documents.find((d) => d.file === docId);
```

```js
// Lazy-load the per-doc JSON snapshot from the synced corpus.
// Each JSON ships into dist/_file/coding-data/data/<id>.json via the
// FileAttachment static-analysis path; the literal-string requirement
// means we use a small helper that switches on the resolved id.
const docJson = doc
  ? await FileAttachment(`coding-data/data/${docId}.json`).json().catch(() => null)
  : null;
```

```js
if (!docId || !doc) {
  display(html`
    <div class="warning">
      <strong>No document selected.</strong>
      <p>This page expects an <code>?id=&lt;doc-id&gt;</code> query parameter.
      Try the <a href="./explore">Explore</a> page and click any row.</p>
    </div>
  `);
}
```

```js
if (doc) {
  display(html`
    <h1 style="margin-bottom: 0.25rem;">${doc.title}</h1>
    <p style="color: var(--theme-foreground-muted); margin-top: 0;">
      <span class="pill pill-${doc.lab}">${doc.lab}</span>
      <span class="pill pill-genre">${doc.genre}</span>
      <span class="pill pill-period">${doc.period}</span>
      · ${doc.date} · coded ${doc.coded_date} by ${doc.coded_by}
      ${doc.reviewed_by ? html` · reviewed ${doc.reviewed_date} by ${doc.reviewed_by}` : ""}
      · codebook ${doc.codebook_version}
    </p>
  `);
}
```

```js
// Subcategory engagement strip.
if (docJson) {
  const SUBCATS = ["1.1","1.2","1.3","2.1","3.1","3.2","4.1","4.2","4.3","5.1","5.2","6.1","6.2","7.1","7.2","7.3","8.1","8.2"];
  const stances = SUBCATS.map((sc) => ({subcat: sc, stance: docJson.stances[sc]}));
  display(Plot.plot({
    marginLeft: 0,
    marginBottom: 50,
    width: 720,
    height: 80,
    x: {label: "Subcategory", domain: SUBCATS},
    y: {axis: null},
    color: {
      legend: true,
      domain: ["absent", "denied", "acknowledged", "investigated", "affirmed", "present"],
      range: ["#e5e7eb", "#dc2626", "#fbbf24", "#3b82f6", "#16a34a", "#3b82f6"],
    },
    marks: [
      Plot.cell(stances, {x: "subcat", fill: "stance", inset: 1}),
      Plot.text(stances, {x: "subcat", text: "subcat", fill: "white", stroke: "black", strokeWidth: 0.4}),
    ],
  }));
}
```

```js
// Passages.
if (docJson && docJson.passages.length > 0) {
  display(html`<h2>Passages (${docJson.passages.length})</h2>`);
  for (const p of docJson.passages) {
    const codings = p.codings.map((c) => html`
      <span class="pill">
        ${c.subcategory}: <strong>${c.stance}</strong> (${c.engagement_type})
      </span>
    `);
    display(html`
      <div class="card" id="p=${docId}-${p.id}" style="margin-bottom: 1rem;">
        <h3 style="margin-top: 0;">${p.id} · ${p.section}</h3>
        <blockquote style="border-left: 3px solid var(--theme-foreground-faintest); padding-left: 1rem; margin: 0.5rem 0;">
          ${p.excerpt}
        </blockquote>
        <div style="margin: 0.5rem 0;">${codings}</div>
        ${p.notes ? html`<details><summary>Coder notes</summary><p>${p.notes}</p></details>` : ""}
      </div>
    `);
  }
} else if (docJson) {
  display(html`<p>This document is coded as 0/18 — no engaged passages.</p>`);
}
```

```js
// Absences.
if (docJson && docJson.absences.length > 0) {
  display(html`
    <details style="margin-top: 2rem;">
      <summary><strong>Absences (${docJson.absences.length})</strong></summary>
      <ul>
        ${docJson.absences.map((a) => html`
          <li>${a.subcategory}${a.notes ? html` — ${a.notes}` : ""}</li>
        `)}
      </ul>
    </details>
  `);
}
```

<style>
.pill {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 999px;
  font-size: 0.85em;
  background: var(--theme-foreground-faintest);
  margin-right: 4px;
}
.pill-anthropic { background: #fee2e2; color: #991b1b; }
.pill-openai   { background: #dcfce7; color: #166534; }
.pill-google   { background: #dbeafe; color: #1e40af; }
.pill-genre    { background: #f3e8ff; color: #6b21a8; }
.pill-period   { background: #fef3c7; color: #92400e; }
.warning       { padding: 1rem; background: #fef3c7; border-left: 4px solid #f59e0b; }
</style>
