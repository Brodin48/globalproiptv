import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Falcon IPTV Subscription - 12 Months Premium Plan | 2 Devices Support',
  description: 'Get Falcon IPTV 12-month subscription supporting 2 devices. Premium IPTV service with 25,000+ channels, HD/4K streaming, and 24/7 support.',
  keywords: 'Falcon IPTV, 12 month subscription, 2 devices, premium IPTV, IPTV Satlink compatible, HD streaming, 4K channels',
}

export default function FalconIPTVPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-red-600 to-orange-600 px-8 py-12 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              Falcon IPTV Premium
            </h1>
            <p className="text-xl text-red-100 mb-6">
              12-Month Subscription • 2 Devices Support • Premium Quality
            </p>
            <div className="flex justify-center space-x-4 text-red-100">
              <div className="flex items-center">
                <span className="text-2xl mr-2">🦅</span>
                <span>Falcon Speed</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-2">📱</span>
                <span>2 Devices</span>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Falcon IPTV Premium Subscription</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Experience premium entertainment with Falcon IPTV's 12-month subscription. Designed for families 
                and multi-device users, this package supports 2 simultaneous connections with lightning-fast 
                streaming and crystal-clear quality.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-red-100 rounded-full p-2">
                    <span className="text-red-600 text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">12-Month Access</h3>
                    <p className="text-gray-600 text-sm">Full year of premium entertainment</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-red-100 rounded-full p-2">
                    <span className="text-red-600 text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Dual Device Support</h3>
                    <p className="text-gray-600 text-sm">Watch on 2 devices simultaneously</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-red-100 rounded-full p-2">
                    <span className="text-red-600 text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Premium Quality</h3>
                    <p className="text-gray-600 text-sm">HD & 4K streaming with minimal buffering</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What's Included</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-xl">📺</span>
                  </div>
                  <p className="text-sm font-medium text-gray-700">25,000+ Channels</p>
                </div>

                <div className="text-center">
                  <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-xl">🎬</span>
                  </div>
                  <p className="text-sm font-medium text-gray-700">26,000+ Movies</p>
                </div>

                <div className="text-center">
                  <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-xl">⚡</span>
                  </div>
                  <p className="text-sm font-medium text-gray-700">Fast Servers</p>
                </div>

                <div className="text-center">
                  <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-xl">🛡️</span>
                  </div>
                  <p className="text-sm font-medium text-gray-700">24/7 Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Special Offer</h3>
            <div className="flex items-center justify-center space-x-4 mb-6">
              <span className="text-gray-400 line-through text-xl">$199.99</span>
              <span className="text-4xl font-bold text-red-600">$89.99</span>
              <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">Save 55%</span>
            </div>
            <p className="text-gray-600 mb-6">12-month subscription • 2 devices • Premium support</p>
            
            <a 
              href="https://wa.link/byh2yk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-red-700 hover:to-orange-700 transition-all transform hover:scale-105 inline-flex items-center"
            >
              <span className="text-2xl mr-2">🦅</span>
              Get Falcon IPTV Now
            </a>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Lightning Fast</h3>
            <p className="text-gray-600 text-sm">Optimized servers for minimal buffering and instant channel switching</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🌍</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Global Content</h3>
            <p className="text-gray-600 text-sm">Channels from USA, UK, Canada, Europe, Asia, and more</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📱</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Multi-Device</h3>
            <p className="text-gray-600 text-sm">Compatible with Smart TV, Android, iOS, MAG, and more</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-xl shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Soar with Falcon IPTV?
          </h2>
          <p className="text-red-100 mb-6 max-w-2xl mx-auto">
            Join thousands of satisfied customers enjoying premium entertainment with Falcon IPTV. 
            Get instant access to 25,000+ channels and start watching today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.link/byh2yk" 
              className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Order Now - $89.99
            </a>
            <a 
              href="/contact" 
              className="bg-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-400 transition-colors"
            >
              Need Help?
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}
