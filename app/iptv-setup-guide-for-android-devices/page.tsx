import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IPTV Setup Guide for Android Devices - Global Pro IPTV',
  description: 'Complete step-by-step guide to setup Global Pro IPTV on Android devices. Stream 25,000+ channels with IPTV Smarters Pro and TiviMate.',
  keywords: 'IPTV Android setup, Global Pro IPTV Android, IPTV Smarters Pro, TiviMate setup, Android IPTV guide'
}

export default function AndroidSetupGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-800 via-dark-900 to-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary-500 mb-6">
            IPTV Setup Guide for Android Devices - Global Pro IPTV
          </h1>
          
          <div className="bg-white/10 backdrop-blur-sm border border-primary-500/20 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Quick Setup Overview</h2>
            <p className="text-gray-300 mb-4">
              Setting up Global Pro IPTV on your Android device is simple and takes just a few minutes. 
              Follow this comprehensive guide to start streaming 25,000+ channels and 26,000+ movies.
            </p>
          </div>

          <div className="space-y-8">
            <section className="bg-white/10 backdrop-blur-sm border border-primary-500/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-primary-500 mb-4">Method 1: IPTV Smarters Pro (Recommended)</h3>
              <ol className="space-y-4 text-gray-300">
                <li><strong className="text-white">Step 1:</strong> Download IPTV Smarters Pro from Google Play Store</li>
                <li><strong className="text-white">Step 2:</strong> Open the app and select "Login with Xtream Codes API"</li>
                <li><strong className="text-white">Step 3:</strong> Enter your Global Pro IPTV credentials:
                  <ul className="ml-6 mt-2 space-y-1">
                    <li>• Username: [Your username]</li>
                    <li>• Password: [Your password]</li>
                    <li>• Server URL: [Provided in your account]</li>
                  </ul>
                </li>
                <li><strong className="text-white">Step 4:</strong> Click "Add User" and start streaming!</li>
              </ol>
            </section>

            <section className="bg-white/10 backdrop-blur-sm border border-primary-500/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-primary-500 mb-4">Method 2: TiviMate (Premium Experience)</h3>
              <ol className="space-y-4 text-gray-300">
                <li><strong className="text-white">Step 1:</strong> Install TiviMate from Google Play Store</li>
                <li><strong className="text-white">Step 2:</strong> Open TiviMate and tap "Add playlist"</li>
                <li><strong className="text-white">Step 3:</strong> Select "Xtream Codes" option</li>
                <li><strong className="text-white">Step 4:</strong> Enter your Global Pro IPTV details</li>
                <li><strong className="text-white">Step 5:</strong> Enjoy advanced features like EPG and recording</li>
              </ol>
            </section>

            <section className="bg-white/10 backdrop-blur-sm border border-primary-500/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-primary-500 mb-4">Troubleshooting Tips</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Ensure stable internet connection (minimum 10 Mbps for HD)</li>
                <li>• Clear app cache if experiencing buffering</li>
                <li>• Use 5GHz WiFi for better streaming quality</li>
                <li>• Contact Global Pro IPTV support for login issues</li>
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
