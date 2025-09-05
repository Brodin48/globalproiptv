import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IPTV Setup Guide for Fire TV & Firestick - Global Pro IPTV',
  description: 'Complete guide to setup Global Pro IPTV on Amazon Fire TV and Firestick. Stream 25,000+ channels with IPTV Smarters Pro.',
  keywords: 'Fire TV IPTV, Firestick IPTV setup, Global Pro IPTV Firestick, Amazon Fire TV streaming'
}

export default function FireTVSetupGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-800 via-dark-900 to-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary-500 mb-6">
            IPTV Setup Guide for Fire TV & Firestick - Global Pro IPTV
          </h1>
          
          <div className="bg-white/10 backdrop-blur-sm border border-primary-500/20 rounded-xl p-8 mb-8">
            <p className="text-gray-300">
              Transform your Amazon Fire TV or Firestick into a powerful streaming device with Global Pro IPTV. 
              Access 25,000+ channels and 26,000+ movies with this simple setup guide.
            </p>
          </div>

          <div className="space-y-8">
            <section className="bg-white/10 backdrop-blur-sm border border-primary-500/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-primary-500 mb-4">Method 1: IPTV Smarters Pro</h3>
              <ol className="space-y-4 text-gray-300">
                <li><strong className="text-white">Step 1:</strong> Enable "Apps from Unknown Sources" in Fire TV settings</li>
                <li><strong className="text-white">Step 2:</strong> Search and install "IPTV Smarters Pro" from Amazon App Store</li>
                <li><strong className="text-white">Step 3:</strong> Open app and select "Login with Xtream Codes API"</li>
                <li><strong className="text-white">Step 4:</strong> Enter Global Pro IPTV credentials</li>
                <li><strong className="text-white">Step 5:</strong> Start streaming instantly</li>
              </ol>
            </section>

            <section className="bg-white/10 backdrop-blur-sm border border-primary-500/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-primary-500 mb-4">Method 2: Downloader App</h3>
              <ol className="space-y-4 text-gray-300">
                <li><strong className="text-white">Step 1:</strong> Install "Downloader" app from Amazon App Store</li>
                <li><strong className="text-white">Step 2:</strong> Use Downloader to install TiviMate APK</li>
                <li><strong className="text-white">Step 3:</strong> Configure TiviMate with Global Pro IPTV</li>
                <li><strong className="text-white">Step 4:</strong> Enjoy premium IPTV features</li>
              </ol>
            </section>

            <section className="bg-white/10 backdrop-blur-sm border border-primary-500/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-primary-500 mb-4">Fire TV Optimization Tips</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Clear cache regularly for smooth performance</li>
                <li>• Use ethernet connection for 4K streaming</li>
                <li>• Restart Fire TV weekly for optimal performance</li>
                <li>• Close unused apps to free up memory</li>
              </ul>
            </section>
          </div>

          <div className="mt-12 text-center">
            <a href="https://wa.link/x83rg1" target="_blank" rel="noopener noreferrer" 
               className="cta-primary inline-block">
              Need Help? Contact Support
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
