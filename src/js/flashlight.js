const flashlight = document.querySelector('.flashlight-overlay');
const flashlightMenu = document.getElementById('flashlightMenu');
const radiusSelector = document.getElementById('radiusSelector');
const hint = document.querySelector('.flashlight-hint');

const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

if (isTouchDevice) {
  flashlight.remove();
} else {
  let flashlightActive = false;
  let beamRadius = 60;
  let targetBeamRadius = 400;
  let clickCount = 0;
  let clickTimer = null;
  let timer = null;
  let inactivityTimer = null;
  let restoring = false;

  function applyBeam(e) {
    flashlight.style.background = `radial-gradient(
      circle ${beamRadius}px at ${e.clientX}px ${e.clientY}px,
      rgba(255, 255, 255, 0.29) 0%,
      rgba(0, 0, 0, 0.6) 100%
    )`;
  }

  // Початкове автоувімкнення через 5 секунд
  timer = setTimeout(() => {
    flashlight.style.opacity = 1;
    flashlight.classList.add('light-active');
    activateFlashlight();
    setTimeout(() => {
      hint?.classList.add('visible');
      setTimeout(() => hint?.classList.remove('visible'), 3000);
    }, 500);
  }, 5000);

  radiusSelector.addEventListener('change', e => {
    targetBeamRadius = parseInt(e.target.value);
    beamRadius = 60;
    flashlight.style.opacity = 1;
    flashlight.classList.add('light-active');
    activateFlashlight();
  });

  window.addEventListener('mousemove', e => {
    if (!flashlightActive) return;
    applyBeam(e);
    clearTimeout(inactivityTimer);
    restoreBeam();
    inactivityTimer = setTimeout(() => {
      shrinkBeam();
    }, 3000);
  });

  function activateFlashlight() {
    flashlightActive = true;
    restoring = false;
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
    beamRadius = 60;
    clearTimeout(timer);
    flashlight.classList.remove('light-active');
  }

  // Подвійний правий клік — вимкнення
  window.addEventListener('mousedown', e => {
    if (e.button === 2 && e.detail === 2 && flashlightActive) {
      deactivateFlashlight();
    }
  });

  // 5 кліків — активація
  window.addEventListener('click', () => {
    flashlightMenu.classList.add('hidden');
    clickCount++;
    if (clickTimer) clearTimeout(clickTimer);
    clickTimer = setTimeout(() => (clickCount = 0), 800);

    if (clickCount === 5 && !flashlightActive) {
      flashlight.style.opacity = 1;
      flashlight.classList.add('light-active');
      activateFlashlight();
    }
  });

  // Правий клік — меню керування
  window.addEventListener('contextmenu', e => {
    e.preventDefault();
    flashlightMenu.style.top = `${e.clientY}px`;
    flashlightMenu.style.left = `${e.clientX}px`;
    flashlightMenu.classList.remove('hidden');
  });

  flashlightMenu.addEventListener('click', e => {
    const action = e.target.dataset.action;

    if (!action) return;

    switch (action) {
      case 'deactivate':
        deactivateFlashlight();
        break;

      case 'reset':
        // 🔁 Перезапуск ефекту з самого початку (затемнення, затримка, зростання)
        clearTimeout(timer);
        flashlight.style.opacity = 0;
        beamRadius = 60;
        flashlightActive = false;
        flashlight.classList.remove('light-active');
        timer = setTimeout(() => {
          flashlight.style.opacity = 1;
          flashlight.classList.add('light-active');
          activateFlashlight();
        }, 500); // невелика затримка як при першому запуску
        break;

      case 'setting-reset':
        targetBeamRadius = 400;
        radiusSelector.value = '400';
        beamRadius = 60;
        flashlight.style.opacity = 1;
        flashlight.classList.add('light-active');
        activateFlashlight(); // 🛠️ Додано, щоб ліхтарик знову ріс
        break;

      case 'close':
        flashlightMenu.classList.add('hidden');
        break;
    }

    if (action !== 'setting-reset') {
      flashlightMenu.classList.add('hidden');
    }
  });

  radiusSelector.addEventListener('click', e => {
    e.stopPropagation();
  });

  window.addEventListener('click', e => {
    if (!flashlightMenu.contains(e.target)) {
      flashlightMenu.classList.add('hidden');
    }
  });

  function shrinkBeam() {
    restoring = false;
    const shrink = setInterval(() => {
      if (beamRadius > 60) {
        beamRadius -= 4;
      } else {
        clearInterval(shrink);
      }
    }, 20);
  }

  function restoreBeam() {
    if (restoring || beamRadius >= targetBeamRadius) return;
    restoring = true;
    const grow = setInterval(() => {
      if (beamRadius < targetBeamRadius) {
        beamRadius += 5;
      } else {
        clearInterval(grow);
      }
    }, 16);
  }
}
