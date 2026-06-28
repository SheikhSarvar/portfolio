/**
 * Testimonials.tsx — Phase 4
 * Placeholder section — no fabricated testimonials.
 * Replace the TESTIMONIALS array when real ones are available.
 */

import { SectionWrapper } from '../layout/SectionWrapper'
import { FadeIn }         from '../animations/FadeIn'
import { cn }             from '../../lib/utils'
import { MessageSquare }  from 'lucide-react'

// ── Add real testimonials here when available ──────────────────────
// Each entry: { name, role, company, avatar?, quote }
const TESTIMONIALS: Array<{
  name:    string
  role:    string
  company: string
  avatar?: string
  quote:   string
}> = []
// ──────────────────────────────────────────────────────────────────

export function Testimonials() {
  // Section hidden entirely until at least one real testimonial exists
  if (TESTIMONIALS.length === 0) return null

  return (
    <SectionWrapper
      id="testimonials"
      label="Testimonials"
      className="bg-base-100"
    >
      <FadeIn className="mb-12">
        <h2 className={cn(
          'font-display font-bold text-base-800',
          'text-[clamp(1.75rem,3.5vw,2.5rem)] tracking-tight leading-tight',
        )}>
          What people say
        </h2>
      </FadeIn>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {TESTIMONIALS.map(({ name, role, company, avatar, quote }) => (
          <figure
            key={name}
            className="flex flex-col p-6 rounded-2xl border border-base-200 bg-white"
          >
            <MessageSquare className="w-5 h-5 text-signal-400 mb-4" aria-hidden="true" />
            <blockquote className="text-sm text-base-600 leading-relaxed flex-1 mb-5">
              "{quote}"
            </blockquote>
            <figcaption className="flex items-center gap-3">
              {avatar
                ? <img src={avatar} alt={name} className="w-8 h-8 rounded-full object-cover" loading="lazy" />
                : (
                  <div className="w-8 h-8 rounded-full bg-signal-500/15 flex items-center justify-center text-xs font-bold text-signal-700" aria-hidden="true">
                    {name.charAt(0)}
                  </div>
                )
              }
              <div>
                <p className="text-sm font-semibold text-base-700">{name}</p>
                <p className="text-xs text-base-400">{role} · {company}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </SectionWrapper>
  )
}
