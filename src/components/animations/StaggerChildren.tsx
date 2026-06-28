/**
 * StaggerChildren.tsx
 * Wraps a list of children and staggers their entrance animations.
 * Children should use FadeIn or motion.div with variants.
 */

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { staggerContainer, staggerFast, staggerSlow } from '../../lib/motion'
import { useReducedMotion } from '../../hooks'

interface StaggerChildrenProps {
  children: React.ReactNode
  speed?: 'fast' | 'normal' | 'slow'
  className?: string
  amount?: number
  as?: keyof JSX.IntrinsicElements
}

const speedMap = {
  fast:   staggerFast,
  normal: staggerContainer,
  slow:   staggerSlow,
}

export function StaggerChildren({
  children,
  speed = 'normal',
  className,
  amount = 0.1,
  as = 'div',
}: StaggerChildrenProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView  = useInView(ref, { once: true, amount })
  const reduced = useReducedMotion()

  const MotionTag = motion[as as 'div'] as typeof motion.div
  const variant   = speedMap[speed]

  return (
    <MotionTag
      ref={ref}
      className={className}
      variants={variant}
      initial={reduced ? 'visible' : 'hidden'}
      animate={inView || reduced ? 'visible' : 'hidden'}
    >
      {children}
    </MotionTag>
  )
}
