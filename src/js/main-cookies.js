window.addEventListener('load', () => {
  const modal = document.querySelector('[data-modal]');
  const btnAccept = document.querySelector('[data-btn-accept]');
  const btnDecline = document.querySelector('[data-btn-decline]');

  const cookieConsent = localStorage.getItem('cookieConsent');
  if (cookieConsent) return;

  setTimeout(() => {
    modal.hidden = false;
  }, 500);

  const closeWithAnimation = (directionClass, storageValue) => {
    modal.classList.add(directionClass);
    localStorage.setItem('cookieConsent', storageValue);
    setTimeout(() => {
      modal.hidden = true;
      modal.classList.remove(directionClass);
    }, 600);
  };

  btnAccept.addEventListener('click', () => {
    closeWithAnimation('modal-slide-left', 'accepted');
  });

  btnDecline.addEventListener('click', () => {
    closeWithAnimation('modal-slide-right', 'declined');
  });
});
