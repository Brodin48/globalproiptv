import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bob IPTV Premium 12 Months + 3 Free | Best IPTV Deal | IPTV Satlink Compatible',
  description: 'Bob IPTV Premium package: 12 months + 3 months FREE! Premium channels, 4K quality, multi-device support. Best IPTV deal available.',
  keywords: 'Bob IPTV premium, 12 months free, 3 months bonus, premium IPTV, 4K streaming, multi-device, IPTV Satlink',
}

export default function BobIPTVPremiumPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 px-8 py-12 text-center relative overflow-hidden">
            {/* Animated elements */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-2 left-4 text-white text-2xl animate-bounce">🎉</div>
              <div className="absolute top-4 right-8 text-white text-xl animate-pulse">✨</div>
              <div className="absolute bottom-4 left-8 text-white text-xl animate-bounce delay-100">🎊</div>
              <div className="absolute bottom-2 right-4 text-white text-2xl animate-pulse delay-200">🔥</div>
            </div>
            
            <div className="relative z-10">
              <div className="bg-red-500 text-white px-4 py-2 rounded-full inline-block mb-4 font-bold text-sm animate-pulse">
                🎁 LIMITED TIME OFFER 🎁
              </div>
              <h1 className="text-4xl font-bold text-white mb-4">
                Bob IPTV Premium
              </h1>
              <p className="text-xl text-yellow-100 mb-6">
                12 Months + 3 MONTHS FREE • Premium Features • Multi-Device
              </p>
              <div className="flex justify-center space-x-4 text-yellow-100">
                <div className="flex items-center">
                  <span className="text-2xl mr-2">👑</span>
                  <span>Premium Package</span>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-2">🎁</span>
                  <span>3 Months FREE</span>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-2">📱</span>
                  <span>Multi-Device</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Special Offer Banner */}
        <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-xl shadow-lg p-6 mb-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">🔥 EXCLUSIVE DEAL ALERT! 🔥</h2>
          <p className="text-red-100 text-lg">
            Pay for 12 months, get <span className="font-bold text-white">15 MONTHS</span> total access!
          </p>
          <p className="text-red-200 text-sm mt-1">That's 3 months completely FREE - Save $150!</p>
        </div>

        {/* Product Overview */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Bob IPTV Premium Package</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Experience the ultimate in IPTV entertainment with Bob's Premium Package. This exclusive 
                offer includes 12 months of premium access PLUS 3 additional months absolutely FREE, 
                giving you 15 months of premium entertainment for the price of 12!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-yellow-100 rounded-full p-2">
                    <span className="text-yellow-600 text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">15 Months Total Access</h3>
                    <p className="text-gray-600 text-sm">12 months + 3 months FREE bonus</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-yellow-100 rounded-full p-2">
                    <span className="text-yellow-600 text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Premium Features</h3>
                    <p className="text-gray-600 text-sm">4K streaming, EPG, recording, catch-up TV</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-yellow-100 rounded-full p-2">
                    <span className="text-yellow-600 text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Multi-Device Support</h3>
                    <p className="text-gray-600 text-sm">Up to 3 simultaneous connections</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Premium Includes</h3>
              
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
                  <p className="text-sm font-medium text-gray-700">Unlimited VOD</p>
                </div>

                <div className="text-center">
                  <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-xl">⚡</span>
                  </div>
                  <p className="text-sm font-medium text-gray-700">4K Quality</p>
                </div>

                <div className="text-center">
                  <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-xl">👥</span>
                  </div>
                  <p className="text-sm font-medium text-gray-700">3 Devices</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Value Comparison */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Value Breakdown</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 border-2 border-gray-200 rounded-lg">
              <h4 className="text-lg font-bold text-gray-800 mb-2">Regular Price</h4>
              <div className="text-3xl font-bold text-gray-400 line-through mb-2">$299.85</div>
              <p className="text-sm text-gray-600">15 months at regular rate</p>
            </div>

            <div className="text-center p-6 border-2 border-yellow-300 rounded-lg bg-yellow-50 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                BEST DEAL
              </div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">Premium Deal</h4>
              <div className="text-3xl font-bold text-yellow-600 mb-2">$149.99</div>
              <p className="text-sm text-gray-600">12 months + 3 FREE</p>
            </div>

            <div className="text-center p-6 border-2 border-green-300 rounded-lg bg-green-50">
              <h4 className="text-lg font-bold text-gray-800 mb-2">You Save</h4>
              <div className="text-3xl font-bold text-green-600 mb-2">$149.86</div>
              <p className="text-sm text-gray-600">50% total savings!</p>
            </div>
          </div>
        </div>

        {/* Features Comparison */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Premium vs Normal Package</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Feature</th>
                  <th className="text-center py-3 px-4">Normal</th>
                  <th className="text-center py-3 px-4 bg-yellow-50">Premium</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3 px-4">Channels</td>
                  <td className="text-center py-3 px-4">15,000+</td>
                  <td className="text-center py-3 px-4 bg-yellow-50 font-bold">25,000+</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4">Video Quality</td>
                  <td className="text-center py-3 px-4">HD</td>
                  <td className="text-center py-3 px-4 bg-yellow-50 font-bold">4K Ultra HD</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4">Devices</td>
                  <td className="text-center py-3 px-4">1</td>
                  <td className="text-center py-3 px-4 bg-yellow-50 font-bold">3</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4">EPG Guide</td>
                  <td className="text-center py-3 px-4">Basic</td>
                  <td className="text-center py-3 px-4 bg-yellow-50 font-bold">Advanced</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4">Recording</td>
                  <td className="text-center py-3 px-4">✗</td>
                  <td className="text-center py-3 px-4 bg-yellow-50 font-bold">✓</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4">Support</td>
                  <td className="text-center py-3 px-4">Standard</td>
                  <td className="text-center py-3 px-4 bg-yellow-50 font-bold">Priority 24/7</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl shadow-lg p-8 mb-8">
          <div className="text-center text-white">
            <h3 className="text-2xl font-bold mb-4">🎁 Limited Time Premium Deal 🎁</h3>
            <div className="flex items-center justify-center space-x-4 mb-6">
              <span className="text-white/70 line-through text-xl">$299.85</span>
              <span className="text-5xl font-bold">$149.99</span>
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse">Save 50%</span>
            </div>
            <p className="text-yellow-100 mb-6 text-lg">
              15 months total access • 3 devices • Premium features • Priority support
            </p>
            
            <a 
              href="https://wa.link/byh2yk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-orange-600 px-10 py-5 rounded-xl font-bold text-xl hover:bg-gray-100 transition-all transform hover:scale-105 inline-flex items-center shadow-lg"
            >
              <span className="text-2xl mr-3">👑</span>
              Claim Premium Deal Now!
            </a>
            
            <p className="text-yellow-200 text-sm mt-4">⏰ Offer expires soon - Limited time only!</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Don't Miss Bob's Best Deal Ever!
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            This is the best value you'll find anywhere - 15 months of premium IPTV for less than 
            the cost of 8 months. Join thousands of satisfied Bob IPTV premium subscribers!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.link/byh2yk" 
              className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
            >
              Get Premium Now - $149.99
            </a>
            <a 
              href="/contact" 
              className="bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-500 transition-colors"
            >
              Have Questions?
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}
