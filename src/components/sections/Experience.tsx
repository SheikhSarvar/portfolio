/**
 * Experience.tsx
 * ─────────────────────────────────────────────────────────────────
 * Animated vertical timeline for Gulam Sarvar.
 *
 * Shows:
 * - EatEasy (AI Engineer, Oct 2026 – Present) [Current Role]
 * - Bluebash Pvt Ltd (Associate Data Scientist, Apr 2024 – Oct 2026)
 * - Woolf University (Master of Science, AI & ML)
 * ─────────────────────────────────────────────────────────────────
 */

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SectionWrapper }  from '../layout/SectionWrapper'
import { FadeIn }          from '../animations/FadeIn'
import { StaggerChildren } from '../animations/StaggerChildren'
import { experience, education } from '../../data/portfolio.data'
import { SECTION_IDS }     from '../../lib/constants'
import { fadeUp }          from '../../lib/motion'
import { cn }              from '../../lib/utils'
import { GraduationCap, Sparkles } from 'lucide-react'

// Sub-blocks for EatEasy
const EATEASY_BLOCKS = [
  {
    id:       'omniflow',
    title:    'OmniFlow Agentic Platform — Universal Workflow Engine',
    summary:  'Architecting an enterprise agentic platform that unifies n8n-style graph automation with dynamic multi-agent task execution and arbitrary workflow dispatch.',
    tags:     ['Temporal.io', 'AI Agents', 'LangGraph', 'FastAPI', 'Python'],
  },
  {
    id:       'telephony',
    title:    'Omnichannel Telephony & 3CX Voice AI',
    summary:  'Deploying real-time inbound IVR/customer support and automated outbound conversational campaigns via 3CX and WebRTC with <1.5s latency.',
    tags:     ['3CX', 'Voice AI', 'LiveKit', 'WebRTC'],
  },
  {
    id:       'durable-data',
    title:    'Durable State Orchestration & Enterprise Oracle Layer',
    summary:  'Guaranteeing zero state loss and distributed fault tolerance via Temporal.io, paired with high-throughput transactional persistence on Oracle and vector backends.',
    tags:     ['Temporal.io', 'Oracle', 'Docker', 'Redis'],
  },
]

// Sub-blocks for the Bluebash entry
const BLUEBASH_BLOCKS = [
  {
    id:       'kickcall',
    title:    'Kickcall — Voice AI Product',
    summary:  'Built from scratch. STT→LLM→TTS pipeline, 150–200 calls/day, <2s end-to-end latency via LiveKit/WebRTC with Redis session state.',
    tags:     ['LiveKit', 'WebRTC', 'LangGraph', 'Redis', 'OpenAI', 'Docker'],
  },
  {
    id:       'rag',
    title:    'RAG Systems — Legal & Healthcare',
    summary:  'Led technical design for a ~5-person cross-functional team. Hybrid dense+sparse retrieval, cross-encoder reranking, Qdrant and Pinecone backends.',
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
        'p-5 rounded-xl border border-base-200 bg-white shadow-sm',
        'hover:border-signal-500/30 hover:bg-base-50 hover:shadow-md',
        'transition-all duration-200 group',
      )}
    >
      <p className="text-sm font-semibold text-base-800 mb-1.5 group-hover:text-signal-700 transition-colors">
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
        'relative z-10 w-3.5 h-3.5 rounded-full border-2 shrink-0 transition-all duration-300',
        active
          ? 'border-signal-500 bg-signal-500 ring-4 ring-signal-500/20'
          : 'border-base-300 bg-white',
      )}
      aria-hidden="true"
    >
      {active && (
        <span className="absolute inset-[-4px] rounded-full bg-signal-500/30 animate-ping" />
      )}
    </div>
  )
}

