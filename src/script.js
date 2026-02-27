/* ═══════════════════════════════════════════════════
   OBSIDIAN EDITORIAL — Portfolio Scripts
   Paweł Bartoszewski · Fullstack .NET & Angular
   ═══════════════════════════════════════════════════ */

(function () {
    'use strict';

    /* ── Custom Cursor ── */
    const cursor = document.querySelector('.cursor');
    if (cursor && matchMedia('(hover: hover) and (pointer: fine)').matches) {
        const dot = cursor.querySelector('.cursor__dot');
        const ring = cursor.querySelector('.cursor__ring');
        let mx = 0, my = 0;
        let rx = 0, ry = 0;

        document.addEventListener('mousemove', (e) => {
            mx = e.clientX;
            my = e.clientY;
            dot.style.left = mx + 'px';
            dot.style.top = my + 'px';
        });

        (function loop() {
            rx += (mx - rx) * 0.15;
            ry += (my - ry) * 0.15;
            ring.style.left = rx + 'px';
            ring.style.top = ry + 'px';
            requestAnimationFrame(loop);
        })();

        // Hover state on interactive elements
        const hoverTargets = document.querySelectorAll('a, button, .tech, .project, .stat-card');
        hoverTargets.forEach((el) => {
            el.addEventListener('mouseenter', () => cursor.classList.add('cursor--hover'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('cursor--hover'));
        });
    }


    /* ── Navigation scroll effect ── */
    const nav = document.querySelector('.nav');
    let lastScroll = 0;

    function onScroll() {
        const y = window.scrollY;
        if (y > 60) {
            nav.classList.add('nav--scrolled');
        } else {
            nav.classList.remove('nav--scrolled');
        }
        lastScroll = y;
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();


    /* ── Mobile menu ── */
    const hamburger = document.querySelector('.nav__hamburger');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-nav__link');

    if (hamburger && mobileNav) {
        hamburger.addEventListener('click', () => {
            const isOpen = mobileNav.classList.contains('mobile-nav--open');
            if (isOpen) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        mobileLinks.forEach((link) => {
            link.addEventListener('click', closeMenu);
        });

        function openMenu() {
            mobileNav.classList.add('mobile-nav--open');
            mobileNav.setAttribute('aria-hidden', 'false');
            hamburger.classList.add('nav__hamburger--active');
            document.body.style.overflow = 'hidden';
        }

        function closeMenu() {
            mobileNav.classList.remove('mobile-nav--open');
            mobileNav.setAttribute('aria-hidden', 'true');
            hamburger.classList.remove('nav__hamburger--active');
            document.body.style.overflow = '';
        }
    }


    /* ── Smooth scroll for anchor links ── */
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
        a.addEventListener('click', (e) => {
            const id = a.getAttribute('href');
            if (id === '#') return;
            const target = document.querySelector(id);
            if (!target) return;
            e.preventDefault();
            const top = target.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top, behavior: 'smooth' });
        });
    });


    /* ── Scroll Reveal (IntersectionObserver) ── */
    const revealElements = document.querySelectorAll('.reveal');

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('reveal--visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.12,
                rootMargin: '0px 0px -40px 0px',
            }
        );

        revealElements.forEach((el) => observer.observe(el));
    } else {
        // Fallback: show everything
        revealElements.forEach((el) => el.classList.add('reveal--visible'));
    }


    /* ── Active nav link on scroll ── */
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav__link:not(.nav__link--cta)');

    function highlightNav() {
        const scrollY = window.scrollY + 200;
        sections.forEach((section) => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollY >= top && scrollY < top + height) {
                navLinks.forEach((link) => {
                    link.classList.remove('nav__link--active');
                    if (link.getAttribute('href') === '#' + id) {
                        link.classList.add('nav__link--active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightNav, { passive: true });


    /* ── Contact form handler ── */
    window.handleSubmit = function (e) {
        e.preventDefault();
        const form = e.target;
        const btn = form.querySelector('button[type="submit"]');
        const originalHTML = btn.innerHTML;

        btn.innerHTML = '<span>Wysłano!</span>';
        btn.style.background = '#22C55E';
        btn.disabled = true;

        setTimeout(() => {
            btn.innerHTML = originalHTML;
            btn.style.background = '';
            btn.disabled = false;
            form.reset();
        }, 3000);
    };

})();
