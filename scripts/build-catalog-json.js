const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
function walk(dir) {
  return fs.readdirSync(dir, {withFileTypes:true}).flatMap(entry => {
    const p = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(p) : p.endsWith('.md') ? [p] : [];
  });
}
const rows = [...walk('_threats'), ...walk('additions')].flatMap(p => {
  const fm = matter.read(p).data;
  if (!fm.id && !fm.evidence_type) return [];
  return [{id:fm.record_id || fm.id || p.replace(/\.md$/, ''), title:fm.title,
    slug:fm.slug || path.basename(p, '.md'), url:fm.permalink,
    summary:fm.summary || fm.description || '', tags:fm.tags || [],
    evidence_type:fm.evidence_type || 'category', updated:fm.last_reviewed || fm.last_updated || null,
    incident_date:fm.incident_date || null, source_published:fm.source_published || null,
    legacy_categories:fm.legacy_categories || (fm.id ? [fm.id] : []),
    owasp_2025:fm.owasp_2025 || [], mapping_version:fm.mapping_version || fm.id_scheme || null}];
});
fs.writeFileSync('assets/catalog.json', JSON.stringify(rows,null,2) + '\n');
console.log('Indexed ' + rows.length + ' entries.');
