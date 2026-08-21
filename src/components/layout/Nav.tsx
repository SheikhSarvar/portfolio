/**
 * Nav.tsx
 * Sticky navigation bar for the single-page portfolio.
 */

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download, Github, Linkedin, SunMoon } from 'lucide-react'
import { cn } from '../../lib/utils'
import { NAV_ITEMS, SECTION_IDS } from '../../lib/constants'
import { identity } from '../../data/portfolio.data'
import { staggerContainer, fadeUp } from '../../lib/motion'
import { scrollToSection, normalizeSectionId } from '../../lib/navigation'

const resumeHref = `${import.meta.env.BASE_URL}resume.pdf`

interface NavProps {
  currentSection?: string
  theme: 'light' | 'dark'
  onToggleTheme: () => void
}

export function Nav({ currentSection, theme, onToggleTheme }: NavProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const activeSection = currentSection || SECTION_IDS.hero
  const isOnHero = activeSection === SECTION_IDS.hero
  const usesDarkBg = scrolled || !isOnHero
  const isDarkTheme = theme === 'dark'
  const lightText = isDarkTheme ? 'text-white' : 'text-slate-950'

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    scrollToSection(href)
  }

  return (
    <>
      <header
        role="banner"
        className={cn(
          'fixed top-0 left-0 right-0 z-[30] transition-all duration-300',
          usesDarkBg
            ? isDarkTheme
              ? 'glass border-b border-white/10 py-3'
              : 'bg-white/80 backdrop-blur-xl border-b border-slate-200/70 py-3'
            : 'bg-transparent py-5',
        )}
      >
        <nav
          className="container-wide flex items-center justify-between"
          aria-label="Main navigation"
        >
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNavClick('#hero') }}
            className="flex items-center gap-2 group focus-visible:outline-offset-4"
            aria-label="Home"
          >
            <span
              className={cn(
                'w-9 h-9 rounded-xl flex items-center justify-center',
                'text-xs font-mono font-bold tracking-tight',
                'border border-signal-400/25 bg-signal-500/10',
                'text-signal-300 transition-all duration-200',
                'group-hover:bg-signal-500/16 group-hover:border-signal-400/40',
              )}
              aria-hidden="true"
            >
              GS
            </span>
            <span
              className={cn(
                'font-display font-semibold text-sm tracking-tight',
                lightText,
                  'transition-colors duration-200',
                )}
            >
              Gulam Sarvar
            </span>
          </a>

          <ul
            className="hidden md:flex items-center gap-1"
            role="list"
          >
            {NAV_ITEMS.map(({ label, href }) => {
              const targetSection = normalizeSectionId(href)
              const isActive = activeSection === targetSection
              return (
                <li key={href}>
                  <a
                    href={href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(href) }}
                    className={cn(
                      'relative px-3 py-1.5 rounded-md text-sm font-medium',
                      'transition-colors duration-150',
                      'focus-visible:outline-offset-2',
                      isActive
                        ? isDarkTheme
                          ? 'text-white'
                          : 'text-slate-950'
                        : usesDarkBg
                          ? isDarkTheme
                            ? 'text-white/55 hover:text-white'
                            : 'text-slate-500 hover:text-slate-950'
                          : isDarkTheme
                            ? 'text-white/70 hover:text-white'
                            : 'text-slate-500 hover:text-slate-950',
                    )}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-md bg-signal-500/12 border border-signal-400/20"
                        transition={{ type: 'spring', duration: 0.4 }}
                        aria-hidden="true"
                      />
                    )}
                    <span className="relative">{label}</span>
                  </a>
                </li>
              )
            })}
          </ul>

          <div className="hidden md:flex items-center gap-3">
            {identity.available && (
              <span className="badge-available text-[11px]">
                Open to work
              </span>
            )}

            <a
              href={identity.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className={cn(
                'p-1.5 rounded-md transition-colors duration-150',
                usesDarkBg
                  ? isDarkTheme
                    ? 'text-white/45 hover:text-white'
                    : 'text-slate-500 hover:text-slate-950'
                  : isDarkTheme
                    ? 'text-white/60 hover:text-white'
                    : 'text-slate-500 hover:text-slate-950',
              )}
            >
              <Github className="w-4 h-4" aria-hidden="true" />
            </a>
            <a
              href={identity.links.linkedin}
              target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className={cn(
                  'p-1.5 rounded-md transition-colors duration-150',
                  usesDarkBg
                    ? isDarkTheme
                      ? 'text-white/45 hover:text-white'
                      : 'text-slate-500 hover:text-slate-950'
                    : isDarkTheme
                      ? 'text-white/60 hover:text-white'
                      : 'text-slate-500 hover:text-slate-950',
                )}
            >
              <Linkedin className="w-4 h-4" aria-hidden="true" />
            </a>

            <button
              type="button"
              onClick={onToggleTheme}
                className={cn(
                  'p-1.5 rounded-md transition-colors duration-150',
                  usesDarkBg
                    ? isDarkTheme
                      ? 'text-white/45 hover:text-white'
                      : 'text-slate-500 hover:text-slate-950'
                    : isDarkTheme
                      ? 'text-white/60 hover:text-white'
                      : 'text-slate-500 hover:text-slate-950',
                )}
              aria-label={isDarkTheme ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              <SunMoon className="w-4 h-4" aria-hidden="true" />
            </button>

            <a
              href={resumeHref}
              download
              className={cn(
                'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full',
                'text-sm font-medium transition-all duration-150',
                isDarkTheme
                  ? 'border border-signal-400/35 text-signal-300 hover:bg-signal-500/10 hover:border-signal-400/55'
                  : 'border border-signal-500/25 text-signal-700 hover:bg-signal-500/10 hover:border-signal-500/45',
                'focus-visible:outline-offset-2',
              )}
              aria-label="Download resume PDF"
            >
              <Download className="w-3.5 h-3.5" aria-hidden="true" />
              Resume
            </a>
          </div>

            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className={cn(
                'md:hidden p-2 rounded-md transition-colors duration-150',
                usesDarkBg
                  ? isDarkTheme
                    ? 'text-white/70 hover:text-white'
                    : 'text-slate-600 hover:text-slate-950'
                  : isDarkTheme
                    ? 'text-white hover:text-white'
                    : 'text-slate-700 hover:text-slate-950',
              )}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-drawer"
          >
            {mobileOpen
              ? <X className="w-5 h-5" aria-hidden="true" />
              : <Menu className="w-5 h-5" aria-hidden="true" />
            }
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[25] bg-depth-900/60 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />

            <motion.div
              key="drawer"
              id="mobile-nav-drawer"
              role="dialog"
              aria-label="Mobile navigation"
              aria-modal="true"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: [0, 0, 0.2, 1] }}
              className={cn(
                'fixed top-[60px] left-4 right-4 z-[28] md:hidden',
                'glass rounded-2xl p-6',
                isDarkTheme ? 'border border-white/10' : 'border border-slate-200/80 bg-white/90',
              )}
            >
              <motion.ul
                className="flex flex-col gap-1 mb-6"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                role="list"
              >
                {NAV_ITEMS.map(({ label, href }) => {
                  const targetSection = normalizeSectionId(href)
                  const isActive = activeSection === targetSection
                  return (
                    <motion.li key={href} variants={fadeUp}>
                      <a
                        href={href}
                        onClick={(e) => { e.preventDefault(); handleNavClick(href) }}
                        className={cn(
                          'block px-4 py-3 rounded-xl text-base font-medium',
                          'transition-colors duration-150',
                          isActive
                            ? isDarkTheme
                              ? 'text-signal-300 bg-signal-500/10'
                              : 'text-signal-700 bg-signal-500/10'
                            : isDarkTheme
                              ? 'text-white/65 hover:text-white hover:bg-white/5'
                              : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100',
                        )}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        {label}
                      </a>
                    </motion.li>
                  )
                })}
              </motion.ul>

              <div className={cn('flex items-center gap-3 pt-4 border-t', isDarkTheme ? 'border-white/10' : 'border-slate-200')}>
                {identity.available && (
                  <span className="badge-available text-[11px]">
                    Open to work
                  </span>
                )}
                <a
                  href={resumeHref}
                  download
                  className={cn(
                    'ml-auto inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium',
                    isDarkTheme
                      ? 'border border-signal-400/35 text-signal-300 hover:bg-signal-500/10'
                      : 'border border-signal-500/25 text-signal-700 hover:bg-signal-500/10',
                  )}
                >
                  <Download className="w-3.5 h-3.5" aria-hidden="true" />
                  Resume
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
