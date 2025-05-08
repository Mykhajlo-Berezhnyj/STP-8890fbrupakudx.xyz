const flashlight = document.querySelector('.flashlight-overlay');
let flashlightActive = false;
let beamRadius = 50;
let targetBeamRadius = 450;
let clickCount = 0;
let clickTimer = null;

function flickerSequence(callback) {
  flashlight.classList.add('full-dark');

  setTimeout(() => {
    flashlight.classList.remove('full-dark');
    setTimeout(() => {
      flashlight.classList.add('full-dark');
      setTimeout(() => {
        flashlight.classList.remove('full-dark');

        let count = 0;
        const fastFlicker = setInterval(() => {
          flashlight.classList.toggle('full-dark');
          count++;
          if (count >= 6) {
            clearInterval(fastFlicker);
            flashlight.classList.add('full-dark');

            setTimeout(() => {
              if (callback) callback();
            }, 1500);
          }
        }, 250);
      }, 1000);
    }, 1000);
  }, 1000);
}

const timer = setTimeout(() => {
  flashlight.style.opacity = 1;

  flickerSequence(() => {
    flashlight.classList.add('light-active');
    activateFlashlight();
  });
}, 14000);

window.addEventListener('mousemove', e => {
  if (!flashlightActive) return;
  flashlight.style.background = `
        radial-gradient(
            circle ${beamRadius}px at ${e.clientX}px ${e.clientY}px,
            rgba(255, 255, 255, 0.09) 0%,
            rgba(0, 0, 0, 0.6) 100%
        )`;
});

function activateFlashlight() {
  flashlightActive = true;
  beamRadius = 150;

  const grow = setInterval(() => {
    if (beamRadius < targetBeamRadius) {
      beamRadius += 10;
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

window.addEventListener('keydown', e => {
  if (e.key === 'Escape' && flashlightActive) {
    deactivateFlashlight();
  }
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
    flickerSequence(() => {
      flashlight.classList.add('light-active');
      activateFlashlight();
    });
  }
});

window.addEventListener('contextmenu', e => {
  e.preventDefault();
});
