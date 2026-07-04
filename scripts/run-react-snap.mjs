import http from 'node:http'
import { readFile, stat, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import puppeteer from 'puppeteer'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')
const distDir = path.join(rootDir, 'dist')
const sitePath = '/portfolio/'

const mimeTypes = new Map([
  ['.html', 'text/html; charset=utf-8'],
  ['.css', 'text/css; charset=utf-8'],
  ['.js', 'application/javascript; charset=utf-8'],
  ['.json', 'application/json; charset=utf-8'],
  ['.svg', 'image/svg+xml'],
  ['.png', 'image/png'],
  ['.jpg', 'image/jpeg'],
  ['.jpeg', 'image/jpeg'],
  ['.webp', 'image/webp'],
  ['.ico', 'image/x-icon'],
  ['.pdf', 'application/pdf'],
])

const prerenderServer = await new Promise((resolve, reject) => {
  const server = http.createServer(async (req, res) => {
    try {
      const url = new URL(req.url ?? '/', 'http://127.0.0.1')
      if (!url.pathname.startsWith(sitePath)) {
        res.statusCode = 404
        res.end('Not found')
        return
      }

      let relativePath = url.pathname.slice(sitePath.length)
      if (relativePath === '' || relativePath.endsWith('/')) {
        relativePath = `${relativePath}index.html`
      }

      const filePath = path.join(distDir, relativePath)
      const normalized = path.normalize(filePath)
      if (!normalized.startsWith(distDir)) {
        res.statusCode = 403
        res.end('Forbidden')
        return
      }

      let targetPath = normalized
      try {
        await stat(targetPath)
      } catch {
        if (!relativePath.endsWith('.html')) {
          targetPath = path.join(distDir, 'index.html')
        }
      }

      const ext = path.extname(targetPath).toLowerCase()
      const body = await readFile(targetPath)
      res.statusCode = 200
      res.setHeader('Content-Type', mimeTypes.get(ext) ?? 'application/octet-stream')
      res.end(body)
    } catch (error) {
      res.statusCode = 500
      res.end(String(error))
    }
  })

  server.once('error', reject)
  server.listen(0, '127.0.0.1', () => {
    const address = server.address()
    if (!address || typeof address !== 'object') {
      reject(new Error('Failed to allocate a prerender port'))
      return
    }
    resolve({ port: address.port, server })
  })
})

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
})

try {
  const page = await browser.newPage()
  await page.setViewport({ width: 1440, height: 1800 })
  await page.goto(`http://127.0.0.1:${prerenderServer.port}${sitePath}`, {
    waitUntil: 'networkidle0',
  })

  const html = await page.content()
  await writeFile(
    path.join(distDir, 'index.html'),
    `<!DOCTYPE html>\n${html}\n`,
    'utf8',
  )
} finally {
  await browser.close()
  prerenderServer.server.close()
}
