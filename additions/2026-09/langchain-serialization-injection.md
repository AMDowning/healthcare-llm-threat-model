---
layout: "case"
title: "LangChain: serialization injection and secret exposure"
description: "In a healthcare deployment using affected paths, exposed service credentials could enable access to connected systems. A healthcare breach is not established by the advisory."
permalink: "/additions/2026-09/langchain-serialization-injection/"
record_id: "HC-CVE-001"
evidence_type: "vulnerability"
cve_id: "CVE-2025-68664"
last_reviewed: "2026-09-13"
tags: ["privacy","supply-chain","credentials"]
legacy_categories: ["LLM05","LLM06"]
owasp_2025: ["LLM02:2025","LLM03:2025"]
source_url: "https://github.com/langchain-ai/langchain/security/advisories/GHSA-c67j-w6g6-q2cm"
source_published: "2025-12-23"
---

## What happened

CVE-2025-68664 affects langchain-core serialization paths. Attacker-controlled structures can be
interpreted as framework objects when data is deserialized. Environment secrets can be extracted
when the vulnerable path permits secret loading.

## Why it matters (impact)

In a healthcare deployment using affected paths, exposed service credentials could enable access
to connected systems. A healthcare breach is not established by the advisory.

## OWASP LLM Top-10 mapping

{% include current-mapping-note.md %}

## CVE entry

| CVE | Affected component | Year | CVSS | Affected versions | Fixed versions | Exploitation prerequisites |
| --- | --- | --- | --- | --- | --- | --- |
| CVE-2025-68664 | langchain-core | 2025 | 9.3 (CVSS v3.1; maintainer) | >=1.0.0, <1.2.5; also <0.3.81 | 1.2.5; 0.3.81 | Attacker-controlled serialized data reaches affected loading paths; secret extraction depends on secrets_from_env behavior. |

## Mitigations (pragmatic)

- Upgrade to a supported release containing the fix; review the advisory’s breaking changes.
- Keep restrictive object allowlists and secret-loading defaults; reject untrusted serialized
  manifests.
- Minimize runtime credentials and rotate exposed credentials when compromise is suspected.

## Detection

- Review deserialization errors, unexpected outbound requests, and use of exposed service
  credentials.
- Inventory streaming, cache, message-history, and document-loading paths listed in the advisory.

## Evidence

- [Primary source or framework guidance](https://github.com/langchain-ai/langchain/security/advisories/GHSA-c67j-w6g6-q2cm) — source dated 2025-12-23.
- Reviewed 2026-09-13.

## Evidence status

Maintainer-confirmed software vulnerability; healthcare consequences are deployment-dependent
scenarios. The fixed versions below address this advisory and are not a guarantee against later
vulnerabilities.

## Question for community partnership

If an assistant’s credentials are exposed, can the organization explain which records were
reachable and support affected people?
