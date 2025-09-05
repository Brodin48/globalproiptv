import { Tv, Mail, Phone, Clock, Facebook, Twitter, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-dark-800 text-white">
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4 sm:mb-6">
              <img 
                src="/images/logo.svg" 
                alt="Global Pro IPTV Logo" 
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
              />
            </div>
              <p className="text-gray-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Providing premium <strong>Global Pro IPTV</strong> service since 2019. Our mission is to deliver 
              the best <strong>Global Pro IPTV</strong> streaming experience with reliable servers and exceptional customer support.
              <span className="hidden sm:inline"> Get your <strong>Global Pro IPTV</strong> subscription at globalproiptv.com today.</span>
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="/" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Home</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">About</a></li>
              <li><a href="/blog" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Blog</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Features</a></li>
              <li><a href="/pricing" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Pricing</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Reviews</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Contact</a></li>
              <li><a href="/apps/Windows_IPTV_Player_3.0.exe" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Windows App</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Global Pro IPTV Features</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li className="text-gray-400 text-sm sm:text-base">25,000+ Live TV Channels</li>
              <li className="text-gray-400 text-sm sm:text-base">26,000+ Movies & TV Shows</li>
              <li className="text-gray-400 text-sm sm:text-base">HD & 4K Streaming Quality</li>
              <li className="text-gray-400 text-sm sm:text-base">All Device Compatibility</li>
              <li className="text-gray-400 text-sm sm:text-base">24/7 Global Pro IPTV Support</li>
              <li className="text-gray-400 text-sm sm:text-base">Regular Content Updates</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Contact Us</h4>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary-400 flex-shrink-0" />
                <a href="https://wa.link/854l98" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                  +1 (323) 704‑4063 <span className="hidden sm:inline">(WhatsApp)</span>
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary-400 flex-shrink-0" />
                <a href="mailto:contact@globalproiptv.com" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base break-all">
                  contact@globalproiptv.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-primary-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm sm:text-base">
                  <span className="hidden sm:inline">Mon - Sat: 11:00am - 10:00pm</span>
                  <span className="sm:hidden">Mon-Sat: 11am-10pm</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-800 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              © 2025 <strong>Global Pro IPTV</strong>. All rights reserved. | Premium Global Pro IPTV Service at globalproiptv.com
            </p>
            <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-right">
              <span className="hidden sm:inline">Powered by Premium Streaming Technology</span>
              <span className="sm:hidden">Premium Streaming Tech</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
