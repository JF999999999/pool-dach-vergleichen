// Paradiso Poolüberdachungen — shared site behavior
(function () {
  'use strict';

  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var closeBtn = document.querySelector('.nav-mobile-close');
  var panel = document.querySelector('.nav-mobile-panel');

  function openPanel() {
    if (!panel) return;
    panel.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    document.body.classList.add('nav-open');
    toggle && toggle.setAttribute('aria-expanded', 'true');
  }
  function closePanel() {
    if (!panel) return;
    panel.classList.remove('is-open');
    document.body.style.overflow = '';
    document.body.classList.remove('nav-open');
    toggle && toggle.setAttribute('aria-expanded', 'false');
  }
  if (toggle) toggle.addEventListener('click', openPanel);
  if (closeBtn) closeBtn.addEventListener('click', closePanel);
  if (panel) {
    panel.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closePanel);
    });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closePanel();
  });

  // Scroll-reveal via IntersectionObserver (respects prefers-reduced-motion through CSS).
  // Elements are visible by default in markup/CSS; only mark them `.pending`
  // right here, right before we can guarantee an observer will reveal them —
  // so no-JS / JS-blocked / slow-script visitors always see full content.
  var revealEls = document.querySelectorAll('.reveal');
  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if ('IntersectionObserver' in window && !prefersReduced) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );
    revealEls.forEach(function (el) {
      el.classList.add('pending');
      observer.observe(el);
    });
  }

  // Navbar background solidify on scroll
  var nav = document.querySelector('.nav');
  function onScroll() {
    if (!nav) return;
    if (window.scrollY > 40) {
      nav.style.background = 'rgba(28, 25, 23, 0.88)';
    } else {
      nav.style.background = 'rgba(28, 25, 23, 0.62)';
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mark current nav link
  var current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-mobile-panel a').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === current) link.setAttribute('aria-current', 'page');
  });
})();
