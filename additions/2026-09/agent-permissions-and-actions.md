---
layout: "case"
title: "Agents that can act beyond their intended authority"
description: "The consequence depends on the permissions granted, not just the quality of the generated answer. A proposed action must remain distinguishable from a completed action."
permalink: "/additions/2026-09/agent-permissions-and-actions/"
record_id: "HC-SCN-004"
evidence_type: "scenario"
last_reviewed: "2026-09-13"
tags: ["agency","authorization","workflow"]
legacy_categories: ["LLM07","LLM08"]
owasp_2025: ["LLM06:2025"]
source_url: "https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/"
---

## What happened

Illustrative scenario: an assistant asked to summarize a visit has credentials that also permit
record updates, messages, or scheduling changes. A mistaken or manipulated tool call takes an
action the user never authorized.

## Why it matters (impact)

The consequence depends on the permissions granted, not just the quality of the generated answer.
A proposed action must remain distinguishable from a completed action.

## OWASP LLM Top-10 mapping

{% include current-mapping-note.md %}

## Mitigations (pragmatic)

- Separate reading, drafting, and execution permissions; use narrowly scoped identities and
  short-lived credentials.
- Require independent authorization and meaningful human confirmation for consequential actions.
- Provide a stop mechanism and an auditable correction or reversal process where possible.

## Detection

- Record requested, approved, executed, and rejected actions with accountable identities.
- Test denied actions and attempts to reuse authority across tools or sessions.

## Evidence

- [Primary source or framework guidance](https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/).
- Reviewed 2026-09-13.

## Evidence status

Author-developed healthcare scenario informed by agentic security guidance; no production incident
claimed.

## Question for community partnership

Before an assistant changes something, can the person understand what will happen and who is
accountable?
