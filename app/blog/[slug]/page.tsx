import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import { Calendar, User, ArrowLeft, Tag } from 'lucide-react'
import { getWordPressPost, formatDate, extractPlainText } from '../../../lib/wordpress-theiptv'
import { getPostBySlug, getAllPosts, formatDate as staticFormatDate } from '../../../lib/blog-data/posts'

interface BlogPostPageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  // Try WordPress first, then static
  let post
  let isWordPress = false
  
  try {
    post = await getWordPressPost(params.slug)
    if (post) {
      isWordPress = true
    }
  } catch (error) {
    console.log('WordPress fetch failed for metadata, trying static')
  }
  
  if (!post) {
    post = getPostBySlug(params.slug)
  }

  if (!post) {
    return {
      title: 'Post Not Found - IPTV Satlink Blog',
    }
  }

  const title = isWordPress ? (post.title as any)?.rendered : post.title
  const description = isWordPress 
    ? ((post.excerpt as any)?.rendered ? extractPlainText((post.excerpt as any).rendered, 160) : '')
    : (post.excerpt as string)

  return {
    title: `${title} - IPTV Satlink Blog`,
    description: description,
    keywords: ((post as any).tags || []).join(', ') + ', IPTV Satlink, IPTV streaming',
  }
}

export async function generateStaticParams() {
  // Generate paths from static posts and potentially WordPress
  const staticPosts = getAllPosts()
  return staticPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPost({ params }: BlogPostPageProps) {
  let post
  let isWordPress = false
  
  // Try to fetch from WordPress first
  try {
    console.log(`Attempting to fetch post ${params.slug} from WordPress...`)
    const wpPost = await getWordPressPost(params.slug)
    if (wpPost) {
      post = wpPost
      isWordPress = true
      console.log('✅ Successfully fetched from WordPress')
    }
  } catch (error) {
    console.log('❌ WordPress fetch failed:', error)
  }
  
  // Fallback to static content
  if (!post) {
    console.log('Using static content for post')
    post = getPostBySlug(params.slug)
  }

  if (!post) {
    notFound()
  }

  // Handle both WordPress and static post formats
  const title = isWordPress ? (post.title as any)?.rendered : post.title
  const content = isWordPress ? (post.content as any)?.rendered : post.content
  const excerpt = isWordPress 
    ? ((post.excerpt as any)?.rendered ? extractPlainText((post.excerpt as any).rendered, 200) : '')
    : post.excerpt
  const author = isWordPress 
    ? (post as any)._embedded?.author?.[0]?.name || 'IPTV Satlink Team'
    : (post as any).author
  const publishDate = isWordPress 
    ? formatDate((post as any).date)
    : staticFormatDate((post as any).date)
  const featuredImage = isWordPress 
    ? post._embedded?.['wp:featuredmedia']?.[0]?.source_url
    : post.image
  const tags = isWordPress 
    ? post._embedded?.['wp:term']?.[1] || [] // WordPress tags
    : post.tags || []
  const category = isWordPress 
    ? post._embedded?.['wp:term']?.[0]?.[0]?.name || 'Uncategorized'
    : post.category

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Article Header */}
      <article className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back to Blog */}
          <div className="mb-6 sm:mb-8">
            <a
              href="/blog"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors text-sm sm:text-base font-medium"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </a>
          </div>

          {/* Data source indicator */}
          <div className="mb-6">
            <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
              isWordPress 
                ? 'bg-green-100 text-green-800' 
                : 'bg-blue-100 text-blue-800'
            }`}>
              {isWordPress ? '📡 Live from WordPress' : '📄 Static Content'}
            </span>
          </div>

          {/* Featured Image */}
          {featuredImage && (
            <div className="relative h-64 sm:h-80 lg:h-96 mb-6 sm:mb-8 rounded-2xl overflow-hidden">
              <img
                src={featuredImage}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Article Meta */}
          <div className="mb-6 sm:mb-8">
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{publishDate}</span>
              </div>
              <div className="flex items-center space-x-1">
                <User className="w-4 h-4" />
                <span>{author}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Tag className="w-4 h-4" />
                <span>{category}</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {title}
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              {excerpt}
            </p>
          </div>

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-primary-600 prose-a:hover:text-primary-700 prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700"
            dangerouslySetInnerHTML={{ __html: content }}
          />

          {/* Tags */}
          {tags.length > 0 && (
            <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => {
                  const tagName = isWordPress ? tag.name : tag
                  return (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                    >
                      {tagName}
                    </span>
                  )
                })}
              </div>
            </div>
          )}

          {/* CTA Section */}
          <div className="mt-12 sm:mt-16 p-6 sm:p-8 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl text-white text-center">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Ready to Experience IPTV Satlink?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join thousands of satisfied customers streaming 25,000+ channels
            </p>
            <a 
              href="https://wa.link/byh2yk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}