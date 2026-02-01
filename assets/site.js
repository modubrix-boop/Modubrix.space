/* ========= Language switch ========= */
(function(){
  const saved = localStorage.getItem("lang") || "zh";

  function setLang(lang){
    localStorage.setItem("lang",lang);

    document.querySelectorAll("[data-i18n]").forEach(n=>{
      const zh=n.getAttribute("data-zh");
      const en=n.getAttribute("data-en");
      if(zh && en){
        n.textContent = (lang==="en") ? en : zh;
      }
    });

    document.querySelectorAll(".lang-btn").forEach(b=>{
      b.classList.toggle("active", b.dataset.lang===lang);
    });
  }

  document.addEventListener("click",e=>{
    const b=e.target.closest(".lang-btn");
    if(b) setLang(b.dataset.lang);
  });

  setLang(saved);
})();


/* ========= Card carousel arrows ========= */

document.addEventListener("DOMContentLoaded", function(){

  const scroller = document.querySelector(".cards");
  if(!scroller) return;

  const prevBtn = document.querySelector("[data-scroll='prev']");
  const nextBtn = document.querySelector("[data-scroll='next']");

  const STEP = 340; // 每次滚动宽度（卡片宽度）

  if(prevBtn){
    prevBtn.addEventListener("click", function(){
      scroller.scrollBy({ left: -STEP, behavior: "smooth" });
    });
  }

  if(nextBtn){
    nextBtn.addEventListener("click", function(){
      scroller.scrollBy({ left: STEP, behavior: "smooth" });
    });
  }

  /* 键盘左右键支持 */
  document.addEventListener("keydown", function(e){
    if(e.key === "ArrowRight"){
      scroller.scrollBy({ left: STEP, behavior: "smooth" });
    }
    if(e.key === "ArrowLeft"){
      scroller.scrollBy({ left: -STEP, behavior: "smooth" });
    }
  });

});
