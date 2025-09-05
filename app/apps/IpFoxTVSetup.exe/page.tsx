import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Download IpFoxTV Setup | Windows IPTV Player | IPTV Satlink Compatible',
  description: 'Download IpFoxTV Setup for Windows. Professional IPTV player fully compatible with IPTV Satlink services. Free download with setup guide.',
  keywords: 'IpFoxTV download, Windows IPTV player, IPTV Satlink compatible, IPTV software, streaming player',
  openGraph: {
    title: 'Download IpFoxTV Setup | Windows IPTV Player',
    description: 'Professional IPTV player for Windows. Download IpFoxTV Setup and enjoy IPTV Satlink on your PC.',
    url: 'https://iptvsatlink.com/apps/IpFoxTVSetup.exe',
    type: 'website',
  },
}

export default function IpFoxTVSetupPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-12 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              IpFoxTV Setup
            </h1>
            <p className="text-xl text-green-100 mb-6">
              Professional Windows IPTV Player - IPTV Satlink Compatible
            </p>
            <div className="flex justify-center space-x-4 text-green-100">
              <div className="flex items-center">
                <span className="text-2xl mr-2">🖥️</span>
                <span>Windows PC</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-2">🦊</span>
                <span>IpFoxTV Player</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-2">⚡</span>
                <span>Easy Setup</span>
              </div>
            </div>
          </div>
        </div>

        {/* Download Section */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Download IpFoxTV Setup</h2>
              
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg mb-6">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">📥</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">IpFoxTVSetup.exe</h3>
                    <p className="text-gray-600">Version 2.1.0 • 45.2 MB • Windows 10/11</p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="#"
                    className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center"
                  >
                    <span className="mr-2">⬇️</span>
                    Download Now
                  </a>
                  <button className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
                    View System Requirements
                  </button>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">✅ What's Included</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• IpFoxTV Player Application</li>
                    <li>• IPTV Satlink Configuration Wizard</li>
                    <li>• Automatic Codec Installation</li>
                    <li>• User Manual & Quick Start Guide</li>
                    <li>• Free Technical Support</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">🎯 Key Features</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• 4K/HD Streaming Support</li>
                    <li>• EPG (Electronic Program Guide)</li>
                    <li>• Multi-Language Interface</li>
                    <li>• Parental Control Options</li>
                    <li>• Recording & Playback</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400">
                <h4 className="font-semibold text-yellow-800 mb-2">🔒 Security Notice</h4>
                <p className="text-yellow-700 text-sm">
                  This download is digitally signed and verified safe. Your antivirus may show a warning 
                  for new software - this is normal. Always download from official sources only.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">System Requirements</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <strong className="text-gray-800">Operating System:</strong>
                  <p className="text-gray-600">Windows 10/11 (64-bit)</p>
                </div>
                <div>
                  <strong className="text-gray-800">Processor:</strong>
                  <p className="text-gray-600">Intel i3 or AMD equivalent</p>
                </div>
                <div>
                  <strong className="text-gray-800">Memory:</strong>
                  <p className="text-gray-600">4 GB RAM minimum</p>
                </div>
                <div>
                  <strong className="text-gray-800">Storage:</strong>
                  <p className="text-gray-600">200 MB free space</p>
                </div>
                <div>
                  <strong className="text-gray-800">Network:</strong>
                  <p className="text-gray-600">Broadband internet connection</p>
                </div>
                <div>
                  <strong className="text-gray-800">Graphics:</strong>
                  <p className="text-gray-600">DirectX 11 compatible</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Need IPTV Satlink Service?</h3>
              <p className="text-gray-600 mb-4 text-sm">
                IpFoxTV works best with IPTV Satlink premium services. Get access to thousands of channels.
              </p>
              <a 
                href="/pricing" 
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-block w-full text-center"
              >
                View IPTV Plans
              </a>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Download IpFoxTV?
          </h2>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            Get the best Windows IPTV experience with IpFoxTV. Download now and enjoy 
            premium streaming with your IPTV Satlink subscription.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Download IpFoxTV Setup
            </a>
            <a 
              href="/pricing" 
              className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-400 transition-colors"
            >
              Get IPTV Satlink Service
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}