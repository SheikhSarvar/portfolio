import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Quote, ExternalLink } from 'lucide-react'
import { cn } from '../../lib/utils'
import { useReducedMotion } from '../../hooks'

interface Recommendation {
  name: string
  role: string
  company: string
  linkedinUrl: string
  quote: string
  relationship: string
  featured?: boolean
}

const RECOMMENDATIONS: Recommendation[] = [
  {
    name: 'Prince Kamboj',
    role: 'Senior Data Scientist',
    company: 'Bluebash',
    linkedinUrl: 'https://www.linkedin.com/in/sheikh-gulam-sarvar-ab3343219',
    relationship: 'Managed Sheikh directly at Bluebash',
    featured: true,
    quote:
      'I worked with Gulam Sarvar at Bluebash on voice AI and RAG systems for legal and healthcare clients. He handled the full AI pipeline, from speech-to-text and LLMs to text-to-speech, and was excellent at diagnosing and solving performance and latency issues. He\'s a highly reliable and skilled AI engineer, quick to learn new technologies, and focused on building robust, production-ready systems. A strong asset to any applied AI team.',
  },
  {
    name: 'Lakshmi Narayana Nunna',
    role: 'Senior Cloud Operations & DevOps Engineer',
    company: 'Kickcall.ai',
    linkedinUrl: 'https://www.linkedin.com/in/sheikh-gulam-sarvar-ab3343219',
    relationship: 'Worked with Sheikh on the same team · February 9, 2026',
    quote:
      'I worked with Sheikh Gulam Sarvar on Kickcall.ai, and he was a great teammate to collaborate with. He brings strong technical understanding, ownership, and a positive attitude to the team. Always reliable and focused on delivering quality work. I\'d definitely recommend working with him.',
  },
  {
    name: 'Coming Soon',
    role: '—',
    company: '—',
    linkedinUrl: 'https://www.linkedin.com/in/sheikh-gulam-sarvar-ab3343219',
    relationship: '',
    quote: '',
  },
]

