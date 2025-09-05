import { Metadata } from 'next'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import WordPressStatusChecker from '../../components/WordPressStatusChecker'
import { Settings, Database, Globe, Code } from 'lucide-react'

export const metadata: Metadata = {
  title: 'WordPress Integration Test - IPTV Satlink',
  description: 'Test WordPress blog integration for IPTV Satlink website',
  robots: {
    index: false,
    follow: false,
  }
}

export default function WordPressTestPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-12 sm:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            WordPress <span className="text-blue-300">Integration Test</span>
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto">
            Test and troubleshoot the connection between your main website and WordPress blog
          </p>
        </div>
      </section>

      {/* Status Checker */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <WordPressStatusChecker />
        </div>
      </section>

      {/* Setup Instructions */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 text-center">
              WordPress Setup Instructions
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* Domain Setup */}
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Globe className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-bold text-gray-800">1. Domain Setup</h3>
                </div>
                <div className="space-y-3 text-sm text-gray-700">
                  <p>✅ Domain: <code className="bg-white px-2 py-1 rounded">blog.iptvsatlink.com</code></p>
                  <p>✅ SSL Certificate required (HTTPS)</p>
                  <p>✅ DNS should point to your hosting provider</p>
                  <p>⏱️ DNS propagation can take 24-48 hours</p>
                </div>
              </div>

              {/* WordPress Installation */}
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Database className="w-6 h-6 text-green-600" />
                  <h3 className="text-xl font-bold text-gray-800">2. WordPress Install</h3>
                </div>
                <div className="space-y-3 text-sm text-gray-700">
                  <p>✅ Install WordPress on subdomain</p>
                  <p>✅ Use latest WordPress version</p>
                  <p>✅ REST API enabled by default</p>
                  <p>✅ No special plugins required</p>
                </div>
              </div>

              {/* API Configuration */}
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Code className="w-6 h-6 text-purple-600" />
                  <h3 className="text-xl font-bold text-gray-800">3. API Access</h3>
                </div>
                <div className="space-y-3 text-sm text-gray-700">
                  <p>✅ REST API URL: <br/><code className="text-xs bg-white px-2 py-1 rounded block mt-1">blog.iptvsatlink.com/wp-json/wp/v2</code></p>
                  <p>✅ No authentication needed for public posts</p>
                  <p>✅ CORS should allow your main domain</p>
                </div>
              </div>

              {/* Testing */}
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Settings className="w-6 h-6 text-orange-600" />
                  <h3 className="text-xl font-bold text-gray-800">4. Testing</h3>
                </div>
                <div className="space-y-3 text-sm text-gray-700">
                  <p>✅ Use status checker above</p>
                  <p>✅ Test API endpoints manually</p>
                  <p>✅ Check CORS headers</p>
                  <p>✅ Verify SSL certificate</p>
                </div>
              </div>
            </div>

            {/* Manual Test Links */}
            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Manual API Tests</h3>
              <div className="space-y-2 text-sm">
                <p>Test these URLs in your browser:</p>
                <div className="space-y-1 font-mono text-xs bg-white p-3 rounded">
                  <p>🌐 <a href="https://blog.iptvsatlink.com" target="_blank" className="text-blue-600 hover:underline">https://blog.iptvsatlink.com</a></p>
                  <p>🔧 <a href="https://blog.iptvsatlink.com/wp-json/wp/v2" target="_blank" className="text-blue-600 hover:underline">https://blog.iptvsatlink.com/wp-json/wp/v2</a></p>
                  <p>📝 <a href="https://blog.iptvsatlink.com/wp-json/wp/v2/posts" target="_blank" className="text-blue-600 hover:underline">https://blog.iptvsatlink.com/wp-json/wp/v2/posts</a></p>
                </div>
              </div>
            </div>

            {/* Troubleshooting */}
            <div className="mt-8 p-6 bg-yellow-50 rounded-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Common Issues & Solutions</h3>
              <div className="space-y-4 text-sm text-gray-700">
                <div>
                  <h4 className="font-semibold text-red-600">❌ Domain not accessible</h4>
                  <p>• Check DNS settings and domain propagation</p>
                  <p>• Verify hosting is active and configured</p>
                  <p>• Ensure SSL certificate is installed</p>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-600">⚠️ WordPress not found</h4>
                  <p>• Install WordPress on the subdomain</p>
                  <p>• Check file permissions and .htaccess</p>
                  <p>• Verify database connection</p>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-600">🔧 REST API not working</h4>
                  <p>• Update WordPress to latest version</p>
                  <p>• Check permalink settings (use /%postname%/)</p>
                  <p>• Disable conflicting plugins</p>
                  <p>• Check .htaccess for REST API blocks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
