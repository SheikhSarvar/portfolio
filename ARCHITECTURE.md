# Portfolio v2 — Component Plan & Architecture

## Stack
- **Bundler**: Vite 5 (keeping existing)
- **Framework**: React 18
- **Language**: TypeScript strict
- **Styling**: Tailwind CSS v3 + custom tokens
- **Animation**: Framer Motion 11
- **3D**: @react-three/fiber + drei (lazy-loaded)
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod
- **Routing**: React Router v6 (hash — GitHub Pages compatible)

---

## Folder Structure

```
src/
├── styles/
│   ├── tokens.css         ✅ Done — all CSS variables
│   └── globals.css        ✅ Done — base reset + utilities
│
├── data/
│   └── portfolio.data.ts  ✅ Done — single source of truth
│
├── types/
│   └── index.ts           → Shared TypeScript types
│
├── lib/
│   ├── utils.ts           → cn(), formatDate(), etc.
│   ├── motion.ts          → Framer Motion variants
│   └── constants.ts       → NAV_ITEMS, SECTION_IDS
│
├── hooks/
│   ├── useScrollProgress.ts   → scroll % for progress bar
│   ├── useInView.ts           → intersection observer wrapper
│   ├── useMouseParallax.ts    → hero parallax effect
│   └── useReducedMotion.ts    → prefers-reduced-motion
│
├── components/
│   ├── ui/                    → Primitives (shadcn + custom)
│   │   ├── Button.tsx
│   │   ├── Badge.tsx
│   │   ├── Chip.tsx
│   │   ├── Card.tsx
│   │   ├── Tooltip.tsx
│   │   └── ScrollProgress.tsx
│   │
│   ├── layout/
│   │   ├── Nav.tsx            → Sticky glass nav
│   │   ├── Footer.tsx
│   │   └── SectionWrapper.tsx → Scroll reveal wrapper
│   │
│   ├── animations/
│   │   ├── FadeIn.tsx         → Scroll-triggered fade
│   │   ├── StaggerChildren.tsx
│   │   ├── TypewriterText.tsx → Animated headline
│   │   └── AuroraBackground.tsx → Hero bg effect
│   │
│   ├── 3d/
│   │   ├── ParticleField.tsx  → Subtle WebGL particles
│   │   └── GeometricFloat.tsx → Floating shapes (lazy)
│   │
│   └── sections/
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Skills.tsx
│       ├── Experience.tsx
│       ├── Projects.tsx
│       ├── CaseStudies.tsx
│       ├── OpenSource.tsx
│       ├── Testimonials.tsx   → Placeholder until populated
│       └── Contact.tsx
│
└── App.tsx                    → Router + layout shell
```

---

## Component Specifications

### Nav
- Sticky, glass morphism on scroll
- Links: Hero / About / Skills / Experience / Projects / Contact
- Right: "Open to work" badge + Resume button
- Mobile: hamburger → slide-down drawer
- Smooth scroll to section anchors

### Hero
**Signature element**: The hero background is an "aurora mesh" —
a slow-moving CSS gradient animation in signal-500/depth-800 tones,
visible through a near-white frosted panel. Not particles, not a 3D globe.
The effect is subtle; it establishes the color identity without noise.

- TypewriterText cycling through: "AI Engineer" / "Voice AI Builder" / "RAG Systems" / "Open Source"
- Availability badge (pulsing dot)
- Two CTAs: "View Work" (primary) + "View GitHub" (ghost)
- Social icon row: GitHub, LinkedIn
- Location chip

### About
- Two-column on desktop: text left, stats/highlights right
- Stats: "2+ yrs prod AI", "150–200 calls/day", "143 unit tests"
- No fabricated numbers beyond what's confirmed

### Skills
- Tab interface: AI · Voice · Vector · Backend · Frontend · DevOps
- Each skill shows level indicator: production (filled) / proficient (3/4) / familiar (1/2)
- Hover: chip glows with accent shadow

### Experience
- Vertical timeline, left-aligned
- Bluebash entry has two sub-blocks: Kickcall + RAG Systems
- Tech tags per highlight
- Animated line draw on scroll

### Projects
- Card grid, 3 featured on top
- Each card: name, tagline, tech chips, links
- Hover: lift + accent border glow
- "Case Study" tag for deeper entries

### Contact
- Split: left = short copy + links, right = form
- Form fields: Name, Email, Message, Send button
- No backend yet — TODO comment for EmailJS / Resend integration

---

## Motion System (Framer Motion variants)

```typescript
// src/lib/motion.ts

export const fadeUp = {
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0, 0, 0.2, 1] } },
}

export const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08 } },
}

export const scaleIn = {
  hidden:  { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.35, ease: [0.34, 1.56, 0.64, 1] } },
}
```

---

## Performance Budget

| Asset type     | Budget       |
|---------------|--------------|
| Initial JS     | < 150 KB gz  |
| 3D chunk       | Lazy, < 80 KB gz |
| LCP image      | < 200 KB     |
| CLS            | < 0.05       |
| FID/INP        | < 100ms      |

3D: loaded only when IntersectionObserver fires on Hero section,
and never loaded when `prefers-reduced-motion: reduce` is active.

---

## Dependency List (additions to existing)

```json
{
  "dependencies": {
    "@react-three/fiber": "^8.x",
    "@react-three/drei": "^9.x",
    "three": "^0.168.x",
    "react-hook-form": "^7.x",
    "zod": "^3.x",
    "@hookform/resolvers": "^3.x",
    "react-router-dom": "^6.x"
  },
  "devDependencies": {
    "@tailwindcss/typography": "^0.5.x",
    "tailwindcss-animate": "^1.x"
  }
}
```

---

## Phase Checklist

- [x] Phase 1: Design system, tokens, data, architecture
- [ ] Phase 2: Nav, Hero, About, AuroraBackground, global animation setup
- [ ] Phase 3: Skills, Experience, Projects
- [ ] Phase 4: CaseStudies, OpenSource, Certifications
- [ ] Phase 5: Contact, Footer, SEO files
- [ ] Phase 6: Perf audit, a11y, deploy guide
