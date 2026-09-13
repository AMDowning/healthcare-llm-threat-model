# Contributing

## Suggest an update without writing code

1. Open the [resource update form](https://github.com/AMDowning/healthcare-llm-threat-model/issues/new?template=resource-update.yml).
2. Give the source URL, incident or publication date, and the correction or addition.
3. Explain what is documented and what is a possible healthcare consequence.
4. Include practical safeguards and a question for community partnership when possible.

The previous spreadsheet link pointed to a file absent from the repository. The issue form
replaces that broken route and supports contributions from nontechnical reviewers.
Do not include patient records, credentials, or private breach data.

## Edit the resource

- Category pages live in `_threats/`; retain their legacy IDs and URLs.
- Dated cards live in `additions/YYYY-MM/`. Use the September cards as examples.
- Pin OWASP identifiers to an edition; follow [the evidence policy](docs/methodology.md).
- Record incident date, source date, and actual review date separately.
- CVEs need affected/fixed versions, prerequisites, score provenance, and primary advisories.
- Do not infer a breach count from an organization’s total population.
- Treat recommendations as proposed controls, not claims about controls already in place.

Create a branch and submit a pull request. Run `npm run build:index`, `npm run lint`,
`bundle exec jekyll build`, and `python3 scripts/check-site.py` before requesting review.
The generated JSON index must match the source metadata.

## Link review

The existing Link Health workflow checks sources and rendered pages. Some external sources
block automated requests; investigate failures rather than deleting supporting evidence.
Use `make linkcheck` where Docker or Lychee is installed.
