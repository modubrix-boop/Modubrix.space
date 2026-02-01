(function () {
  const $ = (sel, el = document) => el.querySelector(sel);
  const $$ = (sel, el = document) => Array.from(el.querySelectorAll(sel));

  // -------- Language Switch (ZH / EN) --------
  const saved = localStorage.getItem("lang") || "zh";

  function setLang(lang) {
    localStorage.setItem("lang", lang);

    // swap all i18n nodes
    $$("[data-i18n]").forEach((node) => {
      const zh = node.getAttribute("data-zh") || "";
      const en = node.getAttribute("data-en") || "";
      node.textContent = lang === "en" ? en : zh;
    });

    // active button style
    $$(".lang-btn").forEach((b) => {
      b.classList.toggle("active", b.dataset.lang === lang);
    });
  }

  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".lang-btn");
    if (btn) setLang(btn.dataset.lang);
  });

  // init lang on load
  setLang(saved);

  // -------- Horizontal scroll (IG-like) --------
  const cards = $(".cards");
  if (cards) {
    const left = $("#scrollLeft");
    const right = $("#scrollRight");

    function scrollByStep(dir) {
      const step = Math.min(420, cards.clientWidth * 0.75);
      cards.scrollBy({ left: dir * step, behavior: "smooth" });
    }

    if (left) left.addEventListener("click", () => scrollByStep(-1));
    if (right) right.addEventListener("click", () => scrollByStep(1));

    // keyboard support
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") scrollByStep(-1);
      if (e.key === "ArrowRight") scrollByStep(1);
    });

    // touch hint: snap already handled by CSS; keep smoothness
  }
})();
