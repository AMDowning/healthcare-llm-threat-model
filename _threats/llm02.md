---
id: "LLM02"
title: "Insecure Output Handling"
slug: "llm02--insecure-output-handling"
summary: "Applications treat LLM output as executable instructions, enabling unsafe routing or orders."
tags: ["output","workflow","abuse"]
last_updated: "2026-09-13"
healthcare_note: "App consumes LLM output as “instructions,” enabling abuse (e.g., unsafe routing/orders)."
cve_window: "curated-history"
resources: [{"title":"Prompt injection attacks on vision-language models in oncology (Nat Commun 2025)","url":"https://doi.org/10.1038/s41467-024-55631-x"},{"title":"Prompt injection attacks on vision-language models for surgical decision support (medRxiv 2025)","url":"https://doi.org/10.1101/2025.07.16.25331645"},{"title":"Multi-model assurance analysis showing large language models are highly vulnerable to adversarial hallucination attacks during clinical decision support (Commun Med 2025)","url":"https://doi.org/10.1038/s43856-025-01021-3"},{"title":"DIRI: Adversarial Patient Reidentification with Large Language Models for Evaluating Clinical Text Anonymization (arXiv 2025)","url":"https://pubmed.ncbi.nlm.nih.gov/40502277/"},{"title":"Automated anonymization of radiology reports (Int J Med Inform 2024)","url":"https://pubmed.ncbi.nlm.nih.gov/39480533/"},{"title":"A longitudinal analysis of declining medical safety messaging in generative AI models (npj Digit Med 2025)","url":"https://doi.org/10.1038/s41746-025-01943-1"}]
previous_review_label: "2025-03-17"
id_scheme: "legacy-2023-24"
owasp_2025: ["LLM05:2025"]
permalink: "/threats/llm02--insecure-output-handling/"
redirect_from: ["/threats/llm02.html"]
---

> **Evidence note:** CVE descriptions document software weaknesses. Patient-harm examples
> are potential consequences unless an entry explicitly identifies an observed outcome.
> Existing research citations are retained; the September review does not revalidate every paper.


## References

- Oncology abuse pattern: [Nat Commun 2025 oncology study][llm02-onc]
- Surgical agent safety: [Surgical medRxiv preprint][llm02-surg]
- Assurance baseline: [Commun Med 2025 assurance study][llm02-assurance]
- De-identification caution: [DIRI anonymization paper][llm02-diri]
- Operational privacy drift: [Radiology anonymization study][llm02-radio]
- Safety messaging erosion: [npj Digit Med 2025 longitudinal study][llm02-safety]

[llm02-onc]: https://doi.org/10.1038/s41467-024-55631-x
[llm02-surg]: https://doi.org/10.1101/2025.07.16.25331645
[llm02-assurance]: https://doi.org/10.1038/s43856-025-01021-3
[llm02-diri]: https://pubmed.ncbi.nlm.nih.gov/40502277/
[llm02-radio]: https://pubmed.ncbi.nlm.nih.gov/39480533/
[llm02-safety]: https://doi.org/10.1038/s41746-025-01943-1
## Operational safeguards

- Validate and encode generated output before any application interprets it; independently
  authorize actions.

## Detection

- Test malicious markup, structured commands, and unexpected output fields.

## September 2026 additions



## Question for community partnership

Can a person distinguish a draft from an action already taken?
