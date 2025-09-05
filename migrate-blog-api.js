#!/usr/bin/env node

/**
 * IPTV Satlink Blog Migration Script
 * 
 * This script helps you migrate from blog.iptvsatlink.com to blog-sa.iptv.com
 * and provides fallback functionality for seamless operation.
 */

const fs = require('fs').promises
const path = require('path')

const config = {
  OLD_API: 'https://blog.iptvsatlink.com/wp-json/wp/v2',
  NEW_API: 'https://blog-sa.iptv.com/wp-json/wp/v2',
  BACKUP_DIR: './backups',
  LIB_FILE: './lib/wordpress.ts'
}

async function testAPIEndpoint(url, name) {
  console.log(`\n🔍 Testing ${name}: ${url}`)
  
  try {
    const fetch = (await import('node-fetch')).default
    const response = await fetch(`${url}/posts?per_page=1`, {
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'IPTV Satlink-Migration-Script/1.0'
      }
    })
    
    if (response.ok) {
      const data = await response.json()
      console.log(`✅ ${name} is working!`)
      console.log(`   - Status: ${response.status}`)
      console.log(`   - Posts available: ${data.length > 0 ? 'Yes' : 'No'}`)
      if (data.length > 0) {
        console.log(`   - Latest post: "${data[0]?.title?.rendered || 'No title'}"`)
      }
      return { success: true, data }
    } else {
      console.log(`❌ ${name} failed with status: ${response.status}`)
      return { success: false, error: response.status }
    }
  } catch (error) {
    console.log(`❌ ${name} failed with error: ${error.message}`)
    return { success: false, error: error.message }
  }
}

async function backupCurrentConfig() {
  try {
    await fs.mkdir(config.BACKUP_DIR, { recursive: true })
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
    const backupPath = path.join(config.BACKUP_DIR, `wordpress-${timestamp}.ts`)
    
    const currentConfig = await fs.readFile(config.LIB_FILE, 'utf8')
    await fs.writeFile(backupPath, currentConfig)
    
    console.log(`✅ Backup created: ${backupPath}`)
    return backupPath
  } catch (error) {
    console.log(`❌ Backup failed: ${error.message}`)
    return null
  }
}

async function updateWordPressConfig(useNewAPI = true) {
  try {
    const apiUrl = useNewAPI ? config.NEW_API : config.OLD_API
    
    const newConfig = `// WordPress API configuration - Updated ${new Date().toISOString()}
const WORDPRESS_API_URL = '${apiUrl}'

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

// Fetch WordPress posts with error handling and caching
export async function getWordPressPosts(params: {
  per_page?: number
  page?: number
  categories?: string
  search?: string
} = {}): Promise<WordPressPost[]> {
  try {
    const searchParams = new URLSearchParams({
      _embed: 'true',
      per_page: (params.per_page || 12).toString(),
      page: (params.page || 1).toString(),
      ...(params.categories && { categories: params.categories }),
      ...(params.search && { search: params.search }),
    })

    const response = await fetch(
      \`\${WORDPRESS_API_URL}/posts?\${searchParams.toString()}\`,
      {
        next: { revalidate: 3600 }, // Revalidate every hour
        headers: { 
          'Accept': 'application/json',
          'User-Agent': 'IPTV Satlink-Portal/1.0'
        },
      }
    )

    if (!response.ok) {
      console.error(\`WordPress API error: \${response.status} from \${WORDPRESS_API_URL}\`)
      return []
    }

    const posts = await response.json()
    console.log(\`✅ Successfully fetched \${posts.length} posts from \${WORDPRESS_API_URL}\`)
    return posts || []
  } catch (error) {
    console.error('Error fetching WordPress posts:', error)
    return []
  }
}

// Fetch a single WordPress post by slug
export async function getWordPressPost(slug: string): Promise<WordPressPost | null> {
  try {
    const response = await fetch(
      \`\${WORDPRESS_API_URL}/posts?slug=\${slug}&_embed=true\`,
      {
        next: { revalidate: 3600 },
        headers: { 
          'Accept': 'application/json',
          'User-Agent': 'IPTV Satlink-Portal/1.0'
        },
      }
    )

    if (!response.ok) {
      console.error(\`WordPress API error: \${response.status}\`)
      return null
    }

    const posts = await response.json()
    return posts.length > 0 ? posts[0] : null
  } catch (error) {
    console.error('Error fetching WordPress post:', error)
    return null
  }
}

// Fetch WordPress categories
export async function getWordPressCategories(): Promise<WordPressCategory[]> {
  try {
    const response = await fetch(
      \`\${WORDPRESS_API_URL}/categories?per_page=50\`,
      {
        next: { revalidate: 86400 }, // Revalidate daily
        headers: { 
          'Accept': 'application/json',
          'User-Agent': 'IPTV Satlink-Portal/1.0'
        },
      }
    )

    if (!response.ok) {
      console.error(\`WordPress API error: \${response.status}\`)
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
  const text = html.replace(/<[^>]*>/g, '').replace(/\\s+/g, ' ').trim()
  return text.length > maxLength ? text.substring(0, maxLength) + '...' : text
}`

    await fs.writeFile(config.LIB_FILE, newConfig)
    console.log(`✅ WordPress configuration updated to use: ${apiUrl}`)
    return true
  } catch (error) {
    console.log(`❌ Failed to update configuration: ${error.message}`)
    return false
  }
}

async function main() {
  console.log('🚀 IPTV Satlink Blog Migration Script')
  console.log('================================')
  
  // Test both endpoints
  const oldAPIResult = await testAPIEndpoint(config.OLD_API, 'Old API (blog.iptvsatlink.com)')
  const newAPIResult = await testAPIEndpoint(config.NEW_API, 'New API (blog-sa.iptv.com)')
  
  console.log('\n📊 Test Results Summary:')
  console.log(`Old API: ${oldAPIResult.success ? '✅ Working' : '❌ Failed'}`)
  console.log(`New API: ${newAPIResult.success ? '✅ Working' : '❌ Failed'}`)
  
  // Create backup
  console.log('\n💾 Creating backup of current configuration...')
  const backupPath = await backupCurrentConfig()
  
  if (!backupPath) {
    console.log('❌ Could not create backup. Migration aborted.')
    process.exit(1)
  }
  
  // Decide which API to use
  if (newAPIResult.success) {
    console.log('\n🎉 New API is working! Updating configuration...')
    const updated = await updateWordPressConfig(true)
    if (updated) {
      console.log('\n✅ Migration completed successfully!')
      console.log('Your website will now fetch blog posts from blog-sa.iptv.com')
    }
  } else if (oldAPIResult.success) {
    console.log('\n⚠️  New API is not ready yet, keeping old configuration')
    console.log('You can run this script again when the new API is available')
  } else {
    console.log('\n❌ Both APIs are currently unavailable')
    console.log('Please check your internet connection and API endpoints')
  }
  
  console.log('\n📝 Next Steps:')
  console.log('1. Test your website: npm run dev')
  console.log('2. Check the blog page: http://localhost:3000/blog')
  console.log('3. If issues occur, restore backup from:', backupPath)
  console.log('\n🎯 For advanced fallback functionality, consider using:')
  console.log('   lib/wordpress-with-fallback.ts (already created)')
}

// Run the script
main().catch(console.error)