'use client'

import React, { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  title?: string
  subtitle?: string
  items?: FAQItem[]
  className?: string
}

const defaultFAQItems: FAQItem[] = [
  {
    question: "Is the price monthly? Will I be charged again?",
    answer: "Our pricing is flexible with both monthly and yearly subscription options. You can choose the plan that best fits your needs. Monthly subscriptions will automatically renew unless cancelled, while yearly subscriptions offer better value with significant savings."
  },
  {
    question: "How to subscribe to IPTV?",
    answer: "To subscribe to IPTV, visit our website and choose a subscription plan that fits your needs. You'll be redirected to another site to finalize your payment. Once completed, you'll receive your access codes with detailed step-by-step instructions to install on your devices."
  },
  {
    question: "Why am I redirected to another site to finalize my purchase?",
    answer: "For security and payment processing reasons, we use trusted third-party payment processors. This ensures your financial information is handled securely and allows us to accept various payment methods while maintaining the highest security standards."
  },
  {
    question: "Can I pay for my subscription with PayPal?",
    answer: "Yes, we accept PayPal payments along with major credit cards and other secure payment methods. You'll see all available payment options during the checkout process on our secure payment page."
  },
  {
    question: "How do I receive my subscription?",
    answer: "After successful payment, you'll receive an email with your IPTV access credentials and detailed setup instructions. This typically happens within minutes of completing your purchase. The email will include everything you need to get started on your devices."
  },
  {
    question: "Can I use IPTV on multiple devices simultaneously?",
    answer: "Yes, depending on your subscription plan, you can use IPTV on multiple devices at the same time. Our premium plans support 2-5 simultaneous connections, allowing your family to watch different content on various devices concurrently."
  },
  {
    question: "Do I need a satellite dish to use IPTV?",
    answer: "No, you don't need a satellite dish for IPTV. IPTV works through your internet connection, delivering content directly to your devices. All you need is a stable broadband internet connection (minimum 10 Mbps recommended for HD content)."
  },
  {
    question: "Does this IPTV service work in my country?",
    answer: "Our IPTV service works worldwide as long as you have a stable internet connection. We provide content from many countries and regions, ensuring you can access your favorite channels no matter where you are located."
  }
]

export default function FAQ({ 
  title = "Discover answers to frequently asked questions in our FAQ",
  subtitle,
  items = defaultFAQItems,
  className = ""
}: FAQProps) {
  const [openItem, setOpenItem] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenItem(prev => prev === index ? null : index)
  }

  return (
    <section className={`py-16 sm:py-20 bg-dark-800 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 max-w-4xl mx-auto">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid gap-4 md:grid-cols-2 md:gap-6">
            {items.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl shadow-sm border border-primary-500/20 overflow-hidden transition-all duration-200 hover:shadow-md hover:bg-white/15"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset transition-colors duration-200"
                  aria-expanded={openItem === index}
                >
                  <h3 className="text-lg font-semibold text-white pr-4">
                    {item.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openItem === index ? (
                      <Minus className="w-5 h-5 text-primary-500" />
                    ) : (
                      <Plus className="w-5 h-5 text-primary-500" />
                    )}
                  </div>
                </button>
                
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openItem === index
                      ? 'max-h-96 opacity-100'
                      : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="px-6 pb-5">
                    <p className="text-gray-300 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Help Section */}
        <div className="text-center mt-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-sm border border-primary-500/20 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-white mb-3">
              Still have questions?
            </h3>
            <p className="text-gray-300 mb-5">
              Can't find the answer you're looking for? Our support team is here to help you 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/contact"
                className="cta-primary"
              >
                Contact Support
              </a>
              <a
                href="https://wa.link/x83rg1"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-outline"
              >
                Try Free Trial
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
