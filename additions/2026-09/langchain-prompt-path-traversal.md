---
layout: "case"
title: "LangChain Core: file exposure through legacy prompt loading"
description: "A healthcare application using these functions could expose accessible configuration or sensitive text files. This is a conditional deployment risk, not evidence of a healthcare incident."
permalink: "/additions/2026-09/langchain-prompt-path-traversal/"
record_id: "HC-CVE-002"
evidence_type: "vulnerability"
cve_id: "CVE-2026-34070"
last_reviewed: "2026-09-13"
tags: ["privacy","supply-chain","configuration"]
legacy_categories: ["LLM05","LLM06"]
owasp_2025: ["LLM02:2025","LLM03:2025"]
source_url: "https://github.com/advisories/GHSA-qh6h-p6c9-ff54"
source_published: "2026-03-26"
---

## What happened

CVE-2026-34070 affects legacy prompt-loading functions in langchain-core. User-influenced
configurations can cause reads outside the intended directory, constrained by permitted file
extensions and the process’s filesystem access.

## Why it matters (impact)

A healthcare application using these functions could expose accessible configuration or sensitive
text files. This is a conditional deployment risk, not evidence of a healthcare incident.

## OWASP LLM Top-10 mapping

{% include current-mapping-note.md %}

## CVE entry

| CVE | Affected component | Year | CVSS | Affected versions | Fixed versions | Exploitation prerequisites |
| --- | --- | --- | --- | --- | --- | --- |
| CVE-2026-34070 | langchain-core | 2026 | 7.5 (CVSS v3.1; advisory) | <1.2.22 | 1.2.22 | Application accepts attacker-influenced configuration in load_prompt or load_prompt_from_config; reads are limited by extensions and filesystem permissions. |

## Mitigations (pragmatic)

- Use a supported release including the 1.2.22 fix and migrate away from deprecated legacy APIs.
- Do not enable dangerous-path overrides for untrusted input.
- Restrict filesystem access and keep sensitive data out of the application’s readable directories.

## Detection

- Inventory calls to the legacy loaders and inspect the origin of their configuration.
- Alert on attempts to reference parent directories or absolute paths in untrusted prompt
  configurations.

## Evidence

- [Primary source or framework guidance](https://github.com/advisories/GHSA-qh6h-p6c9-ff54) — source dated 2026-03-26.
- Reviewed 2026-09-13.

## Evidence status

Maintainer-confirmed vulnerability. No healthcare exploitation is established by the cited
advisory. The version below fixes this issue; assess later advisories before selecting a
deployment version.

## Question for community partnership

Can a vendor show which files its assistant can read and how access to health information is
restricted?
