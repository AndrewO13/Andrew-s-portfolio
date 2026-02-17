(function () {
  'use strict';

  // Footer year
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  var navToggle = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      navToggle.classList.toggle('is-active');
      navLinks.classList.toggle('is-open');
      document.body.style.overflow = navLinks.classList.contains('is-open') ? 'hidden' : '';
    });

    // Close menu when a link is clicked (for anchor links)
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navToggle.classList.remove('is-active');
        navLinks.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    });
  }

  // Highlight active section in nav on scroll
  var sections = document.querySelectorAll('.section[id]');
  var navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

  function updateActiveNav() {
    var scrollY = window.scrollY || window.pageYOffset;
    var innerHeight = window.innerHeight * 0.4;

    sections.forEach(function (section) {
      var id = section.getAttribute('id');
      if (!id) return;
      var top = section.offsetTop;
      var height = section.offsetHeight;
      if (scrollY >= top - innerHeight && scrollY < top + height - innerHeight) {
        navAnchors.forEach(function (a) {
          if (a.getAttribute('href') === '#' + id) {
            a.style.color = 'var(--accent)';
          } else {
            a.style.color = '';
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav);
  updateActiveNav();

  // Subtle nav background on scroll
  var nav = document.getElementById('nav');
  if (nav) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        nav.style.background = 'rgba(15, 15, 18, 0.95)';
      } else {
        nav.style.background = 'rgba(15, 15, 18, 0.85)';
      }
    });
  }
})();
