---
id: "LLM04"
title: "Model Denial of Service"
slug: "llm04--model-denial-of-service"
summary: "Cost spikes or downtime disrupt clinical triage and imaging support."
tags: ["availability","operations"]
last_updated: "2026-09-13"
healthcare_note: "Cost spikes / unavailability disrupt triage or imaging support."
cve_window: "curated-history"
resources: []
previous_review_label: "2025-03-17"
id_scheme: "legacy-2023-24"
owasp_2025: ["LLM10:2025"]
permalink: "/threats/llm04--model-denial-of-service/"
redirect_from: ["/threats/llm04.html"]
---

> **Evidence note:** CVE descriptions document software weaknesses. Patient-harm examples
> are potential consequences unless an entry explicitly identifies an observed outcome.
> Existing research citations are retained; the September review does not revalidate every paper.


## CVE entries (curated history)

{% include cve-coverage-note.md %}
## Operational safeguards

- Set resource limits and timeouts; define an accountable clinical fallback for unavailable
  dependencies.

## Detection

- Exercise outages and monitor missed results, queue age, and data freshness.

## September 2026 additions

- [Boston Scientific: disruption to supply and monitoring activation]({{ '/additions/2026-09/boston-scientific-service-disruption/' | relative_url }}) — incident.
- [Stryker: supplier disruption and rescheduled care]({{ '/additions/2026-09/stryker-supply-disruption/' | relative_url }}) — incident.
- [Synnovis: service recovery, backlogs, and data notification]({{ '/additions/2026-09/synnovis-recovery-and-notification/' | relative_url }}) — incident.
- [Confident answers when health information is missing]({{ '/additions/2026-09/unsafe-behavior-during-outages/' | relative_url }}) — scenario.

## Question for community partnership

Who contacts people whose care was interrupted and confirms follow-up?
