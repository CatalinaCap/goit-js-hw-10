!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},d=e.parcelRequireabb0;null==d&&((d=function(e){if(e in n)return n[e].exports;if(e in t){var d=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,d.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,n){t[e]=n},e.parcelRequireabb0=d);var i=d("eWrZJ"),a=document.querySelector(".breed-select"),c=document.querySelector(".loader"),o=document.querySelector(".error"),r=document.querySelector(".cat-info");document.addEventListener("DOMContentLoaded",(function(){c.classList.remove("hidden"),a.classList.add("hidden"),o.classList.add("hidden"),(0,i.fetchBreeds)().then((function(e){!function(e){e.forEach((function(e){var n=document.createElement("option");n.value=e.id,n.textContent=e.name,a.appendChild(n)}))}(e),a.classList.remove("hidden")})).catch((function(e){o.classList.remove("hidden")})).finally((function(){c.classList.add("hidden")}))})),a.addEventListener("change",(function(e){var n=e.target.value;n&&(c.classList.remove("hidden"),r.classList.add("hidden"),o.classList.add("hidden"),(0,i.fetchCatByBreed)(n).then((function(e){!function(e){var n=e.url,t=e.breeds[0],d=t.name,i=t.description,a=t.temperament;r.innerHTML='\n  <div class="cat-container">\n      <div class="cat-image">\n        <img src="'.concat(n,'" alt="').concat(d,'" width="400">\n      </div>\n      <div class="cat-details">\n        <h2>').concat(d,"</h2>\n        <p>").concat(i,"</p>\n        <p><strong>Temperament:</strong> ").concat(a,"</p>\n      </div>\n    </div>\n  "),r.classList.remove("hidden")}(e),r.classList.remove("hidden")})).catch((function(e){o.classList.remove("hidden")})).finally((function(){c.classList.add("hidden")})))}))}();
//# sourceMappingURL=index.74fc9c32.js.map
