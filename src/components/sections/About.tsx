import { motion } from 'framer-motion'
import { SectionWrapper } from '../layout/SectionWrapper'
import { FadeIn } from '../animations/FadeIn'
import { StaggerChildren } from '../animations/StaggerChildren'
import { experience } from '../../data/portfolio.data'
import { ABOUT_STATS, SECTION_IDS } from '../../lib/constants'
import { fadeUp, scaleIn } from '../../lib/motion'
import { cn } from '../../lib/utils'
import {
  Cpu, Mic, Database, Code2, GitBranch, Workflow,
} from 'lucide-react'

const CORE_STRENGTHS = [
  {
    icon: Workflow,
    label: 'Agentic Workflow Platforms',
    desc: 'Temporal.io durable execution, arbitrary DAG graphs (n8n-style), multi-agent task execution.',
  },
  {
    icon: Mic,
    label: 'Voice AI & 3CX Telephony',
    desc: 'Real-time inbound IVR and outbound conversational campaigns via 3CX and WebRTC (<1.5s latency).',
  },
  {
    icon: Database,
    label: 'Enterprise Data & Oracle',
    desc: 'High-throughput transactional schemas on Oracle, Redis session stores, and vector backends.',
  },
  {
    icon: Cpu,
    label: 'RAG & Cognitive Systems',
    desc: 'Hybrid dense+sparse retrieval, cross-encoder reranking, Qdrant/Pinecone architecture.',
  },
  {
    icon: Code2,
    label: 'Production Full-Stack Systems',
    desc: 'FastAPI backends, asynchronous worker queues, React frontends, Dockerized microservices.',
  },
  {
    icon: GitBranch,
    label: 'Open Source Tooling',
    desc: 'Author of PyRAG Core — MIT-licensed RAG platform with 143 unit tests on GitHub.',
  },
]

export function About() {
  return (
    <SectionWrapper
      id={SECTION_IDS.about}
      label="About Gulam Sarvar"
      className="bg-transparent"
    >
      <div className="grid lg:grid-cols-[1fr_380px] gap-16 lg:gap-24 items-start">
        <div>
          <FadeIn>
            <h2 className={cn(
              'font-display font-bold text-base-800 mb-6',
              'text-[clamp(2rem,4vw,2.75rem)]',
              'tracking-tight leading-[1.1]',
            )}>
              Building autonomous AI that runs{' '}
              <span className="text-gradient">in production</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="space-y-4 text-base-600 leading-relaxed mb-10 max-w-[58ch]">
              <p>
                I am <strong className="font-semibold text-base-800">Gulam Sarvar</strong>, an AI Engineer
                based in <strong className="font-semibold text-base-800">Bengaluru, India</strong> working at <strong className="font-semibold text-base-800">EatEasy</strong>, specializing in the architecture
                of enterprise-grade agentic platforms, durable workflow engines, and real-time voice AI systems.
              </p>
              <p>
                At EatEasy, I design scalable agentic automation platforms that unify arbitrary graph-based workflows
                (akin to n8n) with autonomous multi-agent cognition. My systems leverage{' '}
                <a
                  href="https://temporal.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-signal-700 underline underline-offset-4 hover:text-signal-800"
                >
                  Temporal.io
                </a>{' '}
                for bulletproof, fault-tolerant state orchestration, integrate bi-directional voice telephony (inbound call handling and outbound campaigns) with <strong className="font-semibold text-base-800">3CX</strong> and WebRTC, and scale persistence across enterprise <strong className="font-semibold text-base-800">Oracle</strong> and vector databases.
              </p>
              <p>
                Previously at <strong className="font-semibold text-base-800">Bluebash Pvt Ltd</strong>, I built <strong className="font-semibold text-base-800">Kickcall</strong> from scratch — a commercial real-time voice AI pipeline processing 150–200 calls daily with sub-2-second latency — and directed technical teams delivering high-precision RAG architectures in legal and healthcare domains.
              </p>
              <p>
                Outside enterprise engineering, I author and maintain <strong className="font-semibold text-base-800">PyRAG Core</strong>, an open-source Python/FastAPI/LangGraph platform, and contribute upstream improvements to core developer tooling.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <h3 className="text-xs font-mono font-medium tracking-widest uppercase text-base-400 mb-5">
              Core Engineering Focus
            </h3>
          </FadeIn>

          <StaggerChildren speed="fast" className="grid sm:grid-cols-2 gap-4">
            {CORE_STRENGTHS.map(({ icon: Icon, label, desc }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                className={cn(
                  'flex gap-3.5 p-4 rounded-xl',
                  'border border-base-200 bg-white shadow-sm',
                  'hover:border-signal-500/35 hover:bg-base-50 hover:shadow-md',
                  'transition-all duration-200 group',
                )}
              >
                <div
                  className={cn(
                    'shrink-0 w-9 h-9 rounded-lg flex items-center justify-center',
                    'bg-signal-500/10 border border-signal-500/20',
                    'group-hover:bg-signal-500/20 group-hover:scale-105 transition-all duration-200',
                  )}
                  aria-hidden="true"
                >
                  <Icon className="w-4 h-4 text-signal-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-base-800 mb-1 group-hover:text-signal-700 transition-colors">
                    {label}
                  </p>
                  <p className="text-xs text-base-500 leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </StaggerChildren>
        </div>

        <div className="space-y-6 lg:sticky lg:top-28">
          <StaggerChildren className="grid grid-cols-2 gap-3">
            {ABOUT_STATS.map(({ value, label }) => (
              <motion.div
                key={label}
                variants={scaleIn}
                className={cn(
                  'p-5 rounded-2xl border border-base-200 bg-white shadow-sm',
                  'hover:border-signal-500/35 hover:shadow-accent',
                  'transition-all duration-200 group',
                )}
              >
                <p
                  className={cn(
                    'font-display font-bold text-base-800 mb-1',
                    'text-[clamp(1.25rem,2.5vw,1.75rem)] tracking-tight leading-none',
                    'group-hover:text-gradient',
                  )}
                >
                  {value}
                </p>
                <p className="text-xs text-base-500 leading-tight">{label}</p>
              </motion.div>
            ))}
          </StaggerChildren>

          <FadeIn delay={0.3}>
            <div
              className={cn(
                'p-6 rounded-2xl',
                'border border-signal-500/20 bg-signal-500/5 backdrop-blur-sm',
              )}
            >
              <p className="text-xs font-mono uppercase tracking-widest text-signal-600 mb-2">
                Engineering Principle
              </p>
              <blockquote className="text-base-700 text-sm leading-relaxed italic">
                "Durable execution beats fragile scripts. Real-time latency beats synthetic benchmarks. Ship resilient systems that run continuously without human intervention."
              </blockquote>
            </div>
          </FadeIn>

          <FadeIn delay={0.35}>
            <div className="flex items-start gap-3 p-4 rounded-xl border border-base-200 bg-white shadow-sm">
              <div className="shrink-0 mt-1">
                <span
                  className="w-2.5 h-2.5 rounded-full bg-signal-500 block"
                  style={{ animation: 'glowPulse 2s ease-in-out infinite' }}
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-base-800">
                  {experience[0]?.role} · {experience[0]?.company}
                </p>
                <p className="text-xs text-base-500 mt-0.5">
                  {experience[0]?.startDate} – {experience[0]?.endDate} · {experience[0]?.location}
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </SectionWrapper>
  )
}
