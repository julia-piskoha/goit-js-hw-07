import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
const galleryList = makeGalleryItems(galleryItems);
gallery.insertAdjacentHTML("beforeend", galleryList);
gallery.addEventListener("click", (e) => {
  e.preventDefault();
  const image = e.target.classList.contains(".gallery");
  if (!image) {
    return;
  }
  const instance = basicLightbox.create(
    `<img src="${e.target.dataset.source}" width="800" height="600"/>`,
    {
      onShow: (instance) => {
        gallery.addEventListener("keydown", onEscapeButton);
      },
      onClose: (instance) => {
        gallery.removeEventListener("keydown", onEscapeButton);
      },
    }
  );
  instance.show();
  function onEscapeButton(evt) {
    if (evt.key === "Escape") {
      instance.close();
    }
  }
});
function makeGalleryItems(galleryItems) {
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
        </div>
        `;
    })
    .join("");
}
