/**
 * TypewriterText.tsx
 * Cycles through an array of strings with a type/erase animation.
 * Respects prefers-reduced-motion by showing the first string statically.
 */

import { useState, useEffect, useRef } from 'react'
import { useReducedMotion } from '../../hooks'

interface TypewriterTextProps {
  words: readonly string[]
  /** ms to pause on completed word before erasing. Default 2200 */
  pauseMs?: number
  /** ms per character when typing. Default 60 */
  typeSpeed?: number
  /** ms per character when erasing. Default 35 */
  eraseSpeed?: number
  className?: string
}

export function TypewriterText({
  words,
  pauseMs   = 2200,
  typeSpeed = 60,
  eraseSpeed = 35,
  className = '',
}: TypewriterTextProps) {
  const reduced = useReducedMotion()
  const [displayed, setDisplayed] = useState('')
  const [wordIdx,   setWordIdx]   = useState(0)
  const [phase,     setPhase]     = useState<'typing' | 'pausing' | 'erasing'>('typing')
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (reduced) {
      setDisplayed(words[0])
      return
    }

    const current = words[wordIdx % words.length]

    const tick = () => {
      if (phase === 'typing') {
        setDisplayed((prev) => {
          const next = current.slice(0, prev.length + 1)
          if (next === current) {
            setPhase('pausing')
          }
          return next
        })
        timeoutRef.current = setTimeout(tick, typeSpeed)
      } else if (phase === 'pausing') {
        timeoutRef.current = setTimeout(() => setPhase('erasing'), pauseMs)
      } else {
        setDisplayed((prev) => {
          const next = prev.slice(0, -1)
          if (next === '') {
            setWordIdx((i) => (i + 1) % words.length)
            setPhase('typing')
          }
          return next
        })
        timeoutRef.current = setTimeout(tick, eraseSpeed)
      }
    }

    timeoutRef.current = setTimeout(tick, phase === 'typing' ? typeSpeed : eraseSpeed)
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [displayed, phase, wordIdx, words, reduced, typeSpeed, eraseSpeed, pauseMs])

  return (
    <span className={className} aria-label={words[wordIdx % words.length]}>
      {displayed}
      {/* Blinking cursor */}
      <span
        className="inline-block w-[2px] h-[0.85em] bg-signal-500 ml-[2px] align-middle"
        style={{
          animation: reduced ? 'none' : 'blink 1s step-end infinite',
        }}
        aria-hidden="true"
      />
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
      `}</style>
    </span>
  )
}
