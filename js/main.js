(function () {
  "use strict";

  // Mobile navigation toggle
  var nav = document.querySelector(".nav");
  var toggle = document.querySelector(".nav-toggle");
  if (nav && toggle) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    nav.querySelectorAll(".nav-links a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Scroll reveal is opt-in progressive enhancement: content is visible
  // by default in CSS, and only hidden-then-revealed once we confirm
  // both JS execution and IntersectionObserver support here.
  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var revealEls = document.querySelectorAll(".reveal");

  if (!prefersReducedMotion && "IntersectionObserver" in window && revealEls.length) {
    document.documentElement.classList.add("js-observed");
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) { observer.observe(el); });

    // Safety net: if for any reason an element never intersects
    // (e.g. it starts already fully in view before observe() runs
    // in some browser edge cases), reveal everything after a short
    // delay so content can never remain hidden.
    window.setTimeout(function () {
      revealEls.forEach(function (el) { el.classList.add("is-visible"); });
    }, 1200);
  }

  // Current year in footer
  var yearEl = document.getElementById("year");
  if (yearEl) { yearEl.textContent = new Date().getFullYear(); }
})();
