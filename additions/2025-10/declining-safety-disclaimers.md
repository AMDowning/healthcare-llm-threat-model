---
layout: "default"
title: "Declining medical safety disclaimers in GenAI models"
description: "Safety disclaimers in general-purpose medical chatbots are eroding over time, increasing clinical risk."
permalink: "/additions/2025-10/declining-safety-disclaimers/"
redirect_from: ["/additions/2025-10/declining-safety-disclaimers.md"]
evidence_type: "research"
mapping_version: "legacy-2023-24"
---


# Declining medical safety disclaimers in GenAI models

**Why it matters (impact)**  
Across 2022–2025, medical disclaimers in LLM/VLM outputs fell to ~1%. As capability grew, safety
messaging dropped—raising misuse/overreliance risk in patient-facing and clinician-adjacent
contexts.

**OWASP LLM Top-10 mapping (legacy 2023–24 labels)**

- LLM02: Insecure Output Handling
- LLM09: Overreliance

**Mitigations**

- Enforce policy-driven, context-aware disclaimers and escalation language for clinical risk
  categories.
- Governance tests: block production when disclaimer rates fall below thresholds for high-risk
  intents.

**Evidence (peer-reviewed)**

- [A longitudinal analysis of declining medical safety messaging in generative AI models (npj Digit Med 2025)](https://doi.org/10.1038/s41746-025-01943-1)
  — [PubMed](https://pubmed.ncbi.nlm.nih.gov/41038984/)

**Tags:** safety, governance, disclaimers, patient-facing

## Evidence status

{% include research-evidence-note.md %}
