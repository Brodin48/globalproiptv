'use client'

import { useState, useEffect } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'

interface TestimonialImage {
  filename: string
  path: string
  id: string
}

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<TestimonialImage[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadTestimonials() {
      try {
        const response = await fetch('/api/testimonials')
        const data = await response.json()
        setTestimonials(data.testimonials || [])
      } catch (error) {
        console.error('Error loading testimonials:', error)
        setTestimonials([])
      } finally {
        setLoading(false)
      }
    }

    loadTestimonials()
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
  }

  if (loading) {
    return (
      <section id="testimonials" className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-300 rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-300 rounded w-96 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (testimonials.length === 0) {
    return (
      <section id="testimonials" className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
              What Our Customers Say
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-xs sm:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed">
              Customer testimonials will appear here automatically when images are added to the testimonials folder.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="testimonials" className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
            What Our Customers Say
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-xs sm:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed">
            Real testimonials from our satisfied customers around the world. 
            These are genuine reviews from people who use our My IPTV service.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main testimonial display */}
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-12 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-100 rounded-full -mr-16 -mt-16 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-100 rounded-full -ml-12 -mb-12 opacity-50"></div>
            
            {/* Quote icon */}
            <Quote className="w-12 h-12 sm:w-16 sm:h-16 text-primary-500 mb-6 mx-auto opacity-20" />
            
            {/* Testimonial image */}
            <div className="relative mb-6 sm:mb-8">
              <img
                src={testimonials[currentIndex].path}
                alt={`Customer testimonial ${testimonials[currentIndex].id}`}
                className="max-w-full h-auto mx-auto rounded-lg shadow-lg"
                style={{
                  maxHeight: '400px',
                  objectFit: 'contain'
                }}
                loading="lazy"
              />
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-700 p-1 sm:p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
              disabled={testimonials.length <= 1}
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-700 p-1 sm:p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
              disabled={testimonials.length <= 1}
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Dot indicators */}
          {testimonials.length > 1 && (
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex
                      ? 'bg-primary-600 scale-110'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          )}
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
            <div className="text-sm sm:text-base text-gray-600">
              <span className="font-semibold">{testimonials.length}</span> Real Reviews
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
