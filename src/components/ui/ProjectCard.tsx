import { motion } from 'framer-motion'
import { Github, Lock, ArrowUpRight, Sparkles } from 'lucide-react'
import { cn, externalLinkProps } from '../../lib/utils'
import { scaleIn } from '../../lib/motion'
import type { Project } from '../../data/portfolio.data'

const STATUS_STYLES: Record<Project['status'], string> = {
  production: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/25',
  active:     'bg-signal-500/10 text-signal-700 border-signal-500/20',
  archived:   'bg-base-100 text-base-500 border-base-200',
}

const STATUS_LABELS: Record<Project['status'], string> = {
  production: '● Live System',
  active:     '● Active Platform',
  archived:   'Archived',
}

interface ProjectCardProps {
  project: Project
  expanded?: boolean
  featured?: boolean
}

export function ProjectCard({ project, expanded = false, featured = false }: ProjectCardProps) {
  const { name, tagline, description, tech, github, demo, status, type, highlights } = project

  return (
    <motion.article
      variants={scaleIn}
      className={cn(
        'group relative flex flex-col',
        'rounded-2xl border border-base-200 bg-white/90 backdrop-blur-md shadow-sm',
        'transition-all duration-300',
        'hover:border-signal-500/40 hover:shadow-xl hover:-translate-y-1',
        featured && 'ring-1 ring-signal-500/20 border-signal-500/25 bg-white',
      )}
      aria-label={`Project: ${name}`}
    >
      {/* Badge Top Left */}
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
        {featured && (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold tracking-wider uppercase bg-signal-500/15 text-signal-700 border border-signal-500/30">
            <Sparkles className="w-2.5 h-2.5" />
            Featured
          </span>
        )}
        {type === 'case-study' && (
          <div
            className="px-2 py-0.5 rounded-md text-[10px] font-mono font-medium tracking-wider uppercase bg-slate-100 text-signal-700 border border-slate-200"
            aria-label="Case study"
          >
            Case Study
          </div>
        )}
        {type === 'open-source' && (
          <div
            className="px-2 py-0.5 rounded-md text-[10px] font-mono font-medium tracking-wider uppercase bg-slate-100 text-slate-700 border border-slate-200"
            aria-label="Open source"
          >
            Open Source
          </div>
        )}
      </div>

      <div className="flex flex-col flex-1 p-6">
        <div
          className="flex items-start justify-between gap-3 mb-4"
          style={{ paddingTop: (type !== 'product' || featured) ? '1.5rem' : 0 }}
        >
          <div>
            <h3 className="text-base font-display font-bold text-base-800 group-hover:text-signal-700 transition-colors leading-tight">
              {name}
            </h3>
            <p className="text-xs text-base-500 mt-1 leading-snug">{tagline}</p>
          </div>
          <span
            className={cn(
              'shrink-0 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium border shadow-xs',
              STATUS_STYLES[status],
            )}
          >
            {STATUS_LABELS[status]}
          </span>
        </div>

        {expanded && (
          <p className="text-sm text-base-600 leading-relaxed mb-4">
            {description}
          </p>
        )}

        {highlights && highlights.length > 0 && (
          <ul className="space-y-1.5 mb-4" aria-label="Project highlights">
            {highlights.map((h) => (
              <li key={h} className="flex items-start gap-2 text-xs text-base-600">
                <span className="text-signal-600 mt-0.5 shrink-0" aria-hidden="true">▸</span>
                {h}
              </li>
            ))}
          </ul>
        )}

        <div className="flex-1" />

        <div className="flex flex-wrap gap-1.5 mb-5" aria-label="Technologies used">
          {tech.slice(0, 6).map((t) => (
            <span key={t} className="chip font-medium">{t}</span>
          ))}
          {tech.length > 6 && (
            <span className="chip text-base-400 font-mono text-[10px]">+{tech.length - 6}</span>
          )}
        </div>

        <div className="flex items-center gap-3 pt-4 border-t border-base-200">
          {github ? (
            <a
              href={github}
              {...externalLinkProps}
              aria-label={`View ${name} on GitHub`}
              className="flex items-center gap-1.5 text-xs font-medium text-base-600 hover:text-signal-700 transition-colors"
            >
              <Github className="w-3.5 h-3.5" aria-hidden="true" />
              GitHub
            </a>
          ) : (
            <span className="flex items-center gap-1.5 text-xs text-base-400 cursor-default select-none">
              <Lock className="w-3.5 h-3.5" aria-hidden="true" />
              Enterprise Architecture
            </span>
          )}

          {demo && (
            <a
              href={demo}
              {...externalLinkProps}
              aria-label={`View live demo of ${name}`}
              className="flex items-center gap-1.5 text-xs font-semibold text-signal-600 hover:text-signal-700 transition-colors ml-auto"
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
