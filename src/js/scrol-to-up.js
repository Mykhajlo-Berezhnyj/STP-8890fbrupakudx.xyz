document.addEventListener('DOMContentLoaded', () => {
  const btnScrollUp = document.getElementById('scrollToTop');

  if (!btnScrollUp) return;

  const scrollShow = () => {
    if (window.scrollY > 500) {
      btnScrollUp.classList.add('show');
    } else {
      btnScrollUp.classList.remove('show');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', scrollShow);
  btnScrollUp.addEventListener('click', scrollToTop);
});
