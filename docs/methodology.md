---
layout: "default"
title: "Evidence and framework mappings"
permalink: "/methodology/"
---

# Evidence and framework mappings

## What this resource includes

- **Incident:** an event reported by an affected organization or an authoritative public body.
- **Vulnerability:** a documented software weakness; a CVE does not establish exploitation.
- **Research:** an experimental finding, with publication status and study limits retained.
- **Scenario:** an illustrative healthcare application of a threat pattern; not an observed event.

Impact descriptions distinguish reported consequences from potential consequences. Company
statements are attributed and dated. Unknown counts stay unknown. CVSS measures technical
severity, not patient harm or the likelihood of exploitation in a particular care setting.

## Dates and coverage

September 2026 entries were reviewed on September 13, 2026. Incident date, source publication
date, and editorial review date are separate fields. This is a curated history, not a complete
24-month surveillance feed. Older cases remain when later findings or enduring lessons matter.
Existing research citations have been preserved; a new editorial date does not mean every
underlying study has been independently reproduced or revalidated.

## Versioned OWASP mappings

Existing LLM01–LLM10 identifiers and URLs retain the repository’s legacy 2023–24 meanings.
New cross-references explicitly use the 2025 edition. These are editorial topic mappings,
not assertions that every cited event was an LLM exploit.

| Legacy catalog topic | 2025 cross-reference | Interpretation |
| --- | --- | --- |
| LLM01: prompt injection | LLM01:2025 | Direct topic continuity |
| LLM02: output handling | LLM05:2025 | Direct topic continuity |
| LLM03: training poisoning | LLM04:2025 | Broader model/data scope |
| LLM04: model denial of service | LLM10:2025 | Resource exhaustion overlap; upstream outages differ |
| LLM05: supply chain | LLM03:2025 | Direct topic continuity |
| LLM06: disclosure | LLM02:2025 | Direct topic continuity |
| LLM07: connectors | LLM03:2025, LLM06:2025 | Partial overlap; review each connector boundary |
| LLM08: agency | LLM06:2025 | Direct topic continuity |
| LLM09: overreliance | LLM09:2025 | Broader misinformation scope |
| LLM10: model theft | LLM03:2025 | Related artifact-security concern; no exact replacement |

New scenarios also reference retrieval/embedding risk (LLM08:2025). This is not a claim that
the legacy ten pages exhaust the newer taxonomy.

Sources: [OWASP 2025 category index](https://genai.owasp.org/llm-top-10/) and
[OWASP agentic guidance](https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/).

OWASP’s [2026 resource page](https://genai.owasp.org/resource/owasp-genai-llm-top-10-2026/)
hosts a newer document with changed rankings. The download reviewed in this session retains
release-date placeholders, while the category index still displays 2025. This update pins
2025 mappings rather than silently renumbering existing pages. A future migration should record
the exact reviewed document version and maintain redirects and the legacy crosswalk.

## Community partnership

Review whether a person can understand a failure, reach a human, correct information, challenge
an action, and recover missed care. Assign an owner to each follow-up step. Do not shift
responsibility for organizational security onto people seeking care.

## Contributing evidence

Use public primary sources and synthetic examples. Do not submit identifiable health records,
credentials, leaked datasets, or instructions requiring access to someone else’s information.
Report a correction through the [contribution form](https://github.com/AMDowning/healthcare-llm-threat-model/issues/new?template=resource-update.yml).
