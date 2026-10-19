// Lightweight interactions: video dialog + motion preferences + accessible reveals.
(() => {
  const demoDialog = document.querySelector('#demoDialog');
  const openButton = document.querySelector('#openDemo');
  const closeButton = document.querySelector('#closeDemo');
  const fullVideo = document.querySelector('#fullDemoVideo');
  const heroVideo = document.querySelector('#heroVideo');
  let previouslyFocused = null;

  function closeDemo() {
    if (!demoDialog?.open) return;
    fullVideo?.pause();
    demoDialog.close();
    document.body.classList.remove('dialog-open');
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      heroVideo?.play().catch(() => {});
    }
    previouslyFocused?.focus();
  }

  openButton?.addEventListener('click', () => {
    if (!demoDialog || !fullVideo) return;
    previouslyFocused = document.activeElement;
    heroVideo?.pause();
    demoDialog.showModal();
    document.body.classList.add('dialog-open');
    fullVideo.currentTime = 0;
    fullVideo.play().catch(() => {});
    closeButton?.focus();
  });
  closeButton?.addEventListener('click', closeDemo);
  demoDialog?.addEventListener('cancel', (event) => {
    event.preventDefault();
    closeDemo();
  });
  demoDialog?.addEventListener('click', (event) => {
    // Clicking the backdrop closes the player, not clicking video controls.
    if (event.target === demoDialog) closeDemo();
  });

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const saveData = navigator.connection?.saveData;
  if (reduceMotion.matches || saveData) {
    heroVideo?.pause();
    heroVideo?.removeAttribute('autoplay');
  }

  if (!reduceMotion.matches && 'IntersectionObserver' in window) {
    const items = [...document.querySelectorAll('.reveal')];
    // Avoid hiding content in unsupported browsers or when JS is interrupted.
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.07, rootMargin: '0px 0px 40px 0px' });
    document.documentElement.classList.add('motion-ready');
    items.forEach((item) => observer.observe(item));
  }
})();
