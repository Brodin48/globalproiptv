import FAQ from '@/components/FAQ'

export const metadata = {
  title: 'FAQ - Frequently Asked Questions | MyIPTV',
  description: 'Find answers to frequently asked questions about our IPTV service, subscription plans, device compatibility, and more.',
  keywords: 'IPTV FAQ, questions, support, help, subscription, streaming',
}

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-600 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl sm:text-2xl opacity-90 max-w-3xl mx-auto">
            Everything you need to know about our IPTV service
          </p>
        </div>
      </section>

      {/* FAQ Component */}
      <FAQ 
        title="Get Quick Answers to Common Questions"
        className="py-20"
      />
    </div>
  )
}
