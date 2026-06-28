/**
 * SectionWrapper.tsx
 * Every portfolio section uses this as its outer container.
 * Handles: section ID anchoring, scroll reveal, consistent padding.
 */

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { cn } from '../../lib/utils'
import { fadeUp, defaultViewport } from '../../lib/motion'
import { useReducedMotion } from '../../hooks'

interface SectionWrapperProps {
  id: string
  children: React.ReactNode
  className?: string
  /** Remove default section padding (e.g. Hero handles its own) */
  noPadding?: boolean
  /** Max-width variant */
  width?: 'tight' | 'base' | 'wide' | 'full'
  /** Section label shown above heading (monospaced eyebrow) */
  label?: string
}

const widthMap = {
  tight: 'container-tight',
  base:  'container-base',
  wide:  'container-wide',
  full:  'w-full',
}

export function SectionWrapper({
  id,
  children,
  className,
  noPadding = false,
  width = 'wide',
  label,
}: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null)
  const inView  = useInView(ref, defaultViewport)
  const reduced = useReducedMotion()

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        !noPadding && 'py-[clamp(5rem,8vw,8rem)]',
        className,
      )}
    >
      <motion.div
        className={cn(widthMap[width])}
        variants={fadeUp}
        initial={reduced ? 'visible' : 'hidden'}
        animate={inView || reduced ? 'visible' : 'hidden'}
      >
        {label && (
          <p className="section-label mb-6" aria-hidden="true">
            {label}
          </p>
        )}
        {children}
      </motion.div>
    </section>
  )
}
