'use client'

import { useState, useEffect } from 'react'

export default function PostersMarquee() {
  // List of all your poster images
  const posters = [
    '/images/posters/IPTV-lifetime-1.webp',
    '/images/posters/IPTV-lifetime-4.webp',
    '/images/posters/IPTV-lifetime-7.webp',
    '/images/posters/IPTV-lifetime-15.webp',
    '/images/posters/IPTV-lifetime-19.webp',
    '/images/posters/IPTV-lifetime-24.webp',
    '/images/posters/IPTV-lifetime-25.webp',
    '/images/posters/IPTV-lifetime-90.webp',
    '/images/posters/IPTV-lifetime-91.webp',
    '/images/posters/IPTV-lifetime-92.webp',
    '/images/posters/IPTV-lifetime-94.webp',
    '/images/posters/IPTV-lifetime-100.webp',
    '/images/posters/IPTV-lifetime-101.webp',
    '/images/posters/IPTV-lifetime-102.webp',
    '/images/posters/IPTV-lifetime-2023-1.webp',
    '/images/posters/IPTV-lifetime-2024-95.webp',
    '/images/posters/IPTV-lifetime-2024-103.webp',
    '/images/posters/IPTV-lifetime-2024-104.webp',
    '/images/posters/IPTV-lifetime-2024-106.webp'
  ]

  return (
    <section className="py-12 sm:py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-2">
          Featured <span className="text-green-600">Content</span>
        </h2>
        <p className="text-center text-gray-600 text-sm sm:text-base">
          Discover amazing movies, series, and live events
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient overlays for smooth edges */}
        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
        
        {/* Scrolling posters */}
        <div className="flex animate-scroll-infinite gap-4">
          {/* First set of posters */}
          {posters.map((poster, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 relative group cursor-pointer"
            >
              <div className="w-24 sm:w-32 md:w-36 aspect-[2/3] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <img
                  src={poster}
                  alt={`Content poster ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-600 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Duplicate set for seamless loop */}
          {posters.map((poster, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 relative group cursor-pointer"
            >
              <div className="w-24 sm:w-32 md:w-36 aspect-[2/3] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <img
                  src={poster}
                  alt={`Content poster ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-600 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
