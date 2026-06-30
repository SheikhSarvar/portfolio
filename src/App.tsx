import { useState, useEffect } from 'react'
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
  const getRoute = () => {
    const hash = window.location.hash
    if (hash.startsWith('#/')) {
      return hash.substring(1)
    }
    if (hash.startsWith('#')) {
      const pageId = hash.substring(1)
      if (pageId === 'hero') return '/'
      return `/${pageId}`
    }
    return '/'
  }

  const [currentRoute, setCurrentRoute] = useState(getRoute)

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentRoute(getRoute())
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [currentRoute])

  return (
    <>
      {/* Structured data (JSON-LD SEO) */}
      <StructuredData />

      {/* Scroll progress bar */}
      <ScrollProgress />

      {/* Skip to main content — keyboard accessibility */}
      <a
        href="#main-content"
        onClick={(e) => {
          e.preventDefault()
          document.getElementById('main-content')?.focus()
        }}
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
      <Nav currentRoute={currentRoute} />

      {/* Main content */}
      <main id="main-content" tabIndex={-1} className="focus:outline-none min-h-[70vh]">
        {currentRoute === '/' && <Hero />}
        {currentRoute === '/about' && (
          <>
            <About />
            <Testimonials />
          </>
        )}
        {currentRoute === '/skills' && <Skills />}
        {currentRoute === '/experience' && <Experience />}
        {(currentRoute === '/project' || currentRoute === '/projects') && (
          <>
            <Projects />
            <CaseStudies />
            <OpenSource />
          </>
        )}
        {currentRoute === '/contact' && <Contact />}
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}
