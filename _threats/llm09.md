---
id: "LLM09"
category_id: "LLM09"
title: "Overreliance"
slug: "llm09--overreliance"
summary: "Clinicians over-trust AI outputs without governance, amplifying harmful hallucinations."
tags: ["human-factors","hallucination"]
last_updated: "2026-09-13"
healthcare_note: "Clinicians over-trust AI outputs; governance gap rather than a CVE-type software defect."
cve_window: "curated-history"
resources: [{"title":"Adversarial hallucination attacks in CDS","url":"/additions/2025-10/adversarial-hallucination-attacks-cds/"},{"title":"Declining medical safety disclaimers","url":"/additions/2025-10/declining-safety-disclaimers/"},{"title":"Multi-model assurance analysis showing large language models are highly vulnerable to adversarial hallucination attacks during clinical decision support (Commun Med 2025)","url":"https://doi.org/10.1038/s43856-025-01021-3"},{"title":"A longitudinal analysis of declining medical safety messaging in generative AI models (npj Digit Med 2025)","url":"https://doi.org/10.1038/s41746-025-01943-1"}]
previous_review_label: "2025-03-17"
id_scheme: "legacy-2023-24"
owasp_2025: ["LLM09:2025"]
permalink: "/threats/llm09--overreliance/"
redirect_from: ["/threats/llm09.html"]
---

> **Evidence note:** CVE descriptions document software weaknesses. Patient-harm examples
> are potential consequences unless an entry explicitly identifies an observed outcome.
> Existing research citations are retained; the September review does not revalidate every paper.


## CVE entries (curated history)

{% include cve-coverage-note.md %}

## References

- Governance failure case:
  [Adversarial hallucination attacks in CDS]({{ '/additions/2025-10/adversarial-hallucination-attacks-cds/' | relative_url }})
- Messaging drift tracker:
  [Declining medical safety disclaimers]({{ '/additions/2025-10/declining-safety-disclaimers/' | relative_url }})
- Assurance signal:
  [Multi-model assurance analysis showing large language models are highly vulnerable to adversarial hallucination attacks during clinical decision support (Commun Med 2025)](https://doi.org/10.1038/s43856-025-01021-3)
- Policy trend study:
  [A longitudinal analysis of declining medical safety messaging in generative AI models (npj Digit Med 2025)](https://doi.org/10.1038/s41746-025-01943-1)
## Operational safeguards

- Show source dates and uncertainty; flag missing information and provide a human escalation route.

## Detection

- Evaluate unsupported conclusions, stale records, and user comprehension of limitations.

## September 2026 additions

- [False information that persists in AI memory]({{ '/additions/2026-09/persistent-memory-contamination/' | relative_url }}) — scenario.
- [Confident answers when health information is missing]({{ '/additions/2026-09/unsafe-behavior-during-outages/' | relative_url }}) — scenario.

## Question for community partnership

Can people tell what is known, what is missing, and who can help?
