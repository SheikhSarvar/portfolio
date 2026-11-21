/**
 * StructuredData.tsx
 * Injects JSON-LD structured data into <head> for high-ranking SEO.
 * Person schema + ProfilePage schema + WebSite schema + FAQPage schema.
 */

import { seo, identity, experience, education } from '../../data/portfolio.data'

export function StructuredData() {
  const personSchema = {
    '@context':   'https://schema.org',
    '@type':      'Person',
    name:         identity.name,
    givenName:    'Gulam',
    familyName:   'Sarvar',
    alternateName: [
      'Sheikh Gulam Sarvar',
      'Sheikh Sarvar',
      'Ghulam Sarwar',
      'Sarvar',
    ],
    url:          seo.siteUrl,
    sameAs: [
      identity.links.github,
      identity.links.linkedin,
    ],
    jobTitle:     identity.title,
    worksFor: {
      '@type': 'Organization',
      name:    experience[0]?.company ?? 'EatEasy',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bengaluru',
      addressRegion: 'Karnataka',
      addressCountry: 'IN',
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name:    education[0]?.institution ?? 'Woolf University',
    },
    knowsAbout: [
      'Agentic AI',
      'Temporal.io',
      '3CX Telephony',
      'Oracle Database Architecture',
      'Large Language Models',
      'LangGraph',
      'RAG Systems',
      'Voice AI',
      'LiveKit',
      'FastAPI',
      'Python',
      'React',
      'TypeScript',
      'Vector Databases',
    ],
    description: seo.description,
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type':    'WebSite',
    name:       seo.siteName,
    url:        seo.siteUrl,
    author: {
      '@type': 'Person',
      name:    identity.name,
    },
    description: seo.description,
  }

  const profilePageSchema = {
    '@context': 'https://schema.org',
    '@type':    'ProfilePage',
    name:       `${identity.name} — AI Engineer Portfolio`,
    url:        seo.siteUrl,
    mainEntity: personSchema,
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Who is Gulam Sarvar?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Gulam Sarvar is an AI Engineer and Agentic Systems Architect based in Bengaluru, India. He builds enterprise autonomous agentic platforms at EatEasy, durable orchestration with Temporal.io, and production voice AI pipelines with 3CX & LiveKit.',
        },
      },
      {
        '@type': 'Question',
        name: 'What technologies does Gulam Sarvar specialize in?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Gulam Sarvar specializes in Agentic AI, Temporal.io durable workflows, 3CX VoIP telephony, Oracle database architecture, LiveKit voice AI pipelines, and Python/FastAPI backends.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where is Gulam Sarvar located?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Gulam Sarvar is based in Bengaluru (Bangalore), Karnataka, India.',
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}
