import { Helmet } from 'react-helmet-async'
import { identity, seo } from '../../data/portfolio.data'

const ogImage = `${seo.siteUrl}og-image.png`

export function SiteHead() {
  return (
    <Helmet prioritizeSeoTags>
      <html lang="en" />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="author" content={seo.author} />
      <meta name="keywords" content={seo.keywords.join(', ')} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={seo.siteUrl} />
      <link rel="me" href={identity.links.github} />
      <link rel="me" href={identity.links.linkedin} />
      <link rel="icon" type="image/svg+xml" href={`${import.meta.env.BASE_URL}favicon.svg`} />
      <meta name="theme-color" content="#00E5B4" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seo.siteUrl} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={seo.siteName} />
      <meta property="og:locale" content="en_US" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  )
}
