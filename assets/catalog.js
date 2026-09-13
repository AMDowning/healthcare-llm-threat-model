(() => {
  const form = document.getElementById('catalog-controls');
  const search = document.getElementById('catalog-search');
  const kind = document.getElementById('catalog-kind');
  const risk = document.getElementById('catalog-risk');
  const items = Array.from(document.querySelectorAll('.catalog-item'));
  const params = new URLSearchParams(location.search);
  let tag = params.get('tag') || '';
  search.value = params.get('q') || '';
  kind.value = params.get('kind') || '';
  risk.value = params.get('risk') || '';
  function apply() {
    const terms = search.value.toLowerCase().trim().split(/\s+/).filter(Boolean);
    let count = 0;
    for (const item of items) {
      const show = terms.every(term => item.dataset.search.includes(term)) &&
        (!kind.value || item.dataset.kind === kind.value) &&
        (!risk.value || item.dataset.risk.split(',').includes(risk.value)) &&
        (!tag || item.dataset.tags.split(',').includes(tag));
      item.hidden = !show;
      if (show) count++;
    }
    document.getElementById('catalog-count').textContent = count + ' of ' + items.length + ' entries' + (tag ? ' · tag: ' + tag : '');
    document.getElementById('catalog-empty').hidden = count !== 0;
    const next = new URLSearchParams();
    if (search.value) next.set('q', search.value);
    if (kind.value) next.set('kind', kind.value);
    if (risk.value) next.set('risk', risk.value);
    if (tag) next.set('tag', tag);
    history.replaceState(null, '', location.pathname + (next.size ? '?' + next : ''));
  }
  form.addEventListener('submit', event => { event.preventDefault(); apply(); });
  form.addEventListener('input', apply);
  form.addEventListener('change', apply);
  form.addEventListener('reset', () => { tag = ''; setTimeout(apply, 0); });
  apply();
})();
