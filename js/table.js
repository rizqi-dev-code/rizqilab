/* Merender tabel referensi kana ke dalam grid genkouyoushi, dengan filter tipe & tanda "dikuasai" */
(function () {
  const container = document.getElementById('kana-table');
  if (!container) return;

  const script = document.body.dataset.script; // 'hiragana' | 'katakana'
  const rows = script === 'hiragana' ? HIRAGANA : KATAKANA;
  const storeKey = 'kanaLab_mastered_' + script;

  function getMastered() {
    try { return new Set(JSON.parse(localStorage.getItem(storeKey) || '[]')); }
    catch (e) { return new Set(); }
  }
  function saveMastered(set) {
    try { localStorage.setItem(storeKey, JSON.stringify([...set])); } catch (e) {}
  }

  let mastered = getMastered();
  let activeFilter = 'all';

  function render() {
    container.innerHTML = '';
    rows.forEach(row => {
      if (activeFilter !== 'all' && row.type !== activeFilter) return;
      const group = document.createElement('div');
      group.className = 'row-group';
      group.innerHTML = `<h3>${row.label} <span class="tag">${TYPE_LABEL[row.type]}</span></h3>`;

      const grid = document.createElement('div');
      grid.className = 'kana-grid';

      row.chars.forEach(c => {
        const cell = document.createElement('button');
        cell.type = 'button';
        cell.className = 'kana-cell';
        cell.setAttribute('aria-label', `${c.k}, dibaca ${c.r}. Klik untuk menandai sudah dikuasai.`);
        const id = script + '_' + c.k;
        if (mastered.has(id)) cell.classList.add('mastered');
        cell.innerHTML = `
          <span class="stamp"></span>
          <span class="glyph">${c.k}</span>
          <span class="romaji">${c.r}</span>`;
        cell.addEventListener('click', () => {
          if (mastered.has(id)) mastered.delete(id); else mastered.add(id);
          saveMastered(mastered);
          cell.classList.toggle('mastered');
        });
        grid.appendChild(cell);
      });

      group.appendChild(grid);
      container.appendChild(group);
    });
  }

  document.querySelectorAll('.filter-bar button').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-bar button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.filter;
      render();
    });
  });

  render();
})();
