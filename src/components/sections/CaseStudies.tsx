/**
 * CaseStudies.tsx
 * Premium consulting-style case study cards for production AI work by Gulam Sarvar.
 */

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionWrapper }  from '../layout/SectionWrapper'
import { FadeIn }          from '../animations/FadeIn'
import { StaggerChildren } from '../animations/StaggerChildren'
import { SECTION_IDS }     from '../../lib/constants'
import { scaleIn }         from '../../lib/motion'
import { cn }              from '../../lib/utils'
import {
  Mic, Database, ChevronDown, ChevronUp, CheckCircle2, Workflow,
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
    id:      'omniflow',
    title:   'OmniFlow — Autonomous Agentic & Workflow Platform',
    client:  'EatEasy (Enterprise Platform)',
    domain:  'Enterprise Agentic Systems / Telephony Automation',
    icon:    Workflow,
    accentClass: 'text-signal-400 bg-signal-500/10 border-signal-500/20',
    problem:
      'Modern enterprises require seamless automation across disparate business logic, arbitrary decision graphs, and omnichannel conversational interactions. Existing solutions either lack durable orchestration for long-running processes, drop context on service restarts, or cannot reliably bridge real-time voice telephony with multi-agent task execution.',
    solution:
      'Architected OmniFlow — a universal agentic workflow platform unifying n8n-style graph automation, bi-directional voice telephony (inbound IVR customer support and outbound conversational campaigns via 3CX & WebRTC), and durable state machines powered by Temporal.io. Workflows survive process failures with zero state loss, while multi-agent workers interact dynamically with Oracle and vector databases.',
    architecture: [
      'Temporal.io durable workflow engine with deterministic event-sourcing and zero state loss',
      'Universal graph-based workflow engine executing arbitrary triggers, actions, and decision branches (n8n-style)',
      '3CX PBX & WebRTC voice bridge supporting inbound call routing and automated outbound conversational campaigns (<1.5s latency)',
      'Multi-agent cognitive orchestration via LangGraph with dynamic tool synthesis and memory',
      'High-throughput transactional auditing and logging on Oracle with vector search integration',
      'Distributed worker mesh containerized with Docker and scaled horizontally',
    ],
    tech: ['Temporal.io', '3CX', 'Python', 'FastAPI', 'LangGraph', 'Oracle', 'LiveKit', 'WebRTC', 'Docker', 'Redis'],
    outcomes: [
      'Universal orchestration: handles arbitrary enterprise workflows and custom agent tools',
      'Real-time telephony: inbound customer support + outbound campaigns with <1.5s voice turnaround',
      '100% durable state retention with automatic failure recovery and zero loss',
      'Unified enterprise stack across Temporal, 3CX, Oracle, and modern LLM agents',
    ],
    lessons: [
      'Durable execution (Temporal.io) eliminates the need for fragile distributed locking and manual retry crons.',
      'Integrating 3CX SIP trunks with WebRTC pipelines provides enterprise telecom reliability with sub-1.5s voice synthesis.',
      'Decoupling agent cognitive decisions from workflow activity execution guarantees safety and auditability in enterprise operations.',
    ],
  },
  {
    id:      'kickcall',
    title:   'Real-Time Voice AI Pipeline (Kickcall)',
    client:  'Bluebash (Commercial Product)',
    domain:  'Voice AI / Telecommunications',
    icon:    Mic,
    accentClass: 'text-signal-400 bg-signal-500/10 border-signal-500/20',
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
    accentClass: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
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
        'rounded-2xl border border-base-200 bg-white shadow-sm overflow-hidden',
        'transition-all duration-300',
        expanded ? 'bg-base-50/70 border-signal-500/30 shadow-md' : 'hover:bg-base-50/50 hover:border-signal-500/30 hover:shadow-md',
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
            <span className="text-[11px] font-mono uppercase tracking-wider text-base-500 block mb-1">
              {cs.domain} · {cs.client}
            </span>
            <h3 className="text-xl font-display font-bold text-base-800 leading-tight">
              {cs.title}
            </h3>
          </div>
        </div>

        {/* Problem & Solution summary */}
        <div className="space-y-3 text-sm text-base-600 mb-5 leading-relaxed">
          <p><strong className="text-base-800 font-semibold">The Problem: </strong>{cs.problem}</p>
          <p><strong className="text-base-800 font-semibold">The Solution: </strong>{cs.solution}</p>
        </div>

        {/* Outcomes */}
        <div className="p-4 rounded-xl bg-signal-500/5 border border-signal-500/15 mb-5">
          <p className="text-[11px] font-mono uppercase tracking-wider text-signal-700 font-semibold mb-2.5">
            Key Outcomes
          </p>
          <ul className="space-y-1.5" role="list">
            {cs.outcomes.map((o) => (
              <li key={o} className="flex items-start gap-2 text-xs text-base-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-signal-600 shrink-0 mt-0.5" aria-hidden="true" />
                <span>{o}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech strip */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {cs.tech.map((t) => (
            <span key={t} className="chip">{t}</span>
          ))}
        </div>

        {/* Toggle details */}
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="flex items-center gap-1.5 text-xs font-semibold text-signal-600 hover:text-signal-700 transition-colors pt-2 border-t border-base-200 w-full"
          aria-expanded={expanded}
        >
          <span>{expanded ? 'Hide Deep Dive' : 'View Architecture & Lessons Learned'}</span>
          {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Expandable details */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="px-7 pb-6 pt-2 border-t border-base-200 bg-base-50/50 space-y-5"
          >
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-base-500 font-semibold mb-2">
                Architecture Breakdown
              </p>
              <ul className="space-y-1.5" role="list">
                {cs.architecture.map((a) => (
                  <li key={a} className="flex items-start gap-2 text-xs text-base-600">
                    <span className="text-signal-500 shrink-0 mt-0.5">❯</span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-base-500 font-semibold mb-2">
                Engineering Lessons
              </p>
              <ul className="space-y-1.5" role="list">
                {cs.lessons.map((l) => (
                  <li key={l} className="flex items-start gap-2 text-xs text-base-600">
                    <span className="text-signal-500 shrink-0 mt-0.5">•</span>
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
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
      id={SECTION_IDS.caseStudies}
      label="Case Studies"
      className="bg-transparent"
    >
      <FadeIn className="mb-12">
        <h2 className={cn(
          'font-display font-bold text-base-800',
          'text-[clamp(1.75rem,3.5vw,2.5rem)]',
          'tracking-tight leading-tight',
        )}>
          Engineering Case Studies
        </h2>
        <p className="mt-3 text-base-500 text-base max-w-[50ch]">
          In-depth architectural breakdowns of production agentic engines, voice AI telephony, and domain-specific RAG systems.
        </p>
      </FadeIn>

      <StaggerChildren className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {CASE_STUDIES.map((cs) => (
          <CaseStudyCard key={cs.id} cs={cs} />
        ))}
      </StaggerChildren>
    </SectionWrapper>
  )
}
