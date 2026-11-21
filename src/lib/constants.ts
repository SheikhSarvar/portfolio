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
  'Agentic Workflow Platforms',
  'Autonomous Multi-Agent Systems',
  'Production Voice AI (3CX & LiveKit)',
  'Durable Systems with Temporal.io',
  'Open Source AI Tools',
] as const

/** Stat cards shown in About section */
export const ABOUT_STATS = [
  { value: 'EatEasy',  label: 'AI Engineer' },
  { value: 'Temporal', label: 'Durable Workflows' },
  { value: '<1.5s',    label: 'E2E Voice Latency' },
  { value: '3CX + AI', label: 'Inbound & Outbound' },
] as const
