const flashlight = document.querySelector('.flashlight-overlay');
let flashlightActive = false;
let beamRadius = 50;
let targetBeamRadius = 450;
let clickCount = 0;
let clickTimer = null;

const timer = setTimeout(() => {
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

function updateBeamRadius() {
  if (window.innerWidth < 768) {
    beamRadius = 60;
    targetBeamRadius = 120;
  } else {
    beamRadius = 80;
    targetBeamRadius = 400;
  }
}

updateBeamRadius();
window.addEventListener('resize', updateBeamRadius);

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

// const flashlight = document.querySelector('.flashlight-overlay');
// let flashlightActive = false;
// let beamRadius = 50;
// let targetBeamRadius = 450;
// let clickCount = 0;
// let clickTimer = null;

// // function flickerSequence(callback) {
// //   flashlight.classList.add('full-dark');

// //   setTimeout(() => {
// //     flashlight.classList.remove('full-dark');
// //     setTimeout(() => {
// //       flashlight.classList.add('full-dark');
// //       setTimeout(() => {
// //         flashlight.classList.remove('full-dark');

// //         let count = 0;
// //         const fastFlicker = setInterval(() => {
// //           flashlight.classList.toggle('full-dark');
// //           count++;
// //           if (count >= 6) {
// //             clearInterval(fastFlicker);
// //             flashlight.classList.add('full-dark');

// //             setTimeout(() => {
// //               if (callback) callback();
// //             }, 1500);
// //           }
// //         }, 250);
// //       }, 1000);
// //     }, 1000);
// //   }, 1000);
// // }

// const timer = setTimeout(() => {
//   flashlight.style.opacity = 1;

//   // flickerSequence(() => {
//   flashlight.classList.add('light-active');
//   activateFlashlight();
//   // });
// }, 4000);

// window.addEventListener('mousemove', e => {
//   if (!flashlightActive) return;
//   flashlight.style.background = `
//         radial-gradient(
//             circle ${beamRadius}px at ${e.clientX}px ${e.clientY}px,
//             rgba(255, 255, 255, 0.29) 0%,
//             rgba(0, 0, 0, 0.6) 100%
//         )`;
// });

// function updateBeamRadius() {
//   if (window.innerWidth < 768) {
//     beamRadius = 60;
//     targetBeamRadius = 120;
//   } else {
//     beamRadius = 80;
//     targetBeamRadius = 400;
//   }
// }

// updateBeamRadius();

// window.addEventListener('resize', updateBeamRadius);

// function activateFlashlight() {
//   flashlightActive = true;

//   const grow = setInterval(() => {
//     if (beamRadius < targetBeamRadius) {
//       beamRadius += 5;
//     } else {
//       clearInterval(grow);
//     }
//   }, 16);
// }

// function deactivateFlashlight() {
//   flashlight.style.opacity = 0;
//   flashlightActive = false;
//   beamRadius = 50;
//   clearTimeout(timer);
//   flashlight.classList.remove('light-active');
// }

// window.addEventListener('keydown', e => {
//   // if (e.key === 'Escape' && flashlightActive) { }
//   deactivateFlashlight();
// });

// window.addEventListener('mousedown', e => {
//   if (e.button === 2 && e.detail === 2 && flashlightActive) {
//     deactivateFlashlight();
//   }
// });

// window.addEventListener('click', () => {
//   clickCount++;
//   if (clickTimer) clearTimeout(clickTimer);

//   clickTimer = setTimeout(() => {
//     clickCount = 0;
//   }, 800);

//   if (clickCount === 5 && !flashlightActive) {
//     flashlight.style.opacity = 1;
//     flickerSequence(() => {
//       flashlight.classList.add('light-active');
//       activateFlashlight();
//     });
//   }
// });

// window.addEventListener('contextmenu', e => {
//   e.preventDefault();
// });

// let lastTap = 0;

// document.addEventListener('touchend', function (e) {
//   const currentTime = new Date().getTime();
//   const tapLength = currentTime - lastTap;

//   if (tapLength < 300 && tapLength > 0) {
//     disableFlashlightAndCloseModal();
//   }

//   lastTap = currentTime;
// });

// function disableFlashlightAndCloseModal() {
//   flashlightEnabled = false;

//   const modal = document.querySelector('.modal');
//   if (modal) modal.classList.remove('is-open');

//   console.log('Flashlight disabled and modal closed');
// }

// document.addEventListener('touchend', function (e) {
//   if (window.innerWidth >= 768) return; // не мобільний

//   const currentTime = new Date().getTime();
//   const tapLength = currentTime - lastTap;

//   if (tapLength < 300 && tapLength > 0) {
//     disableFlashlightAndCloseModal();
//   }

//   lastTap = currentTime;
// });
