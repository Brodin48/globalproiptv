// WordPress API configuration with fallback support
const WORDPRESS_API_URLS = {
  primary: 'https://blog.theiptv.us/wp-json/wp/v2',
  fallback: 'https://blog-sa.iptv.com/wp-json/wp/v2'
}

// Current active API URL
let CURRENT_API_URL = WORDPRESS_API_URLS.primary

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
    }>
    author?: Array<{
      name: string
      description: string
    }>
  }
}

export interface WordPressCategory {
  id: number
  name: string
  slug: string
  description: string
  count: number
}

// Check API health and switch to fallback if needed
async function checkAPIHealth(url: string): Promise<boolean> {
  try {
    const response = await fetch(`${url}/posts?per_page=1`, {
      method: 'HEAD',
      headers: { 'Accept': 'application/json' },
    })
    return response.ok
  } catch (error) {
    console.warn(`API health check failed for ${url}:`, error)
    return false
  }
}

// Get the best available API URL
async function getBestAPIUrl(): Promise<string> {
  // First try primary
  const primaryHealthy = await checkAPIHealth(WORDPRESS_API_URLS.primary)
  if (primaryHealthy) {
    CURRENT_API_URL = WORDPRESS_API_URLS.primary
    return CURRENT_API_URL
  }

  // Fallback to secondary
  console.warn('Primary API unavailable, using fallback')
  const fallbackHealthy = await checkAPIHealth(WORDPRESS_API_URLS.fallback)
  if (fallbackHealthy) {
    CURRENT_API_URL = WORDPRESS_API_URLS.fallback
    return CURRENT_API_URL
  }

  // If both fail, still return primary for error handling
  CURRENT_API_URL = WORDPRESS_API_URLS.primary
  return CURRENT_API_URL
}

// Fetch WordPress posts with automatic fallback and error handling
export async function getWordPressPosts(params: {
  per_page?: number
  page?: number
  categories?: string
  search?: string
} = {}): Promise<WordPressPost[]> {
  try {
    const apiUrl = await getBestAPIUrl()
    
    const searchParams = new URLSearchParams({
      _embed: 'true',
      per_page: (params.per_page || 12).toString(),
      page: (params.page || 1).toString(),
      ...(params.categories && { categories: params.categories }),
      ...(params.search && { search: params.search }),
    })

    const response = await fetch(
      `${apiUrl}/posts?${searchParams.toString()}`,
      {
        next: { revalidate: 3600 }, // Revalidate every hour
        headers: { 
          'Accept': 'application/json',
          'User-Agent': 'IPTV Satlink-Portal/1.0'
        },
      }
    )

    if (!response.ok) {
      console.error(`WordPress API error: ${response.status} from ${apiUrl}`)
      
      // If primary failed and we haven't tried fallback yet
      if (apiUrl === WORDPRESS_API_URLS.primary) {
        console.log('Trying fallback API...')
        return await getWordPressPostsFromUrl(WORDPRESS_API_URLS.fallback, params)
      }
      
      return []
    }

    const posts = await response.json()
    console.log(`✅ Successfully fetched ${posts.length} posts from ${apiUrl}`)
    return posts || []
  } catch (error) {
    console.error('Error fetching WordPress posts:', error)
    
    // Try fallback if primary failed
    if (CURRENT_API_URL === WORDPRESS_API_URLS.primary) {
      console.log('Attempting fallback API due to error...')
      return await getWordPressPostsFromUrl(WORDPRESS_API_URLS.fallback, params)
    }
    
    return []
  }
}

// Helper function to fetch from specific URL
async function getWordPressPostsFromUrl(apiUrl: string, params: any): Promise<WordPressPost[]> {
  try {
    const searchParams = new URLSearchParams({
      _embed: 'true',
      per_page: (params.per_page || 12).toString(),
      page: (params.page || 1).toString(),
      ...(params.categories && { categories: params.categories }),
      ...(params.search && { search: params.search }),
    })

    const response = await fetch(
      `${apiUrl}/posts?${searchParams.toString()}`,
      {
        next: { revalidate: 3600 },
        headers: { 
          'Accept': 'application/json',
          'User-Agent': 'IPTV Satlink-Portal/1.0'
        },
      }
    )

    if (!response.ok) {
      console.error(`Fallback API also failed: ${response.status}`)
      return []
    }

    const posts = await response.json()
    console.log(`✅ Successfully fetched ${posts.length} posts from fallback ${apiUrl}`)
    return posts || []
  } catch (error) {
    console.error('Fallback API also failed:', error)
    return []
  }
}

// Fetch a single WordPress post by slug with fallback
export async function getWordPressPost(slug: string): Promise<WordPressPost | null> {
  try {
    const apiUrl = await getBestAPIUrl()
    
    const response = await fetch(
      `${apiUrl}/posts?slug=${slug}&_embed=true`,
      {
        next: { revalidate: 3600 },
        headers: { 
          'Accept': 'application/json',
          'User-Agent': 'IPTV Satlink-Portal/1.0'
        },
      }
    )

    if (!response.ok) {
      console.error(`WordPress API error: ${response.status}`)
      
      // Try fallback
      if (apiUrl === WORDPRESS_API_URLS.primary) {
        return await getWordPressPostFromUrl(WORDPRESS_API_URLS.fallback, slug)
      }
      
      return null
    }

    const posts = await response.json()
    return posts.length > 0 ? posts[0] : null
  } catch (error) {
    console.error('Error fetching WordPress post:', error)
    
    // Try fallback
    if (CURRENT_API_URL === WORDPRESS_API_URLS.primary) {
      return await getWordPressPostFromUrl(WORDPRESS_API_URLS.fallback, slug)
    }
    
    return null
  }
}

// Helper function to fetch single post from specific URL
async function getWordPressPostFromUrl(apiUrl: string, slug: string): Promise<WordPressPost | null> {
  try {
    const response = await fetch(
      `${apiUrl}/posts?slug=${slug}&_embed=true`,
      {
        next: { revalidate: 3600 },
        headers: { 
          'Accept': 'application/json',
          'User-Agent': 'IPTV Satlink-Portal/1.0'
        },
      }
    )

    if (!response.ok) {
      return null
    }

    const posts = await response.json()
    return posts.length > 0 ? posts[0] : null
  } catch (error) {
    console.error('Error fetching from fallback:', error)
    return null
  }
}

// Fetch WordPress categories with fallback
export async function getWordPressCategories(): Promise<WordPressCategory[]> {
  try {
    const apiUrl = await getBestAPIUrl()
    
    const response = await fetch(
      `${apiUrl}/categories?per_page=50`,
      {
        next: { revalidate: 86400 }, // Revalidate daily
        headers: { 
          'Accept': 'application/json',
          'User-Agent': 'IPTV Satlink-Portal/1.0'
        },
      }
    )

    if (!response.ok) {
      console.error(`WordPress API error: ${response.status}`)
      return []
    }

    const categories = await response.json()
    return categories || []
  } catch (error) {
    console.error('Error fetching WordPress categories:', error)
    return []
  }
}

// Format date for display
export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

// Extract plain text from HTML content
export function extractPlainText(html: string, maxLength: number = 160): string {
  const text = html.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim()
  return text.length > maxLength ? text.substring(0, maxLength) + '...' : text
}

// Get current API URL for debugging
export function getCurrentAPIUrl(): string {
  return CURRENT_API_URL
}

// Force set API URL (for testing)
export function setAPIUrl(url: 'primary' | 'fallback'): void {
  CURRENT_API_URL = WORDPRESS_API_URLS[url]
  console.log(`API URL set to: ${CURRENT_API_URL}`)
}