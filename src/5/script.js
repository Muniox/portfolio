/* ===========================================
   PORTFOLIO — Main Script
   =========================================== */

(function () {
    'use strict';

    /* ----- Scroll Reveal (Intersection Observer) ----- */
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    revealElements.forEach((el) => revealObserver.observe(el));


    /* ----- Navigation — scroll background ----- */
    const nav = document.getElementById('nav');

    function updateNav() {
        nav.classList.toggle('scrolled', window.scrollY > 60);
    }

    window.addEventListener('scroll', updateNav, { passive: true });
    updateNav();


    /* ----- Navigation — active link tracking ----- */
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav__link');

    const sectionObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    navLinks.forEach((link) => {
                        link.classList.toggle(
                            'active',
                            link.getAttribute('href') === '#' + id
                        );
                    });
                }
            });
        },
        { threshold: 0.3, rootMargin: '-80px 0px -40% 0px' }
    );

    sections.forEach((section) => sectionObserver.observe(section));


    /* ----- Mobile burger menu ----- */
    const burger = document.getElementById('navBurger');
    const navLinksContainer = document.getElementById('navLinks');

    if (burger && navLinksContainer) {
        burger.addEventListener('click', () => {
            burger.classList.toggle('open');
            navLinksContainer.classList.toggle('open');
        });

        navLinksContainer.querySelectorAll('.nav__link').forEach((link) => {
            link.addEventListener('click', () => {
                burger.classList.remove('open');
                navLinksContainer.classList.remove('open');
            });
        });
    }


    /* ----- Hero typing effect ----- */
    const typedEl = document.getElementById('heroTyped');
    const phrases = [
        'dotnet run --project Portfolio',
        'ng serve --open',
        'git push origin main',
        'docker-compose up -d',
        'dotnet ef database update',
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingTimeout = null;

    function typeStep() {
        if (!typedEl) return;

        const current = phrases[phraseIndex];

        if (!isDeleting) {
            typedEl.textContent = current.substring(0, charIndex + 1);
            charIndex++;

            if (charIndex === current.length) {
                isDeleting = true;
                typingTimeout = setTimeout(typeStep, 2200);
                return;
            }

            typingTimeout = setTimeout(typeStep, 65 + Math.random() * 40);
        } else {
            typedEl.textContent = current.substring(0, charIndex - 1);
            charIndex--;

            if (charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                typingTimeout = setTimeout(typeStep, 400);
                return;
            }

            typingTimeout = setTimeout(typeStep, 30 + Math.random() * 20);
        }
    }

    // Start typing after hero animation completes
    setTimeout(typeStep, 1600);


    /* ----- Smooth scroll for anchor links ----- */
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', (e) => {
            const href = anchor.getAttribute('href');
            if (href === '#') return;

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

})();
