import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IBO IPTV Player | Best IPTV App for All Devices | IPTV Satlink Compatible',
  description: 'Download IBO IPTV player for Android, iOS, Smart TV and more. Fully compatible with IPTV Satlink services. Easy setup, 4K streaming, EPG support.',
  keywords: 'IBO IPTV, IPTV player, Android IPTV app, iOS IPTV, Smart TV IPTV, IPTV Satlink compatible, EPG support',
  openGraph: {
    title: 'IBO IPTV Player | Best IPTV App for All Devices',
    description: 'Professional IPTV player with full IPTV Satlink compatibility. Download for all devices and start streaming today!',
    url: 'https://iptvsatlink.com/ibo-iptv',
    type: 'article',
  },
}

export default function IBOIPTVPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 px-8 py-12 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              IBO IPTV Player
            </h1>
            <p className="text-xl text-green-100 mb-6">
              Professional IPTV Player - Fully Compatible with IPTV Satlink Services
            </p>
            <div className="flex justify-center space-x-4 text-green-100">
              <div className="flex items-center">
                <span className="text-2xl mr-2">📱</span>
                <span>All Devices</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-2">🎯</span>
                <span>IPTV Satlink Compatible</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-2">🚀</span>
                <span>Easy Setup</span>
              </div>
            </div>
          </div>
        </div>

        {/* What is IBO IPTV Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What is IBO IPTV Player?</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                IBO IPTV Player is a powerful, user-friendly IPTV application designed to provide 
                the best streaming experience across all devices. It's the perfect companion for 
                your IPTV Satlink subscription, offering seamless integration and premium features.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 rounded-full p-2">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Universal Compatibility</h3>
                    <p className="text-gray-600 text-sm">Works on Android, iOS, Smart TVs, and more</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 rounded-full p-2">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">IPTV Satlink Integration</h3>
                    <p className="text-gray-600 text-sm">Optimized for IPTV Satlink services and content</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 rounded-full p-2">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Advanced Features</h3>
                    <p className="text-gray-600 text-sm">EPG support, catch-up TV, recording capabilities</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-xl">🎬</span>
                  </div>
                  <p className="text-sm font-medium text-gray-700">VOD Support</p>
                </div>

                <div className="text-center">
                  <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-xl">📺</span>
                  </div>
                  <p className="text-sm font-medium text-gray-700">Live TV</p>
                </div>

                <div className="text-center">
                  <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-xl">⚡</span>
                  </div>
                  <p className="text-sm font-medium text-gray-700">4K Streaming</p>
                </div>

                <div className="text-center">
                  <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-xl">📖</span>
                  </div>
                  <p className="text-sm font-medium text-gray-700">EPG Guide</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Experience Premium IPTV?
          </h2>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            Download IBO IPTV Player today and enjoy the best streaming experience with your 
            IPTV Satlink subscription. Get started in minutes with our easy setup process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/pricing" 
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get IPTV Satlink
            </a>
            <a 
              href="/contact" 
              className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-400 transition-colors"
            >
              Need Support?
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}