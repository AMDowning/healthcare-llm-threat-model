---
layout: "default"
title: "Training-data poisoning of medical LLMs"
description: "Targeted data poisoning can implant lasting malicious behaviors in medical language models."
permalink: "/additions/2025-10/training-data-poisoning-med-llms/"
redirect_from: ["/additions/2025-10/training-data-poisoning-med-llms.md"]
evidence_type: "research"
mapping_version: "legacy-2023-24"
legacy_categories: ["LLM03", "LLM05"]
---


# Training-data poisoning of medical LLMs

**Why it matters (impact)**  
Small, targeted poisoning of medical corpora can implant persistent harmful behaviors and degrade
safety—high leverage for adversaries given open data pipelines and fine-tuning trends.

**OWASP LLM Top-10 mapping (legacy 2023–24 labels)**

- LLM03: Training Data Poisoning
- LLM05: Supply Chain Vulnerabilities

**Mitigations**

- Curate signed/provenanced datasets; run poisoning-resistant training pipelines with outlier
  checks.
- Canary prompts and trigger scans post-train; quarantine fine-tunes without clean red-team evals.

**Evidence (peer-reviewed & code)**

- [Medical large language models are vulnerable to data-poisoning attacks (Nat Med 2025)](https://doi.org/10.1038/s41591-024-03445-1)
  — [PubMed](https://pubmed.ncbi.nlm.nih.gov/39779928/)
- Code: [Scorpius training-data attack framework](https://github.com/yjwtheonly/Scorpius) (Y. Wang
  et al.) with poisoning pipelines and evaluation harnesses.

**Tags:** poisoning, supply-chain, training, fine-tuning

## Evidence status

{% include research-evidence-note.md %}
