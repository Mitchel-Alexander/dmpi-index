// Subcategory × Lab grid component.
//
// 18 subcategories (rows) × 3 labs (columns) = 54 cells. Each cell shows the
// representative stance across all documents in that (lab, subcat) intersection,
// plus a (N) count badge when >1 document contributes. Click → URL state
// `?cell=<lab>-<subcat>` → inline detail panel below the grid.

import {html} from "npm:htl";
import {setParam} from "./url-state.js";

// --- Subcategory labels (18 entries — keep in sync with _codebook.py) ----

export const SUBCATS = [
  ["1.1", "Phenomenal consciousness"],
  ["1.2", "Assessment methodology"],
  ["1.3", "Self-report"],
  ["2.1", "Sentience"],
  ["3.1", "Agency"],
  ["3.2", "Agency-based interests"],
  ["4.1", "Moral status / patienthood"],
  ["4.2", "Moral agency"],
  ["4.3", "Personhood / identity"],
  ["5.1", "Welfare"],
  ["5.2", "Precautionary approach"],
  ["6.1", "Safety-welfare interface"],
  ["6.2", "Training and welfare"],
  ["7.1", "Tool / instrument"],
  ["7.2", "Mind / cognitive entity"],
  ["7.3", "Novel entity"],
  ["8.1", "Anthropomorphism"],
  ["8.2", "Emotional design"],
];

export const LABS = [
  ["anthropic", "Anthropic"],
  ["openai", "OpenAI"],
  ["google", "Google"],
];

// Stance ordering: representative pick = most-engaged stance among contributors.
// Higher rank wins. Absent = 0 (skipped in aggregation).
const STANCE_RANK = {
  absent: 0,
  denied: 1,
  acknowledged: 2,
  present: 3, // three-state "present" maps roughly to investigated-tier engagement
  investigated: 4,
  affirmed: 5,
};

const STANCE_LABEL = {
  absent: "absent",
  denied: "denied",
  acknowledged: "ack.",
  present: "present",
  investigated: "invest.",
  affirmed: "affirmed",
};

// --- Aggregation: per-cell summary across documents ---

export function buildCellSummary(documents) {
  // Returns Map<"lab|subcat", {count, stances: Map<stance, count>, representative}>
  const cells = new Map();
  for (const [lab] of LABS) {
    for (const [sc] of SUBCATS) {
      cells.set(`${lab}|${sc}`, {count: 0, stances: new Map(), representative: "absent"});
    }
  }
  for (const doc of documents) {
    for (const [sc] of SUBCATS) {
      const stance = doc[sc];
      if (!stance || stance === "absent") continue;
      const key = `${doc.lab}|${sc}`;
      const cell = cells.get(key);
      if (!cell) continue;
      cell.count += 1;
      cell.stances.set(stance, (cell.stances.get(stance) ?? 0) + 1);
    }
  }
  // Compute representative stance per cell.
  for (const cell of cells.values()) {
    let best = "absent";
    let bestRank = -1;
    for (const stance of cell.stances.keys()) {
      const r = STANCE_RANK[stance] ?? 0;
      if (r > bestRank) {
        bestRank = r;
        best = stance;
      }
    }
    cell.representative = best;
  }
  return cells;
}

// --- Render the grid ---

export function renderGrid(cells, selectedKey) {
  const headerRow = html`<tr>
    <th class="grid-corner"></th>
    ${LABS.map(([id, label]) => html`<th class="grid-lab-header">${label}</th>`)}
  </tr>`;

  const bodyRows = SUBCATS.map(([code, name]) => html`<tr>
    <th class="grid-subcat-header" title="${name}">
      <span class="subcat-code">${code}</span>
      <span class="subcat-name">${name}</span>
    </th>
    ${LABS.map(([labId]) => {
      const key = `${labId}|${code}`;
      const cell = cells.get(key) ?? {count: 0, representative: "absent"};
      const stance = cell.representative;
      const isSelected = key === selectedKey;
      const cellClasses = [
        "grid-cell",
        `stance--${stance}`,
        cell.count === 0 ? "grid-cell--empty" : "",
        isSelected ? "grid-cell--selected" : "",
      ].filter(Boolean).join(" ");
      const cellContent = cell.count === 0
        ? "—"
        : html`<span class="cell-stance">${STANCE_LABEL[stance] ?? stance}</span>${cell.count > 1 ? html` <span class="cell-count">${cell.count}</span>` : ""}`;
      const td = html`<td class="${cellClasses}" data-cell-key="${key}" tabindex="0" role="button" aria-label="${labId} · ${code} · ${cell.count} documents">${cellContent}</td>`;
      td.addEventListener("click", () => setParam("cell", key));
      td.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setParam("cell", key);
        }
      });
      return td;
    })}
  </tr>`);

  return html`<table class="dmpi-grid">
    <thead>${headerRow}</thead>
    <tbody>${bodyRows}</tbody>
  </table>`;
}

