import { Play, Star, Users, Zap, Shield, Clock } from 'lucide-react'

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative text-white overflow-hidden min-h-screen flex items-center"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/images/videos/NL hoverbackground.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Video Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      {/* Additional decorative elements */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <img 
          src="/images/background/section-curve.png" 
          alt="" 
          className="absolute bottom-0 left-0 w-full opacity-20"
        />
        <img 
          src="/images/background/line-red-top (2).png" 
          alt="" 
          className="absolute top-20 right-20 w-48 sm:w-64 lg:w-80 opacity-30"
        />
        <img 
          src="/images/background/feedback-circle (1).svg" 
          alt="" 
          className="absolute top-1/4 left-10 w-32 sm:w-40 lg:w-48 opacity-25 animate-pulse"
        />
      </div>

      <div className="container mx-auto px-4 py-12 sm:py-16 lg:py-20 relative z-20">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            Premium <span className="text-premium-400 drop-shadow-lg">TheIPTV</span> Service
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-xs sm:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-2">
            Experience the best <strong>TheIPTV</strong> service since 2019! Our premium <strong>TheIPTV subscription</strong>{' '}
            offers 25,000+ Live TV Channels & 26,000+ Movies/TV Shows. Get instant <strong>TheIPTV access</strong> 
            <span className="hidden sm:inline"> with HD & 4K quality streaming. Join millions who trust TheIPTV for ultimate entertainment.</span>
            <span className="sm:hidden"> - your gateway to unlimited entertainment.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4">
            <a 
              href="https://wa.link/jpfecl" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-cta text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:shadow-cta-glow hover:scale-105 transition-all duration-300 flex items-center justify-center backdrop-blur-sm animate-pulse-cta"
            >
              <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Start Free Trial
            </a>
            <a 
              href="#pricing" 
              className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-white hover:text-primary-800 transition-all duration-300 backdrop-blur-sm"
            >
              View Pricing
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-xs sm:max-w-2xl lg:max-w-4xl mx-auto px-4">
            <div className="text-center bg-black/30 backdrop-blur-sm rounded-lg p-3 sm:p-4">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-premium-400 mb-1 sm:mb-2">25K+</div>
              <div className="text-xs sm:text-sm lg:text-base">Live TV Channels</div>
            </div>
            <div className="text-center bg-black/30 backdrop-blur-sm rounded-lg p-3 sm:p-4">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-premium-400 mb-1 sm:mb-2">26K+</div>
              <div className="text-xs sm:text-sm lg:text-base">Movies & TV Shows</div>
            </div>
            <div className="text-center bg-black/30 backdrop-blur-sm rounded-lg p-3 sm:p-4">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-premium-400 mb-1 sm:mb-2">99.9%</div>
              <div className="text-xs sm:text-sm lg:text-base">Uptime</div>
            </div>
            <div className="text-center bg-black/30 backdrop-blur-sm rounded-lg p-3 sm:p-4">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-premium-400 mb-1 sm:mb-2">24/7</div>
              <div className="text-xs sm:text-sm lg:text-base">Premium Support</div>
            </div>
          </div>
        </div>

        {/* Floating elements - Hidden on mobile for better performance */}
        <div className="hidden lg:block absolute top-20 left-10 floating">
          <div className="w-12 h-12 xl:w-16 xl:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
            <Star className="w-6 h-6 xl:w-8 xl:h-8 text-accent-400" />
          </div>
        </div>
        <div className="hidden lg:block absolute top-40 right-10 floating" style={{animationDelay: '2s'}}>
          <div className="w-10 h-10 xl:w-12 xl:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
            <Zap className="w-5 h-5 xl:w-6 xl:h-6 text-accent-300" />
          </div>
        </div>
      </div>
    </section>
  )
}
