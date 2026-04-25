// Reactive URL-state plumbing for filter persistence and passage anchors.
//
// Pattern from the Observable Framework research brief (2026-04-25):
// `Generators.observe` wraps the browser's popstate / hashchange events
// into a Framework-reactive variable. Pages import `searchParams` and
// `hash`; mutations go through `setParam`, `setParams`, and `setHash`,
// which call history.pushState and trigger the listeners.

import {Generators} from "observablehq:stdlib";

// Reactive URLSearchParams — re-evaluates on popstate.
export const searchParams = Generators.observe((change) => {
  const emit = () => change(new URLSearchParams(location.search));
  addEventListener("popstate", emit);
  emit();
  return () => removeEventListener("popstate", emit);
});

// Reactive hash — re-evaluates on hashchange.
export const hash = Generators.observe((change) => {
  const emit = () => change(location.hash);
  addEventListener("hashchange", emit);
  emit();
  return () => removeEventListener("hashchange", emit);
});

// Mutate one query-string key. `value` may be a string, an array (joined
// with comma), or null/undefined to delete. AGORA-style: spaces left
// unencoded for human-readable share links.
export function setParam(key, value) {
  const params = new URLSearchParams(location.search);
  if (value == null || value === "" || (Array.isArray(value) && value.length === 0)) {
    params.delete(key);
  } else if (Array.isArray(value)) {
    params.set(key, value.join(","));
  } else {
    params.set(key, String(value));
  }
  pushQueryString(params);
}

// Bulk update from a record { key: value | array | null }.
export function setParams(updates) {
  const params = new URLSearchParams(location.search);
  for (const [key, value] of Object.entries(updates)) {
    if (value == null || value === "" || (Array.isArray(value) && value.length === 0)) {
      params.delete(key);
    } else if (Array.isArray(value)) {
      params.set(key, value.join(","));
    } else {
      params.set(key, String(value));
    }
  }
  pushQueryString(params);
}

// Set the hash fragment (e.g. "p=anthropic-sc-opus45-2025-11-P3").
// Empty string clears it.
export function setHash(value) {
  const newUrl = value
    ? `${location.pathname}${location.search}#${value}`
    : `${location.pathname}${location.search}`;
  history.pushState(null, "", newUrl);
  // pushState doesn't fire hashchange; emit it manually.
  dispatchEvent(new HashChangeEvent("hashchange"));
}

// Read a comma-joined param as an array (split, trim, drop empties).
export function getList(params, key) {
  const raw = params.get(key);
  if (!raw) return [];
  return raw.split(",").map((s) => s.trim()).filter(Boolean);
}

// --- internals ---

function pushQueryString(params) {
  const qs = params.toString();
  // Decode + → space and %20 → space for AGORA-style readable URLs.
  // (URLSearchParams percent-encodes spaces as +; we soften that.)
  const readable = qs.replace(/\+/g, " ");
  const newUrl = readable
    ? `${location.pathname}?${readable}${location.hash}`
    : `${location.pathname}${location.hash}`;
  history.pushState(null, "", newUrl);
  // pushState doesn't fire popstate; emit it manually so the reactive
  // searchParams generator picks up the change.
  dispatchEvent(new PopStateEvent("popstate"));
}
