---
layout: "case"
title: "Boston Scientific: disruption to supply and monitoring activation"
description: "Care delivery depends on ordering, distribution, enrollment, and activation services as well as the device itself. In an AI-enabled workflow, interruption of these dependencies could leave people waiting for a service that appears available elsewhere."
permalink: "/additions/2026-09/boston-scientific-service-disruption/"
record_id: "HC-INC-001"
evidence_type: "incident"
last_reviewed: "2026-09-13"
tags: ["availability","supply-chain","remote-monitoring"]
legacy_categories: ["LLM04","LLM05"]
owasp_2025: []
source_url: "https://news.bostonscientific.com/update-on-recent-cybersecurity-incident"
incident_date: "2026-08-25"
source_published: "2026-09-09"
---

## What happened

Boston Scientific identified a cybersecurity incident on August 25, 2026. Its September 9 update
reported manufacturing, order fulfillment, shipping, and remote-monitoring activation capability
restored, while some order delays and application restoration work remained.

## Why it matters (impact)

Care delivery depends on ordering, distribution, enrollment, and activation services as well as
the device itself. In an AI-enabled workflow, interruption of these dependencies could leave
people waiting for a service that appears available elsewhere.

## OWASP LLM Top-10 mapping

{% include infrastructure-mapping-note.md %}

## Mitigations (pragmatic)

- Map ordering, shipping, activation, and monitoring dependencies separately from device operation.
- Maintain a verified queue of pending activations and delayed orders, with named staff
  responsible for follow-up.
- Rehearse an alternate clinical workflow with the care team; reconcile pending work after
  restoration.

## Detection

- Track activation failures, order backlog age, and interrupted service connections.
- Alert on discrepancies between a service marked active and the receipt of expected data.

## Evidence

- [Primary source or framework guidance](https://news.bostonscientific.com/update-on-recent-cybersecurity-incident) — source dated 2026-09-09.
- Reviewed 2026-09-13.

## Evidence status

Company-reported incident and operational disruption. The cited update does not establish an LLM
exploit, implanted-device takeover, confirmed data theft, or a measured number of patient
injuries.

## Question for community partnership

If monitoring cannot be activated, who tells the person, arranges an alternative, and confirms the
missed step was recovered?
