import Splide from '@splidejs/splide';
import '@splidejs/splide/css/skyblue';


const displayController = (() => {
    const splideLightboxContainer = document.querySelector('.slider-lightbox');
    const splideLightboxShadow = document.querySelector('.lightbox-shadow');

    const openGallery = () => {
        history.pushState(null, null, document.URL);
        toggleGallery();

        //initialize slide height;
        const splideSlidesLightbox = document.querySelectorAll('#main-slider-lightbox .splide__slide');
        splideSlidesLightbox.forEach(slide => {
            slide.style.height = `${slide.clientWidth}px`;
        })
    }

    const closeGallery = () => {
        toggleGallery();
    }

    const toggleGallery = () => {
        splideLightboxContainer.classList.toggle('is-visible');
        splideLightboxShadow.classList.toggle('lightbox-shadow--is-visible');
        splideLightboxShadow.classList.toggle('lightbox-shadow--is-hidden');
    }

    return { openGallery, closeGallery }
})()


const galleryController = (() => {
    const splideMainInitialization = (() => {
        const splide = new Splide("#main-slider", {
            autoWidth: true,
            heightRatio: 1.0,
            pagination: false,
            cover: true,
            breakpoints: {
                850: {
                    height: 300,
                },
            }
        });

        const thumbnails = document.querySelectorAll(".thumbnail");
        let current;

        for (let i = 0; i < thumbnails.length; i++) {
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
    })()

    const splideLightboxInitialization = (() => {
        const splideLightbox = new Splide("#main-slider-lightbox", {
            width: 550,
            pagination: false,
            cover: true,
            heightRatio: 1.0,
            autoHeight: true,
        });

        const thumbnailsLightbox = document.getElementsByClassName("thumbnail-lightbox");
        let currentLightbox;

        for (let i = 0; i < thumbnailsLightbox.length; i++) {
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
    })()

    //back button (swipe back) on browsers closes gallery
    window.addEventListener('popstate', () => {
        const state = document.querySelector('.lightbox-shadow--is-visible');
        if (state !== null) {
            displayController.closeGallery();
        }
    })

    //open lightbox gallery after clicking on main photo
    const splideSlides = document.querySelectorAll('#main-slider .splide__slide');
    splideSlides.forEach(slide => {
        slide.addEventListener('click', displayController.openGallery)
    });

    //gallery close button
    const lightboxCloseButton = document.querySelector('.slider-lightbox .font-icon-close');
    lightboxCloseButton.addEventListener('click', displayController.closeGallery);

    //close gallery on outside click
    const splideLightboxShadow = document.querySelector('.lightbox-shadow');
    splideLightboxShadow.addEventListener('click', displayController.closeGallery);

})()



