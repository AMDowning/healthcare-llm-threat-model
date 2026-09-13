---
id: "LLM06"
category_id: "LLM06"
title: "Sensitive Information Disclosure"
slug: "llm06--sensitive-information-disclosure"
summary: "PHI leaks via connectors, logging, or post-compromise exfiltration."
tags: ["privacy","ssrf","exfiltration"]
last_updated: "2026-09-13"
healthcare_note: "PHI leakage via connectors, logs/telemetry, or post-compromise exfiltration."
cve_window: "curated-history"
resources: [{"title":"DIRI patient re-identification","url":"/additions/2025-10/patient-reidentification-diri/"},{"title":"Radiology report anonymization pitfalls","url":"/additions/2025-10/radiology-report-anonymization-llms/"},{"title":"DIRI: Adversarial Patient Reidentification with Large Language Models for Evaluating Clinical Text Anonymization (arXiv 2025)","url":"https://pubmed.ncbi.nlm.nih.gov/40502277/"},{"title":"Automated anonymization of radiology reports (Int J Med Inform 2024)","url":"https://pubmed.ncbi.nlm.nih.gov/39480533/"}]
previous_review_label: "2025-03-17"
id_scheme: "legacy-2023-24"
owasp_2025: ["LLM02:2025"]
permalink: "/threats/llm06--sensitive-information-disclosure/"
redirect_from: ["/threats/llm06.html"]
---

> **Evidence note:** CVE descriptions document software weaknesses. Patient-harm examples
> are potential consequences unless an entry explicitly identifies an observed outcome.
> Existing research citations are retained; the September review does not revalidate every paper.


## CVE entries (curated history)

| CVE                         | Classification | Why it fits LLM06                                                                 | Links                                                                                                                       |
| --------------------------- | -------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| **CVE-2024-38109**          | Secondary      | SSRF can bypass intended data scopes; potential cross-tenant resource visibility. | [NVD](https://nvd.nist.gov/vuln/detail/CVE-2024-38109) · [Tenable](https://www.tenable.com/security/research/tra-2024-27)   |
| **CVE-2025-21384**          | Secondary      | Authenticated SSRF → unauthorized internal data access.                           | [NVD](https://nvd.nist.gov/vuln/detail/CVE-2025-21384)                                                                      |
| **CVE-2025-58756 / -58757** | Secondary      | RCE on imaging/AI nodes enables **DICOM/PHI exfiltration** after compromise.      | [NVD 58756](https://nvd.nist.gov/vuln/detail/CVE-2025-58756) · [NVD 58757](https://nvd.nist.gov/vuln/detail/CVE-2025-58757) |

**Mitigation emphasis:** Context minimization (redact PHI at prompt/connector boundaries), DLP on
egress, block metadata/private ranges, micro-segment AI runtimes ↔ EHR/FHIR, anomaly detection
(bulk reads, unusual connector targets, atypical model-load behavior).

## References

- De-identification red team:
  [DIRI patient re-identification]({{ '/additions/2025-10/patient-reidentification-diri/' | relative_url }})
- Imaging privacy audit:
  [Radiology report anonymization pitfalls]({{ '/additions/2025-10/radiology-report-anonymization-llms/' | relative_url }})
- Clinical anonymization benchmark:
  [DIRI: Adversarial Patient Reidentification with Large Language Models for Evaluating Clinical Text Anonymization (arXiv 2025)](https://pubmed.ncbi.nlm.nih.gov/40502277/)
- Operational anonymizer study:
  [Automated anonymization of radiology reports: comparison of publicly available NLP and large language models (Int J Med Inform 2024)](https://pubmed.ncbi.nlm.nih.gov/39480533/)
## Operational safeguards

- Minimize sensitive context and retained copies; enforce identity and retrieval authorization
  outside the model.

## Detection

- Test cross-patient isolation and monitor bulk reads, exports, and unusual credential use.

## September 2026 additions

- [iRhythm: health data risk in third-party business applications]({{ '/additions/2026-09/irhythm-third-party-data-theft/' | relative_url }}) — incident.
- [Synnovis: service recovery, backlogs, and data notification]({{ '/additions/2026-09/synnovis-recovery-and-notification/' | relative_url }}) — incident.
- [LangChain: serialization injection and secret exposure]({{ '/additions/2026-09/langchain-serialization-injection/' | relative_url }}) — vulnerability.
- [LangChain Core: file exposure through legacy prompt loading]({{ '/additions/2026-09/langchain-prompt-path-traversal/' | relative_url }}) — vulnerability.
- [Cross-patient retrieval and memory disclosure]({{ '/additions/2026-09/cross-patient-retrieval/' | relative_url }}) — scenario.

## Question for community partnership

Can people learn what was exposed and obtain practical help?
