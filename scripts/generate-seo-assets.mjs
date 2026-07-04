import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')
const publicDir = path.join(rootDir, 'public')

const siteUrl = 'https://sheikhsarvar.github.io/portfolio/'
const routes = ['/']
const lastmod = new Date().toISOString().slice(0, 10)

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${siteUrl.replace(/\/$/, '')}${route}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`

const robotsTxt = `# robots.txt - Gulam Sarvar Portfolio
# ${siteUrl}

User-agent: *
Allow: /

Sitemap: ${siteUrl}sitemap.xml

User-agent: GPTBot
Allow: /llms.txt
Allow: /llms-full.txt

User-agent: Claude-Web
Allow: /llms.txt
Allow: /llms-full.txt

User-agent: PerplexityBot
Allow: /llms.txt
Allow: /llms-full.txt

User-agent: Google-Extended
Allow: /llms.txt
Allow: /llms-full.txt
`

await mkdir(publicDir, { recursive: true })
await Promise.all([
  writeFile(path.join(publicDir, 'sitemap.xml'), sitemapXml, 'utf8'),
  writeFile(path.join(publicDir, 'robots.txt'), robotsTxt, 'utf8'),
])
