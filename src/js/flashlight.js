const flashlight = document.querySelector('.flashlight-overlay');
let flashlightActive = false;
let beamRadius = 60;
let targetBeamRadius = 400;
let clickCount = 0;
let clickTimer = null;
let timer = null;

if (window.innerWidth >= 768) {
  timer = setTimeout(() => {
    flashlight.style.opacity = 1;
    flashlight.classList.add('light-active');
    activateFlashlight();
  }, 5000);

  window.addEventListener('mousemove', e => {
    if (!flashlightActive) return;
    flashlight.style.background = `
      radial-gradient(
        circle ${beamRadius}px at ${e.clientX}px ${e.clientY}px,
        rgba(255, 255, 255, 0.29) 0%,
        rgba(0, 0, 0, 0.6) 100%
      )
    `;
  });
}

function activateFlashlight() {
  flashlightActive = true;

  const grow = setInterval(() => {
    if (beamRadius < targetBeamRadius) {
      beamRadius += 5;
    } else {
      clearInterval(grow);
    }
  }, 16);
}

function deactivateFlashlight() {
  flashlight.style.opacity = 0;
  flashlightActive = false;
  beamRadius = 50;
  clearTimeout(timer);
  flashlight.classList.remove('light-active');
}

window.addEventListener('keydown', () => {
  deactivateFlashlight();
});

window.addEventListener('mousedown', e => {
  if (e.button === 2 && e.detail === 2 && flashlightActive) {
    deactivateFlashlight();
  }
});

window.addEventListener('click', () => {
  clickCount++;
  if (clickTimer) clearTimeout(clickTimer);

  clickTimer = setTimeout(() => {
    clickCount = 0;
  }, 800);

  if (clickCount === 5 && !flashlightActive) {
    flashlight.style.opacity = 1;
    flashlight.classList.add('light-active');
    activateFlashlight();
  }
});

window.addEventListener('contextmenu', e => {
  e.preventDefault();
});

let lastTap = 0;

document.addEventListener('touchend', function () {
  if (window.innerWidth >= 768) return;

  const currentTime = new Date().getTime();
  const tapLength = currentTime - lastTap;

  if (tapLength < 300 && tapLength > 0) {
    disableFlashlightAndCloseModal();
  }

  lastTap = currentTime;
});

function disableFlashlightAndCloseModal() {
  deactivateFlashlight();

  const modal = document.querySelector('.modal');
  if (modal) modal.classList.remove('is-open');

  console.log('Flashlight disabled and modal closed');
}
