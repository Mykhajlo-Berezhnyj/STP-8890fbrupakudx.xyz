import Swiper from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const swiper = new Swiper('#gallery-swiper', {
  modules: [Autoplay, Pagination],
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 8,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
      // slidesOffsetBefore: 127,
      // slidesOffsetAfter: 127,
      centeredSlides: true,
    },
  },
});
