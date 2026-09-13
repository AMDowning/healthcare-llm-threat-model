---
layout: "case"
title: "False information that persists in AI memory"
description: "A one-time error can recur and spread through copied summaries. Potential harm depends on whether later users rely on it or an agent acts on it."
permalink: "/additions/2026-09/persistent-memory-contamination/"
record_id: "HC-SCN-003"
evidence_type: "scenario"
last_reviewed: "2026-09-13"
tags: ["memory","poisoning","integrity"]
legacy_categories: ["LLM01","LLM03","LLM09"]
owasp_2025: ["LLM01:2025","LLM04:2025","LLM08:2025"]
source_url: "https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/"
---

## What happened

Illustrative scenario: an incorrect medication or hostile instruction enters a persistent summary
and influences later encounters after the original conversation has ended.

## Why it matters (impact)

A one-time error can recur and spread through copied summaries. Potential harm depends on whether
later users rely on it or an agent acts on it.

## OWASP LLM Top-10 mapping

{% include current-mapping-note.md %}

## Mitigations (pragmatic)

- Separate verified clinical facts from assistant-generated memory and record provenance.
- Require review for persistent changes to clinically consequential facts.
- Support correction, deletion, version history, and propagation of corrections to dependent
  summaries.

## Detection

- Test whether a correction removes the false statement from future responses.
- Audit unexpected memory writes and disagreements between memory and authoritative records.

## Evidence

- [Primary source or framework guidance](https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/).
- Reviewed 2026-09-13.

## Evidence status

Author-developed scenario informed by agentic security guidance. Mapping memory poisoning to LLM
categories is an editorial cross-reference, not evidence of training-data poisoning.

## Question for community partnership

Can people inspect and correct what the assistant remembers, and verify that the correction sticks?