export function Experience() {
  const lineRef = useRef<HTMLDivElement>(null)
  const lineInView = useInView(lineRef, { once: true, amount: 0.1 })

  const eatEasyRole = experience.find((e) => e.company.toLowerCase().includes('eateasy')) || experience[0]
  const bluebashRole = experience.find((e) => e.company.toLowerCase().includes('bluebash')) || experience[1]

  return (
    <SectionWrapper
      id={SECTION_IDS.experience}
      label="Experience & Career"
      className="bg-transparent"
    >
      {/* Heading */}
      <FadeIn className="mb-14">
        <h2 className={cn(
          'font-display font-bold text-base-800',
          'text-[clamp(1.75rem,3.5vw,2.5rem)]',
          'tracking-tight leading-tight',
        )}>
          Engineering Experience
        </h2>
        <p className="mt-3 text-base-500 max-w-[50ch]">
          Track record of designing and scaling production AI systems, durable workflows, and real-time voice infrastructure.
        </p>
      </FadeIn>

      {/* Timeline container */}
      <div className="relative">

        {/* Vertical line */}
        <div
          ref={lineRef}
          className="absolute left-[6px] top-0 bottom-0 w-0.5 bg-base-200 origin-top"
          aria-hidden="true"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-signal-500 via-signal-500/50 to-signal-500/10 origin-top"
            initial={{ scaleY: 0 }}
            animate={lineInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.4, ease: [0, 0, 0.2, 1], delay: 0.2 }}
          />
        </div>

        {/* Entries */}
        <div className="pl-10 space-y-16">

          {/* ── 1. EatEasy (Current Role) ────────────────────────── */}
          {eatEasyRole && (
            <div className="relative">
              <div className="absolute -left-[35px] top-1">
                <TimelineDot active={true} />
              </div>

              <FadeIn>
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <div className="flex items-center gap-2.5">
                      <h3 className="text-xl font-display font-bold text-base-800">
                        {eatEasyRole.company}
                      </h3>
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-signal-500/15 border border-signal-500/30 text-signal-700">
                        <Sparkles className="w-2.5 h-2.5" />
                        Current Role
                      </span>
                    </div>
                    <p className="text-sm font-medium text-base-600 mt-1">
                      {eatEasyRole.role}
                      <span className="mx-2 text-base-300">·</span>
                      Full-time
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className={cn(
                      'inline-flex items-center gap-1.5 px-3 py-1 rounded-full',
                      'text-xs font-mono font-medium',
                      'bg-signal-500/10 border border-signal-500/25 text-signal-700',
                    )}>
                      <span className="w-2 h-2 rounded-full bg-signal-500 animate-pulse" />
                      {eatEasyRole.startDate} – {eatEasyRole.endDate}
                    </span>
                    <p className="text-xs text-base-400 mt-1">{eatEasyRole.location}</p>
                  </div>
                </div>
              </FadeIn>

              {/* Sub-blocks for EatEasy */}
              <StaggerChildren className="space-y-3 mt-5">
                {EATEASY_BLOCKS.map((block) => (
                  <SubBlock key={block.id} {...block} />
                ))}
              </StaggerChildren>

              {/* Tag strip */}
              <FadeIn delay={0.2} className="mt-4 flex flex-wrap gap-1.5">
                {eatEasyRole.tags.map((t) => (
                  <span key={t} className="chip font-medium">{t}</span>
                ))}
              </FadeIn>
            </div>
          )}

          {/* ── 2. Bluebash Pvt Ltd ────────────────────────────────── */}
          {bluebashRole && (
            <div className="relative">
              <div className="absolute -left-[35px] top-1">
                <TimelineDot active={false} />
              </div>

              <FadeIn>
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-xl font-display font-bold text-base-800">
                      {bluebashRole.company}
                    </h3>
                    <p className="text-sm font-medium text-base-600 mt-1">
                      {bluebashRole.role}
                      <span className="mx-2 text-base-300">·</span>
                      Full-time
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className={cn(
                      'inline-flex items-center gap-1.5 px-3 py-1 rounded-full',
                      'text-xs font-mono font-medium',
                      'bg-base-100 border border-base-200 text-base-600',
                    )}>
                      {bluebashRole.startDate} – {bluebashRole.endDate}
                    </span>
                    <p className="text-xs text-base-400 mt-1">{bluebashRole.location}</p>
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
                {bluebashRole.tags.map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </FadeIn>
            </div>
          )}

          {/* ── 3. Education ───────────────────────────────────────── */}
          <div className="relative">
            <div className="absolute -left-[35px] top-1">
              <TimelineDot active={false} />
            </div>

            <FadeIn>
              <div className="flex flex-wrap items-start justify-between gap-3 p-5 rounded-xl border border-base-200 bg-white shadow-sm">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <GraduationCap
                      className="w-4 h-4 text-signal-600"
                      aria-hidden="true"
                    />
                    <h3 className="text-lg font-display font-bold text-base-800">
                      {education[0].institution}
                    </h3>
                  </div>
                  <p className="text-sm text-base-600">
                    {education[0].degree} · {education[0].field}
                  </p>
                </div>
                <span className="text-xs font-mono text-base-400 shrink-0 self-center">
                  {education[0].startYear} – {education[0].endYear}
                </span>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </SectionWrapper>
  )
}
