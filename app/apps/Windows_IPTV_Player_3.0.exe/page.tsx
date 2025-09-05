import { Metadata } from 'next'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import { Download, Monitor, Shield, CheckCircle, Star, Zap, Settings, Play } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Download Windows IPTV Player 3.0 | IPTV Satlink Windows App',
  description: 'Download the official Windows IPTV Player 3.0 for IPTV Satlink. Free Windows application for streaming 25,000+ channels and 26,000+ movies on your PC.',
  keywords: 'Windows IPTV Player, IPTV Satlink Windows app, IPTV player download, Windows streaming app, IPTV Satlink PC'
}

export default function WindowsIPTVPlayerPage() {
  const systemRequirements = [
    "Windows 10 or later (64-bit)",
    "Minimum 4GB RAM",
    "DirectX 11 compatible graphics",
    "Internet connection (25 Mbps+ recommended)",
    "100MB free disk space"
  ]

  const features = [
    {
      icon: <Monitor className="w-8 h-8 text-blue-600" />,
      title: "Optimized for Windows",
      description: "Native Windows application designed specifically for the best IPTV Satlink experience on PC"
    },
    {
      icon: <Play className="w-8 h-8 text-green-600" />,
      title: "HD & 4K Streaming",
      description: "Enjoy crystal-clear streaming quality with support for HD, Full HD, and 4K content"
    },
    {
      icon: <Settings className="w-8 h-8 text-purple-600" />,
      title: "Advanced Controls",
      description: "Full-featured media controls with playlist management and channel favorites"
    },
    {
      icon: <Zap className="w-8 h-8 text-green-600" />,
      title: "Fast Performance",
      description: "Lightning-fast channel switching and minimal buffering for smooth streaming"
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white bg-opacity-20 rounded-full p-6">
                <Monitor className="w-16 h-16 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Windows IPTV Player 3.0
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
              The official <strong>IPTV Satlink</strong> Windows application. Stream 25,000+ live channels 
              and 26,000+ movies directly on your Windows PC with our premium IPTV player.
            </p>

            {/* Download Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a 
                href="/Windows_IPTV_Player_3.0.exe"
                download="Windows_IPTV_Player_3.0.exe"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                <Download className="w-6 h-6 mr-3" />
                Download for Windows
                <span className="ml-2 text-sm opacity-75">(v3.0)</span>
              </a>
              <a 
                href="/pricing"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
              >
                <Star className="w-6 h-6 mr-3" />
                Get IPTV Satlink Subscription
              </a>
            </div>

            {/* Version Info */}
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold mb-1">v3.0</div>
                  <div className="text-sm opacity-90">Latest Version</div>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-1">15.2 MB</div>
                  <div className="text-sm opacity-90">Download Size</div>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-1">Free</div>
                  <div className="text-sm opacity-90">Windows App</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Why Choose Our Windows IPTV Player?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the best <strong>IPTV Satlink</strong> streaming on Windows with our 
              professionally designed application built specifically for PC users.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-bold text-gray-800 ml-4">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
              System Requirements
            </h2>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                    <Shield className="w-6 h-6 text-green-600 mr-3" />
                    Minimum Requirements
                  </h3>
                  <ul className="space-y-3">
                    {systemRequirements.map((requirement, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-6">
                    Installation Instructions
                  </h3>
                  <ol className="space-y-3">
                    <li className="flex items-start">
                      <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">1</span>
                      <span className="text-gray-700">Download the Windows IPTV Player 3.0</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">2</span>
                      <span className="text-gray-700">Run the installer as Administrator</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">3</span>
                      <span className="text-gray-700">Enter your IPTV Satlink subscription credentials</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">4</span>
                      <span className="text-gray-700">Start streaming 25,000+ channels instantly</span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Premium <span className="text-blue-600">IPTV Satlink</span> Features
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get the complete <strong>IPTV Satlink</strong> experience on Windows with all premium features included.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "25,000+ Live Channels", desc: "Access premium channels from around the world" },
              { title: "26,000+ Movies & Shows", desc: "Massive on-demand content library" },
              { title: "HD & 4K Quality", desc: "Crystal clear streaming up to 4K resolution" },
              { title: "Electronic Program Guide", desc: "Built-in EPG for easy channel browsing" },
              { title: "Favorites & Playlists", desc: "Organize your favorite channels and content" },
              { title: "Parental Controls", desc: "Safe viewing environment for families" },
              { title: "Multi-Language Support", desc: "Interface available in multiple languages" },
              { title: "Regular Updates", desc: "Automatic updates with new features" },
              { title: "24/7 Support", desc: "Premium customer support included" }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Stream on Windows?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Download the Windows IPTV Player 3.0 and start enjoying premium <strong>IPTV Satlink</strong> 
            content on your PC today. Completely free application for all IPTV Satlink subscribers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/Windows_IPTV_Player_3.0.exe"
              download="Windows_IPTV_Player_3.0.exe"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              <Download className="w-6 h-6 mr-3" />
              Download Windows App
            </a>
            <a 
              href="https://wa.link/byh2yk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
            >
              Get Support
            </a>
          </div>

          <div className="mt-8 text-sm opacity-75">
            <p>System Requirements: Windows 10+ • File Size: 15.2MB • Version: 3.0 • Free Download</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
