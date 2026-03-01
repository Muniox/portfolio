/* ═══════════════════════════════════════════════════
   PORTFOLIO v2 — Script
   ═══════════════════════════════════════════════════ */
(function () {
    'use strict';

    /* ── NAV SCROLL ────────────────────────── */
    const nav = document.getElementById('nav');
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    /* ── BURGER / MOBILE NAV ───────────────── */
    const burger = document.getElementById('burger');
    let overlay = null;

    function buildOverlay() {
        overlay = document.createElement('div');
        overlay.className = 'mob-overlay';
        overlay.innerHTML = `<ul class="mob-overlay__links">
            <li><a href="#about">O mnie</a></li>
            <li><a href="#skills">Stack</a></li>
            <li><a href="#projects">Projekty</a></li>
            <li><a href="#contact">Kontakt</a></li></ul>`;
        document.body.appendChild(overlay);
        overlay.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMob));
    }

    function closeMob() {
        burger.classList.remove('active');
        if (overlay) overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    burger.addEventListener('click', () => {
        if (!overlay) buildOverlay();
        const open = burger.classList.toggle('active');
        overlay.classList.toggle('active', open);
        document.body.style.overflow = open ? 'hidden' : '';
    });

    /* ── SMOOTH SCROLL ─────────────────────── */
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
            const id = a.getAttribute('href');
            if (id === '#') return;
            const el = document.querySelector(id);
            if (!el) return;
            e.preventDefault();
            closeMob();
            el.scrollIntoView({ behavior: 'smooth' });
        });
    });

    /* ── TYPING EFFECT ─────────────────────── */
    const typedEl = document.getElementById('typed');
    const phrases = [
        'Frontend Developer',
        'Angular Expert',
        '.NET Developer',
        'TypeScript Enthusiast',
        'Full-Stack Engineer',
    ];
    let pi = 0, ci = 0, deleting = false;

    function typeStep() {
        const word = phrases[pi];
        if (!deleting) {
            typedEl.textContent = word.slice(0, ++ci);
            if (ci === word.length) { deleting = true; return setTimeout(typeStep, 2400); }
            return setTimeout(typeStep, 75);
        }
        typedEl.textContent = word.slice(0, --ci);
        if (ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; return setTimeout(typeStep, 350); }
        setTimeout(typeStep, 40);
    }
    setTimeout(typeStep, 900);

    /* ── REVEAL ON SCROLL ──────────────────── */
    const reveals = document.querySelectorAll('[data-reveal]');
    const revealObs = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('vis');
                revealObs.unobserve(e.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });
    reveals.forEach(el => revealObs.observe(el));

    /* Hero stagger — delayed until fonts settle */
    function revealHero() {
        document.querySelectorAll('.hero__left [data-reveal]').forEach((el, i) => {
            el.style.setProperty('--d', i);
            setTimeout(() => el.classList.add('vis'), 100 + i * 140);
        });
    }
    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => setTimeout(revealHero, 80));
    } else {
        setTimeout(revealHero, 600);
    }

    /* ── HERO CARDS ENTRANCE ───────────────── */
    const heroCards = document.querySelectorAll('.hero__right .fcard, .hero__right .torb');
    heroCards.forEach((el, i) => {
        setTimeout(() => el.classList.add('entered'), 700 + i * 200);
    });

    /* ── COUNTERS ──────────────────────────── */
    const counters = document.querySelectorAll('[data-count]');
    const cntObs = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) { animateNum(e.target); cntObs.unobserve(e.target); }
        });
    }, { threshold: 0.6 });
    counters.forEach(c => cntObs.observe(c));

    function animateNum(el) {
        const target = +el.dataset.count;
        const dur = 1600;
        const t0 = performance.now();
        (function step(now) {
            const p = Math.min((now - t0) / dur, 1);
            el.textContent = Math.floor((1 - Math.pow(1 - p, 3)) * target);
            if (p < 1) requestAnimationFrame(step);
        })(t0);
    }

    /* ── HERO SCENE PARALLAX ───────────────── */
    const scene = document.getElementById('heroScene');
    if (scene && window.matchMedia('(pointer:fine)').matches) {
        const items = scene.querySelectorAll('[data-depth]');
        document.addEventListener('mousemove', e => {
            const cx = (e.clientX / window.innerWidth - 0.5);
            const cy = (e.clientY / window.innerHeight - 0.5);
            items.forEach(item => {
                const d = parseFloat(item.dataset.depth) || 1;
                const x = cx * d * 18;
                const y = cy * d * 14;
                // preserve existing rotation by reading class
                if (item.classList.contains('fcard--main')) {
                    item.style.transform = `rotateY(${-14 + cx * 8}deg) rotateX(${6 - cy * 6}deg) translate(${x}px,${y}px)`;
                } else if (item.classList.contains('fcard--term')) {
                    item.style.transform = `rotateY(${8 + cx * 5}deg) rotateX(${-4 - cy * 4}deg) translate(${x}px,${y}px)`;
                } else if (item.classList.contains('fcard--status')) {
                    item.style.transform = `rotateY(${5 + cx * 4}deg) translate(${x}px,${y}px)`;
                } else {
                    item.style.transform = `translate(${x}px,${y}px)`;
                }
            });
        });
    }

    /* ── ORB PARALLAX ──────────────────────── */
    const orbs = document.querySelectorAll('.hero__orb');
    if (window.matchMedia('(pointer:fine)').matches) {
        window.addEventListener('mousemove', e => {
            const cx = e.clientX / window.innerWidth - 0.5;
            const cy = e.clientY / window.innerHeight - 0.5;
            orbs.forEach((o, i) => {
                const f = (i + 1) * 16;
                o.style.transform = `translate(${cx * f}px,${cy * f}px)`;
            });
        });
    }

    /* ── CONTACT FORM ──────────────────────── */
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', e => {
        e.preventDefault();
        const btn = form.querySelector('button[type="submit"]');
        const orig = btn.innerHTML;
        btn.innerHTML = 'Wysłano! &#10003;';
        btn.disabled = true;
        btn.style.opacity = '.6';
        setTimeout(() => { btn.innerHTML = orig; btn.disabled = false; btn.style.opacity = ''; form.reset(); }, 3000);
    });

})();
