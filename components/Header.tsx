'use client'

import { useState, useEffect, useRef } from 'react'
import { Menu, X, Mail, Phone } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full flex justify-center">
      <div className="w-full max-w-8xl mx-auto px-0 sm:px-8 lg:px-12 xl:px-16 pt-0 pb-2 sm:py-4">
        <div className="bg-dark-800/95 backdrop-blur-sm shadow-lg rounded-none sm:rounded-lg border-0 sm:border border-primary-500/20 px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex justify-between items-center py-2 sm:py-3">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/images/logo.svg" 
                alt="Global Pro IPTV Logo" 
                className="h-8 sm:h-8 lg:h-10 w-auto object-contain"
              />
            </div>

            {/* Navigation Links - Desktop */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <a href="/" className="text-white hover:text-primary-500 transition-colors font-medium">
                Home
              </a>
              <a href="/about" className="text-white hover:text-primary-500 transition-colors font-medium">
                About
              </a>
              <a href="/pricing" className="text-white hover:text-primary-500 transition-colors font-medium">
                Pricing
              </a>
              <a href="/channels" className="text-white hover:text-primary-500 transition-colors font-medium">
                Channels
              </a>
              <a href="/blog" className="text-white hover:text-primary-500 transition-colors font-medium">
                Blog
              </a>
              <a href="/contact" className="text-white hover:text-primary-500 transition-colors font-medium">
                Contact
              </a>
            </nav>

            {/* Contact Information - Desktop */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
              {/* Email */}
              <a 
                href="mailto:contact@globalproiptv.com"
                className="flex items-center text-white hover:text-primary-500 transition-colors group"
              >
                <Mail className="w-4 h-4 text-primary-500 mr-2 group-hover:text-primary-400" />
                <span className="text-sm lg:text-base font-medium">contact@globalproiptv.com</span>
              </a>
              
              {/* WhatsApp */}
              <a 
                href="https://wa.link/x83rg1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center bg-primary-500/20 text-primary-400 hover:bg-primary-500/30 px-3 py-2 rounded-lg transition-all group"
              >
                <svg className="w-5 h-5 text-primary-500 mr-2 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.934 3.79"/>
                </svg>
                <span className="text-sm lg:text-base font-bold">WhatsApp</span>
              </a>
            </div>

            {/* Mobile Contact & Menu Button */}
            <div className="flex md:hidden items-center space-x-2">
              {/* WhatsApp Icon */}
              <a 
                href="https://wa.link/x83rg1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-primary-500 text-black"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.934 3.79"/>
                </svg>
              </a>
              
              {/* Email Icon */}
              <a 
                href="mailto:contact@globalproiptv.com"
                className="p-2.5 rounded-full bg-trust-600 text-white"
              >
                <Mail className="w-6 h-6" />
              </a>
              
              {/* Menu Button */}
              <button
                className="p-2.5 text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-primary-500/20">
              <div className="space-y-3">
                {/* Contact Info First */}
                <div className="bg-white/5 rounded-lg p-3 space-y-3">
                  <a 
                    href="https://wa.link/x83rg1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-white hover:text-primary-500 transition-colors"
                  >
                    <svg className="w-5 h-5 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.934 3.79"/>
                    </svg>
                    <div>
                      <span className="text-sm font-bold block">WhatsApp</span>
                      <span className="text-xs text-gray-400">+1 (323) 704-4063</span>
                    </div>
                  </a>
                  <a 
                    href="mailto:contact@globalproiptv.com"
                    className="flex items-center text-white hover:text-primary-500 transition-colors"
                  >
                    <Mail className="w-5 h-5 text-primary-500 mr-3" />
                    <div>
                      <span className="text-sm font-bold block">Email</span>
                      <span className="text-xs text-gray-400">contact@globalproiptv.com</span>
                    </div>
                  </a>
                </div>
                
                {/* Mobile Menu Items */}
                <nav className="space-y-2">
                  <a href="/" className="block text-white hover:text-primary-500 py-2 px-3 rounded-lg hover:bg-white/5 transition-all">
                    Home
                  </a>
                  <a href="/about" className="block text-white hover:text-primary-500 py-2 px-3 rounded-lg hover:bg-white/5 transition-all">
                    About
                  </a>
                  <a href="/pricing" className="block text-white hover:text-primary-500 py-2 px-3 rounded-lg hover:bg-white/5 transition-all">
                    Pricing
                  </a>
                  <a href="/channels" className="block text-white hover:text-primary-500 py-2 px-3 rounded-lg hover:bg-white/5 transition-all">
                    Channels
                  </a>
                  <a href="/blog" className="block text-white hover:text-primary-500 py-2 px-3 rounded-lg hover:bg-white/5 transition-all">
                    Blog
                  </a>
                  <a href="#features" className="block text-white hover:text-primary-500 py-2 px-3 rounded-lg hover:bg-white/5 transition-all">
                    Features
                  </a>
                  <a href="#testimonials" className="block text-white hover:text-primary-500 py-2 px-3 rounded-lg hover:bg-white/5 transition-all">
                    Reviews
                  </a>
                  <a href="/contact" className="block text-white hover:text-primary-500 py-2 px-3 rounded-lg hover:bg-white/5 transition-all">
                    Contact
                  </a>
                </nav>
                
                {/* CTA Button */}
                <div className="pt-3">
                  <a 
                    href="https://wa.link/jpfecl" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="cta-primary block text-center"
                  >
                    Get Started - Free Trial
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
