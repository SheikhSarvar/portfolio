/**
 * Nav.tsx
 * ─────────────────────────────────────────────────────────────────
 * Sticky navigation bar.
 *
 * Behaviour:
 * - Transparent at top of page
 * - Glass morphism once user scrolls > 60px
 * - Active link highlights the current section via IntersectionObserver
 * - "Open to work" badge on desktop
 * - Resume download button
 * - Hamburger → slide-down drawer on mobile
 * - Keyboard accessible (focus trap in drawer)
 * ─────────────────────────────────────────────────────────────────
 */

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download, Github, Linkedin } from 'lucide-react'
import { cn } from '../../lib/utils'
import { NAV_ITEMS, SECTION_IDS } from '../../lib/constants'
import { identity } from '../../data/portfolio.data'
import { staggerContainer, fadeUp } from '../../lib/motion'

const resumeHref = `${import.meta.env.BASE_URL}resume.pdf`

interface NavProps {
  currentRoute?: string
}

export function Nav({ currentRoute: propRoute }: NavProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled,   setScrolled]   = useState(false)
  const drawerRef = useRef<HTMLDivElement>(null)

  const getRoute = () => {
    const hash = window.location.hash
    if (hash.startsWith('#/')) return hash.substring(1)
    if (hash.startsWith('#')) {
      const pageId = hash.substring(1)
      if (pageId === 'hero') return '/'
      return `/${pageId}`
    }
    return '/'
  }

  const [currentRoute, setCurrentRoute] = useState(getRoute)

  useEffect(() => {
    if (propRoute) {
      setCurrentRoute(propRoute)
      return
    }
    const handleHash = () => {
      setCurrentRoute(getRoute())
    }
    window.addEventListener('hashchange', handleHash)
    return () => window.removeEventListener('hashchange', handleHash)
  }, [propRoute])

  // Track scroll for glass effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close drawer on escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  // Lock body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  // Map href to route
  const getRouteFromHref = (href: string) => {
    if (href === '#' || href === '#hero') return '/'
    if (href === `#${SECTION_IDS.projects}`) return '/project'
    return `/${href.replace('#', '')}`
  }

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const targetRoute = getRouteFromHref(href)
    window.location.hash = `#${targetRoute}`
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  // On non-hero pages the background is always light — always use dark nav styling
  const isOnHero = currentRoute === '/'
  const usesDarkBg = scrolled || !isOnHero

  return (
    <>
      <header
        role="banner"
        className={cn(
          'fixed top-0 left-0 right-0 z-[30] transition-all duration-300',
          usesDarkBg
            ? 'glass border-b border-base-200/60 py-3'
            : 'bg-transparent py-5',
        )}
      >
        <nav
          className="container-wide flex items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo / wordmark */}
          <a
            href="#/"
            onClick={(e) => { e.preventDefault(); handleNavClick('#hero') }}
            className="flex items-center gap-2 group focus-visible:outline-offset-4"
            aria-label="Home"
          >
            {/* Monogram mark */}
            <span
              className={cn(
                'w-8 h-8 rounded-lg flex items-center justify-center',
                'text-xs font-mono font-bold tracking-tight',
                'border border-signal-500/30 bg-signal-500/8',
                'text-signal-600 transition-all duration-200',
                'group-hover:bg-signal-500/15 group-hover:border-signal-500/50',
              )}
              aria-hidden="true"
            >
              GS
            </span>
            <span
              className={cn(
                'font-display font-semibold text-sm tracking-tight',
                usesDarkBg ? 'text-base-800' : 'text-white',
                'transition-colors duration-200',
              )}
            >
              Gulam Sarvar
            </span>
          </a>

          {/* Desktop nav links */}
          <ul
            className="hidden md:flex items-center gap-1"
            role="list"
          >
            {NAV_ITEMS.map(({ label, href }) => {
              const targetRoute = getRouteFromHref(href)
              const isActive  = currentRoute === targetRoute
              return (
                <li key={href}>
                  <a
                    href={`#${targetRoute}`}
                    onClick={(e) => { e.preventDefault(); handleNavClick(href) }}
                    className={cn(
                      'relative px-3 py-1.5 rounded-md text-sm font-medium',
                      'transition-colors duration-150',
                      'focus-visible:outline-offset-2',
                      isActive
                        ? usesDarkBg
                          ? 'text-base-800'
                          : 'text-white'
                        : usesDarkBg
                          ? 'text-base-500 hover:text-base-700'
                          : 'text-white/70 hover:text-white',
                    )}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-md bg-signal-500/10 border border-signal-500/20"
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

          {/* Desktop right actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Open to work badge */}
            {identity.available && (
              <span className="badge-available text-[11px]">
                Open to work
              </span>
            )}

            {/* Social icons */}
            <a
              href={identity.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className={cn(
                'p-1.5 rounded-md transition-colors duration-150',
                usesDarkBg
                  ? 'text-base-400 hover:text-base-700'
                  : 'text-white/60 hover:text-white',
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
                  ? 'text-base-400 hover:text-base-700'
                  : 'text-white/60 hover:text-white',
              )}
            >
              <Linkedin className="w-4 h-4" aria-hidden="true" />
            </a>

            {/* Resume */}
            <a
              href={resumeHref}
              download
              className={cn(
                'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md',
                'text-sm font-medium transition-all duration-150',
                'border border-signal-500/40 text-signal-600',
                'hover:bg-signal-500/8 hover:border-signal-500/60',
                'focus-visible:outline-offset-2',
              )}
              aria-label="Download resume PDF"
            >
              <Download className="w-3.5 h-3.5" aria-hidden="true" />
              Resume
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className={cn(
              'md:hidden p-2 rounded-md transition-colors duration-150',
              usesDarkBg ? 'text-base-700' : 'text-white',
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

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
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

            {/* Drawer panel */}
            <motion.div
              key="drawer"
              id="mobile-nav-drawer"
              ref={drawerRef}
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
                'border border-base-200/60',
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
                  const targetRoute = getRouteFromHref(href)
                  const isActive  = currentRoute === targetRoute
                  return (
                    <motion.li key={href} variants={fadeUp}>
                      <a
                        href={`#${targetRoute}`}
                        onClick={(e) => { e.preventDefault(); handleNavClick(href) }}
                        className={cn(
                          'block px-4 py-3 rounded-xl text-base font-medium',
                          'transition-colors duration-150',
                          isActive
                            ? 'text-signal-600 bg-signal-500/8'
                            : 'text-base-600 hover:text-base-800 hover:bg-base-100',
                        )}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        {label}
                      </a>
                    </motion.li>
                  )
                })}
              </motion.ul>

              <div className="flex items-center gap-3 pt-4 border-t border-base-200">
                {identity.available && (
                  <span className="badge-available text-[11px]">
                    Open to work
                  </span>
                )}
                <a
                  href={resumeHref}
                  download
                  className="ml-auto inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium border border-signal-500/40 text-signal-600 hover:bg-signal-500/8"
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
