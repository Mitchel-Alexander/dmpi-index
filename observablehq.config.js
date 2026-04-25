// See https://observablehq.com/framework/config for documentation.
export default {
  title: "Digital Minds Policy Index",
  root: "src",
  output: "dist",
  pages: [
    {name: "Overview", path: "/"},
    {name: "Explore", path: "/explore"},
    {name: "Methodology", path: "/methodology"},
  ],
  search: false,
  toc: true,
  pager: false,
  preserveExtension: false,
  preserveIndex: false,
  head: '<link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 16 16%22><text y=%2214%22 font-size=%2214%22>📑</text></svg>">',
  header: "",
  footer: "DMPI · pre-publication build · sources at <code>coding-data/</code>",
};
