/**
 * Contact.tsx — Phase 5
 * Split layout: copy + links (left), form (right).
 * Form is wired for Formspree (drop-in, free tier, no backend needed).
 * Replace FORMSPREE_ENDPOINT with your actual endpoint from formspree.io
 */

import { useState } from 'react'
import { motion } from 'framer-motion'
import { SectionWrapper }  from '../layout/SectionWrapper'
import { FadeIn }          from '../animations/FadeIn'
import { identity }        from '../../data/portfolio.data'
import { SECTION_IDS }     from '../../lib/constants'
import { cn }              from '../../lib/utils'
import {
  Github, Linkedin, Mail, Send,
  CheckCircle2, AlertCircle, Download,
} from 'lucide-react'

const resumeHref = `${import.meta.env.BASE_URL}resume.pdf`

// ── Replace with your Formspree endpoint ─────────────────────────
// 1. Create free account at https://formspree.io
// 2. Create a form → copy the endpoint URL here
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'
// ─────────────────────────────────────────────────────────────────

type FormState = 'idle' | 'submitting' | 'success' | 'error'

type FieldError = { name?: string; email?: string; message?: string }

function validate(data: { name: string; email: string; message: string }): FieldError {
  const errors: FieldError = {}
  if (!data.name.trim())       errors.name    = 'Name is required.'
  if (!data.email.trim())      errors.email   = 'Email is required.'
  else if (!/^\S+@\S+\.\S+$/.test(data.email)) errors.email = 'Enter a valid email.'
  if (!data.message.trim())    errors.message = 'Message is required.'
  return errors
}

function InputField({
  id, label, type = 'text', value, onChange, error, multiline = false,
}: {
  id:         string
  label:      string
  type?:      string
  value:      string
  onChange:   (v: string) => void
  error?:     string
  multiline?: boolean
}) {
  const base = cn(
    'w-full px-4 py-3 rounded-xl text-sm',
    'border bg-white text-base-700',
    'placeholder:text-base-300',
    'transition-all duration-150',
    'focus:outline-none focus:ring-2',
    error
      ? 'border-red-300 focus:ring-red-200'
      : 'border-base-200 focus:border-signal-500/50 focus:ring-signal-500/20',
  )

  return (
    <div>
      <label htmlFor={id} className="block text-xs font-medium text-base-600 mb-1.5">
        {label}
      </label>
      {multiline
        ? (
          <textarea
            id={id}
            rows={5}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={label}
            className={cn(base, 'resize-none')}
            aria-describedby={error ? `${id}-error` : undefined}
            aria-invalid={!!error}
          />
        )
        : (
          <input
            id={id}
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={label}
            className={base}
            aria-describedby={error ? `${id}-error` : undefined}
            aria-invalid={!!error}
          />
        )
      }
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1 text-xs text-red-500 flex items-center gap-1">
          <AlertCircle className="w-3 h-3" aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  )
}

