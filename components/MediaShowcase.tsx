'use client'

export default function MediaShowcase() {
  // Movie/Series posters (top marquee)
  const movies = Array.from({ length: 8 }, (_, i) => `/images/movies carousel /${i + 1}.png`)
  
  // Channel logos (bottom marquee) 
  const logos = Array.from({ length: 17 }, (_, i) => `/images/logos/${i + 1}.webp`)

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        {/* Main heading */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Unlimited Streaming of Latest Movies,
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Series and Live TV Channels.
          </h3>
        </div>

        {/* Movies Marquee (Top Row) */}
        <div className="relative overflow-hidden mb-8 sm:mb-12">
          <div className="flex space-x-4 sm:space-x-6 animate-scroll-infinite">
            {/* First set of movies */}
            {movies.map((movie, index) => (
              <div
                key={`movies-first-${index}`}
                className="flex-shrink-0 w-40 sm:w-48 md:w-56 lg:w-64 h-60 sm:h-72 md:h-80 lg:h-96"
              >
                <img
                  src={movie}
                  alt={`Movie ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {movies.map((movie, index) => (
              <div
                key={`movies-second-${index}`}
                className="flex-shrink-0 w-40 sm:w-48 md:w-56 lg:w-64 h-60 sm:h-72 md:h-80 lg:h-96"
              >
                <img
                  src={movie}
                  alt={`Movie ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Channel Logos Marquee (Bottom Rows) */}
        <div className="space-y-4 sm:space-y-6">
          {/* First row of logos */}
          <div className="relative overflow-hidden">
            <div className="flex space-x-4 sm:space-x-6 animate-scroll-infinite">
              {/* First set */}
              {logos.slice(0, 9).map((logo, index) => (
                <div
                  key={`logos-1-first-${index}`}
                  className="flex-shrink-0 w-32 h-20 sm:w-40 sm:h-24 md:w-48 md:h-28 lg:w-56 lg:h-32 bg-white rounded-lg shadow-md p-3 sm:p-4 flex items-center justify-center"
                >
                  <img
                    src={logo}
                    alt={`Channel ${index + 1}`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
              
              {/* Duplicate set */}
              {logos.slice(0, 9).map((logo, index) => (
                <div
                  key={`logos-1-second-${index}`}
                  className="flex-shrink-0 w-32 h-20 sm:w-40 sm:h-24 md:w-48 md:h-28 lg:w-56 lg:h-32 bg-white rounded-lg shadow-md p-3 sm:p-4 flex items-center justify-center"
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

          {/* Second row of logos */}
          <div className="relative overflow-hidden">
            <div className="flex space-x-4 sm:space-x-6 animate-scroll-infinite-reverse">
              {/* First set */}
              {logos.slice(9).map((logo, index) => (
                <div
                  key={`logos-2-first-${index}`}
                  className="flex-shrink-0 w-32 h-20 sm:w-40 sm:h-24 md:w-48 md:h-28 lg:w-56 lg:h-32 bg-white rounded-lg shadow-md p-3 sm:p-4 flex items-center justify-center"
                >
                  <img
                    src={logo}
                    alt={`Channel ${index + 10}`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
              
              {/* Duplicate set */}
              {logos.slice(9).map((logo, index) => (
                <div
                  key={`logos-2-second-${index}`}
                  className="flex-shrink-0 w-32 h-20 sm:w-40 sm:h-24 md:w-48 md:h-28 lg:w-56 lg:h-32 bg-white rounded-lg shadow-md p-3 sm:p-4 flex items-center justify-center"
                >
                  <img
                    src={logo}
                    alt={`Channel ${index + 10}`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
