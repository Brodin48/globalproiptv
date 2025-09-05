import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://theiptv.us' // Your actual domain
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/channels`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/free-trial`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/iptv-reseller`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/apps`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    }
  ]

  // IPTV subscription pages
  const subscriptionPages = [
    'aroma-iptv-subscription-for-12-months',
    'bob-iptv-subscription-for-12-months-premium-package-3-months-free',
    'duplex-iptv-activation',
    'falcon-iptv-subscription-for-12-months-supports-2-devices',
    'flix-iptv',
    'flix-iptv-1',
    'flix-iptv-activation-smart-tv',
    'ibo-iptv'
  ].map(page => ({
    url: `${baseUrl}/${page}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  // Country-specific channel pages (high priority for SEO)
  const countries = [
    'usa', 'uk', 'canada', 'france', 'germany', 'spain', 'italy', 'netherlands', 
    'norway', 'sweden', 'denmark', 'finland', 'belgium', 'switzerland', 'austria',
    'portugal', 'poland', 'czech-republic', 'hungary', 'romania', 'bulgaria',
    'croatia', 'serbia', 'greece', 'turkey', 'russia', 'ukraine', 'belarus',
    'lithuania', 'latvia', 'estonia', 'india', 'pakistan', 'bangladesh',
    'china', 'japan', 'south-korea', 'thailand', 'vietnam', 'indonesia',
    'malaysia', 'philippines', 'singapore', 'saudi-arabia', 'uae', 'qatar',
    'kuwait', 'bahrain', 'oman', 'egypt', 'morocco', 'tunisia', 'algeria',
    'libya', 'sudan', 'lebanon', 'jordan', 'syria', 'palestine', 'yemen',
    'mauritania', 'djibouti', 'somalia', 'comoros', 'australia', 'new-zealand',
    'brazil', 'mexico', 'argentina', 'chile', 'colombia', 'peru', 'venezuela',
    'south-africa', 'nigeria', 'ghana', 'kenya', 'ethiopia'
  ]

  const countryPages = countries.map(country => ({
    url: `${baseUrl}/channels?region=${country}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.8,
  }))

  // Category-specific pages
  const categories = ['entertainment', 'sports', 'news', 'movies', 'documentary', 'kids', 'music']
  const categoryPages = categories.map(category => ({
    url: `${baseUrl}/channels?category=${category}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.7,
  }))

  // Blog pages (if they exist)
  const blogPages = [
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }
  ]

  return [
    ...staticPages,
    ...subscriptionPages,
    ...countryPages,
    ...categoryPages,
    ...blogPages
  ]
}
