'use client'

import { useState, useEffect } from 'react'
import { MessageCircle, X, Phone } from 'lucide-react'

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  // Show widget after page loads
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  const whatsappNumber = "+13237044063"
  const whatsappLink = "https://wa.link/x83rg1"

  const openWhatsApp = () => {
    window.open(whatsappLink, '_blank')
    setIsOpen(false)
  }

  const toggleWidget = () => {
    setIsOpen(!isOpen)
  }

  if (!isVisible) return null

  return (
    <>
      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Chat Popup */}
        {isOpen && (
          <div className="absolute bottom-16 right-0 w-80 bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden animate-fade-in-up">
            {/* Header */}
            <div className="bg-green-600 text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">TheIPTV Support</h3>
                  <p className="text-xs text-green-100">Typically replies instantly</p>
                </div>
              </div>
              <button 
                onClick={toggleWidget}
                className="text-white hover:text-green-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Content */}
            <div className="p-4 space-y-4">
              {/* Support Agent Message */}
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold text-xs">IS</span>
                </div>
                <div className="bg-gray-100 rounded-lg p-3 max-w-full">
                  <p className="text-sm text-gray-800">
                    👋 Hello! Need help with TheIPTV? 
                  </p>
                  <p className="text-sm text-gray-800 mt-2">
                    ✅ Free trial setup<br/>
                    ✅ Subscription questions<br/>
                    ✅ Technical support<br/>
                    ✅ Device compatibility
                  </p>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-2">
                <button 
                  onClick={openWhatsApp}
                  className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition-colors text-sm font-semibold flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Start Chat on WhatsApp</span>
                </button>
                
                <div className="grid grid-cols-2 gap-2">
                  <button 
                    onClick={openWhatsApp}
                    className="bg-blue-50 text-blue-600 p-2 rounded-lg hover:bg-blue-100 transition-colors text-xs font-medium"
                  >
                    🚀 Free Trial
                  </button>
                  <button 
                    onClick={openWhatsApp}
                    className="bg-purple-50 text-purple-600 p-2 rounded-lg hover:bg-purple-100 transition-colors text-xs font-medium"
                  >
                    💳 Pricing
                  </button>
                </div>
              </div>

              {/* Contact Info */}
              <div className="border-t pt-3 text-center">
                <p className="text-xs text-gray-500">
                  📞 {whatsappNumber}
                </p>
                <p className="text-xs text-gray-500">
                  🕒 Mon-Sat: 11am-10pm
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Floating Button */}
        <button
          onClick={toggleWidget}
          className="bg-green-600 hover:bg-green-700 text-white w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center transform hover:scale-110 relative"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <>
              <MessageCircle className="w-6 h-6" />
              {/* Pulse Animation */}
              <div className="absolute inset-0 bg-green-600 rounded-full animate-ping opacity-75"></div>
            </>
          )}
        </button>

        {/* New Message Notification */}
        {!isOpen && (
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-bold animate-bounce">
            1
          </div>
        )}
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.3s ease-out;
        }
      `}</style>
    </>
  )
}
