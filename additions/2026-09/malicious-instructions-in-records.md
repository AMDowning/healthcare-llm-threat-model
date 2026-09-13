---
layout: "case"
title: "Malicious instructions in retrieved records"
description: "A legitimate retrieval step can introduce hostile instructions into a clinical or administrative workflow. The potential consequences include disclosure and unsafe action; this card reports no observed patient event."
permalink: "/additions/2026-09/malicious-instructions-in-records/"
record_id: "HC-SCN-001"
evidence_type: "scenario"
last_reviewed: "2026-09-13"
tags: ["prompt-injection","retrieval","integrity"]
legacy_categories: ["LLM01","LLM07","LLM08"]
owasp_2025: ["LLM01:2025","LLM06:2025"]
source_url: "https://genai.owasp.org/llm-top-10/"
---

## What happened

Illustrative scenario: an assistant retrieves an uploaded document containing instructions to send
a record elsewhere or change its recommendation. The document is data, but the model treats part
of it as authority.

## Why it matters (impact)

A legitimate retrieval step can introduce hostile instructions into a clinical or administrative
workflow. The potential consequences include disclosure and unsafe action; this card reports no
observed patient event.

## OWASP LLM Top-10 mapping

{% include current-mapping-note.md %}

## Mitigations (pragmatic)

- Treat retrieved text, images, and tool responses as untrusted input.
- Enforce destination and action permissions outside the model; require confirmation for
  consequential actions.
- Preserve source provenance and evaluate adversarial documents in a synthetic test environment.

## Detection

- Log proposed and blocked tool actions with their source document and session.
- Test whether external content can change recipients, permissions, or care-routing decisions.

## Evidence

- [Primary source or framework guidance](https://genai.owasp.org/llm-top-10/).
- Reviewed 2026-09-13.

## Evidence status

Author-developed healthcare scenario informed by OWASP guidance; not an incident report or a CVE.

## Question for community partnership

Can people see which sources shaped advice and challenge an instruction that does not belong in
their care?
