import { Metadata } from 'next'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { DollarSign, Users, Globe, TrendingUp, Shield, Clock, Star, Zap, Crown, Target, Award, UserCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'IPTV Reseller Program - Start Your IPTV Satlink Business | Flex IPTV',
  description: 'Join our profitable IPTV Satlink reseller program. Earn up to 70% commission selling premium IPTV with 25,000+ channels. Start your IPTV business today!',
  keywords: 'IPTV reseller, IPTV Satlink reseller program, IPTV business opportunity, sell IPTV, IPTV affiliate, reseller panel',
  openGraph: {
    title: 'IPTV Reseller Program - Start Your IPTV Satlink Business',
    description: 'Earn up to 70% commission with our IPTV Satlink reseller program. Premium IPTV business opportunity.',
    url: 'https://iptvsatlink.com/iptv-reseller/',
  }
}

export default function IPTVResellerPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8">
              Start Your <span className="text-accent-400">IPTV Satlink</span> Business Today
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 leading-relaxed">
              Join our profitable reseller program and earn <strong>up to 70% commission</strong> selling premium IPTV with 
              <strong> 25,000+ channels</strong> and <strong>26,000+ movies</strong>. Build your own IPTV empire!
            </p>
            
            {/* Main CTA */}
            <div className="mb-12">
              <a 
                href="https://wa.link/byh2yk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl font-bold rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <Crown className="w-6 h-6 sm:w-8 sm:h-8 mr-3" />
                Become a Reseller Now
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
              <div className="bg-white bg-opacity-10 rounded-lg p-3 sm:p-4">
                <div className="text-2xl sm:text-3xl font-bold text-accent-400 mb-1">70%</div>
                <div className="text-xs sm:text-sm">Commission</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-3 sm:p-4">
                <div className="text-2xl sm:text-3xl font-bold text-accent-400 mb-1">1000+</div>
                <div className="text-xs sm:text-sm">Active Resellers</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-3 sm:p-4">
                <div className="text-2xl sm:text-3xl font-bold text-accent-400 mb-1">24/7</div>
                <div className="text-xs sm:text-sm">Support</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-3 sm:p-4">
                <div className="text-2xl sm:text-3xl font-bold text-accent-400 mb-1">$5K+</div>
                <div className="text-xs sm:text-sm">Monthly Avg</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your IPTV Satlink Business?
            </h2>
            <p className="text-lg sm:text-xl mb-8 sm:mb-12">
              Join our successful reseller network and start earning high commissions today. Limited spots available!
            </p>
            
            <a 
              href="https://wa.link/byh2yk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl font-bold rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300 mb-8"
            >
              <Crown className="w-6 h-6 sm:w-8 sm:h-8 mr-3" />
              Apply for Reseller Program Now
            </a>

            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-sm sm:text-base">
              <div className="flex items-center">
                <Star className="w-5 h-5 mr-2 text-yellow-400" />
                Up to 70% Commission
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-green-400" />
                Weekly Payouts
              </div>
              <div className="flex items-center">
                <Shield className="w-5 h-5 mr-2 text-blue-400" />
                24/7 Support
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
