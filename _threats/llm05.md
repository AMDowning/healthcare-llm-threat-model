---
id: "LLM05"
title: "Supply Chain Vulnerabilities"
slug: "llm05--supply-chain-vulnerabilities"
summary: "Managed AI services and libraries pull SSRF and unsafe deserialization into care delivery."
tags: ["supply-chain","ssrf","rce"]
last_updated: "2026-09-13"
healthcare_note: "Managed AI services, model bundles, and libraries bring “classic” vulns (SSRF, unsafe deserialization) into care delivery."
cve_window: "curated-history"
resources: [{"title":"Medical VLM prompt injection (oncology)","url":"/additions/2025-10/vlm-prompt-injection-oncology/"},{"title":"Training-data poisoning of medical LLMs","url":"/additions/2025-10/training-data-poisoning-med-llms/"},{"title":"BadCLM backdoor in EHR models","url":"/additions/2025-10/badclm-ehr-backdoor/"}]
previous_review_label: "2025-03-17"
id_scheme: "legacy-2023-24"
owasp_2025: ["LLM03:2025"]
permalink: "/threats/llm05--supply-chain-vulnerabilities/"
redirect_from: ["/threats/llm05.html"]
---

> **Evidence note:** CVE descriptions document software weaknesses. Patient-harm examples
> are potential consequences unless an entry explicitly identifies an observed outcome.
> Existing research citations are retained; the September review does not revalidate every paper.


## CVE entries (curated history)

| CVE                | Affected Component                                         | Year | CVSS                                         | Summary (plain English)                                                                                                                                          | Links (NVD / Vendor or Advisory / Research)                                                                                                                                                                       | Mitigations (operational + technical)                                                                                                                                                                                                                        | Impact (realistic patient-harm examples)                                                                                                                                                                                                                |
| ------------------ | ---------------------------------------------------------- | ---: | -------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **CVE-2024-38109** | **Microsoft Azure Health Bot** (managed AI health chatbot) | 2024 | **NVD:** 8.8 (v3.1) · **Microsoft CNA:** 9.1 | **SSRF** in “Data Connections”: authenticated users could make the service call **internal endpoints** → elevation of privilege / potential cross-tenant access. | [NVD](https://nvd.nist.gov/vuln/detail/CVE-2024-38109) · [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2024-38109) · [Tenable Research](https://www.tenable.com/security/research/tra-2024-27) | Egress allow-listing (block IMDS `169.254.169.254` & RFC1918), least-privilege service principals, tenant-isolation tests (canary SSRF), DLP on connector traffic, network micro-segmentation for bot↔EHR/FHIR, formal patch tracking of MSRC bulletins.    | (1) Bot pulls **wrong tenant’s patient** via cross-boundary query; clinician acts on mis-linked PHI → **inappropriate care**. (2) Lateral move to triage transcript store → exposure of symptoms/meds tied to identities → **privacy harm and stigma**. |
| **CVE-2025-21384** | **Microsoft Azure Health Bot**                             | 2025 | **NVD:** 8.8 (v3.1) · **Microsoft CNA:** 8.3 | **Authenticated SSRF** to internal resources → elevation of privilege.                                                                                           | [NVD](https://nvd.nist.gov/vuln/detail/CVE-2025-21384) · [MSRC](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2025-21384)                                                                             | Above + per-connector trust boundaries (read-only vs write), token lifetime minimization and secret rotation tied to patch windows, egress anomaly detection.                                                                                                | (1) Access to intranet file share with intake PDFs → **bulk PHI exfiltration**. (2) Manipulated routing/validation → delayed escalation for red-flag symptoms → **care delays and harm**.                                                               |
| **CVE-2025-58756** | **MONAI** (Medical Open Network for AI, imaging toolkit)   | 2025 | **CNA (GitHub):** 8.8 (v3.1)                 | **Insecure checkpoint loading** (e.g., `torch.load`) can lead to **arbitrary code execution** when a malicious model file is loaded.                             | [NVD](https://nvd.nist.gov/vuln/detail/CVE-2025-58756) · [GHSA](https://github.com/advisories/GHSA-6vm5-6jv9-rjpj)                                                                                                | Artifact trust policy (signed models only; verify before load), disallow unsafe deserialization on untrusted inputs, sandbox model-load jobs (no egress; read-only mounts), SBOM & provenance (SLSA) gates, strict secrets minimization for imaging workers. | (1) RCE siphons **DICOM archives** (images+metadata) → **mass privacy breach**. (2) Backdoor alters segmentation/classification → **missed tumor** or **false positive**, delaying/misdirecting treatment.                                              |
| **CVE-2025-58757** | **MONAI** (imaging toolkit)                                | 2025 | **CNA (GitHub):** 8.8 (v3.1)                 | **Unsafe `pickle` deserialization** in `pickle_operations` → **RCE** when processing crafted data.                                                               | [NVD](https://nvd.nist.gov/vuln/detail/CVE-2025-58757) · [GHSA](https://github.com/Project-MONAI/MONAI/security/advisories/GHSA-p8cm-mm2v-gwjm)                                                                   | Remove/replace `pickle.loads`, require safe formats (Safetensors/ONNX) with signatures, integrity/attestation checks for bundles, network isolation for preprocessing nodes, continuous code-scanning rule to flag deserialization.                          | (1) **Clinical ransomware** on imaging nodes → canceled scans, care delays. (2) Exfiltration of imaging data + model weights → **privacy loss + model/IP theft**, undermining trust in AI-assisted reads.                                               |

## References

- Prompt-injection mitigation pack:
  [Medical VLM prompt injection (oncology)]({{ '/additions/2025-10/vlm-prompt-injection-oncology/' | relative_url }})
- Poisoning response drill:
  [Training-data poisoning of medical LLMs]({{ '/additions/2025-10/training-data-poisoning-med-llms/' | relative_url }})
- EHR-specific backdoor fallout:
  [BadCLM backdoor in EHR models]({{ '/additions/2025-10/badclm-ehr-backdoor/' | relative_url }})
## Operational safeguards

- Inventory deployed dependencies, trusted artifacts, credentials, and critical upstream services.

## Detection

- Compare installed versions with advisories and monitor unexpected artifact or service changes.

## September 2026 additions

- [Boston Scientific: disruption to supply and monitoring activation]({{ '/additions/2026-09/boston-scientific-service-disruption/' | relative_url }}) — incident.
- [iRhythm: health data risk in third-party business applications]({{ '/additions/2026-09/irhythm-third-party-data-theft/' | relative_url }}) — incident.
- [Stryker: supplier disruption and rescheduled care]({{ '/additions/2026-09/stryker-supply-disruption/' | relative_url }}) — incident.
- [Synnovis: service recovery, backlogs, and data notification]({{ '/additions/2026-09/synnovis-recovery-and-notification/' | relative_url }}) — incident.
- [LangChain: serialization injection and secret exposure]({{ '/additions/2026-09/langchain-serialization-injection/' | relative_url }}) — vulnerability.
- [LangChain Core: file exposure through legacy prompt loading]({{ '/additions/2026-09/langchain-prompt-path-traversal/' | relative_url }}) — vulnerability.

## Question for community partnership

Can a supplier explain how people receive care if its service fails?
