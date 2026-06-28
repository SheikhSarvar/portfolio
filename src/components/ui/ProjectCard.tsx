/**
 * ProjectCard.tsx
 * Reusable card used in Projects, CaseStudies, and OpenSource sections.
 */

import { motion } from 'framer-motion'
import { Github, Lock, ArrowUpRight } from 'lucide-react'
import { cn } from '../../lib/utils'
import { externalLinkProps } from '../../lib/utils'
import { scaleIn } from '../../lib/motion'
import type { Project } from '../../data/portfolio.data'

// Status badge colors
const STATUS_STYLES: Record<Project['status'], string> = {
  production: 'bg-signal-500/10 text-signal-700 border-signal-500/20',
  active:     'bg-blue-50 text-blue-600 border-blue-200',
  archived:   'bg-base-100 text-base-400 border-base-200',
}

const STATUS_LABELS: Record<Project['status'], string> = {
  production: '● Live',
  active:     '● Active',
  archived:   'Archived',
}

interface ProjectCardProps {
  project: Project
  /** Show expanded description. Default false (uses tagline only) */
  expanded?: boolean
  featured?: boolean
}

export function ProjectCard({ project, expanded = false, featured = false }: ProjectCardProps) {
  const {
    name, tagline, description, tech, github, demo,
    status, type, highlights,
  } = project

  return (
    <motion.article
      variants={scaleIn}
      className={cn(
        'group relative flex flex-col',
        'rounded-2xl border border-base-200 bg-white',
        'transition-all duration-250',
        'hover:border-signal-500/35 hover:shadow-card-hover',
        featured && 'ring-1 ring-signal-500/10',
      )}
      aria-label={`Project: ${name}`}
    >
      {/* Type tag — top-left corner */}
      {type === 'case-study' && (
        <div
          className="absolute top-4 left-4 z-10 px-2 py-0.5 rounded-md text-[10px] font-mono font-medium tracking-wider uppercase bg-depth-900 text-signal-400"
          aria-label="Case study"
        >
          Case Study
        </div>
      )}
      {type === 'open-source' && (
        <div
          className="absolute top-4 left-4 z-10 px-2 py-0.5 rounded-md text-[10px] font-mono font-medium tracking-wider uppercase bg-base-800 text-white"
          aria-label="Open source"
        >
          Open Source
        </div>
      )}

      {/* Card body */}
      <div className="flex flex-col flex-1 p-6">

        {/* Header row */}
        <div className="flex items-start justify-between gap-3 mb-4" style={{ paddingTop: type !== 'product' ? '1.5rem' : 0 }}>
          <div>
            <h3 className="text-base font-display font-bold text-base-800 group-hover:text-signal-700 transition-colors leading-tight">
              {name}
            </h3>
            <p className="text-xs text-base-500 mt-1 leading-snug">{tagline}</p>
          </div>
          {/* Status badge */}
          <span
            className={cn(
              'shrink-0 px-2 py-0.5 rounded-full text-[10px] font-mono font-medium border',
              STATUS_STYLES[status],
            )}
          >
            {STATUS_LABELS[status]}
          </span>
        </div>

        {/* Description */}
        {expanded && (
          <p className="text-sm text-base-600 leading-relaxed mb-4">
            {description}
          </p>
        )}

        {/* Highlights */}
        {highlights && highlights.length > 0 && (
          <ul className="space-y-1.5 mb-4" aria-label="Project highlights">
            {highlights.map((h) => (
              <li
                key={h}
                className="flex items-start gap-2 text-xs text-base-600"
              >
                <span className="text-signal-500 mt-0.5 shrink-0" aria-hidden="true">▸</span>
                {h}
              </li>
            ))}
          </ul>
        )}

        {/* Spacer */}
        <div className="flex-1" />

        {/* Tech chips */}
        <div className="flex flex-wrap gap-1.5 mb-5" aria-label="Technologies used">
          {tech.slice(0, 6).map((t) => (
            <span key={t} className="chip">{t}</span>
          ))}
          {tech.length > 6 && (
            <span className="chip text-base-400">+{tech.length - 6}</span>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-4 border-t border-base-100">
          {github ? (
            <a
              href={github}
              {...externalLinkProps}
              aria-label={`View ${name} on GitHub`}
              className="flex items-center gap-1.5 text-xs text-base-500 hover:text-base-800 transition-colors"
            >
              <Github className="w-3.5 h-3.5" aria-hidden="true" />
              GitHub
            </a>
          ) : (
            <span className="flex items-center gap-1.5 text-xs text-base-300 cursor-default select-none">
              <Lock className="w-3.5 h-3.5" aria-hidden="true" />
              Private
            </span>
          )}

          {demo && (
            <a
              href={demo}
              {...externalLinkProps}
              aria-label={`View live demo of ${name}`}
              className="flex items-center gap-1.5 text-xs text-base-500 hover:text-signal-600 transition-colors ml-auto"
            >
              Live Demo
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}
