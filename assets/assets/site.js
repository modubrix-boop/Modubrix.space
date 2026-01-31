(function(){
  const $ = (sel, el=document) => el.querySelector(sel);
  const $$ = (sel, el=document) => Array.from(el.querySelectorAll(sel));

  // --- Language (ZH/EN) ---
  const saved = localStorage.getItem("lang") || "zh";
  function setLang(lang){
    localStorage.setItem("lang", lang);
    $$("[data-i18n]").forEach(node=>{
      const key = node.getAttribute("data-i18n");
      const zh = node.getAttribute("data-zh") || "";
      const en = node.getAttribute("data-en") || "";
      node.textContent = (lang === "en") ? en : zh;
    });
    $$(".lang-btn").forEach(b=>{
      b.classList.toggle("active", b.dataset.lang === lang);
    });
  }

  document.addEventListener("click", (e)=>{
    const btn = e.target.closest(".lang-btn");
    if(btn) setLang(btn.dataset.lang);
  });

  // init
  setLang(saved);

  // --- Horizontal scroll (cards) ---
  const cards = $(".cards");
  if(cards){
    const left = $("#scrollLeft");
    const right = $("#scrollRight");

    function scrollByCard(dir){
      const step = Math.min(420, cards.clientWidth * 0.7);
      cards.scrollBy({left: dir * step, behavior:"smooth"});
    }
    if(left) left.addEventListener("click", ()=>scrollByCard(-1));
    if(right) right.addEventListener("click", ()=>scrollByCard(1));

    // keyboard support
    document.addEventListener("keydown",(e)=>{
      if(e.key === "ArrowLeft") scrollByCard(-1);
      if(e.key === "ArrowRight") scrollByCard(1);
    });
  }
})();

