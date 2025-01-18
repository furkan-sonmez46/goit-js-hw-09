import { images } from '../data/images.js';

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
