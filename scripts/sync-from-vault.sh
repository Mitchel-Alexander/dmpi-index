#!/usr/bin/env bash
# Sync the canonical coding artefacts from the DMPI vault into this repo's
# coding-data/ directory. The vault is on Google Drive; this repo is the
# deploy snapshot. Run before every meaningful deploy.
#
# Resolves the vault location relative to this script's parent dir
# (projects/dmpi/dmpi-index/scripts/ → projects/dmpi/coding/).
#
# After sync, commit coding-data/ so the deploy is deterministic.

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
VAULT_DMPI="$(cd "$REPO_ROOT/.." && pwd)"
VAULT_CODING="$VAULT_DMPI/coding"
DEST="$REPO_ROOT/coding-data"

if [[ ! -d "$VAULT_CODING" ]]; then
  echo "Vault coding/ directory not found at: $VAULT_CODING" >&2
  echo "This script assumes dmpi-index/ lives inside projects/dmpi/." >&2
  exit 1
fi

mkdir -p "$DEST"

echo "==> Syncing JSONs"
rsync -a --delete "$VAULT_CODING/data/" "$DEST/data/"

echo "==> Syncing codebook module"
cp "$VAULT_CODING/_codebook.py" "$DEST/_codebook.py"

echo "==> Syncing JSON Schema"
cp "$VAULT_CODING/schema.json" "$DEST/schema.json"

echo "==> Syncing index.csv"
cp "$VAULT_CODING/index.csv" "$DEST/index.csv"

echo "==> Syncing codebook (ref-codebook.md)"
cp "$VAULT_DMPI/ref-codebook.md" "$DEST/codebook.md"

echo "==> Syncing methodology notes (finding-methodology-notes.md)"
cp "$VAULT_DMPI/finding-methodology-notes.md" "$DEST/methodology-notes.md"

# Stamp the sync time so the methodology page can show last-synced.
date -u +"%Y-%m-%dT%H:%M:%SZ" > "$DEST/.last-synced"

n_json=$(ls -1 "$DEST/data"/*.json 2>/dev/null | wc -l | tr -d ' ')
n_index=$(($(wc -l < "$DEST/index.csv") - 1))

echo
echo "Synced: $n_json JSONs, $n_index index.csv rows."
echo "Stamp: $(cat "$DEST/.last-synced")"
echo
echo "Next: review the diff, then commit coding-data/ before deploy."
