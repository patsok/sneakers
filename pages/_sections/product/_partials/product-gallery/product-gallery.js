import Splide from '@splidejs/splide';
import '@splidejs/splide/css/skyblue';

var splide = new Splide("#main-slider", {
    // width: 445,
    height: 445,
    pagination: false,
    cover: true,
    breakpoints: {
        850: {
            height: 300,
        },
    }
});

var thumbnails = document.getElementsByClassName("thumbnail");
var current;

for (var i = 0; i < thumbnails.length; i++) {
    initThumbnail(thumbnails[i], i);
}

function initThumbnail(thumbnail, index) {
    thumbnail.addEventListener("click", function () {
        splide.go(index);
    });
}

splide.on("mounted move", function () {
    var thumbnail = thumbnails[splide.index];

    if (thumbnail) {
        if (current) {
            current.classList.remove("is-active");
        }

        thumbnail.classList.add("is-active");
        current = thumbnail;
    }
});

splide.mount();

const splideLightboxMain = document.querySelector('#main-slider-lightbox');
const splideThumbnailsLightboxContainer = document.querySelector('#thumbnails-lightbox');
const splideLightboxContainer = document.querySelector('.slider-lightbox');
const splideLightboxShadow = document.querySelector('.lightbox-shadow');
let splideWidth = 0;

const openGallery = () => {
    history.pushState(null, null, document.URL);
    splideLightboxContainer.classList.add('is-visible');
    splideLightboxShadow.classList.add('lightbox-shadow--is-visible');
    splideLightboxShadow.classList.remove('lightbox-shadow--is-hidden');
    splideWidth = document.querySelector('#main-slider-lightbox .splide__slide').clientWidth;

    const splideSlidesLightbox = document.querySelectorAll('#main-slider-lightbox .splide__slide');
    console.log(splideSlidesLightbox);
    splideSlidesLightbox.forEach(slide => {
        console.log(slide.clientWidth)
        slide.style.height = `${slide.clientWidth}px`;
    }
    )
}

const closeGallery = () => {
    splideLightboxContainer.classList.remove('is-visible');
    splideLightboxShadow.classList.remove('lightbox-shadow--is-visible');
    splideLightboxShadow.classList.add('lightbox-shadow--is-hidden');
}

const splideSlides = document.querySelectorAll('#main-slider .splide__slide');

splideSlides.forEach(slide => {
    slide.addEventListener('click', openGallery)
});

var splideLightbox = new Splide("#main-slider-lightbox", {
    width: 550,
    // height: 550,
    pagination: false,
    cover: true,
    heightRatio: 1.0,
    autoHeight: true,
    // mediaQuery: 'max',
    //     breakpoints: {
    // 		830: {
    //             height: 300,
    // 		},
    //   }
});

var thumbnailsLightbox = document.getElementsByClassName("thumbnail-lightbox");
var currentLightbox;

for (var i = 0; i < thumbnailsLightbox.length; i++) {
    initThumbnailLightbox(thumbnailsLightbox[i], i);
}

function initThumbnailLightbox(thumbnailLightbox, index) {
    thumbnailLightbox.addEventListener("click", function () {
        splideLightbox.go(index);
    });
}

splideLightbox.on("mounted move", function () {
    var thumbnailLightbox = thumbnailsLightbox[splideLightbox.index];

    if (thumbnailLightbox) {
        if (currentLightbox) {
            currentLightbox.classList.remove("lightbox-is-active");
        }

        thumbnailLightbox.classList.add("lightbox-is-active");
        currentLightbox = thumbnailLightbox;
    }
});

splideLightbox.mount();

const lightboxCloseButton = document.querySelector('.slider-lightbox .font-icon-close');

lightboxCloseButton.addEventListener('click', closeGallery);

window.addEventListener('popstate', () => {
    const state = document.querySelector('.lightbox-shadow--is-visible');
    if (state !== null) {
        closeGallery();
    }
})

splideLightboxShadow.addEventListener('click', closeGallery);

