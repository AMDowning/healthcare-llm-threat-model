const fs = require('fs'); const path = require('path'); const matter = require('gray-matter');
const required = ["id","title","slug","summary","tags","last_updated"];
function walk(dir){return fs.readdirSync(dir).flatMap(f=>{const p=path.join(dir,f);return fs.statSync(p).isDirectory()?walk(p):[p];});}
const md = walk(".").filter(p=>p.endsWith(".md") && !p.includes("node_modules") && !p.includes("_site") && !p.includes("vendor"));
let ok = true;
for (const file of md) {
  const fm = matter.read(file).data || {};
  if (file.startsWith("_threats/")) {
    const missing = required.filter(k => !(k in fm));
    if (missing.length) { ok=false; console.log(`MISSING in ${file}: ${missing.join(",")}`); }
    if (fm.slug && !/^[a-z0-9-]+$/.test(fm.slug)) { ok=false; console.log(`BAD SLUG in ${file}: ${fm.slug}`); }
    if (fm.id_scheme !== 'legacy-2023-24' || !Array.isArray(fm.owasp_2025)) {
      ok=false; console.log(`UNVERSIONED MAPPING in ${file}`);
    }
  }
  if (file.startsWith('additions/2026-09/') && !file.endsWith('/index.md')) {
    const fields = ['record_id', 'title', 'permalink', 'evidence_type', 'last_reviewed',
      'source_url', 'legacy_categories', 'owasp_2025'];
    const missing = fields.filter(k => !(k in fm));
    if (missing.length) { ok=false; console.log(`MISSING in ${file}: ${missing.join(',')}`); }
    if (!['incident','vulnerability','scenario'].includes(fm.evidence_type)) {
      ok=false; console.log(`BAD EVIDENCE TYPE in ${file}`);
    }
    if (!/^\d{4}-\d{2}-\d{2}$/.test(fm.last_reviewed || '')) {
      ok=false; console.log(`BAD REVIEW DATE in ${file}`);
    }
    if (fm.evidence_type === 'incident' && (!fm.incident_date || !fm.source_published || fm.owasp_2025?.length)) {
      ok=false; console.log(`INCIDENT EVIDENCE OR MAPPING ERROR in ${file}`);
    }
    if (!Array.isArray(fm.legacy_categories) || !Array.isArray(fm.owasp_2025)) {
      ok=false; console.log(`BAD CATEGORY ARRAYS in ${file}`);
    }
  }
}
if (!ok) process.exit(3);
console.log("FRONTMATTER_OK");
