import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay, Keyboard, Pagination } from 'swiper/modules';

const swiper = new Swiper('#extrablocks-swiper', {
  modules: [Autoplay, Pagination],
  slidesPerView: 1,
  spaceBetween: 72,
  slideToClickedSlide: true,
  loop: true,
  touchRatio: 0.5,
  grabCursor: true,
  speed: 1000,
  autoplay: {
    delay: 2500,
  },
  // keyboard: {
  //   enabled: true,
  //   onlyInViewport: true,
  //   pageUpDown: true,
  // },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      // centeredSlides: true,
    },
    1200: {
      slidesPerView: 3,
      centeredSlides: false,
    },
  },
});
