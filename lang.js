function setLang(lang) {
  document.querySelectorAll('[data-en]').forEach(el => {
    el.textContent = el.getAttribute('data-' + lang);
  });

  document.querySelectorAll('.lang button').forEach(btn => {
    btn.classList.remove('active');
  });

  document.getElementById('btn-' + lang).classList.add('active');
}

document.addEventListener("DOMContentLoaded", () => {
  setLang('zh');
});

