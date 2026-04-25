---
title: Digital Minds Policy Index
toc: false
---

# Digital Minds Policy Index

An index of public policy positions taken by leading commercial AI labs —
**Anthropic, OpenAI, and Google** — on digital minds, AI consciousness, and
AI welfare. Built via [directed content analysis](./methodology) of the labs'
own public documents (system cards, constitutions/specs, safety reports,
research papers).

```js
const documents = FileAttachment("data/documents.csv").csv({typed: true});
const passages = FileAttachment("data/passages.csv").csv({typed: true});
```

```js
import * as Plot from "npm:@observablehq/plot";
```

## Corpus shape

```js
const labGenreMatrix = (() => {
  const cells = new Map();
  for (const d of documents) {
    const k = `${d.lab}|${d.genre}`;
    if (!cells.has(k)) cells.set(k, {lab: d.lab, genre: d.genre, total: 0, engaged: 0});
    const c = cells.get(k);
    c.total += 1;
    if (Number(d.engaged_count) > 0) c.engaged += 1;
  }
  return [...cells.values()].map((c) => ({...c, label: `${c.engaged}/${c.total}`}));
})();
```

<div class="grid grid-cols-3" style="gap: 1rem; margin-bottom: 2rem;">
  <div class="card">
    <h2>Lab × genre</h2>
    <h3>Documents engaged / total</h3>
    ${Plot.plot({
      marginLeft: 80,
      marginBottom: 50,
      width: 360,
      height: 220,
      x: {label: "Genre", domain: ["sc", "spec", "sr", "rp"]},
      y: {label: "Lab", domain: ["anthropic", "openai", "google"]},
      color: {scheme: "blues", legend: false},
      marks: [
        Plot.cell(labGenreMatrix, {x: "genre", y: "lab", fill: "engaged", inset: 1}),
        Plot.text(labGenreMatrix, {x: "genre", y: "lab", text: "label", fill: "white", stroke: "black", strokeWidth: 0.5}),
      ],
    })}
  </div>
  <div class="card">
    <h2>Subcategory engagement</h2>
    <h3>Documents with any non-absent stance</h3>
    ${Plot.plot({
      marginLeft: 50,
      width: 360,
      height: 320,
      x: {label: "Documents engaged"},
      y: {label: null},
      marks: [
        Plot.barX(subcatEngagement, {x: "engaged", y: "subcat", sort: {y: "x", reverse: true}, fill: "#3b82f6"}),
        Plot.text(subcatEngagement, {x: "engaged", y: "subcat", text: "engaged", textAnchor: "start", dx: 4}),
      ],
    })}
  </div>
  <div class="card">
    <h2>Period contrast</h2>
    <h3>Engagement before vs. after Nov 2024</h3>
    ${Plot.plot({
      marginLeft: 80,
      width: 360,
      height: 220,
      x: {label: "Documents engaged"},
      y: {label: "Lab", domain: ["anthropic", "openai", "google"]},
      color: {legend: true, domain: ["baseline", "post"], range: ["#94a3b8", "#3b82f6"]},
      marks: [
        Plot.barX(periodContrast, {x: "engaged", y: "lab", fill: "period", sort: {y: "x", reverse: true}}),
      ],
    })}
  </div>
</div>

```js
// Subcategory engagement: count documents where each subcat has a non-absent stance.
const SUBCATS = ["1.1","1.2","1.3","2.1","3.1","3.2","4.1","4.2","4.3","5.1","5.2","6.1","6.2","7.1","7.2","7.3","8.1","8.2"];
const subcatEngagement = SUBCATS.map((subcat) => ({
  subcat,
  engaged: documents.reduce((n, d) => n + (d[subcat] && d[subcat] !== "absent" ? 1 : 0), 0),
}));
```

```js
// Period contrast: documents engaged per (lab, period).
const periodContrast = (() => {
  const out = [];
  for (const lab of ["anthropic", "openai", "google"]) {
    for (const period of ["baseline", "post"]) {
      out.push({
        lab, period,
        engaged: documents.filter((d) => d.lab === lab && d.period === period && Number(d.engaged_count) > 0).length,
      });
    }
  }
  return out;
})();
```

## Starting points

Pre-filtered explore views grounded in the analytical findings.

<div class="grid grid-cols-3" style="gap: 1rem;">
  <a class="card" href="./explore?lab=anthropic,openai,google" style="text-decoration: none; color: inherit;">
    <h2>How do labs differ?</h2>
    <p>Cross-lab divergence on agency, welfare, and consciousness — Anthropic enters via patienthood, Google via moral agency, OpenAI abstains from both.</p>
  </a>
  <a class="card" href="./explore?subcat=1.1,2.1,5.1,6.1,6.2" style="text-decoration: none; color: inherit;">
    <h2>Welfare and consciousness</h2>
    <p>Where does the welfare apparatus appear? Anthropic-exclusive in the core corpus; partial extensions in institutional research.</p>
  </a>
  <a class="card" href="./explore?subcat=3.1,3.2,4.2" style="text-decoration: none; color: inherit;">
    <h2>What about agency?</h2>
    <p>Agency is the cross-lab fault line. Anthropic denies → investigates → acknowledges. Google centres moral agency. OpenAI sets agency aside.</p>
  </a>
</div>

## At a glance

<div class="grid grid-cols-4" style="gap: 1rem;">
  <div class="card"><h2>${documents.length}</h2><h3>documents coded</h3></div>
  <div class="card"><h2>${passages.length}</h2><h3>passage-codings</h3></div>
  <div class="card"><h2>3</h2><h3>labs</h3></div>
  <div class="card"><h2>18</h2><h3>subcategories</h3></div>
</div>

---

```js
display(html`
  <p>DMPI is a pre-publication build. See <a href="./methodology">Methodology</a>
  for the codebook, sources, and citation. Source data is downloadable as
  <a href="${FileAttachment("data/passages.csv").href}">passages.csv</a> and
  <a href="${FileAttachment("data/documents.csv").href}">documents.csv</a>.</p>
`);
```
