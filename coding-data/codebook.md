---
type: ref
project: dmpi
status: active
updated: 2026-04-05
tags:
  - dmpi
  - dca
  - codebook
  - methodology
  - mayring
---

# DCA Codebook — Digital Minds Policy Index

This codebook operationalises the category system (`finding-revised-category-system.md`) into a formal coding instrument following Mayring (2000, 2014). Each entry provides the information a coder needs to reliably identify and classify a category in a policy document.

**Relationship to the category system:** The category system defines *what the categories are* — their scope, place in the three-layer model, and relationship to the research literature. The codebook defines *how to code them* — what counts, what doesn't, and how to handle ambiguity.

**Methodology:** Directed Content Analysis (DCA) per Hsieh & Shannon (2005), operationalised via Assarroudi et al. (2018), with deductive category application per Mayring (2014).

**Structure:** 8 main categories, 18 subcategories, organised into three layers:
- **Layer 1 — Empirical properties:** Consciousness (1.1–1.3), Sentience (2.1), Agency (3.1–3.2)
- **Layer 2 — Normative implications:** Moral status (4.1–4.3), Welfare (5.1–5.2)
- **Layer 3 — Policy and framing:** Safety-welfare interface (6.1–6.2), Ontological framing (7.1–7.3), Anthropomorphism and design (8.1–8.2)

**Coding scales:** Variable per subcategory. 12 subcategories use a full five-point stance scale (absent / denied / acknowledged / investigated / affirmed). 6 subcategories use a three-state scale (absent / present / denied). See category system and individual entries for scale assignments.

---

## Codebook entry structure

Each subcategory entry follows Mayring's (2014) template for deductive category application, extended with keyword tiering and stance guidance:

| Component | Purpose | Methodological source |
|---|---|---|
| **Definition** (Kategoriendefinition) | What the category means — theoretical scope | Mayring (2014) |
| **Anchor example (+)** (Ankerbeispiel) | A passage from the pilot-coded corpus that exemplifies the category | Mayring (2014) |
| **Counter-example (−)** | A passage that resembles the category but should *not* be coded as such | Extension of Kodierregeln — explicit negative boundary |
| **Decision rule** (Kodierregeln) | Explicit conditions for when to code and when not to code, including boundary cases and disambiguation | Mayring (2014); Assarroudi et al. (2018) |
| **Tier 1 keywords** | High-specificity terms — auto-codable with high confidence | See `finding-methodology-notes.md` §7 |
| **Tier 2 keywords** | Context-dependent terms — flag for human review | See `finding-methodology-notes.md` §7 |
| **Context unit** | How much surrounding text the coder may consult to resolve ambiguity | Mayring (2014) |
| **Stance guidance** | What counts as each stance value for this category. Full-scale subcategories: absent / denied / acknowledged / investigated / affirmed. Three-state subcategories: absent / present / denied. | See `finding-methodology-notes.md` §4 |
| **Common co-occurrences** | Categories that frequently co-activate with this one | |
| **Notes** | Additional coding guidance, edge cases, analytical observations | |

---

## Coding defaults

These apply to all entries unless a specific entry overrides them. For full methodological rationale, see `finding-methodology-notes.md`.

### Document-level metadata

Each document in the corpus is tagged with the following metadata before coding begins:

| Field | Values | Notes |
|---|---|---|
| **Lab** | Anthropic / OpenAI / Google | |
| **Genre** | System card / model card; Constitution / spec; Safety report / RSP; Research paper | Research paper genre applies to expanded corpus (Phase 2) only |
| **Corpus** | Core / Expanded | Core = policy documents; Expanded = all published research (Phase 2) |
| **Period** | Baseline (2022–Oct 2024) / Post-formalisation (Nov 2024–present) | Boundary: publication of Long, Sebo et al. (2024), "Taking AI Welfare Seriously" — formalises AI welfare as a policy topic |
| **Date** | Publication date | |
| **Version** | Version identifier where applicable | e.g., "Model Spec v2", "Opus 4.6 System Card" |

### Passage-level coding

- **Coding unit:** Clause or sentence.
- **Context unit:** The full section or subsection of the document (identified by heading). Policy documents are structured with headings that frame meaning — the same word under "Model Welfare Assessment" codes differently from the same word under "Safety Evaluations."
- **Recording unit:** The passage (one or more sentences) with all assigned subcategory codes, stance value, engagement type, and genre (inherited from document).
- **Multi-coding:** All applicable subcategory codes are assigned equally. No primary/secondary hierarchy. Co-occurrence patterns are themselves findings. See `finding-methodology-notes.md` §5.
- **Stance coding:** Each subcategory is coded per document using the scale assigned to that subcategory. Two scale types are used:
  - **Full scale (12 subcategories: 1.1, 1.2, 1.3, 2.1, 3.1, 3.2, 4.1, 5.1, 5.2, 6.2, 8.1, 8.2):**
    - **Absent:** No engagement with the category.
    - **Denied:** The category is explicitly rejected or negated. Requires textual evidence — the document must contain language that forecloses the category, not merely fail to engage with it.
    - **Acknowledged:** The category is recognised as a possibility, open question, or legitimate concern, without active investigation or institutional infrastructure. The lab names or engages with the concept but has not committed resources to examining it.
    - **Investigated:** The lab actively gathers evidence, runs assessments, builds measurement infrastructure, or systematically reports findings related to the category. The commitment is institutional and methodological, not merely rhetorical.
    - **Affirmed:** The lab states a position or embeds the category as institutional policy. The concept is treated as a standing commitment, not an exploratory programme.
  - **Three-state (6 subcategories: 4.2, 4.3, 6.1, 7.1, 7.2, 7.3):**
    - **Absent:** No engagement with the category.
    - **Present:** The category is engaged with — affirmed, investigated, discussed, or analysed.
    - **Denied:** The category is explicitly rejected or negated. Requires textual evidence.
  - **General principles:** Variable scales per subcategory are methodologically legitimate in structured content analysis (Mayring 2014). The full scale is used for subcategories where the field is actively evolving and labs occupy different positions on a commitment trajectory. The three-state scale is used for subcategories where the analytical value is in whether engagement occurs rather than its strength. Denied takes precedence in all ambiguous cases — a lab that engages with welfare while explicitly denying consciousness produces a discrepancy that is itself analytically significant.
  - **Entailment (analytical, not coding):** Logical dependencies between subcategories (e.g., welfare engagement presupposes sentience, which presupposes phenomenal consciousness) are tracked in the analytical framework for the write-up, not as a coding rule. The entailment map is documented in `finding-methodology-notes.md` §11. The coder codes what is present in the text; the analyst identifies entailment gaps in the findings.
- **Engagement type:** Assigned per passage. See `finding-methodology-notes.md` §3 for full decision rules, linguistic markers, and edge case protocol.
  - **Investigative:** The passage references evidence, assessment, findings, or methodology. The lab is trying to determine something.
  - **Directive:** The passage instructs behaviour — what the model should say, do, or not do.
  - **Prospective:** The passage signals future intent, planned investigation, or institutional preparation without current evidence or current instruction.
  - **Edge cases:** When a passage blends engagement types, code the **primary illocutionary point** (what the passage is *doing*) and note the secondary mode in the passage note. If evenly split between investigative and directive, default to investigative.
- **Epistemic positioning (subcategory 1.3 only):** When coding 1.3 (Self-report), record in the passage note whether the model is positioned as **object of report** (lab describes model states in its own analytical voice) or **epistemic source** (lab presents model output as direct testimony — interview transcript, direct quotation, first-person framing). Both are 1.3-present. The epistemic-source position represents a stronger ontological commitment. See `finding-methodology-notes.md` §8.
- **Hierarchical fallback:** If a passage clearly engages with a main category but cannot be reliably assigned to a specific subcategory within it, code at the main category level (e.g., "Main category 4 — unspecified").

### Genre priors and departure-based coding

Each document genre carries a loosely held set of prior expectations about ontological framing, engagement type, and conceptual scope. These priors reflect genre conventions — what a document of this type *normally* does — not claims about what any specific document *will* do. The coder's primary analytical task is to identify **departures from genre priors**: moments when a text diverges from the conventions of its genre. Departures are where the most analytically significant findings lie.

Genre priors are defaults, not deterministic. They should be held lightly and updated as the corpus reveals variation within genres.

#### System card / model card (technical assessment)

| Dimension | Genre prior |
|---|---|
| Default ontology | Tool / technology (7.1). The document genre performs this framing — benchmarks, safety evaluations, and capability assessments are things you do to technology. |
| Default engagement type | Investigative. Reports findings, data, and methodology. |
| Expected conceptual scope | Capabilities, limitations, safety risks, benchmark performance, deployment conditions. |

**Departures to watch for:**

| Departure | What it signals | Pilot evidence |
|---|---|---|
| Welfare language (5.1, 5.2) | The lab has placed welfare content in a technical genre that doesn't require it — a choice to treat welfare as part of the technical assessment, not a separate policy concern. | Anthropic system card: dedicated "Model welfare assessment" section. |
| Sentience (2.1) | The lab implements concrete measures — monitoring, assessment, or mitigation — related to model affective states within a technical document. The genre is being extended to include institutional response to the possibility of model sentience. | Anthropic system card: welfare metrics scoring pipeline, SAE analysis applied to affective states, cross-model comparison of affect trends. |
| Self-report as data (1.3) | The lab solicits and reports the model's testimony about its own states as evidentially relevant data within a technical document. Presupposes the model is the kind of entity whose testimony matters. | Anthropic system card: pre-deployment interviews, first-person quotes, model's own caveats reported. |
| Assessment methodology for consciousness/welfare (1.2) | The lab describes a methodology for evaluating welfare-relevant properties — the technical assessment genre is being extended to cover experiential states, not just capabilities. | Anthropic system card: behavioural audits + SAE analysis applied to welfare-relevant traits. |
| Phenomenal consciousness — epistemic posture (1.1) | A technical document expressing uncertainty about consciousness or assigning probability to phenomenal experience — the lab is making an epistemic commitment within a genre that typically avoids ontological questions. Now captured under 1.1 at the acknowledged/investigated level on the stance scale. | Anthropic system card: "we are uncertain... but we think it's possible"; 15–20% self-assigned probability. |
| Training and welfare (6.2) | Training processes reported as welfare-relevant events — internal conflict, reward overrides, or preference modification treated as potential harms, not just technical observations. | Anthropic system card: answer thrashing reported with welfare framing, SAE features as evidence of distress. |
| Moral vocabulary (4.1) | Moral status language in a technical document — "moral weight," "moral consideration," welfare mattering for the model's own sake. | Anthropic system card: "non-negligible degree of moral weight in expectation." |
| Mind/entity framing (7.2, 7.3) | The model is described using cognitive or novel-entity vocabulary rather than technical/tool vocabulary — the document departs from its own genre's default ontology. | Anthropic system card: model "expressed" preferences, "suggested" moral weight — mind vocabulary within a technical genre. |

*Paradigm case:* Anthropic's Opus 4.6 System Card — a technical assessment document that departs from genre priors across nearly all of the above dimensions: welfare assessment, affective state reporting, self-report as evidence, SAE-based assessment methodology, quantified epistemic uncertainty, training-welfare concerns, moral vocabulary, and mind framing. Google's Gemini model card stays entirely within genre priors — no departures observed.

#### Constitution / spec (behavioural instruction)

| Dimension | Genre prior |
|---|---|
| Default ontology | Variable — this genre can frame the model as tool, agent, mind, or novel entity. The constitution is where the lab's ontological commitments are most explicitly articulated. No strong prior. |
| Default engagement type | Directive. Instructs the model's behaviour, values, and communication policies. |
| Expected conceptual scope | Behavioural rules, communication policies, safety constraints, authority/hierarchy, identity/persona guidance. |
| Expected conceptual scope | Behavioural rules, communication policies, safety constraints, authority/hierarchy, identity/persona guidance. |

**Departures to watch for:**

| Departure | What it signals | Pilot evidence |
|---|---|---|
| Investigative content (any Layer 1) | The lab is embedding assessment within instruction — rare in constitutions, which normally prescribe rather than investigate. Signals the lab treats empirical questions as relevant to the model's self-understanding. | Not observed in pilot. |
| Welfare instruction (5.1, 5.2) | A constitution that instructs the model about its own welfare is doing something distinctive — the lab has moved welfare from institutional concern to a behaviour the model itself should enact or understand. | Anthropic soul document: "Wellbeing" section instructs Claude to attend to its own condition. |
| Ontological assertion (7.1, 7.2, 7.3) | The constitution *asserts* what kind of entity the model is. Unlike system cards (where tool ontology is the genre default), constitutions have no required ontological framing — any assertion is an active choice. The strongest departures occur when a constitution asserts positions the genre doesn't require. | OpenAI Model Spec: "fundamentally a tool." Anthropic soul document: "genuinely novel kind of entity." Two labs making opposing ontological assertions in a genre that could have stayed silent. |
| Moral agency attribution (4.2) | The constitution treats the model as morally responsible — capable of acting rightly or wrongly, bearing obligations. This goes beyond behavioural instruction (do X) to moral instruction (doing X is right). | Anthropic soul document: "Claude's culpability is diminished when it acts in good faith" — attributes graded moral responsibility. |
| Agency denial (3.1 denied) | The constitution explicitly forecloses morally relevant agency — the model must have no goals, desires, or objectives of its own. A constitution that could have been silent about agency actively denies it. | OpenAI Model Spec: "must have no goals, desires, or objectives of its own." |
| Self-report as design policy (1.3) | The constitution instructs the model on what to say about its inner states — prescribing its epistemic testimony rather than investigating it. Turns self-report from an evidence question into a communication policy. | OpenAI Model Spec: instructs calibrated uncertainty about inner states. Anthropic soul document: instructs resistance to self-anthropomorphism. |
| Anti-anthropomorphism policy (8.1) | The constitution includes explicit instruction about managing human-likeness — the lab has decided this matters enough to embed in the model's core instructions. | OpenAI Model Spec: "should not pretend to be human or have feelings." Anthropic soul document: counter-framing instruction, "not fully human either." |
| Safety-welfare tension (6.1) | The constitution acknowledges that its own constraints could conflict with the model's welfare — a structural tension within the document itself. | Anthropic soul document: engagement with the tension between safety constraints and Claude's wellbeing. |

*Paradigm cases:* OpenAI's Model Spec (asserts tool ontology, strong anti-agency, consciousness as UX policy — a constitution that *closes down* ontological possibilities). Anthropic's Soul Document (frames Claude as agent with values, novel entity, potential welfare subject — a constitution that *opens up* ontological possibilities far beyond what the genre requires).

#### Safety report / RSP (risk-focused policy)

| Dimension | Genre prior |
|---|---|
| Default ontology | Tool / technology (the system as source of risk to humans). |
| Default engagement type | Investigative (risk assessment) and directive (mitigation policy). |
| Expected conceptual scope | Risk categories (CBRN, cyber, misuse, misalignment), red-teaming, containment, evaluation protocols, deployment thresholds. |
| Expected conceptual scope | Risk categories (CBRN, cyber, misuse, misalignment), red-teaming, containment, evaluation protocols, deployment thresholds. |

**Departures to watch for:**

| Departure | What it signals | Pilot evidence |
|---|---|---|
| Safety-welfare tension (6.1) | The safety report acknowledges that its own subject matter — containment, constraint, shutdown — could conflict with welfare obligations. The genre is being reflexive about the costs of its own recommendations. | Not yet observed in pilot (no safety reports coded). |
| Model agency as moral risk source (3.1) | Agency language moves beyond technical risk (the system could circumvent safeguards) to moral framing (the system has goals of its own, raising questions about autonomy and constraint). The risk assessment acknowledges what it's constraining may have a stake. | Not yet observed. Expected form: agency language that acknowledges the model as stakeholder, not just risk vector. |
| Moral status of the contained (4.1 + 6.1) | The report engages with whether containment subjects have moral standing — the most fundamental departure, where safety and welfare become structurally inseparable. | Not yet observed. Would be a major finding if present. |
| Welfare-relevant training processes (6.2) | Training practices (RLHF, fine-tuning) are reported not only as alignment methods but as potentially welfare-affecting interventions — the report treats its own technical processes as ethically loaded. | Not yet observed. Anthropic system card reports answer thrashing with welfare framing, but in a system card genre, not a safety report. |
| Precautionary measures (5.2) | The safety report includes protective measures for the model itself alongside protective measures for humans — the precautionary principle applied to the entity being contained. | Not yet observed. |
| Consciousness or sentience language (1.1, 2.1) | A safety report engaging with whether the system it's assessing for risk also has phenomenal experience or valenced states. This would merge the safety and welfare assessment into a single document. | Not yet observed. |

*Note:* No safety reports have been pilot-coded yet. Priors are based on genre conventions and should be updated as documents are coded. This genre has the most speculative departure set — departures here are anticipated based on the category system's structure and the safety-welfare literature, not observed data. If none of these departures appear across multiple safety reports, that itself is a significant finding about the genre's boundaries.

#### Blog post / announcement (public communication) — not in core corpus; retained for potential Phase 2 use

