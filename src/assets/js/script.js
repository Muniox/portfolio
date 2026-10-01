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
            msg: 'This site uses a single functional cookie to remember your chosen language. No tracking or analytics cookies are used.',
            btn: 'Got it',
            label: 'Cookie notice',
        } : {
            msg: 'Ta strona używa jednego funkcjonalnego ciasteczka do zapamiętania wybranego języka. Nie stosuje ciasteczek śledzących ani analitycznych.',
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

    /* ── ACTIVE SECTION IN NAV ─────────────── */
    const navLinks = document.querySelectorAll('#navLinks .nav__link');
    let activeId = null;

    function setActive(id) {
        activeId = id;
        document.querySelectorAll('.nav__link, .mob-overlay__links a').forEach(a => {
            const on = a.getAttribute('href') === id;
            a.classList.toggle('is-active', on);
            if (on) a.setAttribute('aria-current', 'location');
            else a.removeAttribute('aria-current');
        });
    }

    navLinks.forEach(link => {
        const id = link.getAttribute('href');
        const section = document.querySelector(id);
        if (!section) return;
        ScrollTrigger.create({
            trigger: section, start: 'top center', end: 'bottom center',
            onToggle: self => {
                if (self.isActive) setActive(id);
                else if (activeId === id) setActive(null);
            },
        });
    });

    /* ── BURGER / MOBILE NAV ───────────────── */
    const burger = document.getElementById('burger');
    let overlay = null;

    function closeMob() {
        burger.classList.remove('active');
        burger.setAttribute('aria-expanded', 'false');
        if (overlay) overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    burger.addEventListener('click', () => {
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.className = 'mob-overlay';
            const ul = document.createElement('ul');
            ul.className = 'mob-overlay__links';
            // Labels come from the page's own nav, so /en/ gets English links
            navLinks.forEach(link => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = link.getAttribute('href');
                a.textContent = link.textContent;
                a.addEventListener('click', closeMob);
                li.appendChild(a);
                ul.appendChild(li);
            });
            overlay.appendChild(ul);
            document.body.appendChild(overlay);
            setActive(activeId);
        }
        const open = burger.classList.toggle('active');
        burger.setAttribute('aria-expanded', String(open));
        overlay.classList.toggle('active', open);
        document.body.style.overflow = open ? 'hidden' : '';
    });

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && burger.classList.contains('active')) {
            closeMob();
            burger.focus();
        }
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

    /* ── COPY E-MAIL ───────────────────────── */
    function copyFallback(text) {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.setAttribute('readonly', '');
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        let ok = false;
        try { ok = document.execCommand('copy'); } catch { ok = false; }
        ta.remove();
        return ok;
    }

    document.querySelectorAll('[data-copy]').forEach(btn => {
        const label = btn.querySelector('.contact__copy-lb');
        const status = document.getElementById('copyStatus');
        const idle = label.textContent;
        let resetTimer;

        btn.addEventListener('click', async () => {
            let ok;
            try {
                await navigator.clipboard.writeText(btn.dataset.copy);
                ok = true;
            } catch {
                ok = copyFallback(btn.dataset.copy);
            }
            btn.classList.toggle('is-done', ok);
            label.textContent = ok ? btn.dataset.done : btn.dataset.fail;
            if (status) status.textContent = ok ? btn.dataset.status : btn.dataset.fail;

            clearTimeout(resetTimer);
            resetTimer = setTimeout(() => {
                btn.classList.remove('is-done');
                label.textContent = idle;
                if (status) status.textContent = '';
            }, 2400);
        });
    });


})();
