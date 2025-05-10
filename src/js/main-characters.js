import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

//Swiper
const swiper = new Swiper('.main-characters-slider', {
  modules: [Autoplay, Pagination],
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 72,
  slideToClickedSlide: true,
  loop: true,
  speed: 600,
  grabCursor: true,
  
  autoplay: {
    delay: 1500,
  },
  pagination: {
    el: '.main-characters-slider-pagination',
    clickable: true,
  },

  // Responsive breakpoints
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 72,      
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});


  
