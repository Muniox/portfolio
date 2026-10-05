---
name: Paweł Bartoszewski — Portfolio
description: Code Noir, a night-editor world for a full-stack Angular/.NET developer, with Code Blanc as its daytime twin.
colors:
  midnight-ink: "#07070d"
  ink-raised: "#0e0e18"
  card-ink: "#121220"
  card-ink-hover: "#191930"
  hairline: "#1a1a30"
  hairline-strong: "#28284a"
  bone: "#eceae4"
  ash: "#8b8ba0"
  faint-slate: "#80809a"
  signal-red: "#ff3355"
  signal-red-hover: "#ff4d6a"
  electric-violet: "#7c5cfc"
  build-mint: "#00ddb0"
  blanc-paper: "#f5f3ef"
  blanc-paper-deep: "#eeebe5"
  blanc-card: "#faf9f7"
  blanc-hairline: "#dedad3"
  blanc-hairline-strong: "#c8c3ba"
  blanc-ink: "#181614"
  blanc-ash: "#56524d"
  blanc-faint: "#6f6963"
  blanc-red: "#d4193a"
  blanc-violet: "#5b3fd4"
  blanc-mint: "#007a61"
  syntax-keyword: "#ff6b8a"
  syntax-property: "#7c9cff"
  syntax-string: "#98d964"
  syntax-type: "#ffd666"
  syntax-function: "#56d8c0"
  syntax-decorator: "#c78bfa"
typography:
  display:
    fontFamily: "Bricolage Grotesque, sans-serif"
    fontSize: "clamp(2.6rem, 5.5vw, 4.5rem)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.04em"
  display-compact:
    fontFamily: "Bricolage Grotesque, sans-serif"
    fontSize: "clamp(2rem, 10.5vw, 3.25rem)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.04em"
  numeric:
    fontFamily: "Bricolage Grotesque, sans-serif"
    fontSize: "2rem"
    fontWeight: 800
    lineHeight: 1
  headline:
    fontFamily: "Bricolage Grotesque, sans-serif"
    fontSize: "clamp(1.5rem, 3vw, 2.3rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Bricolage Grotesque, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 700
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
  body-sm:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.65
  action:
    fontFamily: "Fira Code, JetBrains Mono, monospace"
    fontSize: "0.8125rem"
    fontWeight: 500
    letterSpacing: "0.06em"
  label:
    fontFamily: "Fira Code, JetBrains Mono, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    letterSpacing: "0.1em"
  micro:
    fontFamily: "Fira Code, JetBrains Mono, monospace"
    fontSize: "0.6875rem"
    fontWeight: 400
    letterSpacing: "0.14em"
  code:
    fontFamily: "Fira Code, JetBrains Mono, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.8
  code-sm:
    fontFamily: "Fira Code, JetBrains Mono, monospace"
    fontSize: "0.6875rem"
    fontWeight: 400
    lineHeight: 1.75
rounded:
  hairline: "2px"
  sm: "8px"
  md: "12px"
  lg: "14px"
  xl: "16px"
  pill: "999px"
spacing:
  gutter: "clamp(20px, 5vw, 48px)"
  section: "clamp(100px, 14vw, 180px)"
  sm: "14px"
  md: "24px"
  lg: "48px"
