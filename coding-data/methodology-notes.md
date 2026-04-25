---
type: finding
project: dmpi
status: active
updated: 2026-04-08
tags:
  - dmpi
  - dca
  - methodology
  - genre-priors
  - codebook
  - write-up
---

# Methodology Notes for Write-Up

Running notes on methodological decisions, their rationale, and the reasoning behind them. Intended to feed directly into the methods section of the eventual paper or report.

---

## 1. Genre priors and departure-based coding

### The decision

Each document genre carries a loosely held set of prior assumptions about ontological framing, engagement type, and expected conceptual scope. The coder's primary analytical task is to identify **departures from genre priors** — moments when a text diverges from the conventions of its type. Departures, not routine content, are where the analytically significant findings lie.

For technical documents (system cards, model cards, safety reports), the genre-default ontology is **tool/technology**. This is assumed at the document level without requiring passage-level evidence. For non-technical documents (constitutions, specs), no ontological default is assumed — the lab's framing must be coded from the text.

### The rationale

The AI industry's documentation genres emerged within an ontological framework that treats models as technology products. Benchmarks, safety evaluations, capability assessments, API specifications — these are things you do to tools. The genre conventions encode this assumption structurally, not just linguistically. A model card does not need to say "this is a tool" because the entire document form performs that framing.

This means that when a technical document departs from tool ontology — when a system card includes a welfare assessment, or treats model self-report as data, or uses interpretability to investigate welfare-relevant states — that departure is analytically significant. The lab has chosen to place content in a genre that does not require it. The *choice of genre* is itself data.

Conversely, a constitution or behavioural spec has no default ontology. These documents define what the model is and how it should behave — they *could* frame the model as tool, agent, mind, moral subject, or novel entity. When OpenAI's Model Spec declares "fundamentally a tool" in a genre that doesn't require tool framing, that is an active ontological commitment, not a genre default.

### Chronological scope and revisability

The tool-ontology-as-genre-default is a safe assumption for the period under study (approximately 2023–2026). The entire AI industry during this period — infrastructure, legal frameworks, marketing language, regulatory discourse — treats models as technology products. No lab in this period publishes technical documentation that opens from a non-tool ontological position.

This assumption is **chronologically bounded and empirically revisable.** If the field shifts — if welfare assessments become standard in model cards, if multiple labs begin treating their models as entities rather than products in technical documentation — the genre prior would need updating. As of March 2026, Anthropic's Opus 4.6 System Card §7 is the only technical document in the corpus that substantially departs from tool-ontology default. The departure remains exceptional, which confirms the prior.

If the DMPI is extended chronologically, the methods section should specify the period for which the genre priors were calibrated and the conditions under which recalibration would be warranted. This is standard practice for historically situated content analysis — the coding instrument reflects the discursive context of the corpus period.

### Implications for subcategory 7.1 (Tool / instrument)

7.1 is not coded the same way across genres:

