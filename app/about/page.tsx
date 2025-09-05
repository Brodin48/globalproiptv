import { Metadata } from 'next'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Star, Zap, Shield, Users, Clock, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About theiptv - Premium theiptv Service Provider',
  description: 'Learn about theiptv - the leading provider of theiptv subscriptions with 25,000+ channels and premium streaming quality since 2019.',
  keywords: 'about theiptv, theiptv company, theiptv provider, premium theiptv service, theiptv history'
}

export default function About() {
  const stats = [
    { icon: <Users className="w-8 h-8" />, number: "100K+", label: "Happy Customers" },
    { icon: <Star className="w-8 h-8" />, number: "25K+", label: "Live TV Channels" },
    { icon: <CheckCircle className="w-8 h-8" />, number: "99.9%", label: "Uptime Guarantee" },
    { icon: <Clock className="w-8 h-8" />, number: "6+", label: "Years Experience" }
  ]

  const features = [
    {
      icon: <Zap className="w-12 h-12 text-primary-600" />,
      title: "Lightning Fast Streaming",
      description: "Experience buffer-free theiptv streaming with our premium servers and advanced technology."
    },
    {
      icon: <Shield className="w-12 h-12 text-primary-600" />,
      title: "Secure & Reliable",
      description: "Your theiptv subscription is protected with enterprise-grade security and 99.9% uptime."
    },
    {
      icon: <Users className="w-12 h-12 text-primary-600" />,
      title: "Customer First",
      description: "Our theiptv service includes 24/7 premium support to ensure your streaming experience is perfect."
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-blue-300">theiptv</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            Your trusted provider of premium theiptv subscriptions, delivering exceptional 
            streaming experiences since 2019 with the best theiptv service in the industry.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center text-primary-600 mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
              Our IPTV Satlink Journey
            </h2>
            
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="text-xl leading-relaxed mb-8">
                Since 2019, IPTV Satlink has been at the forefront of revolutionizing home entertainment 
                through our premium IPTV Satlink subscriptions. We started with a simple mission: to provide 
                the best IPTV Satlink service that combines quality, reliability, and affordability.
              </p>
              
              <p className="text-lg leading-relaxed mb-8">
                Our IPTV Satlink platform has grown to serve over 100,000 satisfied customers worldwide, 
                offering access to 25,000+ live TV channels and 26,000+ movies and TV shows. We've built 
                our reputation on delivering the most comprehensive IPTV Satlink experience in the market.
              </p>
              
              <p className="text-lg leading-relaxed">
                Today, IPTV Satlink stands as the premier destination for IPTV Satlink subscriptions, 
                continuing to innovate and improve our service to meet the evolving needs of modern 
                entertainment consumers who demand the best IPTV Satlink solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Why Choose Our IPTV Satlink Service?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready for Your IPTV Satlink Experience?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have chosen our premium IPTV Satlink service 
            for their entertainment needs.
          </p>
          <a 
            href="https://wa.link/byh2yk" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Get IPTV Satlink Now
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
