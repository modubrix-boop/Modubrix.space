function applyLang(lang) {
  document.querySelectorAll('[data-en]').forEach(el => {
    el.textContent = el.getAttribute('data-' + lang);
  });

  const btnZh = document.getElementById('btn-zh');
  const btnEn = document.getElementById('btn-en');
  if (btnZh && btnEn) {
    btnZh.classList.toggle('active', lang === 'zh');
    btnEn.classList.toggle('active', lang === 'en');
  }
}

function setLang(lang) {
  localStorage.setItem('siteLang', lang);
  applyLang(lang);
}

function highlightActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (!href) return;
    // 支持子目录 notes/
    const current = path;
    const normalizedHref = href.split('/').pop();
    a.classList.toggle('active', normalizedHref === current);
  });

  // 如果在 notes/ 子页面：高亮 Notes
  if (window.location.pathname.includes('/notes/')) {
    document.querySelectorAll('nav a').forEach(a => {
      if (a.getAttribute('href') === 'materials-notes.html') a.classList.add('active');
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem('siteLang') || 'zh';
  applyLang(saved);
  highlightActiveNav();
});
