'use client'

export default function TVShowcaseMarquee() {
  // Channel logos with colors similar to the image
  const channelLogos = [
    // Top row
    { name: 'UTB', color: 'bg-gray-300' },
    { name: 'M1', color: 'bg-orange-300' },
    { name: '⚡', color: 'bg-purple-300' },
    { name: 'Aup', color: 'bg-orange-200' },
    { name: '♥', color: 'bg-pink-200' },
    { name: '360°', color: 'bg-gray-600' },
    { name: 'MuzTV', color: 'bg-purple-300' },
    { name: 'INTER+', color: 'bg-gray-200' },
    { name: '9', color: 'bg-blue-300' },
    { name: 'MH+', color: 'bg-pink-300' },
    { name: 'M-1', color: 'bg-red-400' },
    { name: 'RT', color: 'bg-blue-400' },
    
    // Second row
    { name: 'KO', color: 'bg-gray-500' },
    { name: 'МИР', color: 'bg-red-300' },
    { name: 'СОВ', color: 'bg-red-300' },
    { name: 'СТС', color: 'bg-blue-300' },
    { name: 'STS', color: 'bg-pink-300' },
    { name: 'ДОМ', color: 'bg-orange-300' },
    { name: 'MTV', color: 'bg-gray-300' },
    { name: 'ЗЁЛ', color: 'bg-gray-600' },
    { name: 'ТВ3', color: 'bg-pink-300' },
    { name: 'ЖАР', color: 'bg-red-300' },
    { name: 'Т', color: 'bg-blue-400' },
    { name: 'O', color: 'bg-red-400' },
    
    // Third row
    { name: '8', color: 'bg-gray-300' },
    { name: 'НТВ', color: 'bg-green-300' },
    { name: 'Н', color: 'bg-pink-300' },
    { name: '⚡⚡', color: 'bg-purple-300' },
    { name: 'TV+', color: 'bg-pink-300' },
    { name: 'RU♥', color: 'bg-pink-300' },
    { name: 'Е', color: 'bg-orange-300' },
    { name: 'F♦', color: 'bg-gray-500' },
    
    // Fourth row (bottom repeating some)
    { name: '⚡', color: 'bg-purple-300' },
    { name: 'Aup', color: 'bg-orange-200' },
    { name: '♥', color: 'bg-pink-200' },
    { name: 'СОВ', color: 'bg-red-300' },
    { name: 'СТС', color: 'bg-blue-300' },
    { name: 'STS', color: 'bg-pink-300' },
    { name: 'MTV', color: 'bg-orange-300' },
    { name: 'Т', color: 'bg-blue-400' },
    { name: '5', color: 'bg-pink-300' },
    { name: 'С', color: 'bg-pink-300' },
    { name: 'К', color: 'bg-blue-400' },
    
    // Fifth row
    { name: 'Н', color: 'bg-pink-300' },
    { name: '⚡⚡', color: 'bg-purple-300' },
    { name: 'СТС', color: 'bg-orange-300' },
    { name: 'euro', color: 'bg-blue-300' },
    { name: 'INTER', color: 'bg-blue-300' },
    { name: '3+1', color: 'bg-pink-300' },
    { name: 'RU♥', color: 'bg-pink-300' },
    { name: 'Е', color: 'bg-orange-300' },
    { name: 'F♦', color: 'bg-gray-500' },
    { name: 'ТВ', color: 'bg-gray-600' },
    { name: '❄', color: 'bg-blue-300' },
    { name: '3', color: 'bg-red-400' }
  ]

  const createRow = (startIndex, count) => {
    return channelLogos.slice(startIndex, startIndex + count)
  }

  const rows = [
    createRow(0, 12),   // Top row
    createRow(12, 12),  // Second row  
    createRow(24, 8),   // Third row (shorter for center space)
    createRow(32, 11),  // Fourth row
    createRow(43, 12)   // Fifth row
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="relative">
        {/* Channel logos marquee rows */}
        <div className="space-y-6">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="relative">
              <div className={`flex items-center justify-center ${
                rowIndex % 2 === 0 ? 'animate-marquee-left' : 'animate-marquee-right'
              }`}>
                <div className="flex space-x-4 min-w-full justify-center">
                  {/* Triple the row for seamless loop */}
                  {[...row, ...row, ...row].map((channel, index) => (
                    <div
                      key={`${rowIndex}-${index}`}
                      className={`flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 ${channel.color} rounded-lg shadow-sm flex items-center justify-center border border-white/50`}
                    >
                      <span className="text-xs sm:text-sm lg:text-base font-bold text-gray-800 text-center px-1">
                        {channel.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Central floating TV screens cluster */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative w-96 h-64 sm:w-[500px] sm:h-80 lg:w-[600px] lg:h-96">
            {/* Main center screen */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-2 z-30">
              <div className="bg-gray-900 p-3 rounded-lg shadow-2xl">
                <div className="w-48 h-32 sm:w-60 sm:h-40 lg:w-72 lg:h-48 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-md relative overflow-hidden">
                  {/* Mock movie content */}
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <h3 className="text-white text-sm sm:text-base font-bold">Premium Content</h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary screens around the main one */}
            <div className="absolute top-4 left-8 transform -rotate-12 z-20">
              <div className="bg-gray-900 p-2 rounded-md shadow-xl">
                <div className="w-24 h-16 sm:w-32 sm:h-20 lg:w-40 lg:h-24 bg-gradient-to-r from-green-500 to-teal-500 rounded-sm"></div>
              </div>
            </div>

            <div className="absolute top-8 right-4 transform rotate-15 z-25">
              <div className="bg-gray-900 p-2 rounded-md shadow-xl">
                <div className="w-20 h-14 sm:w-28 sm:h-18 lg:w-36 lg:h-22 bg-gradient-to-r from-red-500 to-orange-500 rounded-sm"></div>
              </div>
            </div>

            <div className="absolute bottom-6 left-12 transform rotate-8 z-15">
              <div className="bg-gray-900 p-2 rounded-md shadow-xl">
                <div className="w-28 h-18 sm:w-36 sm:h-22 lg:w-44 lg:h-28 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-sm"></div>
              </div>
            </div>

            <div className="absolute bottom-8 right-8 transform -rotate-6 z-10">
              <div className="bg-gray-900 p-2 rounded-md shadow-xl">
                <div className="w-26 h-16 sm:w-34 sm:h-20 lg:w-42 lg:h-26 bg-gradient-to-r from-yellow-500 to-red-500 rounded-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for marquee animations */}
      <style jsx>{`
        @keyframes marquee-left {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        
        @keyframes marquee-right {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-marquee-left {
          animation: marquee-left 40s linear infinite;
        }
        
        .animate-marquee-right {
          animation: marquee-right 45s linear infinite;
        }
      `}</style>
    </section>
  )
}
