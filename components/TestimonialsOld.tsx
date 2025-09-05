import { Star, Quote } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: "Michael Schmidt",
      country: "Germany",
      rating: 5,
      text: "I ordered it at 11pm, they activated it in less than 5 minutes. No regrets, Great image quality, Fast and professional service. I highly recommend it."
    },
    {
      name: "Erik Larsson", 
      country: "Norway",
      rating: 5,
      text: "Easy to set up, and convenient to use, super clear HD view and lots of European channels. IPTV folders are sorted elegantly. Keep up the good work!"
    },
    {
      name: "Anna Andersson",
      country: "Sweden", 
      rating: 5,
      text: "This is the best My IPTV service, that I would recommend anyone to use. Staff are so friendly, Channels are working so great too."
    },
    {
      name: "Lars Hansen",
      country: "Norway",
      rating: 5, 
      text: "I was looking for a subscription and i have found My IPTV, the service was great and the iptv is very good, I liked the quality and all my favorite football channels are in."
    },
    {
      name: "James Wilson",
      country: "UK",
      rating: 5,
      text: "Very great channel selection and VOD's, my family is very happy with the service for the last 2 years. the technical support is very responsive and supportive."
    },
    {
      name: "Sami Virtanen", 
      country: "Finland",
      rating: 5,
      text: "I recommend this My IPTV Service for all those who love watching Soccer. FHD channels and real time live streaming that too at a great price tag, what else do we need?"
    }
  ]

  return (
    <section id="testimonials" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
            What Our Customers Say
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-xs sm:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied customers 
            from around the world have to say about our My IPTV service.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card bg-white p-5 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-primary-500 mr-3 flex-shrink-0" />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-700 mb-4 sm:mb-6 italic leading-relaxed text-sm sm:text-base">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-gray-800 text-sm sm:text-base truncate">{testimonial.name}</div>
                  <div className="text-xs sm:text-sm text-gray-600">{testimonial.country}</div>
                </div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base flex-shrink-0 ml-3">
                  {testimonial.name.charAt(0)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 bg-white rounded-xl p-4 sm:p-6 shadow-lg">
            <div className="flex items-center">
              <div className="flex space-x-1 mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-sm sm:text-base font-semibold text-gray-800">5.0/5 Rating</span>
            </div>
            <div className="text-sm sm:text-base text-gray-600">
              <span className="font-semibold">10,000+</span> Happy Customers
            </div>
            <div className="text-sm sm:text-base text-gray-600">
              <span className="font-semibold">99.9%</span> Uptime
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
