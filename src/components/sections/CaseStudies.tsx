/**
 * CaseStudies.tsx — Phase 4
 * Premium consulting-style case study cards for production AI work.
 */

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionWrapper }  from '../layout/SectionWrapper'
import { FadeIn }          from '../animations/FadeIn'
import { StaggerChildren } from '../animations/StaggerChildren'
import { SECTION_IDS }     from '../../lib/constants'
import { scaleIn } from '../../lib/motion'
import { cn }              from '../../lib/utils'
import {
  Mic, Database, ChevronDown, ChevronUp, CheckCircle2,
} from 'lucide-react'

type CaseStudy = {
  id:           string
  title:        string
  client:       string
  domain:       string
  problem:      string
  solution:     string
  architecture: string[]
  tech:         string[]
  outcomes:     string[]
  lessons:      string[]
  icon:         React.ElementType
  accentClass:  string
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id:      'kickcall',
    title:   'Real-Time Voice AI Pipeline',
    client:  'Bluebash (Internal Product)',
    domain:  'Voice AI / Telecommunications',
    icon:    Mic,
    accentClass: 'text-signal-600 bg-signal-500/8 border-signal-500/20',
    problem:
      'Bluebash needed a production-grade voice AI product capable of handling outbound and inbound calls at scale, with latency low enough that callers could not distinguish it from a human agent. Existing off-the-shelf solutions were either too expensive, too high-latency, or lacked the customisability required for business logic integration.',
    solution:
      'Built Kickcall from scratch — an end-to-end STT→LLM→TTS pipeline. Audio is captured and streamed via WebRTC through LiveKit, transcribed in real time, passed to an LLM with dynamic context injection, and synthesised back to speech before the caller notices a gap. Redis manages distributed session state across agent instances.',
    architecture: [
      'WebRTC audio capture via LiveKit Agents SDK',
      'Streaming STT with partial transcript accumulation',
      'LangGraph-orchestrated LLM with tool calling and memory',
      'Redis-backed session state for multi-turn conversation context',
      'Streaming TTS with playback synchronisation',
      'Docker-containerised, horizontally scalable agent workers',
    ],
    tech: ['LiveKit', 'WebRTC', 'LangGraph', 'OpenAI', 'Redis', 'FastAPI', 'Python', 'Docker'],
    outcomes: [
      '150–200 calls per day in live production',
      'Sub-2-second end-to-end latency (STT + LLM + TTS)',
      'Built and launched from scratch within Bluebash',
      'Zero dependency on third-party call platforms',
    ],
    lessons: [
      'Partial transcript accumulation is critical — waiting for complete utterances introduces unacceptable latency.',
      'Redis session state must be keyed per call-leg, not per user, to handle concurrent calls from the same account.',
      'LiveKit Agents SDK has edge cases in reconnect logic — filed upstream bug report.',
    ],
  },
  {
    id:      'rag-legal-healthcare',
    title:   'Hybrid RAG for Regulated Domains',
    client:  'Legal & Healthcare Clients (via Bluebash)',
    domain:  'Legal Tech / Healthcare AI',
    icon:    Database,
    accentClass: 'text-blue-600 bg-blue-50 border-blue-200',
    problem:
      'Legal and healthcare clients needed document intelligence systems that could answer precise questions over large corpora of regulatory documents, contracts, and clinical guidelines. Naive dense-only RAG produced too many hallucinations and missed exact-match retrieval on technical terminology (drug names, clause identifiers, statute numbers).',
    solution:
      'Designed a hybrid retrieval architecture combining dense vector search (semantic) with sparse BM25 (lexical) and a cross-encoder reranker. Led a cross-functional team of ~5 across frontend, cloud, and backend to deliver the full system.',
    architecture: [
      'Document ingestion pipeline with chunking strategies tuned per domain (legal vs. clinical)',
      'Hybrid retrieval: dense embeddings (Qdrant/Pinecone) + sparse BM25 in parallel',
      'Reciprocal Rank Fusion to merge dense and sparse result sets',
      'Cross-encoder reranking pass to re-score top-k candidates',
      'LangGraph query routing — different retrieval strategies per query type',
      'FastAPI backend exposing retrieval + generation endpoints',
    ],
    tech: ['Qdrant', 'Pinecone', 'LangGraph', 'LangChain', 'FastAPI', 'Python', 'Docker'],
    outcomes: [
      'Significantly improved retrieval accuracy over dense-only baseline on domain-specific terminology',
      'Delivered for two separate regulated-industry clients',
      'Led technical direction across a ~5-person cross-functional team',
      'Reranking pass reduced false positives in top-3 results measurably',
    ],
    lessons: [
      'Chunking strategy matters more than model choice — domain-specific boundaries (sections, clauses) outperform fixed-size windows.',
      'Hybrid retrieval adds latency; a query-type router to skip sparse retrieval on semantic queries pays off at scale.',
      'Cross-encoder reranking is expensive — cache results for repeated query patterns.',
    ],
  },
]

