import Swiper from 'swiper';
import { Autoplay, Keyboard, EffectFlip, Pagination } from 'swiper/modules';
import 'swiper/css/effect-flip';
import 'swiper/css';

// import 'swiper/css/effect-coverflow';

const swiper = new Swiper('#gallery-swiper', {
  modules: [Autoplay, Keyboard, Pagination],
  loop: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  speed: 1400,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  grabCursor: true,
  slideToClickedSlide: true,
  centeredSlides: true,
  // Responsive breakpoints
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 18,
    },
    1200: {
      coverflowEffect: {
        rotate: 20,
        stretch: 5,
        depth: 10,
        modifier: 1,
        slideShadows: true,
      },
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
});

// const swiper = new Swiper('#gallery-swiper', {
//   modules: [Autoplay, Keyboard, EffectFlip],
//   loop: true,
//   keyboard: {
//     enabled: true,
//     onlyInViewport: true,
//     pageUpDown: true,
//   },
//   speed: 1400,
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },
//   grabCursor: true,
//   slideToClickedSlide: true,
//   effect: 'flip',
//   flipEffect: {
//     slideShadows: true,
//     limitRotation: true,
//   },
//   // Responsive breakpoints
//   breakpoints: {
//     320: {
//       slidesPerView: 1,
//       spaceBetween: 18,
//     },
//     1200: {
//       slidesPerView: 5,
//       spaceBetween: 20,

//     },
//   },
// });

// const swiper = new Swiper('#gallery-swiper', {
//   modules: [Autoplay, Keyboard, EffectCoverflow],
//   // Default parameters
//   loop: true,
//   keyboard: {
//     enabled: true,
//     onlyInViewport: true,
//     pageUpDown: true,
//   },
//   speed: 1400,
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },
//   grabCursor: true,
//   slideToClickedSlide: true,
//   effect: 'coverflow',
//   centeredSlides: true,
//   //   coverflowEffect: {
//   //     rotate: 20,
//   //     stretch: 5,
//   //     depth: 10,
//   //     modifier: 1,
//   //     slideShadows: true,
//   //   },
//   // Responsive breakpoints
//   breakpoints: {
//     320: {
//       slidesPerView: 3,
//       spaceBetween: 18,
//     },
//     1200: {
//       slidesPerView: 5,
//       spaceBetween: 20,
//     },
//   },
// });
