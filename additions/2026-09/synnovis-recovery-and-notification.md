---
layout: "case"
title: "Synnovis: service recovery, backlogs, and data notification"
description: "Service restoration, recovery of missed care, and notification about exposed data occur on different timelines. AI systems using laboratory information need to distinguish an unavailable result from a normal result."
permalink: "/additions/2026-09/synnovis-recovery-and-notification/"
record_id: "HC-INC-004"
evidence_type: "incident"
last_reviewed: "2026-09-13"
tags: ["availability","privacy","diagnostics","historical"]
legacy_categories: ["LLM04","LLM05","LLM06"]
owasp_2025: []
source_url: "https://www.england.nhs.uk/synnovis-cyber-incident/"
incident_date: "2024-06-03"
source_published: "2025-11-10"
---

## What happened

NHS England’s November 2025 update describes the June 3, 2024 ransomware attack on Synnovis. It
reports delays to more than 11,000 outpatient and elective-procedure appointments, publication of
stolen data, and service restoration by December 2024. Determining the scope of stolen information
took more than a year.

## Why it matters (impact)

Service restoration, recovery of missed care, and notification about exposed data occur on
different timelines. AI systems using laboratory information need to distinguish an unavailable
result from a normal result.

## OWASP LLM Top-10 mapping

{% include infrastructure-mapping-note.md %}

## Mitigations (pragmatic)

- Record missing results explicitly and route unresolved diagnostic work to accountable staff.
- Exercise downtime pathways for ordering, result delivery, and urgent escalation.
- Maintain separate recovery measures for systems, missed care, data investigation, and
  notification.

## Detection

- Monitor outstanding specimen and result queues, including items crossing recovery boundaries.
- Check that results received after an outage reach the requesting clinician and the person
  concerned.

## Evidence

- [Primary source or framework guidance](https://www.england.nhs.uk/synnovis-cyber-incident/) — source dated 2025-11-10.
- Reviewed 2026-09-13.

## Evidence status

Historical incident with later authoritative findings. The cited NHS update supports the
disruption and disclosure account. It does not establish an LLM exploit or quantify all downstream
clinical harms.

## Question for community partnership

After systems return, how do we find people whose tests, results, or follow-up were missed?
