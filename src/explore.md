---
title: Explore
toc: false
---

# Explore the corpus

Filter passages by lab, subcategory, and free-text. Filters persist in the URL
— share the link to share your view.

```js
import * as Plot from "npm:@observablehq/plot";
import {Inputs} from "npm:@observablehq/inputs";
import {searchParams, setParams, getList} from "./components/url-state.js";
const passages = await FileAttachment("data/passages.csv").csv();
```

```js
// Read filters from URL.
const labFilter = getList(searchParams, "lab");
const subcatFilter = getList(searchParams, "subcat");
const queryRaw = searchParams.get("q") ?? "";
```

<div class="grid grid-cols-4" style="gap: 1rem; margin-bottom: 1rem;">

```js
const labInput = Inputs.checkbox(["anthropic", "openai", "google"], {
  label: "Lab",
  value: labFilter.length ? labFilter : ["anthropic", "openai", "google"],
});
labInput.addEventListener("input", () => {
  const v = labInput.value;
  setParams({lab: v.length === 3 ? null : v});
});
display(labInput);
```

```js
const SUBCATS = ["1.1","1.2","1.3","2.1","3.1","3.2","4.1","4.2","4.3","5.1","5.2","6.1","6.2","7.1","7.2","7.3","8.1","8.2"];
const subcatInput = Inputs.checkbox(SUBCATS, {
  label: "Subcategory",
  value: subcatFilter.length ? subcatFilter : SUBCATS,
});
subcatInput.addEventListener("input", () => {
  const v = subcatInput.value;
  setParams({subcat: v.length === SUBCATS.length ? null : v});
});
display(subcatInput);
```

```js
const queryInput = Inputs.text({
  label: "Free text",
  value: queryRaw,
  placeholder: "Substring match against title, excerpt, notes",
});
let queryTimer;
queryInput.addEventListener("input", () => {
  clearTimeout(queryTimer);
  queryTimer = setTimeout(() => setParams({q: queryInput.value || null}), 300);
});
display(queryInput);
```

```js
const clearAll = html`<button type="button" style="margin-top: 1.5rem;">Clear filters</button>`;
clearAll.addEventListener("click", () => setParams({lab: null, subcat: null, q: null}));
display(clearAll);
```

</div>

```js
// Apply filters.
const labSet = new Set(labFilter.length ? labFilter : ["anthropic", "openai", "google"]);
const subcatSet = new Set(subcatFilter.length ? subcatFilter : SUBCATS);
const q = queryRaw.trim().toLowerCase();
const filtered = passages.filter((p) =>
  labSet.has(p.lab)
  && subcatSet.has(p.subcategory)
  && (q === "" || (
    String(p.title).toLowerCase().includes(q)
    || String(p.excerpt).toLowerCase().includes(q)
    || String(p.notes ?? "").toLowerCase().includes(q)
  ))
);
```

**${filtered.length} of ${passages.length}** passage-codings match.

```js
display(Inputs.table(filtered, {
  columns: ["lab", "genre", "date", "title", "passage_id", "subcategory", "stance", "engagement_type", "section", "excerpt"],
  header: {
    lab: "Lab",
    genre: "Genre",
    date: "Date",
    title: "Document",
    passage_id: "Passage",
    subcategory: "Subcat",
    stance: "Stance",
    engagement_type: "Engagement",
    section: "Section",
    excerpt: "Excerpt",
  },
  format: {
    excerpt: (s) => (s && s.length > 140 ? s.slice(0, 137) + "…" : s ?? ""),
    title: (s, i) => {
      const row = filtered[i];
      return html`<a href="./document/${row.doc_id}">${s}</a>`;
    },
  },
  width: {
    lab: 80,
    genre: 60,
    date: 80,
    title: 200,
    passage_id: 60,
    subcategory: 60,
    stance: 110,
    engagement_type: 100,
    section: 140,
    excerpt: 360,
  },
  rows: 25,
  layout: "auto",
}));
```
