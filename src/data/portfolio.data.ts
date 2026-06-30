/**
 * portfolio.data.ts
 * ─────────────────────────────────────────────────────────────────
 * Single source of truth for all portfolio content.
 * Rules:
 *   - Only verified facts from LinkedIn, GitHub, and memory context
 *   - TODO placeholders where data is unconfirmed
 *   - No fabricated metrics, no invented testimonials
 * ─────────────────────────────────────────────────────────────────
 */

// ── IDENTITY ──────────────────────────────────────────────────────

export const identity = {
  name:       'Gulam Sarvar',
  handle:     'SheikhSarvar',
  title:      'Agentic AI & LLM Systems Engineer',
  subtitle:   'I build production AI that ships.',
  tagline:    'Voice AI · Multi-Agent Systems · RAG · Full Stack',
  location:   'Mohali, India',
  timezone:   'IST (UTC+5:30)',
  available:  true,  // flip to false when not open to roles

  bio: `Associate Data Scientist at Bluebash, working at the intersection
of LLM engineering, voice AI, and production RAG systems. I built Kickcall —
Bluebash's voice AI product — from scratch: an STT→LLM→TTS pipeline running
150–200 calls/day at under 2 seconds end-to-end latency. I also lead RAG system
design for legal and healthcare clients using hybrid retrieval and reranking.
Outside work, I maintain PyRAG Core, an MIT-licensed Python/FastAPI/LangGraph
RAG platform on GitHub.`,

  links: {
    github:   'https://github.com/SheikhSarvar',
    linkedin: 'https://www.linkedin.com/in/sheikh-gulam-sarvar-ab3343219',
    portfolio: 'https://sheikhsarvar.github.io/portfolio/',
    pyragCore: 'https://github.com/SheikhSarvar/pyrag-core',
    email:    'sheikhgulamsarvar@gmail.com',
    // calendar: 'TODO: add Calendly/Cal.com link',
  },
} as const


// ── EXPERIENCE ────────────────────────────────────────────────────

export type Experience = {
  company:      string
  role:         string
  type:         'full-time' | 'contract' | 'internship'
  startDate:    string
  endDate:      string | 'Present'
  location:     string
  highlights:   string[]
  tags:         string[]
  logo?:        string  // path to /public/logos/
}

export const experience: Experience[] = [
  {
    company:   'Bluebash Pvt Ltd',
    role:      'Associate Data Scientist',
    type:      'full-time',
    startDate: 'Apr 2024',
    endDate:   'Present',
    location:  'Mohali, India',
    highlights: [
      'Built Kickcall (Bluebash\'s voice AI product) from scratch — STT→LLM→TTS pipeline running 150–200 calls/day at <2s end-to-end latency using WebRTC/LiveKit and Redis session state.',
      'Led technical direction for a ~5-person cross-functional team (frontend, cloud, backend) building RAG systems for legal and healthcare clients.',
      'Designed hybrid retrieval architecture using Qdrant/Pinecone with reranking; improved retrieval accuracy significantly over naive dense-only baselines.',
      'Containerized all services with Docker; coordinated with cloud teammate for EC2/infra deployment.',
    ],
    tags: ['LangGraph', 'LiveKit', 'WebRTC', 'Qdrant', 'Pinecone', 'Redis', 'FastAPI', 'Docker'],
  },
  // TODO: Add any prior roles from LinkedIn if applicable
]


// ── EDUCATION ─────────────────────────────────────────────────────

export const education = [
  {
    institution: 'Woolf University',
    degree:      'Master of Science',
    field:       'Computer Science (AI & Machine Learning)',
    startYear:   2023,
    endYear:     2026,
  },
  // TODO: Add undergraduate if applicable
] as const


// ── SKILLS ────────────────────────────────────────────────────────

export type SkillLevel = 'production' | 'proficient' | 'familiar'

export type Skill = {
  name:    string
  level:   SkillLevel
  icon?:   string  // devicon class or custom SVG path
}

export type SkillCategory = {
  id:     string
  label:  string
  skills: Skill[]
}

