// ============================================
// NASH RECORD — Main JS
// ============================================

// Nav scroll behaviour
const nav = document.getElementById('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 30);
  });
}

// Mobile burger
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
if (burger && navLinks) {
  burger.addEventListener('click', () => navLinks.classList.toggle('open'));
}

// Reveal on scroll
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });
reveals.forEach(el => io.observe(el));

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      navLinks?.classList.remove('open');
    }
  });
});

// Lite YouTube: charge l'iframe youtube-nocookie seulement au clic
document.querySelectorAll('.clip__frame[data-yt]').forEach(function (el) {
  el.addEventListener('click', function () {
    var id = el.getAttribute('data-yt');
    el.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&rel=0" title="' + (el.getAttribute('aria-label') || 'Clip') + '" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
  }, { once: true });
});

// ============================================
// CATALOGUE — numéros de référence NR-xxx
// Seul endroit à modifier pour changer la numérotation :
// chaque élément [data-cat="cle"] du site affiche la référence ci-dessous.
// ============================================
const CATALOGUE = {
  'mi-corazon': 'NR-001',
  'mahboul': 'NR-002',
  'un-beso': 'NR-003',
  'no-limit': 'NR-004',
  'vamos-vamos': 'NR-005'
};
document.querySelectorAll('[data-cat]').forEach(function (el) {
  var ref = CATALOGUE[el.getAttribute('data-cat')];
  if (ref) el.textContent = ref;
});

// Bac à disques : une tranche touchée sort sa pochette et remplit les notes de pochette
(function () {
  var recs = [].slice.call(document.querySelectorAll('.rec'));
  var liner = document.getElementById('liner');
  if (!recs.length) return;
  function show(rec) {
    recs.forEach(function (r) { r.setAttribute('aria-pressed', r === rec ? 'true' : 'false'); });
    if (!liner) return;
    var src = document.getElementById(rec.getAttribute('data-notes'));
    if (src) liner.innerHTML = src.innerHTML;
    liner.querySelectorAll('[data-cat]').forEach(function (el) {
      var ref = CATALOGUE[el.getAttribute('data-cat')];
      if (ref) el.textContent = ref;
    });
  }
  recs.forEach(function (r) { r.addEventListener('click', function () { show(r); }); });
  if (liner) show(recs[0]);
})();
