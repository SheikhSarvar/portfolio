import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, MapPin, ExternalLink, Cpu, Mic, Terminal } from 'lucide-react'
import { HeroBackground } from '../animations/HeroBackground'
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
      aria-label="Introduction"
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
            <motion.div variants={scaleIn} className="mb-8">
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
                {identity.available ? 'Available for new roles' : 'Currently unavailable'}
              </div>
            </motion.div>

            {/* Massive Typography Name / Headline */}
            <motion.h1
              variants={fadeUp}
              className={cn(
                'font-display font-bold mb-4',
                'text-[clamp(3rem,6.5vw,5.5rem)]',
                'leading-[1.05] tracking-[-0.04em]',
                isDarkTheme ? 'text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]' 
                            : 'text-slate-900 drop-shadow-sm',
              )}
            >
              {identity.name}
            </motion.h1>

            {/* Typewriter Role */}
            <motion.div
              variants={fadeUp}
              className={cn(
                'font-display font-medium mb-8 h-10',
                'text-[clamp(1.25rem,2.5vw,1.75rem)]',
                'leading-tight tracking-tight',
              )}
            >
              <span className={isDarkTheme ? 'text-white/50' : 'text-slate-500'}>I build </span>
              <TypewriterText words={HERO_ROLES} className={isDarkTheme ? 'text-signal-300 drop-shadow-md' : 'text-signal-600 font-semibold'} />
            </motion.div>

            {/* Bio */}
            <motion.p
              variants={fadeUp}
              className={cn(
                'text-lg leading-relaxed mb-10',
                'max-w-[48ch]',
                isDarkTheme ? 'text-white/70' : 'text-slate-600',
              )}
            >
              Designing production AI systems — voice pipelines, multi-agent RAG,
              and LLM infrastructure — at{' '}
              <a
                href="https://bluebash.co"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'font-medium underline underline-offset-4 transition-colors',
                  isDarkTheme ? 'text-white hover:text-signal-400' : 'text-slate-900 hover:text-signal-600',
                )}
              >
                Bluebash
              </a>
              .{' '}
              Open-source author of{' '}
              <a
                href={identity.links.pyragCore}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'font-medium underline underline-offset-4 transition-colors',
                  isDarkTheme ? 'text-white hover:text-signal-400' : 'text-slate-900 hover:text-signal-600',
                )}
              >
                PyRAG Core
              </a>
              .
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-5"
            >
              <MagneticButton
                onClick={() => scrollToSection(SECTION_IDS.about)}
                className={cn(
                  'group relative inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl',
                  'text-sm font-bold uppercase tracking-wider',
                  'overflow-hidden transition-all duration-300',
                  isDarkTheme 
                    ? 'bg-signal-500 text-depth-950 shadow-[0_0_20px_rgba(45,212,191,0.3)] hover:shadow-[0_0_30px_rgba(45,212,191,0.5)] hover:bg-signal-400'
                    : 'bg-signal-600 text-white shadow-lg hover:shadow-xl hover:bg-signal-700'
                )}
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10 flex items-center gap-2">
                  Get Started
                  <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" aria-hidden="true" />
                </span>
              </MagneticButton>

              <MagneticButton
                href={identity.links.github}
                className={cn(
                  'group relative inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl',
                  'text-sm font-bold uppercase tracking-wider',
                  'backdrop-blur-md border transition-all duration-300',
                  isDarkTheme
                    ? 'border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/30'
                    : 'border-slate-300 bg-white/50 text-slate-800 hover:bg-white hover:border-slate-400'
                )}
              >
                <Github className="w-4 h-4 group-hover:scale-110 transition-transform" aria-hidden="true" />
                GitHub
                <ExternalLink className="w-3.5 h-3.5 opacity-50" aria-hidden="true" />
              </MagneticButton>
            </motion.div>
          </motion.div>

          {/* Right Column: Floating Stats & Widgets */}
          <motion.div
            className="flex flex-col gap-6 lg:col-span-5 xl:col-span-4"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* The Surprise: Live AI Agent Terminal Widget */}
            <motion.div
              variants={fadeUp}
              className={cn(
                'relative overflow-hidden pointer-events-auto rounded-[2rem] backdrop-blur-2xl border transform transition-all hover:shadow-2xl hover:-translate-y-1',
                isDarkTheme ? 'bg-depth-900/30 border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.5)]' : 'bg-white/40 border-white/60 shadow-[0_8px_30px_rgba(0,0,0,0.05)]'
              )}
            >
              {/* Top Bar */}
              <div className={cn("px-5 py-3.5 border-b flex items-center justify-between", isDarkTheme ? "border-white/10 bg-white/5" : "border-slate-200/40 bg-white/40")}>
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56] shadow-sm" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E] shadow-sm" />
                    <div className="w-3 h-3 rounded-full bg-[#27C93F] shadow-sm" />
                  </div>
                  <span className={cn("ml-3 text-[11px] font-mono font-medium uppercase tracking-widest", isDarkTheme ? "text-white/40" : "text-slate-500")}>
                    agent_pipeline.sh
                  </span>
                </div>
                <div className="flex items-center gap-1.5 bg-signal-500/10 px-2.5 py-1 rounded-full border border-signal-500/20">
                   <div className="w-1.5 h-1.5 rounded-full bg-signal-500 animate-pulse shadow-[0_0_8px_rgba(45,212,191,0.8)]" />
                   <span className={cn("text-[9px] font-mono font-bold tracking-widest", isDarkTheme ? "text-signal-400" : "text-signal-600")}>LIVE</span>
                </div>
              </div>

              {/* Terminal Body */}
              <div className="p-6 font-mono text-[13px] leading-relaxed">
                <div className="flex flex-col gap-2.5">
                  
                  <div className={cn("flex items-start gap-3", isDarkTheme ? "text-white/70" : "text-slate-600")}>
                    <span className="text-signal-500 shrink-0 mt-0.5">❯</span>
                    <span><span className={cn(isDarkTheme ? "text-white" : "text-slate-900")}>pyrag-core</span> --init v2.0</span>
                  </div>
                  
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className={cn("flex items-start gap-3", isDarkTheme ? "text-white/70" : "text-slate-600")}
                  >
                    <span className="text-signal-500 shrink-0 mt-0.5">❯</span>
                    <span>connecting webrtc ➔ wss://livekit.hero</span>
                  </motion.div>

                  {/* Voice Visualizer (CSS bars) */}
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ delay: 1.4 }}
                    className={cn(
                      "my-2 py-3 px-4 rounded-xl border flex items-center gap-4",
                      isDarkTheme ? "bg-black/30 border-white/5" : "bg-white/50 border-white"
                    )}
                  >
                    <Mic className={cn("w-4 h-4", isDarkTheme ? "text-signal-400" : "text-signal-600")} />
                    <div className="flex items-end gap-[3px] h-5">
                      {[1,2,3,4,5,6,7,8,9,10,11,12].map((i) => (
                        <motion.div
                          key={i}
                          className={cn("w-[3px] rounded-full", isDarkTheme ? "bg-signal-400" : "bg-signal-500")}
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
                    <span className={cn("text-[10px] uppercase font-bold tracking-widest opacity-60 ml-auto", isDarkTheme ? "text-white" : "text-slate-600")}>Stream Active</span>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.2 }}
                    className={cn("flex items-start gap-3", isDarkTheme ? "text-white/70" : "text-slate-600")}
                  >
                    <span className="text-signal-500 shrink-0 mt-0.5">❯</span>
                    <span>querying <span className="font-semibold text-[#FF4564]">qdrant-db</span>...</span>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3.0 }}
                    className={cn("flex items-start gap-3 font-medium", isDarkTheme ? "text-white" : "text-slate-900")}
                  >
                    <span className="text-signal-500 shrink-0 mt-0.5">❯</span>
                    <span>response_synthesized_in_120ms</span>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ delay: 3.5, repeat: Infinity, duration: 0.8 }}
                    className="ml-6 mt-1"
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
