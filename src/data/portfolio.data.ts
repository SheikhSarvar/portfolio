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
  title:      'AI Engineer & Agentic Systems Architect',
  subtitle:   'I build autonomous agentic platforms and production voice AI.',
  tagline:    'Agentic Workflows · Voice AI · Temporal · 3CX · Oracle · Full Stack',
  location:   'Bengaluru, India',
  timezone:   'IST (UTC+5:30)',
  available:  true,  // flip to false when not open to roles

  bio: `AI Engineer at EatEasy based in Bengaluru, India, architecting autonomous agentic
workflow platforms and enterprise voice AI infrastructure. Previously Associate Data Scientist
at Bluebash, where I built Kickcall (voice AI product) from scratch — a real-time STT→LLM→TTS
pipeline running 150–200 calls/day at under 2 seconds end-to-end latency — and led RAG systems
for legal and healthcare clients. Experienced in durable distributed workflow orchestration
with Temporal.io, bi-directional telephony via 3CX, and resilient architectures with Oracle.
Outside work, I maintain PyRAG Core, an MIT-licensed Python/FastAPI/LangGraph RAG platform on GitHub.`,

  links: {
    github:   'https://github.com/SheikhSarvar',
    linkedin: 'https://www.linkedin.com/in/gulam-sarvar/',
    portfolio: 'https://gulamsarvar.pages.dev/',
    pyragCore: 'https://github.com/SheikhSarvar/pyrag-core',
    email:    'sheikhgulamsarvar@gmail.com',
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
  logo?:        string
}

export const experience: Experience[] = [
  {
    company:   'EatEasy',
    role:      'AI Engineer',
    type:      'full-time',
    startDate: 'Oct 2026',
    endDate:   'Present',
    location:  'Bengaluru, India',
    highlights: [
      'Architecting an enterprise-grade agentic workflow platform unifying n8n-style graph automation with autonomous multi-agent task execution.',
      'Engineering fault-tolerant distributed state orchestration with Temporal.io for zero-loss mission-critical workflows and infinite retry semantics.',
      'Deploying real-time bi-directional telephony (inbound customer service / IVR and outbound conversational campaigns) powered by 3CX and WebRTC pipelines.',
      'Designing enterprise transactional data pipelines and high-throughput query services across Oracle and vector backends.',
    ],
    tags: ['Temporal.io', '3CX', 'Oracle', 'AI Agents', 'LangGraph', 'FastAPI', 'Python', 'Voice AI'],
  },
  {
    company:   'Bluebash Pvt Ltd',
    role:      'Associate Data Scientist',
    type:      'full-time',
    startDate: 'Apr 2024',
    endDate:   'Oct 2026',
    location:  'Mohali, India',
    highlights: [
      'Built Kickcall (Bluebash\'s voice AI product) from scratch — STT→LLM→TTS pipeline running 150–200 calls/day at <2s end-to-end latency using WebRTC/LiveKit and Redis session state.',
      'Led technical direction for a ~5-person cross-functional team (frontend, cloud, backend) building RAG systems for legal and healthcare clients.',
      'Designed hybrid retrieval architecture using Qdrant/Pinecone with reranking; improved retrieval accuracy significantly over naive dense-only baselines.',
      'Containerized all services with Docker; coordinated with cloud teammate for EC2/infra deployment.',
    ],
    tags: ['LangGraph', 'LiveKit', 'WebRTC', 'Qdrant', 'Pinecone', 'Redis', 'FastAPI', 'Docker'],
  },
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
] as const


// ── SKILLS ────────────────────────────────────────────────────────

export type SkillLevel = 'production' | 'proficient' | 'familiar'

export type Skill = {
  name:    string
  level:   SkillLevel
  icon?:   string
  url?:    string
}

export type SkillCategory = {
  id:     string
  label:  string
  skills: Skill[]
}

