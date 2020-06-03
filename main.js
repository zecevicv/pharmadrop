window.addEventListener('load', (event) => {
  /* #Viewport Fix
  ======================================================= */
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});