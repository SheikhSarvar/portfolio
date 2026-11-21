/**
 * Skills.tsx
 * ─────────────────────────────────────────────────────────────────
 * Tab interface cycling through skill categories for Gulam Sarvar.
 * Each skill shows a production/proficient/familiar level indicator.
 * ─────────────────────────────────────────────────────────────────
 */

import { useState, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionWrapper }  from '../layout/SectionWrapper'
import { FadeIn }          from '../animations/FadeIn'
import { StaggerChildren } from '../animations/StaggerChildren'
import { skills }          from '../../data/portfolio.data'
import { SECTION_IDS }     from '../../lib/constants'
import { fadeUp }          from '../../lib/motion'
import { cn }              from '../../lib/utils'
import { ExternalLink }    from 'lucide-react'
import type { SkillLevel } from '../../data/portfolio.data'

// Level metadata
const LEVEL_META: Record<SkillLevel, { label: string; dots: number; color: string }> = {
  production: { label: 'Production Tested', dots: 3, color: 'bg-signal-500' },
  proficient: { label: 'Proficient',        dots: 2, color: 'bg-signal-500/60' },
  familiar:   { label: 'Familiar',          dots: 1, color: 'bg-base-300' },
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
  url,
}: {
  name: string
  level: SkillLevel
  url?: string
}) {
  const content = (
    <>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-base-800 group-hover:text-signal-700 transition-colors">
          {name}
        </span>
        {url && (
          <ExternalLink className="w-3.5 h-3.5 text-signal-500 opacity-60 group-hover:opacity-100 transition-opacity" />
        )}
      </div>
      <LevelDots level={level} />
    </>
  )

  if (url) {
    return (
      <motion.a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        variants={fadeUp}
        whileHover={{ y: -2 }}
        className={cn(
          'flex items-center justify-between gap-3',
          'px-4 py-3 rounded-xl',
          'border border-base-200 bg-white shadow-sm',
          'hover:border-signal-500/40 hover:bg-base-50 hover:shadow-md',
          'transition-all duration-200 group cursor-pointer',
        )}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -2 }}
      className={cn(
        'flex items-center justify-between gap-3',
        'px-4 py-3 rounded-xl',
        'border border-base-200 bg-white shadow-sm',
        'hover:border-signal-500/35 hover:bg-base-50 hover:shadow-md',
        'transition-all duration-200 group cursor-default',
      )}
    >
      {content}
    </motion.div>
  )
}

export function Skills() {
  const [activeTab, setActiveTab] = useState(0)
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([])

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

  const active = skills[activeTab] || skills[0]

  return (
    <SectionWrapper
      id={SECTION_IDS.skills}
      label="Skills & Technologies"
      className="bg-transparent"
    >
      {/* Heading */}
      <FadeIn className="mb-12">
        <h2 className={cn(
          'font-display font-bold text-base-800',
          'text-[clamp(1.75rem,3.5vw,2.5rem)]',
          'tracking-tight leading-tight',
        )}>
          Technical Skills &amp; Stack
        </h2>
        <p className="mt-3 text-base-500 text-base max-w-[50ch]">
          Battle-tested in live production: distributed workflow engines, enterprise telephony, high-concurrency databases, and real-time voice AI.
        </p>
      </FadeIn>

      {/* Tab bar */}
      <div
        role="tablist"
        aria-label="Skill categories"
        className="flex flex-wrap gap-2 mb-8"
      >
        {skills.map(({ id, label, skills: categorySkills }, idx) => (
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
              'relative px-4 py-2 rounded-xl text-xs sm:text-sm font-medium',
              'transition-all duration-150 focus-visible:outline-offset-2 flex items-center gap-2',
              activeTab === idx
                ? 'text-signal-700 bg-white border border-signal-500/30 shadow-sm'
                : 'text-base-500 hover:text-base-800 hover:bg-base-100 border border-transparent',
            )}
          >
            {activeTab === idx && (
              <motion.span
                layoutId="skills-tab-bg"
                className="absolute inset-0 rounded-xl bg-white border border-signal-500/30 shadow-sm"
                transition={{ type: 'spring', duration: 0.35 }}
                aria-hidden="true"
              />
            )}
            <span className="relative">{label}</span>
            <span className={cn(
              'relative px-1.5 py-0.5 rounded-full text-[10px] font-mono',
              activeTab === idx ? 'bg-signal-500/15 text-signal-700' : 'bg-base-200 text-base-500'
            )}>
              {categorySkills.length}
            </span>
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
            {active.skills.map(({ name, level, url }) => (
              <SkillChip key={name} name={name} level={level} url={url} />
            ))}
          </StaggerChildren>
        </motion.div>
      </AnimatePresence>

      {/* Level legend */}
      <FadeIn delay={0.3} className="mt-10 pt-6 border-t border-base-200">
        <div className="flex flex-wrap items-center gap-6">
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
