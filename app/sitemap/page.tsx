import { Metadata } from 'next'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Home, DollarSign, Play, FileText, Download, Info, Phone, Shield, Tv, Users, Package } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sitemap - IPTV Satlink | Complete Site Navigation',
  description: 'Browse all pages and sections of IPTV Satlink website. Find IPTV services, pricing, downloads, and support information.',
  keywords: 'IPTV Satlink sitemap, website navigation, IPTV services, site structure'
}

interface SitemapSection {
  title: string
  icon: any
  color: string
  links: Array<{
    title: string
    url: string
    description: string
  }>
}

export default function SitemapPage() {
  const sitemapSections: SitemapSection[] = [
    {
      title: "Main Pages",
      icon: Home,
      color: "blue",
      links: [
        {
          title: "Homepage",
          url: "/",
          description: "Welcome to IPTV Satlink - Premium IPTV service with 25,000+ channels"
        },
        {
          title: "About Us",
          url: "/about",
          description: "Learn about IPTV Satlink and our premium streaming services"
        },
        {
          title: "Contact",
          url: "/contact",
          description: "Get in touch with our support team for assistance"
        }
      ]
    },
    {
      title: "Services & Pricing",
      icon: DollarSign,
      color: "green",
      links: [
        {
          title: "Pricing Plans",
          url: "/pricing",
          description: "Choose from our flexible IPTV subscription plans"
        },
        {
          title: "Free Trial",
          url: "/free-trial",
          description: "Start your free IPTV trial today - no credit card required"
        }
      ]
    },
    {
      title: "IPTV Services",
      icon: Tv,
      color: "purple",
      links: [
        {
          title: "Flix IPTV",
          url: "/flix-iptv",
          description: "Premium Flix IPTV service with HD & 4K streaming"
        },
        {
          title: "Flix IPTV Plus",
          url: "/flix-iptv-1",
          description: "Enhanced Flix IPTV service with additional features"
        },
        {
          title: "Flix IPTV Smart TV Setup",
          url: "/flix-iptv-activation-smart-tv",
          description: "Guide to activate Flix IPTV on Smart TVs"
        },
        {
          title: "IBO IPTV",
          url: "/ibo-iptv",
          description: "IBO IPTV service with extensive channel lineup"
        },
        {
          title: "Duplex IPTV",
          url: "/duplex-iptv-activation",
          description: "Duplex IPTV activation and setup guide"
        }
      ]
    },
    {
      title: "Subscription Packages",
      icon: Package,
      color: "orange",
      links: [
        {
          title: "Aroma IPTV 12-Month Package",
          url: "/aroma-iptv-subscription-for-12-months",
          description: "Premium Aroma IPTV subscription for 12 months"
        },
        {
          title: "Bob IPTV Premium Package",
          url: "/bob-iptv-subscription-for-12-months-premium-package-3-months-free",
          description: "Bob IPTV premium 12-month package with 3 months free"
        },
        {
          title: "Falcon IPTV 2-Device Package",
          url: "/falcon-iptv-subscription-for-12-months-supports-2-devices",
          description: "Falcon IPTV 12-month subscription supporting 2 devices"
        }
      ]
    },
    {
      title: "Downloads & Apps",
      icon: Download,
      color: "indigo",
      links: [
        {
          title: "Windows IPTV Player",
          url: "/apps/Windows_IPTV_Player_3.0.exe",
          description: "Download Windows IPTV Player v3.0 for PC"
        },
        {
          title: "IpFox TV Setup",
          url: "/apps/IpFoxTVSetup.exe",
          description: "Download IpFox TV setup for Windows devices"
        }
      ]
    },
    {
      title: "Business Solutions",
      icon: Users,
      color: "teal",
      links: [
        {
          title: "IPTV Reseller Program",
          url: "/iptv-reseller",
          description: "Join our IPTV reseller program and start your business"
        }
      ]
    },
    {
      title: "Blog & Resources",
      icon: FileText,
      color: "red",
      links: [
        {
          title: "Blog",
          url: "/blog",
          description: "Latest IPTV news, guides, and updates"
        },
        {
          title: "Flix IPTV Complete Guide",
          url: "/blog/flix-iptv-complete-guide",
          description: "Comprehensive guide to using Flix IPTV services"
        }
      ]
    },
    {
      title: "Legal & Privacy",
      icon: Shield,
      color: "gray",
      links: [
        {
          title: "Privacy Policy",
          url: "/privacy-policy",
          description: "Our privacy policy and data protection information"
        }
      ]
    }
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-50 border-blue-200 text-blue-800",
      green: "bg-green-50 border-green-200 text-green-800",
      purple: "bg-purple-50 border-purple-200 text-purple-800",
      orange: "bg-orange-50 border-orange-200 text-orange-800",
      indigo: "bg-indigo-50 border-indigo-200 text-indigo-800",
      teal: "bg-teal-50 border-teal-200 text-teal-800",
      red: "bg-red-50 border-red-200 text-red-800",
      gray: "bg-gray-50 border-gray-200 text-gray-800"
    }
    return colors[color as keyof typeof colors] || colors.gray
  }

  const getIconColorClasses = (color: string) => {
    const colors = {
      blue: "text-blue-600",
      green: "text-green-600",
      purple: "text-purple-600",
      orange: "text-orange-600",
      indigo: "text-indigo-600",
      teal: "text-teal-600",
      red: "text-red-600",
      gray: "text-gray-600"
    }
    return colors[color as keyof typeof colors] || colors.gray
  }

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-12 sm:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Website <span className="text-blue-300">Sitemap</span>
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto">
            Navigate through all sections of IPTV Satlink website. Find IPTV services, pricing, downloads, and support.
          </p>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {sitemapSections.map((section, index) => {
              const IconComponent = section.icon
              return (
                <div key={index} className={`p-6 rounded-2xl border-2 ${getColorClasses(section.color)}`}>
                  <div className="flex items-center space-x-3 mb-6">
                    <IconComponent className={`w-6 h-6 ${getIconColorClasses(section.color)}`} />
                    <h2 className="text-xl font-bold">{section.title}</h2>
                  </div>
                  
                  <div className="space-y-4">
                    {section.links.map((link, linkIndex) => (
                      <div key={linkIndex} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                        <a 
                          href={link.url}
                          className="block group"
                        >
                          <h3 className="font-semibold text-gray-800 group-hover:text-primary-600 transition-colors mb-1">
                            {link.title}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {link.description}
                          </p>
                          <div className="text-xs text-primary-600 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            {link.url}
                          </div>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Quick Stats */}
          <div className="mt-12 bg-gray-50 rounded-2xl p-6 sm:p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Website Overview
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <div className="text-2xl font-bold text-primary-600">20+</div>
                <div className="text-sm text-gray-600">Total Pages</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-600">8</div>
                <div className="text-sm text-gray-600">Main Services</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-600">3</div>
                <div className="text-sm text-gray-600">Subscription Packages</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-600">2</div>
                <div className="text-sm text-gray-600">App Downloads</div>
              </div>
            </div>
          </div>

          {/* XML Sitemap Link */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              For search engines and technical use:
            </p>
            <a 
              href="/sitemap.xml"
              className="inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold"
            >
              <FileText className="w-5 h-5 mr-2" />
              View XML Sitemap
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
