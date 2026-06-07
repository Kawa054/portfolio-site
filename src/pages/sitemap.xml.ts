const pages = [
  '/',
  '/about',
  '/works',
  '/reserch',
  '/diary',
  '/contact'
]

const formatDate = () => new Date().toISOString().slice(0, 10)

export const GET = () => {
  const siteUrl = import.meta.env.PUBLIC_SITE_URL || 'https://ichikawa-portfolio.work'
  const lastmod = formatDate()
  const urls = pages.map((page) => {
    const loc = new URL(page, siteUrl).toString()

    return `
  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${page === '/' ? '1.0' : '0.8'}</priority>
  </url>`
  }).join('')

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
</urlset>`, {
    headers: {
      'content-type': 'application/xml'
    }
  })
}
