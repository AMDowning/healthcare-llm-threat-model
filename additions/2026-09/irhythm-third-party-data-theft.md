---
layout: "case"
title: "iRhythm: health data risk in third-party business applications"
description: "Health information can travel into administrative applications outside clinical systems. Theft may enable targeted fraud, unwanted disclosure, or coercion; these are potential consequences, not outcomes established by this filing."
permalink: "/additions/2026-09/irhythm-third-party-data-theft/"
record_id: "HC-INC-002"
evidence_type: "incident"
last_reviewed: "2026-09-13"
tags: ["privacy","social-engineering","supply-chain"]
legacy_categories: ["LLM05","LLM06","LLM07"]
owasp_2025: []
source_url: "https://www.sec.gov/Archives/edgar/data/1388658/000138865826000055/irtc-20260610.htm"
incident_date: "2026-06-08"
source_published: "2026-06-15"
---

## What happened

iRhythm identified unauthorized activity on June 8, 2026. Its June 15 SEC filing confirmed data
exfiltration from third-party-hosted business applications through social engineering. A threat
actor claimed to hold proprietary and personal information, including patient health information,
and demanded payment.

## Why it matters (impact)

Health information can travel into administrative applications outside clinical systems. Theft may
enable targeted fraud, unwanted disclosure, or coercion; these are potential consequences, not
outcomes established by this filing.

## OWASP LLM Top-10 mapping

{% include infrastructure-mapping-note.md %}

## Mitigations (pragmatic)

- Inventory sensitive data in business applications and reduce unnecessary copies and retention.
- Require phishing-resistant authentication and independently verified account recovery and
  help-desk requests.
- Restrict bulk exports and application grants; revoke compromised sessions and credentials during
  response.

## Detection

- Monitor unusual exports, account recovery, new application authorizations, and access from
  unexpected locations.
- Investigate bulk access together with identity events rather than treating them as unrelated
  alerts.

## Evidence

- [Primary source or framework guidance](https://www.sec.gov/Archives/edgar/data/1388658/000138865826000055/irtc-20260610.htm) — source dated 2026-06-15.
- Reviewed 2026-09-13.

## Evidence status

Company-confirmed exfiltration. The filing reported no identified effect on clinical or
medical-device systems at that time. The cited source does not establish an LLM exploit, the final
affected population, or downstream patient harms. Do not equate the company’s total patient
population with the number affected.

## Question for community partnership

Can people find out which information was exposed, what that means for them, and where to get help
without repeating their medical history?
