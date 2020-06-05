window.addEventListener('load', (event) => {
  /* #Viewport Fix
  ======================================================= */
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  /* #Header Scroll
  ======================================================= */
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      header.classList.add('header-white');
    } else {
      header.classList.remove('header-white');
    }
  });
  if (window.scrollY > 0) {
    header.classList.add('header-white');
  } else {
    header.classList.remove('header-white');
  }

   /* #Hamburger Menu
  ======================================================= */
  const hamburger = document.querySelector('.hamburger');
  hamburger.addEventListener('click', (e) => {
    // Animate Hamburger Icon
    hamburger.classList.toggle('is-active');
    // Remover scrolling from body
    document.body.classList.toggle('no-scroll');
    // Show Navigation Popup
    document.querySelector('.header-popup').classList.toggle('show');
  }); 
  // Listen for a click outside of header or popup and disable it
  document.addEventListener('click', (e) => {
    if (document.querySelector('.header-popup').classList.contains('show')) {
      if (!e.target.closest('.header') && !e.target.closest('.header-popup')) {
        // Animate Hamburger Icon
        hamburger.classList.remove('is-active');
        // Remover scrolling from body
        document.body.classList.remove('no-scroll');
        // Show Navigation Popup
        document.querySelector('.header-popup').classList.remove('show');
      }
    }
  });
});

AOS.init({
  startEvent: 'load',
  once: true,
  duration: 1000,
  offset: 300,
  ease: 'ease-in-out'
});