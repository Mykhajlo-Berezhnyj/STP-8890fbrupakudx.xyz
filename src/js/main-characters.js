import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

//Swiper
const swiper = new Swiper('.main-characters-slider', {
  modules: [Pagination],  
  pagination: {
    el: '.main-characters-slider-pagination',
    clickable: true,
  },
  // Cursor
  grabCursor: true,
  speed: 500,
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 16,
  // Responsive breakpoints
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});

