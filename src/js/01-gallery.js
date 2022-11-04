// Add imports above this line
import { galleryItems } from './gallery-items';

import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";


console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);
galleryContainer.addEventListener("click", createGalleryMarkup)

// let instance ;

let gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
  <div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`;
    })
    .join("");
}

// function onOpenModalImageClick(e) {
//   window.addEventListener("keydown", onCloseEscKeyPress);
//   e.preventDefault();
  
//   if (e.target.nodeName !== "IMG") {
//     return;
//   }
  
//   onImegeClick(e);
// };

// function onImegeClick(e) {
//   instance = basicLightbox.create(`
// <img src="${e.target.dataset.source}">`);
//   instance.show();
// }

// function onCloseEscKeyPress(e) {
//   if (e.code === "Escape") {
//     instance.close();
//     window.removeEventListener("keydown", onCloseEscKeyPress);
//     console.log(e.code);
//   }
// }