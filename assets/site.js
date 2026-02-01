(function(){

const saved = localStorage.getItem("lang") || "zh";

function setLang(lang){
localStorage.setItem("lang",lang);

document.querySelectorAll("[data-i18n]").forEach(n=>{
const zh=n.getAttribute("data-zh");
const en=n.getAttribute("data-en");
n.textContent = lang==="en"? en: zh;
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
