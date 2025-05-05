import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const data = [
  {
    name: 'MOO',
    avatarMob: '/img/main-characters/main-characters-moo-mob.png',
    avatarDesk: '/img/main-characters/main-characters-moo-desk.png',
    description:
      'A clever guardian with control over elemental magic. He uses spells to slow and confuse enemies.',
  },
  {
    name: 'LULU',
    avatarMob: '/img/main-characters/main-characters-lulu-mob.png',
    avatarDesk: '/img/main-characters/main-characters-lulu-desk.png',
    description:
      'Agile and fierce, Lulu’s tower upgrades pack a punch — she leads the charge with precision and power.',
  },
  {
    name: 'ELDER BRAMBLE',
    avatarMob: '/img/main-characters/main-characters-bramble-mob.png',
    avatarDesk: '/img/main-characters/main-characters-bramble-desk.png',
    description: 'Mysterious druid who provides upgrades and guidance.',
  },
  {
    name: 'THE FOGLINGS',
    avatarMob: '/img/main-characters/main-characters-foglings-mob.png',
    avatarDesk: '/img/main-characters/main-characters-foglings-desk.png',
    description:
      'Mischievous but harmless spirits that help collect offline rewards.',
  },
];

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

// Render
function renderItems(data) {
  const slider = document.querySelector('.main-characters-slider-list');
  const markup = data
    .map(
      ({ name, avatarMob, avatarDesk, description }) => {
        
        let classBackImg = '';

    switch (name) {
      case 'MOO':
        classBackImg = 'main-characters-slider-item-moo';
        break;
      case 'LULU':
        classBackImg = 'main-characters-slider-item-lulu';
        break;
      case 'ELDER BRAMBLE':
        classBackImg = 'main-characters-slider-item-bramble';
        break;
      case 'THE FOGLINGS':
        classBackImg = 'main-characters-slider-item-foglings';
        break;
      default:
        classBackImg = 'bg-default';
    }
        
        return `
          <li class="swiper-slide main-characters-slider-item ${classBackImg}">
          <p class="main-characters-slider-item-title">${name}</p>  
          <img class="main-characters-slider-img"
              src="${avatarDesk}"
               srcset="${avatarMob} 320w,
              ${avatarDesk} 1200w"
               sizes="(max-width: 1199px) 320px, 1200px"
               alt="Avatar" 
            />             
             <p class="main-characters-slider-item-info"> ${description}</p>                     
          </li>             
        `
})
    .join('');

  slider.insertAdjacentHTML('beforeend', markup);
}

renderItems(data);

