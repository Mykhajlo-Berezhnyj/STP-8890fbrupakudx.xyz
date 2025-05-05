import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const data = [
  {
    stars: 5,
    review:
      '“Such a relaxing and addicting game! I love that I can make progress even when I’m offline”',
    name: 'Hazel M.',
  },
  {
    stars: 5,
    review:
      '“The fantasy theme is gorgeous, and the strategic combinations keep me hooked. Moo and Lulu are awesome!”',
    name: 'Dan P.',
  },
  {
    stars: 5,
    review:
      '“The enemies are so cute… and deadly. Love the balance between idle and active gameplay.”',
    name: 'Kira L.',
  },
  {
    stars: 5,
    review:
      '“Definitely one of the most charming tower defense games I’ve ever played. Story + strategy = win!”',
    name: 'Tom W.',
  },
];

//Swiper
const swiper = new Swiper('.reviewes-slider', {
  modules: [Pagination],  
  pagination: {
    el: '.reviewes-slider-pagination',
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

// Render
function renderItems(data) {
  const slider = document.querySelector('.reviewes-slider-list');
  const markup = data
    .map(({ name, stars, review }) => {
      const starsMarkup = Array.from(
        { length: stars },
        () => '<li class="reviewes-star">&#9733;</li>'
      ).join('');
      return `
          <li class="swiper-slide reviewes-slider-item">
          <div>
            <ul class="reviewes-stars-list">
              ${starsMarkup}
            </ul>
             <p class="reviewes-slider-item-info"> ${review}</p>
          </div>
            <p class="reviewes-slider-item-title">${name}</p>           
          </li>             
        `;
    })
    .join('');

  slider.insertAdjacentHTML('beforeend', markup);
}

renderItems(data);
