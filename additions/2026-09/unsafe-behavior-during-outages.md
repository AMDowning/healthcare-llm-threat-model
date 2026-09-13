---
layout: "case"
title: "Confident answers when health information is missing"
description: "Dependency failure can become a misleading answer rather than a visible outage. Potential consequences include delayed escalation or reliance on outdated information."
permalink: "/additions/2026-09/unsafe-behavior-during-outages/"
record_id: "HC-SCN-005"
evidence_type: "scenario"
last_reviewed: "2026-09-13"
tags: ["availability","misinformation","care-delays"]
legacy_categories: ["LLM04","LLM09"]
owasp_2025: ["LLM09:2025"]
source_url: "https://genai.owasp.org/llm-top-10/"
---

## What happened

Illustrative scenario: a laboratory or record connection fails, but the assistant silently reuses
stale information or interprets a missing result as reassuring.

## Why it matters (impact)

Dependency failure can become a misleading answer rather than a visible outage. Potential
consequences include delayed escalation or reliance on outdated information.

## OWASP LLM Top-10 mapping

{% include current-mapping-note.md %}

## Mitigations (pragmatic)

- Display timestamps and distinguish unavailable, pending, and normal results.
- Withhold unsupported conclusions and use a clinically approved fallback with a human route.
- Reconcile missing results and pending actions when the service returns.

## Detection

- Exercise dependency failures and stale-data responses with synthetic cases.
- Monitor data freshness and verify that fallback notifications reach the people responsible for
  follow-up.

## Evidence

- [Primary source or framework guidance](https://genai.owasp.org/llm-top-10/).
- Reviewed 2026-09-13.

## Evidence status

Author-developed scenario. An upstream outage is not automatically an LLM denial-of-service
exploit. The incident cards provide dependency lessons, not evidence this model behavior occurred.

## Question for community partnership

When information is missing, does the person learn what is unknown, what to do next, and how to
reach a human?
