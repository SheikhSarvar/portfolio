/**
 * OpenSource.tsx — Phase 4
 */

import { motion } from 'framer-motion'
import { SectionWrapper }  from '../layout/SectionWrapper'
import { FadeIn }          from '../animations/FadeIn'
import { StaggerChildren } from '../animations/StaggerChildren'
import { openSource }      from '../../data/portfolio.data'
import { scaleIn }         from '../../lib/motion'
import { cn }              from '../../lib/utils'
import { Github, Bug, ArrowUpRight, Star } from 'lucide-react'

const TYPE_META = {
  project:    { icon: Star, label: 'Project',     color: 'text-signal-600 bg-signal-500/8 border-signal-500/20' },
  'bug-report': { icon: Bug,  label: 'Bug Report', color: 'text-amber-600 bg-amber-50 border-amber-200' },
}

export function OpenSource() {
  return (
    <SectionWrapper
      id="open-source"
      label="Open Source"
      className="bg-base-50"
    >
      <FadeIn className="mb-12">
        <h2 className={cn(
          'font-display font-bold text-base-800',
          'text-[clamp(1.75rem,3.5vw,2.5rem)] tracking-tight leading-tight',
        )}>
          Open Source contributions
        </h2>
        <p className="mt-3 text-base-500 max-w-[48ch]">
          Code I've written for the community and issues I've filed upstream.
        </p>
      </FadeIn>

      <StaggerChildren className="grid sm:grid-cols-2 gap-4 max-w-2xl">
        {openSource.map((item) => {
          const meta = TYPE_META[item.type]
          const Icon = meta.icon
          return (
            <motion.a
              key={item.url}
              variants={scaleIn}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'group flex flex-col p-5 rounded-2xl',
                'border border-base-200 bg-white',
                'hover:border-signal-500/35 hover:shadow-card-hover',
                'transition-all duration-200',
              )}
              aria-label={`${item.title} — open in GitHub`}
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className={cn('w-8 h-8 rounded-lg flex items-center justify-center border shrink-0', meta.color)}>
                  <Icon className="w-4 h-4" aria-hidden="true" />
                </div>
                <ArrowUpRight className="w-4 h-4 text-base-300 group-hover:text-signal-500 transition-colors" aria-hidden="true" />
              </div>

              <p className="text-[10px] font-mono text-base-400 mb-1">{item.repo}</p>
              <p className="text-sm font-semibold text-base-700 group-hover:text-signal-700 transition-colors mb-2 leading-snug">
                {item.title}
              </p>
              <p className="text-xs text-base-500 leading-relaxed flex-1">{item.description}</p>

              <span className={cn('mt-4 self-start px-2 py-0.5 rounded-full text-[10px] font-mono font-medium border', meta.color)}>
                {meta.label}
              </span>
            </motion.a>
          )
        })}
      </StaggerChildren>

      {/* GitHub CTA */}
      <FadeIn delay={0.2} className="mt-10">
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
          <Github className="w-4 h-4" aria-hidden="true" />
          View GitHub profile
        </a>
      </FadeIn>
    </SectionWrapper>
  )
}
