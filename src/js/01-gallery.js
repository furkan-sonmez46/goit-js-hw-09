import "../js/init";

import { images } from '../data/images.js';
// Kullanılacak kısmın import edilmesi
import SimpleLightbox from "simplelightbox";
// Ek stillerin eklenmesi
import "simplelightbox/dist/simple-lightbox.min.css";


const gallery = document.querySelector('.gallery');

const galleryMap = images
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery-item">
  <a class="gallery-link" href="${original.slice(1, -1)}">
    <img
      class="gallery-image"
      src="${preview.slice(1, -1)}"
      alt="${description}"
    />
  </a>
</li>
`
  )
  .join('');

gallery.innerHTML = galleryMap;

new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
});
