import { Check, Star, Crown, Shield, Zap, Tv, Users, Play } from 'lucide-react'

export default function Pricing() {
  const devicePlans = [
    {
      name: "1 Device",
      devices: 1,
      popular: false,
      plans: [
        { 
          duration: "1 Month", 
          price: "$10.99", 
          originalPrice: "$19.99", 
          buyLink: "https://wa.link/854l98", 
          savings: "45%",
          badge: "SAVE 45%"
        },
        { 
          duration: "3 Months", 
          price: "$25.99", 
          originalPrice: "$59.97", 
          buyLink: "https://wa.link/854l98", 
          savings: "57%",
          badge: "POPULAR"
        },
        { 
          duration: "6 Months", 
          price: "$39.99", 
          originalPrice: "$119.94", 
          buyLink: "https://wa.link/854l98", 
          savings: "67%",
          badge: "BEST VALUE"
        },
        { 
          duration: "12 Months", 
          price: "$49.99", 
          originalPrice: "$139.88", 
          buyLink: "https://wa.link/854l98", 
          savings: "64%",
          badge: "BEST VALUE"
        },
        { 
          duration: "24 Months", 
          price: "$89.99", 
          originalPrice: "$279.76", 
          buyLink: "https://wa.link/854l98", 
          savings: "68%",
          badge: "MAXIMUM SAVINGS"
        }
      ]
    }
  ]

  const features = [
    "25,000+ Live TV Channels",
    "HD & 4K Streaming Quality",
    "Regular Content Updates",
    "24/7 My IPTV Support",
    "Compatible with All Devices",
    "Adult Content Included"
  ]

  return (
    <section id="pricing" className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
            Choose Your Perfect <span className="text-primary-600">Plan</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-xs sm:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed">
            Select a subscription duration for your single device connection. All plans include full access to our premium features.
          </p>
          
          {/* Free Trial Button */}
          <div className="mt-6">
            <a 
              href="https://wa.link/854l98" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              <Play className="w-5 h-5 mr-2" />
              Start Free Trial
            </a>
          </div>
        </div>

        {/* Single Device Plans Grid - 3 in first row, 2 in second row */}
        <div className="max-w-8xl mx-auto mb-12">
          {/* First Row - 3 Plans */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
            {devicePlans[0].plans.slice(0, 3).map((plan, planIndex) => (
            <div 
              key={planIndex} 
              className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 h-full flex flex-col ${
                planIndex === 3 ? 'ring-4 ring-primary-500 ring-opacity-50' : ''
              }`}
            >
              {/* Badge */}
              <div className={`absolute top-0 left-0 right-0 text-center py-3 text-xs font-bold text-white ${
                planIndex === 3 ? 'bg-gradient-to-r from-primary-500 to-primary-600' : 
                'bg-gradient-to-r from-gray-600 to-gray-700'
              }`}>
                {plan.badge}
              </div>

              <div className="p-4 sm:p-6 pt-16 h-full flex flex-col">
                {/* Plan Header */}
                <div className="text-center mb-4">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 px-2 py-2 mt-2">
                    {plan.duration}
                  </h3>
                  <div className="flex items-center justify-center mb-3">
                    <Users className="w-4 h-4 text-primary-500 mr-1" />
                    <span className="text-primary-500 font-semibold text-sm">1 Device</span>
                  </div>
                  
                  {/* Pricing */}
                  <div className="mb-4">
                    <div className="flex items-center justify-center space-x-1 mb-1">
                      <span className="text-gray-400 line-through text-sm">{plan.originalPrice}</span>
                      <span className="text-2xl sm:text-3xl font-black text-gray-800">{plan.price}</span>
                    </div>
                    <div className="text-gray-600 text-xs">Save {plan.savings}</div>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-2 text-left flex-grow mb-4">
                  {features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                        <Check className="w-2 h-2 text-green-500" />
                      </div>
                      <span className="text-gray-700 text-xs">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Buy Button - Always at bottom */}
                <div className="mt-auto">
                  <a 
                    href={plan.buyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center px-4 py-3 rounded-xl text-white font-bold transition-all duration-300 transform hover:scale-105 text-sm ${
                      planIndex === 3 ? 'bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700' :
                      'bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800'
                    }`}
                  >
                    <Crown className="w-4 h-4 mr-1" />
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          ))}
          </div>

          {/* Second Row - 2 Plans */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {devicePlans[0].plans.slice(3, 5).map((plan, planIndex) => (
              <div 
                key={planIndex + 3} 
                className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 h-full flex flex-col ${
                  planIndex === 0 ? 'ring-4 ring-primary-500 ring-opacity-50' : ''
                }`}
              >
                {/* Badge */}
                <div className={`absolute top-0 left-0 right-0 text-center py-3 text-xs font-bold text-white ${
                  planIndex === 0 ? 'bg-gradient-to-r from-primary-500 to-primary-600' : 
                  'bg-gradient-to-r from-gray-600 to-gray-700'
                }`}>
                  {plan.badge}
                </div>

                <div className="p-4 sm:p-6 pt-16 h-full flex flex-col">
                  {/* Plan Header */}
                  <div className="text-center mb-4">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 px-2 py-2 mt-2">
                      {plan.duration}
                    </h3>
                    <div className="flex items-center justify-center mb-3">
                      <Users className="w-4 h-4 text-primary-500 mr-1" />
                      <span className="text-primary-500 font-semibold text-sm">1 Device</span>
                    </div>
                    
                    {/* Pricing */}
                    <div className="mb-4">
                      <div className="flex items-center justify-center space-x-1 mb-1">
                        <span className="text-gray-400 line-through text-sm">{plan.originalPrice}</span>
                        <span className="text-2xl sm:text-3xl font-black text-gray-800">{plan.price}</span>
                      </div>
                      <div className="text-gray-600 text-xs">Save {plan.savings}</div>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2 text-left flex-grow mb-4">
                    {features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                          <Check className="w-2 h-2 text-green-500" />
                        </div>
                        <span className="text-gray-700 text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Buy Button - Always at bottom */}
                  <div className="mt-auto">
                    <a 
                      href={plan.buyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full inline-flex items-center justify-center px-4 py-3 rounded-xl text-white font-bold transition-all duration-300 transform hover:scale-105 text-sm ${
                        planIndex === 0 ? 'bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700' :
                        'bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800'
                      }`}
                    >
                      <Crown className="w-4 h-4 mr-1" />
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            All Plans Include
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <Check className="w-3 h-3 text-green-500" />
                </div>
                <span className="text-gray-700 text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Premium Lifetime Offer */}
        <div className="max-w-7xl mx-auto mt-12 sm:mt-16">
          <div className="relative bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-12 transform hover:scale-102 transition-all duration-500 overflow-hidden">
            
            {/* Animated background elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10 animate-pulse"></div>
            <div className="hidden lg:block absolute -top-10 -right-10 w-32 h-32 bg-white rounded-full opacity-10 animate-bounce"></div>
            <div className="hidden lg:block absolute -bottom-10 -left-10 w-40 h-40 bg-white rounded-full opacity-5"></div>
            
            {/* Premium badge */}
            <div className="flex justify-center mb-4 sm:mb-6">
              <div className="bg-gradient-to-r from-primary-700 to-primary-800 text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold flex items-center shadow-lg border-2 border-white">
                <Crown className="w-3 h-3 sm:w-4 sm:h-4 mr-2 animate-pulse" />
                <span className="hidden sm:inline">✨ EXCLUSIVE PREMIUM LIFETIME OFFER ✨</span>
                <span className="sm:hidden">✨ LIFETIME OFFER ✨</span>
              </div>
            </div>
            
            <div className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-center">
                
                {/* Left: Title and Price */}
                <div className="text-center lg:text-left text-white">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 sm:mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent drop-shadow-lg">
                    Lifetime Access
                  </h3>
                  
                  <div className="mb-3 sm:mb-4">
                    <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white drop-shadow-xl">
                      $289.99
                    </div>
                  </div>
                  
                  <div className="text-sm sm:text-lg lg:text-xl font-semibold text-secondary-100 mb-4 sm:mb-6">
                    One-time payment<br />No monthly fees<br />Unlimited devices
                  </div>

                  {/* CTA Button */}
                  <a 
                    href="https://wa.link/854l98" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-white text-primary-500 px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-lg sm:text-xl font-black hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-2xl border-2 border-secondary-200 hover:border-secondary-300 group"
                  >
                    <Crown className="w-5 h-5 sm:w-6 sm:h-6 mr-2 group-hover:animate-spin" />
                    CLAIM LIFETIME
                  </a>
                </div>

                {/* Right: Features */}
                <div className="lg:col-span-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white border-opacity-30">
                      <div className="flex items-center">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center mr-3 shadow-lg flex-shrink-0">
                          <Tv className="w-4 h-4 sm:w-5 sm:h-5 text-primary-500" />
                        </div>
                        <div>
                          <div className="font-bold text-white text-sm sm:text-base">25,000+ Live Channels</div>
                          <div className="text-secondary-100 text-xs sm:text-sm">Worldwide coverage</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white border-opacity-30">
                      <div className="flex items-center">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center mr-3 shadow-lg flex-shrink-0">
                          <Star className="w-4 h-4 sm:w-5 sm:h-5 text-primary-500" />
                        </div>
                        <div>
                          <div className="font-bold text-white text-sm sm:text-base">26,000+ Movies & Shows</div>
                          <div className="text-secondary-100 text-xs sm:text-sm">Latest releases included</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white border-opacity-30">
                      <div className="flex items-center">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center mr-3 shadow-lg flex-shrink-0">
                          <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-primary-500" />
                        </div>
                        <div>
                          <div className="font-bold text-white text-sm sm:text-base">Ultra HD & 4K Quality</div>
                          <div className="text-secondary-100 text-xs sm:text-sm">Crystal clear streaming</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white border-opacity-30">
                      <div className="flex items-center">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center mr-3 shadow-lg flex-shrink-0">
                          <Users className="w-4 h-4 sm:w-5 sm:h-5 text-primary-500" />
                        </div>
                        <div>
                          <div className="font-bold text-white text-sm sm:text-base">Unlimited Devices</div>
                          <div className="text-secondary-100 text-xs sm:text-sm">Use on all your devices</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom text and trust indicators */}
                  <div className="mt-4 sm:mt-6 text-center">
                    <div className="text-secondary-100 text-sm sm:text-lg font-semibold mb-3 sm:mb-4">
                      🔥 <span className="hidden sm:inline">Limited Time Offer • Save $1,000+ vs Monthly Plans</span>
                      <span className="sm:hidden">Save $1,000+ vs Monthly Plans</span>
                    </div>
                    
                    {/* Trust indicators */}
                    <div className="flex justify-center items-center space-x-4 sm:space-x-6 text-secondary-100">
                      <div className="flex items-center">
                        <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-secondary-300" />
                        <span className="text-xs sm:text-sm font-semibold">Premium Quality</span>
                      </div>
                      <div className="flex items-center">
                        <Shield className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-secondary-300" />
                        <span className="text-xs sm:text-sm font-semibold">Secure Payment</span>
                      </div>
                      <div className="flex items-center">
                        <Crown className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-secondary-300" />
                        <span className="text-xs sm:text-sm font-semibold">VIP Status</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 sm:mt-12 text-center">
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
              Why Choose My IPTV?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-8 h-8 text-primary-500" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Instant Activation</h4>
                <p className="text-sm text-gray-600">Get access within 5 minutes of purchase</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-8 h-8 text-green-500" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Money Back Guarantee</h4>
                <p className="text-sm text-gray-600">30-day risk-free trial period</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-8 h-8 text-secondary-500" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">24/7 Support</h4>
                <p className="text-sm text-gray-600">Premium customer support always available</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 text-center text-gray-600 text-xs sm:text-sm">
          <p>*All prices are in USD. Additional taxes may apply in some regions.</p>
          <p className="hidden sm:block">Subscriptions will auto-renew unless cancelled. Lifetime plan is a one-time payment.</p>
        </div>
      </div>
    </section>
  )
}