import{i as a,S as l}from"./assets/vendor-5b791d57.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const m=document.querySelector(".form"),c=document.querySelector(".gallery"),u=document.querySelector("input"),d=document.querySelector(".container"),p=()=>{const i=document.createElement("span");i.classList.add("loader"),d.append(i)},f=()=>{const i=document.querySelector(".loader");i&&i.remove()};m.addEventListener("submit",i=>{p(),i.preventDefault(),c.innerHTML="";const s="42400311-c577e995298d386a6e7116ddb",n=u.value.trim();fetch(`https://pixabay.com/api/?key=${s}&q=${encodeURIComponent(n)}&image_type=photo&orientation=horizontal&safesearch=true`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()}).then(o=>{if(!o.hits.length)a.error({title:"",backgroundColor:"#EF4040",message:"Sorry, there are no images matching your search query. Please try again!",position:"center"});else{const e=o.hits.map(r=>` <li class="gallery-item">
      <a href="${r.webformatURL}">
        <img class="gallery-image" src="${r.webformatURL}" alt="${r.tags}">
      </a>
      <div class="image-details">
        <div class="image-text">
        <p><b class="image-text-width">Likes: </b>${r.likes}</p>
        <p><b class="image-text-width">Views: </b>${r.views}</p>
        <p><b class="image-text-width">Comments: </b>${r.comments}</p>
        <p><b class="image-text-width">Downloads: </b>${r.downloads}</p>
        </div>
      </div>
    </li>`).join("");c.insertAdjacentHTML("afterbegin",e);const t=new l(".gallery a",g);t.on("show.simplelightbox"),t.refresh(),fetchPicturesForm.reset()}}).catch(o=>{console.log(o)}).finally(()=>{f()})});const g={captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",animation:250};
//# sourceMappingURL=commonHelpers.js.map
