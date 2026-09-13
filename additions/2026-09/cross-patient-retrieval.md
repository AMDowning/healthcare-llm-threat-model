---
layout: "case"
title: "Cross-patient retrieval and memory disclosure"
description: "A fluent answer can conceal a record mix-up. Potential consequences include disclosure and decisions based on someone else’s history."
permalink: "/additions/2026-09/cross-patient-retrieval/"
record_id: "HC-SCN-002"
evidence_type: "scenario"
last_reviewed: "2026-09-13"
tags: ["privacy","retrieval","identity"]
legacy_categories: ["LLM06","LLM07"]
owasp_2025: ["LLM02:2025","LLM08:2025"]
source_url: "https://genai.owasp.org/llm-top-10/"
---

## What happened

Illustrative scenario: a retrieval service returns another person’s note because authorization is
applied only to the chat interface, not to the documents or search results.

## Why it matters (impact)

A fluent answer can conceal a record mix-up. Potential consequences include disclosure and
decisions based on someone else’s history.

## OWASP LLM Top-10 mapping

{% include current-mapping-note.md %}

## Mitigations (pragmatic)

- Enforce patient, tenant, and user authorization at retrieval time, including caches and vector
  stores.
- Validate patient identity before incorporating a result into a clinical workflow.
- Use synthetic records to test isolation across accounts and sessions.

## Detection

- Run negative authorization tests against indexes, caches, and memory.
- Trace each retrieved item to its patient context and flag mismatches without duplicating
  sensitive content in logs.

## Evidence

- [Primary source or framework guidance](https://genai.owasp.org/llm-top-10/).
- Reviewed 2026-09-13.

## Evidence status

Author-developed healthcare scenario informed by OWASP; no observed incident asserted.

## Question for community partnership

How can a person report that an answer contains someone else’s history, and how is the error
corrected everywhere it spread?
