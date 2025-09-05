import Header from '../components/Header'
import Hero from '../components/Hero'
import ChannelLogosCarousel from '../components/ChannelLogosCarousel'
import SportsChannels from '../components/SportsChannels'
import MediaShowcase from '../components/MediaShowcase'
import Features from '../components/Features'
import SEOContent from '../components/SEOContent'
import Pricing from '../components/Pricing'
import LifetimePricing from '../components/LifetimePricing'
import Testimonials from '../components/TestimonialsNew'
import WhatsAppTestimonials from '../components/WhatsAppTestimonials'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import StructuredData from '../components/StructuredData'

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background decorative elements - Using only provided files */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <img 
          src="/images/background/hero-right-top (2).png" 
          alt="" 
          className="absolute top-0 right-0 w-64 sm:w-80 lg:w-96 opacity-20 mix-blend-soft-light"
        />
        <img 
          src="/images/background/hero-right-bottom.svg" 
          alt="" 
          className="absolute bottom-0 right-0 w-48 sm:w-60 lg:w-72 opacity-15 mix-blend-overlay"
        />
        <img 
          src="/images/background/section-curve.png" 
          alt="" 
          className="absolute bottom-0 left-0 w-full opacity-10 mix-blend-soft-light"
        />
        <img 
          src="/images/background/flower (1).png" 
          alt="" 
          className="absolute top-1/4 left-8 w-20 sm:w-28 lg:w-36 opacity-15 mix-blend-multiply"
        />
        <img 
          src="/images/background/box-shape.png" 
          alt="" 
          className="absolute top-1/2 right-1/4 w-16 sm:w-20 lg:w-24 opacity-12 mix-blend-soft-light"
        />
        <img 
          src="/images/background/line-red (1).svg" 
          alt="" 
          className="absolute top-2/3 left-1/3 w-24 sm:w-32 lg:w-40 opacity-18 mix-blend-multiply"
        />
        <img 
          src="/images/background/line-red-top (2).png" 
          alt="" 
          className="absolute bottom-1/3 right-1/3 w-28 sm:w-36 lg:w-44 opacity-15 mix-blend-soft-light"
        />
        <img 
          src="/images/background/frame (1).svg" 
          alt="" 
          className="absolute top-1/3 right-8 w-20 sm:w-24 lg:w-32 opacity-12 mix-blend-overlay"
        />
        <img 
          src="/images/background/feedback-circle (1).svg" 
          alt="" 
          className="absolute bottom-1/4 left-1/4 w-18 sm:w-22 lg:w-28 opacity-10 mix-blend-multiply"
        />
      </div>
      
      <div className="relative z-10">
        <StructuredData />
        <Header />
        <Hero />
        <main className="max-w-8xl mx-auto px-0 sm:px-8 lg:px-12 xl:px-16">
          <ChannelLogosCarousel />
        </main>
        <main className="max-w-8xl mx-auto px-0 sm:px-8 lg:px-12 xl:px-16">
          <SportsChannels />
        </main>
        <main className="max-w-8xl mx-auto px-0 sm:px-8 lg:px-12 xl:px-16">
          <Pricing />
        </main>
        <main className="max-w-8xl mx-auto px-0 sm:px-8 lg:px-12 xl:px-16">
          <LifetimePricing />
        </main>
        <main className="max-w-8xl mx-auto px-0 sm:px-8 lg:px-12 xl:px-16">
          <MediaShowcase />
          <Features />
          <SEOContent />
        </main>
        <WhatsAppTestimonials />
        <main className="max-w-8xl mx-auto px-0 sm:px-8 lg:px-12 xl:px-16">
          <Testimonials />
        </main>
        <FAQ />
        <Footer />
      </div>
    </div>
  )
}