components:
  button-primary:
    backgroundColor: "{colors.signal-red}"
    textColor: "#ffffff"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "13px 30px"
  button-primary-hover:
    backgroundColor: "{colors.signal-red-hover}"
  button-ghost:
    backgroundColor: "{colors.midnight-ink}"
    textColor: "{colors.ash}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "13px 30px"
  button-ghost-hover:
    textColor: "{colors.signal-red}"
  status-pill:
    textColor: "{colors.build-mint}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "7px 18px"
  code-window:
    backgroundColor: "{colors.card-ink}"
    textColor: "{colors.ash}"
    typography: "{typography.code}"
    rounded: "{rounded.lg}"
  project-card:
    backgroundColor: "{colors.card-ink}"
    rounded: "{rounded.xl}"
    padding: "24px 28px 28px"
  stack-layer:
    backgroundColor: "{colors.card-ink}"
    rounded: "{rounded.lg}"
    padding: "20px"
  stack-tile:
    backgroundColor: "{colors.midnight-ink}"
    textColor: "{colors.bone}"
    rounded: "4px"
    padding: "16px 18px"
  stack-via:
    backgroundColor: "{colors.midnight-ink}"
    textColor: "{colors.bone}"
    rounded: "{rounded.pill}"
    padding: "6px 16px 6px 6px"
  tech-orb:
    rounded: "{rounded.xl}"
    size: "56px"
  social-button:
    backgroundColor: "{colors.midnight-ink}"
    textColor: "{colors.ash}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 20px 0 16px"
    height: "44px"
---

# Design System: Paweł Bartoszewski — Portfolio

## Overview

**Creative North Star: "Code Noir"**

Code Noir is a code editor at night, turned into a stage. The ground is near-black ink with a faint violet cast, a fine noise grain over everything, and a grid that glows out of the dark behind the hero. On that ground, editor artifacts float: glass code windows with traffic-light chrome, a terminal, a green "Build Passed" badge, tech-logo tiles bobbing on their own sine loops. Heat comes from a single red-to-violet gradient that runs through the surname, section keywords and blurred orbs; a mint signal marks anything that is live or passing.

The system is expressive by intent. Components are allowed to show off: glass, glow, lift, floating motion, corner brackets that snap in, logos that brighten into their own brand color. That expressiveness is the proof of craft for a developer whose site is itself a work sample, but it always sits on a strict typographic skeleton of Bricolage Grotesque headlines, Plus Jakarta Sans prose and Fira Code labels. Density is comfortable, never crowded; sections breathe with very large vertical padding.

Code Blanc is the daytime twin, not a separate brand: warm paper instead of ink, darker and more saturated versions of the same red, violet and mint, warm-tinted low-opacity shadows, and a multiplied noise grain. Every rule below applies to both themes through the same custom properties.

**Key Characteristics:**
- Near-black violet-cast ground with noise grain and a masked hero grid
- One red→violet gradient (135°) as the signature heat; mint reserved for "live / passing"
- Editor-world props: code windows, terminal, syntax-colored code, file-name tabs, `<tag/>` labels
- Layered glass and ambient shadow as a recurring material
- Mono uppercase labels everywhere small text needs authority
- Expo-out easing on every interaction, sine-float ambient motion in the hero

## Colors

A dark, violet-leaning neutral ramp carrying three saturated signals: red for action, violet as its gradient partner, mint for status.

### Primary
- **Signal Red** (`signal-red`): the action color. Primary buttons, nav underline, section numbers, the typing caret and dash, counter plus signs, contact icons, hover states on ghost buttons, links and social tiles, the map pin. Brightens to **Signal Red Hover** on hover.

### Secondary
- **Electric Violet** (`electric-violet`): the gradient partner. Paired with Signal Red at 135° in the `.gr` gradient text (surname, one keyword per section heading), the logo's bottom-right corner mark, the backend category in the stack, hero orb B, and outgoing chat bubbles in project mockups.

### Tertiary
- **Build Mint** (`build-mint`): the status color. The "available for work" pill and its pulsing dot, the "Build Passed" badge, the DevOps category, hero orb C. It means "live, passing, open".

### Neutral
- **Midnight Ink** (`midnight-ink`): page ground, ghost-button fill, stack-tile fill.
- **Ink Raised** (`ink-raised`) / **Card Ink** (`card-ink`) / **Card Ink Hover** (`card-ink-hover`): tonal steps for raised surfaces, code windows and project cards.
- **Hairline** (`hairline`) / **Hairline Strong** (`hairline-strong`): 1px borders, dividers, the stack grid gutters, toggle track.
- **Bone** (`bone`): primary text and strong inline emphasis; warm off-white rather than pure white.
- **Ash** (`ash`): secondary text, body paragraphs, nav links at rest.
- **Faint Slate** (`faint-slate`): meta labels, file names in window chrome, section tags.

