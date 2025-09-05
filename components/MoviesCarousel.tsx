'use client'

export default function MoviesCarousel() {
  // Generate array of movie poster filenames (with trailing space in path)
  const movies = Array.from({ length: 8 }, (_, i) => `/images/movies carousel /${i + 1}.png`)

  return (
    <section className="py-12 sm:py-16 bg-dark-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">
          26,000+ Movies & TV Shows Available
        </h2>
        
        {/* Infinite scrolling movies container */}
        <div className="relative overflow-hidden">
          <div className="flex space-x-3 sm:space-x-4 md:space-x-6 animate-scroll-infinite">
            {/* First set of movies */}
            {movies.map((movie, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64"
              >
                <div className="relative group overflow-hidden rounded-lg bg-gray-800 shadow-xl hover:scale-105 transition-all duration-300">
                  <img
                    src={movie}
                    alt={`Movie ${index + 1}`}
                    className="w-full h-44 sm:h-56 md:h-64 lg:h-80 xl:h-96 object-cover"
                  />
                  
                  {/* Hover overlay - Hidden on mobile for better performance */}
                  <div className="hidden sm:flex absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <div className="w-0 h-0 border-l-[8px] md:border-l-[12px] border-l-white border-t-[6px] md:border-t-[8px] border-t-transparent border-b-[6px] md:border-b-[8px] border-b-transparent ml-1"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {movies.map((movie, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64"
              >
                <div className="relative group overflow-hidden rounded-lg bg-gray-800 shadow-xl hover:scale-105 transition-all duration-300">
                  <img
                    src={movie}
                    alt={`Movie ${index + 1}`}
                    className="w-full h-44 sm:h-56 md:h-64 lg:h-80 xl:h-96 object-cover"
                  />
                  
                  {/* Hover overlay - Hidden on mobile for better performance */}
                  <div className="hidden sm:flex absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <div className="w-0 h-0 border-l-[8px] md:border-l-[12px] border-l-white border-t-[6px] md:border-t-[8px] border-t-transparent border-b-[6px] md:border-b-[8px] border-b-transparent ml-1"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Third set for extra smoothness */}
            {movies.map((movie, index) => (
              <div
                key={`third-${index}`}
                className="flex-shrink-0 w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64"
              >
                <div className="relative group overflow-hidden rounded-lg bg-gray-800 shadow-xl hover:scale-105 transition-all duration-300">
                  <img
                    src={movie}
                    alt={`Movie ${index + 1}`}
                    className="w-full h-44 sm:h-56 md:h-64 lg:h-80 xl:h-96 object-cover"
                  />
                  
                  {/* Hover overlay - Hidden on mobile for better performance */}
                  <div className="hidden sm:flex absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <div className="w-0 h-0 border-l-[8px] md:border-l-[12px] border-l-white border-t-[6px] md:border-t-[8px] border-t-transparent border-b-[6px] md:border-b-[8px] border-b-transparent ml-1"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <p className="text-center text-gray-300 mt-6 sm:mt-8 text-sm sm:text-base lg:text-lg">
          Enjoy the latest movies and TV shows with your TheIPTV subscription
        </p>
      </div>
    </section>
  )
}
