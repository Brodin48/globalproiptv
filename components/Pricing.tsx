'use client'

import { Check, Star, Crown, Shield, Zap, Tv, Users, Play } from 'lucide-react'
import { useState } from 'react'

export default function Pricing() {
  const [activeMultiTab, setActiveMultiTab] = useState('2devices')
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
          buyLink: "https://wa.link/0yw033", 
          savings: "45%",
          badge: "SAVE 45%"
        },
        { 
          duration: "3 Months", 
          price: "$25.99", 
          originalPrice: "$59.97", 
          buyLink: "https://wa.link/0yw033", 
          savings: "57%",
          badge: "POPULAR"
        },
        { 
          duration: "6 Months", 
          price: "$39.99", 
          originalPrice: "$119.94", 
          buyLink: "https://wa.link/0yw033", 
          savings: "67%",
          badge: "BEST VALUE"
        },
        { 
          duration: "12 Months", 
          price: "$49.99", 
          originalPrice: "$139.88", 
          buyLink: "https://wa.link/0yw033", 
          savings: "64%",
          badge: "MOST POPULAR"
        },
        { 
          duration: "24 Months", 
          price: "$89.99", 
          originalPrice: "$279.76", 
          buyLink: "https://wa.link/0yw033", 
          savings: "68%",
          badge: "BEST DEAL"
        }
      ]
    }
  ]

  const multiConnectionPlans2 = [
    { duration: "1 MONTH", connections: "2 Connections", price: "$19.79", popular: false },
    { duration: "3 MONTHS", connections: "2 Connections", price: "$46.79", popular: true },
    { duration: "6 MONTHS", connections: "2 Connections", price: "$71.99", popular: false },
    { duration: "1 YEAR", connections: "2 Connections", price: "$89.99", popular: false }
  ]

  const multiConnectionPlans3 = [
    { duration: "1 MONTH", connections: "3 Connections", price: "$29.68", popular: false },
    { duration: "3 MONTHS", connections: "3 Connections", price: "$70.18", popular: true },
    { duration: "6 MONTHS", connections: "3 Connections", price: "$107.98", popular: false },
    { duration: "1 YEAR", connections: "3 Connections", price: "$134.98", popular: false }
  ]

  const features = [
    "25,000+ Live TV Channels",
    "26,000+ Movies & TV Shows",
    "HD & 4K Quality Streaming",
    "99.9% Uptime Guarantee",
    "24/7 Customer Support",
    "Multi-Device Support",
    "EPG Guide Included",
    "Anti-Freeze Technology"
  ]

  return (
    <section id="pricing" className="py-12 sm:py-16 lg:py-20 relative">
      {/* Section-specific background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img 
          src="/images/background/box-shape.png" 
          alt="" 
          className="absolute top-10 right-10 w-16 sm:w-20 lg:w-24 opacity-15 mix-blend-soft-light"
        />
        <img 
          src="/images/background/flower (1).png" 
          alt="" 
          className="absolute bottom-10 left-10 w-18 sm:w-22 lg:w-28 opacity-12 mix-blend-multiply"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Choose Your Perfect <span className="text-primary-500">Plan</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-xs sm:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed">
            Get started with our premium <strong>Global Pro IPTV</strong> subscription today. 
            <span className="hidden sm:inline"> Choose the plan that best fits your needs and start streaming thousands of channels instantly.</span>
          </p>
        </div>

        {/* Free Trial CTA */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center bg-primary-500/20 text-primary-400 px-4 sm:px-6 py-2 rounded-full text-sm font-semibold mb-4">
            <Star className="w-4 h-4 mr-2" />
            Try Free for 4 Hours - No Credit Card Required
          </div>
          <div>
            <a 
              href="https://wa.link/jpfecl" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cta-primary inline-flex items-center"
            >
              <Play className="w-5 h-5 mr-2" />
              Start Free Trial
            </a>
          </div>
        </div>

        {/* First Row - 3 Plans */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {devicePlans[0].plans.slice(0, 3).map((plan, planIndex) => (
            <div 
              key={planIndex} 
              className={`relative bg-white/10 backdrop-blur-sm border border-primary-500/20 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 h-full flex flex-col ${
                planIndex === 1 ? 'ring-4 ring-primary-500 ring-opacity-50' : ''
              }`}
            >
              {/* Badge */}
              <div className={`absolute top-0 left-0 right-0 text-center py-3 text-xs font-bold text-white ${
                planIndex === 1 ? 'bg-gradient-to-r from-primary-500 to-primary-600' : 
                'bg-gradient-to-r from-gray-600 to-gray-700'
              }`}>
                {plan.badge}
              </div>

              <div className="p-4 sm:p-6 pt-16 h-full flex flex-col">
                {/* Plan Header */}
                <div className="text-center mb-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 px-2 py-2 mt-2">
                    {plan.duration}
                  </h3>
                  <div className="flex items-center justify-center mb-3">
                    <Users className="w-4 h-4 text-primary-500 mr-1" />
                    <span className="text-primary-500 font-semibold text-sm">1 Device</span>
                  </div>
                  
                  {/* Pricing */}
                  <div className="mb-4">
                    <div className="flex items-center justify-center space-x-1 mb-1">
                      <span className="text-gray-500 line-through text-sm">{plan.originalPrice}</span>
                      <span className="text-2xl sm:text-3xl font-black text-white">{plan.price}</span>
                    </div>
                    <div className="text-gray-400 text-xs">Save {plan.savings}</div>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-2 text-left flex-grow mb-4">
                  {features.slice(0, 5).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                        <Check className="w-2 h-2 text-green-500" />
                      </div>
                      <span className="text-gray-300 text-xs">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Buy Button */}
                <div className="mt-auto">
                  <a 
                    href={plan.buyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center px-4 py-3 rounded-xl text-white font-bold transition-all duration-300 transform hover:scale-105 text-sm ${
                      planIndex === 1 ? 'bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700' :
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto mb-12">
          {devicePlans[0].plans.slice(3, 5).map((plan, planIndex) => (
            <div 
              key={planIndex + 3} 
              className={`relative bg-white/10 backdrop-blur-sm border border-primary-500/20 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 h-full flex flex-col ${
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
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 px-2 py-2 mt-2">
                    {plan.duration}
                  </h3>
                  <div className="flex items-center justify-center mb-3">
                    <Users className="w-4 h-4 text-primary-500 mr-1" />
                    <span className="text-primary-500 font-semibold text-sm">1 Device</span>
                  </div>
                  
                  {/* Pricing */}
                  <div className="mb-4">
                    <div className="flex items-center justify-center space-x-1 mb-1">
                      <span className="text-gray-500 line-through text-sm">{plan.originalPrice}</span>
                      <span className="text-2xl sm:text-3xl font-black text-white">{plan.price}</span>
                    </div>
                    <div className="text-gray-400 text-xs">Save {plan.savings}</div>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-2 text-left flex-grow mb-4">
                  {features.slice(0, 5).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                        <Check className="w-2 h-2 text-green-500" />
                      </div>
                      <span className="text-gray-300 text-xs">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Buy Button */}
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

        {/* Multi-Connection Packages Section */}
        <div className="mb-12 sm:mb-16 mt-16 sm:mt-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              MULTI-CONNECTION PACKAGES
            </h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
              Multi-connection IPTV allows you to enjoy your favorite TV channels and content on multiple devices simultaneously. With a single subscription, you can stream different channels on different devices, providing flexibility and convenience.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-white/10 p-1 rounded-lg inline-flex">
              <button
                className={`px-6 py-2 rounded-md font-semibold transition-all ${
                  activeMultiTab === '2devices'
                    ? 'bg-primary-500 text-black shadow-sm'
                    : 'text-gray-300 hover:text-white'
                }`}
                onClick={() => setActiveMultiTab('2devices')}
              >
                2 Devices
              </button>
              <button
                className={`px-6 py-2 rounded-md font-semibold transition-all ${
                  activeMultiTab === '3devices'
                    ? 'bg-primary-500 text-black shadow-sm'
                    : 'text-gray-300 hover:text-white'
                }`}
                onClick={() => setActiveMultiTab('3devices')}
              >
                3 Devices
              </button>
            </div>
          </div>

          {/* Multi-Connection Pricing Plans */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {activeMultiTab === '2devices' && multiConnectionPlans2.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg p-6 sm:p-8 border-2 transition-all duration-300 hover:shadow-xl ${
                  plan.popular ? 'border-primary-500 ring-4 ring-primary-100' : 'border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">{plan.duration}</h3>
                  <p className="text-gray-600 mb-1">{plan.connections}</p>
                  <div className="mb-4">
                    <span className="text-3xl sm:text-4xl font-bold text-primary-600">{plan.price}</span>
                    <span className="text-gray-600 ml-1">per period</span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-green-500" />
                    </div>
                    <span className="text-gray-700 text-sm">25,000+ Live TV Channels</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-green-500" />
                    </div>
                    <span className="text-gray-700 text-sm">26,000+ Movies & TV Shows</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-green-500" />
                    </div>
                    <span className="text-gray-700 text-sm">HD & 4K Quality Streaming</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-green-500" />
                    </div>
                    <span className="text-gray-700 text-sm">99.9% Uptime Guarantee</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-green-500" />
                    </div>
                    <span className="text-gray-700 text-sm">24/7 Customer Support</span>
                  </div>
                </div>

                <div className="text-center">
                  <a
                    href="https://wa.link/0yw033"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-cta text-white hover:shadow-cta-glow hover:scale-105'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    <Crown className="w-4 h-4 mr-1" />
                    Buy Now
                  </a>
                </div>
              </div>
            ))}

            {activeMultiTab === '3devices' && multiConnectionPlans3.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg p-6 sm:p-8 border-2 transition-all duration-300 hover:shadow-xl ${
                  plan.popular ? 'border-primary-500 ring-4 ring-primary-100' : 'border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">{plan.duration}</h3>
                  <p className="text-gray-600 mb-1">{plan.connections}</p>
                  <div className="mb-4">
                    <span className="text-3xl sm:text-4xl font-bold text-primary-600">{plan.price}</span>
                    <span className="text-gray-600 ml-1">per period</span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-green-500" />
                    </div>
                    <span className="text-gray-700 text-sm">25,000+ Live TV Channels</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-green-500" />
                    </div>
                    <span className="text-gray-700 text-sm">26,000+ Movies & TV Shows</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-green-500" />
                    </div>
                    <span className="text-gray-700 text-sm">HD & 4K Quality Streaming</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-green-500" />
                    </div>
                    <span className="text-gray-700 text-sm">99.9% Uptime Guarantee</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-green-500" />
                    </div>
                    <span className="text-gray-700 text-sm">24/7 Customer Support</span>
                  </div>
                </div>

                <div className="text-center">
                  <a
                    href="https://wa.link/0yw033"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-cta text-white hover:shadow-cta-glow hover:scale-105'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    <Crown className="w-4 h-4 mr-1" />
                    Buy Now
                  </a>
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
      </div>
    </section>
  )
}
