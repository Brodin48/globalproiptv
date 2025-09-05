import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ibo player pro setup on android devices - Global Pro IPTV',
  description: 'Setup guide for Global Pro IPTV on various devices. Stream 25,000+ channels.',
  keywords: 'Global Pro IPTV setup, IPTV guide, streaming setup'
}

export default function SetupGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-800 via-dark-900 to-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary-500 mb-6">
            ibo player pro setup on android devices - Global Pro IPTV
          </h1>
          
          <div className="bg-white/10 backdrop-blur-sm border border-primary-500/20 rounded-xl p-8">
            <p className="text-gray-300 mb-6">
              Complete setup guide for Global Pro IPTV. Stream 25,000+ channels and 26,000+ movies.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary-500">Setup Instructions</h3>
              <ol className="space-y-2 text-gray-300">
                <li>1. Download the appropriate IPTV app</li>
                <li>2. Configure with Global Pro IPTV credentials</li>
                <li>3. Start streaming your favorite content</li>
              </ol>
            </div>
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
