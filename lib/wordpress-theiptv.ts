// Enhanced WordPress API configuration for blog.theiptv.us
const WORDPRESS_API_URL = 'https://blog.theiptv.us/wp-json/wp/v2'

// Fallback API URLs in case primary fails
const FALLBACK_URLS = [
  'https://blog-sa.iptv.com/wp-json/wp/v2',
  'https://blog.iptvsatlink.com/wp-json/wp/v2'
]

export interface WordPressPost {
  id: number
  date: string
  modified: string
  slug: string
  status: string
  type: string
  title: { rendered: string }
  content: { rendered: string }
  excerpt: { rendered: string }
  author: number
  featured_media: number
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string
      alt_text: string
      media_details?: {
        sizes?: {
          medium?: { source_url: string }
          large?: { source_url: string }
          full?: { source_url: string }
        }
      }
    }>
    author?: Array<{
      name: string
      description: string
      avatar_urls?: { [key: string]: string }
    }>
    'wp:term'?: Array<Array<{
      id: number
      name: string
      slug: string
    }>>
  }
}

export interface WordPressCategory {
  id: number
  name: string
  slug: string
  description: string
  count: number
}

export interface WordPressAuthor {
  id: number
  name: string
  description: string
  avatar_urls: { [key: string]: string }
}

// Enhanced fetch function with retry logic
async function fetchWithRetry(url: string, options: RequestInit = {}, retries = 3): Promise<Response> {
  const defaultOptions: RequestInit = {
    headers: {
      'Accept': 'application/json',
      'User-Agent': 'TheIPTV-Website/1.0',
    },
    next: { revalidate: 3600 }, // Cache for 1 hour
    ...options
  }

  for (let i = 0; i <= retries; i++) {
    try {
      const response = await fetch(url, defaultOptions)
      
      if (response.ok) {
        return response
      }
      
      // If not the last retry, try again
      if (i < retries) {
        console.log(`WordPress API attempt ${i + 1} failed (${response.status}), retrying...`)
        await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1))) // Progressive delay
        continue
      }
      
      throw new Error(`HTTP ${response.status}: ${response.statusText}`)
    } catch (error) {
      if (i === retries) {
        throw error
      }
      console.log(`WordPress API attempt ${i + 1} failed:`, error)
      await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)))
    }
  }
  
  throw new Error('All retry attempts failed')
}

// Test API connectivity
export async function testWordPressConnection(): Promise<boolean> {
  try {
    const response = await fetchWithRetry(`${WORDPRESS_API_URL}/posts?per_page=1`, {}, 1)
    return response.ok
  } catch (error) {
    console.error('WordPress connection test failed:', error)
    return false
  }
}

// Get posts with enhanced error handling and fallback
export async function getWordPressPosts(params: {
  per_page?: number
  page?: number
  search?: string
  categories?: number[]
  featured_media?: boolean
} = {}): Promise<WordPressPost[]> {
  const searchParams = new URLSearchParams()
  
  // Set default parameters
  searchParams.set('per_page', (params.per_page || 10).toString())
  searchParams.set('page', (params.page || 1).toString())
  searchParams.set('status', 'publish')
  searchParams.set('_embed', 'true') // Include featured images and authors
  
  // Add optional parameters
  if (params.search) {
    searchParams.set('search', params.search)
  }
  
  if (params.categories && params.categories.length > 0) {
    searchParams.set('categories', params.categories.join(','))
  }

  // Try primary URL first
  const urls = [WORDPRESS_API_URL, ...FALLBACK_URLS]
  
  for (const baseUrl of urls) {
    try {
      console.log(`Attempting to fetch posts from: ${baseUrl}`)
      
      const response = await fetchWithRetry(
        `${baseUrl}/posts?${searchParams.toString()}`,
        {},
        2 // 2 retries per URL
      )
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      }
      
      const posts: WordPressPost[] = await response.json()
      console.log(`✅ Successfully fetched ${posts.length} posts from ${baseUrl}`)
      
      return posts.map(post => ({
        ...post,
        title: { ...post.title, rendered: post.title.rendered || 'Untitled' },
        excerpt: { ...post.excerpt, rendered: post.excerpt.rendered || '' },
        content: { ...post.content, rendered: post.content.rendered || '' }
      }))
      
    } catch (error) {
      console.log(`❌ Failed to fetch from ${baseUrl}:`, error)
      continue // Try next URL
    }
  }
  
  throw new Error('All WordPress API endpoints failed')
}

