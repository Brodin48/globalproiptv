import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Flix IPTV Player | Best IPTV App for Smart TV & Mobile | IPTV Satlink Compatible',
  description: 'Download Flix IPTV player - the ultimate IPTV app for Smart TV, Android, iOS. Fully compatible with IPTV Satlink services. Free download, premium features.',
  keywords: 'Flix IPTV, IPTV player, Smart TV app, Android IPTV, iOS IPTV, IPTV Satlink compatible, IPTV streaming app',
  openGraph: {
    title: 'Flix IPTV Player | Ultimate IPTV Streaming App',
    description: 'Professional IPTV player with advanced features. Compatible with all IPTV Satlink services and major platforms.',
    url: 'https://iptvsatlink.com/flix-iptv',
    type: 'article',
  },
}

export default function FlixIPTVPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-12 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              Flix IPTV Player
            </h1>
            <p className="text-xl text-purple-100 mb-6">
              Ultimate IPTV Streaming Experience • All Devices • IPTV Satlink Compatible
            </p>
            <div className="flex justify-center space-x-4 text-purple-100">
              <div className="flex items-center">
                <span className="text-2xl mr-2">🎬</span>
                <span>Premium Player</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-2">📱</span>
                <span>All Platforms</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-2">⚡</span>
                <span>Fast & Reliable</span>
              </div>
            </div>
          </div>
        </div>

        {/* What is Flix IPTV Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What is Flix IPTV Player?</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Flix IPTV Player is a cutting-edge IPTV application that transforms your viewing experience 
                across all devices. With seamless IPTV Satlink integration and advanced streaming capabilities, 
                it's the perfect solution for modern entertainment needs.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-purple-100 rounded-full p-2">
                    <span className="text-purple-600 text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Smart TV Optimized</h3>
                    <p className="text-gray-600 text-sm">Perfect interface for large screens and remote control</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-purple-100 rounded-full p-2">
                    <span className="text-purple-600 text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Advanced Features</h3>
                    <p className="text-gray-600 text-sm">EPG, catch-up TV, favorites, parental controls</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-purple-100 rounded-full p-2">
                    <span className="text-purple-600 text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">IPTV Satlink Ready</h3>
                    <p className="text-gray-600 text-sm">Full compatibility with IPTV Satlink services</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Supported Platforms</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-xl">📺</span>
                  </div>
                  <p className="text-sm font-medium text-gray-700">Smart TV</p>
                </div>

                <div className="text-center">
                  <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-xl">📱</span>
                  </div>
                  <p className="text-sm font-medium text-gray-700">Android</p>
                </div>

                <div className="text-center">
                  <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-xl">🍎</span>
                  </div>
                  <p className="text-sm font-medium text-gray-700">iOS</p>
                </div>

                <div className="text-center">
                  <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-xl">💻</span>
                  </div>
                  <p className="text-sm font-medium text-gray-700">PC/Mac</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Easy Setup</h3>
            <p className="text-gray-600 text-sm">Quick installation and automatic IPTV Satlink configuration</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">4K Streaming</h3>
            <p className="text-gray-600 text-sm">Ultra HD quality with adaptive bitrate streaming</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📖</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">EPG Guide</h3>
            <p className="text-gray-600 text-sm">Electronic program guide with 7-day schedule</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">⏪</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Catch-Up TV</h3>
            <p className="text-gray-600 text-sm">Watch shows from the past 7 days</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">⭐</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Favorites</h3>
            <p className="text-gray-600 text-sm">Create custom channel lists and organize content</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🔒</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Parental Control</h3>
            <p className="text-gray-600 text-sm">Safe viewing environment for the whole family</p>
          </div>
        </div>

        {/* Download Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Download Flix IPTV Player</h3>
            <p className="text-gray-600 mb-8">Available for all major platforms. Choose your device below:</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <a 
                href="https://wa.link/byh2yk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-xl hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-105"
              >
                <div className="text-3xl mb-2">📱</div>
                <div className="font-semibold">Android</div>
                <div className="text-xs opacity-90">APK Download</div>
              </a>

              <a 
                href="https://wa.link/byh2yk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all transform hover:scale-105"
              >
                <div className="text-3xl mb-2">🍎</div>
                <div className="font-semibold">iOS</div>
                <div className="text-xs opacity-90">App Store</div>
              </a>

              <a 
                href="https://wa.link/byh2yk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-xl hover:from-purple-600 hover:to-purple-700 transition-all transform hover:scale-105"
              >
                <div className="text-3xl mb-2">📺</div>
                <div className="font-semibold">Smart TV</div>
                <div className="text-xs opacity-90">Android TV</div>
              </a>

              <a 
                href="https://wa.link/byh2yk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-gray-500 to-gray-600 text-white p-6 rounded-xl hover:from-gray-600 hover:to-gray-700 transition-all transform hover:scale-105"
              >
                <div className="text-3xl mb-2">💻</div>
                <div className="font-semibold">PC/Mac</div>
                <div className="text-xs opacity-90">Desktop App</div>
              </a>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Experience Flix IPTV?
          </h2>
          <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
            Download Flix IPTV Player today and transform your streaming experience. 
            Compatible with all IPTV Satlink services and optimized for your devices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/pricing" 
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get IPTV Satlink Service
            </a>
            <a 
              href="/contact" 
              className="bg-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 transition-colors"
            >
              Download Guide
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}
