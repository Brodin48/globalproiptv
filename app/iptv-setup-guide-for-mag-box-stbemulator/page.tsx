import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IPTV Setup Guide for MAG Box & STBEmulator - Global Pro IPTV',
  description: 'Setup Global Pro IPTV on MAG Box and STBEmulator. Complete portal configuration guide for seamless streaming.',
  keywords: 'MAG Box IPTV, STBEmulator setup, Global Pro IPTV MAG, portal configuration'
}

export default function MAGBoxSetupGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-800 via-dark-900 to-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary-500 mb-6">
            IPTV Setup Guide for MAG Box & STBEmulator - Global Pro IPTV
          </h1>
          
          <div className="space-y-8">
            <section className="bg-white/10 backdrop-blur-sm border border-primary-500/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-primary-500 mb-4">MAG Box Portal Setup</h3>
              <ol className="space-y-4 text-gray-300">
                <li><strong className="text-white">Step 1:</strong> Go to System Settings > Servers</li>
                <li><strong className="text-white">Step 2:</strong> Enter Portal URL provided by Global Pro IPTV</li>
                <li><strong className="text-white">Step 3:</strong> Save settings and restart device</li>
                <li><strong className="text-white">Step 4:</strong> Channels will load automatically</li>
              </ol>
            </section>

            <section className="bg-white/10 backdrop-blur-sm border border-primary-500/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-primary-500 mb-4">STBEmulator Configuration</h3>
              <ol className="space-y-4 text-gray-300">
                <li><strong className="text-white">Step 1:</strong> Install STBEmulator app</li>
                <li><strong className="text-white">Step 2:</strong> Configure Portal URL and MAC address</li>
                <li><strong className="text-white">Step 3:</strong> Restart app to load channels</li>
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