function CaseStudyCard({ cs }: { cs: CaseStudy }) {
  const [expanded, setExpanded] = useState(false)
  const Icon = cs.icon

  return (
    <motion.article
      variants={scaleIn}
      className={cn(
        'rounded-2xl border border-base-200 bg-white overflow-hidden',
        'transition-shadow duration-200',
        expanded ? 'shadow-card-hover' : 'shadow-card',
      )}
      aria-label={`Case study: ${cs.title}`}
    >
      {/* Header */}
      <div className="p-7 pb-5">
        <div className="flex items-start gap-4 mb-5">
          <div className={cn('w-10 h-10 rounded-xl flex items-center justify-center border shrink-0', cs.accentClass)}>
            <Icon className="w-5 h-5" aria-hidden="true" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <span className="text-[10px] font-mono font-medium uppercase tracking-widest text-base-400">
                Case Study
              </span>
              <span className="text-base-200">·</span>
              <span className="text-[10px] font-mono text-base-400">{cs.domain}</span>
            </div>
            <h3 className="font-display font-bold text-base-800 text-lg leading-tight">{cs.title}</h3>
            <p className="text-xs text-base-500 mt-0.5">{cs.client}</p>
          </div>
        </div>

        {/* Problem */}
        <div className="mb-4">
          <p className="text-[11px] font-mono uppercase tracking-widest text-base-400 mb-2">Business Problem</p>
          <p className="text-sm text-base-600 leading-relaxed">{cs.problem}</p>
        </div>

        {/* Outcomes preview */}
        <div className="grid grid-cols-2 gap-2 mb-5">
          {cs.outcomes.slice(0, 2).map((o) => (
            <div key={o} className="flex items-start gap-2 p-3 rounded-lg bg-base-50 border border-base-100">
              <CheckCircle2 className="w-3.5 h-3.5 text-signal-500 shrink-0 mt-0.5" aria-hidden="true" />
              <span className="text-xs text-base-600 leading-snug">{o}</span>
            </div>
          ))}
        </div>

        {/* Tech chips */}
        <div className="flex flex-wrap gap-1.5">
          {cs.tech.map((t) => (
            <span key={t} className="chip">{t}</span>
          ))}
        </div>
      </div>

      {/* Expand toggle */}
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        className={cn(
          'w-full flex items-center justify-between px-7 py-3',
          'text-xs font-medium text-base-500 hover:text-base-700',
          'border-t border-base-100 bg-base-50/50 hover:bg-base-50',
          'transition-colors duration-150',
        )}
        aria-expanded={expanded}
        aria-controls={`cs-detail-${cs.id}`}
      >
        <span>{expanded ? 'Show less' : 'Full case study — architecture, lessons learned'}</span>
        {expanded
          ? <ChevronUp className="w-4 h-4" aria-hidden="true" />
          : <ChevronDown className="w-4 h-4" aria-hidden="true" />
        }
      </button>

      {/* Expanded detail */}
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            id={`cs-detail-${cs.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="px-7 pb-7 pt-4 space-y-6 border-t border-base-100">

              {/* Solution */}
              <div>
                <p className="text-[11px] font-mono uppercase tracking-widest text-base-400 mb-2">AI Solution</p>
                <p className="text-sm text-base-600 leading-relaxed">{cs.solution}</p>
              </div>

              {/* Architecture */}
              <div>
                <p className="text-[11px] font-mono uppercase tracking-widest text-base-400 mb-3">Architecture</p>
                <ol className="space-y-2" aria-label="Architecture steps">
                  {cs.architecture.map((step, i) => (
                    <li key={step} className="flex items-start gap-3 text-sm text-base-600">
                      <span className="shrink-0 w-5 h-5 rounded-full bg-signal-500/10 border border-signal-500/20 text-signal-700 text-[10px] font-mono font-bold flex items-center justify-center mt-0.5">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              {/* All outcomes */}
              <div>
                <p className="text-[11px] font-mono uppercase tracking-widest text-base-400 mb-3">Outcomes</p>
                <ul className="space-y-1.5" aria-label="Outcomes">
                  {cs.outcomes.map((o) => (
                    <li key={o} className="flex items-start gap-2 text-sm text-base-600">
                      <span className="text-signal-500 shrink-0 mt-0.5" aria-hidden="true">▸</span>
                      {o}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Lessons */}
              <div>
                <p className="text-[11px] font-mono uppercase tracking-widest text-base-400 mb-3">Lessons Learned</p>
                <ul className="space-y-2" aria-label="Lessons learned">
                  {cs.lessons.map((l) => (
                    <li key={l} className="flex items-start gap-2 p-3 rounded-lg bg-amber-50 border border-amber-100 text-xs text-amber-900 leading-relaxed">
                      <span className="shrink-0 mt-0.5" aria-hidden="true">💡</span>
                      {l}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  )
}

export function CaseStudies() {
  return (
    <SectionWrapper
      id={SECTION_IDS.projects}
      label="Case Studies"
      className="bg-base-100"
    >
      <FadeIn className="mb-12">
        <h2 className={cn(
          'font-display font-bold text-base-800',
          'text-[clamp(1.75rem,3.5vw,2.5rem)] tracking-tight leading-tight',
        )}>
          Production AI in depth
        </h2>
        <p className="mt-3 text-base-500 max-w-[50ch]">
          How the systems were designed, what tradeoffs were made, and what I learned.
        </p>
      </FadeIn>

      <StaggerChildren className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {CASE_STUDIES.map((cs) => (
          <CaseStudyCard key={cs.id} cs={cs} />
        ))}
      </StaggerChildren>
    </SectionWrapper>
  )
}
