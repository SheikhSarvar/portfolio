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
import { scrollToSection }   from '../../lib/navigation'
import { fadeUp, fadeIn, staggerContainer, scaleIn } from '../../lib/motion'

interface HeroProps {
  theme: 'light' | 'dark'
}

export function Hero({ theme }: HeroProps) {
  const isDarkTheme = theme === 'dark'

  return (
      <section
      id={SECTION_IDS.hero}
      className={cn(
        'relative min-h-[100dvh] flex flex-col justify-center overflow-hidden',
        isDarkTheme ? 'bg-depth-950' : 'bg-transparent',
      )}
      aria-label="Introduction"
    >
      {/* Aurora mesh background */}
      <AuroraBackground intensity={isDarkTheme ? 0.18 : 0.08} theme={theme} />

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
                'bg-signal-500/10 border border-signal-500/20 text-signal-700',
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
              'font-display font-bold mb-3',
              'text-[clamp(2.75rem,6vw,4.5rem)]',
              'leading-[1.1] tracking-[-0.03em]',
              isDarkTheme ? 'text-white' : 'text-slate-950',
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
            <TypewriterText words={HERO_ROLES} className={isDarkTheme ? 'text-gradient' : 'text-signal-700'} />
          </motion.div>

          {/* Bio */}
          <motion.p
            variants={fadeUp}
            className={cn(
                'text-base leading-relaxed mb-8',
              'max-w-[52ch]',
              isDarkTheme ? 'text-white/72' : 'text-slate-600',
            )}
          >
            Building production AI systems — voice pipelines, multi-agent RAG,
            and LLM infrastructure — at{' '}
            <a
              href="https://bluebash.co"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'underline underline-offset-2 transition-colors',
                isDarkTheme ? 'text-white/85 hover:text-signal-300' : 'text-slate-800 hover:text-signal-700',
              )}
            >
              Bluebash
            </a>
            .{' '}
            Open-source author of{' '}
            <a
              href={identity.links.pyragCore}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'underline underline-offset-2 transition-colors',
                isDarkTheme ? 'text-white/85 hover:text-signal-300' : 'text-slate-800 hover:text-signal-700',
              )}
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
              onClick={() => scrollToSection(SECTION_IDS.about)}
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
                isDarkTheme
                  ? 'border border-base-200/20 text-white/80 hover:border-signal-500/30 hover:text-white hover:bg-white/5'
                  : 'border border-slate-300 text-slate-700 hover:border-signal-500/30 hover:text-slate-950 hover:bg-white',
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
            className={cn(
              'flex flex-wrap items-center gap-4 text-sm',
              isDarkTheme ? 'text-white/55' : 'text-slate-600',
            )}
          >
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
              {identity.location}
            </span>

            <span className="w-px h-4 bg-base-200" aria-hidden="true" />

            <a
              href={identity.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex items-center gap-1.5 hover:text-slate-900 transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" aria-hidden="true" />
              LinkedIn
            </a>

            <a
              href={identity.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex items-center gap-1.5 hover:text-slate-900 transition-colors"
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
            <span className="text-[10px] font-mono uppercase tracking-widest text-base-400 shrink-0 mr-1">
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
                  'text-[11px] font-mono',
                  isDarkTheme
                    ? 'text-white/55 border border-white/10 bg-white/5'
                    : 'text-slate-600 border border-slate-200 bg-white/90',
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
        onClick={() => scrollToSection(SECTION_IDS.about)}
        aria-label="Scroll to about section"
        className={cn(
          'absolute bottom-6 left-1/2 -translate-x-1/2 z-10',
          isDarkTheme ? 'text-white/45 hover:text-white' : 'text-slate-500 hover:text-slate-900',
          'transition-colors',
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
