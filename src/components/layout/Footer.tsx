/**
 * Footer.tsx
 */

import { Github, Linkedin, Mail } from 'lucide-react'
import { identity } from '../../data/portfolio.data'
import { NAV_ITEMS } from '../../lib/constants'
import { scrollToSection } from '../../lib/navigation'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="border-t border-base-200 bg-base-50"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="container-wide py-12">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          <div>
            <p className="font-display font-bold text-base-800 mb-2">
              {identity.name}
            </p>
            <p className="text-xs text-base-500 leading-relaxed max-w-[28ch]">
              {identity.tagline}
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <p className="text-[10px] font-mono uppercase tracking-widest text-base-400 mb-3">
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
                    className="text-sm text-base-500 hover:text-base-800 transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-[10px] font-mono uppercase tracking-widest text-base-400 mb-3">
              Connect
            </p>
            <div className="flex flex-col gap-2">
              <a
                href={identity.links.github}
                target="_blank"
                rel="me noopener noreferrer"
                className="flex items-center gap-2 text-sm text-base-500 hover:text-base-800 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-3.5 h-3.5" aria-hidden="true" />
                GitHub
              </a>
              <a
                href={identity.links.linkedin}
                target="_blank"
                rel="me noopener noreferrer"
                className="flex items-center gap-2 text-sm text-base-500 hover:text-base-800 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" aria-hidden="true" />
                LinkedIn
              </a>
              <a
                href={`mailto:${identity.links.email}`}
                className="flex items-center gap-2 text-sm text-base-500 hover:text-base-800 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-3.5 h-3.5" aria-hidden="true" />
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-base-200">
          <p className="text-xs text-base-400">
            © {year} {identity.name}. All rights reserved.
          </p>
          <p className="text-xs text-base-400">
            Built with React · TypeScript · Tailwind · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}
