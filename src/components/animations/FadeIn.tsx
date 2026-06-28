/**
 * FadeIn.tsx
 * Scroll-triggered reveal. Wraps any children.
 * Reads prefers-reduced-motion and skips animation when set.
 */

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { fadeUp, fadeIn, slideLeft, slideRight } from '../../lib/motion'
import { useReducedMotion } from '../../hooks'

type Direction = 'up' | 'none' | 'left' | 'right'

interface FadeInProps {
  children: React.ReactNode
  direction?: Direction
  delay?: number
  duration?: number
  className?: string
  /** How much of the element must be visible before triggering. Default 0.15 */
  amount?: number
}

const variantMap = {
  up:    fadeUp,
  none:  fadeIn,
  left:  slideLeft,
  right: slideRight,
}

export function FadeIn({
  children,
  direction = 'up',
  delay = 0,
  duration,
  className,
  amount = 0.15,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView  = useInView(ref, { once: true, amount })
  const reduced = useReducedMotion()

  const variant = variantMap[direction]

  // Build custom variant with delay / duration overrides
  const visible = {
    ...variant.visible,
    transition: {
      ...(variant.visible as { transition?: object }).transition,
      delay,
      ...(duration && { duration }),
    },
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={{ hidden: variant.hidden, visible }}
      initial={reduced ? 'visible' : 'hidden'}
      animate={inView || reduced ? 'visible' : 'hidden'}
    >
      {children}
    </motion.div>
  )
}
