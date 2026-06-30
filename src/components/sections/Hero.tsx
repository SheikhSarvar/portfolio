/**
 * Hero.tsx
 * ─────────────────────────────────────────────────────────────────
 * Full-viewport hero section.
 *
 * Layout (desktop):
 * ┌──────────────────────────────────────────────┐
 * │  [Aurora mesh background — depth-900 base]   │
 * │  ┌────────────────────────────────────────┐  │
 * │  │  [availability badge]                  │  │
 * │  │  Gulam Sarvar                          │  │
 * │  │  [Typewriter: AI Engineer | RAG ...]   │  │
 * │  │  Short bio copy                        │  │
 * │  │  [View Work]  [GitHub]                 │  │
 * │  │  ── Location ── Social icons           │  │
 * │  └────────────────────────────────────────┘  │
 * │              ↓ scroll indicator              │
 * └──────────────────────────────────────────────┘
 *
 * No 3D in Phase 2 — R3F is deferred to lazy load in Phase 3.
 * The aurora mesh is the visual anchor; it's sufficient.
 * ─────────────────────────────────────────────────────────────────
 */

import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, MapPin, ExternalLink } from 'lucide-react'
import { AuroraBackground }  from '../animations/AuroraBackground'
import { TypewriterText }    from '../animations/TypewriterText'
import { identity }          from '../../data/portfolio.data'
import { HERO_ROLES, SECTION_IDS } from '../../lib/constants'
import { cn }                from '../../lib/utils'
import { fadeUp, fadeIn, staggerContainer, scaleIn } from '../../lib/motion'

const navigateToAbout = () => {
  window.location.hash = '#/about'
}

export function Hero() {
  return (
    <section
      id={SECTION_IDS.hero}
      className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden"
      aria-label="Introduction"
    >
      {/* Aurora mesh background */}
      <AuroraBackground intensity={0.55} />

      {/* Frosted glass content panel */}
      <div className="relative z-10 container-wide flex flex-col items-start justify-center min-h-[100dvh] pb-16 pt-24">

        {/* ── Staggered entrance ────────────────────────────────── */}
        <motion.div
          className="max-w-2xl"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Availability badge */}
          <motion.div variants={scaleIn} className="mb-8">
            <span
              className={cn(
                'inline-flex items-center gap-2 px-3 py-1.5 rounded-full',
                'text-[11px] font-mono font-medium tracking-widest uppercase',
                'bg-signal-500/10 border border-signal-500/25 text-signal-400',
              )}
            >
              <span
                className="w-1.5 h-1.5 rounded-full bg-signal-400"
                style={{ animation: 'glowPulse 2s ease-in-out infinite' }}
                aria-hidden="true"
              />
              {identity.available ? 'Available for new roles' : 'Currently unavailable'}
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={fadeUp}
            className={cn(
              'font-display font-bold text-white mb-3',
              'text-[clamp(2.75rem,6vw,4.5rem)]',
              'leading-[1.1] tracking-[-0.03em]',
            )}
          >
            {identity.name}
          </motion.h1>

          {/* Typewriter role */}
          <motion.div
            variants={fadeUp}
            className={cn(
              'font-display font-semibold mb-6',
              'text-[clamp(1.25rem,2.5vw,1.75rem)]',
              'leading-tight tracking-tight',
            )}
          >
            <TypewriterText
              words={HERO_ROLES}
              className="text-gradient"
            />
          </motion.div>

          {/* Bio */}
          <motion.p
            variants={fadeUp}
            className={cn(
              'text-white/60 text-base leading-relaxed mb-8',
              'max-w-[52ch]',
            )}
          >
            Building production AI systems — voice pipelines, multi-agent RAG,
            and LLM infrastructure — at{' '}
            <a
              href="https://bluebash.co"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 underline underline-offset-2 hover:text-signal-400 transition-colors"
            >
              Bluebash
            </a>
            .{' '}
            Open-source author of{' '}
            <a
              href={identity.links.pyragCore}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 underline underline-offset-2 hover:text-signal-400 transition-colors"
            >
              PyRAG Core
            </a>
            .
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center gap-3 mb-10"
          >
            {/* Primary */}
            <button
              type="button"
              onClick={navigateToAbout}
              className={cn(
                'inline-flex items-center gap-2 px-5 py-2.5 rounded-xl',
                'text-sm font-semibold',
                'bg-signal-500 text-depth-900',
                'shadow-accent',
                'hover:bg-signal-600 hover:shadow-accent-strong',
                'active:scale-[0.98]',
                'transition-all duration-150',
                'focus-visible:outline focus-visible:outline-2 focus-visible:outline-signal-400 focus-visible:outline-offset-2',
              )}
            >
              View Work
              <ArrowDown className="w-3.5 h-3.5" aria-hidden="true" />
            </button>

            {/* Ghost */}
            <a
              href={identity.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'inline-flex items-center gap-2 px-5 py-2.5 rounded-xl',
                'text-sm font-semibold',
                'border border-white/20 text-white/80',
                'hover:border-white/40 hover:text-white hover:bg-white/5',
                'active:scale-[0.98]',
                'transition-all duration-150',
              )}
            >
              <Github className="w-4 h-4" aria-hidden="true" />
              GitHub
              <ExternalLink className="w-3 h-3 opacity-50" aria-hidden="true" />
            </a>
          </motion.div>

          {/* Location + socials row */}
          <motion.div
            variants={fadeIn}
            className="flex flex-wrap items-center gap-4 text-white/40 text-sm"
          >
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
              {identity.location}
            </span>

            <span className="w-px h-4 bg-white/15" aria-hidden="true" />

            <a
              href={identity.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex items-center gap-1.5 hover:text-white/80 transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" aria-hidden="true" />
              LinkedIn
            </a>

            <a
              href={identity.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex items-center gap-1.5 hover:text-white/80 transition-colors"
            >
              <Github className="w-3.5 h-3.5" aria-hidden="true" />
              GitHub
            </a>
          </motion.div>
        </motion.div>

        {/* ── Tech strip ─────────────────────────────────────────── */}
        <motion.div
          className="absolute bottom-10 left-0 right-0 container-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
            <span className="text-[10px] font-mono uppercase tracking-widest text-white/25 shrink-0 mr-1">
              Stack
            </span>
            {[
              'LangGraph', 'LiveKit', 'FastAPI', 'Qdrant',
              'OpenAI', 'React', 'Docker', 'PostgreSQL',
            ].map((t) => (
              <span
                key={t}
                className={cn(
                  'shrink-0 px-2.5 py-1 rounded-md',
                  'text-[11px] font-mono text-white/40',
                  'border border-white/10 bg-white/[0.04]',
                )}
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll chevron */}
      <motion.button
        type="button"
        onClick={navigateToAbout}
        aria-label="Scroll to about section"
        className={cn(
          'absolute bottom-6 left-1/2 -translate-x-1/2 z-10',
          'text-white/30 hover:text-white/60 transition-colors',
        )}
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.5 }}
        style={{ animation: 'float 3s ease-in-out infinite' }}
      >
        <ArrowDown className="w-5 h-5" aria-hidden="true" />
      </motion.button>
    </section>
  )
}
