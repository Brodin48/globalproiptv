import { NextResponse } from 'next/server'

export async function GET() {
  const staticPages = [
    {
      url: 'https://globalproiptv.com',
      changefreq: 'daily',
      priority: '1.0'
    },
    {
      url: 'https://globalproiptv.com/about',
      changefreq: 'monthly',
      priority: '0.8'
    },
    {
      url: 'https://globalproiptv.com/blog',
      changefreq: 'daily',
      priority: '0.9'
    },
    {
      url: 'https://globalproiptv.com/pricing',
      changefreq: 'weekly',
      priority: '0.9'
    },
    {
      url: 'https://globalproiptv.com/channels',
      changefreq: 'daily',
      priority: '0.9'
    },
    {
      url: 'https://globalproiptv.com/contact',
      changefreq: 'monthly',
      priority: '0.7'
    },
    {
      url: 'https://globalproiptv.com/free-trial',
      changefreq: 'weekly',
      priority: '0.8'
    },
    {
      url: 'https://globalproiptv.com/privacy-policy',
      changefreq: 'monthly',
      priority: '0.6'
    }
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages.map(page => `
  <url>
    <loc>${page.url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('')}
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
