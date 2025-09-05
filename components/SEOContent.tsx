import { CheckCircle, Star, Zap, Shield } from 'lucide-react'

export default function SEOContent() {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main SEO Content */}
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
              The Ultimate <span className="text-primary-500">Global Pro IPTV</span> Experience
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Discover why millions choose <strong>Global Pro IPTV</strong> as their preferred streaming solution. 
              Our premium <strong>Global Pro IPTV</strong> subscription offers unmatched quality, reliability, 
              and value for your entertainment needs.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-primary-500/20 backdrop-blur-sm border border-primary-500/30 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-6 h-6 text-primary-500 mr-3" />
                <h3 className="text-xl font-semibold text-white">Premium Global Pro IPTV Quality</h3>
              </div>
              <p className="text-gray-300">
                Experience crystal-clear HD and 4K streaming with our premium <strong>Global Pro IPTV</strong> service. 
                Our advanced servers ensure your <strong>Global Pro IPTV</strong> experience is always smooth and buffer-free.
              </p>
            </div>

            <div className="bg-primary-500/20 backdrop-blur-sm border border-primary-500/30 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Star className="w-6 h-6 text-primary-500 mr-3" />
                <h3 className="text-xl font-semibold text-white">Trusted Global Pro IPTV Provider</h3>
              </div>
              <p className="text-gray-300">
                Since 2019, <strong>Global Pro IPTV</strong> has been the go-to choice for streaming enthusiasts. 
                Join thousands of satisfied customers who rely on our <strong>Global Pro IPTV</strong> service daily.
              </p>
            </div>

            <div className="bg-primary-500/20 backdrop-blur-sm border border-primary-500/30 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Zap className="w-6 h-6 text-primary-500 mr-3" />
                <h3 className="text-xl font-semibold text-white">Fast Global Pro IPTV Setup</h3>
              </div>
              <p className="text-gray-300">
                Get your <strong>Global Pro IPTV</strong> subscription activated instantly. Our quick setup process 
                means you can start enjoying <strong>Global Pro IPTV</strong> content within minutes of purchase.
              </p>
            </div>

            <div className="bg-primary-500/20 backdrop-blur-sm border border-primary-500/30 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-primary-500 mr-3" />
                <h3 className="text-xl font-semibold text-white">Secure Global Pro IPTV Access</h3>
              </div>
              <p className="text-gray-300">
                Your <strong>Global Pro IPTV</strong> subscription is protected with enterprise-grade security. 
                Enjoy peace of mind with our reliable and secure <strong>Global Pro IPTV</strong> platform.
              </p>
            </div>
          </div>

          {/* Why Choose My IPTV */}
          <div className="bg-white/10 backdrop-blur-sm border border-primary-500/30 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Why <span className="text-primary-500">Global Pro IPTV</span> is Your Best Choice
            </h3>
            <div className="prose prose-lg max-w-none text-gray-300">
              <p className="mb-4">
                When you choose <strong>Global Pro IPTV</strong>, you're choosing excellence in streaming entertainment. 
                Our <strong>Global Pro IPTV</strong> service stands out from the competition with over 25,000 live TV channels, 
                26,000+ movies and TV shows, all delivered in stunning HD and 4K quality.
              </p>
              <p className="mb-4">
                What makes <strong>Global Pro IPTV</strong> special is our commitment to reliability and customer satisfaction. 
                Our <strong>Global Pro IPTV</strong> platform works seamlessly across all devices - Smart TVs, Android boxes, 
                iOS devices, computers, and more. With 99.9% uptime and 24/7 premium support, your <strong>Global Pro IPTV</strong> 
                experience is always guaranteed to be exceptional.
              </p>
              <p>
                Don't settle for ordinary streaming services. Upgrade to <strong>Global Pro IPTV</strong> today and discover 
                why we're the preferred choice for premium entertainment worldwide. Get your <strong>Global Pro IPTV</strong> 
                subscription now and transform your viewing experience forever.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
