import { motion } from 'framer-motion'
import { ArrowDown, Github, ExternalLink, Mic, Linkedin, CheckCircle2 } from 'lucide-react'
import { TypewriterText } from '../animations/TypewriterText'
import { identity } from '../../data/portfolio.data'
import { HERO_ROLES, SECTION_IDS } from '../../lib/constants'
import { cn } from '../../lib/utils'
import { scrollToSection } from '../../lib/navigation'
import { fadeUp, staggerContainer, scaleIn } from '../../lib/motion'
import React from 'react'

interface HeroProps {
  theme: 'light' | 'dark'
}

// A helper for the magnetic button effect
function MagneticButton({
  children,
  className,
  onClick,
  href,
}: {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  href?: string
}) {
  const ref = React.useRef<HTMLAnchorElement & HTMLButtonElement>(null)
  const [position, setPosition] = React.useState({ x: 0, y: 0 })

  const handleMouse = (e: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = e
    const { height, width, left, top } = ref.current!.getBoundingClientRect()
    const middleX = clientX - (left + width / 2)
    const middleY = clientY - (top + height / 2)
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 })
  }

  const reset = () => {
    setPosition({ x: 0, y: 0 })
  }

  if (href) {
    return (
      <motion.a
        ref={ref}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        onMouseMove={handleMouse}
        onMouseLeave={reset}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      ref={ref}
      type="button"
      onClick={onClick}
      className={className}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.button>
  )
}

