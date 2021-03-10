(()=>{"use strict";iughg,function(e){let t=document.querySelector("#timer-hours"),n=document.querySelector("#timer-minutes"),o=document.querySelector("#timer-seconds"),r=document.querySelector(".timer-numbers");function a(e){return e<10&&(e="0"+e),e}!function e(){let l=function(){let e=(new Date(undefined).getTime()-(new Date).getTime())/1e3,t=a(Math.floor(e%60)),n=a(Math.floor(e/60%60));return{timeRemaining:e,hours:a(Math.floor(e/60/60)),minutes:n,seconds:t}}();if(t.textContent=l.hours,n.textContent=l.minutes,o.textContent=l.seconds,l.timeRemaining>0)setTimeout(e,1e3);else{let a;clearTimeout(e),t.textContent="",n.textContent="",o.textContent="",a=document.createElement(a),a.innerHTML="<h1>До новых акций</h1>",r.append(a)}}()}(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),n=(document.querySelector(".close-btn"),t.querySelectorAll("ul>li")),o=()=>{t.style.transform&&"translate(-100%)"!==t.style.transform?t.style.transform="translate(-100%)":t.style.transform="translate(0)"};e.addEventListener("click",o),t.addEventListener("click",(e=>{let r=e.target;r!==t&&(r=r.parentNode),r.classList.contains("close-btn")&&o(),n.forEach((e=>{r&&o()}))}))})(),(()=>{const e=document.querySelector(".popup");document.querySelectorAll(".popup-btn").forEach((t=>{t.addEventListener("click",(()=>{e.style.display="block"}))})),e.addEventListener("click",(t=>{let n=t.target;n.classList.contains("popup-close")?e.style.display="none":n=n.closest(".popup-content")}))})(),(()=>{const e=document.querySelector(".service-header"),t=e.querySelectorAll(".service-header-tab"),n=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{let o=e.target;o=o.closest(".service-header-tab"),o&&t.forEach(((e,t)=>{e===o&&(e=>{for(let t=0;t<n.length;t++)e===t?n[t].classList.remove("d-none"):n[t].classList.add("d-none")})(t)}))}))})(),(()=>{const e=document.querySelectorAll(".portfolio-item"),t=(document.querySelectorAll(".portfolio-btn"),document.querySelectorAll(".dot")),n=document.querySelector(".portfolio-content");let o,r=0;const a=(e,t,n)=>{e[t].classList.remove(n)},l=(e,t,n)=>{e[t].classList.add(n)},c=()=>{a(e,r,"portfolio-item-active"),a(t,r,"dot-active"),r++,r>=e.length&&(r=0),l(e,r,"portfolio-item-active"),t[r].classList.remove("d-none"),l(t,r,"dot-active")},s=(e=1500)=>{o=setInterval(c,e)};n.addEventListener("click",(n=>{n.preventDefault();let o=n.target;a(e,r,"portfolio-item-active"),a(t,r,"dot-active"),o.matches(".portfolio-btn, .dot")&&(o.matches("#arrow-right")?r++:o.matches("#arrow-left")?r--:o.matches(".dot")&&t.forEach(((e,t)=>{e===o&&(r=t)})),r>=e.length&&(r=0),r<0&&(r=e.length-1),l(e,r,"portfolio-item-active"),l(t,r,"dot-active"))})),n.addEventListener("mouseover",(e=>{(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&clearInterval(o)})),n.addEventListener("mouseout",(e=>{(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&s()})),s()})(),(()=>{const e=document.querySelectorAll(".command__photo");for(let t=0;t<=e.length-1;t++)e[t].addEventListener("mouseenter",(e=>{let t=e.target.src;e.target.src=e.target.dataset.img,e.target.dataset.img=t})),e[t].addEventListener("mouseout",(e=>{let t=e.target.src;e.target.src=e.target.dataset.img,e.target.dataset.img=t}))})(),((e=100)=>{const t=document.querySelector(".calc-block"),n=document.querySelector(".calc-type"),o=document.querySelector(".calc-square"),r=document.querySelector(".calc-day"),a=document.querySelector(".calc-count"),l=document.getElementById("total");t.addEventListener("change",(t=>{const c=t.target;(c.matches("select")||c.matches("input"))&&(()=>{let t=0,c=1,s=1;const u=n.options[n.selectedIndex].value,d=+o.value;a.value>1&&(c+=(a.value-1)/10),r.value&&r.value<5?s*=2:r.value&&r.value<10&&(s*=1.5),u&&d&&(t=e*u*d*c*s),l.textContent=t})()}));let c=document.querySelectorAll(".calc-item"),s=document.querySelectorAll(".top-form"),u=document.getElementById("form3-name"),d=document.getElementById("form2-name"),i=document.getElementById("form2-message"),m=document.getElementById("form2-phone"),v=document.getElementById("form2-email");c.forEach((e=>{e.addEventListener("input",(()=>e.value=e.value.replace(/\D/g,"")))})),u.addEventListener("input",(()=>u.value=u.value.replace(/\w/g,""))),d.addEventListener("input",(()=>d.value=d.value.replace(/\w/g,""))),d.addEventListener("blur",(()=>d.value=d.value.replace(/^[а-я]/g,(e=>e.toUpperCase)))),i.addEventListener("input",(()=>i.value=i.value.replace(/\w/g,""))),m.addEventListener("input",(()=>m.value=m.value.replace(/\D[^()-]/g,""))),v.addEventListener("input",(()=>v.value=v.value.replace(/[^w\.@]/gi,""))),s.forEach((e=>{e.addEventListener("blur",(()=>s.value=s.value.replace(/(^\s)(\s\s)()/g,"(^S)(s)")))}))})(),(()=>{const e=document.getElementById("form1"),t=document.createElement("div");t.style.cssText="font-size: 2rem",e.addEventListener("submit",(n=>{n.preventDefault(),e.appendChild(t);const o=new XMLHttpRequest;o.addEventListener("readystatechange",(()=>{t.textContent="Загрузка...",4===o.readyState&&(200===o.status?t.textContent="Спасибо! Мы скоро с вами свяжемся!":(t.textContent="Что-то пошло не так...",console.error(o.status)))})),o.open("POST","./server.php"),o.setRequestHeader("Content-Type","application/json");const r=new FormData(e);let a={};r.forEach(((e,t)=>{a[t]=e})),o.send(JSON.stringify(a))}))})()})();