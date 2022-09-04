import 'swiper/scss';
import 'swiper/scss/autoplay';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

Swiper.use([Navigation, Pagination, Autoplay]);

var swiper2 = new Swiper('.swiper-gallery-thumbs', {
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    spaceBetween: 10,
});

var swiper = new Swiper(".swiper-gallery", {
    spaceBetween: 10,
    slidesPerView: 1,
    thumbs: {
        swiper: swiper2,
      },
  });



// var swiper = new Swiper('.swiper-gallery', {
//   loop: true,
//     speed: 1000,
//     autoplay: {
//       delay: 3000,
//       disableOnInteraction: false
//     },
//   centeredSlides: true,
//   loop: true,
//   slidesPerView: 1,
//   spaceBetween: 0,
//   pagination: {
//     el: ".swiper-pagination",
//       clickable: true,
//   },
//   breakpoints: {
//     1400: {
//        slidesPerView: 2,
//        spaceBetween: -250,
//     },
//     1800: {
//       slidesPerView: 3,
//       spaceBetween: -50,
//    },
//   },
// });
