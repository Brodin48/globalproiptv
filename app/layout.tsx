import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import WhatsAppWidget from '../components/WhatsAppWidget'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TheIPTV - Premium IPTV Service Since 2019 | 25,000+ Channels',
  description: 'Experience premium TheIPTV service with 25,000+ live channels & 26,000+ movies. Get instant TheIPTV access with HD/4K quality. Join millions who trust TheIPTV for ultimate entertainment.',
  keywords: 'TheIPTV, TheIPTV service, TheIPTV subscription, TheIPTV free trial, TheIPTV app, live tv, streaming, movies, sports channels',
  verification: {
    google: 'V8NWMAKmJDsAejY_oVeKROeukdyIIg-ZqK1t096BMTA',
  },
  openGraph: {
    title: 'TheIPTV - Premium IPTV Service',
    description: 'Get TheIPTV access with 25,000+ live TV channels and 26,000+ movies. Best TheIPTV subscription service.',
    url: 'https://theiptv.us',
    siteName: 'TheIPTV',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TheIPTV - Premium IPTV Subscription',
    description: 'Get TheIPTV access with 25,000+ channels. Best TheIPTV service.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/images/logo.svg', type: 'image/svg+xml' },
      { url: '/images/favicon.ico' }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/images/logo.svg" type="image/svg+xml" />
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
        <link rel="icon" href="/images/favicon.ico" />
      </head>
      <body className={`${inter.className} bg-dark-800 text-white min-h-screen`}>
        <div className="bg-gradient-to-br from-dark-800 via-dark-900 to-black min-h-screen">
          {children}
        </div>
        <WhatsAppWidget />
      </body>
    </html>
  )
}