export const skills: SkillCategory[] = [
  {
    id:    'ai',
    label: 'AI & Agents',
    skills: [
      { name: 'AI Agents',          level: 'production'  },
      { name: 'LangGraph',          level: 'production'  },
      { name: 'LangChain',          level: 'production'  },
      { name: 'RAG Systems',        level: 'production'  },
      { name: 'OpenAI API',         level: 'production'  },
      { name: 'Anthropic API',      level: 'production'  },
      { name: 'Gemini',             level: 'proficient'  },
      { name: 'Ollama',             level: 'production'  },
      { name: 'LM Studio',          level: 'production'  },
      { name: 'Langfuse',           level: 'production'  },
      { name: 'LangSmith',          level: 'production'  },
    ],
  },
  {
    id:    'workflows',
    label: 'Workflows & Orchestration',
    skills: [
      { name: 'Temporal.io',        level: 'production', url: 'https://temporal.io/' },
      { name: 'Agent Workflows',    level: 'production' },
      { name: 'n8n Automation',     level: 'production' },
      { name: 'Event-Driven DAGs',  level: 'production' },
      { name: 'State Machines',     level: 'production' },
    ],
  },
  {
    id:    'voice',
    label: 'Voice AI & Telephony',
    skills: [
      { name: '3CX Telephony',      level: 'production' },
      { name: 'LiveKit',            level: 'production' },
      { name: 'WebRTC',             level: 'production' },
      { name: 'Inbound / Outbound', level: 'production' },
      { name: 'STT/TTS Pipelines',  level: 'production' },
      { name: 'LiveKit Agents',     level: 'production' },
    ],
  },
  {
    id:    'vector',
    label: 'Databases & Storage',
    skills: [
      { name: 'Oracle',             level: 'production' },
      { name: 'Qdrant',             level: 'production' },
      { name: 'Pinecone',           level: 'production' },
      { name: 'Redis',              level: 'production' },
      { name: 'PostgreSQL',         level: 'production' },
      { name: 'Weaviate',           level: 'familiar'   },
      { name: 'pgvector',           level: 'familiar'   },
    ],
  },
  {
    id:    'backend',
    label: 'Backend & Systems',
    skills: [
      { name: 'Temporal.io',        level: 'production', url: 'https://temporal.io/' },
      { name: 'FastAPI',            level: 'production' },
      { name: 'Python',             level: 'production' },
      { name: 'Node.js',            level: 'proficient' },
      { name: 'Express',            level: 'proficient' },
      { name: 'asyncpg / SQLModel', level: 'production' },
      { name: 'Alembic',           level: 'production' },
    ],
  },
  {
    id:    'frontend',
    label: 'Frontend',
    skills: [
      { name: 'React',              level: 'production' },
      { name: 'TypeScript',         level: 'production' },
      { name: 'Next.js',            level: 'proficient' },
      { name: 'Tailwind CSS',       level: 'production' },
      { name: 'Framer Motion',      level: 'production' },
    ],
  },
  {
    id:    'devops',
    label: 'DevOps & Infra',
    skills: [
      { name: 'Docker',             level: 'production' },
      { name: 'GitHub Actions',     level: 'proficient' },
      { name: 'Vercel',             level: 'production' },
      { name: 'Linux / Bash',       level: 'proficient' },
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
  highlights?:  string[]
}

export const projects: Project[] = [
  {
    id:      'omniflow',
    name:    'OmniFlow Agentic Platform',
    tagline: 'Universal agentic workflow orchestrator with bi-directional telephony & Temporal durability',
    description: `An enterprise-grade autonomous agentic & workflow orchestration platform designed to handle arbitrary business processes. Unifies visual graph-based automation (similar to n8n) with dynamic multi-agent task execution, dynamic tool calling, and bi-directional telephony. Integrates inbound voice handling and outbound conversational calling powered by 3CX and WebRTC, with durable state persistence and infinite retry guarantees through Temporal.io.`,
    type:   'product',
    status: 'production',
    tech:   ['Temporal.io', '3CX', 'Python', 'FastAPI', 'LangGraph', 'Oracle', 'LiveKit', 'WebRTC', 'Docker', 'Redis', 'TypeScript'],
    featured: true,
    highlights: [
      'Universal workflow DAG & agentic automation (n8n-style arbitrary flows)',
      'Inbound & outbound real-time voice calling via 3CX and WebRTC (<1.5s latency)',
      'Durable distributed state machine orchestration with Temporal.io',
      'Scalable multi-tenant architecture with Oracle and vector database persistence',
    ],
  },
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
  },
]


// ── OPEN SOURCE ───────────────────────────────────────────────────

export const openSource = [
  {
    type:  'bug-report' as const,
    repo:  'livekit/agents',
    title: 'LiveKit Agents bug report',
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

export const certifications: Array<{
  name: string
  issuer: string
  date: string
  url?: string
}> = []


// ── META / SEO ────────────────────────────────────────────────────

export const seo = {
  siteName:    'Gulam Sarvar',
  siteUrl:     'https://gulamsarvar.pages.dev/',
  title:       'Gulam Sarvar | AI Engineer & Agentic Systems Architect — Bengaluru',
  description: 'Gulam Sarvar is an AI Engineer at EatEasy based in Bengaluru, India. Architecting autonomous agentic platforms, durable workflow engines with Temporal.io, and real-time voice AI with 3CX & LiveKit. Author of PyRAG Core.',
  keywords:    [
    'Gulam Sarvar',
    'Gulam Sarvar Bengaluru',
    'Gulam Sarvar Bangalore',
    'Gulam Sarvar AI Engineer',
    'Gulam Sarvar EatEasy',
    'Gulam Sarvar LinkedIn',
    'Gulam Sarvar Portfolio',
    'Ghulam Sarwar',
    'Sheikh Gulam Sarvar',
    'Sheikh Sarvar',
    'Sarvar',
    'Agentic AI',
    'Temporal.io',
    '3CX',
    'Oracle',
    'LLM Systems Engineer',
    'Voice AI',
    'LangGraph',
    'LiveKit',
    'RAG Systems',
    'FastAPI',
    'PyRAG Core',
    'Multi-Agent Systems',
    'Autonomous Workflows',
    'EatEasy',
    'Bluebash',
  ],
  author:      'Gulam Sarvar',
  twitterHandle: '@SheikhSarvar',
}

