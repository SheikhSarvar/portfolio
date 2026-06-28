/**
 * motion.ts — Framer Motion variant library
 *
 * All durations and eases derive from the design token values.
 * Components import from here to stay consistent.
 */

import type { Variants } from 'framer-motion'

// ── PRIMARY VARIANTS ───────────────────────────────────────────────

/** Fade up — default scroll reveal */
export const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0, 0, 0.2, 1] },
  },
}

/** Fade down — used for nav items, dropdowns */
export const fadeDown: Variants = {
  hidden:  { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: [0, 0, 0.2, 1] },
  },
}

/** Fade in — minimal, for text blocks */
export const fadeIn: Variants = {
  hidden:  { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
}

/** Scale in with spring — for cards and badges */
export const scaleIn: Variants = {
  hidden:  { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35, ease: [0.34, 1.56, 0.64, 1] },
  },
}

/** Slide in from left */
export const slideLeft: Variants = {
  hidden:  { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0, 0, 0.2, 1] },
  },
}

/** Slide in from right */
export const slideRight: Variants = {
  hidden:  { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0, 0, 0.2, 1] },
  },
}

// ── STAGGER CONTAINERS ────────────────────────────────────────────

/**
 * Wrap a list of children in this container.
 * Each child should use one of the item variants above.
 */
export const staggerContainer: Variants = {
  hidden:  {},
  visible: {
    transition: {
      staggerChildren:  0.08,
      delayChildren:    0.1,
    },
  },
}

/** Faster stagger for dense grids (skill chips) */
export const staggerFast: Variants = {
  hidden:  {},
  visible: {
    transition: {
      staggerChildren: 0.04,
      delayChildren:   0.05,
    },
  },
}

/** Slower stagger for section headlines */
export const staggerSlow: Variants = {
  hidden:  {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren:   0.2,
    },
  },
}

// ── VIEWPORT DEFAULTS ─────────────────────────────────────────────

/** Default viewport trigger settings for whileInView */
export const defaultViewport = {
  once:   true,
  amount: 0.15,   // trigger when 15% is visible
} as const

// ── HOVER MICRO-INTERACTIONS ──────────────────────────────────────

export const cardHover = {
  rest: { y: 0, boxShadow: 'var(--shadow-md)' },
  hover: {
    y: -3,
    boxShadow: 'var(--shadow-xl)',
    transition: { duration: 0.2, ease: [0, 0, 0.2, 1] },
  },
}

export const accentCardHover = {
  rest:  { borderColor: 'rgb(226 232 237)' },
  hover: {
    borderColor: 'rgb(0 229 180 / 0.4)',
    transition: { duration: 0.2 },
  },
}

// ── TIMELINE LINE DRAW ────────────────────────────────────────────

export const timelineLine: Variants = {
  hidden:  { scaleY: 0, originY: 0 },
  visible: {
    scaleY: 1,
    transition: { duration: 1.2, ease: [0, 0, 0.2, 1] },
  },
}

// ── TEXT CHARACTER ANIMATION ──────────────────────────────────────

export const charContainer: Variants = {
  hidden:  {},
  visible: {
    transition: { staggerChildren: 0.025 },
  },
}

export const charItem: Variants = {
  hidden:  { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: [0, 0, 0.2, 1] },
  },
}
