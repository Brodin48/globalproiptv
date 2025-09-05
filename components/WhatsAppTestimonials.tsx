import { MessageCircle, Verified, Clock } from 'lucide-react'

export default function WhatsAppTestimonials() {
  const whatsappTestimonials = [
    {
      id: 1,
      image: '/images/testimonials/11 (3).webp',
      customerName: 'David R.',
      time: '2:47 PM',
      preview: 'Amazing service! Works perfectly on all my devices...'
    },
    {
      id: 2,
      image: '/images/testimonials/3 (2).webp',
      customerName: 'Maria S.',
      time: '4:23 PM',
      preview: 'Best IPTV service I\'ve ever used. Crystal clear...'
    },
    {
      id: 3,
      image: '/images/testimonials/5 (1) (1).webp',
      customerName: 'John M.',
      time: '1:15 PM',
      preview: 'Setup was so easy and the channel selection...'
    },
    {
      id: 4,
      image: '/images/testimonials/6 (2).webp',
      customerName: 'Jennifer L.',
      time: '5:08 PM',
      preview: 'Saved me hundreds of dollars! Thank you so much...'
    },
    {
      id: 5,
      image: '/images/testimonials/8 (1).webp',
      customerName: 'Mike T.',
      time: '3:52 PM',
      preview: 'Customer support is incredible. Fixed my issue...'
    },
    {
      id: 6,
      image: '/images/testimonials/IMG_4A06E8211891-1.jpeg',
      customerName: 'Sarah K.',
      time: '11:34 AM',
      preview: 'All sports channels work perfectly! Love it...'
    },
    {
      id: 7,
      image: '/images/testimonials/IMG_57DB26C2019C-1.jpeg',
      customerName: 'Alex P.',
      time: '6:42 PM',
      preview: 'Quality is amazing! 4K streams without buffering...'
    },
    {
      id: 8,
      image: '/images/testimonials/IMG_6826505462B4-1.jpeg',
      customerName: 'Lisa W.',
      time: '9:16 AM',
      preview: 'International channels are exactly what I needed...'
    },
    {
      id: 9,
      image: '/images/testimonials/IMG_7012.jpg',
      customerName: 'Robert C.',
      time: '7:29 PM',
      preview: 'Works on my smart TV, phone, and tablet perfectly...'
    },
    {
      id: 10,
      image: '/images/testimonials/IMG_7013.jpg',
      customerName: 'Amanda H.',
      time: '12:18 PM',
      preview: 'Movie selection is incredible! Latest releases...'
    },
    {
      id: 11,
      image: '/images/testimonials/IMG_8997793C2348-1.jpeg',
      customerName: 'Carlos M.',
      time: '4:55 PM',
      preview: 'Zero downtime since I started. Very reliable...'
    },
    {
      id: 12,
      image: '/images/testimonials/IMG_FA40D45E27DE-1.jpeg',
      customerName: 'Emma D.',
      time: '8:03 AM',
      preview: 'Support team helped me instantly! Great service...'
    }
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20 relative">
      {/* Section-specific background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img 
          src="/images/background/line-red (1).svg" 
          alt="" 
          className="absolute top-20 right-20 w-20 sm:w-28 lg:w-36 opacity-8 mix-blend-soft-light"
        />
        <img 
          src="/images/background/flower (1).png" 
          alt="" 
          className="absolute bottom-20 left-20 w-16 sm:w-20 lg:w-24 opacity-10 mix-blend-multiply"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <MessageCircle className="w-6 h-6 text-green-600 mr-2" />
            <span className="text-primary-500 text-sm font-semibold uppercase tracking-wide">
              Real Customer Messages
            </span>
            <MessageCircle className="w-6 h-6 text-green-600 ml-2" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            WhatsApp Testimonials
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            See what our customers are saying directly to us on WhatsApp - unfiltered, authentic feedback
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {whatsappTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
            >
              {/* WhatsApp Screenshot - Full Image */}
              <div className="relative">
                <img
                  src={testimonial.image}
                  alt="WhatsApp customer testimonial"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-sm border border-primary-500/20 rounded-xl p-8 shadow-lg max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold text-white">Got Questions?</h3>
                <p className="text-sm text-gray-300">Chat with us on WhatsApp!</p>
              </div>
            </div>
            <a
              href="https://wa.link/854l98"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Start WhatsApp Chat
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
