/* Merender header & footer yang sama di semua halaman, dan menandai nav aktif */
(function () {
  const header = document.getElementById("site-header");
  const footer = document.getElementById("site-footer");
  const page = document.body.dataset.page || "";

  if (header) {
    header.innerHTML = `
      <div class="nav-wrap">
        <a class="brand" href="index.html">
          <span class="glyph">あ</span>
          <span class="word">RizqiLab</span>
        </a>
        <nav class="main">
          <a href="index.html" data-key="home">Beranda</a>
          <a href="hiragana.html" data-key="hiragana">Hiragana</a>
          <a href="katakana.html" data-key="katakana">Katakana</a>
          <a href="tulis.html" data-key="tulis">Cara Menulis</a>
          <a href="flashcard.html" data-key="flashcard">Flashcard</a>
          <a href="kuis.html" data-key="kuis">Kuis</a>
        </nav>
      </div>`;
    header.querySelectorAll("nav.main a").forEach((a) => {
      if (a.dataset.key === page) a.classList.add("active");
    });
  }

  if (footer) {
    footer.innerHTML = `
      <p>Dibuat untuk latihan mandiri &mdash; huruf Hiragana &amp; Katakana, dua sistem aksara dasar bahasa Jepang.</p>`;
  }
})();