### Code Blanc (light theme)
`blanc-*` tokens map one-to-one onto the dark roles: Blanc Paper ground, Blanc Card surfaces, Blanc Ink text, Blanc Ash and Blanc Faint secondary text, and deeper Blanc Red / Blanc Violet / Blanc Mint so the signals keep contrast on paper.

### Syntax
Code windows use a fixed six-color syntax palette (`syntax-*`): keyword pink, property blue, string green, type yellow, function teal, decorator lilac. Code Blanc swaps in darker equivalents. Window chrome uses macOS traffic-light dots (#ff5f57, #febc2e, #28c840).

### Named Rules
**The One Gradient Rule.** There is exactly one gradient voice: Signal Red → Electric Violet at 135°. Headings get one gradient word at most; never introduce a second gradient pairing.

**The Mint Means Live Rule.** Build Mint marks status (available, passing, live). It is never a decorative accent or a button color.

**The Brand-Color Tile Rule.** Tech tiles light up in the technology's own brand color (`--col`) on hover, never in the site accent. The site's palette frames the logos; the logos bring their own color.

## Typography

**Display Font:** Bricolage Grotesque (sans-serif fallback), variable 200–800, self-hosted
**Body Font:** Plus Jakarta Sans (sans-serif fallback), 300–700 with italics, self-hosted
**Label/Mono Font:** Fira Code (JetBrains Mono, monospace fallback), 400–500, self-hosted

**Character:** A quirky, tightly tracked grotesque for headlines against a friendly geometric sans for reading, with Fira Code doing all the small, authoritative labelling, so the page reads like a well-typeset IDE.

### Hierarchy
- **Display** (800, `clamp(2.6rem,5.5vw,4.5rem)` from 769px, `clamp(2rem,10.5vw,3.25rem)` below; line-height 0.92; −0.04em): the stacked name in the hero only. Second line carries the gradient.
- **Headline** (700, `clamp(1.5rem,3vw,2.3rem)`, 1.2, −0.02em): section headings, with one gradient keyword.
- **Title** (700, 1.2rem, −0.01em): project card titles.
- **Body** (400, 1rem, 1.7): hero, about and contact paragraphs in Ash with Bone `strong` emphasis; max width 28–34rem.
- **Body Small** (400, 0.875rem, 1.65): project descriptions, footer, cookie notice.
- **Action** (Fira Code 500, 0.8125rem, 0.06em, uppercase for buttons): buttons, tech names in tiles, contact rows.
- **Label** (Fira Code 500, 0.75rem, 0.1em, uppercase): nav links, section tags, pills, project links and numbers, social and copy pills, transport chips.
- **Micro** (Fira Code, 0.6875rem / 11px, 0.14em, uppercase): tile "kind" lines, layer meta, wire labels, project tags, counter labels, window file names. 11px is the floor; nothing functional goes smaller.
- **Code** (Fira Code 400, 0.75rem, 1.8): the About code window and its line numbers. **Code Small** (0.6875rem, 1.75): the decorative hero code and terminal cards.
- **Numeric** (Bricolage 800, 2rem, tabular-nums): hero counters; outlined Bricolage 700 at 2.6rem (−0.04em) with a 1.5px text-stroke for stack category numbers.

All sizes live as `--fs-*` custom properties (with `--tr-micro/label/action` tracking) in `:root`; components reference the role, never a raw rem value.

### Named Rules
**The Mono Authority Rule.** Any label, tag, number prefix, button or meta line under ~0.8rem is Fira Code, usually uppercase and tracked. Plus Jakarta Sans is for sentences only.

## Layout

Mobile-first single column that opens into two-column splits. Content sits in a 1200px max-width wrap with a fluid `clamp(20px,5vw,48px)` gutter. Sections use very generous vertical padding (`clamp(72px,10vw,120px)` on mobile, `clamp(100px,14vw,180px)` from 769px). Every section opens with a numbered mono tag (`01 ── O mnie`) above its headline.

Breakpoints: 481px (buttons go inline, stack grid to two columns), 720px (stack header compacts, below), 769px (desktop nav, hero composition appears, map globe appears), 1025px (about, projects and contact become two-column; code window turns sticky), 1101px (hero splits 1fr/1fr with the full-size floating composition).

The hero is full-viewport with a text column on the left and an absolutely positioned floating-card composition on the right; it fades into the next section with an 80–200px masked gradient. The stack section is a system-architecture diagram: frontend, backend and data layers stack vertically, joined by "wires" (REST API and SignalR between frontend and backend, an "sql" link to data). From 1025px a 210px DevOps rail runs down the right beside all three layers; below that it follows the data layer. The whole diagram sits on a masked 48px grid.

## Elevation & Depth

Depth is layered throughout. The ground itself has three planes (noise grain on top of everything, a masked grid, blurred colored orbs at 6–20% opacity), and components sit above it as glass or lifted cards. Glass is `backdrop-filter: blur(12–24px)` over semi-transparent ink (`rgba(14,14,26,.8–.92)`) with a white-6–8% hairline border. Shadows are large, soft and dark in Code Noir, and warm-tinted at much lower opacity in Code Blanc. Hover responds with lift (−2 to −8px) plus a deeper shadow.

### Shadow Vocabulary
- **Float** (`box-shadow: 0 24px 80px rgba(0,0,0,.5), 0 4px 20px rgba(0,0,0,.3)`): hero glass code, terminal and status cards.
- **Orb** (`box-shadow: 0 8px 30px rgba(0,0,0,.4)`): floating tech-logo tiles.
- **Lift** (`box-shadow: 0 28px 72px rgba(0,0,0,.4)`): project card on hover.
- **Mockup** (`box-shadow: 0 12px 40px rgba(0,0,0,.4)`): mini UI mockups inside project visuals.
- **Red glow** (`box-shadow: 0 10px 32px rgba(255,51,85,.25)`): primary button on hover.
- **Signal glow** (`box-shadow: 0 0 10px <signal>`): pulsing status dots and the map pin.
- **Blanc** variants: same geometry with `rgba(24,22,20,.07–.14)`.

### Named Rules
**The Glass Over Grain Rule.** Glass surfaces only work because something textured sits behind them (grid, orb, noise). Never put a glass card on a flat, empty field.

## Shapes

Two corner families coexist on purpose. Soft: pills (999px) for buttons, tags, toggles and status; 14–16px for cards, code windows and orbs; 12px for social tiles; 8px for mockups. 4px for the tech-stack tiles. L-shaped corner brackets (the logo's `logo__cn` marks and the tiles' `stack__bk`) frame content like a viewfinder. Circles are reserved for status dots, the portrait and the footer back-to-top button.

## Components

### Buttons
Tactile pills that lift.
- **Shape:** fully rounded pill (999px), Fira Code 500 at 0.78rem, uppercase, 0.06em tracking, `13px 30px` padding; full width on mobile, auto from 481px.
- **Primary:** Signal Red fill, white text, optional arrow icon. Hover: Signal Red Hover, −2px lift, red glow.
- **Ghost:** Midnight Ink fill, Hairline Strong 1px border, Ash text. Hover: border and text turn Signal Red, −2px lift.
- **Motion:** `all .35s cubic-bezier(.19,1,.22,1)`.

### Status Pill
Mono uppercase label in Build Mint with a pulsing 7px dot, mint border at 20% and fill at 4%. Used for availability.

### Navigation
Fixed 64/72px bar, transparent at the top, frosted (`blur(18px) saturate(180%)`, 85% ink) with a bottom hairline once scrolled. Wordmark logo "PBartoszewski" in Bricolage 700 with red top-left and violet bottom-right corner brackets that spread on hover. Links are Fira Code uppercase in Ash with a 2px red underline that grows from the left; the link for the section in view stays Bone with the full underline (`.is-active`, `aria-current="location"`), in the mobile overlay too. PL/EN segmented switch with a sliding thumb, and a sun/moon theme toggle whose red thumb slides. Below 769px a burger opens a full-screen blurred overlay with large Bricolage links, built from the page's own nav (so each language keeps its labels) and closed with Escape.

### Code Window (signature)
The system's recurring artifact: a 14px-radius card with a traffic-light title bar, a file name in Faint Slate on the right, and syntax-colored Fira Code. In the hero it is glass and floating; in About it is solid Card Ink and sticky beside the text.

### Tech Stack Architecture (signature)
The stack is drawn as the path a request takes. Each layer is a 14px glass card (72% Card Ink, `blur(12px)`) with a 13% radial wash of its accent (`--cat`) from the top-left. Its header has the outlined number, the `<tag/>` label and a meta line. Tiles are horizontal (logo, then mono name over a "kind" label); the frontend layer's five tiles run 2+2+1 below 769px and 3+2 above on Midnight Ink with 4px corners; the backend's .NET and EF Core tiles use a Bricolage name. Between layers, two dashed channels carry animated packets: red going down (request), violet going up (response), labelled directly on the first wire next to each channel (dot on the cable side). Transport technologies (REST API, SignalR) sit on the wire as pill chips. The DevOps rail uses the same card as the layers, tinted with its mint accent. On hover a tile's background lifts to Card Ink, a radial glow in the technology's own color (`--col`) fades in, corner brackets slide into place, a 2px bottom bar wipes in, and the logo returns to full color. Animation stops under `prefers-reduced-motion`. In Code Blanc the tiles and chips are white and the layer shadows are warm and soft.

### Cards / Containers (Project Card)
- **Corner Style:** 16px.
- **Background:** Card Ink with a Hairline border; the top visual is a 200–240px gradient field holding a mini UI mockup.
- **Shadow Strategy:** flat at rest; Lift shadow and −8px translate on hover, mockup scales to 1.02.
- **Internal Padding:** `24px 28px 28px`; red mono number, Bricolage title, Ash description, outlined mono pill tags, mono uppercase links.

### Floating Tech Orbs
56px glass squares (16px radius) holding a single tech logo, each with a border tinted to that brand, bobbing on independent sine loops in the hero.

### Contact
Headline with a gradient final word, mono contact rows with red icons; the e-mail row carries a small ghost-pill "copy" button that confirms in Build Mint with a check icon and a polite status message. LinkedIn and GitHub are labelled 44px ghost pills (icon + mono uppercase name) that lift and turn red on hover. From 769px a large dotted globe map sits behind the section with a pulsing red pin on Mława.

## Do's and Don'ts

### Do:
- **Do** drive every color through the `:root` / `[data-theme="light"]` custom properties so Code Noir and Code Blanc stay in lockstep.
- **Do** use `cubic-bezier(.19,1,.22,1)` for interaction transitions (0.3–0.55s) and GSAP `power2.out` for reveals.
- **Do** keep small labels in Fira Code, uppercase, tracked 0.06–0.14em, never below 11px.
- **Do** give each section heading at most one gradient word.
- **Do** put glass and floating cards over a textured backdrop (grid, orbs, noise).
- **Do** give tech tiles their own brand color via `--col` and categories their accent via `--cat`.
- **Do** tone shadows down and warm-tint them in Code Blanc (`rgba(24,22,20,…)`).

### Don't:
- **Don't** introduce a second gradient pairing or new accent hues outside the red / violet / mint triad.
- **Don't** use Build Mint for buttons or decoration; it only means live / passing.
- **Don't** use pure white (#fff) for body text in Code Noir; text is Bone.
- **Don't** load fonts or assets from third-party origins; the production CSP only allows `'self'` (GSAP from jsDelivr is the single exception).
- **Don't** present placeholder projects as real work or invent project details, metrics or links.
