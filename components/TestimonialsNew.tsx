import { Star, Quote, User, Shield, Zap, Heart } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Michael Chen",
      location: "Los Angeles, CA",
      rating: 5,
      text: "Best decision I ever made! Cut my cable bill from $180/month to nothing and got way more content. The sports coverage is incredible - never miss a game.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      verified: true,
      plan: "Lifetime Member"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      location: "Miami, FL",
      rating: 5,
      text: "My kids love the international channels and I save over $2000 a year. Setup was so easy, even my grandmother could do it!",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
      verified: true,
      plan: "Family Plan"
    },
    {
      id: 3,
      name: "Robert Martinez",
      location: "Chicago, IL",
      rating: 5,
      text: "Crystal clear 4K quality and zero buffering. Customer support answered in 2 minutes when I had a question. These guys are legit!",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      verified: true,
      plan: "Premium User"
    },
    {
      id: 4,
      name: "Emily Davis",
      location: "New York, NY",
      rating: 5,
      text: "Switched from Netflix + Hulu + Disney+ and couldn't be happier. Now I have everything in one place for a fraction of the cost.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      verified: true,
      plan: "Lifetime Member"
    },
    {
      id: 5,
      name: "James Wilson",
      location: "Dallas, TX",
      rating: 5,
      text: "The movie selection is insane! Latest releases, classics, international films - everything you could want. Worth every penny.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      verified: true,
      plan: "Movie Buff"
    },
    {
      id: 6,
      name: "Lisa Thompson",
      location: "Seattle, WA",
      rating: 5,
      text: "Works perfectly on all my devices. Watch on TV, phone, tablet - seamless experience everywhere. Highly recommend!",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      verified: true,
      plan: "Multi-Device User"
    }
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20 relative">
      {/* Section-specific background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img 
          src="/images/background/flower (1).png" 
          alt="" 
          className="absolute top-20 right-20 w-20 sm:w-28 lg:w-36 opacity-8 mix-blend-multiply"
        />
        <img 
          src="/images/background/box-shape.png" 
          alt="" 
          className="absolute bottom-20 left-20 w-16 sm:w-20 lg:w-24 opacity-10 mix-blend-soft-light"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Heart className="w-6 h-6 text-red-500 mr-2" />
            <span className="text-primary-500 text-sm font-semibold uppercase tracking-wide">
              Customer Stories
            </span>
            <Heart className="w-6 h-6 text-red-500 ml-2" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Join thousands of happy customers who made the switch to Global Pro IPTV
          </p>
        </div>

        {/* Stats Bar */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-16 p-6 bg-white/10 backdrop-blur-sm border border-primary-500/20 rounded-xl shadow-lg">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-primary-500 mb-1">50,000+</div>
            <div className="text-sm text-gray-300">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <div className="text-sm text-gray-300">4.9/5 Rating</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-primary-500 mb-1">99.9%</div>
            <div className="text-sm text-gray-300">Uptime</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white/10 backdrop-blur-sm border border-primary-500/20 rounded-xl p-6 shadow-lg hover:shadow-xl hover:bg-white/15 transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 -left-3 bg-primary-500 text-black p-2 rounded-full">
                <Quote className="w-4 h-4" />
              </div>

              {/* Rating Stars */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover mr-3 border-2 border-primary-500/30"
                  />
                  <div>
                    <div className="font-semibold text-white flex items-center">
                      {testimonial.name}
                      {testimonial.verified && (
                        <Shield className="w-4 h-4 text-green-500 ml-1" />
                      )}
                    </div>
                    <div className="text-xs text-gray-400">{testimonial.location}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-primary-400 font-medium">{testimonial.plan}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-sm border border-primary-500/20 rounded-xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Join Them?
            </h3>
            <p className="text-gray-300 mb-6">
              Start your IPTV journey today with our risk-free 30-day guarantee
            </p>
            <a 
              href="https://wa.link/0yw033"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-primary inline-block"
            >
              Get Started Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
