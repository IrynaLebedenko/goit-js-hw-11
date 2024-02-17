import{S as u,i as a}from"./assets/vendor-5b791d57.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function o(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();const m=document.querySelector(".form"),c=document.querySelector(".gallery"),d=document.querySelector("input"),p=document.querySelector(".container"),f=()=>{const r=document.createElement("span");r.classList.add("loader"),p.append(r)},l=()=>{const r=document.querySelector(".loader");r&&r.remove()},g={captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",animation:250},h=new u(".gallery a",g);m.addEventListener("submit",r=>{f(),r.preventDefault(),c.innerHTML="";const i="42400311-c577e995298d386a6e7116ddb",s=d.value.trim();if(!s){a.error({backgroundColor:"#EF4040",message:"Please. enter a search query!",position:"topRight"}),l();return}fetch(`https://pixabay.com/api/?key=${i}&q=${encodeURIComponent(s)}&image_type=photo&orientation=horizontal&safesearch=true`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()}).then(o=>{if(!o.hits.length)a.error({title:"",backgroundColor:"#EF4040",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});else{const t=o.hits.map(e=>` <li class="gallery-item">
      <a href="${e.webformatURL}">
        <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}">
      </a>
      <div class="image-details">
        <div class="image-text">
        <p><b class="image-text-width">Likes: </b>${e.likes}</p>
        <p><b class="image-text-width">Views: </b>${e.views}</p>
        <p><b class="image-text-width">Comments: </b>${e.comments}</p>
        <p><b class="image-text-width">Downloads: </b>${e.downloads}</p>
        </div>
      </div>
    </li>`).join("");c.insertAdjacentHTML("afterbegin",t),h.refresh(),fetchPicturesForm.reset()}}).catch(o=>{console.log(o)}).finally(()=>{l()})});
//# sourceMappingURL=commonHelpers.js.map
