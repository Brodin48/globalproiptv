import Header from '../components/Header'
import Footer from '../components/Footer'
import { Home, Search, Phone, FileText } from 'lucide-react'

export default function NotFound() {
  const suggestedPages = [
    {
      title: "Homepage",
      url: "/",
      description: "Return to our main page",
      icon: Home
    },
    {
      title: "About My IPTV",
      url: "/about",
      description: "Learn about our services",
      icon: FileText
    },
    {
      title: "Contact Us",
      url: "/contact",
      description: "Get in touch with support",
      icon: Phone
    },
    {
      title: "Site Search",
      url: "/sitemap",
      description: "Browse all our pages",
      icon: Search
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            {/* 404 Error */}
            <div className="mb-8">
              <h1 className="text-6xl sm:text-8xl font-bold text-primary-600 mb-4">404</h1>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
                Page Not Found
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Sorry, the page you're looking for doesn't exist or may have been moved. 
                This might be an old URL from our previous website.
              </p>
            </div>

            {/* Old URL Notice */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">
                Looking for an old page?
              </h3>
              <p className="text-blue-700 text-sm">
                We've recently updated our website structure. If you're looking for content from our old site, 
                please check the suggested pages below or use our site search.
              </p>
            </div>

            {/* Suggested Pages */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {suggestedPages.map((page, index) => {
                const IconComponent = page.icon
                return (
                  <a
                    key={index}
                    href={page.url}
                    className="bg-white border border-gray-200 rounded-lg p-4 hover:border-primary-300 hover:shadow-md transition-all duration-200 text-left group"
                  >
                    <div className="flex items-center space-x-3">
                      <IconComponent className="w-5 h-5 text-primary-600 group-hover:text-primary-700" />
                      <div>
                        <h4 className="font-semibold text-gray-800 group-hover:text-primary-700">
                          {page.title}
                        </h4>
                        <p className="text-sm text-gray-600">{page.description}</p>
                      </div>
                    </div>
                  </a>
                )
              })}
            </div>

            {/* Contact Support */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-2">
                Still can't find what you're looking for?
              </h3>
              <p className="text-green-700 mb-4">
                Our support team is here to help you find the right page or information.
              </p>
              <a
                href="https://wa.link/byh2yk"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors font-semibold inline-flex items-center"
              >
                <Phone className="w-4 h-4 mr-2" />
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