export const skills: SkillCategory[] = [
  {
    id:    'ai',
    label: 'AI & LLMs',
    skills: [
      { name: 'LangGraph',          level: 'production'  },
      { name: 'LangChain',          level: 'production'  },
      { name: 'OpenAI API',         level: 'production'  },
      { name: 'Anthropic API',      level: 'production'  },
      { name: 'Gemini',             level: 'proficient'  },
      { name: 'Ollama',             level: 'production'  },
      { name: 'RAG Systems',        level: 'production'  },
      { name: 'AI Agents',          level: 'production'  },
      { name: 'LM Studio',          level: 'production'  },
      { name: 'Langfuse',           level: 'production'  },
      { name: 'LangSmith',          level: 'production'  },
    ],
  },
  {
    id:    'voice',
    label: 'Voice AI',
    skills: [
      { name: 'LiveKit',            level: 'production'  },
      { name: 'WebRTC',             level: 'production'  },
      { name: 'STT/TTS Pipelines', level: 'production'  },
      { name: 'LiveKit Agents',     level: 'production'  },
    ],
  },
  {
    id:    'vector',
    label: 'Vector & Data',
    skills: [
      { name: 'Qdrant',             level: 'production'  },
      { name: 'Pinecone',           level: 'production'  },
      { name: 'Redis',              level: 'production'  },
      { name: 'PostgreSQL',         level: 'production'  },
      { name: 'Weaviate',           level: 'familiar'    },
      { name: 'pgvector',           level: 'familiar'    },
    ],
  },
  {
    id:    'backend',
    label: 'Backend',
    skills: [
      { name: 'FastAPI',            level: 'production'  },
      { name: 'Python',             level: 'production'  },
      { name: 'Node.js',            level: 'proficient'  },
      { name: 'Express',            level: 'proficient'  },
      { name: 'asyncpg / SQLModel', level: 'production'  },
      { name: 'Alembic',           level: 'production'  },
    ],
  },
  {
    id:    'frontend',
    label: 'Frontend',
    skills: [
      { name: 'React',              level: 'production'  },
      { name: 'TypeScript',         level: 'production'  },
      { name: 'Next.js',            level: 'proficient'  },
      { name: 'Tailwind CSS',       level: 'production'  },
      { name: 'Framer Motion',      level: 'production'  },
    ],
  },
  {
    id:    'devops',
    label: 'DevOps & Infra',
    skills: [
      { name: 'Docker',             level: 'production'  },
      { name: 'GitHub Actions',     level: 'proficient'  },
      { name: 'Vercel',             level: 'production'  },
      { name: 'Linux / Bash',       level: 'proficient'  },
      // NOTE: Intentionally excluded AWS/EC2 — not hands-on owner
    ],
  },
]


// ── PROJECTS ──────────────────────────────────────────────────────

export type Project = {
  id:           string
  name:         string
  tagline:      string
  description:  string
  type:         'product' | 'open-source' | 'case-study' | 'automation'
  status:       'production' | 'active' | 'archived'
  tech:         string[]
  github?:      string
  demo?:        string
  featured:     boolean
  highlights?:  string[]  // key metrics/outcomes
}