// Get single post by slug
export async function getWordPressPost(slug: string): Promise<WordPressPost | null> {
  const urls = [WORDPRESS_API_URL, ...FALLBACK_URLS]
  
  for (const baseUrl of urls) {
    try {
      console.log(`Attempting to fetch post '${slug}' from: ${baseUrl}`)
      
      const response = await fetchWithRetry(
        `${baseUrl}/posts?slug=${slug}&_embed=true`,
        {},
        2
      )
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      }
      
      const posts: WordPressPost[] = await response.json()
      
      if (posts.length === 0) {
        console.log(`Post '${slug}' not found at ${baseUrl}`)
        continue
      }
      
      console.log(`✅ Successfully fetched post '${slug}' from ${baseUrl}`)
      return posts[0]
      
    } catch (error) {
      console.log(`❌ Failed to fetch post from ${baseUrl}:`, error)
      continue
    }
  }
  
  return null
}

// Get categories
export async function getWordPressCategories(): Promise<WordPressCategory[]> {
  const urls = [WORDPRESS_API_URL, ...FALLBACK_URLS]
  
  for (const baseUrl of urls) {
    try {
      const response = await fetchWithRetry(
        `${baseUrl}/categories?per_page=50`,
        {},
        2
      )
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      }
      
      const categories: WordPressCategory[] = await response.json()
      console.log(`✅ Successfully fetched ${categories.length} categories from ${baseUrl}`)
      return categories
      
    } catch (error) {
      console.log(`❌ Failed to fetch categories from ${baseUrl}:`, error)
      continue
    }
  }
  
  throw new Error('Failed to fetch categories from all endpoints')
}

// Helper functions
export function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  } catch {
    return 'Unknown date'
  }
}

export function extractPlainText(html: string): string {
  if (!html) return ''
  
  // Remove HTML tags and decode entities
  return html
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/&nbsp;/g, ' ') // Replace non-breaking spaces
    .replace(/&amp;/g, '&')  // Replace &amp;
    .replace(/&lt;/g, '<')   // Replace &lt;
    .replace(/&gt;/g, '>')   // Replace &gt;
    .replace(/&quot;/g, '"') // Replace &quot;
    .replace(/&#039;/g, "'") // Replace &#039;
    .replace(/\s+/g, ' ')    // Replace multiple spaces
    .trim()
}

export function getFeaturedImageUrl(post: WordPressPost, size: 'medium' | 'large' | 'full' = 'medium'): string | null {
  try {
    const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0]
    
    if (!featuredMedia) return null
    
    // Try to get specific size
    const sizeUrl = featuredMedia.media_details?.sizes?.[size]?.source_url
    if (sizeUrl) return sizeUrl
    
    // Fallback to source_url
    return featuredMedia.source_url || null
  } catch {
    return null
  }
}

export function getAuthorName(post: WordPressPost): string {
  try {
    return post._embedded?.author?.[0]?.name || 'TheIPTV Team'
  } catch {
    return 'TheIPTV Team'
  }
}

export function getPostCategories(post: WordPressPost): string[] {
  try {
    const terms = post._embedded?.['wp:term']?.[0] || []
    return terms.map(term => term.name)
  } catch {
    return []
  }
}

// API health check
export async function checkWordPressHealth(): Promise<{
  status: 'healthy' | 'degraded' | 'down'
  activeEndpoint: string | null
  responseTime: number
}> {
  const start = Date.now()
  
  for (const url of [WORDPRESS_API_URL, ...FALLBACK_URLS]) {
    try {
      const testStart = Date.now()
      await fetchWithRetry(`${url}/posts?per_page=1`, {}, 1)
      const responseTime = Date.now() - testStart
      
      return {
        status: responseTime < 2000 ? 'healthy' : 'degraded',
        activeEndpoint: url,
        responseTime
      }
    } catch (error) {
      console.log(`Health check failed for ${url}:`, error)
      continue
    }
  }
  
  return {
    status: 'down',
    activeEndpoint: null,
    responseTime: Date.now() - start
  }
}