export function Hero({ theme }: HeroProps) {
  const isDarkTheme = theme === 'dark'

  return (
    <section
      id={SECTION_IDS.hero}
      className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden"
      aria-label="Introduction to Gulam Sarvar"
    >
      {/* Main Content Container */}
      <div className="relative z-10 container-wide flex flex-col justify-center min-h-[100dvh] pb-24 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text & CTAs */}
          <motion.div
            className="flex flex-col items-start lg:col-span-7 xl:col-span-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Glassmorphic Availability Badge */}
            <motion.div variants={scaleIn} className="mb-6">
              <div
                className={cn(
                  'inline-flex items-center gap-2.5 px-4 py-2 rounded-full',
                  'text-[11px] font-mono font-medium tracking-widest uppercase',
                  'backdrop-blur-md border shadow-sm transition-all duration-300',
                  isDarkTheme 
                    ? 'bg-white/5 border-white/10 text-white/80 hover:bg-white/10'
                    : 'bg-black/5 border-black/10 text-slate-800 hover:bg-black/10',
                )}
              >
                <span
                  className={cn(
                    'w-2 h-2 rounded-full',
                    identity.available ? 'bg-signal-500 shadow-[0_0_8px_rgba(45,212,191,0.6)]' : 'bg-slate-500'
                  )}
                  style={{ animation: identity.available ? 'glowPulse 2s ease-in-out infinite' : 'none' }}
                  aria-hidden="true"
                />
                <span>AI Engineer at <strong className="font-semibold text-signal-400">EatEasy</strong> · Bengaluru, India</span>
                <span className="opacity-40">•</span>
                <span>{identity.available ? 'Open to Select Projects' : 'Engineering Systems'}</span>
              </div>
            </motion.div>

            {/* Semantic H1 with Gulam Sarvar */}
            <motion.h1
              variants={fadeUp}
              className={cn(
                'font-display font-bold mb-3',
                'text-[clamp(2.75rem,6.5vw,5.25rem)]',
                'leading-[1.05] tracking-[-0.04em]',
                isDarkTheme ? 'text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/70 drop-shadow-[0_0_20px_rgba(255,255,255,0.12)]' 
                            : 'text-slate-900 drop-shadow-sm',
              )}
            >
              {identity.name}
            </motion.h1>

            {/* Typewriter Role */}
            <motion.div
              variants={fadeUp}
              className={cn(
                'font-display font-medium mb-6 h-10',
                'text-[clamp(1.15rem,2.4vw,1.65rem)]',
                'leading-tight tracking-tight',
              )}
            >
              <span className={isDarkTheme ? 'text-white/50' : 'text-slate-500'}>Engineering </span>
              <TypewriterText words={HERO_ROLES} className={isDarkTheme ? 'text-signal-300 drop-shadow-md' : 'text-signal-600 font-semibold'} />
            </motion.div>

            {/* Bio with EatEasy, Temporal.io, 3CX, and PyRAG Core */}
            <motion.p
              variants={fadeUp}
              className={cn(
                'text-base sm:text-lg leading-relaxed mb-8',
                'max-w-[50ch]',
                isDarkTheme ? 'text-white/70' : 'text-slate-600',
              )}
            >
              AI Engineer at{' '}
              <span className={cn('font-semibold', isDarkTheme ? 'text-white' : 'text-slate-900')}>
                EatEasy
              </span>{' '}
              in <span className={cn('font-medium', isDarkTheme ? 'text-white' : 'text-slate-900')}>Bengaluru, India</span>, architecting autonomous agentic workflow platforms, durable orchestration with{' '}
              <a
                href="https://temporal.io/"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'font-medium underline underline-offset-4 transition-colors',
                  isDarkTheme ? 'text-signal-300 hover:text-signal-200' : 'text-signal-600 hover:text-signal-700',
                )}
              >
                Temporal.io
              </a>
              , and real-time voice AI telephony with{' '}
              <span className={cn('font-medium', isDarkTheme ? 'text-white' : 'text-slate-900')}>
                3CX & LiveKit
              </span>
              . Creator of{' '}
              <a
                href={identity.links.pyragCore}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'font-medium underline underline-offset-4 transition-colors',
                  isDarkTheme ? 'text-signal-300 hover:text-signal-200' : 'text-signal-600 hover:text-signal-700',
                )}
              >
                PyRAG Core
              </a>
              .
            </motion.p>

            {/* CTAs including LinkedIn Profile */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-4"
            >
              <MagneticButton
                onClick={() => scrollToSection(SECTION_IDS.projects)}
                className={cn(
                  'group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl',
                  'text-xs sm:text-sm font-bold uppercase tracking-wider',
                  'overflow-hidden transition-all duration-300 shadow-md',
                  isDarkTheme 
                    ? 'bg-signal-500 text-depth-950 shadow-[0_0_20px_rgba(45,212,191,0.3)] hover:shadow-[0_0_30px_rgba(45,212,191,0.5)] hover:bg-signal-400'
                    : 'bg-signal-600 text-white shadow-lg hover:shadow-xl hover:bg-signal-700'
                )}
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10 flex items-center gap-2">
                  View Projects
                  <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" aria-hidden="true" />
                </span>
              </MagneticButton>

              <MagneticButton
                href={identity.links.linkedin}
                className={cn(
                  'group relative inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl',
                  'text-xs sm:text-sm font-bold uppercase tracking-wider',
                  'backdrop-blur-md border transition-all duration-300 shadow-sm',
                  isDarkTheme
                    ? 'border-signal-500/30 bg-signal-500/10 text-signal-300 hover:bg-signal-500/20 hover:border-signal-400'
                    : 'border-signal-600/30 bg-signal-50 text-signal-700 hover:bg-signal-100'
                )}
              >
                <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" aria-hidden="true" />
                LinkedIn
                <ExternalLink className="w-3 h-3 opacity-60" aria-hidden="true" />
              </MagneticButton>

              <MagneticButton
                href={identity.links.github}
                className={cn(
                  'group relative inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl',
                  'text-xs sm:text-sm font-bold uppercase tracking-wider',
                  'backdrop-blur-md border transition-all duration-300 shadow-sm',
                  isDarkTheme
                    ? 'border-white/15 bg-white/5 text-white hover:bg-white/10 hover:border-white/25'
                    : 'border-slate-300 bg-white/60 text-slate-800 hover:bg-white hover:border-slate-400'
                )}
              >
                <Github className="w-4 h-4 group-hover:scale-110 transition-transform" aria-hidden="true" />
                GitHub
              </MagneticButton>
            </motion.div>
          </motion.div>

          {/* Right Column: Live Terminal Telemetry Widget */}
          <motion.div
            className="flex flex-col gap-6 lg:col-span-5 xl:col-span-4"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={fadeUp}
              className={cn(
                'relative overflow-hidden pointer-events-auto rounded-[2rem] backdrop-blur-2xl border transform transition-all hover:shadow-2xl hover:-translate-y-1',
                isDarkTheme ? 'bg-depth-900/40 border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.5)]' : 'bg-white/60 border-white/80 shadow-[0_8px_30px_rgba(0,0,0,0.06)]'
              )}
            >
              {/* Top Bar */}
              <div className={cn("px-5 py-3.5 border-b flex items-center justify-between", isDarkTheme ? "border-white/10 bg-white/5" : "border-slate-200/50 bg-white/60")}>
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56] shadow-sm" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E] shadow-sm" />
                    <div className="w-3 h-3 rounded-full bg-[#27C93F] shadow-sm" />
                  </div>
                  <span className={cn("ml-3 text-[11px] font-mono font-medium uppercase tracking-widest", isDarkTheme ? "text-white/40" : "text-slate-500")}>
                    omniflow-runtime.sh
                  </span>
                </div>
                <div className="flex items-center gap-1.5 bg-signal-500/10 px-2.5 py-1 rounded-full border border-signal-500/20">
                   <div className="w-1.5 h-1.5 rounded-full bg-signal-500 animate-pulse shadow-[0_0_8px_rgba(45,212,191,0.8)]" />
                   <span className={cn("text-[9px] font-mono font-bold tracking-widest", isDarkTheme ? "text-signal-400" : "text-signal-600")}>ACTIVE</span>
                </div>
              </div>

              {/* Terminal Body */}
              <div className="p-6 font-mono text-[13px] leading-relaxed">
                <div className="flex flex-col gap-2.5">
                  
                  <div className={cn("flex items-start gap-2.5", isDarkTheme ? "text-white/70" : "text-slate-600")}>
                    <span className="text-signal-500 shrink-0 mt-0.5">❯</span>
                    <span><strong className={cn(isDarkTheme ? "text-white" : "text-slate-900")}>temporal-worker</strong> --poll task_queue_ai</span>
                  </div>
                  
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className={cn("flex items-start gap-2.5 text-xs", isDarkTheme ? "text-white/70" : "text-slate-600")}
                  >
                    <span className="text-signal-500 shrink-0 mt-0.5">❯</span>
                    <span>orchestrating ➔ <span className="text-signal-400 font-semibold">omniflow_workflow_dag</span></span>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className={cn("flex items-start gap-2.5 text-xs", isDarkTheme ? "text-white/70" : "text-slate-600")}
                  >
                    <span className="text-signal-500 shrink-0 mt-0.5">❯</span>
                    <span>3cx_sip_trunk: <span className="text-emerald-400 font-medium">inbound_call connected</span></span>
                  </motion.div>

                  {/* Voice Visualizer (CSS bars) */}
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ delay: 1.6 }}
                    className={cn(
                      "my-1.5 py-2.5 px-3.5 rounded-xl border flex items-center gap-3",
                      isDarkTheme ? "bg-black/30 border-white/5" : "bg-white/70 border-slate-200"
                    )}
                  >
                    <Mic className={cn("w-3.5 h-3.5", isDarkTheme ? "text-signal-400" : "text-signal-600")} />
                    <div className="flex items-end gap-[3px] h-4">
                      {[1,2,3,4,5,6,7,8,9,10,11,12].map((i) => (
                        <motion.div
                          key={i}
                          className={cn("w-[2.5px] rounded-full", isDarkTheme ? "bg-signal-400" : "bg-signal-500")}
                          animate={{ height: ['20%', '100%', '30%', '80%', '20%'] }}
                          transition={{ 
                            repeat: Infinity, 
                            duration: 1.2, 
                            ease: "easeInOut", 
                            delay: i * 0.1 
                          }}
                        />
                      ))}
                    </div>
                    <span className={cn("text-[9px] uppercase font-bold tracking-widest opacity-60 ml-auto", isDarkTheme ? "text-white" : "text-slate-600")}>
                      E2E Voice &lt;1.2s
                    </span>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.2 }}
                    className={cn("flex items-start gap-2.5 text-xs", isDarkTheme ? "text-white/70" : "text-slate-600")}
                  >
                    <span className="text-signal-500 shrink-0 mt-0.5">❯</span>
                    <span>persisting audit state ➔ <span className="font-semibold text-amber-400">oracle_db</span></span>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.8 }}
                    className={cn("flex items-center gap-2 text-xs font-semibold text-emerald-400")}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>Workflow completed with zero state loss</span>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ delay: 3.2, repeat: Infinity, duration: 0.8 }}
                    className="ml-6 mt-0.5"
                  >
                    <span className={cn("inline-block w-2 h-0.5", isDarkTheme ? "bg-signal-400" : "bg-signal-600")} />
                  </motion.div>

                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
