'use client'

export default function ChannelLogosCarousel() {
  // Generate array of logo filenames
  const logos = Array.from({ length: 17 }, (_, i) => `/images/logos/${i + 1}.webp`)
  
  return (
    <section className="py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white mb-8 sm:mb-12">
          Available on 25,000+ Premium Channels
        </h2>
        
        {/* Infinite scrolling logos container */}
        <div className="relative overflow-hidden">
          <div className="flex space-x-4 sm:space-x-6 md:space-x-8 animate-scroll-infinite">
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-white rounded-lg shadow-md p-2 sm:p-3 md:p-4 flex items-center justify-center hover:shadow-lg transition-shadow"
              >
                <img
                  src={logo}
                  alt={`Channel ${index + 1}`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {logos.map((logo, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-white rounded-lg shadow-md p-2 sm:p-3 md:p-4 flex items-center justify-center hover:shadow-lg transition-shadow"
              >
                <img
                  src={logo}
                  alt={`Channel ${index + 1}`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        
        <p className="text-center text-gray-300 mt-6 sm:mt-8 text-sm sm:text-base lg:text-lg">
          Stream from top networks worldwide with your Global Pro IPTV subscription
        </p>
      </div>
    </section>
  )
}
