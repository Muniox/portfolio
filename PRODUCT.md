# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primarily tech recruiters and engineering/hiring managers evaluating Paweł Bartoszewski for a full-time senior Angular/.NET role. They arrive from LinkedIn, GitHub, a CV link or search, skim fast, and need to decide whether to reach out. Freelance and long-term collaboration enquiries are welcome but secondary.

## Product Purpose

A bilingual (Polish / English) personal portfolio at pbartoszewski.pl that presents Paweł as a full-stack developer and gets the right people to make contact. Success means a qualified recruiter or hiring lead understands his stack and seniority within a minute and uses the email or LinkedIn link.

## Positioning

Full-stack depth: end-to-end ownership across an Angular/TypeScript/RxJS frontend, .NET/C# APIs (SignalR, EF Core, REST), relational databases (Oracle, PostgreSQL), and a growing DevOps practice (GitLab CI/CD, Keycloak). Currently Senior Software Developer in the Digitalization department at LG Electronics, building systems that improve other departments' processes.

## Operating Context

- Visitors land on `/pl/` or `/en/` (nginx picks by `lang` cookie, then `Accept-Language`, default Polish); a PL/EN switch sits in the nav.
- Single-page flow: hero, about, tech stack, projects, contact, footer.
- Contact paths: email (pawelbartoszewski@gmail.com), GitHub (Muniox), LinkedIn (pawelbartoszewski). Location stated as Mława, Poland; prefers hybrid or remote work.
- Dark and light themes; the choice persists in localStorage and otherwise follows `prefers-color-scheme`.

## Capabilities and Constraints

- Static HTML/CSS/JS, no build step or package manager. Source lives in `src/`; `src/pl/index.html` and `src/en/index.html` are parallel pages that must stay structurally in sync.
- Served by nginx in Docker behind Traefik. The nginx CSP allows only `'self'` for fonts, images and styles, plus `https://cdn.jsdelivr.net` for GSAP scripts. Fonts are self-hosted; no third-party font CDNs.
- The inline theme-preloader `<script>` in both HTML files is whitelisted by a SHA-256 hash in `nginx.conf`; any change to it requires recomputing the hash (`node scripts/compute-csp-hash.js`).
- Motion is driven by GSAP + ScrollTrigger loaded from jsDelivr.
- One functional cookie (`lang`) with an info notice; no analytics or tracking.

## Evidence on Hand

- Role and employer: Senior Software Developer, Digitalization department, LG Electronics.
- On-site claims: 5+ years of experience, 17+ completed projects.
- Tech stack with logos in `src/assets/img/`.
- Portrait: `src/assets/img/Gemini_Generated_Image_hw6mtxhw6mtxhw6m.png`.
- Logo wordmark and favicon: `src/assets/img/logo/`.
- **Projects are placeholders.** The four project cards (TaskBoard Pro, ShopEngine, DataViz Dashboard, ChatFlow) and their Demo/GitHub links are stand-ins; real projects will replace them later. Design work must keep them clearly marked as placeholders and never invent project details, clients, metrics, links or testimonials.
- No testimonials, client logos, press or certifications exist; do not fabricate them.

## Product Principles

1. Recruiter-first: stack, seniority and a contact path are visible without effort; everything else supports that decision.
2. Show full-stack range honestly: frontend, backend, data and DevOps each get real weight, and nothing is claimed that isn't true.
3. The site is itself a work sample; its build quality should be consistent with the senior level it claims.
4. Polish and English are equal citizens; every change lands in both pages.
