/**
 * ============================================================
 * ISOMORPHIC PORTFOLIO — Paweł Bartoszewski
 * Interactive behaviors: scroll reveals, nav, counters, parallax
 * ============================================================
 */

(function () {
  'use strict';

  // ─── DOM Ready ───
  document.addEventListener('DOMContentLoaded', init);

  function init() {
    initCursorGlow();
    initNavigation();
    initScrollReveal();
    initCounters();
    initSkillLevels();
    initContactForm();
    initSmoothScroll();
    initParallaxBlocks();
  }

  // ─── Cursor Glow ───
  function initCursorGlow() {
    // Skip on touch devices
    if ('ontouchstart' in window) return;

    const glow = document.createElement('div');
    glow.classList.add('cursor-glow');
    document.body.appendChild(glow);

    let mouseX = -500, mouseY = -500;
    let glowX = -500, glowY = -500;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function animateGlow() {
      glowX += (mouseX - glowX) * 0.08;
      glowY += (mouseY - glowY) * 0.08;
      glow.style.left = glowX + 'px';
      glow.style.top = glowY + 'px';
      requestAnimationFrame(animateGlow);
    }

    animateGlow();
  }

  // ─── Navigation ───
  function initNavigation() {
    const nav = document.getElementById('nav');
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');
    let lastScroll = 0;

    // Scroll behavior: add background
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;

      if (scrollY > 60) {
        nav.classList.add('nav--scrolled');
      } else {
        nav.classList.remove('nav--scrolled');
      }

      lastScroll = scrollY;
    }, { passive: true });

    // Mobile toggle
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('active');
      links.classList.toggle('nav__links--open');
    });

    // Close menu on link click
    links.querySelectorAll('.nav__link').forEach(link => {
      link.addEventListener('click', () => {
        toggle.classList.remove('active');
        links.classList.remove('nav__links--open');
      });
    });
  }

  // ─── Scroll Reveal (Intersection Observer) ───
  function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');

    if (!('IntersectionObserver' in window)) {
      // Fallback: show all
      reveals.forEach(el => el.classList.add('reveal--visible'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal--visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    reveals.forEach(el => observer.observe(el));
  }

  // ─── Animated Counters ───
  function initCounters() {
    const counters = document.querySelectorAll('[data-count]');

    if (!counters.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(el => observer.observe(el));
  }

  function animateCounter(el) {
    const target = parseInt(el.dataset.count, 10);
    const duration = 2000;
    const start = performance.now();

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);

      el.textContent = current;

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }

  // ─── Skill Level Bars ───
  function initSkillLevels() {
    const levels = document.querySelectorAll('.stack__level');

    if (!levels.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const level = entry.target.dataset.level;
          entry.target.style.setProperty('--level-width', level + '%');
          entry.target.classList.add('stack__level--animated');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    levels.forEach(el => observer.observe(el));
  }

  // ─── Contact Form ───
  function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const btn = form.querySelector('.btn--primary');
      const originalText = btn.innerHTML;

      btn.innerHTML = '<span class="btn__iso-cube"></span> Wysłano!';
      btn.style.background = 'var(--accent-primary)';

      setTimeout(() => {
        btn.innerHTML = originalText;
        form.reset();
      }, 2500);
    });
  }

  // ─── Smooth Scroll ───
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const target = document.querySelector(anchor.getAttribute('href'));
        if (!target) return;

        e.preventDefault();

        const navHeight = document.getElementById('nav').offsetHeight;
        const targetPos = target.getBoundingClientRect().top + window.scrollY - navHeight - 20;

        window.scrollTo({
          top: targetPos,
          behavior: 'smooth'
        });
      });
    });
  }

  // ─── Parallax-like Floating Blocks ───
  function initParallaxBlocks() {
    if ('ontouchstart' in window) return;

    const scene = document.querySelector('.iso-scene');
    if (!scene) return;

    const blocks = scene.querySelectorAll('.iso-block:not(.iso-block--mini)');

    window.addEventListener('mousemove', (e) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;

      const dx = (e.clientX - cx) / cx; // -1 to 1
      const dy = (e.clientY - cy) / cy; // -1 to 1

      blocks.forEach((block, i) => {
        const factor = (i + 1) * 4;
        const x = dx * factor;
        const y = dy * factor;
        block.style.transform = `translateX(calc(-50% + ${x}px)) translateY(${y}px)`;
      });
    }, { passive: true });
  }

  // ─── Active nav link on scroll ───
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav__link:not(.nav__link--accent)');
    const navHeight = document.getElementById('nav').offsetHeight;

    let current = '';

    sections.forEach(section => {
      const top = section.offsetTop - navHeight - 100;
      if (window.scrollY >= top) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.style.color = '';
      if (link.getAttribute('href') === '#' + current) {
        link.style.color = 'var(--accent-primary)';
      }
    });
  }, { passive: true });

})();
