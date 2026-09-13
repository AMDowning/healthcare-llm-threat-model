---
layout: "case"
title: "Stryker: supplier disruption and rescheduled care"
description: "An upstream business-system failure can delay a procedure even when the medical device is functioning. AI-supported scheduling and planning need reliable knowledge of supplier availability and a human escalation route."
permalink: "/additions/2026-09/stryker-supply-disruption/"
record_id: "HC-INC-003"
evidence_type: "incident"
last_reviewed: "2026-09-13"
tags: ["availability","supply-chain","care-delays"]
legacy_categories: ["LLM04","LLM05"]
owasp_2025: []
source_url: "https://www.stryker.com/za/en/about/news/a-message-to-our-customers-03-2026.html"
incident_date: "2026-03-11"
source_published: "2026-03-23"
---

## What happened

Stryker reported a cyberattack on March 11, 2026. Its March 19 customer update acknowledged that
shipping delays led to rescheduling of some patient-specific implant cases for the week of March
16. The company reported its products remained safe to use. Its March 23 update described
continuing restoration.

## Why it matters (impact)

An upstream business-system failure can delay a procedure even when the medical device is
functioning. AI-supported scheduling and planning need reliable knowledge of supplier availability
and a human escalation route.

## OWASP LLM Top-10 mapping

{% include infrastructure-mapping-note.md %}

## Mitigations (pragmatic)

- Include personalized products and manufacturer ordering systems in continuity plans.
- Verify supply before confirming a dependent procedure; keep a human-owned list of rescheduled
  cases.
- Reconcile manual and electronic orders after recovery to prevent omissions and duplicates.

## Detection

- Monitor unconfirmed orders and missed shipment milestones for time-sensitive care.
- Track whether every rescheduled case receives a new appointment and an explanation.

## Evidence

- [Primary source or framework guidance](https://www.stryker.com/za/en/about/news/a-message-to-our-customers-03-2026.html) — source dated 2026-03-23.
- Reviewed 2026-09-13.

## Evidence status

Company-reported attack, shipping delays, and rescheduled cases. LLM involvement is not
established. The cited updates do not establish a final injury count; do not repeat attacker
claims as verified findings.

## Question for community partnership

Who helps a person recover travel, caregiving arrangements, and access to care when a supplier
failure cancels their procedure?
