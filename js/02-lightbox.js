import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const galleryList = makeGalleryItems(galleryItems);
gallery.insertAdjacentHTML("beforeend", galleryList);
var lightbox = new SimpleLightbox(".gallery__item", {
  captionsData: "alt",
  captionDelay: 250,
});
gallery.addEventListener("click", (e) => {
  e.preventDefault();
});

function makeGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`;
    })
    .join("");
}
