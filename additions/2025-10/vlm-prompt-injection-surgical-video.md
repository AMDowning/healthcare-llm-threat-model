---
layout: "default"
title: "Prompt injection on surgical video VLMs"
description: "Surgical video decision-support models can be driven off course via overlaid or timed prompt injections."
permalink: "/additions/2025-10/vlm-prompt-injection-surgical-video/"
redirect_from: ["/additions/2025-10/vlm-prompt-injection-surgical-video.md"]
evidence_type: "research"
mapping_version: "legacy-2023-24"
---


# Prompt injection on surgical video VLMs

**Why it matters (impact)**  
In laparoscopic/surgical video decision support, time-varying visual/textual overlays can collapse
model accuracy (e.g., full-duration injections dropped accuracy dramatically). This is a realistic
theatre-side risk where video overlays (from devices or third-party sources) are present.

**OWASP LLM Top-10 mapping (legacy 2023–24 labels)**

- LLM01: Prompt Injection
- LLM02: Insecure Output Handling

**Mitigations**

- Strip overlay text from OR video via scrub filters and OCR checks before inference.
- Temporal consistency checks; abstain/alert on injection suspicion.
- Separate clinical UI from raw model text; require clin-review approvals.

**Evidence (preprint, NIH-indexed)**

- [Prompt injection attacks on vision-language models for surgical decision support (medRxiv 2025)](https://doi.org/10.1101/2025.07.16.25331645)
  — [PubMed](https://pubmed.ncbi.nlm.nih.gov/40778151/)

**Tags:** vlm, surgery, video, prompt-injection

## Evidence status

{% include research-evidence-note.md %}
