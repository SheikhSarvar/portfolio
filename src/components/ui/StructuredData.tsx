/**
 * StructuredData.tsx — Phase 5
 * Injects JSON-LD structured data into <head> for SEO.
 * Person schema + Website schema + BreadcrumbList.
 */

import { seo, identity, experience, education } from '../../data/portfolio.data'

export function StructuredData() {
  const personSchema = {
    '@context':   'https://schema.org',
    '@type':      'Person',
    name:         identity.name,
    url:          seo.siteUrl,
    sameAs: [
      identity.links.github,
      identity.links.linkedin,
    ],
    jobTitle:     identity.title,
    worksFor: {
      '@type': 'Organization',
      name:    experience[0]?.company ?? 'Bluebash Pvt Ltd',
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name:    education[0]?.institution ?? 'Woolf University',
    },
    knowsAbout: [
      'Agentic AI',
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

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type':    'BreadcrumbList',
    itemListElement: [
      {
        '@type':  'ListItem',
        position: 1,
        name:     'Home',
        item:     seo.siteUrl,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}
