// Habinix — menu toggle and direction-aware scroll reveal.
(function () {
  var btn = document.querySelector('.menu-toggle');
  var nav = document.getElementById('nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      btn.textContent = open ? 'Close' : 'Menu';
    });
  }

  var items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    items.forEach(function (el) { el.classList.add('in'); });
    return;
  }

  // Track scroll direction so cards rise from below when scrolling down
  // and descend from above when scrolling back up.
  var lastY = window.scrollY, dir = 'down';
  window.addEventListener('scroll', function () {
    var y = window.scrollY;
    if (Math.abs(y - lastY) > 2) { dir = y > lastY ? 'down' : 'up'; lastY = y; }
  }, { passive: true });

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      var el = entry.target;
      if (entry.isIntersecting) {
        el.classList.add('in');
      } else {
        // Reset once fully out of view, ready to animate in again from the correct side.
        var above = entry.boundingClientRect.top < 0;
        el.setAttribute('data-from', above ? 'above' : 'below');
        el.classList.remove('in');
      }
    });
  }, { threshold: 0.06, rootMargin: '0px 0px -4% 0px' });

  items.forEach(function (el) {
    var r = el.getBoundingClientRect();
    if (r.top < window.innerHeight && r.bottom > 0) {
      requestAnimationFrame(function () { el.classList.add('in'); });
    }
    io.observe(el);
  });
})();
