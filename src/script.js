/* ═══════════════════════════════════════════════════
   PAWEŁ BARTOSZEWSKI — Portfolio
   Interactions & animations
   ═══════════════════════════════════════════════════ */

/* ─────────────────────────────
   TEXT SCRAMBLE EFFECT
   Hero name decodes on load
   ───────────────────────────── */
function scramble(el) {
  const final = el.dataset.text;
  if (!final) return;
  const pool = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#&%';
  const duration = 1200;
  const fps = 30;
  const totalFrames = (duration / 1000) * fps;
  let frame = 0;

  // Prevent layout shift: hidden sizer holds final dimensions,
  // scramble text is overlaid absolutely on top.
  const sizer = document.createElement('span');
  sizer.textContent = final;
  sizer.style.visibility = 'hidden';
  sizer.setAttribute('aria-hidden', 'true');

  const display = document.createElement('span');
  display.style.position = 'absolute';
  display.style.left = '0';
  display.style.top = '0';
  display.style.width = '100%';
  display.setAttribute('aria-hidden', 'true');

  el.style.position = 'relative';
  el.textContent = '';
  el.appendChild(sizer);
  el.appendChild(display);

  display.textContent = final.replace(/\S/g, () => pool[Math.random() * pool.length | 0]);

  const iv = setInterval(() => {
    let out = '';
    for (let i = 0; i < final.length; i++) {
      const progress = frame / totalFrames;
      const threshold = progress * 1.8 - (i / final.length) * 0.9;
      if (final[i] === ' ') {
        out += ' ';
      } else if (threshold > 0.6) {
        out += final[i];
      } else {
        out += pool[Math.random() * pool.length | 0];
      }
    }
    display.textContent = out;
    frame++;
    if (frame > totalFrames) {
      // Clean up: restore simple text node
      el.style.position = '';
      el.textContent = final;
      clearInterval(iv);
    }
  }, 1000 / fps);
}

// Run on page load with stagger
window.addEventListener('DOMContentLoaded', () => {
  const lines = document.querySelectorAll('.hero-name .line');
  lines.forEach((line, i) => {
    setTimeout(() => scramble(line), 300 + i * 400);
  });
});

/* ─────────────────────────────
   NAV SCROLL
   ───────────────────────────── */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

/* ─────────────────────────────
   HAMBURGER
   ───────────────────────────── */
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
burger?.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks?.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => navLinks.classList.remove('open'))
);

/* ─────────────────────────────
   SMOOTH SCROLL (offset for nav)
   ───────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    window.scrollTo({
      top: target.offsetTop - (nav?.offsetHeight || 0) - 16,
      behavior: 'smooth'
    });
  });
});

/* ─────────────────────────────
   SCROLL REVEAL
   ───────────────────────────── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Stagger siblings
      const parent = entry.target.parentElement;
      const siblings = parent ? [...parent.querySelectorAll('.rv')] : [];
      const idx = siblings.indexOf(entry.target);
      entry.target.style.transitionDelay = `${idx * 0.07}s`;
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.06, rootMargin: '0px 0px -30px 0px' });

document.querySelectorAll('.rv').forEach(el => revealObserver.observe(el));

/* ─────────────────────────────
   STAT COUNTER ANIMATION
   ───────────────────────────── */
function countUp(el, target, dur = 1400) {
  const start = performance.now();
  const step = (now) => {
    const t = Math.min((now - start) / dur, 1);
    const ease = 1 - Math.pow(1 - t, 3);
    el.textContent = Math.round(ease * target);
    if (t < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

const statObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.dataset.target, 10);
      if (!isNaN(target)) countUp(el, target);
      statObs.unobserve(el);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.big-num').forEach(el => statObs.observe(el));

/* ─────────────────────────────
   MARQUEE — pause on hover
   ───────────────────────────── */
const marqueeBand = document.querySelector('.marquee-band');
const marqueeTrack = document.querySelector('.marquee-track');
if (marqueeBand && marqueeTrack) {
  marqueeBand.addEventListener('mouseenter', () => marqueeTrack.style.animationPlayState = 'paused');
  marqueeBand.addEventListener('mouseleave', () => marqueeTrack.style.animationPlayState = 'running');
}

/* ─────────────────────────────
   ACTIVE NAV LINK
   ───────────────────────────── */
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

const secObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navAnchors.forEach(a => {
        const isActive = a.getAttribute('href') === `#${id}`;
        a.classList.toggle('active', isActive);
      });
    }
  });
}, { threshold: 0.3 });

sections.forEach(s => secObs.observe(s));

// Inject active style
const style = document.createElement('style');
style.textContent = '.nav-links a.active:not(.nav-accent) { color: var(--cream) !important; }';
document.head.appendChild(style);