export const projects: Project[] = [
  {
    id:      'kickcall',
    name:    'Kickcall',
    tagline: 'Production voice AI — 150–200 calls/day, <2s latency',
    description: `Bluebash's voice AI product, built from scratch.
A real-time STT→LLM→TTS pipeline handling 150–200 outbound/inbound calls per day
with end-to-end latency under 2 seconds. Built on WebRTC via LiveKit, with Redis
managing session state across distributed agent instances.`,
    type:   'product',
    status: 'production',
    tech:   ['LiveKit', 'WebRTC', 'LangGraph', 'Redis', 'FastAPI', 'OpenAI', 'Python', 'Docker'],
    featured: true,
    highlights: [
      '150–200 calls/day in production',
      '<2s end-to-end latency',
      'Built from scratch at Bluebash',
      'Real-time WebRTC via LiveKit',
    ],
    // No public GitHub — Bluebash-owned product
  },
  {
    id:      'pyrag-core',
    name:    'PyRAG Core',
    tagline: 'MIT-licensed RAG platform with LangGraph orchestration',
    description: `An open-source Python/FastAPI/LangGraph RAG platform
with 143 unit tests and a pluggable vector backend architecture.
Qdrant is the only production-tested backend; Weaviate/Milvus/pgvector/
Elasticsearch adapters are implemented but not yet tested against live instances.`,
    type:   'open-source',
    status: 'active',
    tech:   ['Python', 'FastAPI', 'LangGraph', 'Qdrant', 'LangChain', 'Docker'],
    github:  'https://github.com/SheikhSarvar/pyrag-core',
    featured: true,
    highlights: [
      '143 unit tests',
      'MIT licensed',
      'Pluggable vector backend',
      'LangGraph orchestration',
    ],
  },
  {
    id:      'rag-legal-healthcare',
    name:    'RAG Systems (Legal & Healthcare)',
    tagline: 'Hybrid retrieval for regulated-domain document intelligence',
    description: `Led the design and delivery of RAG systems for legal and healthcare clients.
Implemented hybrid retrieval (dense + sparse) with Qdrant and Pinecone,
plus cross-encoder reranking to improve answer precision on domain-specific corpora.
Coordinated a ~5-person team across frontend, cloud, and backend.`,
    type:    'case-study',
    status:  'production',
    tech:    ['Qdrant', 'Pinecone', 'LangGraph', 'LangChain', 'FastAPI', 'Python', 'Docker'],
    featured: true,
    highlights: [
      'Hybrid dense+sparse retrieval',
      'Cross-encoder reranking',
      'Legal & healthcare domains',
      'Led ~5-person team',
    ],
  },
  {
    id:      'mcp-integration-gateway',
    name:    'MCP Integration Gateway',
    tagline: 'Full-stack SaaS with FastAPI, PostgreSQL, Redis, Vercel',
    description: `A full-stack SaaS application with a FastAPI backend
(asyncpg, SQLModel, Alembic, uv), frontend deployed on Vercel,
PostgreSQL on Supabase, and Redis on Render. Includes Docker containerization
with entrypoint migrations, seed, and Uvicorn startup.`,
    type:    'product',
    status:  'active',
    tech:    ['FastAPI', 'PostgreSQL', 'Redis', 'Supabase', 'Vercel', 'Docker', 'Python', 'TypeScript'],
    featured: false,
    // TODO: add GitHub and live demo URLs when public
  },
  // TODO: Add any other projects from existing portfolio repo
]


// ── OPEN SOURCE ───────────────────────────────────────────────────

export const openSource = [
  {
    type:  'bug-report' as const,
    repo:  'livekit/agents',
    title: 'LiveKit Agents bug report',
    // TODO: add specific GitHub issue URL once confirmed
    url:   'https://github.com/livekit/agents/issues',
    description: 'Filed a bug report against the LiveKit Agents library related to voice pipeline behavior.',
  },
  {
    type:  'project' as const,
    repo:  'SheikhSarvar/pyrag-core',
    title: 'PyRAG Core — Author',
    url:   'https://github.com/SheikhSarvar/pyrag-core',
    description: 'MIT-licensed RAG platform with LangGraph orchestration and 143 unit tests.',
  },
]


// ── CERTIFICATIONS ────────────────────────────────────────────────
// TODO: Add certifications from LinkedIn when confirmed

export const certifications: Array<{
  name: string
  issuer: string
  date: string
  url?: string
}> = [
  // Example placeholder:
  // { name: 'TODO', issuer: 'TODO', date: 'TODO' },
]


// ── META / SEO ────────────────────────────────────────────────────

export const seo = {
  siteName:    'Gulam Sarvar',
  siteUrl:     'https://sheikhsarvar.github.io/portfolio',
  title:       'Gulam Sarvar | Agentic AI & LLM Systems Engineer',
  description: 'Agentic AI & LLM Systems Engineer. Built production voice AI (Kickcall) running 150–200 calls/day at <2s latency. Open-source author of PyRAG Core. Specialising in LangGraph, LiveKit, RAG, and FastAPI.',
  keywords:    [
    'Agentic AI',
    'LLM Systems Engineer',
    'LangGraph',
    'LiveKit',
    'Voice AI',
    'RAG',
    'FastAPI',
    'PyRAG Core',
    'Bluebash',
    'Multi-Agent Systems',
  ],
  author:      'Gulam Sarvar',
  twitterHandle: '@TODO',  // TODO: add if applicable
}
