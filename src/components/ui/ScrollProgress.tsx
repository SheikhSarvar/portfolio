/**
 * ScrollProgress.tsx
 * Thin accent-colored bar at the top of the viewport.
 * Tracks scroll position and fills left → right.
 */

import { motion, useScroll, useSpring } from 'framer-motion'
import { useReducedMotion } from '../../hooks'

export function ScrollProgress() {
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping:   30,
    restDelta: 0.001,
  })

  if (reduced) return null

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[70]"
      style={{
        scaleX,
        background: 'linear-gradient(90deg, #00E5B4, #3BFFD0)',
      }}
      aria-hidden="true"
    />
  )
}
