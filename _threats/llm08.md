---
id: "LLM08"
category_id: "LLM08"
title: "Excessive Agency"
slug: "llm08--excessive-agency"
summary: "Over-permissioned agents trigger real-world actions without guardrails."
tags: ["automation","governance"]
last_updated: "2026-09-13"
healthcare_note: "Over-permissioned agents trigger real-world actions without checks."
cve_window: "curated-history"
resources: []
previous_review_label: "2025-03-17"
id_scheme: "legacy-2023-24"
owasp_2025: ["LLM06:2025"]
permalink: "/threats/llm08--excessive-agency/"
redirect_from: ["/threats/llm08.html"]
---

> **Evidence note:** CVE descriptions document software weaknesses. Patient-harm examples
> are potential consequences unless an entry explicitly identifies an observed outcome.
> Existing research citations are retained; the September review does not revalidate every paper.


## CVE entries (curated history)

{% include cve-coverage-note.md %}
## Operational safeguards

- Separate read, draft, and execution permissions; require meaningful approval for consequential
  actions.

## Detection

- Audit proposed, approved, completed, and blocked actions; test stop and recovery procedures.

## September 2026 additions

- [Malicious instructions in retrieved records]({{ '/additions/2026-09/malicious-instructions-in-records/' | relative_url }}) — scenario.
- [Agents that can act beyond their intended authority]({{ '/additions/2026-09/agent-permissions-and-actions/' | relative_url }}) — scenario.

## Question for community partnership

Can people understand and challenge an action before it happens?
