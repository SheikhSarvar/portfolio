import { useEffect } from 'react'
import './styles/globals.css'

import { Nav } from './components/layout/Nav'
import { Footer } from './components/layout/Footer'
import { ScrollProgress } from './components/ui/ScrollProgress'
import { SiteHead } from './components/seo/SiteHead'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Skills } from './components/sections/Skills'
import { Experience } from './components/sections/Experience'
import { Projects } from './components/sections/Projects'
import { CaseStudies } from './components/sections/CaseStudies'
import { OpenSource } from './components/sections/OpenSource'
import { Contact } from './components/sections/Contact'
import { SECTION_IDS } from './lib/constants'
import { normalizeSectionId } from './lib/navigation'
import { useActiveSection } from './hooks'

export default function App() {
  const sectionIds = [
    SECTION_IDS.hero,
    SECTION_IDS.about,
    SECTION_IDS.skills,
    SECTION_IDS.experience,
    SECTION_IDS.projects,
    SECTION_IDS.caseStudies,
    'open-source',
    SECTION_IDS.contact,
  ]

  const currentSection = useActiveSection(sectionIds)

  useEffect(() => {
    const hash = normalizeSectionId(window.location.hash)
    if (!hash) return

    const target = document.getElementById(hash)
    if (!target) return

    window.requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: 'auto', block: 'start' })
    })
  }, [])

  return (
    <>
      <SiteHead />
      <ScrollProgress />

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

      <Nav currentSection={currentSection} />

      <main id="main-content" tabIndex={-1} className="focus:outline-none min-h-[70vh]">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <CaseStudies />
        <OpenSource />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
