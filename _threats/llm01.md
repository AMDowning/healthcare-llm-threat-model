---
id: "LLM01"
category_id: "LLM01"
title: "Prompt Injection"
slug: "llm01--prompt-injection"
summary: "Malicious prompts cause tools and connectors to leak PHI or perform unsafe actions."
tags: ["injection","workflow","healthcare"]
last_updated: "2026-09-13"
healthcare_note: "Malicious prompts cause tools/connectors to leak PHI or perform unsafe actions."
cve_window: "curated-history"
resources: [{"title":"Prompt injection attacks on vision-language models in oncology (Nat Commun 2025)","url":"https://doi.org/10.1038/s41467-024-55631-x"},{"title":"Prompt injection attacks on vision-language models for surgical decision support (medRxiv 2025)","url":"https://doi.org/10.1101/2025.07.16.25331645"},{"title":"Multi-model assurance analysis showing large language models are highly vulnerable to adversarial hallucination attacks during clinical decision support (Commun Med 2025)","url":"https://doi.org/10.1038/s43856-025-01021-3"},{"title":"Medical VLM prompt injection (oncology)","url":"/additions/2025-10/vlm-prompt-injection-oncology/"},{"title":"Surgical video VLM prompt injection","url":"/additions/2025-10/vlm-prompt-injection-surgical-video/"},{"title":"Adversarial hallucination attacks in CDS","url":"/additions/2025-10/adversarial-hallucination-attacks-cds/"}]
previous_review_label: "2025-03-17"
id_scheme: "legacy-2023-24"
owasp_2025: ["LLM01:2025"]
permalink: "/threats/llm01--prompt-injection/"
redirect_from: ["/threats/llm01.html"]
---

> **Evidence note:** CVE descriptions document software weaknesses. Patient-harm examples
> are potential consequences unless an entry explicitly identifies an observed outcome.
> Existing research citations are retained; the September review does not revalidate every paper.


## CVE entries (curated history)

{% include cve-coverage-note.md %}
(e.g., red-teaming findings) so governance can act.

## References

- Oncology exploit chain: [Nat Commun 2025 study][llm01-onc]
- OR workflow preprint: [Surgical VLM medRxiv preprint][llm01-surg]
- Assurance findings: [Commun Med 2025 assurance analysis][llm01-assurance]
- Field report:
  [Medical VLM prompt injection (oncology)]({{ '/additions/2025-10/vlm-prompt-injection-oncology/' | relative_url }})
- Surgical case study:
  [Surgical video VLM prompt injection]({{ '/additions/2025-10/vlm-prompt-injection-surgical-video/' | relative_url }})
- Governance signal:
  [Adversarial hallucination attacks in CDS]({{ '/additions/2025-10/adversarial-hallucination-attacks-cds/' | relative_url }})

[llm01-onc]: https://doi.org/10.1038/s41467-024-55631-x
[llm01-surg]: https://doi.org/10.1101/2025.07.16.25331645
[llm01-assurance]: https://doi.org/10.1038/s43856-025-01021-3
## Operational safeguards

- Validate document provenance and isolate untrusted retrieved content from tool authority.

## Detection

- Test whether a document can redirect a tool call or change a recipient.

## September 2026 additions

- [Malicious instructions in retrieved records]({{ '/additions/2026-09/malicious-instructions-in-records/' | relative_url }}) — scenario.
- [False information that persists in AI memory]({{ '/additions/2026-09/persistent-memory-contamination/' | relative_url }}) — scenario.

## Question for community partnership

Can people see and challenge the sources behind a recommendation?