function getInitials(name: string) {
  return name.split(' ').map((w) => w[0]).join('').slice(0, 2).toUpperCase()
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function FeaturedCard({ rec, index }: { rec: Recommendation; index: number }) {
  const reduced = useReducedMotion()

  return (
    <motion.figure
      initial={reduced ? false : { opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.0, 0.0, 0.2, 1] }}
      className={cn(
        'relative flex flex-col h-full rounded-3xl p-8 lg:p-10',
        'bg-white border border-base-200 shadow-[0_12px_32px_rgb(15_23_42/0.08)]',
        'dark:bg-white/10 dark:border-white/15 dark:shadow-[0_12px_32px_rgb(0_0_0/0.2)]',
        'backdrop-blur-xl transition-all duration-300',
      )}
    >
      <Quote className="absolute top-6 right-6 w-10 h-10 text-base-200 dark:text-white/10" aria-hidden="true" />

      <div className="flex items-center gap-2 mb-6">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0A66C2]/10 border border-[#0A66C2]/20 text-[#0A66C2] text-[10px] font-semibold tracking-wider uppercase">
          <LinkedInIcon className="w-2.5 h-2.5" />
          Verified Recommendation
        </span>
      </div>

      <blockquote className="flex-1 text-base-700 dark:text-white/80 text-[15px] leading-[1.75] mb-8 font-light">
        "{rec.quote}"
      </blockquote>

      <figcaption className="flex items-center gap-4">
        <div
          className={cn(
            'w-12 h-12 rounded-2xl shrink-0 flex items-center justify-center',
            'bg-gradient-to-br from-signal-400 to-signal-600',
            'text-sm font-bold text-depth-900',
            'shadow-[0_0_0_2px_rgb(45_212_191/0.22)]',
          )}
          aria-hidden="true"
        >
          {getInitials(rec.name)}
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-base-800 dark:text-white font-semibold text-sm">{rec.name}</p>
          <p className="text-base-500 dark:text-white/55 text-xs mt-0.5">{rec.role} · {rec.company}</p>
          <p className="text-signal-700 dark:text-signal-300 text-[10px] mt-1 font-mono">{rec.relationship}</p>
        </div>
        <a
          href={rec.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${rec.name}'s LinkedIn`}
          className={cn(
            'shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl',
            'text-[11px] font-semibold text-base-500 dark:text-white/60',
            'border border-base-200 dark:border-white/15',
            'hover:bg-[#0A66C2]/10 hover:border-[#0A66C2]/30 hover:text-base-800 dark:hover:text-white',
            'transition-all duration-200',
          )}
        >
          <ExternalLink className="w-3 h-3" aria-hidden="true" />
          LinkedIn
        </a>
      </figcaption>
    </motion.figure>
  )
}

function CompactCard({ rec, index }: { rec: Recommendation; index: number }) {
  const reduced = useReducedMotion()
  const floatDelay = `${(index + 1) * 1.5}s`
  const isPlaceholder = !rec.quote

  return (
    <motion.figure
      initial={reduced ? false : { opacity: 0, x: 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.6, delay: index * 0.1 + 0.15, ease: [0.0, 0.0, 0.2, 1] }}
      style={reduced ? {} : { animationDelay: floatDelay }}
      className={cn(
        'relative flex flex-col rounded-2xl p-6',
        'bg-white border border-base-200 shadow-[0_8px_24px_rgb(15_23_42/0.07)]',
        'dark:bg-white/10 dark:border-white/15 dark:shadow-[0_8px_24px_rgb(0_0_0/0.15)]',
        'backdrop-blur-xl transition-all duration-300',
        isPlaceholder && 'opacity-50',
      )}
    >
      <Quote className="absolute top-4 right-4 w-6 h-6 text-base-200 dark:text-white/10" aria-hidden="true" />

      {isPlaceholder ? (
        <div className="flex flex-col items-center justify-center flex-1 gap-3 py-4 text-center">
          <div className="w-10 h-10 rounded-2xl border-2 border-dashed border-base-300 dark:border-white/20 flex items-center justify-center">
            <span className="text-xl">+</span>
          </div>
          <p className="text-base-500 dark:text-white/40 text-sm font-medium">More coming soon</p>
          <p className="text-base-400 dark:text-white/25 text-xs">Another recommendation on the way</p>
        </div>
      ) : (
        <>
          <div className="flex items-center gap-2 mb-4">
            <LinkedInIcon className="w-3 h-3 text-[#0A66C2]/75" />
            <span className="text-[10px] text-base-400 dark:text-white/35 font-mono tracking-wider uppercase">LinkedIn</span>
          </div>

          <blockquote className="text-base-600 dark:text-white/70 text-[13px] leading-relaxed mb-5 font-light line-clamp-4">
            "{rec.quote}"
          </blockquote>

          <figcaption className="flex items-center gap-3 mt-auto">
            <div
              className={cn(
                'w-9 h-9 rounded-xl shrink-0 flex items-center justify-center',
                'bg-gradient-to-br from-signal-400 to-signal-600',
                'text-xs font-bold text-depth-900',
              )}
              aria-hidden="true"
            >
              {getInitials(rec.name)}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-base-800 dark:text-white/90 font-semibold text-xs">{rec.name}</p>
              <p className="text-base-500 dark:text-white/45 text-[11px] truncate">{rec.role} · {rec.company}</p>
            </div>
            <a
              href={rec.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${rec.name}'s LinkedIn`}
              className={cn(
                'shrink-0 p-1.5 rounded-lg',
                'text-[#0A66C2] bg-[#0A66C2]/10',
                'hover:bg-[#0A66C2] hover:text-white',
                'transition-all duration-200',
              )}
            >
              <LinkedInIcon className="w-3 h-3" />
            </a>
          </figcaption>
        </>
      )}
    </motion.figure>
  )
}

export function Testimonials() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-8%' })
  const reduced = useReducedMotion()

  const featured = RECOMMENDATIONS.find((r) => r.featured) ?? RECOMMENDATIONS[0]
  const compact = RECOMMENDATIONS.filter((_, i) => i !== RECOMMENDATIONS.indexOf(featured))

  return (
    <section
      id="recommendations"
      ref={ref}
      aria-label="LinkedIn Recommendations"
      className="relative overflow-hidden py-[clamp(5rem,8vw,8rem)]"
    >
      <div className="absolute inset-0 -z-10 bg-transparent" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,#1e3a5f14_0%,transparent_70%)]" />
      </div>

      {!reduced && (
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute w-[420px] h-[420px] rounded-full bg-signal-500/[0.05] blur-[100px] top-[-80px] left-[-80px]" />
          <div className="absolute w-[360px] h-[360px] rounded-full bg-sky-500/[0.05] blur-[80px] bottom-[-80px] right-[-80px]" />
        </div>
      )}

      <div className="container-wide relative z-10">
        <motion.div
          className="mb-14 text-center"
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label justify-center mb-4" aria-hidden="true">
            LinkedIn Recommendations
          </p>
          <h2 className="font-display font-bold text-base-800 dark:text-white text-[clamp(1.75rem,3.5vw,2.75rem)] tracking-tight leading-tight mb-4">
            What colleagues say
          </h2>
          <p className="text-base-500 dark:text-white/45 text-sm max-w-xs mx-auto">
            Verified recommendations from LinkedIn.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6 items-stretch">
          <FeaturedCard rec={featured} index={0} />
          <div className="flex flex-col gap-5 lg:gap-6">
            {compact.map((rec, i) => (
              <CompactCard key={rec.name} rec={rec} index={i} />
            ))}
          </div>
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={reduced ? false : { opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="https://www.linkedin.com/in/sheikh-gulam-sarvar-ab3343219"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'inline-flex items-center gap-2 px-5 py-2.5 rounded-xl',
              'text-sm font-semibold text-base-700 dark:text-white/70',
              'border border-base-200 dark:border-white/15 bg-white dark:bg-white/5',
              'hover:bg-[#0A66C2]/10 hover:border-[#0A66C2]/30 hover:text-base-800 dark:hover:text-white',
              'backdrop-blur-sm transition-all duration-300',
            )}
          >
            <LinkedInIcon className="w-4 h-4 text-[#0A66C2]" />
            View all on LinkedIn
            <ExternalLink className="w-3 h-3 opacity-50" aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
