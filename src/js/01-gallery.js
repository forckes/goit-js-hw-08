import "../css/01-gallery.css";
import "../css/common.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from "./galery-items";

const galleryContainer = document.querySelector(".gallery");
const galleryImg = document.querySelector(".gallery__img");

const markup = galleryItems
	.map(
		({ preview, original, description }) =>
			`<a class="gallery__item" href="${preview}"><img class="gallery__img" src="${original}" alt="${description}"/></a>`
	)
	.join("");

galleryContainer.insertAdjacentHTML("beforeend", markup);

var lightbox = new SimpleLightbox(".gallery a", {
	captionsData: "alt",
	captionDelay: 250
});
