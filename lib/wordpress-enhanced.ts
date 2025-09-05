// Enhanced WordPress API configuration with better error handling
const WORDPRESS_API_URL = 'https://blog.theiptv.us/wp-json/wp/v2'

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

// Enhanced fetch with timeout and retry logic
async function fetchWithRetry(url: string, options: any = {}, retries: number = 3): Promise<Response> {
  const timeoutMs = 10000 // 10 seconds
  
  for (let i = 0; i < retries; i++) {
    try {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), timeoutMs)
      
      const response = await fetch(url, {
        ...options,
        signal: controller.signal,
      })
      
      clearTimeout(timeoutId)
      return response
    } catch (error) {
      console.log(`Attempt ${i + 1}/${retries} failed:`, error.message)
      if (i === retries - 1) throw error
      await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1))) // Exponential backoff
    }
  }
  throw new Error('All retry attempts failed')
}

// Fetch WordPress posts with enhanced error handling
export async function getWordPressPosts(params: {
  per_page?: number
  page?: number
  categories?: string
  search?: string
} = {}): Promise<WordPressPost[]> {
  try {
    console.log('🔄 Fetching WordPress posts from blog.iptvsatlink.com...')
    
    const searchParams = new URLSearchParams({
      _embed: 'true',
      per_page: (params.per_page || 12).toString(),
      page: (params.page || 1).toString(),
      ...(params.categories && { categories: params.categories }),
      ...(params.search && { search: params.search }),
    })

    const url = `${WORDPRESS_API_URL}/posts?${searchParams.toString()}`
    console.log(`📡 API URL: ${url}`)

    const response = await fetchWithRetry(url, {
      headers: { 
        'Accept': 'application/json',
        'User-Agent': 'IPTV Satlink-Portal/1.0',
        'Cache-Control': 'no-cache'
      },
    })

    if (!response.ok) {
      console.error(`❌ WordPress API error: ${response.status} ${response.statusText}`)
      console.error(`📍 URL: ${url}`)
      
      if (response.status === 404) {
        console.error('💡 WordPress may not be installed or REST API disabled')
      } else if (response.status >= 500) {
        console.error('💡 Server error - WordPress site may be down')
      } else if (response.status === 403) {
        console.error('💡 Access denied - REST API may be restricted')
      }
      
      return []
    }

    const posts = await response.json()
    console.log(`✅ Successfully fetched ${posts?.length || 0} WordPress posts`)
    return posts || []
    
  } catch (error) {
    console.error('❌ WordPress fetch error:', error.message)
    
    if (error.message.includes('fetch failed')) {
      console.error('💡 Domain may not exist or DNS not propagated yet')
    } else if (error.message.includes('timeout')) {
      console.error('💡 Server taking too long to respond')
    }
    
    return []
  }
}

// Fetch a single WordPress post by slug with better error handling
export async function getWordPressPost(slug: string): Promise<WordPressPost | null> {
  try {
    console.log(`🔍 Fetching WordPress post: ${slug}`)
    
    const url = `${WORDPRESS_API_URL}/posts?slug=${slug}&_embed=true`
    const response = await fetchWithRetry(url, {
      headers: { 
        'Accept': 'application/json',
        'User-Agent': 'IPTV Satlink-Portal/1.0'
      },
    })

    if (!response.ok) {
      console.error(`❌ WordPress post fetch error: ${response.status}`)
      return null
    }

    const posts = await response.json()
    const post = posts.length > 0 ? posts[0] : null
    
    if (post) {
      console.log(`✅ Found WordPress post: ${post.title.rendered}`)
    } else {
      console.log(`⚠️ WordPress post not found: ${slug}`)
    }
    
    return post
  } catch (error) {
    console.error('❌ Error fetching WordPress post:', error.message)
    return null
  }
}

// Check WordPress site status
export async function checkWordPressStatus(): Promise<{
  accessible: boolean
  hasWordPress: boolean
  hasRestAPI: boolean
  message: string
}> {
  try {
    // First check if domain is accessible
    const baseResponse = await fetchWithRetry('https://blog.iptvsatlink.com', {
      headers: { 'User-Agent': 'IPTV Satlink-Portal/1.0' }
    })
    
    if (!baseResponse.ok) {
      return {
        accessible: false,
        hasWordPress: false,
        hasRestAPI: false,
        message: `Domain not accessible: ${baseResponse.status}`
      }
    }
    
    // Check if WordPress REST API is available
    const apiResponse = await fetchWithRetry(`${WORDPRESS_API_URL}`, {
      headers: { 'User-Agent': 'IPTV Satlink-Portal/1.0' }
    })
    
    if (apiResponse.ok) {
      return {
        accessible: true,
        hasWordPress: true,
        hasRestAPI: true,
        message: 'WordPress REST API is accessible'
      }
    } else {
      return {
        accessible: true,
        hasWordPress: false,
        hasRestAPI: false,
        message: `WordPress REST API not found: ${apiResponse.status}`
      }
    }
    
  } catch (error) {
    return {
      accessible: false,
      hasWordPress: false,
      hasRestAPI: false,
      message: `Connection failed: ${error.message}`
    }
  }
}

// Fetch WordPress categories
export async function getWordPressCategories(): Promise<WordPressCategory[]> {
  try {
    const response = await fetchWithRetry(
      `${WORDPRESS_API_URL}/categories?per_page=50`,
      {
        headers: { 
          'Accept': 'application/json',
          'User-Agent': 'IPTV Satlink-Portal/1.0'
        },
      }
    )

    if (!response.ok) {
      console.error(`WordPress categories API error: ${response.status}`)
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
