import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IPTV Setup Guide for iOS & Apple TV - Global Pro IPTV',
  description: 'Setup Global Pro IPTV on iPhone, iPad, and Apple TV. Stream 25,000+ channels with GSE Smart IPTV and IPTV Smarters Pro.',
  keywords: 'iOS IPTV, Apple TV IPTV, Global Pro IPTV iOS, iPhone IPTV setup, iPad streaming'
}

export default function iOSSetupGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-800 via-dark-900 to-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary-500 mb-6">
            IPTV Setup Guide for iOS & Apple TV - Global Pro IPTV
          </h1>
          
          <div className="space-y-8">
            <section className="bg-white/10 backdrop-blur-sm border border-primary-500/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-primary-500 mb-4">iPhone/iPad Setup with GSE Smart IPTV</h3>
              <ol className="space-y-4 text-gray-300">
                <li><strong className="text-white">Step 1:</strong> Download GSE Smart IPTV from App Store</li>
                <li><strong className="text-white">Step 2:</strong> Open app and tap "Xtreme Codes API"</li>
                <li><strong className="text-white">Step 3:</strong> Enter Global Pro IPTV credentials</li>
                <li><strong className="text-white">Step 4:</strong> Start streaming on iOS</li>
              </ol>
            </section>

            <section className="bg-white/10 backdrop-blur-sm border border-primary-500/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-primary-500 mb-4">Apple TV Setup</h3>
              <ol className="space-y-4 text-gray-300">
                <li><strong className="text-white">Step 1:</strong> Install IPTV Smarters Pro from Apple TV App Store</li>
                <li><strong className="text-white">Step 2:</strong> Configure with Global Pro IPTV Xtream Codes</li>
                <li><strong className="text-white">Step 3:</strong> Enjoy big screen streaming</li>
              </ol>
            </section>
          </div>

          <div className="mt-12 text-center">
            <a href="https://wa.link/x83rg1" target="_blank" rel="noopener noreferrer" 
               className="cta-primary inline-block">
              Get Support
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
