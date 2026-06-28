/**
 * hooks/index.ts - re-exports all custom hooks
 */

import { useEffect, useState } from 'react'

export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(() =>
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false,
  )

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return reduced
}

export function useScrollProgress(): number {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handler = () => {
      const el = document.documentElement
      const max = el.scrollHeight - el.clientHeight
      setProgress(max > 0 ? el.scrollTop / max : 0)
    }

    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return progress
}

export function useMouseParallax(strength = 0.02) {
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced) return

    const handler = (e: MouseEvent) => {
      const cx = window.innerWidth / 2
      const cy = window.innerHeight / 2
      setOffset({
        x: (e.clientX - cx) * strength,
        y: (e.clientY - cy) * strength,
      })
    }

    window.addEventListener('mousemove', handler, { passive: true })
    return () => window.removeEventListener('mousemove', handler)
  }, [reduced, strength])

  return offset
}

export function useActiveSection(sectionIds: string[]): string {
  const [active, setActive] = useState(sectionIds[0] ?? '')

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id)
        },
        { threshold: 0.35 },
      )

      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [sectionIds])

  return active
}
