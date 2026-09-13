---
id: "LLM03"
title: "Training Data Poisoning"
slug: "llm03--training-data-poisoning"
summary: "Tainted imaging or corpora subvert clinical models and introduce backdoors."
tags: ["data-integrity","poisoning","model-safety"]
last_updated: "2026-09-13"
healthcare_note: "Tainted imaging/corpus subverts clinical models."
cve_window: "curated-history"
resources: [{"title":"Medical large language models are vulnerable to data-poisoning attacks (Nat Med 2025)","url":"https://doi.org/10.1038/s41591-024-03445-1"},{"title":"BadCLM: Backdoor Attack in Clinical Language Models for Electronic Health Records (arXiv 2024)","url":"https://pubmed.ncbi.nlm.nih.gov/40417555/"},{"title":"Training-data poisoning of medical LLMs","url":"/additions/2025-10/training-data-poisoning-med-llms/"},{"title":"BadCLM EHR backdoor","url":"/additions/2025-10/badclm-ehr-backdoor/"}]
previous_review_label: "2025-03-17"
id_scheme: "legacy-2023-24"
owasp_2025: ["LLM04:2025"]
permalink: "/threats/llm03--training-data-poisoning/"
redirect_from: ["/threats/llm03.html"]
---

> **Evidence note:** CVE descriptions document software weaknesses. Patient-harm examples
> are potential consequences unless an entry explicitly identifies an observed outcome.
> Existing research citations are retained; the September review does not revalidate every paper.


## CVE entries (curated history)

{% include cve-coverage-note.md %}

## References

- Experimental evidence:
  [Medical large language models are vulnerable to data-poisoning attacks (Nat Med 2025)](https://doi.org/10.1038/s41591-024-03445-1)
- Backdoor case study:
  [BadCLM: Backdoor Attack in Clinical Language Models for Electronic Health Records (arXiv 2024)](https://pubmed.ncbi.nlm.nih.gov/40417555/)
- Field exercise notes:
  [Training-data poisoning of medical LLMs]({{ '/additions/2025-10/training-data-poisoning-med-llms/' | relative_url }})
- EHR exploitation playbook:
  [BadCLM backdoor in EHR models]({{ '/additions/2025-10/badclm-ehr-backdoor/' | relative_url }})
## Operational safeguards

- Track training and model provenance; separately review retrieval and persistent-memory writes.

## Detection

- Evaluate synthetic backdoors and check whether corrections persist across sessions.

## September 2026 additions

- [False information that persists in AI memory]({{ '/additions/2026-09/persistent-memory-contamination/' | relative_url }}) — scenario.

## Question for community partnership

Who can correct a false fact, and where will that correction propagate?