export function Contact() {
  const [form, setForm]     = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<FieldError>({})
  const [status, setStatus] = useState<FormState>('idle')

  const set = (field: keyof typeof form) => (v: string) => {
    setForm((f) => ({ ...f, [field]: v }))
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate(form)
    if (Object.keys(errs).length > 0) { setErrors(errs); return }

    setStatus('submitting')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body:    JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <SectionWrapper
      id={SECTION_IDS.contact}
      label="Contact"
      className="bg-base-100"
    >
      {/* Heading */}
      <FadeIn className="mb-14">
        <h2 className={cn(
          'font-display font-bold text-base-800',
          'text-[clamp(1.75rem,3.5vw,2.5rem)] tracking-tight leading-tight',
        )}>
          Let's work together
        </h2>
        <p className="mt-3 text-base-500 max-w-[44ch]">
          Open to AI engineering roles, consulting, and interesting open-source
          collaboration. Response within 48 hours.
        </p>
      </FadeIn>

      <div className="grid lg:grid-cols-[340px_1fr] gap-12 lg:gap-20 items-start">

        {/* Left: links */}
        <FadeIn direction="left" className="space-y-8">
          <div className="space-y-3">
            <p className="text-[11px] font-mono uppercase tracking-widest text-base-400">Reach me at</p>
            <div className="space-y-2">
              {identity.links.email !== 'TODO: add email' && (
                <a
                  href={`mailto:${identity.links.email}`}
                  className="flex items-center gap-3 p-3 rounded-xl border border-base-200 bg-white hover:border-signal-500/35 hover:shadow-card transition-all duration-150 group"
                >
                  <span className="w-8 h-8 rounded-lg bg-signal-500/8 border border-signal-500/20 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-signal-600" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs text-base-400">Email</p>
                    <p className="text-sm font-medium text-base-700 group-hover:text-signal-700 transition-colors">{identity.links.email}</p>
                  </div>
                </a>
              )}
              <a
                href={identity.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl border border-base-200 bg-white hover:border-signal-500/35 hover:shadow-card transition-all duration-150 group"
              >
                <span className="w-8 h-8 rounded-lg bg-signal-500/8 border border-signal-500/20 flex items-center justify-center">
                  <Linkedin className="w-4 h-4 text-signal-600" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs text-base-400">LinkedIn</p>
                  <p className="text-sm font-medium text-base-700 group-hover:text-signal-700 transition-colors">sheikh-gulam-sarvar</p>
                </div>
              </a>
              <a
                href={identity.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl border border-base-200 bg-white hover:border-signal-500/35 hover:shadow-card transition-all duration-150 group"
              >
                <span className="w-8 h-8 rounded-lg bg-signal-500/8 border border-signal-500/20 flex items-center justify-center">
                  <Github className="w-4 h-4 text-signal-600" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs text-base-400">GitHub</p>
                  <p className="text-sm font-medium text-base-700 group-hover:text-signal-700 transition-colors">SheikhSarvar</p>
                </div>
              </a>
            </div>
          </div>

          <div>
            <p className="text-[11px] font-mono uppercase tracking-widest text-base-400 mb-3">Resume</p>
            <a
              href={resumeHref}
              download
              className={cn(
                'inline-flex items-center gap-2 px-5 py-2.5 rounded-xl',
                'text-sm font-medium border border-signal-500/40',
                'text-signal-600 hover:bg-signal-500/8',
                'transition-all duration-150',
              )}
              aria-label="Download resume PDF"
            >
              <Download className="w-4 h-4" aria-hidden="true" />
              Download Resume
            </a>
          </div>

          {/* Availability pill */}
          {identity.available && (
            <div className="flex items-center gap-2 p-4 rounded-xl bg-signal-500/6 border border-signal-500/20">
              <span className="w-2 h-2 rounded-full bg-signal-500 shrink-0" style={{ animation: 'glowPulse 2s ease-in-out infinite' }} />
              <p className="text-sm text-signal-700 font-medium">Currently open to new opportunities</p>
            </div>
          )}
        </FadeIn>

        {/* Right: form */}
        <FadeIn direction="right">
          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-16 text-center gap-4"
            >
              <CheckCircle2 className="w-12 h-12 text-signal-500" aria-hidden="true" />
              <h3 className="font-display font-bold text-base-800 text-xl">Message sent!</h3>
              <p className="text-base-500 text-sm">I'll get back to you within 48 hours.</p>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="mt-2 text-xs text-base-400 underline underline-offset-2 hover:text-base-600 transition-colors"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              aria-label="Contact form"
              className="space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <InputField
                  id="contact-name"
                  label="Your name"
                  value={form.name}
                  onChange={set('name')}
                  error={errors.name}
                />
                <InputField
                  id="contact-email"
                  label="Email address"
                  type="email"
                  value={form.email}
                  onChange={set('email')}
                  error={errors.email}
                />
              </div>
              <InputField
                id="contact-message"
                label="Message"
                value={form.message}
                onChange={set('message')}
                error={errors.message}
                multiline
              />

              {status === 'error' && (
                <p role="alert" className="text-sm text-red-500 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" aria-hidden="true" />
                  Something went wrong. Try emailing directly.
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className={cn(
                  'w-full flex items-center justify-center gap-2',
                  'px-6 py-3 rounded-xl text-sm font-semibold',
                  'bg-signal-500 text-depth-900',
                  'shadow-accent hover:bg-signal-600 hover:shadow-accent-strong',
                  'active:scale-[0.99] transition-all duration-150',
                  'disabled:opacity-60 disabled:cursor-not-allowed',
                )}
              >
                {status === 'submitting' ? (
                  <>
                    <span className="w-4 h-4 border-2 border-depth-900/30 border-t-depth-900 rounded-full animate-spin" aria-hidden="true" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" aria-hidden="true" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </FadeIn>
      </div>
    </SectionWrapper>
  )
}
