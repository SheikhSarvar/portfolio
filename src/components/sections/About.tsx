/**
 * About.tsx
 * ─────────────────────────────────────────────────────────────────
 * Layout (desktop):
 * ┌─────────────────────────┬─────────────────────┐
 * │  Heading + bio text     │  Stat cards (2x2)   │
 * │  Core strengths list    │  Philosophy quote   │
 * └─────────────────────────┴─────────────────────┘
 *
 * All numbers come from verified production data only.
 * ─────────────────────────────────────────────────────────────────
 */

import { motion } from 'framer-motion'
import { SectionWrapper }    from '../layout/SectionWrapper'
import { FadeIn }            from '../animations/FadeIn'
import { StaggerChildren }   from '../animations/StaggerChildren'
import { experience } from '../../data/portfolio.data'
import { ABOUT_STATS, SECTION_IDS } from '../../lib/constants'
import { fadeUp, scaleIn } from '../../lib/motion'
import { cn } from '../../lib/utils'
import {
  Cpu, Mic, Database, Code2, GitBranch, Layers,
} from 'lucide-react'

const CORE_STRENGTHS = [
  {
    icon:  Cpu,
    label: 'Agentic AI Systems',
    desc:  'LangGraph multi-agent workflows, tool orchestration, stateful pipelines.',
  },
  {
    icon:  Mic,
    label: 'Voice AI & Real-time',
    desc:  'WebRTC/LiveKit STT→LLM→TTS pipelines, <2s end-to-end latency.',
  },
  {
    icon:  Database,
    label: 'RAG Architecture',
    desc:  'Hybrid dense+sparse retrieval, cross-encoder reranking, Qdrant/Pinecone.',
  },
  {
    icon:  Code2,
    label: 'Full-Stack Development',
    desc:  'FastAPI backends, React frontends, Docker-containerised services.',
  },
  {
    icon:  Layers,
    label: 'System Design',
    desc:  'Production-grade distributed systems with Redis session state.',
  },
  {
    icon:  GitBranch,
    label: 'Open Source',
    desc:  'Author of PyRAG Core — MIT-licensed RAG platform, 143 unit tests.',
  },
]

export function About() {
  return (
    <SectionWrapper
      id={SECTION_IDS.about}
      label="About"
      className="bg-base-50"
    >
      {/* ── Two-column grid ───────────────────────────────────── */}
      <div className="grid lg:grid-cols-[1fr_380px] gap-16 lg:gap-24 items-start">

        {/* LEFT: Text content */}
        <div>
          <FadeIn>
            <h2 className={cn(
              'font-display font-bold text-base-800 mb-6',
              'text-[clamp(2rem,4vw,2.75rem)]',
              'tracking-tight leading-[1.1]',
            )}>
              Building AI that runs{' '}
              <span className="text-gradient">in production</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="space-y-4 text-base-600 leading-relaxed mb-10 max-w-[58ch]">
              <p>
                I'm an AI/LLM engineer at Bluebash (Mohali, India), working on
                systems where latency, reliability, and accuracy aren't theoretical —
                they're what determines whether a customer call succeeds or fails.
              </p>
              <p>
                I built Kickcall from scratch: a real-time voice AI pipeline
                handling 150–200 calls per day at under 2 seconds end-to-end latency.
                I also lead RAG system design for legal and healthcare clients,
                where retrieval precision isn't optional.
              </p>
              <p>
                Outside of work, I maintain PyRAG Core — a FastAPI/LangGraph RAG
                platform — and contribute bug reports to open-source tools I depend on.
              </p>
            </div>
          </FadeIn>

          {/* Core strengths grid */}
          <FadeIn delay={0.15}>
            <h3 className="text-xs font-mono font-medium tracking-widest uppercase text-base-400 mb-5">
              Core strengths
            </h3>
          </FadeIn>

          <StaggerChildren speed="fast" className="grid sm:grid-cols-2 gap-4">
            {CORE_STRENGTHS.map(({ icon: Icon, label, desc }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                className={cn(
                  'flex gap-3 p-4 rounded-xl',
                  'border border-base-200 bg-white',
                  'hover:border-signal-500/30 hover:shadow-card',
                  'transition-all duration-200 group',
                )}
              >
                <div
                  className={cn(
                    'shrink-0 w-8 h-8 rounded-lg flex items-center justify-center',
                    'bg-signal-500/8 border border-signal-500/15',
                    'group-hover:bg-signal-500/15 transition-colors duration-200',
                  )}
                  aria-hidden="true"
                >
                  <Icon className="w-4 h-4 text-signal-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-base-700 mb-0.5">{label}</p>
                  <p className="text-xs text-base-500 leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </StaggerChildren>
        </div>

        {/* RIGHT: Stats + philosophy */}
        <div className="space-y-6 lg:sticky lg:top-28">

          {/* Stat cards */}
          <StaggerChildren className="grid grid-cols-2 gap-3">
            {ABOUT_STATS.map(({ value, label }) => (
              <motion.div
                key={label}
                variants={scaleIn}
                className={cn(
                  'p-5 rounded-2xl border border-base-200 bg-white',
                  'hover:border-signal-500/30 hover:shadow-accent',
                  'transition-all duration-200 group',
                )}
              >
                <p
                  className={cn(
                    'font-display font-bold text-base-800 mb-1',
                    'text-[clamp(1.5rem,3vw,2rem)] tracking-tight leading-none',
                    'group-hover:text-gradient',
                  )}
                >
                  {value}
                </p>
                <p className="text-xs text-base-500 leading-tight">{label}</p>
              </motion.div>
            ))}
          </StaggerChildren>

          {/* Working philosophy */}
          <FadeIn delay={0.3}>
            <div
              className={cn(
                'p-6 rounded-2xl',
                'border border-signal-500/20 bg-signal-500/4',
              )}
            >
              <p className="text-xs font-mono uppercase tracking-widest text-signal-600 mb-3">
                Working philosophy
              </p>
              <blockquote className="text-base-700 text-sm leading-relaxed">
                "Ship simple, measure everything, improve with evidence.
                Production beats benchmarks every time."
              </blockquote>
            </div>
          </FadeIn>

          {/* Current role pill */}
          <FadeIn delay={0.35}>
            <div className="flex items-start gap-3 p-4 rounded-xl border border-base-200 bg-white">
              <div className="shrink-0 mt-0.5">
                <span className="w-2 h-2 rounded-full bg-signal-500 block" style={{ animation: 'glowPulse 2s ease-in-out infinite' }} />
              </div>
              <div>
                <p className="text-sm font-semibold text-base-700">
                  {experience[0]?.role}
                </p>
                <p className="text-xs text-base-500 mt-0.5">
                  {experience[0]?.company} · {experience[0]?.startDate} – {experience[0]?.endDate}
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </SectionWrapper>
  )
}
