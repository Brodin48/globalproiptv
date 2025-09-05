import { Metadata } from 'next'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Play, CheckCircle, Tv, Smartphone, Monitor, Shield, Clock, Star, Zap, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Free Trial - Start Your IPTV Satlink Experience Today | Flex IPTV',
  description: 'Start your FREE IPTV Satlink trial now! Access 25,000+ live channels, 26,000+ movies & shows instantly. No credit card required. Experience premium IPTV streaming.',
  keywords: 'IPTV Satlink free trial, IPTV free trial, free IPTV test, IPTV Satlink demo, premium IPTV trial, free streaming trial',
  openGraph: {
    title: 'Free Trial - Start Your IPTV Satlink Experience Today',
    description: 'Access 25,000+ channels and 26,000+ movies with our FREE IPTV Satlink trial. No credit card required!',
    url: 'https://iptvsatlink.com/free-trial/',
  }
}

export default function FreeTrialPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8">
              Start Your <span className="text-accent-400">FREE</span> IPTV Satlink Trial
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 leading-relaxed">
              Experience premium entertainment with <strong>25,000+ live channels</strong> and <strong>26,000+ movies</strong>. 
              No credit card required, instant access in minutes!
            </p>
            
            {/* Main CTA */}
            <div className="mb-12">
              <a 
                href="https://wa.link/byh2yk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl font-bold rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <Play className="w-6 h-6 sm:w-8 sm:h-8 mr-3" />
                Start FREE Trial Now
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
              <div className="bg-white bg-opacity-10 rounded-lg p-3 sm:p-4">
                <div className="text-2xl sm:text-3xl font-bold text-accent-400 mb-1">25K+</div>
                <div className="text-xs sm:text-sm">Live Channels</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-3 sm:p-4">
                <div className="text-2xl sm:text-3xl font-bold text-accent-400 mb-1">26K+</div>
                <div className="text-xs sm:text-sm">Movies & Shows</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-3 sm:p-4">
                <div className="text-2xl sm:text-3xl font-bold text-accent-400 mb-1">99.9%</div>
                <div className="text-xs sm:text-sm">Uptime</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-3 sm:p-4">
                <div className="text-2xl sm:text-3xl font-bold text-accent-400 mb-1">24/7</div>
                <div className="text-xs sm:text-sm">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              What You Get With Your <span className="text-primary-600">FREE Trial</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Experience everything IPTV Satlink has to offer completely free. No hidden fees, no commitments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 sm:p-8 rounded-xl border border-blue-200">
              <Tv className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">25,000+ Live Channels</h3>
              <p className="text-gray-600">
                Access premium channels from USA, UK, Canada, Germany, France, Spain, Italy and worldwide.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 sm:p-8 rounded-xl border border-purple-200">
              <Monitor className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">26,000+ Movies & Shows</h3>
              <p className="text-gray-600">
                Massive VOD library with latest movies, TV series, documentaries, and kids content.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 sm:p-8 rounded-xl border border-green-200">
              <Zap className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">HD & 4K Quality</h3>
              <p className="text-gray-600">
                Crystal-clear streaming in HD and 4K resolution with minimal buffering.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 sm:p-8 rounded-xl border border-green-200">
              <Smartphone className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">All Device Support</h3>
              <p className="text-gray-600">
                Works on Smart TV, Android, iOS, Windows, Mac, Firestick, and more devices.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 sm:p-8 rounded-xl border border-red-200">
              <Shield className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">99.9% Uptime</h3>
              <p className="text-gray-600">
                Reliable streaming with premium servers and guaranteed uptime.
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 sm:p-8 rounded-xl border border-indigo-200">
              <Clock className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">24/7 Support</h3>
              <p className="text-gray-600">
                Premium customer support available around the clock to help you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              How to Start Your <span className="text-primary-600">FREE Trial</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Get started in just 3 simple steps. No technical knowledge required!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-primary-600 text-white w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center text-2xl sm:text-3xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Click Trial Button</h3>
              <p className="text-gray-600">
                Click the "Start FREE Trial" button to connect with our support team via WhatsApp.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-600 text-white w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center text-2xl sm:text-3xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Get Your Access</h3>
              <p className="text-gray-600">
                Receive your trial login details instantly. No credit card or payment required.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-600 text-white w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center text-2xl sm:text-3xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Start Watching</h3>
              <p className="text-gray-600">
                Set up on your preferred device and enjoy unlimited entertainment immediately.
              </p>
            </div>
          </div>

          {/* Second CTA */}
          <div className="text-center mt-12 sm:mt-16">
            <a 
              href="https://wa.link/byh2yk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl font-bold rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Play className="w-6 h-6 sm:w-8 sm:h-8 mr-3" />
              Get My FREE Trial Access
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-gray-50 rounded-lg p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 flex items-center">
                <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                Is the trial really free?
              </h3>
              <p className="text-gray-600 pl-9">
                Yes! Our IPTV Satlink trial is completely free with no hidden charges. No credit card required to start.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 flex items-center">
                <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                How long is the trial period?
              </h3>
              <p className="text-gray-600 pl-9">
                You get full access to experience our premium IPTV Satlink service and all features during the trial period.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 flex items-center">
                <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                What devices are supported?
              </h3>
              <p className="text-gray-600 pl-9">
                IPTV Satlink works on Smart TVs, Android phones/tablets, iOS devices, Windows, Mac, Firestick, Android boxes, and more.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 flex items-center">
                <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                Do I get access to all channels?
              </h3>
              <p className="text-gray-600 pl-9">
                Yes! Your trial includes access to all 25,000+ live channels and 26,000+ movies & shows in our library.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Ready to Experience Premium Entertainment?
            </h2>
            <p className="text-lg sm:text-xl mb-8 sm:mb-12">
              Join thousands of satisfied customers who chose IPTV Satlink for their entertainment needs.
            </p>
            
            <a 
              href="https://wa.link/byh2yk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl font-bold rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300 mb-8"
            >
              <Play className="w-6 h-6 sm:w-8 sm:h-8 mr-3" />
              Start Your FREE Trial Today
            </a>

            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-sm sm:text-base">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                No Credit Card Required
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                Instant Access
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                Premium Support
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
