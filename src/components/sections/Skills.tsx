/**
 * Skills.tsx
 * ─────────────────────────────────────────────────────────────────
 * Tab interface cycling through skill categories.
 * Each skill shows a production/proficient/familiar level indicator.
 *
 * Interaction:
 * - Tab bar (keyboard navigable via arrow keys per ARIA spec)
 * - Active tab content fades/slides in
 * - Skill chips glow on hover with accent shadow
 * - Level legend at bottom of panel
 * ─────────────────────────────────────────────────────────────────
 */

import { useState, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionWrapper }  from '../layout/SectionWrapper'
import { FadeIn }          from '../animations/FadeIn'
import { StaggerChildren } from '../animations/StaggerChildren'
import { skills }          from '../../data/portfolio.data'
import { SECTION_IDS }     from '../../lib/constants'
import { fadeUp } from '../../lib/motion'
import { cn }              from '../../lib/utils'
import type { SkillLevel } from '../../data/portfolio.data'

// Level metadata
const LEVEL_META: Record<SkillLevel, { label: string; dots: number; color: string }> = {
  production: { label: 'Production',  dots: 3, color: 'bg-signal-500' },
  proficient: { label: 'Proficient',  dots: 2, color: 'bg-signal-500/60' },
  familiar:   { label: 'Familiar',    dots: 1, color: 'bg-base-300' },
}

function LevelDots({ level }: { level: SkillLevel }) {
  const { dots, color } = LEVEL_META[level]
  return (
    <span className="flex gap-[3px] items-center" aria-hidden="true">
      {[1, 2, 3].map((n) => (
        <span
          key={n}
          className={cn(
            'w-1.5 h-1.5 rounded-full transition-colors duration-200',
            n <= dots ? color : 'bg-base-200',
          )}
        />
      ))}
    </span>
  )
}

function SkillChip({
  name,
  level,
}: {
  name: string
  level: SkillLevel
}) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -2 }}
      className={cn(
        'flex items-center justify-between gap-3',
        'px-4 py-3 rounded-xl',
        'border border-base-200 bg-white',
        'hover:border-signal-500/35 hover:shadow-accent',
        'transition-all duration-200 group cursor-default',
      )}
    >
      <span className="text-sm font-medium text-base-700 group-hover:text-signal-700 transition-colors">
        {name}
      </span>
      <LevelDots level={level} />
    </motion.div>
  )
}

export function Skills() {
  const [activeTab, setActiveTab] = useState(0)
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([])

  // Arrow-key navigation per ARIA Tabs pattern
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, idx: number) => {
      if (e.key === 'ArrowRight') {
        const next = (idx + 1) % skills.length
        setActiveTab(next)
        tabsRef.current[next]?.focus()
      } else if (e.key === 'ArrowLeft') {
        const prev = (idx - 1 + skills.length) % skills.length
        setActiveTab(prev)
        tabsRef.current[prev]?.focus()
      } else if (e.key === 'Home') {
        setActiveTab(0)
        tabsRef.current[0]?.focus()
      } else if (e.key === 'End') {
        const last = skills.length - 1
        setActiveTab(last)
        tabsRef.current[last]?.focus()
      }
    },
    [],
  )

  const active = skills[activeTab]

  return (
    <SectionWrapper
      id={SECTION_IDS.skills}
      label="Skills"
      className="bg-base-100"
    >
      {/* Heading */}
      <FadeIn className="mb-12">
        <h2 className={cn(
          'font-display font-bold text-base-800',
          'text-[clamp(1.75rem,3.5vw,2.5rem)]',
          'tracking-tight leading-tight',
        )}>
          Tools I build with
        </h2>
        <p className="mt-3 text-base-500 text-base max-w-[48ch]">
          Filtered by what I've used in production. "Familiar" means implemented
          — not just read about.
        </p>
      </FadeIn>

      {/* Tab bar */}
      <div
        role="tablist"
        aria-label="Skill categories"
        className="flex flex-wrap gap-2 mb-8"
      >
        {skills.map(({ id, label }, idx) => (
          <button
            key={id}
            type="button"
            role="tab"
            id={`tab-${id}`}
            aria-selected={activeTab === idx}
            aria-controls={`panel-${id}`}
            ref={(el) => { tabsRef.current[idx] = el }}
            tabIndex={activeTab === idx ? 0 : -1}
            onClick={() => setActiveTab(idx)}
            onKeyDown={(e) => handleKeyDown(e, idx)}
            className={cn(
              'relative px-4 py-2 rounded-lg text-sm font-medium',
              'transition-all duration-150 focus-visible:outline-offset-2',
              activeTab === idx
                ? 'text-signal-700 bg-white border border-signal-500/30 shadow-accent'
                : 'text-base-500 hover:text-base-700 hover:bg-white/60 border border-transparent',
            )}
          >
            {activeTab === idx && (
              <motion.span
                layoutId="skills-tab-bg"
                className="absolute inset-0 rounded-lg bg-white border border-signal-500/30"
                transition={{ type: 'spring', duration: 0.35 }}
                aria-hidden="true"
              />
            )}
            <span className="relative">{label}</span>
          </button>
        ))}
      </div>

      {/* Panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          role="tabpanel"
          id={`panel-${active.id}`}
          aria-labelledby={`tab-${active.id}`}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.22, ease: [0, 0, 0.2, 1] }}
        >
          <StaggerChildren
            speed="fast"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
          >
            {active.skills.map(({ name, level }) => (
              <SkillChip key={name} name={name} level={level} />
            ))}
          </StaggerChildren>
        </motion.div>
      </AnimatePresence>

      {/* Level legend */}
      <FadeIn delay={0.3} className="mt-10 pt-6 border-t border-base-200">
        <div className="flex flex-wrap gap-5">
          {(Object.entries(LEVEL_META) as [SkillLevel, typeof LEVEL_META[SkillLevel]][]).map(
            ([level, { label, dots, color }]) => (
              <div key={level} className="flex items-center gap-2 text-xs text-base-500">
                <span className="flex gap-[3px]">
                  {[1, 2, 3].map((n) => (
                    <span
                      key={n}
                      className={cn('w-1.5 h-1.5 rounded-full', n <= dots ? color : 'bg-base-200')}
                    />
                  ))}
                </span>
                {label}
              </div>
            ),
          )}
        </div>
      </FadeIn>
    </SectionWrapper>
  )
}
