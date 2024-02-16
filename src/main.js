import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const fetchImageForm = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const userInput = document.querySelector('input');
const container = document.querySelector('.container');

// Function showing the loader
const showLoader = () => {
  const loader = document.createElement('span');
  loader.classList.add('loader');
  container.append(loader);
};

// Function hiding the loader
const hidingLoader = () => {
  const loader = document.querySelector('.loader');
  if (loader) {
    loader.remove();
  }
};

fetchImageForm.addEventListener('submit', event => {
  showLoader();
  event.preventDefault(); 
  
  gallery.innerHTML = '';
  const pixabayApiKey = '42400311-c577e995298d386a6e7116ddb';
  const query = userInput.value.trim();
  
  //Make a request to the API
  fetch(
    `https://pixabay.com/api/?key=${pixabayApiKey}&q=${encodeURIComponent(
      query
    )}&image_type=photo&orientation=horizontal&safesearch=true`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      if (!data.hits.length) {
        iziToast.error({
          title: '',
          backgroundColor: '#EF4040',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'center',
        });
      } else {
        const markup = data.hits
        .map(data => {
            return ` <li class="gallery-item">
      <a href="${data.webformatURL}">
        <img class="gallery-image" src="${data.webformatURL}" alt="${data.tags}">
      </a>
      <div class="image-details">
        <div class="image-text">
        <p><b class="image-text-width">Likes: </b>${data.likes}</p>
        <p><b class="image-text-width">Views: </b>${data.views}</p>
        <p><b class="image-text-width">Comments: </b>${data.comments}</p>
        <p><b class="image-text-width">Downloads: </b>${data.downloads}</p>
        </div>
      </div>
    </li>`;
          })
          .join('');
      gallery.insertAdjacentHTML('afterbegin', markup);
      const lightbox = new SimpleLightbox('.gallery a', options);
      lightbox.on('show.simplelightbox');
      lightbox.refresh();
      fetchPicturesForm.reset();
      }
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      hidingLoader();
    });
});

const options = {
  captions: true,
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  animation: 250,
};