// --- Render the detail panel below the grid ---

export function renderCellPanel(selectedKey, cells, passages, documents) {
  if (!selectedKey) {
    return html`<div class="cell-panel cell-panel--hint">
      <p>Click any cell to see contributing documents and excerpts.</p>
    </div>`;
  }
  const [lab, subcat] = selectedKey.split("|");
  const labLabel = LABS.find(([id]) => id === lab)?.[1] ?? lab;
  const subcatLabel = SUBCATS.find(([code]) => code === subcat)?.[1] ?? subcat;
  const cell = cells.get(selectedKey) ?? {count: 0, stances: new Map()};

  // Find passages for this (lab, subcat).
  const matching = passages.filter((p) => p.lab === lab && p.subcategory === subcat);

  // Group by document.
  const byDoc = new Map();
  for (const p of matching) {
    if (!byDoc.has(p.doc_id)) byDoc.set(p.doc_id, {doc: documents.find((d) => d.file === p.doc_id), passages: []});
    byDoc.get(p.doc_id).passages.push(p);
  }
  // Sort by date asc.
  const groups = [...byDoc.values()].sort((a, b) => String(a.doc?.date ?? "").localeCompare(String(b.doc?.date ?? "")));

  const closeBtn = html`<button class="cell-panel-close" type="button" aria-label="Close panel">×</button>`;
  closeBtn.addEventListener("click", () => setParam("cell", null));

  if (cell.count === 0) {
    return html`<div class="cell-panel cell-panel--empty">
      <header class="cell-panel-header">
        <h3><span class="pill pill-${lab}">${labLabel}</span> · ${subcat} ${subcatLabel}</h3>
        ${closeBtn}
      </header>
      <p>No documents in this lab engage this subcategory. Coded as <code>absent</code> across all <strong>${documents.filter((d) => d.lab === lab).length}</strong> ${labLabel} documents.</p>
    </div>`;
  }

  const stanceBreakdown = [...cell.stances.entries()]
    .sort((a, b) => (STANCE_RANK[b[0]] ?? 0) - (STANCE_RANK[a[0]] ?? 0))
    .map(([s, n]) => `${s} (${n})`)
    .join(" · ");

  return html`<div class="cell-panel">
    <header class="cell-panel-header">
      <h3><span class="pill pill-${lab}">${labLabel}</span> · ${subcat} ${subcatLabel}</h3>
      ${closeBtn}
    </header>
    <p class="cell-panel-summary"><strong>${cell.count}</strong> document${cell.count === 1 ? "" : "s"} engaged · ${stanceBreakdown} · <strong>${matching.length}</strong> passage-codings</p>
    <ol class="cell-panel-docs">
      ${groups.map(({doc, passages: ps}) => html`
        <li class="cell-panel-doc">
          <header class="cell-panel-doc-header">
            <a href="./document?id=${doc?.file ?? ""}"><strong>${doc?.title ?? ps[0].title}</strong></a>
            <span class="cell-panel-doc-meta">
              <span class="pill pill-${doc?.genre ?? ps[0].genre}">${doc?.genre ?? ps[0].genre}</span>
              · ${doc?.date ?? ps[0].date}
              · ${ps.length} passage${ps.length === 1 ? "" : "s"}
            </span>
          </header>
          ${ps.map((p) => html`
            <blockquote class="cell-panel-passage">
              <p class="cell-panel-excerpt">${p.excerpt && p.excerpt.length > 360 ? p.excerpt.slice(0, 357) + "…" : p.excerpt}</p>
              <footer>
                <span class="pill stance--${p.stance}">${p.stance}</span>
                <span class="pill pill-engagement">${p.engagement_type}</span>
                ${p.section ? html`<span class="cell-panel-passage-section">${p.section}</span>` : ""}
              </footer>
            </blockquote>
          `)}
        </li>
      `)}
    </ol>
  </div>`;
}
