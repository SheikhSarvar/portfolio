export const SECTION_IDS = {
  hero:        'hero',
  about:       'about',
  skills:      'skills',
  experience:  'experience',
  projects:    'projects',
  caseStudies: 'case-studies',
  contact:     'contact',
} as const

export const NAV_ITEMS = [
  { label: 'About',      href: `#${SECTION_IDS.about}` },
  { label: 'Skills',     href: `#${SECTION_IDS.skills}` },
  { label: 'Experience', href: `#${SECTION_IDS.experience}` },
  { label: 'Projects',   href: `#${SECTION_IDS.projects}` },
  { label: 'Contact',    href: `#${SECTION_IDS.contact}` },
] as const

/** Typewriter strings for Hero headline */
export const HERO_ROLES = [
  'Production AI Systems',
  'Voice AI Pipelines',
  'Multi-Agent RAG',
  'LangGraph Architectures',
  'Open Source Tools',
] as const

/** Stat cards shown in About section */
export const ABOUT_STATS = [
  { value: '2+',    label: 'Years prod AI'    },
  { value: '500+',  label: 'Inbound calls daily' },
  { value: '143',   label: 'Unit tests (PyRAG)' },
  { value: '<2s',   label: 'E2E voice latency' },
] as const
