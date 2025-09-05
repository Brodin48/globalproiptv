import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aroma IPTV Subscription - 12 Months Premium Package | IPTV Satlink Compatible',
  description: 'Get Aroma IPTV 12-month subscription with premium channels, HD/4K quality, and full IPTV Satlink compatibility. Best entertainment package available.',
  keywords: 'Aroma IPTV, 12 month subscription, premium IPTV, IPTV Satlink compatible, HD streaming, entertainment package',
}

export default function AromaIPTVPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-pink-600 to-rose-600 px-8 py-12 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              Aroma IPTV Premium
            </h1>
            <p className="text-xl text-pink-100 mb-6">
              12-Month Subscription • Premium Entertainment • Aromatic Experience
            </p>
            <div className="flex justify-center space-x-4 text-pink-100">
              <div className="flex items-center">
                <span className="text-2xl mr-2">🌸</span>
                <span>Premium Quality</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-2">📺</span>
                <span>25K+ Channels</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-2">⏰</span>
                <span>12 Months</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Overview */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Aroma IPTV Premium Experience</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Immerse yourself in the aromatic world of premium entertainment with Aroma IPTV. 
                Our 12-month subscription delivers a carefully curated selection of channels and 
                content, providing a delightful streaming experience that captivates your senses.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-pink-100 rounded-full p-2">
                    <span className="text-pink-600 text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Full Year Access</h3>
                    <p className="text-gray-600 text-sm">12 months of uninterrupted premium entertainment</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-pink-100 rounded-full p-2">
                    <span className="text-pink-600 text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Curated Content</h3>
                    <p className="text-gray-600 text-sm">Handpicked channels for the best viewing experience</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-pink-100 rounded-full p-2">
                    <span className="text-pink-600 text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Premium Support</h3>
                    <p className="text-gray-600 text-sm">Dedicated customer service for Aroma subscribers</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Package Highlights</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-xl">🎭</span>
                  </div>
                  <p className="text-sm font-medium text-gray-700">Entertainment</p>
                </div>

                <div className="text-center">
                  <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-xl">🎬</span>
                  </div>
                  <p className="text-sm font-medium text-gray-700">Movies</p>
                </div>

                <div className="text-center">
                  <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-xl">🏆</span>
                  </div>
                  <p className="text-sm font-medium text-gray-700">Sports</p>
                </div>

                <div className="text-center">
                  <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-xl">📰</span>
                  </div>
                  <p className="text-sm font-medium text-gray-700">News</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Channel Categories */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Content Categories</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-4 border-2 border-pink-100 rounded-lg hover:border-pink-300 transition-colors">
              <div className="text-3xl mb-2">🎪</div>
              <h4 className="font-semibold text-gray-800 mb-1">Entertainment</h4>
              <p className="text-sm text-gray-600">1,500+ channels</p>
            </div>

            <div className="text-center p-4 border-2 border-pink-100 rounded-lg hover:border-pink-300 transition-colors">
              <div className="text-3xl mb-2">🎥</div>
              <h4 className="font-semibold text-gray-800 mb-1">Movies & Series</h4>
              <p className="text-sm text-gray-600">15,000+ titles</p>
            </div>

            <div className="text-center p-4 border-2 border-pink-100 rounded-lg hover:border-pink-300 transition-colors">
              <div className="text-3xl mb-2">⚽</div>
              <h4 className="font-semibold text-gray-800 mb-1">Sports</h4>
              <p className="text-sm text-gray-600">500+ channels</p>
            </div>

            <div className="text-center p-4 border-2 border-pink-100 rounded-lg hover:border-pink-300 transition-colors">
              <div className="text-3xl mb-2">👶</div>
              <h4 className="font-semibold text-gray-800 mb-1">Kids & Family</h4>
              <p className="text-sm text-gray-600">200+ channels</p>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Exclusive Aroma Pricing</h3>
            <div className="flex items-center justify-center space-x-4 mb-6">
              <span className="text-gray-400 line-through text-xl">$180.00</span>
              <span className="text-4xl font-bold text-pink-600">$79.99</span>
              <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm font-semibold">Save 56%</span>
            </div>
            <p className="text-gray-600 mb-6">12-month premium subscription • Single device • Aroma exclusive content</p>
            
            <a 
              href="https://wa.link/byh2yk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-pink-600 to-rose-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-pink-700 hover:to-rose-700 transition-all transform hover:scale-105 inline-flex items-center"
            >
              <span className="text-2xl mr-2">🌸</span>
              Get Aroma IPTV
            </a>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🌺</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Aromatic Experience</h3>
            <p className="text-gray-600 text-sm">Carefully crafted channel lineup for a delightful viewing experience</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">💎</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Premium Quality</h3>
            <p className="text-gray-600 text-sm">HD and 4K streaming with superior image quality</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Easy Setup</h3>
            <p className="text-gray-600 text-sm">Simple installation process with instant activation</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-pink-600 to-rose-600 rounded-xl shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Discover the Aroma Difference
          </h2>
          <p className="text-pink-100 mb-6 max-w-2xl mx-auto">
            Experience entertainment like never before with Aroma IPTV's carefully curated content 
            and premium streaming quality. Join our satisfied subscribers today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.link/byh2yk" 
              className="bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Subscribe Now - $79.99
            </a>
            <a 
              href="/contact" 
              className="bg-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-400 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}
