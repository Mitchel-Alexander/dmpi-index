---
title: Codebook
toc: true
---

# Codebook v0.2

The DMPI codebook is the formal coding instrument. It defines, for each of
the 18 subcategories, the working definition, anchor passages, decision rule,
keyword tiers, and stance guidance. Sourced from `ref-codebook.md` in the
DMPI vault; rendered here for the critic loop.

```js
import {marked} from "npm:marked";
const codebookText = await FileAttachment("data/codebook.txt").text();
```

```js
// Render the markdown via marked, then post-process: add anchor IDs to
// every H4 that starts with a subcategory code (e.g. "#### 1.1 Phenomenal
// consciousness" → <h4 id="sc-1-1">1.1 Phenomenal consciousness</h4>).
// The grid row labels link here via #sc-X-Y.
const renderer = new marked.Renderer();
const baseHeading = renderer.heading.bind(renderer);
renderer.heading = function (text, level, raw) {
  if (level === 4) {
    const m = String(raw).match(/^(\d+)\.(\d+)\s+/);
    if (m) {
      const id = `sc-${m[1]}-${m[2]}`;
      return `<h4 id="${id}"><a class="codebook-anchor" href="#${id}">¶</a> ${text}</h4>\n`;
    }
  }
  return baseHeading(text, level, raw);
};

const codebookHtml = marked(codebookText, {renderer, mangle: false, headerIds: false});
const container = document.createElement("div");
container.className = "codebook-rendered";
container.innerHTML = codebookHtml;
display(container);
```

<style>
.codebook-rendered { line-height: 1.55; }
.codebook-rendered h2 { margin-top: 2.5rem; padding-top: 0.5rem; border-top: 1px solid var(--theme-foreground-faintest); }
.codebook-rendered h3 { margin-top: 2rem; }
.codebook-rendered h4 {
  margin-top: 2rem;
  padding: 0.5rem 0.75rem;
  background: var(--theme-background-alt);
  border-left: 3px solid var(--theme-foreground-focus);
  border-radius: 0 4px 4px 0;
  scroll-margin-top: 4rem;
}
.codebook-rendered h4 a.codebook-anchor {
  color: var(--theme-foreground-muted);
  text-decoration: none;
  margin-right: 0.4em;
  font-weight: normal;
}
.codebook-rendered h4 a.codebook-anchor:hover { color: var(--theme-foreground-focus); }
.codebook-rendered table {
  border-collapse: collapse;
  margin: 1rem 0;
  font-size: 0.92em;
}
.codebook-rendered table th, .codebook-rendered table td {
  border: 1px solid var(--theme-foreground-faintest);
  padding: 4px 8px;
  text-align: left;
  vertical-align: top;
}
.codebook-rendered table th { background: var(--theme-background-alt); }
.codebook-rendered blockquote {
  border-left: 3px solid var(--theme-foreground-faintest);
  margin: 0.5rem 0;
  padding: 0.25rem 0.75rem;
  color: var(--theme-foreground-muted);
}
.codebook-rendered code {
  background: var(--theme-background-alt);
  padding: 1px 4px;
  border-radius: 3px;
  font-size: 0.92em;
}
</style>
