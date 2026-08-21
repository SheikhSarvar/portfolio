import { Github, Linkedin, Mail } from 'lucide-react'
import { identity } from '../../data/portfolio.data'
import { NAV_ITEMS } from '../../lib/constants'
import { scrollToSection } from '../../lib/navigation'

interface FooterProps {
  theme: 'light' | 'dark'
}

export function Footer({ theme }: FooterProps) {
  const year = new Date().getFullYear()
  const isDarkTheme = theme === 'dark'

  return (
    <footer
      className={isDarkTheme
        ? 'border-t border-white/10 bg-depth-950/95 backdrop-blur-xl'
        : 'border-t border-slate-200 bg-white/95 backdrop-blur-xl'}
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="container-wide py-12">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          <div>
            <p className={isDarkTheme ? 'font-display font-bold text-white mb-2' : 'font-display font-bold text-slate-950 mb-2'}>
              {identity.name}
            </p>
            <p className={isDarkTheme ? 'text-xs text-white/50 leading-relaxed max-w-[28ch]' : 'text-xs text-slate-600 leading-relaxed max-w-[28ch]'}>
              {identity.tagline}
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <p className={isDarkTheme ? 'text-[10px] font-mono uppercase tracking-widest text-white/35 mb-3' : 'text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-3'}>
              Navigation
            </p>
            <ul className="space-y-2" role="list">
              {NAV_ITEMS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(href)
                    }}
                    className={isDarkTheme
                      ? 'text-sm text-white/55 hover:text-white transition-colors'
                      : 'text-sm text-slate-600 hover:text-slate-950 transition-colors'}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className={isDarkTheme ? 'text-[10px] font-mono uppercase tracking-widest text-white/35 mb-3' : 'text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-3'}>
              Connect
            </p>
            <div className="flex flex-col gap-2">
              <a
                href={identity.links.github}
                target="_blank"
                rel="me noopener noreferrer"
                className={isDarkTheme
                  ? 'flex items-center gap-2 text-sm text-white/55 hover:text-white transition-colors'
                  : 'flex items-center gap-2 text-sm text-slate-600 hover:text-slate-950 transition-colors'}
                aria-label="GitHub"
              >
                <Github className="w-3.5 h-3.5" aria-hidden="true" />
                GitHub
              </a>
              <a
                href={identity.links.linkedin}
                target="_blank"
                rel="me noopener noreferrer"
                className={isDarkTheme
                  ? 'flex items-center gap-2 text-sm text-white/55 hover:text-white transition-colors'
                  : 'flex items-center gap-2 text-sm text-slate-600 hover:text-slate-950 transition-colors'}
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" aria-hidden="true" />
                LinkedIn
              </a>
              <a
                href={`mailto:${identity.links.email}`}
                className={isDarkTheme
                  ? 'flex items-center gap-2 text-sm text-white/55 hover:text-white transition-colors'
                  : 'flex items-center gap-2 text-sm text-slate-600 hover:text-slate-950 transition-colors'}
                aria-label="Email"
              >
                <Mail className="w-3.5 h-3.5" aria-hidden="true" />
                Email
              </a>
            </div>
          </div>
        </div>

        <div className={isDarkTheme
          ? 'flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-white/10'
          : 'flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-slate-200'
        }>
          <p className={isDarkTheme ? 'text-xs text-white/35' : 'text-xs text-slate-500'}>
            (c) {year} {identity.name}. All rights reserved.
          </p>
          <p className={isDarkTheme ? 'text-xs text-white/35' : 'text-xs text-slate-500'}>
            Built with React, TypeScript, Tailwind, and Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}
