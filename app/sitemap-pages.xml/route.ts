import { NextResponse } from 'next/server'

export async function GET() {
  const staticPages = [
    {
      url: 'https://iptvsatlink.com',
      changefreq: 'daily',
      priority: '1.0'
    },
    {
      url: 'https://iptvsatlink.com/about',
      changefreq: 'monthly',
      priority: '0.8'
    },
    {
      url: 'https://iptvsatlink.com/blog',
      changefreq: 'daily',
      priority: '0.9'
    },
    {
      url: 'https://iptvsatlink.com/pricing',
      changefreq: 'weekly',
      priority: '0.9'
    },
    {
      url: 'https://iptvsatlink.com/contact',
      changefreq: 'monthly',
      priority: '0.7'
    },
    {
      url: 'https://iptvsatlink.com/privacy-policy',
      changefreq: 'monthly',
      priority: '0.6'
    },
    {
      url: 'https://iptvsatlink.com/flix-iptv-activation-smart-tv',
      changefreq: 'monthly',
      priority: '0.8'
    },
    {
      url: 'https://iptvsatlink.com/ibo-iptv',
      changefreq: 'monthly',
      priority: '0.8'
    },
    {
      url: 'https://iptvsatlink.com/duplex-iptv-activation',
      changefreq: 'monthly',
      priority: '0.8'
    },
    {
      url: 'https://iptvsatlink.com/apps/Windows_IPTV_Player_3.0.exe',
      changefreq: 'monthly',
      priority: '0.8'
    },
    {
      url: 'https://iptvsatlink.com/apps/IpFoxTVSetup.exe',
      changefreq: 'monthly',
      priority: '0.8'
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
