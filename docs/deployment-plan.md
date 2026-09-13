# Website and deployment plan

Prepared September 13, 2026 for Andrea Downing / The Light Collective.

## Recommendation

Keep GitHub Pages for this release. Improve navigation and content within the existing Jekyll
site, retaining the current public URL. A hosting move is not needed to make a static evidence
catalog easier to navigate. The repository stays the editable source of truth.

The release includes a restrained TLC-color homepage, plain-language entry points, searchable
cards, evidence-type and category filters, mobile layouts, and direct links to contribution and
methodology pages. The Markdown card structure and existing category slugs remain intact.

## Current publishing uncertainty

The public homepage returned HTTP 200 on September 13. Its rendered content differs from the
checked-out main branch: it has an older full introduction and a former-account link. Response
headers report a last-modified date of April 5, 2026. This suggests the publishing source or
deployment is out of step with main; the exact cause is not established. Repository Pages
settings require a maintainer to inspect them. Do not assume merging alone will update the site.

The checked-in configuration previously lacked the threat collection and project base path;
the threat layout omitted its body; filters expected metadata not present in the entries.
This release repairs those source problems. It also removes a CSS import that referenced an
unset theme. The site needs no externally loaded fonts, analytics, or scripts for its core UI.

## Deploy this release on the existing URL

1. Review and merge the update pull request after its build and content checks pass.
2. Open repository Settings → Pages. Under Build and deployment, inspect the current source.
3. For this Jekyll release, select Deploy from a branch, then main and /(root), and save.
   The root is required because layouts, collections, assets, and configuration live there.
   Do not select /docs. If the site already uses GitHub Actions, retain that mode only with
   a verified workflow that builds the repository root and deploys its output.
4. Watch the Pages deployment in Actions until it succeeds. Record the deployed commit.
5. Open the homepage and catalog. Verify the September cards, search, filters, mobile navigation,
   CVE tables, contribution form, and a bookmarked legacy category URL.
6. If the site is wrong, revert the merge and redeploy the previous known-good source.

Reference: [GitHub publishing-source instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).
GitHub documents branch-root and /docs sources and custom Actions builds. The pull-request
build added here validates and stores preview output; it does not publish production.

## Next design phase: navigation and editorial usability

Proposed navigation: Start here · Browse catalog · Recent incidents · Safeguards · About/evidence.
Keep IDs in detail views; use plain-language questions and consequences in browsing views.

| Work package | Deliverable | Acceptance criterion | Planning estimate |
| --- | --- | --- | --- |
| Co-design and content inventory | 3–5 short sessions across community, clinical, and security roles | Reviewers can find a relevant case and explain its evidence status | 1–2 working days plus scheduling |
| Navigation and card refinement | Impact filters, source dates, related safeguards, readable mobile tables | Common tasks take no more than two navigation decisions | 2–3 working days |
| Editorial workflow | Reviewed entry template, correction queue, change history | A nontechnical contributor submits a usable correction without editing code | 1–2 working days |
| Accessibility and release review | Keyboard, contrast, screen-reader and mobile checks | WCAG 2.2 AA issues identified in review are resolved or explicitly documented | 1–2 working days |

These are scope estimates, not a quote or promised delivery schedule. This release already
provides basic search/filter navigation; the next phase should be driven by observed usability.

## Hosting alternatives

| Option | Fit | Trade-off / next step |
| --- | --- | --- |
| Existing Jekyll + GitHub Pages | Recommended now: static public evidence resource | Maintain Markdown; inspect the existing publishing source before release |
| Astro or another static generator on GitHub Pages | Consider if the team wants more reusable interface components | Migration and redirect testing; validate tooling with a small prototype first |
| Vercel | Consider if future requirements need its preview or application services | Account is not connected in this session; verify requirements, permissions, and pricing before choosing |
| Custom TLC domain | Optional branding step with either static approach | Confirm the desired subdomain and DNS ownership; preserve redirects from old links |

Do not add a database, login, or AI chatbot unless a defined user need warrants the operating
cost and information-governance work. Local browser search is sufficient for this collection.

## Maintenance

Assign an editor for incident follow-ups, a technical reviewer for CVEs, and community reviewers
for the clarity and usefulness of harm/follow-up questions. Review unresolved incident claims
when authoritative updates appear. A suggested quarterly review is an editorial practice;
this plan does not create a scheduled automation.
