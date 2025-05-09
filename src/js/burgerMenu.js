const burgerBtn = document.querySelector('[data-burger]');
const navMenu = document.querySelector('[data-menu]');
const navList = document.querySelector('[data-nav-list]');
const burgerIconUse = burgerBtn.querySelector('use');

const icons = {
  open: 'icon-close',
  closed: 'icon-menu',
};

function toggleMenu() {
  const isOpen = burgerBtn.dataset.burger === 'true';
  const newState = (!isOpen).toString();

  burgerBtn.dataset.burger = newState;
  burgerBtn.setAttribute('aria-expanded', newState);
  navMenu.dataset.menu = newState;

  if (newState === 'true') {
    history.pushState({ menuOpen: true }, '');
    document.body.classList.add('no-scroll');
  } else {
    document.body.classList.remove('no-scroll');
  }

  burgerBtn.classList.add('rotate');

  setTimeout(() => {
    const iconId = newState === 'true' ? icons.open : icons.closed;
    burgerIconUse.setAttribute('href', `/img/sprite.svg#${iconId}`);

    // burgerIconUse.setAttribute('xlink:href', `/img/sprite.svg#${iconId}`);
    burgerBtn.classList.remove('rotate');
  }, 300);
}

function closeMenuIfClickedOutside(event) {
  const isOpen = burgerBtn.dataset.burger === 'true';
  const clickedOutside =
    !burgerBtn.contains(event.target) && !navMenu.contains(event.target);

  if (isOpen && clickedOutside) {
    toggleMenu();
  }
}

burgerBtn.addEventListener('click', toggleMenu);

document.addEventListener('click', closeMenuIfClickedOutside);

navList.addEventListener('click', e => {
  const link = e.target.closest('a');
  if (!link || window.innerWidth >= 1200) return;

  const href = link.getAttribute('href');
  if (href && href.startsWith('#')) {
    e.preventDefault();

    const targetId = href.slice(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }

    toggleMenu();
    document.body.classList.remove('no-scroll');
  }
});
