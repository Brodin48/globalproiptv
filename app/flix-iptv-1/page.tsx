import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Flix IPTV Pro Version | Advanced IPTV Player Features | IPTV Satlink Compatible',
  description: 'Flix IPTV Pro - Enhanced version with premium features. Advanced EPG, recording, multi-screen support. Perfect for IPTV Satlink services.',
  keywords: 'Flix IPTV Pro, advanced IPTV player, premium features, IPTV Satlink, EPG, recording, multi-screen',
  openGraph: {
    title: 'Flix IPTV Pro | Advanced IPTV Streaming Solution',
    description: 'Professional IPTV player with advanced features for power users. Enhanced IPTV Satlink compatibility.',
    url: 'https://iptvsatlink.com/flix-iptv-1',
    type: 'article',
  },
}

export default function FlixIPTVProPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-12 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              Flix IPTV Pro
            </h1>
            <p className="text-xl text-indigo-100 mb-6">
              Advanced IPTV Player • Premium Features • Professional Grade
            </p>
            <div className="flex justify-center space-x-4 text-indigo-100">
              <div className="flex items-center">
                <span className="text-2xl mr-2">⭐</span>
                <span>Pro Features</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-2">🔧</span>
                <span>Advanced Tools</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-2">🚀</span>
                <span>Enhanced Performance</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pro Features Overview */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Flix IPTV Pro Features</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Flix IPTV Pro is the enhanced version designed for power users and professionals. 
                With advanced features, superior performance, and extensive customization options, 
                it's the ultimate IPTV solution for demanding users.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-indigo-100 rounded-full p-2">
                    <span className="text-indigo-600 text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Advanced EPG</h3>
                    <p className="text-gray-600 text-sm">Enhanced program guide with detailed info and images</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-indigo-100 rounded-full p-2">
                    <span className="text-indigo-600 text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Recording Capabilities</h3>
                    <p className="text-gray-600 text-sm">Record live TV and schedule recordings</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-indigo-100 rounded-full p-2">
                    <span className="text-indigo-600 text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Multi-Screen Support</h3>
                    <p className="text-gray-600 text-sm">Picture-in-picture and multi-window viewing</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Pro Advantages</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-xl">📊</span>
                  </div>
                  <p className="text-sm font-medium text-gray-700">Analytics</p>
                </div>

                <div className="text-center">
                  <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-xl">🎮</span>
                  </div>
                  <p className="text-sm font-medium text-gray-700">Custom UI</p>
                </div>

                <div className="text-center">
                  <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-xl">⚙️</span>
                  </div>
                  <p className="text-sm font-medium text-gray-700">Advanced Settings</p>
                </div>

                <div className="text-center">
                  <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-xl">🔒</span>
                  </div>
                  <p className="text-sm font-medium text-gray-700">Enhanced Security</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Comparison */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Pro vs Standard Comparison</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Feature</th>
                  <th className="text-center py-3 px-4">Standard</th>
                  <th className="text-center py-3 px-4 bg-indigo-50">Pro</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3 px-4">Basic Streaming</td>
                  <td className="text-center py-3 px-4">✓</td>
                  <td className="text-center py-3 px-4 bg-indigo-50">✓</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4">EPG Support</td>
                  <td className="text-center py-3 px-4">Basic</td>
                  <td className="text-center py-3 px-4 bg-indigo-50">Advanced</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4">Recording</td>
                  <td className="text-center py-3 px-4">✗</td>
                  <td className="text-center py-3 px-4 bg-indigo-50">✓</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4">Multi-Screen</td>
                  <td className="text-center py-3 px-4">✗</td>
                  <td className="text-center py-3 px-4 bg-indigo-50">✓</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4">Custom Themes</td>
                  <td className="text-center py-3 px-4">Limited</td>
                  <td className="text-center py-3 px-4 bg-indigo-50">Unlimited</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Upgrade to Flix IPTV Pro
          </h2>
          <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
            Experience the most advanced IPTV player with professional features. 
            Perfect for power users who demand the best streaming experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.link/byh2yk" 
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Download Pro Version
            </a>
            <a 
              href="/contact" 
              className="bg-indigo-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-400 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}