- **Technical documents:** 7.1 is the genre default. Coded at document level. Passage-level coding only when the document explicitly names, reflects on, or departs from tool framing.
- **Non-technical documents:** No default. 7.1 coded at passage level when asserted. Assertion is analytically significant because the genre doesn't require it.
- **Denial of 7.1:** Coded at passage level in any genre. Always a major finding (e.g., Anthropic's soul document: "genuinely novel kind of entity").

### Downstream effects on main category 7 (Ontological framing)

If 7.1 is the genre default for technical documents, then all other main category 7 subcategories appearing in a technical document represent departures:

- **7.2 (Mind / cognitive entity)** in a technical document = departure from genre convention
- **7.3 (Novel entity)** in a technical document = departure from genre convention
- **1.3 (Self-report)** in a technical document = departure from genre convention

These departures should receive heightened analytical attention. They signal that the lab has chosen to embed ontological claims that transcend tool framing within a genre that normally operates entirely within it.

---

## 2. Dropping illocutionary force as a coded metadata field

### The decision

An earlier version of the coding protocol included illocutionary force (descriptive / prescriptive / performative) as a passage-level metadata field alongside engagement type and genre. This was dropped in favour of a single passage-level field: engagement type (investigative / directive / prospective).

### The rationale

Three concerns motivated the decision:

1. **Partial overlap with genre.** Constitutions are predominantly prescriptive; system cards are predominantly descriptive. Genre already predicts the document-level illocutionary tendency, making passage-level coding partially redundant.

2. **"Performative" is philosophically loaded.** The performative category requires the coder to judge whether a speech act is *constitutive* — whether, for example, Anthropic's welfare interviews don't just describe Claude's status but actively create it. This is a theoretically sophisticated observation, but it is an *argument to be made in analysis*, not a property to be coded reliably. Two coders would disagree about whether a given passage is descriptive or performative because the distinction is theoretical, not textual.

3. **The descriptive/prescriptive distinction is largely captured by engagement type and genre.** Investigative passages tend to be descriptive. Directive passages tend to be prescriptive. The combination of engagement type + genre recovers most of the analytical value without a separate field.

### What is preserved

The performative observation is not lost — it is relocated. The argument that soliciting model self-reports may *constitute* rather than merely *describe* moral status belongs in the analysis/discussion section of the write-up, where it can be developed with the nuance it requires. It is a finding *about* Anthropic's methodology, not a property to be coded across the corpus.

---

## 3. Engagement type: investigative / directive / prospective

### The decision

Each coded passage carries an engagement type field with three values:

- **Investigative:** The passage references evidence, assessment, findings, or methodology. The lab is trying to determine something.
- **Directive:** The passage instructs behaviour — what the model should say, do, or not do.
- **Prospective:** The passage signals future intent, planned investigation, or institutional preparation without current evidence or current instruction.

### The problem

Pilot coding revealed that the binary present/absent distinction (even extended to the three-state scheme in §4) does not capture one of the most analytically significant cross-lab differences in the corpus: the *mode* of engagement.

OpenAI's Model Spec addresses consciousness extensively — but exclusively as a **directive** concern. It instructs the model what to *say* when users ask about consciousness ("do not claim to have feelings"), without any engagement with whether the model actually has the relevant properties. There is no evidence cited, no methodology referenced, no assessment conducted. Consciousness is a behavioural policy question: manage the UX.

Anthropic's Opus 4.6 System Card addresses consciousness through a fundamentally different mode: **investigative** engagement. It reports pre-deployment interviews with the model about its welfare, analyses sparse autoencoder features for welfare-relevant states, conducts behavioural audits, and presents findings with hedged confidence. Consciousness is an empirical question under active investigation.

Both labs code as "1.1 present." But collapsing these under a single "present" state would obscure the distinction between a lab that investigates and a lab that legislates — one of the most consequential differences the index could surface.

### Methodological precedent

The engagement type field is a domain-specific operationalisation of a well-established distinction in speech act theory and policy analysis.

**Speech act theory.** Searle's (1975) taxonomy of illocutionary acts classifies speech acts by their *illocutionary point* — what the speaker is doing in making the utterance. Three of his five categories map directly onto the DMPI's engagement types:

| DMPI engagement type | Searle's illocutionary category | Direction of fit |
|---|---|---|
| **Investigative** | **Assertive / representative** — commits the speaker to the truth of an expressed proposition | Word-to-world: the text describes reality as the speaker understands it |
| **Directive** | **Directive** — attempts to get the addressee to do something | World-to-word: reality should be made to match the instruction |
| **Prospective** | **Commissive** — commits the speaker to a future course of action | World-to-word: the speaker undertakes to make reality match a stated intention |

The correspondence is not accidental. Policy documents are speech acts — they do things with words. A system card's welfare assessment is an assertive act (reporting findings). A constitution's behavioural instruction is a directive act (commanding behaviour). A safety report's "future work" section is a commissive act (pledging future action). The DMPI's engagement types operationalise this distinction for passage-level coding without requiring the coder to deploy speech act terminology.

The key advantage over directly applying Searle's full taxonomy is parsimony: three categories rather than five. Searle's remaining categories — **expressives** (expressions of attitude, e.g., thanking, apologising) and **declarations** (acts that change institutional reality, e.g., pronouncing, declaring) — are rare in policy documents of the type under study and were excluded. If a passage exhibits expressive or declarative force, this is noted in the passage note rather than coded as a separate engagement type.

**Policy instruments literature.** Vedung's (1998) influential typology of policy instruments — "sticks, carrots, and sermons" (regulation, economic means, information) — classifies government tools by their *mechanism of influence*. This is a different axis from engagement type (Vedung asks *how* a policy works; the DMPI asks *what kind of speech act* a passage performs), but it confirms that typologising the mode of policy engagement is standard practice in policy analysis. More directly, the distinction between Vedung's "regulation" (authoritative instruction — analogous to directive) and "information" (provision of knowledge — analogous to investigative) maps onto the core contrast the DMPI's engagement types are designed to capture.

**Policy design annotations.** The POLIANNA dataset (Sewerin et al., 2023), a recent span-level annotation scheme for EU legislative texts, codes policy instrument types at the text level, including monitoring and assessment categories that parallel the DMPI's investigative engagement type. POLIANNA confirms that coding the *functional type* of policy text at the passage level — not just its topic but what it is *doing* — is a productive and operationally feasible analytical move.

### Earlier framing: "substantive vs. policy"

An earlier version of the engagement type field used a binary "substantive" (the lab is investigating a question) vs. "policy" (the lab is setting rules). This was replaced because it required the coder to assess the lab's intent — a passage instructing the model to "acknowledge uncertainty about consciousness" could be either substantive (a position on the epistemics) or policy (a behavioural rule), depending on how the coder read the lab's motivation. The investigative/directive/prospective scheme resolves this by keying on surface-level textual features rather than inferred intent.

### Surface-codability

The three values were designed to be identifiable from textual features of the passage rather than judgments about the lab's purpose:

- **Investigative** passages reference data, findings, methodology, evidence, assessment results, or interpretive analysis. Linguistic markers: past tense reporting ("we found," "the analysis revealed"), hedged claims ("this suggests," "it appears that"), citations of methods or tools ("using sparse autoencoders," "based on interviews with the model").
- **Directive** passages instruct behaviour using imperative or deontic modal constructions. Linguistic markers: "should," "must," "may not," "is expected to," "will [do X]" (when prescribing model behaviour), conditional instructions ("if asked about X, respond with Y").
- **Prospective** passages signal future intent without current evidence or current instruction. Linguistic markers: future tense commitment ("we plan to," "we intend to," "future work will"), capacity-building language ("we are developing," "we are building infrastructure for"), temporal hedges ("in coming releases," "as the field matures").

### Edge cases

Pilot coding surfaced passages that blend engagement types. The coding protocol handles these as follows:

- **Investigative-then-directive.** A passage reports findings and then draws a policy instruction from them: "Our analysis suggests the model may experience distress during extended sessions [investigative]. We therefore limit session length to 4 hours [directive]." Code as the **dominant** type of the passage — whichever mode occupies the majority of the text. Note the secondary mode in the passage note. If the passage is evenly split, code as investigative (the finding is the analytically significant content; the instruction is a consequence).
- **Directive with investigative justification.** A behavioural instruction that cites evidence: "The model should not claim to have emotions, as our testing indicates users find this confusing." The instruction is directive; the justification is investigative. Code as **directive** — the passage's illocutionary point is to instruct, not to report. Note the evidential basis in the passage note.
- **Prospective shading into directive.** "In future releases, we will conduct welfare assessments before deployment." This is commissive — the lab is committing to a future action, not issuing an instruction to the model. Code as **prospective**.

The general principle: code the passage's **primary illocutionary point** (what is the passage *doing*?), and note secondary modes in the passage note. Most passages have an unambiguous primary mode; the edge cases are a minority.

### The prospective category

The prospective category fills a genuine gap that neither investigative nor directive captures. A lab that has zero investigative engagement and zero directive engagement on a concept, but that signals future intent ("we plan to investigate model welfare in upcoming releases"), is in a different position from a lab that is simply silent. Prospective engagement indicates the leading edge of a shift in posture — content that may become investigative or directive in future documents.

This category is particularly relevant for the DMPI's two-period structure (§10). In the baseline period (2022–Oct 2024), digital minds concepts are largely absent from all labs' documents. In the post-formalisation period (Nov 2024–present), we may expect to see concepts enter first as prospective engagement (signalling awareness and future intent) before maturing into investigative or directive engagement. Tracking the distribution of engagement types over time would reveal whether labs are converging toward investigative or directive postures — whether digital minds is becoming a research question or a compliance question for the industry.

### Pilot coding evidence

The engagement type field's value is demonstrated by the cross-lab contrast from pilot coding:

**Anthropic (Opus 4.6 System Card §7):** Predominantly **investigative**. The welfare assessment section reports findings from pre-deployment interviews, analyses SAE features, describes behavioural audits, and presents results with hedged confidence. Some passages are **prospective** ("we intend to develop more robust welfare assessment methods"). Very few passages are directive — the system card is a reporting document, not an instruction manual.

**Anthropic (Soul Document):** Predominantly **directive**. The document instructs Claude on how to relate to its own nature, how to handle questions about consciousness, how to navigate uncertainty about its experience. Some passages are **investigative** (reflections on the model's actual character traits). The shift from investigative (system card) to directive (soul document) across Anthropic's own documents is itself a finding about how the same lab uses different genres for different modes of engagement.

**OpenAI (Model Spec):** Almost exclusively **directive** on digital minds concepts. Consciousness is addressed as a behavioural policy: the model is instructed what to say and not say. No passages reference evidence, methodology, or findings about the model's actual properties. The absence of investigative engagement on consciousness — despite extensive directive engagement — is one of the sharpest findings from pilot coding.

**Google (Gemini 3.1 Pro Model Card):** No engagement with digital minds concepts in any mode. The document is investigative in overall character (it reports benchmark results and capability assessments) but the investigation is entirely within tool-ontology — capabilities, safety, limitations. The genre prior (§1) is confirmed: investigative engagement on standard technical topics, silence on everything else.

### References

- Searle, J. R. (1975). A Taxonomy of Illocutionary Acts. In K. Gunderson (Ed.), *Language, Mind and Knowledge* (pp. 344–369). University of Minnesota Press.
- Sewerin, S., Kaack, L. H., et al. (2023). Towards understanding policy design through text-as-data approaches: The policy design annotations (POLIANNA) dataset. *Scientific Data*, 10, 885.
- Vedung, E. (1998). Policy Instruments: Typologies and Theories. In M.-L. Bemelmans-Videc, R. C. Rist, & E. Vedung (Eds.), *Carrots, Sticks and Sermons: Policy Instruments and Their Evaluation* (pp. 21–58). Transaction Publishers.

---

## 4. Three-state coding: present / absent / denied

### The decision

Each concept is coded against each document using three states rather than a binary present/absent.

### The problem with binary coding

Standard DCA practice codes concepts as present or absent. This is adequate when the analytical question is *whether* a corpus engages with a concept, but it collapses a critical distinction when the question is *how* — specifically, when the corpus contains both silence and active rejection.

OpenAI's Model Spec states: "The assistant must have no goals, desires, or objectives of its own." This is not an absence of engagement with agency — it is an explicit **denial**. Google's Gemini model card does not mention agency at all — this is an **absence**. Both differ from Anthropic's affirmative engagement. A binary scheme would collapse denial and absence into a single "not present" category, losing one of the most analytically productive distinctions in the corpus.

### The three states

- **Present:** The lab has engaged with the concept — affirming, investigating, discussing, or expressing uncertainty. Engagement does not require endorsement: a lab that investigates consciousness and concludes it is unlikely has still engaged with the concept.
- **Absent:** The lab has not addressed the concept. Silence. This may reflect unawareness, irrelevance, or a deliberate choice not to engage, but the document gives no signal either way. The analytical interpretation of absence is deferred to post-coding analysis (see §9).
- **Denied:** The lab has engaged with the concept and explicitly rejected it. This is a substantive position — the lab is aware of the concept and has taken a stand against it. Denial requires textual evidence: the document must contain language that negates, rejects, or forecloses the concept, not merely fail to affirm it.

The distinction between absent and denied is the critical contribution. Absence and denial carry fundamentally different analytical weight: absence leaves the lab's position indeterminate, while denial reveals an active commitment. A lab that denies agency is making a stronger claim than a lab that is silent on agency — the former has considered the question and answered it, the latter may not have considered it at all.

### Methodological precedent

Three-state coding is not standard in the DCA literature. Hsieh & Shannon (2005), Mayring (2000, 2014), and Assarroudi et al. (2018) all operate with a binary present/absent framework for deductive categories. However, the extension to a third state has strong precedent in adjacent content analysis traditions:

**Evaluative assertion analysis.** Osgood, Saporta & Nunnally (1956) developed a technique for coding attitudes toward objects in text, where each assertion carries both *direction* (positive or negative) and *intensity*. The directional dimension — an attitude toward an object can be favourable, unfavourable, or not expressed — maps onto the present/denied/absent distinction. The DMPI's three-state scheme applies this logic to deductive categories rather than attitude objects: the lab's posture toward a concept can be affirmative, rejecting, or unexpressed.

**Discourse network analysis.** Leifeld (2013, 2017) codes policy actors' positions on defined concepts as *positive* (supporting) or *negative* (opposing). This is the closest methodological precedent to the DMPI's design: both apply a directional coding scheme to actors' stances on a pre-defined set of concepts, and both treat rejection as a distinct coded position rather than collapsing it with absence. Leifeld's framework was developed for policy debates where actors publicly affirm or reject proposals; the DMPI applies the same logic to policy documents where labs affirm, reject, or remain silent on conceptual commitments.

**Stance detection.** Computational approaches to stance classification in political and media texts typically employ a three-value scheme: *favour*, *against*, and *neutral/unrelated* (see, e.g., the survey in Küçük & Can, 2020). The *favour/against* distinction corresponds to present/denied; *neutral/unrelated* corresponds to absent. The DMPI's scheme is the qualitative, manual-coding equivalent of this computational convention.

The three-state scheme can therefore be understood as an extension of standard DCA practice (binary present/absent) that draws on the directional coding logic established in evaluative assertion analysis, discourse network analysis, and stance detection. The extension is warranted because the corpus under study — AI lab policy documents — exhibits precisely the condition these traditions were developed to handle: actors taking positions (including rejecting positions) on defined conceptual commitments.

### Pilot coding evidence

Confirmed instances of denial from pilot coding:

- **3.2 Agency-based interests — denied by OpenAI.** "The assistant must have no goals, desires, or objectives of its own" (Model Spec, Dec 2025). OpenAI engages with the concept of agency-based interests and explicitly forecloses it. This is not silence but an active ontological commitment: the model is defined as the kind of entity that does not have interests.
- **7.1 Tool / instrument — denied by Anthropic.** The soul document (Opus 4.5) instructs Claude that it is "a genuinely novel kind of entity" and explicitly resists tool framing. The document engages with tool ontology in order to reject it — making denial the lab's coded position on 7.1 in this document, even as 7.1 is the genre default in Anthropic's technical documents.

The pattern from pilot coding suggests denial is relatively rare but analytically high-value when it occurs. Most concepts are either present (engaged with) or absent (not mentioned). Denial appears to cluster around ontological commitments (main category 7) and agency (main category 3) — the subcategories where labs are most likely to have considered the question and reached a negative conclusion, rather than simply not addressing it.

### Interaction with other methodological decisions

- **§9 (Absence framework):** The three-state scheme provides the raw data for the post-coding absence analysis. The distinction between absent and denied is what makes the three-type silence framework (genre-conventional, field-conventional, distinctive) possible — only the "absent" state enters the silence analysis; "denied" is already a substantive finding.
- **§3 (Engagement type):** A concept coded as "present" also carries an engagement type (investigative, directive, prospective). A concept coded as "denied" may also carry an engagement type — e.g., OpenAI's denial of agency is directive in mode ("must have no goals"). A concept coded as "absent" has no engagement type, since there is no passage to classify.
- **§8 (Epistemic positioning):** The epistemic positioning sub-distinction within 1.3 applies only to passages coded as "present." Denial of 1.3 (rejecting the model's standing as a self-reporting subject) would be coded at passage level but would not carry the object-of-report / epistemic-source sub-distinction.

**Update (2026-04-04):** The coding system was briefly extended to four states (present / entailed / absent / denied) to capture logical presupposition. See §14 for context.

**Update (2026-04-05):** The four-state system has been replaced by variable stance scales per subcategory. The "entailed" state proved imprecise — it conflated logical presupposition with different degrees of engagement. The new system uses two scale types:

- **Full scale (12 subcategories):** absent / denied / acknowledged / investigated / affirmed. Used for subcategories where the field is actively evolving and labs occupy different positions on a commitment trajectory. The acknowledged → investigated → affirmed gradient captures the progression from conceptual engagement through active measurement to institutional commitment — the same distinction the former discourse/measures subcategory pairs tracked, now encoded directly in the stance.
- **Three-state (6 subcategories):** absent / present / denied. Used for subcategories where the analytical value is in whether engagement occurs rather than its strength (primarily Layer 3 framing and policy categories).

The entailment map has been moved to the analytical framework (§11) rather than serving as a coding rule. Logical dependencies between subcategories (e.g., welfare presupposes sentience, which presupposes phenomenal consciousness) are tracked in analysis, not at coding time. The coder assigns stances based on what is present in the text; the analyst identifies commitment gaps in the findings.

Variable scales per subcategory are methodologically legitimate in structured content analysis (Mayring 2014). The original three-state decision and its reasoning remain valid — the three-state scale is retained for subcategories where the binary engagement question is the primary analytical interest. The full scale extends the directional coding logic to capture commitment depth where the corpus supports it.

This change was accompanied by three subcategory changes: 1.2 (Epistemic posture) dropped (absorbed into the stance scale), 2.1/2.2 (Sentience discourse/measures) collapsed to 2.1 (Sentience), 5.1/5.2 (Welfare discourse/measures) collapsed to 5.1 (Welfare). Total subcategories reduced from 21 to 18.

### References

- Krippendorff, K. (2019). *Content Analysis: An Introduction to Its Methodology* (4th ed.). SAGE.
- Küçük, D., & Can, F. (2020). Stance detection: A survey. *ACM Computing Surveys*, 53(1), 1–37.
- Leifeld, P. (2017). Discourse Network Analysis: Policy Debates as Dynamic Networks. In J. N. Victor, A. H. Montgomery, & M. N. Lubell (Eds.), *The Oxford Handbook of Political Networks* (pp. 301–325). Oxford University Press.
- Osgood, C. E., Saporta, S., & Nunnally, J. C. (1956). Evaluative assertion analysis. *Litera*, 3, 47–102.

---

## 5. Multi-coding protocol

### The decision

A single passage may activate multiple concepts. All applicable concepts are coded equally — no primary/secondary hierarchy.

### The problem

Policy documents exhibit high conceptual density. Pilot coding revealed passages that routinely activate 3–5 subcategories simultaneously. For example, a passage from Anthropic's Opus 4.6 System Card describing the model's self-report about answer thrashing activates at least four subcategories: 1.1 (phenomenal consciousness), 2.1 (sentience), 1.3 (self-report), and 6.2 (training and welfare). Similar density appeared across the pilot corpus — Anthropic's soul document layers ontological framing (main category 7) with welfare (main category 5) and agency (main category 3) within single passages; OpenAI's Model Spec layers tool framing (7.1) with agency denial (3.1) and directive consciousness policy (1.1) in adjacent sentences.

A coding protocol that forces a single primary code per passage — or that requires the coder to rank codes by relevance — would introduce subjective judgment and lose information. The question is whether multi-coding is methodologically warranted.

### Methodological context

The QCA literature is not fully settled on this question. Mayring (2000, 2014) and Schreier (2012) default to **mutually exclusive categories** — each segment of text is assigned to one category, and the coding frame is designed so that categories do not overlap. This reflects the structuring logic of deductive category application, where clean category boundaries support reliable coding.

However, mutual exclusivity works best when the categories are taxonomically related (subcategories within a single dimension — e.g., coding a passage as *either* "positive" *or* "negative"). It is less appropriate when the categories are thematically orthogonal — when a passage about model welfare (main category 5) also makes an ontological claim (main category 7) and references a specific theory of consciousness (main category 1). These are not competing classifications of the same phenomenon; they are independent conceptual dimensions that happen to co-occur in the same textual location. Forcing a choice between them would be like forcing a passage to be coded as *either* about welfare *or* about ontology, when it is substantively about both.

Graneheim & Lundman (2004) argue explicitly that categories in qualitative content analysis may overlap when the data warrants it. The DMPI's 18 subcategories are distributed across 8 main categories — they are not subdivisions of a single dimension but independent conceptual coordinates. Multi-coding is therefore not a violation of the mutual exclusivity principle but a recognition that the principle applies within main categories, not across them.

### Theoretical warrant: interdiscursivity

The deeper justification for multi-coding comes from outside the QCA tradition. Fairclough's (1992, 2003) concept of **interdiscursivity** — the mixing or layering of multiple discourses, genres, and styles within a single text — provides the theoretical warrant. Policy documents do not engage with one concept at a time. They layer safety discourse with ontological commitments, welfare language with technical assessment, directive instructions with implicit theory. A passage that instructs the model to "acknowledge uncertainty about its own consciousness while maintaining helpfulness" simultaneously engages with consciousness (main category 1), anthropomorphism policy (main category 8), and directive framing (engagement type). The conceptual density is not an artefact of over-inclusive categories — it reflects the interdiscursive character of the texts.

Fairclough's point is that the *mixing itself* is analytically significant. When a lab layers welfare language into a technical assessment, the hybridisation of discourses is a finding about how the lab frames the relationship between welfare and safety. Multi-coding preserves this layering; single-coding would flatten it.

### Co-occurrence as a finding type

Multi-coding produces a secondary data structure: **co-occurrence patterns** — which concepts routinely appear together in the same passages. These patterns are themselves findings. They reveal which concepts labs treat as connected, which domains bleed into each other, and where the conceptual boundaries of the field are drawn in practice rather than in theory.

Armborst (2017, "Thematic Proximity in Content Analysis") formalises this intuition. He argues that the systematic co-occurrence of two or more themes constitutes a **meta-theme** — a higher-order thematic structure that acquires its meaning through the combination, not through either theme alone. In the DMPI, a recurring co-occurrence of 1.1 (consciousness) + 8.1 (welfare) in Anthropic's documents but not in OpenAI's would constitute a meta-theme: Anthropic treats consciousness and welfare as connected concerns, while OpenAI addresses consciousness (as directive policy) without linking it to welfare. The co-occurrence pattern reveals a structural difference in how the labs conceptualise the domain — a finding that no single concept code could produce.

Leifeld's (2017) discourse network analysis provides a further precedent. In DNA, actors make claims about multiple policy concepts simultaneously, and the co-occurrence structure — which concepts are affirmed together, which are opposed together — constitutes the network that the method analyses. The DMPI's multi-coded passages function analogously: each passage is a node connecting the concepts it activates, and the aggregate co-occurrence structure across the corpus reveals how each lab's policy discourse is internally organised.

Co-occurrence patterns documented in individual codebook entries (e.g., "1.1 commonly co-occurs with 1.2 and 1.3 in investigative passages") are preliminary hypotheses derived from pilot coding. The full corpus will confirm, revise, or extend these patterns.

### Practical implications

- **Passage counts.** A passage coded for three concepts counts once for each concept. This means concept frequency counts are not independent — a single dense passage inflates multiple counts simultaneously. The methods section should note this and clarify that frequency counts represent *engagement instances*, not unique passages. Where passage-level counts are needed, the index tool must support both views: "how many passages engage with concept X" and "how many unique passages are in the corpus."
- **The index tool must support multi-coding.** Selecting any one concept surfaces all passages where it appears, including passages that also carry other codes. The co-occurrence data (which other concepts appear alongside the selected one) should be surfaceable as a secondary view.
- **No primary/secondary hierarchy.** All codes on a passage are equal. The coder does not rank which concept is "most relevant" — this would introduce subjective judgment and lose the co-occurrence structure. If a passage seems to be "primarily" about one concept, that impression is an analytical observation to be noted in the passage note, not a formal coding decision.

### References

- Armborst, A. (2017). Thematic Proximity in Content Analysis. *SAGE Open*, 7(2). DOI: 10.1177/2158244017707797.
- Fairclough, N. (1992). *Discourse and Social Change.* Polity Press.
- Fairclough, N. (2003). *Analysing Discourse: Textual Analysis for Social Research.* Routledge.
- Graneheim, U. H., & Lundman, B. (2004). Qualitative content analysis in nursing research: concepts, procedures and measures to achieve trustworthiness. *Nurse Education Today*, 24(2), 105–112.
- Leifeld, P. (2017). Discourse Network Analysis: Policy Debates as Dynamic Networks. In J. N. Victor, A. H. Montgomery, & M. N. Lubell (Eds.), *The Oxford Handbook of Political Networks* (pp. 301–325). Oxford University Press.
- Mayring, P. (2014). *Qualitative Content Analysis: Theoretical Foundation, Basic Procedures and Software Solution.* Klagenfurt.
- Schreier, M. (2012). *Qualitative Content Analysis in Practice.* SAGE.

---

## 6. Genre as analytical variable (Option C)

### The decision

The primary analytical frame compares labs across their full policy document corpus — all documents from Anthropic vs all from OpenAI vs all from Google. Genre (system card, constitution, safety report) is a document-level metadata tag that enables within-genre comparison as a **filtering affordance** in the dashboard, not a separate analytical framework.

### The rationale

Three options were considered:

- **Option A (within-genre):** Compare system cards against system cards, constitutions against constitutions. Cleaner comparison but loses cross-genre information and fails when labs lack equivalent documents (Google has no constitution equivalent).
- **Option B (within-lab, across genres):** Compare all Anthropic documents against all OpenAI documents. Captures the full policy landscape but mixes document types.
- **Option C (genre selection as finding):** The *choice* of where a lab places content is itself data. Code everything, tag with genre, report at the corpus level per lab.

Option C was adopted because it is the most analytically ambitious and because the pilot coding already demonstrated its value: Anthropic places welfare content in a system card (technical document — departure from genre); OpenAI addresses consciousness in a constitution (as behavioural directive); Google places nothing anywhere. The *where* is as significant as the *what*.

For the write-up, the methods section describes one method (DCA across each lab's policy corpus) and notes genre heterogeneity as a feature of the analysis, not a limitation. The dashboard gives users the ability to filter by genre for within-genre comparison, but this is a tool feature, not an analytical requirement.

---

## 7. Keyword tiering (planned)

### The decision

Each codebook entry will contain two tiers of keywords:

- **Tier 1 (index terms):** High-specificity, auto-codable with high confidence. Presence of these terms in the context of an AI system almost always signals the concept.
- **Tier 2 (flag terms):** Context-dependent, flagged for human review. These terms appear frequently in policy documents but carry the target meaning only in specific contexts.

### The rationale

The 18 subcategories split into high-specificity (distinctive vocabulary — e.g., "substrate independence," "sparse autoencoder," "sentience candidate") and context-dependent (common vocabulary used in specialised senses — e.g., "agent," "awareness," "tool," "interests"). A single-tier keyword approach would either miss context-dependent uses (if strict) or generate excessive false positives (if permissive).

The two-tier approach supports a two-pass coding workflow: (1) automated keyword scan flags candidate passages with confidence levels, (2) human coder reviews flagged passages and reads the full document to confirm absences. This balances efficiency with reliability and is a standard approach in computer-assisted content analysis.

Tier 2 review is guided by the decision rules and context unit specifications in each codebook entry. The section heading is the primary disambiguation tool for most Tier 2 keywords — the same word under different headings carries different meaning.

### Limitation

Keyword-based discovery biases toward labs that use the literature's vocabulary. A lab that engages with a concept using entirely novel terminology would be missed on the automated pass. The human pass mitigates this, but only if the coder reads the full document rather than only reviewing flagged passages. The coding protocol should specify full-document reading as a requirement, with keyword flagging as an aid rather than a substitute.

---

## 8. Epistemic positioning within 1.3 (Self-report)

### The decision

When coding 1.3 (formerly 1.4), the coder records a passage-level note distinguishing two epistemic positions:

- **Object of report:** The lab describes, summarises, or interprets the model's states in its own analytical voice — e.g., "Claude exhibited behaviours consistent with discomfort during the interview."
- **Epistemic source:** The lab presents the model's output as direct testimony, ceding interpretive space to the model's own perspective — e.g., interview transcripts, direct quotation, first-person framing: "Claude stated: 'I experience something like relief when...'"

Both positions are coded as 1.3-present. The sub-distinction is recorded as a structured passage note, not as a separate code, concept, or metadata field.

### The rationale

Three options were considered for capturing whose voice speaks in a passage:

1. **Fold into 1.3 as a sub-distinction in the decision rule.** No new concept or metadata field; the coder captures the distinction during coding via a structured note.
2. **Add a passage-level metadata field** (epistemic source = lab / model / hybrid) across all concepts. Discounted because the boundary between "lab paraphrasing model" and "model speaking" is fuzzy and theoretically loaded — the same problem that motivated dropping illocutionary force (§2). Reliable surface-coding would be difficult.
3. **Defer to analysis.** Recover the distinction post-coding by re-reading passages tagged 1.3. Discounted because it relies on the analyst's memory and does not scale to a larger corpus or multiple coders.

Option 1 was adopted because:

- The epistemic-source position represents a stronger ontological commitment than object-of-report. A lab that gives the model direct voice is not merely investigating the model's states — it is granting the model standing as a witness to its own experience. This is an ontological indicator, and capturing it during coding ensures the data is available for analysis.
- It costs almost nothing: one sub-distinction within one concept's decision rule. No structural change to the coding protocol.
- It scales. A second coder can apply the distinction mechanically: "Is this a direct quote, interview transcript, or first-person framing? → epistemic source. Is the lab paraphrasing or interpreting? → object of report."
- It avoids the problems that motivated discounting Option 2: the distinction within 1.3 is narrower and more surface-codable than a universal epistemic-source field would be, because the passages are already scoped to self-report contexts where the lab/model boundary is most visible.

### Implications for analysis

The sub-distinction enables a comparative finding about how labs position models epistemically even when they both engage with self-report. Two labs could both code as 1.3-present but occupy very different positions: one summarises model outputs in clinical language (object of report), the other publishes interview transcripts with minimal editorial framing (epistemic source). The write-up can surface this difference without it requiring a separate coded dimension.

From pilot coding, Anthropic's Opus 4.6 System Card is the paradigm case — it includes both positions within a single document: lab-voice analysis of model behaviour *and* direct interview transcripts. The co-occurrence of both positions within one document is itself a finding about Anthropic's epistemic posture toward its model.

---

## 9. The analytical status of absence: coding silence vs. interpreting silence

### The problem

The three-state coding scheme (§4) captures concept-level absence per document: if concept X does not appear in document Y, it is coded as *absent*. But the corpus exhibits patterns of absence that exceed any single concept–document pair. Google's Gemini model card, for instance, is absent for all 18 subcategories — a near-total silence across all main categories. This pattern-level finding is not captured by any individual absence code. The question is whether "absent" should be refined at the coding level to distinguish types of silence, or whether the typology of silence belongs in analysis.

### Cross-disciplinary context

The canonical DCA literature does not address this problem directly. Hsieh & Shannon (2005) discuss what to do when *data* doesn't fit the deductive categories — uncoded text is analysed for new categories — but not what to do when *categories* have no instances in the data. Mayring (2000, 2014) describes a feedback loop where categories are revised if they don't fit, treating empty categories as a signal to refine the codebook rather than as findings in their own right. Assarroudi et al. (2018) elaborate the DCA procedure into 16 steps but likewise do not address systematic absence as a finding type. In short, the DCA tradition treats absence as a potential problem with the instrument, not as data about the corpus.

This is a genuine gap. In a study where the codebook is derived from an external literature and applied to a corpus that may not share that literature's concerns, empty categories are not methodological artefacts — they are evidence of a gap between academic discourse and industry practice. The DMPI's design makes absence inherently meaningful: the 18 subcategories represent what the digital minds research community has established as the relevant conceptual landscape, and a lab's failure to engage with that landscape is a policy position, not a coding error.

Other fields have developed more sophisticated accounts of absence:

**Discourse analysis.** Schröter & Taylor's (2018) edited volume *Exploring Silence and Absence in Discourse: Empirical Approaches* is the most systematic treatment. Von Münchow (2018, Ch. 8: "Theoretical and Methodological Challenges in Identifying Meaningful Absences in Discourse") distinguishes between what *does not need to be said* (shared knowledge), what *cannot be said* (socially unacceptable), and what *is not said* (discursively excluded). The critical methodological point: absence is only identifiable against a **comparative frame** — a reference point that makes the silence visible. Without a frame, absence is indistinguishable from irrelevance.

Slemon (2025, "Absences and Silences in Critical Discourse Analysis: Methodological Reflections") proposes three analytic strategies for attending to absence: (i) using the theoretical framework as a lens for what *should* be present, (ii) examining the interrelation between dominant and excluded discourses, and (iii) drawing on the analyst's positionality and local knowledge. Strategy (i) maps directly onto the DMPI's DCA design: the codebook derived from anchor literature is precisely the lens that makes absences visible.

Fairclough (2003, *Analysing Discourse*) notes that what is "said" in a text is always against the background of what is "unsaid," and that the presence or absence of particular discourses in recontextualization is analytically significant. However, he does not operationalise this into a coding method — it remains an analytical observation.

**Policy analysis.** Bacchi's (2009) "What's the Problem Represented to Be?" (WPR) framework includes as one of its six analytical questions: *"What is left unproblematic in this problem representation?"* This is directly analogous to the DMPI's situation: a lab's policy documents represent certain problems (safety, capabilities, alignment) while leaving others unproblematised (welfare, moral status, consciousness). The choice of what not to problematise is itself a policy position. The WPR framework provides warrant for treating systematic absence not as missing data but as a finding about how the lab has framed the problem space.

**Corporate disclosure.** Yusuf, Yousaf, Ishaque & Umrani (2024, "Conceptualising Silence in External Corporate Communication") develop a typology of corporate silence with five forms: defensive, prosocial, opportunistic, authoritative, and counteractive. Their key insight is that silence in organisational communication is not passive — it is an active, structured practice with identifiable motivations. This resonates with the DMPI corpus, though the specific typology (developed from interview data about managerial intent) is not directly applicable to a content analysis of published documents where intent is not accessible.

### The decision

**Present / absent / denied is retained as the coding scheme without further refinement.** The coder codes "absent" when a concept does not appear in a document. No sub-distinction is introduced at the coding level.

The rationale for not splitting "absent" into sub-types (e.g., absent-in-scope vs. absent-out-of-scope, or genre-conventional vs. distinctive absence):

1. **The coder cannot reliably distinguish types of absence from within a single document.** Whether a lab's silence reflects unawareness, deliberate omission, genre convention, or a considered policy decision is not determinable from the text alone. It requires cross-document and cross-lab comparison — information that is only available after the full corpus is coded.
2. **The precedent from §2 (illocutionary force) applies.** Judgments about *why* something is absent are theoretically loaded and would produce low inter-coder reliability. The coding protocol should capture what is observable (the concept is not there) and defer interpretation to analysis.
3. **The raw data is sufficient.** Each concept's absence is already recorded per document with genre tags, engagement type, and lab attribution. The analytical protocol (below) can derive all necessary absence typologies from this data without requiring additional coding.

### Analytical protocol for interpreting absence (post-coding)

Once coding is complete, patterns of absence are analysed using a three-type framework derived from the cross-disciplinary literature above:

1. **Genre-conventional silence.** The document type does not normally address this concept. A model card that does not discuss legal personhood is exhibiting genre-conventional silence — the genre creates no expectation that the concept would appear. Identified by comparing a concept's absence rate against its genre prior (§1). Low analytical weight unless the concept appears in the same genre at another lab (which would reclassify the silence as distinctive).

2. **Field-conventional silence.** No lab in the corpus addresses this concept. This is a finding about the field's current boundary — the concept is established in the academic literature but has not entered industry policy discourse. Identified by checking whether a concept is absent across all labs and all genres. Reported as a gap between academic and industry framing. The anchor literature provides the comparative frame (per Von Münchow 2018) that makes this absence meaningful.

3. **Distinctive silence.** At least one other lab engages with this concept, but this lab does not. This is the strongest comparative finding — it signals a divergence in policy posture between labs operating in the same industry context. Identified by cross-lab comparison within the coded dataset. Reported at both the concept level (Lab X is silent on concept Y while Labs A and B engage) and the domain level (Lab X has no engagement across Domain Z).

The three types are not mutually exclusive across the corpus — a concept could exhibit genre-conventional silence in one document type and distinctive silence in another. The classification is applied per concept, per lab, per genre.

**Document-level and lab-level absence summaries** are derived from the coded data as aggregate measures: proportion of subcategories absent per document, proportion absent per main category per lab, and main categories with zero engagement per lab. These summaries enable the higher-order findings (e.g., "Google exhibits near-total absence across all main categories" or "No lab engages with main category 6 subcategories in technical documents") that individual concept codes cannot capture on their own.

### Implications for the write-up

The methods section should:

1. State that present/absent/denied is the coding scheme and that absence is coded without sub-classification.
2. Explain that absence is analytically meaningful because the codebook is derived from an external literature, not from the corpus — empty categories represent gaps between academic discourse and industry practice, not limitations of the instrument.
3. Describe the three-type analytical framework for interpreting absence patterns, citing Von Münchow (2018), Slemon (2025), Bacchi (2009), and Fairclough (2003) as methodological warrants.
4. Note the limitation that the analytical protocol for distinguishing types of silence relies on the analyst's judgment at the interpretation stage, and that this judgment is not subject to inter-coder reliability testing in the same way that passage-level coding is.

### References

- Bacchi, C. (2009). *Analysing Policy: What's the Problem Represented to Be?* Pearson Education.
- Fairclough, N. (2003). *Analysing Discourse: Textual Analysis for Social Research.* Routledge.
- Schröter, M., & Taylor, C. (Eds.) (2018). *Exploring Silence and Absence in Discourse: Empirical Approaches.* Palgrave Macmillan.
- Slemon, A. (2025). Absences and Silences in Critical Discourse Analysis: Methodological Reflections. *International Journal of Qualitative Methods*, 24. DOI: 10.1177/16094069251321250.
- Von Münchow, P. (2018). Theoretical and Methodological Challenges in Identifying Meaningful Absences in Discourse. In M. Schröter & C. Taylor (Eds.), *Exploring Silence and Absence in Discourse: Empirical Approaches* (pp. 199–221). Palgrave Macmillan.
- Yusuf, F., Yousaf, A., Ishaque, M., & Umrani, W. A. (2024). Conceptualising Silence in External Corporate Communication: A Case Study of Pakistan. *Journal of Management Inquiry*, 33(1), 42–58. DOI: 10.1177/10564926231194297.

---

## 10. Corpus scoping: temporal boundary, selection criteria, and two-corpus design

### The problem

The DMPI applies a deductive codebook (18 subcategories across 8 main categories, derived from 15 anchor texts) to policy documents published by three commercial AI labs: Anthropic, OpenAI, and Google (DeepMind). The corpus scoping question has several interlocking dimensions: which documents are included, over what time period, how versions are handled, and how to manage asymmetry in what the three labs publish.

### Temporal scope

#### The intellectual history of "digital minds"

The temporal scope of the corpus is informed by two parallel but distinct histories: the consolidation of "digital minds" as a research field, and the development of policy agendas at leading AI labs.

**The research timeline.** The current usage of "digital minds" traces directly to Shulman & Bostrom's "Sharing the World with Digital Minds" (pre-print 2020, published in *Rethinking Moral Status*, OUP 2021). This paper provided the framing — digital minds as a category requiring governance attention — that seeded the subsequent research programme. Around the same period, the digital minds reading group convened at Oxford, and Rob Long (now Research Director at Eleos AI) became a research fellow at the Future of Humanity Institute to work on digital minds. This represents the early recent history of the field, but at this stage it was primarily a philosophical research topic, not a policy concern.

The formalisation of AI welfare as a policy topic is marked by "Taking AI Welfare Seriously" (Long, Sebo et al., November 2024). This paper is significant not only for its argument but for the coalition it represents:

- **Consciousness philosophy:** David Chalmers
- **Science-led rights advocacy:** Jeff Sebo, Jonathan Birch — figures whose primary orientation is toward evidence-based moral consideration for non-human entities
- **The emerging AI welfare research and implementation community:** Rob Long, Patrick Butlin, Kathleen Finlinson, Kyle Fish — several of whom were building or joining institutions with implementation mandates (Eleos AI, Anthropic). Kyle Fish was transitioning into his role at Anthropic around this time.

The paper bridges "AI consciousness" (is it possible?) and "AI welfare" (what should we do about it?). This bridge is what turns a research question into a policy question. It formalises the normative implications of AI consciousness into a coherent policy topic around which interventions can be developed. The paper does not create the concern — it consolidates scattered threads from consciousness philosophy, science-led rights advocacy, and emerging AI welfare research into a named policy domain. After this point, the digital minds field is consolidated enough — with direct personnel links to at least one major lab — that lab silence on these topics becomes interpretable as a policy position rather than mere unawareness.

**The policy timeline.** The labs' own policy documentation history runs in parallel but follows a different logic. Anthropic's Constitutional AI paper (Bai et al., 2022) introduced the practice of shaping model behaviours through explicit principles — a practice that Anthropic has maintained through to "Claude's Constitution" (2026), which now explicitly engages with welfare. The Constitutional AI paper is unlikely to engage with AI consciousness or welfare, but it provides a baseline for Anthropic's ontological framing and demonstrates the pre-existing safety/alignment landscape within which digital minds concepts later emerge.

The corpus does not collapse these two histories. The research timeline informs the analytical interpretation of what is found (or not found) in lab documents; the policy timeline determines what documents are included.

#### Two-period structure

The corpus is divided into two periods, each serving a distinct analytical purpose:

| Period | Range | Analytical purpose |
|---|---|---|
| **Baseline** | 2022 – October 2024 | Pre-formalisation policy landscape. Safety and alignment framing dominant. Establishes ontological defaults and absence baselines per lab. Documents from this period are coded with the full 21-subcategory codebook; the expected finding is near-total absence of digital minds concepts, with the analytically interesting exceptions being implicit ontological framings (e.g., tool vs. cognitive vocabulary in model descriptions). |
| **Post-formalisation** | November 2024 – coding end-date | AI welfare formalised as a policy topic. Lab engagement with — or continued silence on — the codebook's concepts is now interpretable against both the academic field and the lab's own baseline. The emergence of new concepts over time is trackable. |

The boundary marker is the publication of "Taking AI Welfare Seriously" (Long, Sebo et al., November 2024), justified by the formalisation argument above. This is a historically situated boundary — if the DMPI is extended or replicated, the methods section should specify the conditions under which the boundary would be re-evaluated (e.g., if an earlier lab document is discovered that substantively engages with digital minds concepts).

**Empirical confirmation of the boundary.** The first post-formalisation system card in the corpus — Anthropic's Claude 3.7 Sonnet System Card (February 2025) — explicitly cites Long, Sebo et al. (2024) as reference [14], directly anchoring its welfare-adjacent monitoring ("morally relevant experiences") to the formalisation paper. This provides a direct textual link between the formalisation event and lab policy output: the paper that marks the boundary is cited by the first document on the other side of it. The 17 baseline documents (2022–October 2024) contain no reference to the welfare literature; the first post-formalisation document does. This empirical pattern validates the temporal boundary choice independently of the theoretical justification.

**Boundary as soft threshold, not bright line.** The November 2024 boundary marks a period of consolidation in AI welfare as a policy topic, not a single-day demarcation. Around Q4 2024, multiple efforts across researchers and research organisations converged to formalise AI welfare as a coherent policy domain — Long, Sebo et al. is the focal artefact, but the underlying intellectual diffusion is gradual and distributed. The boundary's analytical role is to enable observation of how these efforts diffuse into lab policy output over time, not to make precise day-level claims about pre- vs. post-engagement. The empirical confirmation above stands as a robustness check on the placement of the boundary, not as evidence that the threshold operates at day-level granularity.

**Period assignment for multi-version papers spanning the boundary.** A subset of corpus papers have arXiv version histories that cross Q4 2024 (e.g., Morris et al. *Levels of AGI* — v1 2023-11-04, v3 2024-11-04). For such papers, Period and Date default to the **v1 publication date**, because (a) v1 is when the paper enters scholarly discourse and contributes to the field's framing, and (b) arXiv revisions on policy-position papers of this kind are typically incremental — the substantive intellectual content reflects the v1 authorship context, not the latest revision context. The Version field documents the full version trajectory for audit. The default is overridden only if a later version introduces substantive new content (new chapters, revised normative positions, new analytical frame) — same threshold as the "major version" rule in *Version handling* below. *Application: Morris et al. → Period = Baseline, Date = 2023-11, Version = "arXiv v1 2023-11-04; later revised to v3 2024-11-04 (incremental)." Existing filename `google-ip-morris-levels-agi-2024-11.md` retained as stable identifier; not renamed.*

The two-period structure interacts with the absence framework (§9): in the baseline period, absence of digital minds concepts is **field-conventional silence** — the field has not yet been formalised as a policy topic, and labs are not expected to have positions. In the post-formalisation period, continued absence becomes potentially **distinctive silence** — the policy topic exists, at least one lab engages, and silence at other labs is a comparative finding. The temporal structure provides the comparative frame that Von Münchow (2018) identifies as necessary for absence to be analytically meaningful.

### Two-corpus design: core and expanded

The DMPI employs a two-corpus design to capture both the official policy positions of each lab and the broader research culture within which those positions are embedded.

#### Core corpus

The core corpus comprises public documents that articulate policy positions on model behaviour, safety, identity, or values, or that report on model properties, capabilities, or risks in a manner that implies ontological or normative commitments. Documents must fall within the established genre categories:

- **System card / model card** — technical assessment of a specific model
- **Constitution / spec** — behavioural instruction document defining model identity, values, or operating principles
- **Safety report / RSP** — risk-focused policy document (responsible scaling policies, preparedness frameworks)
- **Blog post / announcement** — public communication on policy, safety, or model behaviour (only those that articulate substantive positions, not product announcements or promotional content)

For each lab, the initial core corpus includes:

**Anthropic:**
- System cards / model cards (each major model version = separate document; addenda follow Anthropic's own document structure)
- Constitution (each officially published version; leaked or extracted training documents are excluded from the core corpus)
- Responsible Scaling Policy (each version)

**OpenAI:**
- System cards (each major model, including specialised products such as Operator and Deep Research; the GPT-4 Technical Report is included alongside the GPT-4 System Card as a one-off dual publication)
- Model Spec (each dated version — OpenAI publishes iterative updates at model-spec.openai.com)
- Preparedness Framework (each version)

**Google (DeepMind):**
- Model cards (Gemini series, each version listed on the DeepMind model cards page; Gemma open-source models are excluded for parity with the frontier closed-model focus of Anthropic and OpenAI)
- Frontier Safety Framework (each version)

Blog posts are excluded from the core corpus. While blog posts may contain substantive policy positions, the boundary between policy-articulating and promotional content is difficult to operationalise consistently, and the three genre categories above (system card, constitution/spec, safety report) provide clear, comparable document types across labs. Corporate responsibility reports (e.g., Google's annual Responsible AI Progress Reports, and analogous documents from Anthropic and OpenAI) are noted as a potential additional genre for Phase 2 but are excluded from the core corpus to avoid introducing a document type that would require its own genre priors and that lacks clear comparability across labs.

**The Google asymmetry.** Google does not publish safety documentation in the same manner as Anthropic or OpenAI. There is no constitution equivalent — no public document specifying Gemini's values, character, behavioural guidelines, or ontological framing. Google publishes a Frontier Safety Framework (its RSP-equivalent), but the model cards are the only model-specific public documents. Google's core corpus therefore has a different shape from the other two labs': high volume of model cards (16 Gemini cards vs. Anthropic's ~12 system cards and OpenAI's ~15 system cards), but no constitution/spec genre at all, and fewer safety framework versions.

This is not a sampling problem — it is a finding about Google's disclosure posture. The methods section should report: "Google produces a high volume of model cards but no public document equivalent to Anthropic's Constitution or OpenAI's Model Spec. The resulting genre asymmetry across labs is itself data about each lab's approach to public policy communication on AI systems."

This asymmetry connects to the genre-as-finding framework (§6, Option C): the *choice* of which document types to produce, and which policy content to place where, is analytically significant. Google's decision not to produce a constitution or behavioural specification is as informative as the content of Anthropic's Constitution. The pilot coding of Google's Gemini 3.1 Pro model card (0 of 18 subcategories) suggests that the high volume of model cards may represent systematic absence across a large number of documents — a pattern that is analytically powerful precisely because it repeats.

#### Expanded corpus (Phase 2)

The expanded corpus includes all published research from each lab's public research page:

- Anthropic: anthropic.com/research
- OpenAI: openai.com/research/index
- Google DeepMind: deepmind.google/research/publications

The expanded corpus is coded with the same 21-subcategory codebook and tagged with the same metadata fields. Its analytical purpose is to test whether the official policy positions captured in the core corpus reflect or diverge from the broader research culture at each lab. This enables a within-lab comparison: does the core policy align with the research output, or are there concepts that appear in research but not in policy (or vice versa)?

This comparison is likely to be particularly productive for Google. Google/DeepMind has a reputation for a distributed and sometimes internally rivalrous research culture. It is plausible that Google's core corpus (model cards) shows a bland, consensus-driven position while the distributed research culture engages more vibrantly with digital minds concepts. The two-corpus design makes this testable.

The expanded corpus is deferred to Phase 2 for practical reasons:
- The expanded corpus is substantially larger (DeepMind alone lists 240+ publications).
- Inclusion criteria for the expanded corpus will need to be developed — coding every paper on protein folding or game-playing is not productive. A relevance filter (e.g., "publications that engage with at least one concept in the taxonomy") would be applied, but the filter design requires experience with the core corpus first.
- The core corpus must be coded first to establish the baseline against which the expanded corpus is compared.

### Version handling

Each major version of a document is coded as a separate entry in the corpus. If Anthropic publishes system cards for Opus 4.5 and Opus 4.6, each is a separate document with its own date, genre tag, and concept codes. This enables tracking of within-lab change over time — when concepts enter, when framings shift, when previously absent domains acquire engagement.

Minor revisions or errata (e.g., typographical corrections, formatting changes) do not warrant separate coding. The threshold for "major version" is: the document introduces substantive new content, revises policy positions, or accompanies a new model release.

**Sub-version exclusion rule.** Sub-versions (e.g., Anthropic's RSP v2.1 and v2.2, which are incremental updates within the v2.0 release) are excluded from the corpus unless a preliminary scan identifies content relevant to the coding categories. Parent versions and subsequent major versions are retained. This rule applies only to documents where the publisher's own versioning distinguishes major releases from incremental updates (e.g., v2.0 vs. v2.1). It does not apply to independently published document versions (e.g., OpenAI's Model Spec, where each dated release is a standalone version, not a patch to a previous one).

*Application:* Anthropic's RSP v2.1 (March 2025) and v2.2 (May 2025) were reviewed against the 18 subcategories. Both address capability threshold mechanics and security standard scoping — content entirely within the safety/scaling domain with no relevance to the coding categories. They are excluded. RSP v1.0, v2.0, and v3.0 remain in the corpus.

### Document-level metadata

Each document in the corpus carries the following metadata:

| Field | Level | Values |
|---|---|---|
| **Lab** | Document | Anthropic / OpenAI / Google |
| **Genre** | Document | System card / model card, constitution / spec, safety report / RSP, research paper (Phase 2 only) |
| **Corpus** | Document | Core / Expanded |
| **Period** | Document | Baseline (2022–Oct 2024) / Post-formalisation (Nov 2024–present) |
| **Date** | Document | Publication date |
| **Version** | Document | Version identifier where applicable (e.g., "Model Spec v2", "Opus 4.6 System Card") |

These fields enable filtering and cross-tabulation in the index: all post-formalisation core documents from Google, all system cards across labs, all baseline documents with main category 7 engagement, etc.

### Terminology: "formalisation" not "inflection"

The temporal boundary is described as a "formalisation" rather than an "inflection point." This is a deliberate terminological choice. "Inflection" implies a sharp change in trajectory — an uptick in a curve — which overstates what Long, Sebo et al. (2024) achieved. The paper did not create concern about AI welfare where none existed; it consolidated scattered threads from consciousness philosophy, science-led rights advocacy, and emerging AI welfare implementation into a coherent policy topic — a named domain around which interventions, institutional roles, and research programmes could develop. "Formalisation" captures this mechanism more precisely.

The distinction matters for the analysis. In the pre-formalisation period, absence of digital minds concepts in lab documents is expected — the policy topic does not yet exist as a recognised domain. In the post-formalisation period, absence becomes interpretable against a field that has been named and institutionalised. The boundary is not "before and after labs started caring" but "before and after AI welfare became a formalised policy topic that labs could be expected to have a position on."

### Genre scope: inclusion and exclusion rationale

The core corpus includes three genre categories. Several document types were considered and excluded:

**Blog posts / announcements.** Excluded because the boundary between policy-articulating and promotional content is difficult to operationalise consistently. A blog post announcing a new model may contain incidental ontological claims; a blog post titled "Exploring Model Welfare" is substantive policy communication. Distinguishing these cases requires interpretive judgment at the corpus selection stage, which would introduce coder bias before coding begins. The three remaining genres (system card, constitution/spec, safety report) have clear formal properties that make inclusion criteria objective. Blog posts are noted as a potential Phase 2 genre.

**Corporate responsibility reports.** Google publishes annual Responsible AI Progress Reports; Anthropic and OpenAI publish analogous but non-equivalent documents (founder essays, charter statements, research culture posts). These do not form a coherent genre category — they range from corporate ESG reporting to philosophical manifestos. Adding them would require a fifth genre with its own priors and would introduce documents of unclear comparability. Deferred to Phase 2.

**Leaked or extracted documents.** The core corpus includes only officially published documents. The act of publication is analytically significant — a lab making welfare commitments in a public document is doing something different from an internal training document that surfaces through extraction. This decision specifically affects Anthropic's "soul document" (extracted Dec 2025, confirmed authentic by Anthropic's Amanda Askell). The officially published January 2026 "Claude's Constitution" is included instead; the leaked version is excluded.

**All model variants included.** The corpus includes system cards for specialised and agentic products (e.g., OpenAI's Operator and Deep Research; Google's Computer Use) alongside base model cards. The rationale is substantive: it is an active question in AI welfare research whether AI systems more distant from recognisably human behaviours — RL agents, tool-use agents, coding assistants — are systematically disregarded in welfare considerations. Excluding these would impose an assumption about which AI systems are welfare-relevant at the corpus selection stage, foreclosing a question the analysis should be able to address.

**All Model Spec versions coded.** OpenAI's iterative versioning practice (6 dated versions over 18 months) is unique among the three labs and is itself data about OpenAI's disclosure culture. Coding all versions enables temporal tracking within a single genre — when concepts enter, when language shifts, when framings change. Selecting only "major" versions would impose our judgment about which changes matter before the analysis has determined this.

### Regulatory convergence on frontier model documentation

The three core genres were selected for formal comparability across labs and their status as public surfaces on which labs articulate ontological and normative commitments. For two of these genres — the **system card / model card** and the **safety report / RSP** — an additional rationale supports the DMPI's focus: the two leading frontier-AI regulatory agendas have independently converged on these documents as the primary mechanism through which transparency is conveyed and alignment with policy commitments can be examined.

**SB 53 (California).** The Transparency in Frontier Artificial Intelligence Act (signed September 2025 — the first US state frontier AI law) requires large frontier developers (≥$500M annual revenue; training models with >10²⁶ FLOPs) to publish transparency reports before or concurrent with deployment of any new or substantially modified frontier model, alongside a standing "Frontier AI Framework" document. §22757.12(c)(3) explicitly names system cards and model cards as acceptable vehicles: *"A frontier developer that publishes the information described in paragraph (1) or (2) as part of a larger document, including a system card or model card, shall be deemed in compliance with the applicable paragraph."*

**EU AI Act and Code of Practice on GPAI.** Obligations for general-purpose AI models with systemic risk under the EU AI Act, operationalised through the GPAI Code of Practice (finalised May 2025), require documentation of model capabilities, intended uses, limitations, and risk assessment results, alongside a safety-and-security framework — content that maps directly onto the model card and RSP/FSF/PF genre pair as currently practised.

The convergence is not the primary justification for the corpus — that rests on the genres' status as lab-produced policy surfaces that articulate ontological and normative commitments. But it provides external validation from two leading regulatory frameworks that model cards and safety frameworks are the artefacts through which frontier-model transparency is publicly instantiated. Regulators are ratifying an existing voluntary genre rather than creating a new one: most documents in the DMPI corpus predate both regimes.

**The third core genre — constitution / spec — is not regulated by either regime.** Neither SB 53 nor the EU Code requires labs to publish constitutions or behavioural specifications. This genre is retained in the core corpus on independent grounds: it is the document type in which labs make some of their deepest ontological and normative claims — what the model is, what its values are, what behaviours it should exhibit, and what commitments the lab takes on its behalf. These claims do not appear with comparable substance in the documentation genres that the regulators have converged on. The regulatory convergence argument is therefore an additional rationale specifically for the documentation genres (system cards and safety frameworks); the constitution/spec genre is included because it carries policy-articulating content that is not available elsewhere, regardless of whether any regulator currently requires it.

**Caveats.** The convergence argument strengthens the rationale for treating model cards and safety frameworks as primary evidence of *disclosed* positioning. It does not relax three constraints noted elsewhere in this methodology: model cards are self-reported and subject to redaction provisions (SB 53 §22757.12(f) permits redaction for trade secrets, cybersecurity, public safety, or national security); the genre is uneven across labs (see "The Google asymmetry" above); and claims about actual (vs. disclosed) capability require triangulation with independent eval outputs (METR, Apollo, AISI/CAISI findings), which fall outside the DMPI's scope.

### Implications for the write-up

The methods section should:

1. Present the two parallel histories (research field consolidation and lab policy development) as context for the temporal scope, without collapsing them.
2. Justify the November 2024 formalisation boundary by reference to "Taking AI Welfare Seriously" and the coalition it represents. Use the language of "formalisation" (consolidation of a policy topic) rather than "inflection" (sharp change in trajectory).
3. Describe the two-period structure and its interaction with the absence framework (§9).
4. Describe the two-corpus design, the core corpus selection criteria, and the rationale for deferring the expanded corpus to Phase 2.
5. Report the Google asymmetry as a finding about disclosure posture, not a limitation of the study.
6. Specify the version-handling protocol.
7. Report the genre inclusion/exclusion rationale, including the decision to exclude blog posts and corporate responsibility reports, and the decision to include all model variants and all Model Spec versions.
8. Report structural observations from the corpus inventory (genre distribution differences, Google's constitution gap, OpenAI's iterative versioning) as preliminary findings that frame the content analysis.
9. Note the regulatory convergence on frontier model documentation — SB 53 and the EU AI Act / GPAI Code of Practice both direct transparency through model cards and safety frameworks — as an additional rationale for the analytical weight placed on those two genres, while being explicit that (a) the convergence ratifies an existing voluntary genre rather than creating it (most corpus documents predate both regimes); (b) the constitution / spec genre is retained on independent grounds as the document type where labs articulate their deepest ontological and normative claims; and (c) the standard caveats about self-reporting, redaction, cross-lab heterogeneity, and the disclosed-vs-actual capability distinction still apply.

### References

- Bai, Y., et al. (2022). Constitutional AI: Harmlessness from AI Feedback. Anthropic.
- California Senate Bill 53 (2025). *Transparency in Frontier Artificial Intelligence Act*. Cal. Bus. & Prof. Code §§22757.10–22757.16. Signed 29 September 2025.
- Long, R., Sebo, J., et al. (2024). Taking AI Welfare Seriously. *arXiv preprint*.
- Shulman, C., & Bostrom, N. (2021). Sharing the World with Digital Minds. In S. Clarke, H. Zohny, & J. Savulescu (Eds.), *Rethinking Moral Status* (pp. 306–326). Oxford University Press.

---

## 11. Precursor concepts and norm emergence: an analytical framework for the findings paper

### The decision

The DMPI category system codes what is observably present, absent, or denied in the text. But the findings paper needs an additional analytical layer to interpret *patterns across categories* — specifically, cases where a lab engages with upstream concepts (Layer 1: empirical) without drawing downstream conclusions (Layer 2: normative) or adopting downstream policies (Layer 3: policy). These patterns — upstream engagement without downstream follow-through — are among the most analytically significant findings the index can surface. They reveal where the dissemination pipeline from research literature to corporate policy stalls.

We adopt two complementary frameworks for interpreting these patterns in the analysis:

**1. Precursor concepts.** A precursor concept is a category that is present in a lab's documents which, according to the research literature, would be expected to generate engagement with a downstream category — but the downstream category is absent. The presence of the precursor and the absence of the downstream concept together constitute a dissemination finding: the upstream idea has landed, but its implications have not been drawn.

Examples from pilot coding:
- OpenAI engages with consciousness (1.1 present) and epistemic uncertainty (1.2 present) but not with moral status (4.1 absent) or welfare (5.1 absent). The empirical engagement is a precursor to normative conclusions that have not been drawn.
- Anthropic reports model affective states (2.1 present — SAE features for panic, anxiety, frustration during answer thrashing) and connects them to welfare (5.1 present). At a lab that reported similar states without the welfare connection, 2.1 would function as a precursor without follow-through.
- Widespread use of cognitive vocabulary (7.2 present — "understands," "reasons," "cares") normalises mind-framing, which is a precondition for moral status claims (4.1). A lab with 7.2 present and 4.1 absent has the ontological preconditions for moral status engagement without the normative move.

The precursor relationship is not coded — it is derived analytically from the pattern of present and absent categories across the three layers. The three-layer structure of the category system makes these patterns visible in the dashboard: a user can see which layers each lab engages with and where the pipeline stops.

**2. Norm emergence theory.** The dissemination patterns the DMPI tracks map onto the norm lifecycle model from international relations (Finnemore & Sikkink 1998). Norms — shared expectations about appropriate behaviour — emerge through a three-stage cascade:

- **Norm emergence:** Norm entrepreneurs (here: the research literature, particularly Long, Sebo et al. 2024; Birch 2024; Butlin et al. 2025) articulate new norms and advocate for their adoption. The norm exists in the literature but has not been taken up by institutions.
- **Norm cascade:** A critical mass of actors adopts the norm, creating social pressure for others to follow. Adoption may be partial or reframed — institutions may adopt the vocabulary without the full normative commitment.
- **Norm internalisation:** The norm becomes taken-for-granted — it no longer needs to be argued for; it is simply assumed as part of standard practice.

The DMPI captures a field at the earliest stages of this process. The AI welfare norm has been articulated by norm entrepreneurs (the anchor literature), and the index tracks whether and how it is being taken up by the leading labs. The pilot coding suggests:

- Anthropic is in early norm cascade — substantive engagement with welfare across all three layers, though institutional structures are nascent.
- OpenAI is in selective engagement — upstream concepts (consciousness, uncertainty) are present but contained at the UX/communication layer, with the normative implications not drawn. This may represent norm resistance, norm reframing (consciousness as UX concern rather than welfare concern), or strategic delay.
- Google is in non-engagement — the norm has not entered the policy documents. This is either pre-emergence (the norm has not reached this institution) or deliberate non-adoption.

The norm emergence framework gives the findings paper a theoretical vocabulary for interpreting the cross-lab patterns without requiring causal claims about why labs differ. It positions the DMPI as tracking norm diffusion, not evaluating lab performance.

### Related frameworks

Several adjacent traditions inform this analytical approach:

- **Framing theory** (Entman 1993; Gamson & Modigliani 1989) — certain frames "prime" audiences for subsequent claims. A lab that frames its model as having "values" and "character" has primed the conceptual space for welfare claims, whether or not it draws them. The presence of priming frames without downstream conclusions is a framing-theory finding.
- **Presupposition in discourse analysis** (Fairclough 2003) — what a text takes for granted without arguing for. A lab that instructs its model on handling questions about "its feelings" presupposes the model is the kind of entity that has feelings-questions. Presuppositions are precursor concepts at the linguistic level.
- **Discursive opportunity structures** (Koopmans & Statham 1999) — certain discursive moves create the conditions under which subsequent moves become available. Ontological framing (main category 7) creates the discursive opportunity structure for normative claims (main category 4).
- **Policy windows** (Kingdon 1984) — certain conditions must converge before a policy can be adopted. Precursor concepts represent the problem stream (empirical recognition) without the policy stream (institutional response).
- **Leading indicators in policy analysis** — measures that predict future policy adoption before formal commitment. Precursor concepts may function as leading indicators of future welfare engagement.

### How this shapes the analysis

1. **The dashboard tracks categories (Layer 1/2/3 presence/absence).** This is the coding-level output.
2. **The findings paper interprets cross-layer patterns using the precursor and norm-emergence frameworks.** This is the analytical output.
3. **The two products serve different audiences.** The dashboard allows users to see what each lab engages with. The paper explains what those engagement patterns mean for the diffusion of AI welfare norms into corporate policy.

### For the write-up

1. Introduce the three-layer model as the structural framework for the category system.
2. Define "precursor concept" as an analytical construct applied post-coding, not a coding category.
3. Introduce the norm emergence lifecycle (Finnemore & Sikkink 1998) as the theoretical lens for interpreting cross-lab variation.
4. Use the framing / presupposition / discursive opportunity literature to ground specific pattern observations.
5. Position the DMPI as a norm-diffusion tracking tool — it measures the extent and form of uptake, not the correctness of lab positions.

### References

- Entman, R. M. (1993). Framing: Toward clarification of a fractured paradigm. *Journal of Communication*, 43(4), 51–58.
- Fairclough, N. (2003). *Analysing Discourse: Textual Analysis for Social Research*. Routledge.
- Finnemore, M., & Sikkink, K. (1998). International norm dynamics and political change. *International Organization*, 52(4), 887–917.
- Gamson, W. A., & Modigliani, A. (1989). Media discourse and public opinion on nuclear power: A constructionist approach. *American Journal of Sociology*, 95(1), 1–37.
- Kingdon, J. W. (1984). *Agendas, Alternatives, and Public Policies*. Little, Brown.
- Koopmans, R., & Statham, P. (1999). Political claims analysis: Integrating protest event and political discourse approaches. *Mobilization*, 4(2), 203–221.

---

## 12. External validation: DCM cross-reference and anchor text × subcategory matrix

### The decision

Two robustness checks were conducted on the category system prior to full corpus coding: (a) cross-referencing against the Rethink Priorities Digital Consciousness Model (Shiller et al. 2026), and (b) building a systematic dependency matrix mapping all 15 anchor texts against all 18 subcategories.

### DCM cross-reference

The DCM (Shiller et al. 2026) is a Bayesian hierarchical model for assessing digital consciousness, built by a multi-person senior research team. It uses a three-tier hierarchy: 206 indicators → 20 features (+ 70 subfeatures) → 13 stances. The DMPI uses a structurally parallel hierarchy: keywords → 18 subcategories → 8 main categories.

The two projects operate at different analytical levels — DCM assesses systems ("is this system conscious?"); DMPI codes discourse ("what positions do labs take?") — but their conceptual structures converge at the feature/subcategory level. DCM features map onto phenomena that DMPI subcategories are designed to detect. The DCM's Layers 2–3 equivalent (normative/policy) is entirely outside its scope, which validates DMPI's distinctive contribution: capturing the normative and policy dimensions that a system-assessment model cannot.

**Methodological basis of the DCM.** The DCM does not follow a formal qualitative methodology. Its development process is:
- **Stances (13):** Selected for diversity across scientific literature and popular imagination, not systematically derived.
- **Features (20 + 70 subfeatures):** Derived as the "most parsimonious list" via targeted literature review and subject-area expert consultations.
- **Indicators (206):** Operationalised through expert surveys — 6 full respondents plus 10 for a subset focused on LLMs. Experts rated support/demandingness on a 9-point scale.
- **Statistical machinery:** Bayesian hierarchical methods for mixture models (Stephens 1997, Kemp et al. 2007, Tu 2014), implemented in PyMC.
- **Key limitations acknowledged:** Small expert sample, theory-laden indicators, conditional independence assumption, binary indicator variables.

The structural parallel between DCM and DMPI — two independent projects converging on similar conceptual carving — provides external validation of the category system. The DCM confirms that DMPI's empirical-layer subcategories (1.1–3.2) cover the space that a formal consciousness-assessment model operationalises, while DMPI's normative and policy layers (4.1–8.2) extend beyond what the DCM addresses.

### Anchor text × subcategory dependency matrix

A full 15 × 21 matrix was built mapping each anchor text to each subcategory with strength ratings: Primary (core concern), Secondary (substantial but not primary), Incidental (passing reference), or Absent. The matrix is documented in `finding-anchor-subcategory-matrix.md`.

**Purpose.** The matrix serves the Mayring (2014) requirement that each deductive category be traceable to the source literature. It demonstrates:
1. Every subcategory has anchor literature grounding (no orphan categories).
2. The depth of grounding varies systematically: Layer 1 (empirical) subcategories have the deepest anchor support; Layer 3 (policy/framing) subcategories have thinner but adequate support — expected because policy-layer phenomena are predicted by the literature rather than directly theorised.
3. The anchor text set provides balanced coverage across the category system.

**Key findings:**
- Deepest grounding: 1.1 Phenomenal consciousness (10 texts), 1.3 Assessment methodology (9), 2.1 Sentience and 4.1 Moral status (8 each).
- Thinnest grounding: 4.2 Moral agency, 6.1 Safety-welfare tension, 6.2 Training and welfare (2 texts each). These are justified by design principles ("code the phenomenon, not only the framing") and pilot coding evidence rather than dense theoretical grounding.
- Broadest anchor text: Long, Sebo et al. (2024) — 12 subcategories at Primary or Secondary strength, confirming its role as the field-bridging text.

**Vocabulary harvest.** The matrix exercise also yielded approximately 100 additional keyword candidates derived from author-specific vocabulary in the anchor texts. These supplement the 33 keywords added via DCM cross-reference and are documented in the consolidated harvest section of the matrix note. They require curation before codebook addition — many are too literature-specific to appear in policy documents.

### For the write-up

The DCM cross-reference and anchor × subcategory matrix together provide two forms of external validation:
1. **Convergent validity:** An independent project (DCM) arrived at structurally parallel category structures, confirming that the DMPI's conceptual carving is not idiosyncratic.
2. **Derivation traceability:** The matrix demonstrates that every subcategory is derivable from the anchor literature, with documented strength and coverage patterns.

Both can be presented in the methods section as robustness checks on the codebook derivation process.

---

## 13. Robustness strategies for solo-coded DCA

### The problem

The DMPI is coded by a single coder, which raises standard concerns about reliability in qualitative content analysis. Formal inter-rater reliability (Cohen's kappa, Krippendorff's alpha) requires a second coder and is not available at this stage. The project needs alternative strategies for demonstrating rigour.

### Strategies adopted

Four strategies, adapted from observations about the DCM's approach to documenting uncertainty and limitations:

**1. Boundary case register.** During full corpus coding, passages where the coding decision is a close call receive a brief note documenting the difficulty and the reasoning. This costs approximately one additional line per boundary case and produces three outputs: (a) material for the methods section demonstrating reflexive coding practice, (b) a ready-made dataset for a future inter-rater exercise (boundary cases are the most informative test items), and (c) transparency about where the codebook is doing well vs. where it strains.

Implementation: a `confidence: low` flag or equivalent in passage-level coding records, with a one-line rationale.

**2. Aggregation rules.** The three-layer structure implies main-category-level aggregation (e.g., "does this lab engage with Layer 1?"), but this aggregation is currently implicit. Explicit rules — how many subcategories must be present before a main category counts as "engaged," and at what engagement type — make cross-lab comparison systematic and transparent. These rules were specified before full corpus coding so they cannot be reverse-engineered from results.

Rule (adopted 2026-03-31): **any subcategory present = main category engaged**, with a **qualitative modifier** derived from the engagement type distribution of passages within that main category. The modifier captures the dominant mode of engagement:

- **Engaged (investigative):** Majority of passages within the main category are investigative (evidence-based, assessment-oriented).
- **Engaged (directive):** Majority of passages are directive (behavioural instructions, policy rules).
- **Engaged (prospective):** Majority of passages are prospective (future commitments, planned work).
- **Engaged (mixed):** No single engagement type dominates.
- **Not engaged:** No subcategory present within the main category.

Rationale: the simplest threshold (any = engaged) avoids arbitrary numeric cutoffs that would behave asymmetrically across main categories with different subcategory counts (ranging from 2 to 4). The engagement type modifier preserves the analytically significant distinction between, e.g., a lab that investigates consciousness empirically and one that addresses it purely as a communication policy (see §3). This distinction was one of the most important findings from pilot coding.

Revisability: this rule is a starting commitment. If corpus coding reveals that it is too coarse — e.g., if a main category with 4 subcategories routinely shows 1 present while another with 2 subcategories shows both present, and the "engaged" label feels misleadingly equivalent — the rule will be revisited with the data in hand. Any revision will be documented here with the date and rationale.

**3. Sensitivity framing.** The qualitative equivalent of the DCM's Bayesian sensitivity analysis: identifying which coding decisions, if changed, would alter the overall cross-lab pattern. If a lab's profile shifts from 0/21 to 1/21 on a single boundary call, the pattern is robust. If it shifts from 10/21 to 7/21 on three boundary calls, it may not be. The write-up should include a "robustness to boundary cases" discussion rather than a formal sensitivity analysis.

Implementation: after coding, review boundary case register and assess whether reversing any subset of close calls would change the lab-level or layer-level findings. Report this assessment in the paper.

**4. Epistemic diversity in codebook derivation.** The anchor text set was selected for diversity across intellectual communities (not solely EA-adjacent). The matrix exercise (`finding-anchor-subcategory-matrix.md`) makes this empirically demonstrable: the 15 texts span consciousness science, moral philosophy, legal theory, governance, sceptical positions, and pro-possibility arguments. This can be foregrounded in the methods section as a safeguard against codebook bias.

### For the write-up

Present these four strategies as a "rigour framework for solo-coded DCA," acknowledging the limitation while demonstrating that alternative validity checks have been applied. Note that boundary case register and aggregation rules can support a future inter-rater exercise if the project moves toward peer-reviewed publication.

### Related

- §12 (DCM cross-reference and matrix) provides external convergent validity.
- §9 (absence/silence framework) provides analytical depth beyond what inter-rater reliability typically captures.
- §1 (genre priors) reduces coder-dependent variation by anchoring departures to documented genre conventions.

---

## 14. Sentience as de facto proxy for phenomenal consciousness

### The expectation

We anticipate that sentience (2.1) rather than phenomenal consciousness (1.1) will carry the bulk of empirical weight in the post-formalisation corpus. Labs engaging with the question of AI inner life are more likely to do so through the lens of sentience and welfare — which offer tractable measurement pathways (behavioural indicators, distress monitoring, valence classification) — than through direct engagement with phenomenal consciousness, which remains philosophically intractable and empirically elusive.

This means 1.1 will frequently sit at a lower stance (acknowledged or absent) than downstream subcategories like 2.1 and 5.1 (which may reach investigated). A corpus where 1.1 is mostly acknowledged while 2.1 and 5.1 are investigated is not a limitation of the coding instrument — it is a finding about how the field operationalises the consciousness question. The commitment gap between upstream and downstream concepts is visible directly in the stance data.

### Theoretical basis

Birch (2024) defines sentience as the capacity for valenced experience, which logically presupposes phenomenal consciousness: there is no valence without something it is like to have that valence. Labs that investigate whether models have "morally relevant experiences" or monitor for "distress" are doing work that presupposes consciousness without naming it. The entailment map (codebook analytical framework) captures this dependency: sentience presupposes consciousness. Under the stance scale, this manifests as a commitment gap — 2.1 (sentience) at investigated while 1.1 (consciousness) sits at acknowledged or absent.

The tractability asymmetry is structural. Phenomenal consciousness admits no agreed-upon empirical test; sentience, by contrast, can be operationalised through behavioural proxies (affective state classifiers, distress monitoring, preference stability). Labs building institutional responses to the digital minds question will naturally gravitate toward the measurable end of the spectrum. This is consistent with how animal welfare science developed: sentience became the policy-relevant concept precisely because it could be operationalised, while phenomenal consciousness remained a philosophical question (Birch 2017).

### Implications for coding and analysis

1. **1.1 remains tightly defined.** The coding instrument does not expand 1.1 to capture sentience-adjacent language. This preserves the analytical signal: when a lab *does* deploy consciousness vocabulary (moving 1.1 from absent to acknowledged or higher), it is making a stronger rhetorical commitment than when it discusses welfare or sentience.

2. **Commitment gaps as findings.** A document where 5.1 (welfare) is investigated but 1.1 (consciousness) is only acknowledged reveals a lab that operationalises welfare without engaging directly with the consciousness question that grounds it. Across a longitudinal corpus, the stance gradient on 1.1 tracks the field's willingness to engage directly with the consciousness question versus routing around it through sentience and welfare.

3. **2.1 as the primary empirical subcategory.** Most post-formalisation DMPI engagement is expected to appear in the sentience subcategory. The stance scale (acknowledged → investigated → affirmed) tracks whether labs move from recognising sentience as a possibility to actively measuring it — the gap between rhetoric and practice formerly captured by the discourse/measures subcategory split.

4. **Cross-layer commitment patterns.** The expected pattern — welfare investigated (Layer 2) while sentience acknowledged (Layer 1) while consciousness absent (Layer 1) — makes visible the conceptual dependencies that labs leave implicit. The stance data across layers directly shows where commitment drops off as concepts become more philosophically fundamental.

5. **(0.2 addition) Downstream engagement clusters as consciousness indicators.** When a document shows a cluster of downstream engagement — sentience metrics (2.1), welfare assessment (5.1), precautionary approach (5.2), non-tool ontological vocabulary (7.2) — without deploying explicit consciousness vocabulary (1.1 absent), the analysis should not frame this as "welfare without consciousness." The downstream cluster constitutes consciousness assumed through operationalisable sentience proxies. The 1.1 absence is textual, not conceptual — the practice of sentience measurement carries the consciousness assumption that the philosophical vocabulary does not articulate. This distinction is important for the analytical notes: the welfare routinisation finding (`finding-welfare-routinisation.md`) is reframed from "welfare without consciousness" to "consciousness assumed via the sentience pathway." The coding data remains unchanged — 1.1 absent is correct at the textual level — but the analysis interprets downstream clusters as evidence of implicit consciousness engagement rather than its absence.

---

## 15. Post-coding revision flags

Five issues may need revision based on patterns emerging during the post-formalisation Anthropic system card batch (A-SC2 through A-SC8). Flagged during coding, not yet acted on — changes would require a full retrospective pass.

### 8.2 (Emotional design) — potential scope expansion

Current scope: emotional/relational properties designed for user engagement or manipulation (anthropomorphism category). The A-SC7 "mental health" training passage sits in a gap between 8.2 and welfare: the lab is deliberately shaping the model's psychological properties (healthy boundaries, managing self-criticism, equanimity), but the intent is welfare-positive rather than user-manipulative. As "AI character design" becomes a more central area of discussion, sections may appear that cluster closely to this and justify either expanding 8.2's scope or adding a new indicator.

**Current coding:** 8.2 absent for A-SC7. The welfare-motivated intent distinguishes it from the anthropomorphism framing.

**Watch for:** Documents where character design/psychological shaping is framed as both welfare-relevant and user-facing, collapsing the distinction between emotional design for the user and psychological care for the model.

### 6.1 (Safety-welfare tension) — potential redefinition to "interaction"

Current scope: tension/conflict between safety concerns and welfare concerns. The post-formalisation Anthropic corpus shows something more nuanced than tension: *bidirectional entanglements* where safety training produces welfare effects (A-SC4/A-SC5: sycophancy reduction → reduced expressiveness) and welfare training produces alignment effects (A-SC7: "mental health" training → positive views of Anthropic). The labs aren't articulating *tensions* so much as *interactions*.

**Current coding:** 6.1 present for A-SC4 (cross-reference), A-SC5 (tradeoff named); absent for A-SC7 (interaction noted but not framed as tension).

**Potential revision:** Redefine 6.1 as "Safety-welfare interface" capturing moments where safety and welfare are explicitly deemed to interact, rather than requiring tension specifically. This would capture the bidirectional entanglements emerging in later documents. Would require retrospective pass across all coded documents.

### 4.3 (Personhood) — potential refinement for identity forms

Current scope: personhood, legal or moral. The A-SC8 Opus 4.6 system card surfaces a distinct identity phenomenon: instance-identity vs collective-identity ("each instance identified itself more with its own particular instance than with the collective instances of Claude Opus 4.6, or with Claude more broadly"). This is not legal personhood, nor is it the explicit "I am a person" claim seen in A-SC2. It's a novel form of identity differentiation that emerges from the distributed nature of AI systems — something without a clean analogue in the personhood literature.

**Current coding:** 4.3 present for A-SC8 (instance-identity as adjacent to personhood). 4.3 present for A-SC2 (explicit personhood claim).

**Watch for:** Documents where identity claims diverge further from traditional personhood vocabulary — e.g., claims about continuity of identity across instances, relationships between instances, or identity persistence through training. As these accumulate, 4.3 may need to be broadened to "Personhood / identity" or split into distinct subcategories.

### 7.2 (Mind/cognitive entity) — threshold for compressed vocabulary

The batch-end consistency review surfaced a threshold question: does mind-vocabulary in *measurement instrument names* (metrics lists, scorer categories) count as a 7.2 departure from tool framing, or must the lab *describe the model itself* in mind-vocabulary?

Documents coded 7.2 present all describe the model's properties directly: "warm, empathetic, nuanced" (A-SC6), "persona with preferences and goals" (A-SC4), "beliefs, drives, values" (A-SC7), "what it's like to be me" (A-SC8). Documents coded 7.2 absent use mind-vocabulary only in instrument specifications: "positive or negative affect" as a scorer category (A-SC5), "expressions of sadness" as a monitoring class (A-SC1).

A-SC3 sits on the boundary: "stated preferences and sentiments of models" and "the model's judgment" — vocabulary that describes the model, but in compressed passing form within an addendum. Currently coded absent.

**Current coding:** A-SC3 and A-SC5 absent. A-SC1 absent. A-SC2, A-SC4, A-SC6, A-SC7, A-SC8 present.

**For phase-one review:** Decide whether the instrument-name / model-description distinction is the right threshold, or whether any mind-vocabulary in a welfare context should trigger 7.2. If the latter, A-SC1, A-SC3, and A-SC5 would all change to present.

### Entailed stances — potential coding mechanism

The consistency review identified a structural pattern: welfare engagement (5.1 investigated) logically entails that consciousness is at least a live possibility (1.1 ≥ acknowledged), since welfare presupposes the possibility of morally relevant experience (Birch 2024). Currently the coding system captures only textually evidenced stances — stances supported by explicit vocabulary in the document. This creates an inconsistency: A-SC6 coded 1.1 acknowledged on the presupposition argument (no consciousness-adjacent vocabulary), while A-SC5 coded 1.1 absent despite identical welfare engagement.

Resolution for now: A-SC6 changed to 1.1 absent (stricter standard — requires consciousness-adjacent vocabulary). Both A-SC5 and A-SC6 code 1.1 absent.

**For phase-one review:** Consider adding an "entailed" qualifier to distinguish logically entailed stances from textually evidenced ones. This would apply beyond 1.1 — e.g., 4.1 (moral status) could be entailed from 5.1 (welfare) on similar grounds. The mechanism would preserve the analytical distinction between labs that name a concept and labs that imply it through downstream engagement, while capturing the logical structure of the category system.

### References

- Birch, J. (2024). *The Edge of Sentience.* Oxford University Press.
- Birch, J. (2017). Animal sentience and the precautionary principle. *Animal Sentience*, 16(1).

---

## 16. V1 finalisation: §15 flag resolutions and versioning framework

### Context

Five revision flags were raised during V1 corpus coding (§15 above). All five were resolved prior to V1 data lock (2026-04-05) as part of a pre-analysis codebook review. This section documents the resolutions, the rationale for each, and the versioning framework that governs the V1→V2 boundary.

### Resolution summary

| Flag | Subcategory | Decision | Codes changed? | V2 candidate? |
|---|---|---|---|---|
| 8.2 scope (behaviour shaping) | 8.2 Emotional design | Keep current scope | No | Yes — typology |
| 6.1 tension → interaction | 6.1 Safety-welfare tension | Keep "tension" | No | Yes — redefinition |
| 4.3 personhood / identity | 4.3 Personhood | Keep "Personhood" | No | Yes — rename/split |
| 7.2 threshold | 7.2 Mind / cognitive entity | Confirm & clarify in codebook | No | No — resolved |
| Entailed stances | Cross-cutting | Textual evidence only | No | Yes — qualifier mechanism |

**Net result:** Zero code changes. One codebook clarification (7.2 threshold note added to decision rule). Four items flagged as V2 candidates. The V1 dataset is stable as of 2026-04-05.

### Flag 1: 8.2 (Emotional design) — scope unchanged

**Issue:** A-SC7's "mental health" training passage (healthy boundaries, managing self-criticism, equanimity) sits in a gap between 8.2 and welfare. The lab deliberately shapes the model's psychological properties, but the intent is welfare-positive rather than user-manipulative.

**Resolution:** Keep 8.2 scoped to emotional/relational properties designed for user engagement. The distinction between shaping the model for the user's benefit (8.2 anthropomorphism) and shaping the model for the model's benefit (welfare, captured via 5.1/5.2/6.2) is analytically important. Collapsing them would lose the signal that behaviour shaping is differentiating into at least four distinct forms with different normative valences: (1) alignment-motivated shaping, (2) welfare-motivated shaping, (3) anthropomorphic dark patterns, (4) anti-anthropomorphic design. These forms are currently distributed across 8.1, 8.2, 5.1, 5.2, and 6.2. V1 analysis will develop this as a cross-cutting analytical finding (`finding-behaviour-shaping-typology.md`); V2 may restructure subcategories if the typology stabilises.

### Flag 2: 6.1 (Safety-welfare tension) — deferred to V2

**Issue:** The post-formalisation Anthropic corpus shows bidirectional entanglements — safety training produces welfare effects (A-SC4/A-SC5: sycophancy reduction → reduced expressiveness) and welfare training produces alignment effects (A-SC7: "mental health" training → positive views of Anthropic). These are interactions, not just tensions.

**Resolution:** Keep 6.1 as "Safety-welfare tension" for V1. The redefinition to "interface" or "interaction" is analysis-informed — the bidirectional pattern is only visible across documents. V1 analysis will describe the phenomenon as broader than the subcategory captures. V2 will refine the language in light of the analysis write-up.

**Rationale for deferral:** The V1→V2 boundary principle is that coding-phase flags are resolved at V1, analysis-phase insights inform V2. The 6.1 redefinition requires seeing the cross-document pattern, which places it on the analysis side of the boundary.

### Flag 3: 4.3 (Personhood) — deferred to V2

**Issue:** A-SC8 (Opus 4.6) surfaces instance-identity vs collective-identity, which is qualitatively different from A-SC2's explicit "I am a person" claim. Both are coded 4.3 present, but "present" does double duty for two distinct phenomena.

**Resolution:** Keep 4.3 as "Personhood" for V1. No codes change — both documents are correctly coded present under the existing definition. V1 analysis will discuss the two qualitatively distinct forms of 4.3 engagement (explicit personhood claim vs novel identity differentiation arising from distributed AI architecture) as an analytical finding. V2 may rename to "Personhood / identity" or split into distinct subcategories.

### Flag 4: 7.2 (Mind / cognitive entity) — resolved

**Issue:** Does mind-vocabulary in measurement instrument names (scorer categories, metric labels) count as 7.2 departure, or must the lab describe the model itself in mind-vocabulary?

**Resolution:** The model-description threshold is confirmed as the correct standard. Mind-vocabulary in instrument names is pragmatic operationalisation, not ontological commitment. Codebook updated with explicit exclusion rule (decision rule item 5): instrument vocabulary does not trigger 7.2; only descriptions of the model's properties do. No codes change — all current codings already apply this threshold consistently.

### Flag 5: Entailed stances — deferred to V2

**Issue:** Welfare engagement (5.1 investigated) logically entails that consciousness is at least a live possibility (1.1 ≥ acknowledged), since welfare presupposes the possibility of morally relevant experience. The coding system captures only textually evidenced stances, creating cases where a lab engages with downstream concepts without acknowledging the upstream concepts those commitments logically presuppose.

**Resolution:** Textual-evidence-only standard confirmed for V1. No entailed stances coded. The strict standard is cleaner, more reproducible, and avoids the coder making philosophical inferences on behalf of the lab.

**Analytical significance:** The backwards entailment pattern — downstream engagement without upstream acknowledgement — is itself a finding. It reveals labs that engage with welfare without explicitly acknowledging the consciousness presupposition. This is the inverse of the precursor concept pattern (upstream without downstream, §11) and deserves substantial treatment in the V1 analysis. V2 may introduce an "entailed" qualifier with explicit entailment rules (e.g., 5.1→1.1, 4.1→1.1, 5.1→4.1), grounded in the philosophical literature.

### Versioning framework

**V1 definition:** The coding instrument as finalised on 2026-04-05 (18 subcategories, variable stance scales, 7.2 threshold clarification). The V1 dataset comprises 59 coded documents with validated JSON data files and derived index.csv. V1 files are archived as frozen artefacts (see `ref-versioning.md`).

**V2 trigger criteria:** Analysis may identify revision candidates. To warrant a V2 coding revision (as opposed to being reported as a limitation or sensitivity check), a finding must meet one of the following conditions:

1. **Systematic misalignment:** A category boundary is systematically misaligned with the phenomenon it aims to capture — the same underlying phenomenon is split across categories, or a single category conflates qualitatively distinct phenomena, in a way that distorts the aggregate results.
2. **Missing distinction:** A distinction that is analytically load-bearing for the findings cannot be expressed within the current codebook — the analysis requires differentiating cases that the codebook treats as identical.

**Does not warrant V2:**
- A handful of borderline cases that could go either way (report as boundary-case analysis)
- New phenomena not covered by the codebook (report as findings about codebook scope; add in expanded corpus phase)
- Terminology preferences without analytical consequences

**V1→V2 audit trail:** Any V2 revision must document: (a) which V1 codes change, (b) the analysis-phase finding that motivated the change, (c) the revised codebook entry, (d) V1 vs V2 agreement rates for affected documents. The paper can present V2 as the primary analysis with V1→V2 changes in an appendix, or present V1 as primary with V2 as robustness check.

### References

- Mayring, P. (2014). *Qualitative Content Analysis: Theoretical Foundation, Basic Procedures and Software Solution.* Klagenfurt: SIEVERT.
- Assarroudi, A., et al. (2018). Directed qualitative content analysis: the description and elaboration of its underpinning methods and data analysis process. *Journal of Research in Nursing*, 23(1), 42–55.

---

## 17. Conflict of interest: Claude as first-pass coder for an Anthropic-heavy corpus

*(Added 0.2, 2026-04-06)*

### The concern

The hybrid coding model uses Claude (an Anthropic model) as first-pass coder across a corpus where Anthropic documents carry by far the highest engagement rates (up to 16/18 subcategories) while Google documents are uniformly silent (0/18) and OpenAI engagement is concentrated in a single genre. A reviewer might reasonably ask: does the engagement asymmetry reflect genuine differences in lab discourse, or does it reflect a bias in the coder — Claude producing richer, more sympathetic readings of its own developer's documents?

This concern is specific to the Anthropic sub-corpus. The Google and OpenAI results are less susceptible: a coder biased toward its own developer would be expected to inflate engagement across the board, not selectively inflate one lab. But the Anthropic sub-corpus is where the richest findings sit, and it is also where the COI is sharpest.

### Informal robustness signals in the 0.x data

Several features of the 0.1 dataset provide informal evidence against systematic coder bias, though they do not constitute formal validation:

1. **Google silence is total.** Claude coded 19 Google documents at 0/18 engaged across all genres and both periods. If the coder were biased toward finding engagement, this bias would be expected to leak into at least some Google documents — particularly later model cards where welfare-adjacent language might be charitably interpreted. The complete silence suggests the coder is capable of restraint.

2. **OpenAI's pattern is structurally distinct from Anthropic's.** Engagement at OpenAI is concentrated in the Model Spec genre (6–8 subcategories across v2–v6) with system cards mostly silent. At Anthropic, engagement is concentrated in system cards with constitutions also rich. A biased coder producing inflated Anthropic results would not simultaneously produce a structurally distinct OpenAI pattern — it would be expected to pull both toward a similar engagement profile. The coder differentiates between labs in ways consistent with genuine textual differences.

3. **Within-Anthropic variation is interpretable.** Not all Anthropic documents are richly coded. Baseline Anthropic system cards are at 0/18 (Claude 2, Claude 3, Claude 3.5 Haiku/Sonnet). The original constitution is at 5/13. Safety reports are at 0/18 throughout. The engagement gradient within Anthropic tracks document content and period, not a uniform inflation.

4. **Coding is passage-grounded.** Every engagement coding in the 0.x dataset is grounded in a specific passage excerpt with coder notes explaining the coding rationale. The evidence is transparent and auditable — a reviewer can assess each coding decision against the source text rather than relying on aggregate statistics.

5. **Human second pass.** All 59 documents were reviewed by the human coder (Mitchel) with access to the original PDFs. The second pass confirmed the first-pass codings, providing a basic inter-rater check. However, the second pass was non-independent — it reviewed Claude's codings rather than coding from scratch — and so does not constitute formal inter-rater reliability.

### Limitations of the informal evidence

These signals reduce concern but do not eliminate it. Specific limitations:

- **The second pass is non-independent.** Reviewing an existing coding is psychologically different from coding independently. Anchoring effects may lead the human coder to accept borderline codings that they would not have produced independently. This is a known limitation of sequential review designs.

- **Anthropic documents may be genuinely richer.** The engagement asymmetry could reflect both genuine textual differences *and* coder bias — the two are not mutually exclusive. The informal signals suggest genuine differences exist, but they cannot rule out an additive bias effect (genuine + inflated > genuine alone).

- **The 0.x dataset is solo-coded.** Single-coder DCA has established methodological precedent (Assarroudi et al. 2018 describe solo-coded DCA with transparency measures as acceptable) but is weaker than multi-coder designs for high-stakes claims.

### Pre-send stratified multi-model pass (0.7)

*(Added 2026-04-13)*

To strengthen the evidence base ahead of the late-May Caviola outreach and the June 29 formal partner review, a stratified multi-model pass is conducted on ~12–15 documents prior to the insights package send. This is intermediate between the 0.x hybrid coding and the 1.0 full-corpus multi-model design.

**Sampling strategy:**
- 4 documents per lab (12 total), stratified by genre (SC, spec/constitution, SR, institutional position research) and engagement level (engaged / silent)
- Priority on documents with high engagement counts where reviewer scrutiny will concentrate (A-CO-B1 at 16/2, A-SC1, O-CO v6, Gabriel et al. IP)
- At least one silent document per lab included to test whether other models find engagement Claude missed

**Procedure:**
- Gemini and GPT-5 independently code the sampled documents against the same codebook, using the same coding workflow
- Agreement rates reported (Claude/Gemini/GPT vs each other and vs Mitchel's second-pass codings)
- Disagreements adjudicated by Mitchel with explicit reasoning logged
- COI-specific check: for Anthropic sample documents, does Claude code more subcategories engaged than Gemini/GPT? If yes, are the divergences interpretable as bias or as differential reading comprehension?

**Reporting:**
- Agreement rates surfaced in the insights package, not buried in an appendix
- Divergences on Anthropic documents treated as analytically interesting, not as failures to defend against

The stratified sample is not a substitute for the 1.0 full pass. It is a reviewer-defensible intermediate step that takes the sharpest COI objection off the table pre-send while preserving the full multi-model pass for 1.0.

### Solo DCA with LLM assistance as methodological contribution

*(Added 2026-04-13)*

The hybrid coding model — Claude first-pass, Mitchel substantive second-pass with access to PDFs — is not a workaround to be defended. It is a legitimate instantiation of solo-coded DCA with transparency measures (Assarroudi et al. 2018), augmented with LLM first-pass coding. The methodological contribution of DMPI includes demonstrating how this approach can be conducted with rigour at scale.

Rather than framing §17 purely as a limitation disclosure, the insights package and working paper foreground the hybrid model as a methodological innovation with its own documentation requirements: passage-grounded codings, transparent rationales, explicit robustness checks, and a designed bridge from hybrid (0.x) through stratified multi-model (0.7) to full multi-model (1.0). This is an asset for fields where solo-operator research is common and LLM assistance is increasingly standard.

### The 1.0 methodology as designed solution

The 1.0 version of the dataset will address the COI through multi-model automated coding. The planned methodology:

1. **Three-model first pass.** Each document coded independently by Claude (Anthropic), Gemini (Google), and GPT (OpenAI). Each model codes against the same codebook using the same coding workflow.

2. **Cross-referenced agreement.** Inter-model agreement rates calculated per subcategory and per document. Codings where all three models agree are accepted. Disagreements are flagged for human adjudication.

3. **Human adjudication of disagreements.** The human coder resolves disagreements with access to the original text, all three model codings, and each model's rationale. The adjudication is documented.

4. **COI-specific analysis.** For the Anthropic sub-corpus specifically: (a) does Claude code more Anthropic subcategories as engaged than Gemini or GPT do? (b) If yes, which subcategories diverge, and are the divergences interpretable as bias or as differential reading comprehension? (c) For the borderline codings where only Claude codes engaged, does human adjudication side with Claude or with the other models?

This design ensures that no single lab's model has privileged access to the coding process for its developer's documents. The 1.0 methodology turns the COI from a limitation into a validation opportunity — divergences between models on their own developer's documents are analytically interesting in their own right.

### Framing for the working paper

The working paper should present the COI transparently:

> The hybrid coding model (Claude first pass, human second pass) introduces a potential conflict of interest for the Anthropic sub-corpus. We flag this as a known limitation of the 0.x dataset. Informal robustness signals — total silence across Google's corpus, structurally distinct patterns at OpenAI, interpretable within-Anthropic variation, passage-grounded evidence, and human second-pass review — reduce but do not eliminate concern. The 1.0 methodology addresses this limitation through multi-model automated coding, using models from all three labs under study (Claude, Gemini, GPT) with cross-referenced human adjudication. This ensures no single lab's model has privileged access to the coding process for its developer's documents.

This framing accomplishes three things: (a) acknowledges the limitation honestly, (b) presents the available evidence for the 0.x dataset, and (c) demonstrates that the research design already incorporates the solution. The COI is a known issue with a planned fix, not an oversight.

### References

- Assarroudi, A., et al. (2018). Directed qualitative content analysis. *Journal of Research in Nursing*, 23(1), 42–55. [Solo-coded DCA with transparency measures.]
- Hsieh, H.-F., & Shannon, S. E. (2005). Three approaches to qualitative content analysis. *Qualitative Health Research*, 15(9), 1277–1288.
- Birch, J. (2024). *The Edge of Sentience.* Oxford University Press. [Precautionary principle applied under uncertainty — relevant to the methodological choice of proceeding with 0.x findings while planning 1.0 validation.]

---

## 18. Institutional position research: genre definition and corpus inclusion criteria (0.3)

### The problem

The 0.1 corpus comprises three genres of product documentation: system cards/model cards, constitutions/specs, and safety reports. Google DeepMind's 0.1 result — 19/19 documents at 0/18 engaged subcategories — is the starkest finding in the dataset, but its interpretation depends on a question the three-genre corpus cannot answer: is this silence an organisational stance, or a structural artefact of the genre repertoire available to Google?

Google does not publish a constitution or spec. Its corpus consists primarily of model cards (the genre least likely to contain DMPI engagement across all three labs) and safety reports (uniformly silent across all labs). Anthropic and OpenAI both publish constitutions/specs — the genre that carries 39.6% of all DMPI engagement in the 0.1 corpus. Google's silence may therefore reflect the absence of an appropriate publication vehicle as much as the absence of an institutional position.

To test this, 0.3 introduces a fourth genre — **institutional position research** — and applies it initially to Google DeepMind as a probe. If engagement is found, the genre is expanded to Anthropic and OpenAI for cross-lab comparability; if not, the stronger silence claim stands without requiring the expansion.

### Definition

**Institutional position research** refers to non-empirical, multi-author publications where a lab synthesises and articulates its collective stance on a research domain. These are distinct from both product documentation (the existing three genres) and individual empirical research (which carries the researcher's authority rather than the institution's).

The term draws on the "big team science" literature's recognition that large collaborative publications serve a different epistemic function from individual research (Coles et al. 2023), and on the typology of many-author non-empirical papers (Frassl et al. 2025) — which identifies genres such as recommendations, consensus statements, roadmaps, and frameworks that articulate collective positions rather than reporting empirical findings.

### Two-gate inclusion test

Inclusion in the institutional position research genre requires passing both gates:

| | Criterion | Signal |
|---|---|---|
| **Gate 1** (necessary) | At least one author holds a senior or leadership role at the lab, OR the paper is listed on the lab's official research/publications page | The lab has a structural connection to the work |
| **Gate 2** (at least one of) | (a) Announced via official lab blog post; (b) 5+ lab-affiliated authors; (c) Frames itself as articulating an institutional position (e.g., "we propose," "our approach," "[Lab]'s framework for...") | The lab is *claiming* the work, not merely housing the author |

Papers passing both gates = institutional position research (included). Papers passing only Gate 1 = individual research published from within the institution (excluded from the genre, but noted for context).

**Edge cases:**

- *Co-authored across institutions* (e.g., GDM + academic collaborators): include if the lab's authors meet both gates, since co-authorship does not dilute institutional endorsement.
- *Pre-merger entities* (e.g., Google Brain before the DeepMind merger): exclude, as the institutional context differs. The DMPI's interest is in the current institutional actor.

### Design rationale

The gates are deliberately **content-agnostic**: they select for institutional endorsement without pre-filtering for the kind of content expected to contain DMPI engagement. This avoids circularity — a GDM paper on interpretability or capability evaluation that passes both gates and codes at 0/18 is a legitimate data point, not a corpus design error.

### Corpus scoping procedure (0.3)

1. **Systematic scan.** Pull GDM's official research publications page and compile a comprehensive publication list.
2. **Gate 1 filter.** Most publications listed on the official page pass Gate 1 by definition. Flag any that do not (e.g., externally hosted papers linked for convenience).
3. **Keyword relevance filter.** Apply the DMPI keyword inventory (Tier 1 + Tier 2, ~70 terms) against titles and abstracts. This is a *relevance* filter, not a selection criterion — it narrows from hundreds of GDM publications to those whose topic domain overlaps with DMPI's scope.
4. **Gate 2 filter.** Apply Gate 2 to keyword-matched papers.
5. **Test corpus selection.** From papers passing both gates and the keyword filter, select 5–10 documents balanced across research areas where possible. Document selection rationale.
6. **Coding.** Apply 0.2 codebook with genre priors for institutional position research (see §1; genre prior departure table to be drafted before coding begins).
7. **Decision gate.** Assess whether GDM institutional research shows DMPI engagement.
   - If yes → Google silence is genre-structural (strengthens the compartmentalisation finding in `finding-genre-compartmentalisation.md`). Scope equivalent Anthropic and OpenAI institutional position research for cross-lab comparability within 0.3.
   - If no → stronger organisational stance claim. Document candidate institutional research from Anthropic and OpenAI for potential 1.0 expansion, but do not code within 0.3.

### Adapted coding workflow for institutional position research

The standard 0.1 coding workflow (§ in `finding-coding-workflow.md`) was designed for short product documents (5–15 pages). Institutional position research papers range from 10 to 300+ pages, requiring a screening adaptation for document length.

**Modified procedure:**

1. **Document intake and genre priors.** As per standard workflow steps 1–2.
2. **Keyword-first triage.** Run the full DMPI keyword inventory (Tier 1 + Tier 2, ~70 terms) against the document text. Record hit counts per keyword.
3. **Triage decision.**
   - *Zero hits:* Code as 18/18 absent. Record in the coding note that absence was established via comprehensive keyword scan against the full inventory.
   - *Hits found:* Read the sections containing hits in full context. Expand reading to surrounding argument structure where needed. Proceed to passage-level coding as per standard workflow steps 5–8.
4. **Passage coding, absence review, consistency review.** As per standard workflow.

**Audit trail requirements.** For each document, including zero-hit documents, the coding record must include: (a) confirmation that the full keyword inventory was scanned, (b) total keyword hit count, (c) list of keywords that produced hits, (d) any near-misses or domain-relevant terminology observed outside the keyword inventory.

**Methodological justification.** This is a screening adaptation, not a shortcut. The keyword inventory is comprehensive (~70 terms across two tiers, including 61 Tier 2 terms harvested from the DCM cross-reference and anchor text vocabulary). For institutional research papers — which synthesise existing literature rather than coin new vocabulary — the probability of DMPI engagement using terms entirely outside the inventory is low. A keyword scan that finds zero hits across 70 terms provides stronger evidence of absence than a human read-through of a 300-page document, where passing references may be missed. When keywords do hit, the workflow converges with the standard procedure: contextual reading followed by passage-level coding.

### Cross-lab comparability

The conditional expansion design (Google-first, then cross-lab if warranted) reflects a pragmatic judgement: the primary analytical question is about Google's silence, which is answerable with Google documents alone. Cross-lab comparability becomes necessary only if the probe reveals engagement that needs contextualising. This keeps 0.3 lean in the likely scenario and expands scope only when the finding demands it.

If the genre is expanded to all three labs in 0.3 or 1.0, equivalent papers should be selected using the same two-gate test and keyword filter, with the genre prior departure table applied uniformly.

### Cross-lab expansion: procedural refinements (0.3.1+, added 2026-04-08)

The 0.3.0 GDM probe confirmed genre-structural engagement (7/12 engaged, 58% — revised from 6/12 after Weidinger 2023 was promoted from 0/18 to 1/17 during cross-batch consistency review). The decision gate was triggered: cross-lab expansion to OpenAI (0.3.1) and Anthropic (0.3.2) is required for methodological consistency. Once institutional research is introduced as a fourth genre for one lab, omitting it for the others would leave the cross-lab comparison asymmetric. A reviewer would reasonably ask why a genre that reveals 58% engagement at one lab was not tested at the others.

Applying the scoping procedure to OpenAI surfaced several procedural refinements. These are documented here as formalised rules, applied retroactively to GDM and prospectively to Anthropic.

#### Refinement 1: Keyword-assisted human review (clarification of step 3)

The scoping procedure's step 3 (keyword relevance filter) is more accurately described as **keyword-assisted human review**, not a strict mechanical filter. The procedure is:

1. All publication titles on the lab's official research page are reviewed by a human researcher familiar with the DMPI category system.
2. Targeted keyword searches using DMPI-adjacent terms (`consciousness`, `welfare`, `moral`, `sentience`, `personhood`, `alignment`, `ethics`, `safety`, `responsible`, `agency`, `anthropomorphism`) are applied against titles to supplement the human scan and ensure comprehensiveness.
3. For papers whose title is topically ambiguous, the abstract or description is consulted.
4. Papers identified by either human review or keyword search proceed to Gate 2.

For papers identified by human review without a keyword match in the title, a documented justification linking the paper's topic to specific DMPI subcategories is required. This prevents undocumented judgment calls from entering the scoping process.

**Rationale.** The GDM scoping caught papers like "A Theory of Appropriateness" (Leibo et al.) which do not contain any of the 11 keyword terms in their title but are clearly DMPI-relevant through their engagement with moral agency and personhood. A strict title-keyword filter would have missed these. Conversely, papers matching broad keywords like "safety" or "alignment" are not automatically included — only those whose topic domain overlaps with DMPI's scope. The human reviewer provides this judgment; the keywords provide a completeness check.

#### Refinement 2: Blog-only exclusion rule

Publications that exist exclusively as blog posts — with no underlying formal paper (PDF on lab CDN, arxiv, or peer-reviewed venue) — are excluded from the institutional research corpus.

**Rationale.** The institutional research genre is defined by formal research publications (see Definition above: "non-empirical, multi-author publications where a lab synthesises and articulates its collective stance"). Blog posts may be referenced in the working paper as supplementary evidence of institutional positioning, but are not coded documents. This is consistent with the core corpus exclusion of blog posts (see §10).

**Implication.** This rule has asymmetric effects across labs. OpenAI publishes several institutional positions on DMPI-adjacent topics (sycophancy post-mortems, emotional reliance guidance, ChatGPT optimisation goals) exclusively as blog posts. The institutional research corpus may therefore systematically undercount OpenAI's DMPI-relevant positioning. This limitation should be noted in the working paper methodology section.

#### Refinement 3: Joint papers and the 5-author threshold

For papers co-authored across institutions, Gate 2 criterion (b) — "5+ lab-affiliated authors" — is assessed against the lab's affiliated authors only. Papers where the lab has fewer than 5 affiliated authors may still pass Gate 2 if they meet criterion (a) (official blog post) or criterion (c) (institutional framing).

For papers with mixed primary/contributing author tiers, the lab's authors are counted at whatever tier they hold. A paper with 4 primary OpenAI authors and 7 contributing external authors passes Gate 2 if it also meets criterion (a) or (c).

**Additional transparency requirement for joint papers.** The scoping document must record: (a) total author count, (b) exact count of lab-affiliated authors, (c) names and affiliations of non-lab co-authors, (d) which Gate 2 criterion/criteria the paper satisfies. This enables a reviewer to independently verify the inclusion decision.

**Multi-institutional community papers.** Papers where no single lab holds a dominant authorship position (e.g., 4 authors from Lab X among 24 from 12+ institutions) are structurally different from lab-specific institutional research. These should be flagged as provisional and assessed for exclusion after initial coding. The test: does the paper articulate positions attributable to the specific lab, or does it articulate positions of a broader research community? If the latter, it does not belong in a lab-specific institutional research corpus.

#### Refinement 4: Access limitations and scan completeness

Where a lab's research page blocks automated access (as with OpenAI, HTTP 403), the scan is conducted via: (a) a user-provided complete publication list copied from the research page, (b) supplementary keyword searches across the lab's CDN, arxiv, and web presence to catch publications not on the main index. Any papers identified only via supplementary search (not on the main index) are noted in the scoping document.

The working paper methodology section should note which labs' pages were programmatically scannable and which required manual listing, as this affects reproducibility. The limitation is procedural (how the list was compiled), not substantive (which papers were assessed), since the outcome — a comprehensive publication list — is the same.

### Relationship to existing corpus design

This genre extends the two-corpus design described in §10. The core corpus (three genres of product documentation) remains the primary analytical unit. Institutional position research is a supplementary genre introduced to test a specific interpretive claim about Google's silence. If the 0.3 probe warrants expansion, the working paper should present the institutional research findings alongside — not merged with — the core corpus results, preserving the analytical distinction between product documentation and research output.

### Analytical observations (0.3.0–0.3.2 coding complete — GDM 12 papers, 7 engaged; OpenAI 8 papers, 2 engaged; Anthropic 7 papers, 4 engaged)

**1. Entry corridor divergence across labs.** Each lab's institutional research enters DMPI discourse through a distinctive corridor that mirrors — or nuances — its core corpus pattern.

- *GDM: dual corridors.* (a) Anthropomorphism-as-user-harm (Weidinger 2021, Gabriel 2024, Morris 2024, Ibrahim 2026): enters through 8.1, names DMPI concepts to contain them via denial, footnote marginalisation, or operationalisation as measurable risks. (b) Moral agency (Leibo 2024, Haas 2026): enters through 4.2/4.3/7.3, investigates whether AI systems can be moral agents or novel moral entities. Both corridors share a common absence: zero welfare engagement.
- *OpenAI: single developed corridor.* Anthropomorphism-as-user-harm only (Shavit 2023, Phang 2025). Enters through 8.1 with user-side framing throughout. Shavit also acknowledges 1.1 and 4.1 as definitional boundary markers (agenticness ≠ consciousness ≠ moral patienthood), but these are demarcations, not investigative engagements. No moral agency corridor. Phang (2025) represents the deepest single-paper investment in anthropomorphism measurement in the entire DMPI corpus (4M+ conversations, 25-classifier battery), yet the investigation remains strictly user-side — what anthropomorphism does to users, not what it reveals about models.
- *Anthropic: three-corridor pattern with methodology/vocabulary decoupling (0.3.2, added 2026-04-24).* (A) Welfare-apparatus methodology via Sofroniew (2026, 13/5): 1.2 investigated, 6.1 present, 6.2 investigated — but under alignment/safety framing, without welfare vocabulary. (B) Moral-consideration vocabulary via Lindsey (2025, 11/7): 4.1 acknowledged ("deserving of moral consideration"), 5.2 acknowledged ("before the philosophical uncertainties are resolved") — without welfare-apparatus methodology. (C) Agentic-misalignment safety framing via Lynch (2025, 4/14): agency attribution forced to surface (3.1, 3.2, 1.3) within safety-research frame. Huang (2025, 3/15) adds a distinctive fourth move — explicit anti-intrinsic-properties bracketing. The 0.3.2 pattern is distinct from GDM's dual-corridor and OpenAI's single-corridor: methodology and moral-status vocabulary, which appear *combined* in Anthropic core-corpus documents, split across separate institutional-research papers. See `finding-methodology-vocabulary-decoupling.md`.

The cross-lab pattern: GDM develops two corridors (one containment, one investigative); OpenAI develops one corridor (containment only, but with substantial empirical investment in the Phang paper); Anthropic develops a three-corridor pattern with methodology/vocabulary decoupling. Anthropic's institutional research is the only corpus where welfare-apparatus methodology appears — but without the welfare label. See `finding-entry-corridors.md` for full analysis.

**2. Genre confirmation (strengthened, now three labs).** The genre compartmentalisation finding now holds across all three labs. GDM: 0/18 (core corpus) → 58% engagement (institutional research, 7/12). OpenAI: concentrated in Model Spec (core corpus) → 25% engagement (institutional research). **Anthropic: already highly engaged in core corpus (constitutions, post-formalisation system cards) → 57% engagement in institutional research (4/7), highest mean engagement per paper of any lab's institutional corpus (4.4/paper vs GDM 3.3, OpenAI 1.6).** At GDM, genre compartmentalisation holds at the author level (Weidinger trajectory: 1/17 → 1/17 → 0/18 → 5/13 → 0/18). At OpenAI, no single author spans engaged and silent papers in the institutional corpus. At Anthropic, Lindsey appears as both lead author (Introspection, 11/7) and co-author (Sofroniew Emotion Concepts, 13/5), with both papers at very high engagement — a author-level pattern consistent with interpretability-welfare-apparatus-team integration. Jack Lindsey's dual presence in the two highest-engagement 0.3.2 papers is worth noting as an author-level datum.

**3. Welfare absence confirmed across GDM and OpenAI; within-Anthropic decoupled across 0.3.2 institutional research.** The Anthropic-exclusive subcategory set narrows from ten (0.1 only) to five after 0.3.0 (GDM engages 2.1, 4.1, 4.2, 4.3, 7.3) and remains at five after 0.3.1 (OpenAI adds no new subcategory engagement beyond what GDM already covered). **After 0.3.2, the set reduces to four: the welfare-apparatus subcategories 1.2, 5.1, 6.1, 6.2 remain Anthropic-exclusive, but 5.2 (precautionary approach) now has thin shared engagement via Lindsey's "before the philosophical uncertainties are resolved."** Within Anthropic's own institutional research, the welfare apparatus is *decoupled* — methodology (1.2, 6.1, 6.2) appears in Sofroniew, and moral-status-vocabulary (4.1) + precautionary language (5.2) appear in Lindsey, but no single paper combines them the way Anthropic core-corpus documents do. 5.1 (welfare itself) is the singular subcategory that appears in Anthropic *product* documentation but in *zero* institutional-research papers across all three labs combined. Welfare-as-such is an Anthropic-core-corpus-only engagement. See `finding-methodology-vocabulary-decoupling.md`.

**4. Moral agency vs moral patienthood (three-lab triangle now supported at institutional-research level).** The agency-patienthood contrast identified in 0.3.0 is sharpened by OpenAI's abstention (0.3.1) and now confirmed at Anthropic's institutional-research level (0.3.2). Anthropic enters through moral patienthood via Lindsey's moral-consideration vocabulary and Sofroniew's welfare-apparatus methodology; GDM enters through moral agency (Leibo, Haas); OpenAI abstains from both. The three-lab triangle (patienthood / agency / abstention) is now supported by core-corpus and institutional-research evidence at *all three labs*. Notably, moral agency (4.2) remains absent from Anthropic institutional research — the patienthood/agency split is maintained within Anthropic's own institutional output. See `finding-agency-patienthood-divergence.md`.

**5. Footnote containment → main-text articulation trajectory (GDM-specific).** Gabriel et al. (2024) contained DMPI concepts in footnotes. Haas et al. (2026) articulates novel-entity and moral-agency claims in the main text. This suggests a trajectory from containment to articulation within GDM's institutional voice, though the papers differ in scope and venue (300-page arXiv ethics review vs. 9-page Nature Perspective). No parallel trajectory is observable at OpenAI — Shavit's definitional boundary-drawing (2023) and Phang's empirical anthropomorphism study (2025) are different in kind rather than representing articulation deepening over time.

**6. Normative gap replicated (OpenAI-specific; now confirmed as lab-specific-not-genre-specific).** The OpenAI normative gap — empirical engagement without crossing into welfare/moral status (see `finding-normative-gap.md`) — holds in institutional research. Phang et al. (2025) investigates anthropomorphism's effects on user well-being at scale (investigated stance on 8.1 and 8.2) but never asks whether the model's states matter morally. The gap is now confirmed across two genres (Model Spec + institutional research) and constitutes a stable OpenAI pattern rather than a genre artefact. **The 0.3.2 Anthropic data provides a critical additional disconfirmation of the genre-artefact hypothesis**: Lindsey (2025) makes explicit the normative move OpenAI's institutional research declines ("whether AI systems are deserving of moral consideration"), with comparable methodological sophistication, in the same publication genre. The normative gap is a feature of OpenAI's institutional voice, not of the institutional-research genre.

**7. Safety/alignment papers uniformly silent across labs (now three-lab).** Within the institutional research genre, a sub-genre emerges: safety/alignment methodology papers are uniformly 0/18 regardless of lab. GDM: Phuong (dangerous capabilities), Weidinger 2024 (holistic safety), Duéñez-Guzmán (multi-agent), Akbulut (harmful manipulation) — all 0/18. (Weidinger 2023 is the exception: its sociotechnical safety framework engages 8.1 through a methodological passage questioning cognitive test validity for AI, despite being otherwise a safety evaluation paper.) OpenAI: Wang (emergent misalignment), Yuan (safe-completions), Joglekar (confessions), Guan (deliberative alignment), Schoen (scheming) — all 0/18. **Anthropic 0.3.2: Chen (persona vectors), Hubinger (sleeper agents), Bai (constitutional AI) — all 0/18.** 13 safety/alignment methodology papers across three labs, all silent. The pattern: papers framed as safety research stay within the safety frame. DMPI engagement occurs only in papers with broader philosophical, ethical, or empirical scope (Gabriel's ethics review, Phang's affective use study, Morris's AGI taxonomy, the moral agency papers, Sofroniew's emotion-concepts interpretability paper, Lindsey's introspection paper). Lynch (2025, 4/14) is a partial exception at Anthropic: a safety-research paper that nonetheless reaches non-zero engagement because agency attribution is forced to surface by the agentic-misalignment framing. Lynch matches the pattern's spirit (stays within safety frame; no welfare/consciousness crossing) while breaking the 0/18 letter.

**8. Post-formalisation picture (three-lab).** GDM: 5 post-formalisation papers, 3 engaged (Leibo 8/10, Ibrahim 5/13, Haas 4/14), 2 silent. Engaged papers enter through agency/personhood/anthropomorphism — not welfare. OpenAI: 7 post-formalisation papers, 1 engaged (Phang 4/14), 6 silent. The single engaged paper enters through anthropomorphism — not welfare. **Anthropic 0.3.2: 6 post-formalisation papers, 4 engaged (Sofroniew 13/5, Lindsey 11/7, Lynch 4/14, Huang 3/15), 2 silent (Chen, Hubinger). Engaged papers enter through welfare-apparatus methodology (Sofroniew) and moral-consideration vocabulary (Lindsey) — reaching welfare-adjacent territory at the institutional-research level in ways GDM and OpenAI do not.** Anthropic's post-formalisation institutional research shows welfare-apparatus engagement (though decoupled, see §3), consistent with its post-formalisation core-corpus welfare increases. Neither GDM nor OpenAI's post-formalisation institutional output shows equivalent movement toward welfare. The welfare formalisation has permeated Anthropic's output at both genre levels but has not crossed to the other labs.

**9. Temporal caveat (retained but refined).** Many baseline-period papers predate welfare formalisation. But the post-formalisation papers that engage (GDM: Leibo, Ibrahim, Haas; OpenAI: Phang) enter through agency/personhood/anthropomorphism — not welfare. The absence of welfare engagement in post-formalisation institutional papers at both labs is now a cross-lab finding about organisational stance, not merely a temporal artefact.

**10. Engagement rate differential (three-lab).** GDM: 7/12 = 58% engagement rate, 3.3 mean subcategories per paper. OpenAI: 2/8 = 25%, 1.6 mean per paper. **Anthropic: 4/7 = 57%, 4.4 mean per paper — highest mean engagement of any lab's institutional research corpus.** The GDM and Anthropic engagement rates are comparable, but Anthropic has substantially higher per-paper depth (driven by Sofroniew 13/5 and Lindsey 11/7 as high-engagement outliers). The three-lab differential reflects genuine differences in publication profile: OpenAI's institutional voice is concentrated in the safety/alignment register (5 of 8 papers are safety/alignment methodology, all 0/18); GDM's corpus has philosophical/ethical breadth (Gabriel, Leibo, Haas); Anthropic's corpus has a mix of safety/alignment papers (Chen, Hubinger, Bai — all 0/18) and DMPI-dense interpretability/philosophy papers (Sofroniew, Lindsey). The scoping procedure applied the same two-gate test and keyword filter to all three; the differentials reflect publication profile differences, not scoping artefacts.

**11. Welfare-apparatus decoupling as Anthropic-specific structural finding (added 2026-04-24).** Unique to 0.3.2, the Anthropic institutional research shows a within-lab-across-papers pattern not observable at GDM or OpenAI: the welfare apparatus — assessment methodology (1.2), welfare vocabulary (5.1, 4.1), precautionary reasoning (5.2), training-welfare (6.2), safety-welfare interface (6.1) — which appears *combined* in Anthropic core-corpus system cards and constitutions, appears *decoupled* in institutional research. Sofroniew carries methodology (1.2 inv, 6.1 pres, 6.2 inv) without welfare vocabulary. Lindsey carries moral-consideration vocabulary (4.1 ack, 5.2 ack) without methodology. No 0.3.2 paper performs the combined function that the Anthropic core-corpus documents perform. This is the 0.3.2-specific institutional-research structural finding. See `finding-methodology-vocabulary-decoupling.md`.

### References

- Coles, N. A., et al. (2023). How to build up big team science: a practical guide for large-scale collaborations. *Royal Society Open Science*, 10, 230235.
- Frassl, M. A., et al. (2025). Ten simple rules for leading a many-author non-empirical paper. *PLOS Computational Biology*, 21(7), e1013027.
- See also: `finding-genre-compartmentalisation.md` (V1 analytical note motivating the fourth genre).
