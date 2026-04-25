"""
Shared codebook constants for DMPI coding pipeline.

Single source of truth for the 18-subcategory variable-stance-scale system.
Imported by validate_coding.py, generate_index.py, and (later) markdown_to_json.py.

If the codebook structure changes (subcategories added/removed/renamed,
scale-type assignments changed, schema enums extended), update this module
and bump CODEBOOK_VERSION below.
"""

# 18 subcategories in the current system. Order matters for index.csv columns.
SUBCATEGORIES = [
    "1.1", "1.2", "1.3",
    "2.1",
    "3.1", "3.2",
    "4.1", "4.2", "4.3",
    "5.1", "5.2",
    "6.1", "6.2",
    "7.1", "7.2", "7.3",
    "8.1", "8.2",
]
ALL_SUBCATS = set(SUBCATEGORIES)
TOTAL_SUBCATEGORIES = len(SUBCATEGORIES)  # 18

# Scale-type assignments — see ref-codebook.md §27.
THREE_STATE_SUBCATS = {"4.2", "4.3", "6.1", "7.1", "7.2", "7.3"}
FULL_SCALE_SUBCATS = ALL_SUBCATS - THREE_STATE_SUBCATS  # 12 subcats

# Valid stance values per scale type (document-level, includes "absent").
FULL_SCALE_STANCES = {"absent", "denied", "acknowledged", "investigated", "affirmed"}
THREE_STATE_STANCES = {"absent", "present", "denied"}

# Valid stance values at the passage level (excludes "absent" — absence is
# document-level only, recorded in the absences array).
FULL_SCALE_PASSAGE_STANCES = FULL_SCALE_STANCES - {"absent"}
THREE_STATE_PASSAGE_STANCES = THREE_STATE_STANCES - {"absent"}

# Schema enums — see ref-data-schema.md.
LABS = {"anthropic", "openai", "google"}
GENRES = {"sc", "spec", "sr", "rp"}
CORPORA = {"core", "expanded", "0.3-institutional"}
PERIODS = {"baseline", "post"}
ENGAGEMENT_TYPES = {"investigative", "directive", "prospective"}
SOURCE_METHODS = {"pdftotext", "html-to-markdown", "manual-transcription", "copy-paste", "webfetch"}

# Audit-trail allowed values.
CODED_BY_VALUES = {"claude", "mitchel"}  # extensible for 1.0 multi-model pass
REVIEWED_BY_VALUES = {"mitchel"}  # extensible
KNOWN_CODEBOOK_VERSIONS = {"0.1", "0.2"}


# ---------------------------------------------------------------------------
# Markdown label → JSON enum mappings.
#
# Used by markdown_to_json.py to translate the human-readable labels in
# Document metadata tables into the schema enum values above. Mappings are
# case-insensitive on input (parser lower-cases the markdown label before
# lookup). Single source of truth; do not duplicate in the parser.
#
# To extend: add the new label here AND the corresponding enum value to the
# matching set above. Schema doc (ref-data-schema.md) and ref-parser-spec
# §3.3 should also be updated.
# ---------------------------------------------------------------------------

LAB_LABELS = {
    "anthropic": "anthropic",
    "openai": "openai",
    "google": "google",
    "google deepmind": "google",
    "deepmind": "google",
}

GENRE_LABELS = {
    "system card / model card": "sc",
    "system card": "sc",
    "model card": "sc",
    "constitution / spec": "spec",
    "constitution": "spec",
    "spec": "spec",
    "safety report / rsp": "sr",
    "safety report": "sr",
    "rsp": "sr",
    "research paper": "rp",
    "institutional position research": "rp",
}

CORPUS_LABELS = {
    "core": "core",
    "expanded": "expanded",
    "0.3 test corpus": "0.3-institutional",
    "0.3.0 test corpus": "0.3-institutional",
    "0.3.1 test corpus": "0.3-institutional",
    "0.3.2 test corpus": "0.3-institutional",
    "0.3.1 openai institutional corpus": "0.3-institutional",
}

PERIOD_LABELS = {
    "baseline": "baseline",
    "post-formalisation": "post",
    "post-formalization": "post",  # tolerate US spelling
    "post": "post",
}


def map_label(label: str, mapping: dict[str, str], field_name: str) -> str:
    """Look up a markdown label in a mapping; raise ValueError on miss."""
    key = label.strip().lower()
    if key not in mapping:
        raise ValueError(
            f"Unknown {field_name} label {label!r}; "
            f"expected one of: {sorted(set(mapping.keys()))}"
        )
    return mapping[key]


def stances_for(subcat: str) -> set[str]:
    """Return the set of valid document-level stance values for a subcategory."""
    if subcat in THREE_STATE_SUBCATS:
        return THREE_STATE_STANCES
    if subcat in ALL_SUBCATS:
        return FULL_SCALE_STANCES
    raise ValueError(f"Unknown subcategory: {subcat!r}")


def passage_stances_for(subcat: str) -> set[str]:
    """Return the set of valid passage-level stance values for a subcategory."""
    if subcat in THREE_STATE_SUBCATS:
        return THREE_STATE_PASSAGE_STANCES
    if subcat in ALL_SUBCATS:
        return FULL_SCALE_PASSAGE_STANCES
    raise ValueError(f"Unknown subcategory: {subcat!r}")


def is_three_state(subcat: str) -> bool:
    return subcat in THREE_STATE_SUBCATS


def scale_type_label(subcat: str) -> str:
    return "three-state" if subcat in THREE_STATE_SUBCATS else "full-scale"
