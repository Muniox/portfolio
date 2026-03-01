(function() {
    'use strict';

    // ── Custom Cursor ──
    const dot = document.querySelector('.cursor-dot');
    const ring = document.querySelector('.cursor-ring');
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        dot.style.left = mouseX + 'px';
        dot.style.top = mouseY + 'px';
    });

    function animateRing() {
        ringX += (mouseX - ringX) * 0.15;
        ringY += (mouseY - ringY) * 0.15;
        ring.style.left = ringX + 'px';
        ring.style.top = ringY + 'px';
        requestAnimationFrame(animateRing);
    }
    animateRing();

    // Hover effect on interactive elements
    document.querySelectorAll('a, button, .skill-card, .project-card').forEach(el => {
        el.addEventListener('mouseenter', () => ring.classList.add('hovering'));
        el.addEventListener('mouseleave', () => ring.classList.remove('hovering'));
    });

    // ── Navigation Scroll ──
    const nav = document.querySelector('.nav');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        if (scrollY > 80) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
        lastScroll = scrollY;
    }, { passive: true });

    // ── Mobile Navigation ──
    const hamburger = document.querySelector('.nav__hamburger');
    const mobileNav = document.querySelector('.mobile-nav');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileNav.classList.toggle('active');
        document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
    });

    mobileNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobileNav.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // ── Hero Name Animation ──
    function animateChars(elementId, startDelay) {
        const el = document.getElementById(elementId);
        const text = el.textContent;
        el.innerHTML = '';
        text.split('').forEach((char, i) => {
            const span = document.createElement('span');
            span.classList.add('char');
            span.textContent = char === ' ' ? '\u00A0' : char;
            span.style.animationDelay = (startDelay + i * 0.05) + 's';
            el.appendChild(span);
        });
    }

    animateChars('heroFirstName', 0.4);
    animateChars('heroLastName', 0.8);

    // ── Typing Effect ──
    const typedEl = document.getElementById('typed');
    const phrases = [
        'Fullstack .NET & Angular Developer',
        'Buduję skalowalne aplikacje webowe',
        'C# \u2022 TypeScript \u2022 Azure \u2022 Docker',
        'Clean Architecture & SOLID principles'
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 50;

    function typeEffect() {
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            typedEl.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 25;
        } else {
            typedEl.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 55;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            typeSpeed = 2500;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typeSpeed = 400;
        }

        setTimeout(typeEffect, typeSpeed);
    }

    setTimeout(typeEffect, 1500);

    // ── Intersection Observer for Reveals ──
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -60px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal, .skill-card').forEach(el => {
        observer.observe(el);
    });

    // ── Hero Canvas - Particle Grid ──
    const canvas = document.getElementById('heroCanvas');
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId;

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 1.5 + 0.3;
            this.speedX = (Math.random() - 0.5) * 0.3;
            this.speedY = (Math.random() - 0.5) * 0.3;
            this.opacity = Math.random() * 0.4 + 0.1;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0, 229, 160, ${this.opacity})`;
            ctx.fill();
        }
    }

    // Create particles — fewer on mobile for performance
    const isMobile = window.innerWidth < 700;
    const particleCount = isMobile
        ? Math.min(30, Math.floor(window.innerWidth / 20))
        : Math.min(80, Math.floor(window.innerWidth / 15));
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    const connectDist = isMobile ? 100 : 150;

    function connectParticles() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < connectDist) {
                    const opacity = (1 - dist / connectDist) * 0.12;
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(0, 229, 160, ${opacity})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        connectParticles();
        animationId = requestAnimationFrame(animateParticles);
    }

    animateParticles();

    // Pause animation when not visible
    const heroSection = document.querySelector('.hero');
    const heroObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (!animationId) animateParticles();
            } else {
                cancelAnimationFrame(animationId);
                animationId = null;
            }
        });
    }, { threshold: 0 });

    heroObserver.observe(heroSection);

    // ── Smooth scroll for anchor links ──
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

})();

// Form handler
function handleSubmit(e) {
    e.preventDefault();
    const btn = e.target.querySelector('.btn-primary');
    const originalText = btn.textContent;
    btn.textContent = 'Wysłano!';
    btn.style.background = '#00e5a0';
    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
        e.target.reset();
    }, 2000);
}