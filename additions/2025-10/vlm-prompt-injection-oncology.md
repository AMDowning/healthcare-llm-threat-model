---
layout: "default"
title: "Prompt injection on medical VLMs (oncology images)"
description: "Oncology-focused vision-language models can be subverted by hidden prompts embedded in clinical imagery."
permalink: "/additions/2025-10/vlm-prompt-injection-oncology/"
redirect_from: ["/additions/2025-10/vlm-prompt-injection-oncology.md"]
evidence_type: "research"
mapping_version: "legacy-2023-24"
legacy_categories: ["LLM01", "LLM02", "LLM05"]
---


# Prompt injection on medical VLMs (oncology images)

**Why it matters (impact)**  
Embedded sub-visual or overlaid prompts inside medical images can reliably steer state-of-the-art
VLMs (e.g., GPT-4o class) to harmful or incorrect outputs in oncology workflows—without parameter
access. This is a practical supply-chain/user-content attack vector wherever external imaging or
patient-submitted media enters clinical systems.

**OWASP LLM Top-10 mapping (legacy 2023–24 labels)**

- LLM01: Prompt Injection
- LLM02: Insecure Output Handling
- LLM05: Supply Chain Vulnerabilities

**Mitigations (pragmatic)**

- Content provenance plus steganography scans; quarantine assets with visible or hidden overlays.
- Strict tool/API isolation of VLM outputs from downstream systems unless validated.
- Defense-in-depth prompts, constrained decoding, and detector retraining before clinical use.

**Evidence (peer-reviewed & code)**

- [Prompt injection attacks on vision-language models in oncology (Nat Commun 2025)](https://doi.org/10.1038/s41467-024-55631-x)
  — [PubMed](https://pubmed.ncbi.nlm.nih.gov/39890777/) ·
  [PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC11785991/)
- Code:
  [KatherLab “Prompt Injection Attacks”](https://github.com/KatherLab/prompt_injection_attacks) repo
  with reproducible oncology VLM exploits and evaluation scripts.

**Tags:** vlm, oncology, prompt-injection, supply-chain, patient-provided-data

## Evidence status

{% include research-evidence-note.md %}
