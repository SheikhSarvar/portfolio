/**
 * App.tsx — Final complete version
 * All phases wired. No stubs.
 */

import './styles/globals.css'

import { Nav }            from './components/layout/Nav'
import { Footer }         from './components/layout/Footer'
import { ScrollProgress } from './components/ui/ScrollProgress'
import { StructuredData } from './components/ui/StructuredData'
import { Hero }           from './components/sections/Hero'
import { About }          from './components/sections/About'
import { Skills }         from './components/sections/Skills'
import { Experience }     from './components/sections/Experience'
import { Projects }       from './components/sections/Projects'
import { CaseStudies }    from './components/sections/CaseStudies'
import { OpenSource }     from './components/sections/OpenSource'
import { Testimonials }   from './components/sections/Testimonials'
import { Contact }        from './components/sections/Contact'

export default function App() {
  return (
    <>
      {/* Structured data (JSON-LD SEO) */}
      <StructuredData />

      {/* Scroll progress bar */}
      <ScrollProgress />

      {/* Skip to main content — keyboard accessibility */}
      <a
        href="#hero"
        className={[
          'sr-only focus:not-sr-only',
          'fixed top-4 left-4 z-[80]',
          'px-4 py-2 rounded-lg bg-signal-500 text-depth-900',
          'text-sm font-semibold shadow-accent',
          'focus:outline-none focus:ring-2 focus:ring-signal-400 focus:ring-offset-2',
        ].join(' ')}
      >
        Skip to main content
      </a>

      {/* Sticky navigation */}
      <Nav />

      {/* Main content */}
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <CaseStudies />
        <OpenSource />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}
