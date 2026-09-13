# Healthcare AI Threat Catalog

A community resource connecting healthcare AI security, data protection, and continuity of care.
Maintained by Andrea Downing / The Light Collective.

- [Published website](https://amdowning.github.io/healthcare-llm-threat-model/)
- [September 2026 additions](additions/2026-09/index.md)
- [Evidence and OWASP mapping policy](docs/methodology.md)
- [Contribute an update](CONTRIBUTING.md)
- [Website and deployment plan](docs/deployment-plan.md)

The September update includes four incident cards, two CVE entries, and five healthcare
scenarios. Existing category URLs and legacy identifiers remain stable.

## Local review

Requires Node.js and Ruby with Bundler.

```bash
npm install
npm run build:index
npm run lint
bundle install
bundle exec jekyll build
python3 scripts/check-site.py
bundle exec jekyll serve
```

Visit http://127.0.0.1:4000/healthcare-llm-threat-model/ after the preview starts.
Contributions are reviewed through pull requests. No identifiable health data is needed.
