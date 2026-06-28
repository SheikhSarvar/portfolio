/**
 * Projects.tsx
 * ─────────────────────────────────────────────────────────────────
 * Featured projects grid.
 *
 * Layout:
 * - Featured (3) in a bento-style top row
 * - Remaining projects in a uniform 3-col grid below
 * - Filter tabs: All | Product | Open Source | Case Study
 * ─────────────────────────────────────────────────────────────────
 */

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionWrapper }  from '../layout/SectionWrapper'
import { FadeIn }          from '../animations/FadeIn'
import { StaggerChildren } from '../animations/StaggerChildren'
import { ProjectCard }     from '../ui/ProjectCard'
import { projects }        from '../../data/portfolio.data'
import { SECTION_IDS }     from '../../lib/constants'
import { fadeUp }          from '../../lib/motion'
import { cn }              from '../../lib/utils'
import type { Project }    from '../../data/portfolio.data'

type Filter = 'all' | Project['type']

const FILTERS: { value: Filter; label: string }[] = [
  { value: 'all',          label: 'All'         },
  { value: 'product',      label: 'Products'    },
  { value: 'open-source',  label: 'Open Source' },
  { value: 'case-study',   label: 'Case Studies'},
]

export function Projects() {
  const [filter, setFilter] = useState<Filter>('all')

  const featured = projects.filter((p) => p.featured)
  const all      = projects.filter((p) =>
    filter === 'all' ? true : p.type === filter,
  )

  return (
    <SectionWrapper
      id={SECTION_IDS.projects}
      label="Projects"
      className="bg-base-100"
    >
      {/* Heading */}
      <FadeIn className="mb-10">
        <h2 className={cn(
          'font-display font-bold text-base-800',
          'text-[clamp(1.75rem,3.5vw,2.5rem)]',
          'tracking-tight leading-tight',
        )}>
          Things I've built
        </h2>
        <p className="mt-3 text-base-500 max-w-[48ch]">
          Production systems, open-source tools, and consulting case studies.
        </p>
      </FadeIn>

      {/* Filter tabs */}
      <FadeIn delay={0.05} className="flex flex-wrap gap-2 mb-10">
        {FILTERS.map(({ value, label }) => (
          <button
            key={value}
            type="button"
            onClick={() => setFilter(value)}
            className={cn(
              'px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-150',
              filter === value
                ? 'bg-base-800 text-white'
                : 'text-base-500 hover:text-base-700 bg-white border border-base-200',
            )}
            aria-pressed={filter === value}
          >
            {label}
          </button>
        ))}
      </FadeIn>

      {/* Project grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Featured bento row (only in "all" view) */}
          {filter === 'all' && featured.length > 0 && (
            <>
              <p className="text-[11px] font-mono uppercase tracking-widest text-base-400 mb-4">
                Featured
              </p>
              <StaggerChildren
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12"
              >
                {featured.map((p) => (
                  <ProjectCard key={p.id} project={p} expanded={true} featured />
                ))}
              </StaggerChildren>
              <p className="text-[11px] font-mono uppercase tracking-widest text-base-400 mb-4">
                All projects
              </p>
            </>
          )}

          {/* Full grid */}
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {all.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </StaggerChildren>

          {all.length === 0 && (
            <motion.p
              variants={fadeUp}
              className="text-center text-base-400 py-16 text-sm"
            >
              No projects in this category yet.
            </motion.p>
          )}
        </motion.div>
      </AnimatePresence>

      {/* GitHub CTA */}
      <FadeIn delay={0.3} className="mt-14 text-center">
        <a
          href="https://github.com/SheikhSarvar"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'inline-flex items-center gap-2 px-5 py-2.5 rounded-xl',
            'text-sm font-medium border border-base-300',
            'text-base-600 hover:border-signal-500/40 hover:text-signal-700',
            'transition-all duration-150',
          )}
        >
          View all repositories on GitHub
        </a>
      </FadeIn>
    </SectionWrapper>
  )
}
