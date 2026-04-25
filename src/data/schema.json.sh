#!/usr/bin/env bash
# Pass-through loader: serve the synced Pydantic-derived schema.
set -euo pipefail
cat "$(dirname "$0")/../../coding-data/schema.json"
