import { NextResponse } from 'next/server'

const WORDPRESS_API_URL = 'https://blog.iptvsatlink.com/wp-json/wp/v2'

async function fetchWithTimeout(url: string, options: any = {}, timeoutMs: number = 10000) {
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs)
  
  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    })
    clearTimeout(timeoutId)
    return response
  } catch (error) {
    clearTimeout(timeoutId)
    throw error
  }
}

export async function GET() {
  const status = {
    accessible: false,
    hasWordPress: false,
    hasRestAPI: false,
    message: '',
    timestamp: new Date().toISOString()
  }
  
  let posts = []

  try {
    // Test 1: Check if domain is accessible
    console.log('🔍 Testing domain accessibility...')
    const domainResponse = await fetchWithTimeout('https://blog.iptvsatlink.com', {
      headers: { 'User-Agent': 'IPTV Satlink-Portal/1.0' }
    }, 8000)
    
    if (domainResponse.ok) {
      status.accessible = true
      console.log('✅ Domain is accessible')
      
      // Test 2: Check WordPress REST API
      console.log('🔍 Testing WordPress REST API...')
      const apiResponse = await fetchWithTimeout(`${WORDPRESS_API_URL}`, {
        headers: { 
          'Accept': 'application/json',
          'User-Agent': 'IPTV Satlink-Portal/1.0'
        }
      }, 8000)
      
      if (apiResponse.ok) {
        status.hasWordPress = true
        status.hasRestAPI = true
        console.log('✅ WordPress REST API is accessible')
        
        // Test 3: Fetch sample posts
        console.log('🔍 Fetching sample posts...')
        const postsResponse = await fetchWithTimeout(`${WORDPRESS_API_URL}/posts?per_page=5`, {
          headers: { 
            'Accept': 'application/json',
            'User-Agent': 'IPTV Satlink-Portal/1.0'
          }
        }, 8000)
        
        if (postsResponse.ok) {
          const postsData = await postsResponse.json()
          posts = postsData.map((post: any) => ({
            id: post.id,
            title: post.title.rendered,
            date: new Date(post.date).toLocaleDateString(),
            slug: post.slug
          }))
          
          status.message = `WordPress REST API working! Found ${posts.length} posts.`
          console.log(`✅ Successfully fetched ${posts.length} posts`)
        } else {
          status.message = `WordPress found but posts endpoint returned: ${postsResponse.status}`
          console.log(`⚠️ Posts endpoint error: ${postsResponse.status}`)
        }
      } else {
        status.hasWordPress = false
        status.message = `Domain accessible but WordPress REST API not found (${apiResponse.status})`
        console.log(`❌ REST API error: ${apiResponse.status}`)
      }
    } else {
      status.message = `Domain not accessible: ${domainResponse.status} ${domainResponse.statusText}`
      console.log(`❌ Domain error: ${domainResponse.status}`)
    }
    
  } catch (error: any) {
    console.error('❌ Connection test failed:', error?.message || 'Unknown error')
    
    if (error?.name === 'AbortError') {
      status.message = 'Connection timeout - server not responding'
    } else if (error?.message?.includes('fetch failed')) {
      status.message = 'Domain not found or DNS not propagated'
    } else if (error?.message?.includes('ENOTFOUND')) {
      status.message = 'Domain does not exist or DNS resolution failed'
    } else if (error?.message?.includes('ECONNREFUSED')) {
      status.message = 'Connection refused - server may be down'
    } else {
      status.message = `Connection failed: ${error?.message || 'Unknown error'}`
    }
  }

  return NextResponse.json({
    status,
    posts,
    debug: {
      testUrl: WORDPRESS_API_URL,
      userAgent: 'IPTV Satlink-Portal/1.0',
      timestamp: new Date().toISOString()
    }
  })
}
