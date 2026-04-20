/* ═══════════════════════════════════════════════════
   PORTFOLIO v2 — Script (GSAP)
   ═══════════════════════════════════════════════════ */
(function () {
    'use strict';

    gsap.registerPlugin(ScrollTrigger);

    /* ── LANGUAGE PREFERENCE (cookie + info notice) ─── */
    const LANG_COOKIE = 'lang';
    const COOKIE_NOTICE_KEY = 'portfolio-cookie-notice';
    const pageLang = document.documentElement.lang === 'en' ? 'en' : 'pl';

    function setLangCookie(v) {
        const secure = location.protocol === 'https:' ? '; Secure' : '';
        document.cookie = `${LANG_COOKIE}=${v}; path=/; max-age=31536000; SameSite=Lax${secure}`;
    }

    document.querySelectorAll('.lang-switch__btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const val = btn.getAttribute('hreflang');
            if (val === 'pl' || val === 'en') setLangCookie(val);
        });
    });

    setLangCookie(pageLang);

    if (!localStorage.getItem(COOKIE_NOTICE_KEY)) {
        const TXT = pageLang === 'en' ? {
            msg: 'We use a single functional cookie to remember your chosen language. No tracking or analytics cookies are used.',
            btn: 'Got it',
            label: 'Cookie notice',
        } : {
            msg: 'Używamy jednego funkcjonalnego ciasteczka do zapamiętania wybranego języka. Nie stosujemy ciasteczek śledzących ani analitycznych.',
            btn: 'Rozumiem',
            label: 'Informacja o ciasteczkach',
        };

        const banner = document.createElement('div');
        banner.className = 'cookie-notice';
        banner.setAttribute('role', 'dialog');
        banner.setAttribute('aria-label', TXT.label);
        banner.innerHTML = `
            <p class="cookie-notice__msg">${TXT.msg}</p>
            <button class="cookie-notice__btn" type="button">${TXT.btn}</button>
        `;
        document.body.appendChild(banner);
        requestAnimationFrame(() => banner.classList.add('is-visible'));

        banner.querySelector('.cookie-notice__btn').addEventListener('click', () => {
            localStorage.setItem(COOKIE_NOTICE_KEY, '1');
            banner.classList.remove('is-visible');
            setTimeout(() => banner.remove(), 320);
        });
    }

    /* ── THEME TOGGLE ──────────────────────── */
    const THEME_KEY = 'portfolio-theme';
    const html = document.documentElement;
    const themeToggle = document.getElementById('themeToggle');

    themeToggle.addEventListener('click', () => {
        const isLight = html.getAttribute('data-theme') === 'light';
        const next = isLight ? 'dark' : 'light';
        html.classList.add('is-switching');
        if (next === 'dark') html.removeAttribute('data-theme');
        else html.setAttribute('data-theme', 'light');
        localStorage.setItem(THEME_KEY, next);
        setTimeout(() => html.classList.remove('is-switching'), 400);
    });

    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', e => {
        if (!localStorage.getItem(THEME_KEY)) {
            if (e.matches) html.setAttribute('data-theme', 'light');
            else html.removeAttribute('data-theme');
        }
    });

    /* ── NAV SCROLL ────────────────────────── */
    ScrollTrigger.create({
        start: 50,
        onUpdate: self => {
            const nav = document.getElementById('nav');
            if (self.scroll() > 50) nav.classList.add('scrolled');
            else nav.classList.remove('scrolled');
        },
    });

    /* ── BURGER / MOBILE NAV ───────────────── */
    const burger = document.getElementById('burger');
    let overlay = null;

    function closeMob() {
        burger.classList.remove('active');
        if (overlay) overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    burger.addEventListener('click', () => {
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.className = 'mob-overlay';
            const ul = document.createElement('ul');
            ul.className = 'mob-overlay__links';
            [['#about','O mnie'],['#skills','Stack'],['#projects','Projekty'],['#contact','Kontakt']].forEach(([href, text]) => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = href;
                a.textContent = text;
                a.addEventListener('click', closeMob);
                li.appendChild(a);
                ul.appendChild(li);
            });
            overlay.appendChild(ul);
            document.body.appendChild(overlay);
        }
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
    const phrases = ['Full-Stack Developer', 'Angular + .NET', 'TypeScript & C#'];
    let pi = 0, ci = 0, deleting = false;

    function typeStep() {
        const word = phrases[pi];
        if (!deleting) {
            typedEl.textContent = word.slice(0, ++ci);
            if (ci === word.length) { deleting = true; return gsap.delayedCall(2.4, typeStep); }
            return gsap.delayedCall(0.075, typeStep);
        }
        typedEl.textContent = word.slice(0, --ci);
        if (ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; return gsap.delayedCall(0.35, typeStep); }
        gsap.delayedCall(0.04, typeStep);
    }
    gsap.delayedCall(0.9, typeStep);

    /* ── HERO LEFT — staggered reveal ──────── */
    gsap.to('.hero__left [data-reveal]', {
        opacity: 1, duration: 1, stagger: 0.14, ease: 'power2.out', delay: 0.3,
    });

    /* ── HERO CARDS — entrance + float ─────── */
    const heroCards = gsap.utils.toArray('.hero__right .fcard, .hero__right .torb');
    gsap.fromTo(heroCards,
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, delay: 0.4, duration: 0.6, stagger: 0.08, ease: 'power2.out' }
    );

    heroCards.forEach((el, i) => {
        gsap.to(el, {
            y: -(14 + Math.random() * 8),
            duration: 1.8 + Math.random(),
            ease: 'sine.inOut',
            yoyo: true,
            repeat: -1,
            delay: 1 + i * 0.15,
        });
    });

    /* ── REVEAL ON SCROLL ──────────────────── */
    gsap.utils.toArray('[data-reveal]').forEach(el => {
        if (el.closest('.hero')) return;
        gsap.from(el, {
            y: 32, opacity: 0, duration: 0.8, ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        });
    });

    /* ── COUNTERS ──────────────────────────── */
    document.querySelectorAll('[data-count]').forEach(el => {
        const target = +el.dataset.count;
        const obj = { val: 0 };
        const inHero = !!el.closest('.hero');
        gsap.to(obj, {
            val: target, duration: 1.6, ease: 'power3.out',
            delay: inHero ? 1.2 : 0,
            ...(!inHero && { scrollTrigger: { trigger: el, start: 'top 85%', once: true } }),
            onUpdate: () => { el.textContent = Math.floor(obj.val); },
        });
    });


})();
