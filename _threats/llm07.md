---
id: "LLM07"
category_id: "LLM07"
title: "Insecure Plugin / Connector Design"
slug: "llm07--insecure-plugin-connector-design"
summary: "Over-trusted data connections behave like plugins and expose internal systems."
tags: ["connectors","ssrf","governance"]
last_updated: "2026-09-13"
healthcare_note: "“Data Connections” (FHIR, scheduling, KBs) behave like plugins; weak guardrails expose internals."
cve_window: "curated-history"
resources: []
previous_review_label: "2025-03-17"
id_scheme: "legacy-2023-24"
owasp_2025: ["LLM03:2025","LLM06:2025"]
permalink: "/threats/llm07--insecure-plugin-connector-design/"
redirect_from: ["/threats/llm07.html"]
---

> **Evidence note:** CVE descriptions document software weaknesses. Patient-harm examples
> are potential consequences unless an entry explicitly identifies an observed outcome.
> Existing research citations are retained; the September review does not revalidate every paper.


## CVE entries (curated history)

| CVE                | Classification | Why it fits LLM07                                                       | Links                                                                                                                     |
| ------------------ | -------------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| **CVE-2024-38109** | Secondary      | Connector path allowed SSRF; fix required stricter redirect/validation. | [NVD](https://nvd.nist.gov/vuln/detail/CVE-2024-38109) · [Tenable](https://www.tenable.com/security/research/tra-2024-27) |
| **CVE-2025-21384** | Secondary      | Authenticated SSRF via connector-like data connections.                 | [NVD](https://nvd.nist.gov/vuln/detail/CVE-2025-21384)                                                                    |

**Mitigation emphasis:** Capability-scoped connectors (e.g., “read-FHIR only”), outbound
allow-lists, intent-gating for risky actions, full audit chain (bot session → connector call →
resource), red-team SSRF tests.
## Operational safeguards

- Scope connectors to a specific user, patient context, destination, and permitted action.

## Detection

- Test denied destinations, unauthorized retrieval, and expired or overbroad credentials.

## September 2026 additions

- [iRhythm: health data risk in third-party business applications]({{ '/additions/2026-09/irhythm-third-party-data-theft/' | relative_url }}) — incident.
- [Malicious instructions in retrieved records]({{ '/additions/2026-09/malicious-instructions-in-records/' | relative_url }}) — scenario.
- [Cross-patient retrieval and memory disclosure]({{ '/additions/2026-09/cross-patient-retrieval/' | relative_url }}) — scenario.
- [Agents that can act beyond their intended authority]({{ '/additions/2026-09/agent-permissions-and-actions/' | relative_url }}) — scenario.

## Question for community partnership

Is it clear which organization receives information through each connection?
