#!/usr/bin/env bash
# Pass-through: serve the .last-synced timestamp written by sync-from-vault.sh.
set -euo pipefail
F="$(dirname "$0")/../../coding-data/.last-synced"
if [ -f "$F" ]; then cat "$F"; else echo "unknown"; fi
