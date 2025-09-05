import { Metadata } from 'next'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Calendar, User, ArrowRight } from 'lucide-react'
import { getWordPressPosts, formatDate, extractPlainText } from '../../lib/wordpress-theiptv'
import { getAllPosts, formatDate as staticFormatDate } from '../../lib/blog-data/posts'

export const metadata: Metadata = {
  title: 'TheIPTV Blog - Latest IPTV News & Updates',
  description: 'Stay updated with the latest TheIPTV news, tips, and guides.',
  keywords: 'TheIPTV blog, IPTV news, TheIPTV tips, streaming guides'
}

export default async function Blog() {
  // Try to fetch from WordPress first, fallback to static content
  let posts
  let isWordPress = false
  
  try {
    console.log('Attempting to fetch from WordPress API at blog.theiptv.us...')
    const wpPosts = await getWordPressPosts({ per_page: 12 })
    if (wpPosts && wpPosts.length > 0) {
      posts = wpPosts
      isWordPress = true
      console.log(`✅ Successfully fetched ${wpPosts.length} posts from WordPress`)
    } else {
      console.log('⚠️ WordPress returned no posts, using static content')
      posts = getAllPosts()
    }
  } catch (error) {
    console.log('❌ WordPress fetch failed, using static content:', error)
    posts = getAllPosts()
  }

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            TheIPTV <span className="text-blue-300">Blog</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-xs sm:max-w-2xl lg:max-w-4xl mx-auto leading-relaxed">
            Stay informed with the latest TheIPTV news, streaming guides, and 
            entertainment technology updates from our expert team.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          {posts && posts.length > 0 ? (
            <>
              {/* Show data source indicator */}
              <div className="mb-6 text-center">
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                  isWordPress 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {isWordPress ? '📡 Live from WordPress' : '📄 Static Content (Fallback)'}
                </span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {posts.map((post) => {
                  // Handle both WordPress and static post formats
                  const featuredImage = isWordPress 
                    ? post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/images/myiptv-logo.svg'
                    : post.image || '/images/myiptv-logo.svg'
                  const author = isWordPress 
                    ? post._embedded?.author?.[0]?.name || 'MyIPTV Team'
                    : post.author || 'MyIPTV Team'
                  const publishDate = isWordPress 
                    ? formatDate(post.date)
                    : staticFormatDate(post.date)
                  const title = isWordPress 
                    ? post.title.rendered 
                    : post.title
                  const excerpt = isWordPress 
                    ? extractPlainText(post.excerpt.rendered, 120)
                    : post.excerpt

                  return (
                    <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                      {featuredImage && (
                        <div className="relative h-40 sm:h-48 overflow-hidden">
                          <img
                            src={featuredImage}
                            alt={title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      
                      <div className="p-4 sm:p-6">
                        <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span>{publishDate}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <User className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span className="truncate">{author}</span>
                          </div>
                        </div>
                        
                        <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 line-clamp-2 leading-tight">
                          {title}
                        </h2>
                        
                        <div className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-3">
                          {excerpt}
                        </div>
                        
                        <a
                          href={`/blog/${post.slug}`}
                          className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors text-sm sm:text-base"
                        >
                          Read More
                          <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                        </a>
                      </div>
                    </article>
                  )
                })}
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
                Blog Posts Coming Soon
              </h2>
              <p className="text-gray-600 max-w-xs sm:max-w-2xl mx-auto text-sm sm:text-base">
                We're working on bringing you the latest MyIPTV news, guides, and updates. 
                Check back soon for exciting content about streaming technology and entertainment.
              </p>
              <div className="mt-6">
                <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                  ⚠️ WordPress API not accessible - Check blog.myiptv.io
                </span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
            Stay Updated with MyIPTV News
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-xs sm:max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            Get the latest updates about MyIPTV services, streaming technology, 
            and exclusive offers.
          </p>
          <a 
            href="https://wa.link/byh2yk" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-primary-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-primary-700 transition-colors inline-block"
          >
            Contact for Updates
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}