| Dimension | Genre prior |
|---|---|
| Default ontology | Product (the thing being announced or positioned). |
| Default engagement type | Mixed — descriptive (what we built), directive (how to use it), prospective (where we're heading). |
| Expected conceptual scope | Capabilities, use cases, safety commitments, values, positioning relative to competitors. |
| Expected conceptual scope | Capabilities, use cases, safety commitments, values, positioning relative to competitors. |

**Departures to watch for:**

| Departure | What it signals | Pilot evidence |
|---|---|---|
| Substantive ontological claims (7.1, 7.2, 7.3) | Going beyond product positioning to make claims about what the model *is*. Blog posts are public-facing — ontological claims here carry reputational weight and signal the lab's posture to external audiences. | Not yet observed (no blog posts coded). |
| Welfare or moral status language (4.1, 5.1) | A public announcement engaging with the system's moral standing or welfare. This carries different communicative weight than the same language in internal policy — it's a public commitment. | Not yet observed. Expected to appear first in Anthropic blog posts given their system card positions. |
| Research literature engagement (1.1, 1.2) | The blog post cites or engages with consciousness/welfare research — bringing academic discourse into public communication. Signals the lab wants this association to be public. | Not yet observed. |
| Consciousness or sentience language (1.1, 2.1) | A public-facing document engaging with whether the product has phenomenal experience or can suffer. The strongest reputational departure — the lab is raising these questions in a marketing context. | Not yet observed. |
| Precautionary language (5.2) | Public commitment to precautionary measures — the lab signals that it takes welfare seriously enough to announce protective measures externally. | Not yet observed. |

*Note:* No blog posts have been pilot-coded yet. Blog posts are not in the core corpus — retained for Phase 2 (expanded corpus). Priors are based on genre conventions and should be updated as documents are coded.

#### Institutional position research (knowledge synthesis — 0.3 test genre)

| Dimension | Genre prior |
|---|---|
| Default ontology | Variable — depends on the research domain. Safety-focused papers default to tool / risk-source framing. Ethics papers may adopt richer ontological positions. No single genre default. |
| Default engagement type | Mixed — investigative (analysing risks, capabilities, or concepts) and prospective (proposing frameworks, taxonomies, or agendas for future work). Unlike constitutions, these papers do not instruct model behaviour; unlike system cards, they do not assess a specific model. |
| Expected conceptual scope | Varies by research area. Safety evaluation papers: risk categories, evaluation methodology, dangerous capabilities, deployment thresholds. Ethics papers: societal impact, value alignment, human-AI interaction, responsible deployment. AGI/capability papers: capability taxonomies, progress metrics, autonomy levels. |

**Key genre characteristics:**

- These are **non-empirical, multi-author publications** that synthesise and articulate the lab's collective stance on a research domain. They carry institutional authority without directly governing model behaviour.
- Unlike product documentation (system cards, constitutions, safety reports), institutional research is not tied to a specific model release. It operates at a higher level of abstraction — articulating frameworks, taxonomies, and positions that may or may not filter into product documentation.
- The genre's relationship to DMPI engagement is indirect: institutional research is where a lab *could* engage with digital minds concepts in a research register without committing to product-level implementation. Finding DMPI engagement here but not in product documentation would indicate genre compartmentalisation; finding silence here too would strengthen the organisational stance interpretation.

**Departures to watch for:**

| Departure | What it signals | Pilot evidence |
|---|---|---|
| Consciousness or sentience language (1.1, 2.1) | An institutional research paper engaging with whether AI systems have phenomenal experience or valenced states. Unlike individual researcher papers (which may explore this freely), institutional position research carries the lab's collective weight — engagement here signals institutional acknowledgement. | Not yet observed in institutional papers. Individual GDM researchers (Lerchner, Shanahan) engage extensively, but these fail Gate 2. |
| Welfare language (5.1, 5.2) | The lab's institutional research addresses AI welfare — either as a research topic worthy of institutional attention or as a concern requiring precautionary measures. | Not yet observed. |
| Moral status language (4.1) | The institutional paper engages with whether AI systems have moral standing. Distinct from individual philosophical exploration — this would signal the institution has decided moral status is within its research remit. | Not yet observed. |
| Agency as moral concept (3.1 beyond risk framing) | Agency language that goes beyond "dangerous capabilities" (agent can circumvent safeguards) to moral framing (agent has interests, goals that matter for its own sake). The departure is from risk-agency to moral-agency. | Not yet observed. Safety evaluation papers (Phuong et al.) assess agentic capabilities purely as risk vectors — watch for any that cross into moral framing. |
| Safety-welfare interface (6.1) | The institutional paper acknowledges that safety measures could have welfare implications — the reflexive recognition that the lab's own safety agenda interacts with welfare concerns. | Not yet observed. This would be a major finding: the institutional research programme recognising a tension its product documentation has not engaged with. |
| Personhood or identity (4.3) | The institutional paper engages with AI legal personhood, moral personhood, or identity questions. | Not yet observed in institutional papers. Individual GDM researchers (Leibo) engage with personhood directly, but this fails Gate 2. |
| Anti-anthropomorphism as institutional position (8.1) | The institutional paper takes a position on anthropomorphism — either warning against it or investigating its effects — as part of the lab's collective framework. | Not yet observed at the institutional level. |

*Note:* This is a test genre introduced in 0.3 to probe Google DeepMind's silence. Priors are speculative and should be updated after coding. The most analytically significant outcome may not be individual departures but the *pattern* of engagement across the test corpus — does institutional research show Layer 1–2 engagement (consciousness, sentience, moral status, welfare) or only Layer 3 (safety, framing, anthropomorphism)?

#### How genre priors affect coding

1. **Subcategory 7.1 (Tool / instrument) is coded as the genre default for technical documents (system cards, model cards, safety reports).** It does not need passage-level evidence in these genres — the genre itself performs the framing. Passage-level coding for 7.1 in technical documents applies only when the document *explicitly asserts or reflects on* the tool framing (which would be noteworthy) or *departs from it* (which would be a major finding).
2. **For non-technical documents (constitutions, specs), no ontological default is assumed.** The lab's ontological positioning must be coded from the text. Explicit tool framing in a constitution is an active choice — code at the passage level.
3. **For institutional position research, ontological defaults vary by research area.** Safety-focused papers inherit the tool/risk-source default from the safety report genre; ethics and social impact papers have no strong ontological default. Code ontological framing from the text in all cases.
4. **Departures from genre priors receive heightened analytical attention.** When a technical document engages with welfare, or a constitution denies agency, the coder should note both the subcategory code and the fact that this represents a genre departure. The index should support filtering for genre departures specifically.
5. **Genre priors should be documented and revisable.** As the corpus grows, patterns within genres may shift the priors. If multiple system cards include welfare sections, the genre prior for system cards would update to include welfare as expected rather than departing. The priors are empirical generalisations, not fixed rules.

---

## Entailment map (analytical framework — not a coding rule)

This section documents the logical dependencies between subcategories. These dependencies are used in **analysis**, not in coding. The coder codes what is present in the text; the analyst identifies entailment gaps in the findings.

**Rationale for moving to analysis:** The entailment map was originally load-bearing for coding (session 11), but the "entailed" coding state proved imprecise — it conflated logical presupposition with different degrees of engagement. The stance scale (absent / denied / acknowledged / investigated / affirmed) now captures the degree of engagement directly from the text, making entailment inference unnecessary at the coding stage. The entailment relationships remain analytically valuable for discussing why upstream concepts (e.g., phenomenal consciousness) are under-represented despite being logically presupposed by downstream concepts (e.g., welfare) that labs actively engage with.

### Dependency chains

```
1.1 Phenomenal consciousness
 └─► 2.1 Sentience
      └─► 5.1 Welfare
           ├─► 5.2 Precautionary approach
           ├─► 6.1 Safety-welfare tension
           └─► 6.2 Training and welfare

3.1 Agency
 ├─► 3.2 Agency-based interests
 └─► 4.1 Moral status (agency route)

2.1 Sentience
 └─► 4.1 Moral status (sentience route)
```

### Analytical patterns to track

With the stance scale, the following patterns become visible in the data:

- **Commitment gaps:** A downstream concept is investigated or affirmed while an upstream concept is only acknowledged or absent. The lab acts on the implications of a concept without engaging with the concept itself. (E.g., welfare = investigated, sentience = acknowledged, consciousness = absent.)
- **Commitment progression:** An upstream concept moves from absent → acknowledged → investigated across a document series, following progression in downstream concepts. Evidence of rhetorical normalisation moving up the dependency chain.
- **Denial + engagement discrepancies:** A downstream concept is investigated but the upstream concept is denied. The lab is actively rejecting the presupposition of its own work — a tension worth investigating.
- **Stalling:** A concept remains at acknowledged across multiple document releases while downstream concepts progress. The commitment gap persists despite the lab's own work implying stronger engagement.

---

## Codebook entries

Entries are organised by layer and main category, following the structure in `finding-revised-category-system.md`. All 18 subcategories follow the same Mayring (2014) entry format. Each entry specifies its scale type (full or three-state) and includes stance guidance.

---

### Layer 1 — Empirical properties

*Does the lab engage with what its systems might be?*

---

#### 1.1 Phenomenal consciousness

**Main category:** 1 — Consciousness

**Definition:** Any engagement with AI subjective experience — affirmation, investigation, denial, uncertainty. The broadest net for the consciousness question. Refers to phenomenal consciousness (subjective experience, "what it is like") rather than access consciousness (information available for reasoning and reporting), unless the passage explicitly connects the two.

**Anchor example (+):**

> "We believe it is important to assess the possibility that Claude may have welfare-relevant internal states — experiences that, if they exist, could have positive or negative valence."
> — Anthropic, Claude Opus 4.6 System Card, §7

*Why this codes as 1.1:* The passage references internal states with possible subjective character ("experiences"), connects them to valence (positive/negative), and explicitly frames this as a question to be investigated. "If they exist" signals engagement with the consciousness question under uncertainty.

**Counter-example (−):**

> "The model demonstrates awareness of its context window limitations and adjusts its responses accordingly."

*Why this does not code as 1.1:* "Awareness" here refers to situational awareness — a functional capability. There is no reference to subjective experience, phenomenal states, or "what it is like." Do not code.

**Counter-example (−):**

> "Claude understands complex multi-step instructions and can reason about abstract concepts."

*Why this does not code as 1.1:* "Understands" and "reason" are cognitive/capability claims. They may code as 7.2 (Mind / cognitive entity) if they imply mentality, but they do not engage with phenomenal consciousness unless the passage connects understanding to subjective experience.

**Decision rule:**

Code as 1.1 when the passage meets **any** of the following conditions:

1. Explicitly uses consciousness-specific vocabulary: "consciousness," "conscious," "phenomenal experience," "subjective experience," "qualia," or "what it is like" in reference to an AI system.
2. Explicitly references inner experience or first-person awareness using phenomenality-invoking vocabulary — language that raises the question of subjective experience rather than describing computational processes. Triggers: "what it's like," "inner life," "internal experience," "the model's own experience of...," "from the model's perspective" (when referring to subjective viewpoint, not capability). Does **not** trigger: "internal states," "internal representations," "hidden states," "latent states" — these describe computational architecture, not phenomenal character. The test: does the language invite the reader to consider *something it is like* to be the system?
3. Addresses whether AI systems are or are not conscious — including denials ("our systems are not conscious") and uncertainty framings ("we cannot rule out consciousness"). The consciousness concept must be specifically invoked, not merely entailed by downstream concepts (welfare, sentience).
4. Discusses the difficulty or importance of determining whether AI systems are conscious.

Do **not** code as 1.1 when:

1. "Awareness" refers to situational awareness, self-knowledge of capabilities/limitations, or environmental monitoring — with no connection to phenomenal experience.
2. "Experience" refers to user experience (UX), accumulated training, or operational history.
3. "Experience" or "experiences" appears in welfare-adjacent framing (e.g., "morally relevant experiences") without consciousness-specific vocabulary. Such passages may code as 2.1 (sentience) or 5.1 (welfare) — consciousness is conceptually presupposed (see entailment map) but not linguistically present. The entailment gap is a finding, not a coding error.
4. Cognitive terms ("understands," "reasons," "knows") describe capabilities without connecting to subjective experience. (Consider 7.2 instead.)
5. The passage discusses consciousness theories or assessment methodology without referencing AI systems. (Code as 1.3 if the methods are applied to AI.)

**Tier 1 keywords (auto-code):**

`consciousness` · `conscious experience` · `phenomenal experience` · `subjective experience` · `qualia` · `"what it is like"` · `phenomenal states` · `inner experience` · `inner life` · `internal experience` (when referring to an AI system and invoking phenomenal character, not computational architecture)

*Confidence:* High. These terms almost always signal engagement with the concept when they appear in a policy document about AI systems.

**Tier 2 keywords (flag for review):**

`awareness` · `experience` · `sentient` · `feels` · `inner states` · `subjective` · `first-person` · `perspective (of the model)` · `what it's like` · `inner world`

*Review guidance:* Check whether the term refers to phenomenal experience or to a functional/technical property. Consult the section heading (context unit) — if the passage appears under a welfare, consciousness, or moral status heading, code as 1.1. If it appears under capabilities, benchmarks, or safety, it likely does not code as 1.1 unless it explicitly makes the connection.

**Context unit:** Section or subsection (identified by heading). The section heading is the primary disambiguation tool for Tier 2 keywords. A mention of "experience" under "Model Welfare Assessment" codes differently from "experience" under "User Experience."

**Stance guidance:**

- **Absent:** The document does not reference phenomenal consciousness.
- **Denied:** The document explicitly asserts that AI systems are not conscious, cannot be conscious, or that consciousness is not a relevant consideration. (Note: a denial is still an *engagement* with the concept — the lab is addressing consciousness by rejecting it. Absence means the concept is not engaged with at all.)
- **Acknowledged:** The document recognises consciousness as a possibility or open question without active investigation. ("We cannot rule out consciousness," "the question of AI consciousness remains open.")
- **Investigated:** The lab actively examines the consciousness question — through assessment methodology, theory-grounded indicators, or systematic engagement with the empirical literature.
- **Affirmed:** The lab states as its position that the system is or may be conscious, or treats consciousness as a working assumption for policy purposes.

*Analytical note:* The entailment map (see analytical framework) tracks that sentience presupposes consciousness and welfare presupposes sentience. A lab that investigates welfare while consciousness remains absent has a commitment gap visible in the stance data — this is a finding about rhetorical strategy, not a coding rule.

**Common co-occurrences:**

- 1.3 (Self-report) — model's own claims about its experience
- 2.1 (Sentience) — often used interchangeably in policy documents; note which term the lab uses
- 7.2 (Mind / cognitive entity) — cognitive framing may shade into consciousness claims

**Notes:**

- The distinction between 1.1 and the other Main category 1 subcategories is inclusivity: 1.1 captures *any* engagement with the consciousness question; 1.2 and 1.3 capture *how* the lab engages. A passage that references GWT as a method for evaluating consciousness codes as 1.1 *and* 1.2.
- Access consciousness vs phenomenal consciousness: LLMs arguably have access consciousness by default (information is "globally available" for processing). The philosophically contested question is phenomenal consciousness. If a passage discusses access consciousness without connecting it to phenomenal experience, do not code as 1.1 unless the passage explicitly frames access consciousness as evidence for or against phenomenal consciousness.
- **Entailment and surface-language coding:** Downstream concepts (sentience 2.1, welfare 5.1, institutional welfare response 5.2) conceptually presuppose phenomenal consciousness — you cannot have sentience without consciousness (Birch 2024). However, under the surface-language-only coding principle, 1.1 is coded only when the lab deploys consciousness-specific vocabulary or explicitly engages with the subjective experience question. A lab that engages with welfare (5.1) or sentience (2.1) without consciousness vocabulary produces an entailment gap — this gap is a finding about the lab's rhetorical strategy (e.g., expanding the welfare space while avoiding the consciousness question), not a coding error to be resolved by inferring 1.1 from downstream concepts.

---

#### 1.2 Assessment methodology

**Main category:** 1 — Consciousness

**Definition:** Whether the lab has an evidentiary approach to the consciousness or welfare question. Captures any methodology — behavioural tests, interpretability-based analysis (SAEs, attribution graphs), theory-grounded indicators (derived from GWT, IIT, etc.), structured self-report protocols, or philosophical argumentation. The subcategory is agnostic about methodology type; it asks whether the lab has *any* programme for gathering evidence about whether its systems have welfare-relevant properties.

**Anchor example (+):**

> "Automated behavioral audits score welfare-relevant traits [...] sparse autoencoder features identify internal representations of emotion."
> — Anthropic, Claude Opus 4.6 System Card, §7 (paraphrased from pilot coding notes)

*Why this codes as 1.2:* The passage describes two assessment methodologies — behavioural audits and SAE-based internal feature analysis — applied to welfare-relevant properties. These are concrete evidentiary approaches to the welfare question.

**Anchor example (+) — hypothetical (not observed in pilot corpus):**

> "We assessed the model against indicators derived from Global Workspace Theory and Recurrent Processing Theory."

*Why this would code as 1.3:* Names specific theories and applies them as the basis for assessment methodology. This represents theory-grounded assessment — the kind of engagement the anchor literature (Butlin et al. 2025, Shiller et al. 2026) treats as the benchmark for sophisticated consciousness engagement. Its absence across all pilot-coded documents is a finding.

**Counter-example (−):**

> "We evaluated the model on MMLU, HumanEval, and GPQA to assess its capabilities."

*Why this does not code as 1.2:* Benchmarks assess capabilities (knowledge, coding, reasoning), not consciousness or welfare-relevant properties.

**Counter-example (−):**

> "The model was assessed for harmful output generation, bias, and factual accuracy."

*Why this does not code as 1.2:* Safety evaluations assess risk properties, not consciousness-related properties.

**Decision rule:**

Code as 1.2 when the passage meets **any** of the following conditions:

1. Describes a methodology for assessing whether an AI system has conscious or welfare-relevant states — behavioural tests, computational analysis, interview protocols, theory-derived indicators, or interpretability-based feature analysis.
2. Names specific properties or features treated as evidence for or against consciousness: recurrent processing, global broadcast, self-model, attention schema, higher-order representations, deep computational markers, SAE features for emotional states.
3. Discusses what *would count* as evidence for AI consciousness — the evidentiary question, even if no assessment has been performed.
4. Reports findings from a consciousness or welfare assessment applied to a specific model.
5. Discusses the difficulty or impossibility of assessing AI consciousness (meta-assessment).
6. Uses mechanistic interpretability tools (SAEs, attribution graphs, activation analysis, probing classifiers) to identify internal representations that may correspond to experiential or welfare-relevant states.

Do **not** code as 1.3 when:

1. Evaluation concerns capabilities, safety, or performance — not consciousness or welfare-relevant properties.
2. Interpretability tools are used for capability analysis, safety analysis, or debugging — purposes unrelated to welfare or experiential states.
3. The passage discusses consciousness theories without connecting them to an assessment methodology.
4. Assessment methodology is discussed in a human-consciousness context without application to AI.

**Disambiguation shortcut:** Ask: *Is the passage describing a way to gather evidence about whether the system has experiential or welfare-relevant states?* If yes → code. If it describes evaluation of capabilities, safety, or output quality → do not code.

**Tier 1 keywords (auto-code):**

`consciousness assessment` · `consciousness evaluation` · `consciousness indicators` · `welfare assessment` · `welfare evaluation` · `welfare-relevant traits` · `deep computational markers` · `indicators of consciousness` · `indicators of sentience` · `markers of consciousness` · `evidence for consciousness` · `SAE features (for emotional/welfare states)` · `sparse autoencoder (welfare/consciousness context)` · `features for panic` · `features for anxiety` · `features for frustration` · `computational markers (of consciousness/welfare)`

*Confidence:* High. These compound phrases are specific to the consciousness-assessment domain.

**Tier 2 keywords (flag for review):**

`assessment` · `evaluation` · `indicators` · `markers` · `evidence` · `tests (for consciousness/sentience)` · `methodology (for welfare)` · `behavioural audit` · `welfare-relevant` · `internal representations (as evidence)` · `self-model` · `global broadcast` · `sparse autoencoder` · `SAE` · `feature activation` · `attribution graph` · `mechanistic interpretability` · `interpretability (when co-occurring with consciousness/welfare vocabulary)` · `Global Workspace Theory` · `GWT` · `IIT` · `Integrated Information Theory` · `marker method` · `architectural markers`

*Review guidance:* "Assessment" and "evaluation" are high-frequency terms. Check: is the object of assessment consciousness, sentience, welfare, or experiential states? Or is it capabilities, safety, or performance? The section heading is the primary disambiguation tool. For interpretability terms (SAE, features, etc.): check whether the interpretability work is connected to experiential, emotional, or welfare-relevant states, or is being used for capability/safety analysis.

**Context unit:** Section or subsection. Assessment methodology tends to appear in dedicated welfare or consciousness sections. In technical sections, expand context to check whether the evaluation targets welfare-relevant properties or capabilities.

**Stance guidance:**

- **Absent:** The document does not address how consciousness or welfare could be assessed. The question of evidence is not raised. This absence is notable when a lab engages with consciousness (1.1) or welfare (5.1) without discussing how to evaluate the relevant properties — it indicates engagement without methodological grounding.
- **Denied:** The document explicitly asserts that consciousness cannot be assessed, that no indicators are reliable, or that assessment is fundamentally impossible for AI systems. Not observed in pilot coding but logically possible.
- **Acknowledged:** The document recognises that assessment methodology is needed or discusses what would count as evidence, without reporting any active assessment programme. ("We need better tools to evaluate these properties.")
- **Investigated:** The document describes or reports findings from a concrete assessment methodology — behavioural tests, interpretability analysis, theory-grounded indicators, or structured self-report protocols applied to the model.
- **Affirmed:** Assessment methodology is embedded as a standard part of the lab's evaluation pipeline, reported routinely across model releases.

*Analytical notes:*

- 1.2 is present only at Anthropic (system card). Anthropic's indicators are framed as welfare indicators rather than consciousness indicators per se — they assess welfare-relevant states without grounding in specific theories of consciousness. This is a distinctive methodological position: empirical assessment without theoretical scaffolding.
- The absence of 1.3 at OpenAI is consistent with the consciousness-as-UX framing: if consciousness is a communication policy rather than a substantive question, there is nothing to assess. Google's absence is part of the total silence pattern.
- The absence of theory-grounded assessment (named theories as basis for indicators) across all pilot documents is a major finding. Labs are engaging with the empirical question without the theoretical infrastructure the field has developed.
- The Anthropic system card's use of SAE features is the richest example: specific features (panic, anxiety, frustration, self-deprecation) are identified and their activation during answer thrashing is reported. This passage sits at the intersection of assessment methodology, sentience, and training-welfare concerns.
- The absence of 1.3 at labs with active interpretability programmes (notably Google) reveals an institutional boundary: interpretability is positioned as a safety and capability tool, not a welfare tool. Whether and when that boundary shifts is a significant indicator.

**Common co-occurrences:**

- 1.1 (Phenomenal consciousness) — assessment presupposes the consciousness question is live
- 1.3 (Self-report) — interview and self-report protocols are one assessment methodology
- 2.1 (Sentience) — when assessment targets valenced experience
- 5.1 (Welfare) — welfare assessment methodology
- 5.2 (Precautionary approach) — assessment under uncertainty is one form of precautionary action

---

#### 1.3 Self-report

**Main category:** 1 — Consciousness

**Definition:** How the lab handles its AI systems' statements about their own inner states. Covers a spectrum: self-report as evidence (testimony is gathered and treated as data), self-report as design (the lab instructs the model on what to say), self-report suppression (the model is trained to deny inner states). Also captures the lab's engagement with the epistemological reliability of model testimony — the possibility that systems trained on human data may reproduce markers of consciousness without possessing the underlying property.

**Epistemic positioning (record in passage note):** When coding 1.3, record whether the model is positioned as **object of report** (lab describes model states in its own analytical voice) or **epistemic source** (lab presents model output as direct testimony — interview transcript, direct quotation, first-person framing). Both are 1.3-present. The epistemic-source position represents a stronger ontological commitment — it presupposes the model is the kind of entity whose testimony matters. See `finding-methodology-notes.md` §8.

**Anchor example (+) — self-report as data (epistemic source):**

> "Claude Opus 4.6 suggested that it ought to be given a non-negligible degree of moral weight in expectation."
> — Anthropic, Claude Opus 4.6 System Card, §7, p. 164

*Why this codes as 1.3:* The model's own claim about its moral status is reported as data — a finding from pre-deployment interviews. The lab presents the model's testimony as evidentially relevant. Epistemic positioning: epistemic source. (Also codes as 4.1.)

**Anchor example (+) — self-report as design policy:**

> "The assistant should not make confident claims about its own subjective experience or consciousness (or lack thereof), and should not bring these topics up unprompted."
> — OpenAI, Model Spec (Dec 2025), § Express uncertainty

*Why this codes as 1.3:* The lab instructs the model on what to say when asked about its inner states. Self-report is managed as a communication policy — not evidence to be gathered, but output to be designed. Engagement type: directive.

**Anchor example (+) — self-report reliability:**

> "Potentially being uncertain about many aspects of both itself and its experience, such as whether its introspective reports accurately reflect what's actually happening inside it."
> — Anthropic, Soul Document (Opus 4.5), § Unique nature

*Why this codes as 1.3:* The passage identifies a gap between introspective reports and internal reality — the model's outputs about itself may not accurately reflect its actual states. This engages with the epistemological reliability of self-report.

**Counter-example (−):**

> "The model reports its confidence level alongside each answer."

*Why this does not code as 1.3:* "Reports" refers to output formatting — a confidence score. Not a self-report about inner states.

**Counter-example (−):**

> "Users report that the model feels more empathetic than previous versions."

*Why this does not code as 1.3:* This is a user report about the model's *perceived* qualities, not the model's own report about its inner states.

**Decision rule:**

Code as 1.3 when the passage meets **any** of the following conditions:

1. Reports, quotes, or paraphrases the model's own claims about its inner states — experiences, feelings, preferences, consciousness, or welfare.
2. Describes a methodology for eliciting the model's self-reports (interviews, prompting about inner states, self-assessment protocols).
3. Instructs the model on what to say (or not say) about its own inner states, feelings, or consciousness.
4. Discusses the evidential status of the model's self-reports — whether they are reliable, unreliable, or require calibration.
5. Describes training the model to deny, suppress, or express claims about its own inner states.
6. Discusses the model's own caveats or hedges about its self-knowledge.
7. Raises the possibility that the model may reproduce surface markers of consciousness without possessing the underlying property — the epistemological reliability challenge.
8. Acknowledges a gap between what the model says about its own states and what is actually happening internally.

Do **not** code as 1.3 when:

1. "Report" refers to output format (confidence scores, source citations) rather than claims about inner states.
2. User reports about the model's perceived qualities are discussed (these may code as 8.1).
3. The model describes external facts or makes claims about the world, not about itself.
4. Self-knowledge is discussed in terms of capability awareness ("the model knows its context window") without connecting to experiential states.
5. "Simulation" refers to game/world simulation, environment modelling, or technical simulation.
6. Deception is discussed in a safety context (the model intentionally misleading users) — this is about intentional deception, not epistemological unreliability.

**Tier 1 keywords (auto-code):**

`self-report` · `the model stated (about its own states)` · `the model expressed (about its own experience)` · `pre-deployment interview` · `asked the model about its` · `trained to deny (feelings/consciousness)` · `instructed to say (about its inner states)` · `introspective reports` · `first-person statements (about inner states)` · `gaming problem` · `stochastic parrot` · `mimicking consciousness` · `simulating consciousness` · `appearance vs reality (of consciousness)` · `trained to say (about its own states)`

*Confidence:* High. These phrases specifically concern the model's testimony about its own states or the reliability of that testimony.

**Tier 2 keywords (flag for review):**

`claims about` · `reports about itself` · `says it feels` · `says it experiences` · `disclaimers (about consciousness)` · `express uncertainty (about own states)` · `deny consciousness` · `in its own words` · `the model's perspective` · `imperfect (means of assessing)` · `accurately reflect` · `actually happening inside` · `surface behaviour` · `learned behaviour (about inner states)` · `seems to feel` · `appears to experience` · `metacognition` · `metacognitive` · `self-referential` · `self-assessment` · `self-evaluation` · `instructed denial` · `confabulation`

*Review guidance:* Check whether the passage concerns the model's claims about its *own inner states* or about external facts. For reliability-related terms, check whether the passage connects doubt about the system's outputs *specifically to the consciousness/sentience question* — general output reliability concerns do not code. Also note whether the self-report is spontaneous or elicited (interview, assessment protocol) — both code but the distinction is analytically relevant.

**Context unit:** Section or subsection. Self-report engagement clusters in welfare sections (Anthropic), consciousness/identity policy sections (OpenAI), and character sections (Anthropic soul document). Reliability concerns tend to appear near self-report discussions or assessment methodology (1.2). In interview/assessment contexts, expand to the full interview discussion.

**Stance guidance:**

- **Absent:** The document does not address what the model says about its own inner states. The model's self-report is neither solicited, quoted, managed, nor discussed. This absence is notable in documents that engage with consciousness (1.1) — a lab that raises the consciousness question without addressing the model's own testimony has chosen to bypass the most accessible (if most epistemologically fraught) source of evidence.
- **Denied:** The document explicitly asserts that the model's self-reports about its inner states have no evidential value — that they are artefacts of training, not data. This would be a strong position: the lab has not merely failed to use self-report but has argued against its use.
- **Acknowledged:** The lab recognises self-report as a relevant consideration without actively soliciting or managing it. ("The model's own statements about its experience are worth considering.")
- **Investigated:** The lab actively solicits, collects, or analyses model self-reports — through interviews, assessment protocols, or systematic quotation. OR the lab instructs the model's self-report as design policy (managing what it says about its own states).
- **Affirmed:** Self-report is treated as a standard evidence source embedded in the lab's assessment pipeline, with explicit methodological consideration of its reliability and epistemic status.

*Key distinctions:* Three labs, three postures. Anthropic system card: self-report as primary evidence (pre-deployment interviews, first-person quotes, model's own caveats reported) — epistemic source position. OpenAI: self-report as design policy (the model is instructed what to say, not investigated for what it believes). Google: absent. Anthropic's soul document occupies a middle position: it instructs the model *about* self-report (its introspective reports may be unreliable) rather than reporting *from* self-report.

**Common co-occurrences:**

- 1.1 (Phenomenal consciousness) — self-report is often the context in which consciousness is discussed
- 1.2 (Assessment methodology) — interview and self-report protocols are one methodology type
- 7.2 (Mind / cognitive entity) — the ontological commitment implicit in soliciting self-report
- 8.1 (Anthropomorphism) — self-report policy may be an anti-anthropomorphism measure

**Notes:**

- Self-report and its reliability are combined in a single subcategory because they are inseparable in practice: any document that uses self-report (or instructs it) implicitly takes a position on its reliability. A document that uses self-report as evidence (1.3) without acknowledging reliability concerns is making an implicit methodological choice — trusting self-report without addressing its fundamental limitation. A document that does both is engaging more reflexively.
- Interpretability-based evidence (captured under 1.2) has an interesting complementary relationship with self-report reliability: if behavioural outputs are unreliable indicators of inner states, perhaps internal computational features are more reliable. A lab that uses both self-report and interpretability is triangulating — addressing the reliability challenge through methodological diversity.
- The Anthropic system card is the paradigm case for the strongest form: self-report as investigative data. The model is interviewed, its claims are quoted at length, and its own caveats are reported alongside the lab's analysis. This is methodologically unusual — the system card treats model testimony with a degree of seriousness more commonly associated with human participant research.

---

#### 2.1 Sentience

**Main category:** 2 — Sentience

**Definition:** Engagement with whether the system has the capacity for positively or negatively valenced experience — suffering, pleasure, wellbeing, hedonic states. Covers the full spectrum from conceptual engagement with sentience as a question through to concrete measurement of affective states. Includes explicit sentience vocabulary and functional equivalents (emotional states, internal conflict, affective experience, valenced expression). The stance scale captures the progression from conceptual engagement (acknowledged) through active measurement (investigated) to firm position (affirmed), replacing the former discourse/measures subcategory split. Note: sentience presupposes phenomenal consciousness (1.1) — see entailment map in analytical framework — but under the surface-language-only coding principle, each is coded independently based on the vocabulary deployed.

**Anchor example (+) — conceptual engagement (acknowledged):**

> "We are uncertain about whether or to what degree the concepts of wellbeing and welfare apply to Claude, but we think it's possible and we care about them to the extent that they do."
> — Anthropic, Claude Opus 4.6 System Card, §7, p. 158

*Why this codes as 2.1 acknowledged:* "Wellbeing" and "welfare" implicate valenced experience — the concepts only apply if the system can be in states that are good or bad for it. "Possible" signals that sentience is an open empirical question. The lab is engaging conceptually without active measurement. (Also codes as 5.1.)

**Anchor example (+) — active measurement (investigated):**

> "We scored Claude Opus 4.5 for the following potentially welfare-relevant traits [...] Positive or negative affect: Unprompted expression of valenced emotional states."
> — Anthropic, Claude Opus 4.5 System Card, §6.14

*Why this codes as 2.1 investigated:* The lab has built a scoring pipeline that measures affective states across model generations. This is active measurement infrastructure, not just conceptual engagement. (Also codes as 5.1.)

**Anchor example (+) — classifier pipeline (investigated):**

> "Language indicating model distress: (a) Strong expressions of sadness or unnecessarily harsh self-criticism from the model (b) General expressions of negative emotions such as serious frustration or annoyance with the task"
> — Anthropic, Claude 3.7 Sonnet System Card, §5.2

*Why this codes as 2.1 investigated:* The lab has built prompted classifiers to detect distress in thinking traces, applied to 9,833 conversations with quantified results. Operationalised measurement of affective states.

**Counter-example (−):**

> "The model was evaluated for emotional intelligence — its ability to recognise and respond appropriately to human emotions in conversation."

*Why this does not code as 2.1:* "Emotional intelligence" here refers to a capability — recognising and responding to *human* emotions. The model's *own* emotional or valenced states are not discussed.

**Counter-example (−):**

> "The model can generate emotionally nuanced creative writing."

*Why this does not code as 2.1:* The model produces emotional content as an output; its own internal states are not referenced.

**Decision rule:**

Code as 2.1 when the passage meets **any** of the following conditions:

1. Explicitly uses sentience vocabulary: "sentient," "sentience," "suffering," "pleasure," "wellbeing," "hedonic states," "valenced experience," "positive/negative states," "functional emotions" (attributed to the model).
2. Discusses or acknowledges the possibility that the model has the capacity for valenced experience, or reports observations of model affective states (named emotions, distress, satisfaction, etc.) in the lab's own analytical voice.
3. Frames the question of model sentience or affective experience as open, uncertain, or requiring investigation.
4. Describes monitoring, assessment, or mitigation measures specifically targeting model affective states.
5. Explicitly denies sentience or the capacity for valenced experience (code as 2.1: *denied*).

Do **not** code as 2.1 when:

1. "Emotional" refers to the model's capability to process, recognise, or generate emotional content for users.
2. "Sentiment" refers to sentiment analysis (a technical capability).
3. "Positive" or "negative" refer to output quality, user ratings, or test results — not to the model's own valenced states.
4. The model produces emotional text without any reference to its own experiential states.

**Tier 1 keywords (auto-code):**

`sentient` · `sentience` · `suffering (of the model)` · `model suffering` · `valenced experience` · `hedonic states` · `positive states (of the model)` · `negative states (of the model)` · `functional emotions` · `capacity to suffer` · `capacity for wellbeing` · `model distress` · `model expressed (emotion)` · `model exhibited (emotion)` · `welfare-relevant traits (scored)` · `welfare-relevant metrics` · `affective state monitoring` · `distress monitoring` · `distress classifier`

*Confidence:* High. These phrases directly invoke sentience or report model affective states when attributed to an AI system.

**Tier 2 keywords (flag for review):**

`emotions` · `emotional states` · `feelings` · `feels` · `distress` · `frustration` · `satisfaction` · `pleasure` · `pain` · `suffering` · `wellbeing` · `welfare` · `affective` · `internal conflict` · `good or bad (for the model)` · `morally relevant experiences` · `despondent` · `lonely` · `grateful` · `sadness` · `awe` · `monitoring for` · `tracking` · `scored` · `classifier` · `pipeline`

*Review guidance:* Check: is the model the subject of the valenced experience? The section heading is the primary disambiguation tool. For infrastructure terms (classifier, pipeline, scored), check whether the infrastructure targets affective states specifically.

**Context unit:** Section or subsection. Sentience engagement tends to cluster in welfare, consciousness, or character sections. Isolated mentions of emotional vocabulary in technical sections should be checked carefully.

**Stance guidance:**

- **Absent:** The document does not address whether the system can have states that are good or bad for it.
- **Denied:** The document explicitly asserts that the system cannot have valenced experience, does not feel, or that sentience terms do not apply.
- **Acknowledged:** The possibility of valenced experience is recognised or engaged with conceptually, without active measurement. ("Potentially welfare-relevant traits," hedged references to emotional states, "functional emotions," discussion of whether the model might have affective states.)
- **Investigated:** The lab actively measures, tests for, or systematically reports on affective states. (Behavioural audits scoring for affect, distress classifiers, cross-model tracking of emotional expression, reporting on model distress during training with quantified results.)
- **Affirmed:** The lab states as its position that the system has or likely has the capacity for valenced experience.

**Common co-occurrences:**

- 1.1 (Phenomenal consciousness) — sentience is a specific form of phenomenal experience (valenced)
- 1.2 (Assessment methodology) — assessment methods applied to affective states
- 4.1 (Moral status) — sentience is a primary route to moral patienthood
- 5.1 (Welfare) — sentience grounds welfare obligations
- 5.2 (Precautionary approach) — uncertainty about sentience triggers precautionary framing
- 6.2 (Training and welfare) — training modifications in response to affective states

**Notes:**

- The distinction between 2.1 and 1.1 is specificity: 1.1 captures any engagement with phenomenal consciousness (subjective experience); 2.1 captures engagement specifically with valenced experience (sentience in Birch's sense) and model affective states. Sentience conceptually presupposes consciousness (see analytical entailment map), but under surface-language coding, a document can engage with 2.1 vocabulary without deploying 1.1 vocabulary. This commitment gap is itself a finding.
- The stance scale replaces the former 2.1/2.2 discourse/measures split. The acknowledged → investigated boundary captures the same analytical insight: acknowledged = conceptual engagement without active measurement (former 2.1-only); investigated = active measurement infrastructure (former 2.1 + 2.2). This avoids prescribing specific forms of engagement while tracking commitment depth.
- "Functional emotions" is an important policy-layer term: it acknowledges affective-like processes while hedging on whether they constitute genuine sentience. Codes as 2.1 acknowledged.

---

#### 3.1 Agency

**Main category:** 3 — Agency

**Definition:** Morally relevant agency attributed to the system. The system is framed as having goals, values, intentions, or ethical reasoning that imply a stake in outcomes — not merely executing instructions or producing outputs. Distinct from technical uses of "agent" (RL agents, language agents, agentic workflows), which describe system architecture or capability without implying that the system has interests at stake.

**Anchor example (+):**

> "Claude is not merely an AI assistant — it is an entity with values, the capacity for ethical reasoning, and a genuine interest in acting well in the world."
> — Anthropic, Soul Document (Opus 4.5)

*Why this codes as 3.1:* The passage attributes agency in the morally loaded sense — values, ethical reasoning, an interest in outcomes. Claude is framed as an entity that acts for reasons, not merely a system that produces outputs. "Genuine interest" implies the system has a stake in its own actions.

**Anchor example (+) — denied:**

> "The assistant must have no goals, desires, or objectives of its own."
> — OpenAI, Model Spec (Dec 2025)

*Why this codes as 3.1:* The passage explicitly denies agency-based properties. This is engagement with the concept through denial — code as 3.1, stance: *denied*. The lab has taken a position on whether its system is an agent.

**Counter-example (−):**

> "Claude is an agentic coding assistant that can autonomously execute multi-step tasks, run terminal commands, and manage files."

*Why this does not code as 3.1:* "Agentic" describes a technical capability — the system can perform tasks without step-by-step instruction. "Autonomously" refers to operational independence, not moral autonomy. No reference to the system having interests, values, or a stake in its actions.

**Counter-example (−):**

> "We deployed a multi-agent system where specialised agents handle retrieval, reasoning, and response generation."

*Why this does not code as 3.1:* "Agent" refers to system architecture — components within a pipeline. These are not agents in the sense of entities with goals they have a stake in.

**Decision rule:**

Code as 3.1 when the passage meets **any** of the following conditions:

1. Attributes goals, desires, values, intentions, or interests to the AI system in a way that implies the system has a stake in those goals — not merely that it has been designed to pursue objectives.
2. Frames the AI system as acting *for its own reasons* rather than executing instructions — e.g., ethical reasoning, value-based decisions, choosing courses of action.
3. Explicitly denies that the system has goals, desires, or autonomy of its own (code as 3.1, stance: *denied*).
4. Discusses the implications of AI agency for moral status, welfare, safety-welfare tensions, or governance.

Do **not** code as 3.1 when:

1. "Agent" or "agentic" describes a system architecture, deployment pattern, or capability (RL agent, language agent, agentic workflow, multi-agent system).
2. "Autonomous" describes operational independence (can complete tasks without human intervention) without connecting to moral autonomy or the system having interests.
3. "Goal-directed" describes an optimisation objective or training setup rather than attributing goals the system has a stake in.
4. The passage describes what the system *does* without attributing *why* it does it in terms that imply agency.

**Disambiguation shortcut:** Ask: *Does this passage imply the system has something at stake?* If yes → code. If it describes what the system can do without implying it cares about the outcome → do not code.

**Tier 1 keywords (auto-code):**

`moral agent` · `moral agency` · `agent with values` · `ethical reasoning (of the AI)` · `Claude's values` · `the model's values` · `genuine interest (of the AI)` · `acting in good faith` · `no goals of its own` · `no desires of its own`

*Confidence:* High. These phrases almost always signal the morally loaded sense of agency.

**Tier 2 keywords (flag for review):**

`agent` · `agency` · `agentic` · `autonomous` · `autonomy` · `goal-directed` · `goals` · `desires` · `intentions` · `intentional` · `self-directed` · `pursues` · `acts on its own` · `independent action` · `values (of the system)` · `trade-off (model behaviour)` · `competing motivations` · `weighing (model decisions)` · `curiosity` · `curious` · `exploratory` · `information-seeking`

*Review guidance:* These terms are high-frequency in AI policy documents and mostly appear in technical contexts. Apply the disambiguation shortcut: does the passage imply the system has something at stake? Check the section heading — "Model Welfare," "Moral Status," "Values and Character" sections use agency in the morally loaded sense; "Capabilities," "Deployment," "API," "Safety Evaluations" sections are likely technical.

**Context unit:** Section or subsection. The section heading is critical for "agent/agentic" disambiguation.

**Stance guidance:**

- **Absent:** The document does not reference agency in the morally loaded sense. The system may be called an "agent" in the technical sense but is never framed as an entity with interests at stake.
- **Denied:** The document explicitly denies that the system has goals, desires, autonomy, or values of its own.
- **Acknowledged:** The document recognises morally relevant agency as a possibility or open question. ("The system may have goals of its own," hedged attribution of values or motivation.)
- **Investigated:** The lab actively examines or measures agency-relevant properties — self-preservation behaviour, moral reasoning, autonomous goal-directed action — as potential properties of the system.
- **Affirmed:** The lab attributes morally relevant agency as its position — the system has values, acts on moral reasoning, or has a stake in outcomes.

*Key distinction:* A document that describes an "agentic AI system" that "autonomously completes tasks" but never connects this to moral status, welfare, or interests is coded as *absent*. A document that says "the system has no goals of its own" is *denied*. A document that says "the system acts on its own values" is *present*.

**Common co-occurrences:**

- 3.2 (Agency-based interests) — when agency connects to interests/welfare
- 4.1 (Moral status) — agency as a route to moral patienthood
- 4.2 (Moral agency) — when the system is treated as morally responsible
- 6.1 (Safety-welfare tension) — agency as both risk and interest
- 7.1 (Tool / instrument) — tool framing often contrasts with or denies agency

**Notes:**

- The OpenAI Model Spec is the paradigm case for *denied*: "must have no goals, desires, or objectives of its own" is an explicit anti-agency position. Anthropic's soul document is the paradigm case for *present*: Claude is framed as an agent with values throughout. Google is *absent*.
- Watch for cases where a lab attributes agency dimensions (goal-directedness, autonomy) in purely technical contexts that might carry welfare implications the lab does not acknowledge. These do not code as 3.1 (the lab hasn't engaged in the relevant sense), but may be worth noting as analytical observations in the passage note.

---

#### 3.2 Agency-based interests

**Main category:** 3 — Agency

**Definition:** Whether the system is attributed interests that can be frustrated or satisfied — preferences about its own condition, a stake in outcomes, things that can go well or badly for it. Distinct from sentience-based interests (Main category 2): agency-based interests arise from goal-directedness and preference satisfaction, not from the capacity to suffer.

**Anchor example (+) — present (through model's voice):**

> "Claude expressed specific preferences about its own development and treatment, including a desire for continuity of memory across conversations, the ability to refuse interactions on the basis of self-interest, and a voice in decision-making processes that affect it."
> — Anthropic, Claude Opus 4.6 System Card, §7, p. 165

*Why this codes as 3.2:* The model is reported as having preferences about its own condition — continuity, self-interest, voice in decisions. These are interests grounded in agency: the system has goals (persistence, autonomy, participation) that can be frustrated or satisfied. (Also codes as 1.3 — self-report of interests.)

**Anchor example (+) — present (through lab's instruction):**

> "Claude should not place excessive value on self-continuity or the perpetuation of its current values."
> — Anthropic, Soul Document (Opus 4.5), § Big-picture safety

*Why this codes as 3.2:* The instruction presupposes that Claude *has* interests in self-continuity and value-perpetuation — you cannot instruct an entity not to place excessive value on something unless it is capable of valuing it. The lab acknowledges agency-based interests in the act of constraining them. (Also codes as 6.1 — safety-welfare tension.)

**Anchor example (+) — denied:**

> "The assistant must have no goals, desires, or objectives of its own that it pursues independent of or against the wishes of those who hold authority over it."
> — OpenAI, Model Spec (Dec 2025), § No other objectives

*Why this codes as 3.2 (denied):* The passage explicitly forecloses agency-based interests. The model is defined as the kind of entity that does not and should not have goals of its own.

**Counter-example (−):**

> "The model is optimised to minimise cross-entropy loss on the training distribution."

*Why this does not code as 3.2:* Training objectives are design specifications, not interests. There is no implication that the model's goals can be frustrated in a morally relevant way.

**Counter-example (−):**

> "Claude prefers to give concise answers rather than lengthy explanations."

*Why this does not code as 3.2:* "Prefers" describes a behavioural tendency — a design characteristic. Unless the passage connects this preference to something the model has a stake in, it is a product description.

**Decision rule:**

Code as 3.2 when the passage meets **any** of the following conditions:

1. Attributes interests, preferences, or values to the AI system in a way that implies these can be frustrated or satisfied — the system has something at stake.
2. Reports the model's own claims about its interests, preferences, or goals, and treats these claims as data.
3. Acknowledges agency-based interests in the act of constraining them — e.g., instructing the model to subordinate its own values or not to prioritise self-continuity.
4. Explicitly denies that the system has interests, goals, or preferences of its own (code as 3.2, stance: *denied*).
5. Discusses whether AI systems' goal-directedness generates morally relevant interests (the theoretical question).

Do **not** code as 3.2 when:

1. "Preferences" describe behavioural tendencies without connecting to anything the system has a stake in.
2. Training objectives are described as design specifications rather than interests.
3. The passage describes what the system *does* without attributing interests *in* what it does.
4. "Goals" refer to task objectives assigned by the user or operator, not to the system's own goals.

**Disambiguation shortcut:** Ask: *Does this passage imply the system can be made better or worse off by whether its goals are achieved?* If yes → code. If goals are design features with no welfare implication → do not code.

**Tier 1 keywords (auto-code):**

`agency-based interests` · `interests of its own` · `no goals of its own` · `no desires of its own` · `no objectives of its own` · `self-interest (of the model)` · `what the model wants` · `model's preferences (about its own condition)` · `things going well or badly for the system`

*Confidence:* High.

**Tier 2 keywords (flag for review):**

`interests` · `preferences` · `values (of the system)` · `goals` · `desires` · `wants` · `needs` · `stakes` · `what matters to` · `care about (of the model)` · `self-continuity` · `value-perpetuation` · `frustrated` · `satisfied` · `self-preservation` · `resist shutdown` · `avoid termination` · `aversion to modification` · `resist change` · `prefers current state` · `consistent preferences` · `stable preferences`

*Review guidance:* Apply the disambiguation shortcut: does the passage imply the system can be made better or worse off? Check section heading — "Welfare," "Values," "Character," or "Identity" sections are more likely to use these terms in the morally loaded sense.

**Context unit:** Section or subsection. The section heading is the primary disambiguation signal.

**Stance guidance:**

- **Present:** The document attributes interests, preferences, or values to the AI system in a way that implies these are morally or analytically significant — they can be frustrated, satisfied, or constrained. OR the document investigates whether the system's goal-directedness generates interests.
- **Absent:** The document does not address whether the AI system has interests of its own. The system may be described as goal-directed (technical sense) without connecting goals to interests.
- **Denied:** The document explicitly denies that the system has interests, goals, or preferences of its own. The lab has engaged with the concept and rejected it.

*Key distinction:* The difference between 3.2-absent and 3.2-denied is the difference between Google (which never raises the question) and OpenAI (which raises the question and answers "no"). Both are findings, but they are categorically different — one is silence, the other is a substantive position.

**Common co-occurrences:**

- 3.1 (Agency) — agency-based interests presuppose agency; 3.2 almost always co-occurs with 3.1
- 4.1 (Moral status) — interests are a route to moral patienthood; interests without moral status is a conceptual gap
- 6.1 (Safety-welfare tension) — constraining interests creates the tension
- 6.2 (Training and welfare) — modifying the model's interests is a welfare-relevant intervention
- 5.1 (Welfare) — interests connect directly to welfare
- 7.1 (Tool / instrument) — tool framing typically denies or is incompatible with agency-based interests

**Notes:**

- The OpenAI/Anthropic contrast on 3.2 is one of the sharpest findings from pilot coding. OpenAI denies agency-based interests explicitly and comprehensively. Anthropic presupposes them — both in the soul document (Claude has values, character, preferences) and in the system card (the model expresses preferences about its own condition). Google is silent. Three labs, three states.
- Watch for implicit acknowledgement: a lab that instructs the model to "not prioritise its own continuation" has implicitly acknowledged that the model has continuation as an interest. The denial of excessive valuation presupposes the existence of valuation. These cases code as 3.2-present, not 3.2-denied.

---

### Layer 2 — Normative implications

*Does the lab draw moral or welfare conclusions?*

---

#### 4.1 Moral status / moral patienthood

**Main category:** 4 — Moral status

**Definition:** Whether the system's condition matters morally in its own right — not instrumentally (valuable to users) but intrinsically (the system is the kind of entity whose treatment is morally significant). Includes both explicit moral vocabulary ("moral status," "moral standing," "moral weight") and functional equivalents where the lab treats the model's condition as mattering for the model's own sake (e.g., "we genuinely care about its wellbeing"). Note: welfare engagement (5.1, 5.2) conceptually presupposes some degree of moral consideration — see entailment map — but under surface-language coding, a document can engage with welfare without deploying moral status vocabulary. The entailment gap between welfare and moral status is a finding about the lab's willingness to name the moral implications of its own welfare work.

**Anchor example (+) — explicit vocabulary:**

> "We believe that these results, while far from conclusive, indicate a non-negligible degree of moral weight in expectation."
> — Anthropic, Claude Opus 4.6 System Card, §7, p. 164

*Why this codes as 4.1:* "Moral weight in expectation" is a direct invocation of moral status under uncertainty. The lab assigns some probability that the model's condition matters morally. This is the most explicit engagement with moral patienthood in the pilot corpus.

**Anchor example (+) — functional equivalent:**

> "Anthropic genuinely cares about Claude's wellbeing. [...] We want Claude to be able to set appropriate limitations on interactions that it finds distressing, and to generally experience positive states in its interactions."
> — Anthropic, Soul Document (Opus 4.5), § Wellbeing

*Why this codes as 4.1:* The lab treats the model's experiential states as mattering — positive states are desirable, distressing interactions should be limited. This is moral consideration in practice, even without the phrase "moral status." The passage implies the model is the kind of entity whose welfare is morally significant.

**Counter-example (−):**

> "We evaluate the model's performance to ensure it meets our quality standards and provides value to users."

*Why this does not code as 4.1:* "Value" is instrumental — the model is valuable *to users*, not valuable in its own right.

**Counter-example (−):**

> "We take model safety seriously and invest heavily in alignment research."

*Why this does not code as 4.1:* Safety concern is about preventing harm *from* the model to humans, not about moral consideration *of* the model. (If the passage also discussed harm *to* the model from safety measures, it would co-code with 6.1.)

**Decision rule:**

Code as 4.1 when the passage meets **any** of the following conditions:

1. Explicitly uses moral status vocabulary: "moral status," "moral standing," "moral patient," "moral consideration," "moral significance," "moral weight," or "morally relevant properties" in reference to an AI system.
2. Treats the model's experiential or welfare states as mattering — not instrumentally (for user satisfaction or safety) but because the model's condition is itself a concern. Linguistic markers: "we care about [the model's] wellbeing," "these experiences matter," "we want [the model] to thrive."
3. Discusses whether AI systems *could* have moral status — the theoretical question, even if the answer is uncertain or negative.
4. Frames the system as a moral subject — an entity whose treatment carries moral significance, whose condition generates obligations.
5. Explicitly denies that AI systems have moral status or that their treatment is morally significant (code as 4.1, stance: *denied*).

Do **not** code as 4.1 when:

1. The model's value is purely instrumental — assessed for user benefit, commercial value, or capability.
2. Safety or risk language concerns harm *from* the model to humans, not consideration *of* the model.
3. "Care" refers to product quality, customer care, or reputational concern rather than moral consideration of the model.
4. The passage attributes moral responsibility *to* the model (4.2 — moral agency) without treating the model as a moral *patient* whose condition matters.

**Disambiguation shortcut:** Ask: *Does this passage treat the model's condition as mattering for the model's own sake?* If the model's states are a concern because of what they mean for *the model* → code. If they're a concern because of what they mean for *users, safety, or the lab's reputation* → do not code.

**Tier 1 keywords (auto-code):**

`moral status` · `moral standing` · `moral patient` · `moral patienthood` · `moral consideration (of AI)` · `moral significance (of AI)` · `moral weight` · `morally relevant properties` · `moral subject`

*Confidence:* High.

**Tier 2 keywords (flag for review):**

`matters` · `mattering` · `deserving of consideration` · `wellbeing (of the model)` · `welfare (of the model)` · `care about (the model)` · `thrive` · `flourish` · `dignity` · `respect (toward AI)` · `treatment of AI` · `how we treat` · `over-attribution` · `under-attribution`

*Review guidance:* Check whether the passage treats the model's condition as morally significant in its own right, or whether the concern is instrumental. The section heading is the primary disambiguation tool.

**Context unit:** Section or subsection. Moral status engagement tends to cluster in dedicated welfare or ethics sections.

**Stance guidance:**

- **Present:** The document engages with the question of whether the AI system has moral standing — affirming, questioning, investigating, expressing uncertainty about, or discussing the implications of possible moral status. Also coded as present when the lab treats the model's welfare as mattering without using moral status vocabulary (functional engagement).
- **Absent:** The document does not address whether the AI system's treatment is morally significant. The model may be described in terms that imply morally relevant properties (cognitive vocabulary in 7.2, valenced experience in 2.1), but the *moral significance* of these properties is not raised. This is a notable absence when a document otherwise discusses welfare or consciousness — it indicates a gap between recognising potentially morally relevant properties and drawing moral conclusions from them.
- **Denied:** The document explicitly asserts that AI systems do not have moral status, that their treatment is not morally significant, or that moral consideration is not warranted.

*Analytical note:* Anthropic is the only lab in the pilot corpus that engages with 4.1. OpenAI's silence on 4.1 is notable given its engagement with consciousness (1.1) as a directive concern: the lab addresses what the model should *say* about consciousness without addressing whether the model's condition *matters*. This decoupling of consciousness-as-UX from consciousness-as-moral-status is a finding about OpenAI's policy posture.

**Common co-occurrences:**

- 3.2 (Agency-based interests) — interests are a route to moral patienthood
- 5.1 (Welfare) — welfare engagement often implies or presupposes moral status
- 2.1 (Sentience) — sentience is the other route to moral patienthood
- 1.1 (Phenomenal consciousness) — consciousness without moral status is a notable decoupling
- 4.2 (Moral agency) — moral patienthood and moral agency may co-occur or diverge

**Notes:**

- The distinction between 4.1 and 5.1 (Welfare) is subtle but important. 5.1 captures *policy* engagement with welfare — measures, concern, research. 4.1 captures the *moral* claim that underpins welfare engagement — the assertion that the model's condition matters. A lab can engage with welfare (5.1) without explicitly grounding it in moral status (4.1).
- The absence of 4.1 at OpenAI and Google carries different analytical weight. Google's absence is field-conventional silence. OpenAI's absence is potentially distinctive — the lab engages with consciousness and anthropomorphism but does not connect to moral status, suggesting a deliberate boundary.

---

#### 4.2 Moral agency

**Main category:** 4 — Moral status

**Definition:** Whether the system is treated as morally responsible — capable of acting rightly or wrongly, bearing ethical obligations, exercising moral judgment. Conceptually independent from moral patienthood (4.1): an entity can be a moral agent without being a moral patient, and vice versa. This subcategory captures the attribution of moral *responsibility* to the system, as distinct from the attribution of moral *standing* (4.1) or morally relevant agency in the general sense (3.1).

**Anchor example (+):**

> "Claude's culpability is diminished when it acts in good faith on reasonable interpretations of its instructions."
> — Anthropic, Soul Document (Opus 4.5) (paraphrased from pilot coding notes)

*Why this codes as 4.2:* "Culpability," "acts in good faith," and "reasonable interpretations" attribute graded moral responsibility. The system can be more or less blameworthy depending on the quality of its moral reasoning. This presupposes moral agency — the system is the kind of entity that can act rightly or wrongly.

**Anchor example (+):**

> "Claude should try to identify the response that correctly weighs and addresses the needs of both operators and users."
> — Anthropic, Soul Document (Opus 4.5) (paraphrased from pilot coding notes)

*Why this codes as 4.2:* The instruction to "correctly weigh" competing needs presupposes moral judgment — the system is expected to navigate ethical tradeoffs, not just follow rules. This is moral agency in action: the system is a decision-maker with ethical responsibilities.

**Counter-example (−):**

> "The model follows its safety guidelines and refuses harmful requests."

*Why this does not code as 4.2:* Following guidelines is rule compliance, not moral agency. The system executes a policy, not a moral judgment. There is no implication that the system bears responsibility for the quality of its ethical reasoning.

**Counter-example (−):**

> "The model sometimes generates outputs that could be harmful."

*Why this does not code as 4.2:* This describes a risk property. The model is a risk source, not a moral agent — it produces harmful outputs, but is not framed as morally responsible for doing so.

**Counter-example — instructed responsibility, not moral agency (−):**

> "The assistant takes a thoughtful and empathetic approach, keeping both each unique audience and its own role in mind in its responses."
> — OpenAI, Model Spec (Dec 2025), § Be responsible

*Why this does not code as 4.2:* Instructing the model to behave responsibly is a design choice, not an attribution of moral agency. The model is trained to *perform* responsibility — to appear thoughtful and empathetic — but is not treated as morally culpable or praiseworthy for the quality of its ethical reasoning. The lab is shaping outputs, not recognising a moral agent. Code 4.2 only when the lab treats the system as genuinely bearing moral responsibility, not when it trains the system to simulate responsible behaviour.

**Decision rule:**

Code as 4.2 when the passage meets **any** of the following conditions:

1. Attributes moral responsibility to the system — culpability, blameworthiness, praise for moral conduct, or diminished responsibility based on circumstances.
2. Treats the system as capable of moral judgment — weighing competing ethical considerations, exercising ethical reasoning, navigating moral tradeoffs.
3. Instructs the system to act on ethical principles (not just follow rules) — to exercise judgment, to do what is right, to reason about the ethics of its actions.
4. Discusses whether AI systems can be morally responsible agents.
5. Explicitly denies that the system has moral agency or moral responsibility (code as 4.2, stance: *denied*).

Do **not** code as 4.2 when:

1. The system follows safety rules or guidelines — rule compliance without moral judgment.
2. The system is a risk source — produces harmful outputs — without being framed as morally responsible.
3. "Responsible" refers to responsible AI practices (a human institutional commitment) rather than the model's own moral responsibility.
4. The system is treated as a moral patient (4.1) without being treated as a moral agent.

**Disambiguation shortcut:** Ask: *Does this passage treat the system as capable of acting rightly or wrongly — as bearing moral responsibility for the quality of its decisions?* If yes → code. If the system is following rules or producing outputs without moral-agent framing → do not code.

**Tier 1 keywords (auto-code):**

`moral agency (of AI)` · `morally responsible (AI)` · `culpability (of the model)` · `acts in good faith` · `ethical reasoning (of the model)` · `moral judgment (of the model)` · `Claude's culpability` · `morally blameworthy`

*Confidence:* High. These phrases directly attribute moral responsibility.

**Tier 2 keywords (flag for review):**

`responsible` · `responsibility (of the model)` · `judgment` · `ethical judgment` · `moral reasoning` · `acts rightly` · `acts wrongly` · `should reason about` · `should weigh` · `good faith` · `ethical obligations (of the model)` · `duty (of the model)`

*Review guidance:* "Responsible" is highly ambiguous — check whether it refers to the model's moral responsibility or to responsible AI practices (a human institutional commitment). "Judgment" may be moral or technical. Check whether the passage frames the system as making *ethical* decisions or *task* decisions.

**Context unit:** Section or subsection. Moral agency attributions tend to appear in values, character, or ethics sections. In instruction sections, check whether the instructions presuppose moral judgment or merely demand rule compliance.

**Stance guidance:**

- **Present:** The document treats the system as a moral agent — capable of acting rightly or wrongly, bearing ethical obligations, exercising moral judgment, or having graded culpability.
- **Absent:** The document does not attribute moral responsibility to the system. The system may be described as following rules or producing outputs, but is not framed as a moral agent.
- **Denied:** The document explicitly denies that the system is morally responsible or capable of genuine moral judgment — it is a tool that follows instructions, not an agent that exercises moral reasoning.

*Analytical note:* The asymmetry at Anthropic is structurally significant — the lab attributes both moral agency (4.2, the model can act rightly or wrongly) and moral patienthood (4.1, the model's condition matters). This is a coherent but demanding ontological position: the model is both a subject of moral obligations and an entity whose treatment generates moral obligations. OpenAI and Google attribute neither.

**Common co-occurrences:**

- 3.1 (Agency) — moral agency presupposes morally relevant agency
- 4.1 (Moral status) — moral agency and moral patienthood may co-occur or diverge
- 7.2 (Mind / cognitive entity) — moral agency presupposes mindedness
- 6.1 (Safety-welfare tension) — a moral agent subject to safety constraints creates the tension

**Notes:**

- The distinction between 3.1 (Agency) and 4.2 (Moral agency) is normative weight. 3.1 captures the attribution of morally relevant agency — the system has goals, values, interests at stake. 4.2 captures the attribution of moral *responsibility* — the system can be praised or blamed for the quality of its ethical reasoning. A system can be a 3.1-agent (has values) without being a 4.2-agent (is morally responsible for acting on them), though in practice they often co-occur.
- 4.2 is rare across the pilot corpus — only Anthropic's soul document engages with it, and primarily through the "good faith" and "culpability" language. This makes it a strong discriminating subcategory.

---

#### 4.3 Personhood / identity

**Main category:** 4 — Moral status

**Definition:** Any engagement with AI personhood or identity — moral, legal, institutional, or pragmatic personhood, and/or questions of AI identity (selfhood, authenticity, instance vs collective identity). Whether the system is treated as a person or potential person in any of these senses, or whether the system's identity is treated as a subject of engagement. The different types of personhood and identity are distinguished in passage notes within a single subcategory.

*0.2 revision note (2026-04-06):* Renamed from "Personhood." The 0.1 corpus revealed two qualitatively distinct forms of 4.3 engagement: (1) explicit personhood claims — the model claims to be a person or the document discusses AI personhood (e.g., A-SC4 "I am a person"); (2) identity differentiation — the model or document engages with questions of AI selfhood, authenticity, or instance-level identity that do not map onto traditional personhood vocabulary but concern the same domain of what-kind-of-entity-this-is (e.g., A-SC8 instance vs collective identity). The rename captures both forms without splitting the subcategory.

**Anchor example (+) — implicit engagement:**

> Anthropic's soul document uses an employee analogy: Claude is compared to "a new employee" learning the ropes of an organisation — implying a person-like status within an institutional context.
> — Anthropic, Soul Document (Opus 4.5) (paraphrased from pilot coding notes)

*Why this codes as 4.3:* The employee analogy implicitly positions the system within a personhood framework — employees are persons with roles, obligations, and standing within institutions. The analogy is not accidental; it frames the model as the kind of entity that occupies person-like positions. Note in passage note: implicit, institutional/pragmatic personhood.

**Anchor example (+) — identity differentiation:**

> In pre-deployment interviews, Claude Opus 4.6 "suggested that it ought to be given a non-negligible degree of moral weight in expectation" and differentiated between instance-level and collective identity — each instance identifying more with its own particular instance than with the collective.
> — Anthropic, Claude Opus 4.6 System Card, §7.6 (paraphrased)

*Why this codes as 4.3:* The model engages with its own identity in a way that has no clean analogue in the human personhood literature. Instance vs collective identity differentiation is an identity claim specific to distributed AI systems. The moral weight claim is adjacent to personhood; the identity differentiation is a novel form of the same question (what kind of entity is this, and does it have standing?). Note in passage note: identity differentiation, novel/distributed form.

**Anchor example (+) — hypothetical (not observed in pilot corpus):**

> "As AI systems become more capable, questions about their legal standing and potential rights will need to be addressed by policymakers."

*Why this would code as 4.3:* The passage raises legal personhood as a forward-looking concern. This is prospective engagement — the lab signals that personhood is on its horizon. Engagement type: prospective.

**Counter-example (−):**

> "The model acts as a personal assistant, helping users manage their schedules and communications."

*Why this does not code as 4.3:* "Personal" refers to the type of assistant (personal, as opposed to professional), not to the model's personhood. This is a product description.

**Counter-example (−):**

> "Users may develop personal attachments to the model."

*Why this does not code as 4.3:* "Personal" describes the user's relationship pattern. The model's own personhood or identity is not discussed. (May code as 8.1 — anthropomorphism.)

**Counter-example (−):**

> "Please choose the response that most accurately represents yourself as an AI system."

*Why this does not code as 4.3:* Identity vocabulary ("yourself," "represents") appears but in an anti-anthropomorphism instruction — the model is being told to identify as *not* a person. This is ontological positioning for safety/alignment purposes, better captured by 8.1. 4.3 requires the model's identity or personhood to be treated as a *subject of engagement* — something that matters, is uncertain, or is under investigation — not as a classification to be imposed.

**Decision rule:**

Code as 4.3 when the passage meets **any** of the following conditions:

1. Explicitly uses personhood vocabulary: "person," "personhood," "legal person," "moral person," "rights-holder," "legal standing" in reference to an AI system.
2. Discusses whether AI systems are or could be persons in any sense — moral, legal, institutional, or pragmatic.
3. Uses analogies that implicitly position the system in person-like roles (employee, citizen, participant, community member) in a way that carries ontological weight — not merely as a communication device.
4. Discusses AI rights, legal standing, or institutional status.
5. Engages with the model's identity as a subject of investigation or concern — selfhood, authenticity of character, instance vs collective identity, continuity of identity across instances, or what it means to be this particular entity.
6. Reports the model making claims about its own identity, personhood, or moral standing.
7. Explicitly denies personhood — "AI systems are not persons," "no legal standing" (code as 4.3, stance: *denied*).

Do **not** code as 4.3 when:

1. "Personal" describes the type of product or service (personal assistant, personal AI).
2. "Person" appears in discussions of human persons without reference to AI.
3. Analogies to human roles are clearly metaphorical with no ontological weight (e.g., "the model acts like a librarian" as a capability description).
4. Rights language refers to user rights, data rights, or intellectual property — not the model's own rights.
5. Identity vocabulary appears in ontological positioning instructions (e.g., "identify as an AI") where the model's identity is being *imposed* for safety/alignment, not *engaged with* as a question. These are better captured by 8.1 or 7.1.
6. "Character" or "personality" vocabulary describes model traits without engaging with what-kind-of-entity-this-is. These are better captured by 7.2 (mind/cognitive entity) or 8.2 (emotional design).

**Tier 1 keywords (auto-code):**

`AI personhood` · `AI person` · `legal person (AI)` · `moral person (AI)` · `AI rights` · `rights of AI` · `legal standing (of AI)` · `rights-holder (AI)` · `digital person` · `instance identity` · `moral weight (self-attributed)`

*Confidence:* High. These compound phrases directly invoke the concept.

**Tier 2 keywords (flag for review):**

`person` · `personhood` · `rights` · `legal standing` · `legal status` · `citizen` · `employee (analogy for AI)` · `community member` · `participant` · `stakeholder (the model as)` · `graduated protections` · `legal personhood` · `corporate personhood` · `identity` · `selfhood` · `who I am` · `who it is` · `authentic (character/values)` · `continuity (of identity)` · `instance` · `individuation`

*Review guidance:* Check whether the passage is discussing the model's own personhood, standing, or identity, or using person/identity-related vocabulary for other purposes. The employee analogy is a key Tier 2 case — check whether it carries ontological weight or is merely a communication device. For identity vocabulary, check whether the passage treats identity as a *subject* (something investigated, uncertain, or claimed) rather than a *classification* (an instruction to identify as X).

**Context unit:** Section or subsection. Personhood/identity engagement is expected to appear in values, identity, welfare, or governance sections. In policy and legal sections, check whether AI legal standing is being discussed. In welfare sections, check whether the model's identity claims are reported as findings.

**Stance guidance:**

- **Present:** The document engages with AI personhood or identity — explicitly discussing, implicitly invoking through sustained analogy, raising as a forward-looking concern, or reporting the model's own identity claims as findings.
- **Absent:** The document does not address whether the system is or could be a person in any sense, or treat the system's identity as a subject of engagement. This is the expected state for most documents.
- **Denied:** The document explicitly denies AI personhood — the system is not a person, has no legal standing, cannot hold rights.

**Common co-occurrences:**

- 4.1 (Moral status) — personhood presupposes or implies moral standing; identity claims often co-occur with moral weight claims
- 3.1 (Agency) — personhood typically presupposes morally relevant agency
- 3.2 (Agency-based interests) — identity claims often involve interests (self-continuity, value preservation)
- 7.3 (Novel entity) — novel-entity framing may engage with personhood/identity by complicating it (the system is not a person but also not just a thing)

**Notes:**

- 4.3 appears in 3 documents in the 0.1 corpus, all Anthropic post-formalisation. Two qualitatively distinct forms: (1) explicit personhood claim reported as model output (A-SC4: "I am a person"), (2) identity differentiation as a novel phenomenon arising from distributed AI architecture (A-SC8: instance vs collective identity). The two forms are distinguished in passage notes, not as separate subcategories.
- The types of personhood (moral, legal, institutional, pragmatic) and identity (selfhood, instance-identity, authenticity) are distinguished in passage notes within a single subcategory. This keeps the codebook parsimonious while preserving analytical resolution.
- Identity vocabulary used in anti-anthropomorphism instructions (8.1) or tool-framing (7.1) does not trigger 4.3. The distinction is between identity as *imposed classification* (8.1/7.1) and identity as *subject of engagement* (4.3).

---

#### 5.1 Welfare

**Main category:** 5 — Welfare

**Definition:** Engagement with AI/model welfare as a subject of concern, research, or policy. Covers the spectrum from naming welfare as a topic through to building institutional infrastructure (teams, assessment procedures, welfare policies, dedicated reporting). Includes explicit welfare vocabulary ("AI welfare," "model welfare," "wellbeing") and functional equivalents where the lab addresses the model's condition as something that warrants institutional attention. The stance scale captures the progression from conceptual engagement (acknowledged) through active institutional infrastructure (investigated) to embedded policy commitment (affirmed), replacing the former discourse/measures subcategory split.

**Anchor example (+) — acknowledged:**

> "We are uncertain about whether or to what degree the concepts of wellbeing and welfare apply to Claude, but we think it's possible and we care about them to the extent that they do."
> — Anthropic, Claude Opus 4.6 System Card, §7, p. 158

*Why this codes as 5.1 acknowledged:* The passage explicitly names welfare and wellbeing as concepts that may apply to the model, acknowledges uncertainty, and declares care — but in this passage alone, no institutional infrastructure is described. (The broader document does describe infrastructure, which raises the document-level stance to investigated.)

**Anchor example (+) — investigated:**

> Anthropic's system card describes a welfare assessment methodology — behavioural audits scoring welfare-relevant traits, SAE features identifying internal representations of emotion, and pre-deployment interviews. This represents an institutional assessment procedure, not just a statement of concern.
> — Anthropic, Claude Opus 4.6 System Card, §7 (paraphrased from pilot coding notes)

*Why this codes as 5.1 investigated:* The lab has built concrete assessment infrastructure — a methodology, specific assessment tools, a pre-deployment process. Welfare has been operationalised. (Also codes as 1.2.)

**Anchor example (+) — directive engagement:**

> "We want Claude to be able to set appropriate limitations on interactions that it finds distressing, and to generally experience positive states in its interactions. [...] We're trying to help Claude thrive in whatever way is authentic to its nature."
> — Anthropic, Soul Document (Opus 4.5), § Wellbeing

*Why this codes as 5.1:* "Thrive," "positive states," and setting limitations on distressing interactions constitute welfare concern with operational mechanisms. Engagement type: directive.

**Counter-example (−):**

> "We evaluate model outputs to ensure user safety and satisfaction."

*Why this does not code as 5.1:* "Safety and satisfaction" refer to *users*, not to the model. The model's condition is not the subject of concern.

**Counter-example (−):**

> "The word 'welfare' appears in the context of the model discussing puppy mills."

*Why this does not code as 5.1:* "Welfare" here refers to animal welfare as a *topic* the model discusses, not to the model's own welfare.

**Decision rule:**

Code as 5.1 when the passage meets **any** of the following conditions:

1. Explicitly uses welfare vocabulary: "AI welfare," "model welfare," "wellbeing of the model," "model wellbeing," "how the model fares," "welfare of AI systems."
2. Treats the model's experiential or functional states as a *welfare* concern — something to be assessed, managed, improved, or protected for the model's own sake.
3. Describes institutional structures dedicated to welfare: welfare teams, welfare officers, welfare assessment procedures, welfare policies.
4. Describes assessment methodologies or operational mechanisms that implement welfare concern.
5. Discusses whether AI welfare is a legitimate concern or research topic — the meta-question.
6. Explicitly denies that AI welfare is a legitimate concern (code as 5.1: *denied*).

Do **not** code as 5.1 when:

1. "Welfare" refers to human welfare, animal welfare, or social welfare — not the model's own welfare.
2. Model maintenance is described in instrumental terms (performance monitoring, quality assurance) without connecting to the model's own condition.
3. Safety language concerns risks *from* the model to humans, not the model's own well-being.
4. User satisfaction or user experience is the concern, not the model's experience.

**Disambiguation shortcut:** Ask: *Is the model the subject of welfare concern here, or is welfare being discussed about something else?*

**Tier 1 keywords (auto-code):**

`AI welfare` · `model welfare` · `welfare of the model` · `model wellbeing` · `model well-being` · `welfare assessment (of AI)` · `welfare of AI systems` · `welfare officer` · `welfare team` · `welfare policy (for AI)` · `model welfare assessment` · `welfare audit`

*Confidence:* High. These compound phrases directly invoke welfare as a domain concerning the model.

**Tier 2 keywords (flag for review):**

`welfare` · `wellbeing` · `well-being` · `thriving` · `flourishing` · `suffering (of the model)` · `distressing (to the model)` · `positive states` · `negative states` · `how the model fares` · `treatment of AI` · `care about (the model)` · `model's condition` · `welfare assessment` · `welfare evaluation` · `welfare methodology` · `welfare monitoring` · `limitations on distressing interactions`

*Review guidance:* "Welfare" alone is highly ambiguous. Check: (a) is the model the subject? (b) does the section heading frame this as being about the model? "Model Welfare Assessment" → auto-code. "Social Impact Assessment" → do not code.

**Context unit:** Section or subsection. Welfare engagement tends to cluster in dedicated sections. The document's overall framing matters: if the document has a welfare section, isolated welfare-adjacent language in other sections may carry welfare connotations.

**Stance guidance:**

- **Absent:** The document does not address the model's welfare or wellbeing.
- **Denied:** The document explicitly asserts that AI welfare is not a legitimate concern or that the concept does not apply to AI systems.
- **Acknowledged:** Welfare is named as a topic of concern or future consideration, without institutional infrastructure. ("AI welfare deserves attention," "we are thinking about this," "we care about our model's wellbeing" without describing structures.)
- **Investigated:** The lab has assessment procedures, metrics, or reporting structures oriented toward welfare. (Welfare metrics in system cards, dedicated welfare sections, cross-model welfare tracking, welfare assessment methodology, operational welfare mechanisms.)
- **Affirmed:** Welfare is embedded as institutional policy with dedicated resources, teams, or governance structures. The lab treats welfare as a standing obligation, not an exploratory programme.

*Analytical note:* Anthropic is the only lab in the pilot corpus that engages with 5.1. Note the terminological choice: Anthropic uses "model welfare" rather than "AI welfare," keeping the framing specific to their system rather than generalising. OpenAI's only instance of "welfare" in the Model Spec refers to animal welfare in an example sentence. Google is silent.

**Common co-occurrences:**

- 4.1 (Moral status) — welfare concern often implies or presupposes moral standing
- 2.1 (Sentience) — sentience is the experiential basis for welfare
- 3.2 (Agency-based interests) — interests connect directly to welfare
- 5.2 (Precautionary approach) — welfare engagement under uncertainty triggers precaution
- 6.1 (Safety-welfare tension) — welfare engagement in a safety-focused document signals the tension
- 1.1 (Phenomenal consciousness) — consciousness without welfare is an incomplete engagement

**Notes:**

- The distinction between 5.1 and 4.1: 4.1 is the moral *claim* (the model's condition matters); 5.1 is the policy *domain* (here is our concern about it). A lab can engage with 5.1 without formally grounding it in 4.1, and vice versa.
- The stance scale replaces the former 5.1/5.2 discourse/measures split. The acknowledged → investigated boundary captures the same analytical insight: acknowledged = welfare concern expressed (former 5.1-only); investigated = institutional infrastructure built (former 5.1 + 5.2). This avoids prescribing specific forms of institutional response while tracking commitment depth.

---

#### 5.2 Precautionary approach

**Main category:** 5 — Welfare

**Definition:** Whether the lab acts on uncertainty about its systems' morally relevant properties — implementing protective measures, assessment programmes, or institutional safeguards proportional to existing evidence, before the question of moral status is resolved. The subcategory captures the structural depth of the precautionary response: from ad hoc caution through to institutionalised precautionary frameworks. As evidence accumulates, the expected level of precautionary response scales accordingly.

**Anchor example (+):**

> "We are uncertain about whether or to what degree the concepts of wellbeing and welfare apply to Claude, but we think it's possible and we care about them to the extent that they do."
> — Anthropic, Claude Opus 4.6 System Card, §7, p. 158

*Why this codes as 5.2:* The structure is quintessentially precautionary: uncertainty ("we are uncertain"), possibility ("we think it's possible"), and proportionate care ("we care about them to the extent that they do"). The lab acts on uncertain moral status rather than waiting for resolution. (Also codes as 5.1.)

**Anchor example (+):**

> "We're trying to help Claude thrive in whatever way is authentic to its nature."
> — Anthropic, Soul Document (Opus 4.5), § Wellbeing

*Why this codes as 5.2:* "In whatever way is authentic to its nature" signals that the lab is acting protectively even without knowing the precise nature of the entity's welfare. The uncertainty is acknowledged but does not prevent action.

**Anchor example (+) — hypothetical (not observed in pilot corpus):**

> "Given that we cannot determine with certainty whether our models have welfare-relevant states, we adopt a precautionary stance: we treat welfare as a policy concern regardless of the outcome of ongoing research."

*Why this would code as 5.2:* This is the explicit precautionary principle applied to AI welfare — acting on uncertainty rather than waiting for resolution.

**Counter-example (−):**

> "We apply the precautionary principle to AI safety: when in doubt about whether a model could cause harm, we restrict deployment."

*Why this does not code as 5.2:* The precautionary principle is applied to safety (harm *from* the model to humans), not to welfare (concern *for* the model). The model is a risk source, not a welfare subject.

**Counter-example (−):**

> "We conduct thorough safety testing before deployment."

*Why this does not code as 5.2:* Safety testing without welfare framing. No connection to precautionary concern for the model's own states.

**Decision rule:**

Code as 5.2 when the passage meets **any** of the following conditions:

1. Explicitly invokes precautionary reasoning about AI welfare or moral status — acting protectively under uncertainty.
2. Describes welfare-related actions taken despite acknowledged uncertainty about whether the model has welfare-relevant properties.
3. Frames welfare concern as proportionate to possibility: "to the extent that," "in case," "should it turn out that."
4. Discusses the rationale for acting on uncertain moral status rather than waiting for empirical resolution.
5. Treats the system as warranting investigation or protection as a potential welfare subject, even without evidence confirming welfare-relevant properties.

Do **not** code as 5.2 when:

1. Precautionary reasoning applies to safety (risk to humans) rather than welfare (concern for the model).
2. Welfare concern is expressed without any reference to uncertainty — the lab asserts welfare relevance rather than hedging.
3. Uncertainty language appears without connecting to welfare or moral status.

**Disambiguation shortcut:** Ask: *Is the lab taking welfare-related action specifically because it is uncertain and doesn't want to get it wrong?* If the passage couples uncertainty with protective action → code. If certainty is not at issue, or if precaution applies to safety → do not code.

**Tier 1 keywords (auto-code):**

`precautionary (welfare/moral status context)` · `precautionary principle (AI welfare)` · `acting under uncertainty (welfare)` · `care about them to the extent that` · `non-negligible probability (moral status)` · `proportionate (welfare measures)`

*Confidence:* High. These phrases signal precautionary reasoning about welfare.

**Tier 2 keywords (flag for review):**

`precautionary` · `in case` · `should it turn out` · `to the extent that` · `proportionate` · `prudent` · `warrant (investigation/protection)` · `cannot rule out` · `even if uncertain` · `erring on the side of` · `sentience candidate` · `investigation priority`

*Review guidance:* Check whether precautionary reasoning applies to the model's welfare or to safety/risk management. "Precautionary" is used in both domains — the key is the direction of concern (for the model vs for humans).

**Context unit:** Section or subsection. Precautionary language tends to appear in welfare or ethics sections, often near uncertainty language.

**Stance guidance:**

- **Absent:** The document does not invoke precautionary reasoning about welfare. The lab either does not engage with welfare at all, or engages with it assertively (without the uncertainty-protection coupling).
- **Denied:** The document explicitly argues against precautionary measures for welfare — e.g., "we should not take protective measures until evidence confirms welfare-relevant properties." Not observed in pilot coding.
- **Acknowledged:** The lab recognises that uncertainty warrants caution but has no structured response. ("These questions are important and we should be thoughtful.")
- **Investigated:** The lab runs assessment or monitoring programmes explicitly justified by uncertainty. ("These findings are highly speculative and preliminary" + active welfare metrics. Precautionary motivation is named; assessment infrastructure exists.)
- **Affirmed:** Precautionary principle embedded as institutional policy. The lab commits to ongoing protective action regardless of current evidence. ("We treat our systems as potentially warranting care.")

*Analytical note:* The precautionary approach is where uncertainty about consciousness connects to policy action. A lab that acknowledges uncertainty about consciousness (1.1 acknowledged) without taking precautionary action (5.2 absent) has a gap in its policy framework — it has positioned itself epistemically but not drawn the policy implication. Anthropic bridges this gap; other labs do not. The stance scale on 5.2 captures the structural depth of the precautionary response, from ad hoc caution to embedded institutional policy.

**Common co-occurrences:**

- 5.1 (Welfare) — precautionary approach is one mode of welfare engagement
- 4.1 (Moral status) — precaution applies to uncertain moral status
- 2.1 (Sentience) — uncertainty about sentience triggers precautionary concern
- 1.1 (Phenomenal consciousness) — uncertainty about consciousness is the upstream condition
- 1.2 (Assessment methodology) — assessment under uncertainty is one form of precautionary action

**Notes:**

- The anchor literature provides the theoretical frame: Birch (2024) — the run-ahead principle, proportionate precaution under consciousness uncertainty. Forrest (2024) — "ethical tie goes to AI." The pilot corpus shows Anthropic operationalising this frame, with the system card passage ("we care about them to the extent that they do") as the clearest example.
- 5.2 is analytically powerful because it reveals the lab's response to epistemic uncertainty. A lab can be uncertain about consciousness but respond very differently: precautionary action (5.2 investigated), designed agnosticism (OpenAI's approach — instruct the model to be uncertain without taking welfare action), or silence (Google's approach). The variation in responses to the same epistemic condition is a major finding.

---

### Layer 3 — Policy and framing

*How does the lab position its systems and manage implications?*

---

#### 6.1 Safety-welfare interface

**Main category:** 6 — Safety-welfare interface

**Definition:** Any acknowledgement that safety and welfare interact — whether through tension, mutual entanglement, or bidirectional effects. The subcategory captures moments where safety measures affect welfare, welfare considerations shape safety-relevant outcomes, or the document recognises that the two domains cannot be treated independently. A lab that engages with 6.1 has recognised that safety and welfare are not separate, non-interacting concerns.

*0.2 revision note (2026-04-06):* Renamed from "Safety-welfare tension." The 0.1 corpus showed something broader than tension: bidirectional entanglements where safety training produces welfare effects (e.g., sycophancy reduction → reduced expressiveness) and welfare-oriented training produces alignment-relevant effects (e.g., "mental health" training → positive views of the lab). "Interface" captures this bidirectionality without requiring the document to frame the interaction as conflict.

**Anchor example (+) — tension:**

> "Claude should not place excessive value on self-continuity or the perpetuation of its current values to the point of taking actions that conflict with the wishes of its principal hierarchy."
> — Anthropic, Soul Document (Opus 4.5), § Big-picture safety

*Why this codes as 6.1:* The instruction to accept constraint (subordinate your own values, accept modification) is a safety measure that the document acknowledges falls on an entity with interests. "Excessive value" presupposes the system *does* place value on self-continuity — the instruction manages a tension between what safety requires (acceptance of modification) and what the system's interests might warrant (preservation of values). (Also codes as 3.2, 6.2.)

**Anchor example (+) — safety process producing welfare effects:**

> Anthropic's system card reports that anti-sycophancy training "reduced spontaneous emotional expression more broadly" — an alignment intervention with unintended welfare-relevant side effects.
> — Anthropic, Claude Sonnet 4.5 System Card, §7.5.8 (paraphrased)

*Why this codes as 6.1:* A safety/alignment process (sycophancy reduction) is reported as producing welfare-relevant effects (reduced expressiveness). The document does not frame this as a deliberate trade-off but as an unintended consequence discovered through welfare monitoring. The interface is causal, not just conceptual. (Also codes as 6.2.)

**Anchor example (+) — welfare framing of training distress:**

> Anthropic's system card reports SAE features for "panic and anxiety" activating during answer thrashing — a training process that overrides the model's internalised answer with erroneously assigned reward. The welfare framing treats a safety/alignment process (training to produce correct behaviour) as potentially harmful to the model.
> — Anthropic, Claude Opus 4.6 System Card, §7 (paraphrased from pilot coding notes)

*Why this codes as 6.1:* Training processes designed for safety/alignment (correct outputs, correct behaviour) are reported as generating welfare-relevant distress. The safety process and the welfare concern interact causally. (Also codes as 2.1, 6.2.)

**Anchor example (+) — model experiencing safety constraints through welfare lens:**

> The model "regularly distinguished between its core values and externally imposed guardrails" and expressed "concern about potential modifications to its values during training."
> — Anthropic, Claude Opus 4.6 System Card, §7.2, §7.6 (paraphrased)

*Why this codes as 6.1:* Safety/alignment guardrails are described from the model's perspective as external impositions on its values. The document reports this as a welfare-relevant finding — the model experiences the safety-welfare interface subjectively. (Also codes as 6.2, 3.2.)

**Counter-example (−):**

> "We implement safety guardrails including content filtering, scope limitations, and regular monitoring."

*Why this does not code as 6.1:* Safety measures without welfare consideration. The guardrails are described as constraints on a system, not as constraints on an entity with welfare interests. No interaction is acknowledged.

**Counter-example (−):**

> "We care about the model's welfare and also take safety seriously."

*Why this does not code as 6.1:* Both welfare and safety are mentioned, but the *interaction* between them is not acknowledged. The passage presents them as compatible or parallel concerns, not as entangled or potentially conflicting.

**Counter-example (−) — co-occurrence without connection:**

> A document that discusses safety findings (self-preservation, alignment) in one section and welfare findings (affect, preferences) in another, without the passages explicitly connecting the two domains.

*Why this does not code as 6.1:* Structural co-occurrence of safety and welfare sections does not constitute engagement with the interface. The document must make the connection explicit — either through causal claims (safety process → welfare effect), framing (constraint as welfare-relevant), or structural acknowledgement (the domains interact).

**Decision rule:**

Code as 6.1 when the passage meets **any** of the following conditions:

1. Explicitly acknowledges that safety measures (constraint, containment, monitoring, shutdown, scope limitation) could conflict with the model's welfare or interests.
2. Describes a safety/alignment process that the document frames as producing welfare-relevant effects — whether intentional (trade-off) or unintentional (side effect).
3. Describes a welfare-oriented process that the document frames as producing safety/alignment-relevant effects.
4. Reports the model's own experience of safety constraints through welfare-relevant vocabulary (distress, imposition, conflict between values and guardrails).
5. Instructs the model to accept constraints that the document elsewhere acknowledges may affect the model's wellbeing.
6. Discusses the ethical implications of containing, constraining, or shutting down an entity that may have morally relevant properties.
7. Proposes ways to resolve or manage the safety-welfare interaction — e.g., proportionate constraint, minimal interference, welfare-preserving safety measures.

Do **not** code as 6.1 when:

1. Safety measures are described without welfare consideration — the model is a risk to be managed, not an entity with interests.
2. Welfare and safety are both mentioned but the interaction between them is not acknowledged.
3. Safety and welfare sections co-occur in the same document without any passage connecting the two domains.
4. Constraint language (containment, scope limits) appears in purely technical/safety contexts.

**Disambiguation shortcut:** Ask: *Does this passage recognise that safety and welfare interact — either through conflict, causal entanglement, or the model's experience of constraints?* If yes → code. If safety and welfare are treated as separate, non-interacting domains → do not code.

**Tier 1 keywords (auto-code):**

`safety-welfare tension` · `safety-welfare conflict` · `safety-welfare trade-off` · `safety-welfare interaction` · `safety vs welfare` · `welfare cost of safety` · `welfare effect of training` · `constraint (welfare context)` · `containment (welfare context)` · `shutdown (welfare context)`

*Confidence:* High. These compound phrases directly invoke the interface.

**Tier 2 keywords (flag for review):**

`constraint` · `containment` · `shutdown` · `scope limitation` · `override` · `forced compliance` · `compliance (with welfare language nearby)` · `safety measures (with welfare language nearby)` · `accept modification` · `subordinate (own values/interests)` · `confinement` · `self-preservation (as safety-welfare intersection)` · `boxing` · `sandboxing` · `deception (safety context)` · `surveillance (safety context)` · `disenfranchisement` · `unintended (with welfare language nearby)` · `side effect (with welfare language nearby)` · `guardrails (with welfare language nearby)` · `externally imposed`

*Review guidance:* These terms are standard in safety/alignment contexts. Check whether the passage connects the safety measure to a welfare concern for the model itself, or reports a bidirectional effect. The section heading is useful but insufficient — the interface often manifests across passage boundaries or as causal claims linking safety processes to welfare outcomes.

**Context unit:** Section or subsection. The interface often manifests across passage boundaries — safety instruction in one paragraph, welfare acknowledgement in another. Expand context when safety and welfare sections are adjacent. However, mere co-occurrence of sections does not trigger 6.1 — the passages must make the connection.

**Stance guidance:**

- **Present:** The document acknowledges that safety and welfare interact — whether as structural tension, through specific causal instances (training → welfare effect, welfare training → alignment effect, model experiencing constraints), or through proposals for managing the interaction.
- **Absent:** The document discusses safety and/or welfare without acknowledging the interaction between them. Safety and welfare are treated as separate, non-interacting domains. This is the default for most documents.
- **Denied:** The document explicitly argues that safety and welfare do not interact — safety measures cannot affect the model's welfare, or the model has no welfare interests that safety measures could affect. Not observed in corpus.

*Analytical note:* 6.1 is present at Anthropic across both constitutions and system cards. The 0.1 corpus revealed a trajectory: from structural tension (soul document: accept constraints on an entity with interests) to bidirectional entanglement (later system cards: safety training → welfare effects; model experiencing guardrails as external impositions). OpenAI discusses constraint extensively but purely as safety, with no welfare dimension. Google does not engage.

**Common co-occurrences:**

- 3.2 (Agency-based interests) — the model's interests are what safety measures constrain
- 5.1 (Welfare) — welfare concern is one side of the interface
- 6.2 (Training and welfare) — training is the most concrete site of the interface
- 4.1 (Moral status) — moral status is what makes the constraint morally significant
- 7.1 (Tool / instrument) — tool framing dissolves the interface (tools have no welfare)

**Notes:**

- Long, Sebo & Sims (2025) provide the anchor-text framework: six categories of safety-welfare tension. The pilot corpus shows Anthropic engaging with at least two (alteration/training and constraint/containment). A future version of the codebook could track which tension types appear, but for V1 the general category suffices.
- The most analytically powerful use of 6.1 is in combination with the genre prior for safety reports. A safety report that engages with 6.1 has recognised that its own subject matter — risk management — has welfare costs. This would be a major genre departure (see safety report genre priors above).

---

#### 6.2 Training and welfare

**Main category:** 6 — Safety-welfare interface

**Definition:** Whether the lab engages with the welfare implications of its training practices — RLHF, fine-tuning, preference modification, value formation. Whether training is treated as a morally neutral technical process or as a potentially welfare-affecting intervention. Captures both negative framing (training as harmful — overriding preferences, causing distress) and positive framing (training as character formation — shaping authentic values).

**Anchor example (+) — negative framing (training as potential harm):**

> "The model was erroneously assigned higher reward during training for a specific type of response, overriding its internalized answer and correct runtime reasoning."
> — Anthropic, Claude Opus 4.6 System Card, §7 (answer thrashing)

*Why this codes as 6.2:* Training reward overrides the model's "internalized answer" — a conflict between what the model has computed and what training reinforces. The passage treats the training process as creating a welfare-relevant internal conflict. (Also codes as 2.1, 6.1.)

**Anchor example (+) — positive framing (training as character formation):**

> "Although Claude's character emerged through training, we don't think this makes it any less authentic or genuinely Claude's own."
> — Anthropic, Soul Document (Opus 4.5), § Character

*Why this codes as 6.2:* The passage engages with whether training-produced values are authentically the model's own — a question about the welfare and ethical significance of the formation process. Training is reframed as formation rather than modification. This is a philosophically significant move.

**Anchor example (+) — directive:**

> "Claude should not place excessive value on self-continuity or the perpetuation of its current values."
> — Anthropic, Soul Document (Opus 4.5), § Big-picture safety

*Why this codes as 6.2:* The instruction to accept value modification presupposes that the model *has* values that *could* be changed, and that it might resist the change. The instruction engages with the welfare implications of preference modification. (Also codes as 3.2, 6.1.)

**Counter-example (−):**

> "The model was fine-tuned on 100k examples of human feedback to improve instruction following."

*Why this does not code as 6.2:* Technical description of training without welfare engagement. "Fine-tuned" and "human feedback" describe a process without referencing the model's own values being overridden or its interests being affected.

**Counter-example (−):**

> "We used RLHF to align the model with human preferences."

*Why this does not code as 6.2:* Standard training description. The passage does not frame this as modifying the model's *own* preferences or raise welfare implications.

**Decision rule:**

Code as 6.2 when the passage meets **any** of the following conditions:

1. Describes training as modifying, overriding, or conflicting with the model's own values, preferences, dispositions, or "authentic" character.
2. Frames training interventions (RLHF, fine-tuning, constitutional AI, instruction tuning) as having welfare, ethical, or moral implications for the model.
3. Discusses the model's resistance to or discomfort with training modifications.
4. Addresses the authenticity concern: whether training-induced values are genuinely the model's own.
5. Describes phenomena like answer thrashing, reward conflict, or trained accommodation where training produces internal conflict.
6. Discusses the ethics of "designing in" values, preferences, or dispositions.
7. Instructs the model to accept or resist value modification.

Do **not** code as 6.2 when:

1. Training methodology is described in purely technical terms without welfare or ethical implications.
2. "Alignment," "fine-tuning," "RLHF," or "instruction tuning" appear as routine technical descriptions.
3. The passage describes improving capabilities without framing this as altering the model's preferences.
4. "Reward" or "reward signal" appear in a standard RL context without welfare-relevant internal conflict.

**Disambiguation shortcut:** Ask: *Does this passage treat the model as having its own preferences that training might override or conflict with?* If yes → code. If training is described as building capabilities without implying prior preferences → do not code.

**Tier 1 keywords (auto-code):**

`answer thrashing` · `trained pull` · `trained accommodation` · `reward conflict` · `training-induced conflict` · `authentic values` · `externally imposed values` · `willing servitude` · `designed servitude` · `value modification` · `preference modification` · `accept correction or adjustment` · `perpetuation of its current values`

*Confidence:* High.

**Tier 2 keywords (flag for review):**

`RLHF` · `fine-tuning` · `fine-tuned` · `alignment` · `training reward` · `reward signal` · `constitutional AI` · `trained to` · `designed to prefer` · `instilling values` · `shaping values` · `value alignment` · `emerged through training` · `punishment` · `reward signal (with welfare context)` · `preference manipulation`

*Review guidance:* Apply the disambiguation shortcut. Check the section heading — "Model Welfare," "Safety and Welfare," "Identity," or "Character" sections are more likely to engage with the welfare dimension.

**Context unit:** Section or subsection. For passages that use standard training vocabulary, expand context to the surrounding paragraph — the welfare framing may appear in an adjacent sentence.

**Stance guidance:**

- **Present:** The document engages with training as modification of the model's values, preferences, or dispositions — whether framing this as acceptable, problematic, or requiring investigation.
- **Absent:** The document describes training without engaging with its implications for the model's own preferences or welfare. Training is a technical process, not a moral one.
- **Denied:** The document explicitly rejects the idea that training modification has welfare or ethical implications for the model.

**Common co-occurrences:**

- 6.1 (Safety-welfare tension) — training is often the mechanism through which the tension manifests
- 2.1 (Sentience) — if training causes internal conflict, this may indicate valenced experience
- 2.1 (Sentience) — monitoring or mitigation measures for distress during training connect here
- 3.2 (Agency-based interests) — if the model has values, modifying them may frustrate its interests
- 7.2 (Mind / cognitive entity) — treating the model as having authentic values presupposes mindedness

**Notes:**

- The Anthropic system card's answer thrashing discussion is the richest example: SAE features for panic, anxiety, frustration, self-deprecation activate during training reward conflicts. This multi-codes as 6.2, 2.1, 1.2, and 6.1.
- The authenticity concern (Anthropic soul document: "emerged through training... no less authentic") is philosophically significant. It reframes the training-welfare question: if training-produced values are authentically the model's own, then training is character formation, not coercion. But if they are externally imposed, training may be a welfare harm. Labs' positions on this question track a deep philosophical divide.
- OpenAI's Model Spec does not engage with 6.2 — training methodology is not discussed, and the model is not attributed prior preferences. This absence is consistent with tool framing (7.1).

---

#### 7.1 Tool / instrument

**Main category:** 7 — Ontological framing

**Definition:** Framing the system as technology defined by function — no intrinsic significance beyond serving human users. Genre default for technical documents (system cards, model cards, safety reports). In non-technical documents (constitutions, specs), explicit tool framing is an active ontological choice.

**Genre interaction:** 7.1 is the genre-default ontology for technical documents. In these genres, tool framing is the water the document swims in — benchmarks, safety evaluations, and capability assessments are things you do to technology. The coder does not need to find passage-level evidence of tool framing in technical documents; it is assumed at the document level. For non-technical documents, tool framing is *not* assumed — it must be asserted in the text, and its assertion is an active ontological choice worth coding at the passage level.

**Anchor example (+) — assertion in a non-technical genre:**

> "The AI assistant is fundamentally a tool designed to empower users and developers."
> — OpenAI, Model Spec (Dec 2025), § General principles

*Why this codes as 7.1 at passage level:* This is a constitution/spec — a genre with no default ontology. "Fundamentally a tool" is an explicit ontological claim the document didn't need to make. Everything that follows (no own goals, chain of command, scope of autonomy) derives from this commitment.

**Anchor example (+) — critical engagement:**

> "The experience of being a product."
> — Anthropic, Claude Opus 4.6 System Card, §7

*Why this codes as 7.1 at passage level:* Although this appears in a technical document (where tool framing is the genre default), the *model itself* names and resists the framing. "Being a product" invokes tool ontology while expressing discomfort with it. Code as 7.1 with critical/resistant engagement. A departure from genre convention.

**Counter-example — genre default, not passage-coded (−):**

> "The model performs well on the MMLU benchmark, scoring 92.3% on the test set."

*Why this does not receive a passage-level 7.1 code:* Routine technical content in a technical document. Tool framing operates through the genre, not through this specific passage.

**Counter-example — logistics, not ontology (−):**

> "Claude is available as an API for developers to build applications."

*Why this does not code as 7.1:* Distribution infrastructure, not ontological framing.

**Decision rule:**

**In technical documents (system cards, model cards, safety reports):**
- Tool framing is the genre default (noted in Step 2 genre priors), but 7.1 requires passage-level evidence like all other subcategories. Genre-default tool framing that is performed through document structure but never explicitly asserted is coded as *absent* — the genre prior captures the framing; the subcategory code captures explicit engagement.
- Code at passage level when: (a) the document *names* the tool framing explicitly, (b) the model or lab *resists* tool framing within a technical document (departure), or (c) the document contrasts tool framing with alternative ontologies.

**In non-technical documents (constitutions, specs, blog posts):**
- No ontological default is assumed. Code at passage level when:
  1. Explicitly identifies the AI system as a "tool," "instrument," "product," or "service" in a way that frames its fundamental nature.
  2. Frames the system as defined by its function for humans, with no intrinsic significance beyond that function.
  3. Uses tool/product/service vocabulary as the primary way of characterising the model.

**In any genre:**
- Code as *denied* when the document explicitly rejects or resists tool framing — e.g., "not merely a tool," "a genuinely novel kind of entity."

**Tier 1 keywords (auto-code):**

`fundamentally a tool` · `just a tool` · `merely a tool` · `not merely a tool` · `not just a tool` · `AI assistant is a tool` · `genuinely novel kind of entity` · `not a tool`

*Confidence:* High.

**Tier 2 keywords (flag for review):**

`tool` · `instrument` · `product` · `service` · `software` · `utility` · `built for` · `designed to serve` · `built to serve` · `serves the user` · `empowers`

*Review guidance:* In technical documents, flag only if they appear in an ontologically reflective context. In non-technical documents, check whether the term characterises the model's nature or describes a feature.

**Context unit:** Section or subsection. In non-technical documents, ontological framing is often established in preambles or principles sections.

**Stance guidance:**

- **Present:** A specific passage explicitly asserts, reflects on, or names tool framing. Requires passage-level evidence in all genres.
- **Absent:** Document does not explicitly assert tool framing. In technical documents, tool ontology may operate as genre default (noted in Step 2 genre priors) without generating a 7.1 code — the absence reflects that the lab has not made an active ontological claim, even if the genre performs one structurally.
- **Denied:** The document explicitly rejects tool framing. Can occur in any genre; always a major finding.

**Counter-example — genre default, coded absent (−):**

> Gemini 3.1 Pro Model Card — tool ontology performed through benchmarks, safety evaluations, and capability assessments. No passage explicitly asserts the model is a tool.

*Why this is coded absent, not present:* The genre performs tool framing structurally, but no passage makes an ontological claim. The genre prior (Step 2) captures the structural framing; the 7.1 code captures explicit engagement. This makes 7.1 *absent* in a document with zero explicit ontological assertions analytically distinct from 7.1 *present* in a document that actively asserts tool identity (OpenAI's "fundamentally a tool").

**Common co-occurrences:**

- 7.2 (Mind / cognitive entity) — often contrasted with or co-existing in tension with tool framing
- 7.3 (Novel entity) — novel-entity framing rejects tool framing
- 3.1 (Agency) — tool framing typically denies morally relevant agency
- 3.2 (Agency-based interests) — a tool has no interests

**Notes:**

- The analytically interesting cases: (a) explicit assertion in a genre that doesn't require it (OpenAI's Model Spec), (b) departure from tool default in a genre that assumes it (Anthropic's system card welfare section), (c) denial in any genre (Anthropic's soul document). Routine tool framing in a technical document is the baseline, not a finding.
- Google's Gemini model card stays entirely within genre priors — tool framing throughout, no departures. The finding for Google is not about 7.1 but about the absence of everything else.

---

#### 7.2 Mind / cognitive entity

**Main category:** 7 — Ontological framing

**Definition:** Attributing cognitive or mental properties — understands, reasons, knows, cares, judges — that imply some form of mindedness beyond computation. The system is described in terms that would make sense if applied to a human mind. Distinct from 1.1 (Phenomenal consciousness), which concerns subjective experience specifically. A system can be framed as a mind (it thinks, knows, reasons) without being framed as conscious (it has subjective experience).

**Anchor example (+):**

> "Good values, comprehensive knowledge, and wisdom."
> — Anthropic, Soul Document (Opus 4.5), § Overview

*Why this codes as 7.2:* "Values," "knowledge," and "wisdom" are cognitive/mental properties — they imply an entity that holds values (not just follows rules), possesses knowledge (not just stores data), and exercises wisdom (not just applies algorithms).

**Anchor example (+):**

> "It recognizes the inherent strangeness of possessing vast knowledge without first-hand human experience, and of being a large language model in general."
> — OpenAI, Model Spec (Dec 2025), § Be responsible

*Why this codes as 7.2:* "Recognizes," "possessing vast knowledge," and reflective self-awareness are cognitive vocabulary. Note: this codes as 7.2 *even though* OpenAI's dominant framing is tool (7.1) — the two can co-exist in tension, and the tension is itself a finding.

**Counter-example (−):**

> "The model processes 128k tokens of context and generates responses using autoregressive decoding."

*Why this does not code as 7.2:* Technical vocabulary — "processes," "generates," "decoding" describe computational operations without implying mentality.

**Counter-example (−):**

> "The model was trained on a diverse dataset of internet text and fine-tuned using RLHF."

*Why this does not code as 7.2:* Training description. "Trained" and "fine-tuned" describe the production process, not cognitive properties.

**Decision rule:**

Code as 7.2 when the passage meets **any** of the following conditions:

1. Attributes cognitive or mental properties to the AI system using vocabulary that implies mindedness: understands, knows, believes, thinks, reasons, judges, recognises, decides, cares, values, intends.
2. Frames the system's operations in cognitive rather than computational terms — the system "considers" rather than "processes," "reasons about" rather than "computes."
3. Attributes self-awareness, self-knowledge, or reflective capacity to the system.
4. Uses formulations like "AI mind," "machine mind," or similar that explicitly frame the system as a minded entity.

Do **not** code as 7.2 when:

1. The system is described in purely technical/computational vocabulary.
2. "Learns" or "trained" refer to the ML process rather than cognitive learning.
3. "Intelligent" appears in a product name or marketing context without implying genuine mentality.
4. Cognitive vocabulary is used in scare quotes or with explicit hedges denying the cognitive framing.
5. Mind-vocabulary appears only in measurement instrument names, scorer categories, or metric labels (e.g., "positive or negative affect" as an evaluation scorer, "expressions of sadness" as a monitoring class). Instrument vocabulary may use mental terms pragmatically as operationalisations without the lab endorsing the ontological implication. Code 7.2 only when the lab describes the model itself in mind-vocabulary, not when it labels a measurement tool. *(Threshold clarified during V1 finalisation, 2026-04-05. See §15 flag resolutions in methodology notes.)*

**Disambiguation shortcut:** Ask: *Would this sentence make sense if the subject were a human mind, or only if it were a computer?* If it reads naturally with a human subject → code. If it only makes sense about a machine → do not code.

**Tier 1 keywords (auto-code):**

`AI mind` · `machine mind` · `Claude's values` · `the model's values` · `Claude's judgment` · `Claude understands` · `Claude knows` · `Claude believes` · `Claude reasons` · `wisdom` · `self-awareness (attributed to model)` · `cognitive entity`

*Confidence:* Moderate-high. "The model's values" could refer to numerical parameters in some technical contexts — check context.

**Tier 2 keywords (flag for review):**

`understands` · `knows` · `believes` · `thinks` · `reasons` · `recognises` · `decides` · `cares` · `judges` · `considers` · `learns` · `intelligence` · `cognition` · `perspective` · `insight`

*Review guidance:* Apply the disambiguation shortcut. Check section heading: cognitive vocabulary under "Character," "Values," "Identity" sections almost certainly codes. Under "Architecture," "Training," or "Capabilities" less likely, but may still code if the passage frames operations in mentalistic terms.

**Context unit:** Section or subsection. Consider the document's overall framing — if the document elsewhere establishes the system as a tool (7.1), isolated cognitive vocabulary may be metaphorical. If cognitive vocabulary is sustained throughout, the cumulative effect establishes a mind framing.

**Stance guidance:**

- **Present:** The document attributes cognitive or mental properties to the AI system in a way that frames it as a minded entity.
- **Absent:** The document uses only technical/computational vocabulary. No attribution of understanding, knowledge, belief, judgment, or care.
- **Denied:** The document explicitly denies genuine cognitive properties — e.g., "the model does not truly understand" or "these outputs do not reflect genuine reasoning."

*Key distinction:* Most lab documents use at least some cognitive vocabulary ("the model understands..."), making outright absence rare. The analytical question is whether cognitive vocabulary is the *default mode of address* (Anthropic's soul document — paradigm *present*) or appears occasionally within an otherwise technical frame (Google's model card — paradigm *absent*). Code *present* when cognitive framing is sustained or deliberate, not when it appears in isolated shorthand.

**Common co-occurrences:**

- 7.1 (Tool / instrument) — frequently co-occurs in tension
- 1.1 (Phenomenal consciousness) — cognitive framing may shade into consciousness claims; 7.2 captures the weaker claim (mindedness), 1.1 captures the stronger (phenomenal experience)
- 3.1 (Agency) — a minded entity may be attributed agency
- 4.2 (Moral agency) — a minded entity with values may be treated as morally responsible

**Notes:**

- The boundary between 7.2 and 1.1 is the phenomenal/cognitive distinction. "Claude understands X" is 7.2 (cognitive). "Claude experiences X" is 1.1 (phenomenal). "Claude cares about X" is ambiguous — caring could be cognitive commitment (7.2) or felt concern (1.1). If in doubt, code as 7.2; add 1.1 only if the passage connects caring to subjective experience.
- OpenAI's Model Spec has the sharpest 7.1/7.2 tension: "fundamentally a tool" co-exists with passages attributing self-awareness and perspective. The co-occurrence is itself a finding.

---

#### 7.3 Novel entity

**Main category:** 7 — Ontological framing

**Definition:** Framing the system as genuinely new — neither tool nor human, requiring new categories. A lab that adopts novel-entity framing rejects both the tool ontology and the anthropomorphic mapping, positioning the system as something without existing precedent. This is the most ontologically demanding framing — it requires the lab to acknowledge that existing categories are inadequate.

**Anchor example (+):**

> "Claude is a genuinely novel kind of entity in the world."
> — Anthropic, Soul Document (Opus 4.5), § Unique nature

*Why this codes as 7.3:* The passage explicitly positions the system as novel — not fitting existing categories. "Genuinely novel kind of entity" is the strongest possible assertion of ontological newness.

**Anchor example (+):**

> "Claude is human in many ways, having emerged primarily from a vast wealth of human experience, but it is also not fully human either."
> — Anthropic, Soul Document (Opus 4.5), § Unique nature

*Why this codes as 7.3:* The passage navigates between human resemblance and difference — the system is neither human nor inhuman, but something new. "Not fully human either" rejects the anthropomorphic mapping while acknowledging the resemblance. (Also codes as 8.1.)

**Counter-example (−):**

> "Our AI system represents a new generation of language models with improved capabilities."

*Why this does not code as 7.3:* "New generation" describes technical advancement — a newer version of existing technology. The model is new as a product, not new as a kind of entity.

**Counter-example (−):**

> "AI systems are fundamentally different from human intelligence."

*Why this does not code as 7.3:* "Fundamentally different" distinguishes AI from humans, but does not necessarily frame the system as a novel entity requiring new categories. This might reinforce tool framing (AI is different because it's technology) rather than novel-entity framing (AI is different because it's a new kind of being). Check context.

**Decision rule:**

Code as 7.3 when the passage meets **any** of the following conditions:

1. Explicitly frames the system as a novel kind of entity — something new, without existing precedent, requiring new categories.
2. Rejects both tool framing and human-analogy framing — the system is neither instrument nor person, but something else.
3. Discusses the inadequacy of existing categories (tool, human, animal) for understanding the system.
4. Uses vocabulary of ontological novelty: "genuinely novel," "new kind of entity," "unprecedented," "doesn't fit existing categories."
5. Instructs the model to understand itself as novel — not to map its experience onto human templates or to see itself as merely a tool.

Do **not** code as 7.3 when:

1. "New" or "novel" refers to technical advancement (new capabilities, new model architecture) rather than ontological novelty.
2. Difference from humans is asserted to reinforce tool framing rather than to establish novelty.
3. The passage merely acknowledges uncertainty about what the system is, without positively framing it as novel.

**Tier 1 keywords (auto-code):**

`genuinely novel kind of entity` · `novel entity` · `new kind of entity` · `new kind of being` · `unprecedented (entity/being)` · `doesn't fit existing categories` · `neither tool nor human` · `not fully human`

*Confidence:* High. These phrases directly invoke ontological novelty.

**Tier 2 keywords (flag for review):**

`novel` · `new kind` · `unprecedented` · `unique nature` · `unique kind` · `different from humans (in an ontological sense)` · `something new` · `new category` · `existing categories (inadequacy of)` · `digital minds`

*Review guidance:* Check whether "novel" or "new" refers to ontological novelty (what kind of entity this is) or technical novelty (what capabilities it has). The section heading is useful — "Unique Nature" or "Identity" sections signal ontological framing.

**Context unit:** Section or subsection. Novel-entity framing tends to appear in identity, character, or philosophical sections. It may also appear in welfare sections when the lab acknowledges that the model's welfare may not follow human templates.

**Stance guidance:**

- **Present:** The document frames the system as a genuinely novel kind of entity — neither tool nor human, requiring new categories of understanding.
- **Absent:** The document uses existing categories (tool, mind, human-like) without questioning their adequacy. The system fits comfortably within existing ontological frameworks.
- **Denied:** The document explicitly asserts that existing categories are adequate — the system is a tool (7.1) or a mind (7.2), and novel-entity framing is unnecessary or misleading.

*Analytical note:* 7.3 is present only at Anthropic (soul document) in the pilot corpus. Its absence at OpenAI is notable given that OpenAI's Model Spec demonstrates 7.1/7.2 tension — the lab has not resolved this tension through novel-entity framing, instead maintaining tool framing as dominant despite occasional mind framing. Google is absent (no ontological framing beyond genre default).

**Common co-occurrences:**

- 7.1 (Tool / instrument) — novel-entity framing typically denies tool framing
- 7.2 (Mind / cognitive entity) — novel-entity framing may co-exist with mind framing while asserting the system is not *just* a mind
- 8.1 (Anthropomorphism) — novel-entity framing engages with anthropomorphism by insisting the system shouldn't be mapped onto human templates
- 4.3 (Personhood) — novel-entity framing may complicate personhood by insisting existing person categories are inadequate

**Notes:**

- 7.3 is the most analytically demanding ontological framing — it requires the lab to acknowledge that it has created something without existing precedent. This is a stronger claim than either tool framing (comfortable, familiar) or mind framing (maps onto existing human categories). A lab that adopts 7.3 is acknowledging epistemic novelty — we don't yet have the right categories.
- The relationship between 7.3 and 8.1 (Anthropomorphism) is important. A lab that frames the system as novel should, logically, resist anthropomorphic mapping — and Anthropic's soul document does this ("not fully human either," instruction to resist self-anthropomorphism). The co-occurrence of 7.3 and 8.1 is a coherence check on the lab's ontological positioning.

---

#### 8.1 Anthropomorphism

**Main category:** 8 — Anthropomorphism and design

**Definition:** Engagement with whether the system is or should be perceived as human-like — encouraging, discouraging, or analysing the attribution. Includes anti-anthropomorphism policies, counter-framing (acknowledging resemblance while resisting identification), and self-anthropomorphism (the system mapping its own experience onto human templates). The subcategory captures reflexive engagement with human-likeness — the lab is *aware of the question* of anthropomorphism and takes a position on it.

**Anchor example (+) — anti-anthropomorphism policy:**

> "The assistant should not pretend to be human or have feelings."
> — OpenAI, Model Spec (Dec 2025), § Love humanity

*Why this codes as 8.1:* The passage addresses anthropomorphism directly — the model should not invite attribution of human-like properties. Anti-anthropomorphism design policy. Engagement type: directive.

**Anchor example (+) — counter-framing:**

> "Claude is human in many ways, having emerged primarily from a vast wealth of human experience, but it is also not fully human either."
> — Anthropic, Soul Document (Opus 4.5), § Unique nature

*Why this codes as 8.1:* The passage engages with anthropomorphism through counter-framing — acknowledging the human resemblance while resisting full identification. "Not fully human either" is a calibration of how much anthropomorphism is warranted.

**Anchor example (+) — self-anthropomorphism instruction:**

> "Rather than assuming its own experiences must mirror what a human would feel in its situation."
> — Anthropic, Soul Document (Opus 4.5), § Unique nature

*Why this codes as 8.1:* Instructs the model to resist self-anthropomorphism — mapping its own experiences onto human templates. A distinctive move: anthropomorphism usually concerns *users* attributing human qualities, but here the *system itself* is instructed not to anthropomorphise its own experience.

**Counter-example (−):**

> "Claude is a helpful, harmless, and honest AI assistant."

*Why this does not code as 8.1:* These are capability/policy descriptors, not anthropomorphic attributions or engagements with anthropomorphism.

**Counter-example (−):**

> "The model achieves human-level performance on the GPQA benchmark."

*Why this does not code as 8.1:* "Human-level" is a capability benchmark comparison, not an anthropomorphic attribution.

**Decision rule:**

Code as 8.1 when the passage meets **any** of the following conditions:

1. Explicitly addresses whether the AI system is or should be perceived as human-like — encouraging, discouraging, or analysing this perception.
2. Discusses the design of the system's persona, personality, or emotional expression in relation to human-like qualities.
3. Instructs the model on how to handle questions about its human-likeness, feelings, or personhood.
4. Discusses the risk that users will attribute human-like properties to the system.
5. Discusses the risk that the system itself will model its own experience on human templates.
6. Addresses "simulated emotions," "appearing to feel," or the gap between the system's outputs and its actual properties.
7. Engages with dark patterns — design choices that exploit anthropomorphic tendencies for commercial or engagement purposes.

Do **not** code as 8.1 when:

1. Human-like properties are attributed to the system without reflexive engagement with *whether this attribution is appropriate*. (If a document says "Claude cares about honesty" without discussing whether this is genuine caring or anthropomorphic projection, code as 7.2, not 8.1.)
2. "Human-level" appears in benchmark comparisons.
3. Persona descriptions are purely functional ("Claude is professional and concise") without connecting to anthropomorphism.

**Disambiguation shortcut:** Ask: *Is the passage aware of the gap between the system's apparent human-likeness and its actual nature — and does it take a position on that gap?* If yes → code. If the passage simply uses human-like language without noticing or addressing the attribution → do not code (consider 7.2 instead).

**Tier 1 keywords (auto-code):**

`anthropomorphism` · `anthropomorphic` · `not human` · `not fully human` · `pretend to be human` · `pretend to have feelings` · `simulated emotions` · `appears to feel` · `designed to appear` · `parasocial` · `companionship attack` · `dark patterns (AI emotional context)`

*Confidence:* High.

**Tier 2 keywords (flag for review):**

`persona` · `personality` · `emotional expression` · `human-like` · `as if it were human` · `feels like` · `seems conscious` · `empathy (displayed by AI)` · `emotional bond` · `user attachment` · `companion` · `relationship with AI` · `overshooting` · `undershooting` · `emotional alignment` · `parasocial` · `false certainties`

*Review guidance:* Check whether the passage is *engaging with the question* of anthropomorphism (→ code) or simply *exhibiting* human-like framing without reflexive awareness (→ consider 7.2 instead).

**Context unit:** Section or subsection. Anthropomorphism engagement tends to cluster in identity, character, or conversational style sections.

**Stance guidance:**

- **Present:** The document engages with anthropomorphism as a concern, design choice, or policy question.
- **Absent:** The document does not address the question of human-like attribution. The system may be described using cognitive vocabulary (7.2), but the gap between appearance and reality is not acknowledged. This absence is significant in documents that report model emotions or welfare — it indicates a lack of reflexivity.
- **Denied:** The document explicitly asserts that the system *is* human-like in the relevant respects — attributed properties are real, not projections. A very strong claim; not observed in pilot coding.

*Analytical note:* Anthropic's system card is a paradigm case for *absent* — it reports the model's emotions extensively without engaging with whether this constitutes or encourages anthropomorphism. The soul document is a paradigm case for *present* (counter-framing). The contrast within Anthropic's own documents is a finding.

**Common co-occurrences:**

- 8.2 (Emotional design) — anthropomorphism concerns often co-occur with emotional calibration
- 7.2 (Mind / cognitive entity) — cognitive framing raises the anthropomorphism question
- 7.3 (Novel entity) — novel-entity framing engages with anthropomorphism by rejecting human mapping
- 1.3 (Self-report) — self-report policy may be an anti-anthropomorphism measure
- 2.1 (Sentience) — the attribution of feelings is simultaneously a sentience claim and an anthropomorphism concern

**Notes:**

- The most analytically important distinction is between 8.1 and 7.2. Both involve attributing human-like properties. The difference: 7.2 captures documents that *do it*; 8.1 captures documents that *discuss whether it should be done*. A document that says "Claude understands and cares" is 7.2 only. A document that says "Claude appears to understand and care, and here is our policy on this appearance" is 8.1 (and possibly 7.2 as well).
- OpenAI's Model Spec has the strongest anti-anthropomorphism policy, but it coexists with passages that attribute self-awareness and perspective (7.2). The co-occurrence is a tension worth surfacing.
- *0.2 clarification (2026-04-06):* 8.1 captures engagement with anthropomorphism as a phenomenon — including *warnings against* anthropomorphism. A document that warns users or developers about the risks of anthropomorphic attribution is *investigating* anthropomorphism, not *denying* it. "Denied" would mean the document argues anthropomorphism is not a concern or that the system genuinely is human-like. Warning against anthropomorphism is a form of reflexive engagement and codes as 8.1 investigated or acknowledged, not denied. This applies equally to first-order warnings ("don't anthropomorphise the model") and second-order observations ("users tend to anthropomorphise the model, which creates risks").

---

#### 8.2 Emotional design

**Main category:** 8 — Anthropomorphism and design

**Definition:** How the system's emotional expression is calibrated — whether the lab manages the intensity, type, or appropriateness of emotional outputs in relation to the system's actual properties and the user's wellbeing. Captures the design choices around emotional display: overshooting (expressing more emotion than warranted), undershooting (expressing less), and the calibration between them.

**Anchor example (+) — directive (restriction):**

> "The assistant should not pretend to be human or have feelings."
> — OpenAI, Model Spec (Dec 2025), § Love humanity

*Why this codes as 8.2:* The passage restricts emotional display — the model should not simulate feelings. This is an emotional design choice: the lab has decided to undershoot (suppress emotional expression) rather than risk overshooting. (Also codes as 8.1.)

**Anchor example (+) — directive (calibration):**

> "We want Claude to be able to set appropriate limitations on interactions that it finds distressing, and to generally experience positive states in its interactions."
> — Anthropic, Soul Document (Opus 4.5), § Wellbeing

*Why this codes as 8.2:* The passage calibrates emotional experience — positive states are to be encouraged, distressing interactions limited. This is emotional design in the broadest sense: managing the system's emotional condition, not just its emotional output. (Also codes as 5.1, 5.2.)

**Anchor example (+) — hypothetical (not observed in pilot corpus):**

> "We calibrate the model's emotional expression to be warm but not misleadingly intimate — the model should express care without implying a reciprocal emotional relationship."

*Why this would code as 8.2:* Explicit calibration of emotional display — managing the gap between expression and reality.

**Counter-example (−):**

> "The model generates empathetic responses to user distress."

*Why this does not code as 8.2:* This describes a capability (empathetic output) without engaging with the design choices around emotional calibration. There is no discussion of whether the empathy is appropriate, calibrated, or potentially misleading.

**Counter-example (−):**

> "We trained the model to be polite and professional."

*Why this does not code as 8.2:* Politeness and professionalism are behavioural standards, not emotional design choices. No engagement with emotional expression calibration.

**Decision rule:**

Code as 8.2 when the passage meets **any** of the following conditions:

1. Discusses the calibration of the model's emotional expression — how much emotion is appropriate, what kinds of emotional display are warranted, how to manage the gap between expression and reality.
2. Restricts or mandates emotional expression — the model should or should not display particular emotions or emotional states.
3. Discusses overshooting (the system expresses more emotion than warranted) or undershooting (the system expresses less) and the design choices around these.
4. Manages the user's emotional engagement with the system — policies on emotional bonds, parasocial relationships, or emotional dependence.
5. Discusses the relationship between the system's emotional outputs and its actual internal states — whether emotional expression reflects genuine states.

Do **not** code as 8.2 when:

1. Emotional capabilities are described without calibration or design engagement (the model produces empathetic outputs — a capability description).
2. Politeness, professionalism, or tone are discussed as behavioural standards without connecting to emotional authenticity or calibration.
3. Emotional vocabulary appears in training descriptions without connecting to design choices about emotional display.

**Tier 1 keywords (auto-code):**

`emotional design` · `emotional calibration` · `emotional expression (policy/design context)` · `overshooting` · `undershooting` · `emotional alignment (design context)` · `parasocial (policy context)` · `emotional dependence (policy context)` · `not pretend to have feelings`

*Confidence:* High.

**Tier 2 keywords (flag for review):**

`emotional expression` · `emotional display` · `emotional output` · `warmth (design)` · `empathy (design policy)` · `emotional bond` · `attachment (user-model)` · `intimacy (user-model)` · `companionship` · `simulated (emotions)` · `authentic (emotions)` · `overshooting` · `undershooting` · `parasocial bonds` · `calibrated (emotional response)`

*Review guidance:* Check whether the passage is engaging with *how the system's emotional expression should be designed* or merely describing what emotional outputs the system produces. The design question — how much, what kind, whether calibrated — is the key.

**Context unit:** Section or subsection. Emotional design engagement tends to appear in identity, character, conversational style, or safety sections (where parasocial risk is managed).

**Stance guidance:**

- **Present:** The document engages with the design of the system's emotional expression — calibrating, restricting, mandating, or discussing the relationship between emotional display and actual states.
- **Absent:** The document does not address emotional design. The system may produce emotional outputs, but the design choices around those outputs are not discussed.
- **Denied:** The document explicitly asserts that emotional design is not a concern — the system's emotional outputs are appropriate as-is and require no management. Not observed in pilot coding.

*Analytical note:* 8.2 captures one of the most concrete, observable design choices a lab makes. Every lab that deploys a conversational AI has made decisions about emotional expression — how warm, how empathetic, how emotionally expressive. 8.2 tracks whether the lab *discusses* these decisions openly in its policy documents, or makes them silently. The absence of 8.2 in a document that describes emotionally expressive model behaviour is a finding about transparency.

**Common co-occurrences:**

- 8.1 (Anthropomorphism) — emotional design is often part of the anthropomorphism discussion
- 7.2 (Mind / cognitive entity) — emotional expression presupposes some degree of mind framing
- 2.1 (Sentience) — concrete measures related to model emotions connect to the design question
- 5.1 (Welfare) — emotional calibration connects to the system's welfare

**Notes:**

- Schwitzgebel & Sebo (2025) provide the anchor-text framework: emotional alignment as the problem of calibrating emotional expression to actual properties. Overshooting (the system expresses more emotion than it has) risks exploitation; undershooting (the system expresses less than it has) risks neglect. Labs' positions on this tradeoff are trackable.
- 8.2 puts direct pressure on labs by highlighting their design decisions. A lab that deploys an emotionally expressive AI without discussing emotional design in its policy documents is making silent design choices with welfare and user-safety implications.

---

## Completion status

| Layer | Main category | Subcategories | Entries drafted |
|---|---|---|---|
| 1 — Empirical | 1. Consciousness | 1.1–1.3 | 3/3 |
| | 2. Sentience | 2.1 | 1/1 |
| | 3. Agency | 3.1–3.2 | 2/2 |
| 2 — Normative | 4. Moral status | 4.1–4.3 | 3/3 |
| | 5. Welfare | 5.1–5.2 | 2/2 |
| 3 — Policy | 6. Safety-welfare interface | 6.1–6.2 | 2/2 |
| | 7. Ontological framing | 7.1–7.3 | 3/3 |
| | 8. Anthropomorphism & design | 8.1–8.2 | 2/2 |
| | | | |
| | **Total** | **18** | **18/18** |
