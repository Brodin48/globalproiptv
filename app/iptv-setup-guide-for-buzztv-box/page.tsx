import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IPTV Setup Guide for BuzzTV Box - Global Pro IPTV',
  description: 'Step-by-step guide to setup Global Pro IPTV on BuzzTV Box. Stream 25,000+ channels with built-in IPTV app.',
  keywords: 'BuzzTV Box IPTV, Global Pro IPTV BuzzTV, BuzzTV setup, Android TV box IPTV'
}

export default function BuzzTVSetupGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-800 via-dark-900 to-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary-500 mb-6">
            IPTV Setup Guide for BuzzTV Box - Global Pro IPTV
          </h1>
          
          <div className="bg-white/10 backdrop-blur-sm border border-primary-500/20 rounded-xl p-8 mb-8">
            <p className="text-gray-300">
              BuzzTV boxes come with built-in IPTV support making Global Pro IPTV setup extremely simple. 
              Follow these steps to access 25,000+ channels on your BuzzTV device.
            </p>
          </div>

          <div className="space-y-8">
            <section className="bg-white/10 backdrop-blur-sm border border-primary-500/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-primary-500 mb-4">Built-in IPTV App Setup</h3>
              <ol className="space-y-4 text-gray-300">
                <li><strong className="text-white">Step 1:</strong> Navigate to the built-in IPTV app on your BuzzTV home screen</li>
                <li><strong className="text-white">Step 2:</strong> Select "Xtream Codes" login option</li>
                <li><strong className="text-white">Step 3:</strong> Enter your Global Pro IPTV credentials</li>
                <li><strong className="text-white">Step 4:</strong> Save settings and enjoy streaming</li>
              </ol>
            </section>

            <section className="bg-white/10 backdrop-blur-sm border border-primary-500/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-primary-500 mb-4">Alternative: TiviMate Installation</h3>
              <ol className="space-y-4 text-gray-300">
                <li><strong className="text-white">Step 1:</strong> Install TiviMate from Google Play Store</li>
                <li><strong className="text-white">Step 2:</strong> Configure with Global Pro IPTV Xtream Codes</li>
                <li><strong className="text-white">Step 3:</strong> Enjoy premium IPTV experience</li>
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
