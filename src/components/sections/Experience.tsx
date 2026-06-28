/**
 * Experience.tsx
 * ─────────────────────────────────────────────────────────────────
 * Animated vertical timeline.
 *
 * Structure:
 * - Vertical line draws down as user scrolls (scaleY animation)
 * - Each experience entry fades in with its dot
 * - Bluebash entry has two sub-blocks: Kickcall + RAG Systems
 * - Tech chips per highlight
 * ─────────────────────────────────────────────────────────────────
 */

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SectionWrapper }  from '../layout/SectionWrapper'
import { FadeIn }          from '../animations/FadeIn'
import { StaggerChildren } from '../animations/StaggerChildren'
import { experience, education } from '../../data/portfolio.data'
import { SECTION_IDS }     from '../../lib/constants'
import { fadeUp } from '../../lib/motion'
import { cn }              from '../../lib/utils'
import { GraduationCap } from 'lucide-react'

// Sub-blocks for the Bluebash entry
const BLUEBASH_BLOCKS = [
  {
    id:       'kickcall',
    title:    'Kickcall — Voice AI Product',
    type:     'product' as const,
    summary:  'Built from scratch. STT→LLM→TTS pipeline, 150–200 calls/day, <2s end-to-end latency via LiveKit/WebRTC with Redis session state.',
    tags:     ['LiveKit', 'WebRTC', 'LangGraph', 'Redis', 'OpenAI', 'Docker'],
  },
  {
    id:       'rag',
    title:    'RAG Systems — Legal & Healthcare',
    type:     'system' as const,
    summary:  'Led technical design for a ~5-person team. Hybrid dense+sparse retrieval, cross-encoder reranking, Qdrant and Pinecone backends.',
    tags:     ['Qdrant', 'Pinecone', 'LangChain', 'LangGraph', 'FastAPI'],
  },
]

function SubBlock({
  title,
  summary,
  tags,
}: {
  title: string
  summary: string
  tags: string[]
}) {
  return (
    <motion.div
      variants={fadeUp}
      className={cn(
        'p-5 rounded-xl border border-base-200 bg-base-50',
        'hover:border-signal-500/25 hover:bg-white',
        'transition-all duration-200 group',
      )}
    >
      <p className="text-sm font-semibold text-base-700 mb-2 group-hover:text-signal-700 transition-colors">
        {title}
      </p>
      <p className="text-xs text-base-500 leading-relaxed mb-3">{summary}</p>
      <div className="flex flex-wrap gap-1.5">
        {tags.map((t) => (
          <span key={t} className="chip">{t}</span>
        ))}
      </div>
    </motion.div>
  )
}

function TimelineDot({ active = false }: { active?: boolean }) {
  return (
    <div
      className={cn(
        'relative z-10 w-3 h-3 rounded-full border-2 shrink-0',
        active
          ? 'border-signal-500 bg-signal-500'
          : 'border-base-300 bg-white',
      )}
      aria-hidden="true"
    >
      {active && (
        <span className="absolute inset-[-4px] rounded-full bg-signal-500/20 animate-ping" />
      )}
    </div>
  )
}

export function Experience() {
  const lineRef = useRef<HTMLDivElement>(null)
  const lineInView = useInView(lineRef, { once: true, amount: 0.1 })

  return (
    <SectionWrapper
      id={SECTION_IDS.experience}
      label="Experience"
      className="bg-base-50"
    >
      {/* Heading */}
      <FadeIn className="mb-14">
        <h2 className={cn(
          'font-display font-bold text-base-800',
          'text-[clamp(1.75rem,3.5vw,2.5rem)]',
          'tracking-tight leading-tight',
        )}>
          Where I've worked
        </h2>
      </FadeIn>

      {/* Timeline container */}
      <div className="relative">

        {/* Vertical line */}
        <div
          ref={lineRef}
          className="absolute left-[5px] top-0 bottom-0 w-px bg-base-200 origin-top"
          aria-hidden="true"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-signal-500 to-signal-500/20 origin-top"
            initial={{ scaleY: 0 }}
            animate={lineInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.4, ease: [0, 0, 0.2, 1], delay: 0.2 }}
          />
        </div>

        {/* Entries */}
        <div className="pl-10 space-y-14">

          {/* ── Bluebash ─────────────────────────────────────── */}
          <div className="relative">
            {/* Dot */}
            <div className="absolute -left-[33px] top-1">
              <TimelineDot active={true} />
            </div>

            <FadeIn>
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                <div>
                  <h3 className="text-lg font-display font-bold text-base-800">
                    {experience[0].company}
                  </h3>
                  <p className="text-sm text-base-500 mt-0.5">
                    {experience[0].role}
                    <span className="mx-2 text-base-300">·</span>
                    {experience[0].type === 'full-time' ? 'Full-time' : experience[0].type}
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <span className={cn(
                    'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full',
                    'text-[11px] font-mono font-medium',
                    'bg-signal-500/8 border border-signal-500/20 text-signal-600',
                  )}>
                    <span className="w-1.5 h-1.5 rounded-full bg-signal-500" />
                    {experience[0].startDate} – {experience[0].endDate}
                  </span>
                  <p className="text-xs text-base-400 mt-1">{experience[0].location}</p>
                </div>
              </div>
            </FadeIn>

            {/* Sub-blocks */}
            <StaggerChildren className="space-y-3 mt-5">
              {BLUEBASH_BLOCKS.map((block) => (
                <SubBlock key={block.id} {...block} />
              ))}
            </StaggerChildren>

            {/* Full tag strip */}
            <FadeIn delay={0.2} className="mt-4 flex flex-wrap gap-1.5">
              {experience[0].tags.map((t) => (
                <span key={t} className="chip">{t}</span>
              ))}
            </FadeIn>
          </div>

          {/* ── Education ────────────────────────────────────── */}
          <div className="relative">
            <div className="absolute -left-[33px] top-1">
              <TimelineDot />
            </div>

            <FadeIn>
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <GraduationCap
                      className="w-4 h-4 text-base-400"
                      aria-hidden="true"
                    />
                    <h3 className="text-lg font-display font-bold text-base-800">
                      {education[0].institution}
                    </h3>
                  </div>
                  <p className="text-sm text-base-500">
                    {education[0].degree} · {education[0].field}
                  </p>
                </div>
                <span className="text-xs font-mono text-base-400 shrink-0">
                  {education[0].startYear} – {education[0].endYear}
                </span>
              </div>
            </FadeIn>
          </div>

          {/* TODO placeholder for additional experience */}
          {/* Add more entries from LinkedIn when confirmed */}

        </div>
      </div>
    </SectionWrapper>
  )
}
