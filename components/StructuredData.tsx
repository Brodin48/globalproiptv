import Script from 'next/script'

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "TheIPTV",
    "description": "Premium TheIPTV subscription service with 25,000+ live TV channels and 26,000+ movies. HD & 4K streaming quality.",
    "provider": {
      "@type": "Organization",
      "name": "TheIPTV",
      "url": "https://theiptv.us"
    },
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "TheIPTV Subscription Plans",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "TheIPTV 1 Month Plan"
          },
          "price": "10.99",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "TheIPTV 3 Months Plan"
          },
          "price": "24.99",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "TheIPTV 6 Months Plan"
          },
          "price": "39.99",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "TheIPTV 12 Months Plan"
          },
          "price": "69.99", 
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "TheIPTV Lifetime Access"
          },
          "price": "199",
          "priceCurrency": "USD"
        }
      ]
    },
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "10.99",
      "highPrice": "199",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "bestRating": "5",
      "worstRating": "1", 
      "ratingCount": "1250"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Sarah Johnson"
        },
        "reviewBody": "Amazing TheIPTV service! Crystal clear quality and tons of channels."
      }
    ]
  }

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "TheIPTV",
    "url": "https://theiptv.us",
    "logo": "https://theiptv.us/images/logo.svg",
    "description": "Premium TheIPTV subscription service provider offering 25,000+ live channels and 26,000+ movies with HD & 4K quality.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1 (323) 704‑4063",
      "contactType": "Customer Service",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://twitter.com/theiptv",
      "https://facebook.com/theiptv"
    ]
  }

  const productData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "TheIPTV Subscription",
    "description": "Premium TheIPTV subscription with 25,000+ live TV channels, 26,000+ movies and TV shows, HD & 4K streaming quality.",
    "brand": {
      "@type": "Brand",
      "name": "TheIPTV"
    },
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "10.99",
      "highPrice": "199", 
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "url": "https://theiptv.us/pricing"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "1250"
    }
  }

  return (
    <>
      <Script
        id="structured-data-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Script
        id="structured-data-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <Script
        id="structured-data-product"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productData) }}
      />
    </>
  )
}
