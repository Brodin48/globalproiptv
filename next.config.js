/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Temporarily ignore TypeScript errors during build
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'blog.theiptv.us',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'blog-sa.iptv.com',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'blog.iptvsatlink.com',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'secure.gravatar.com',
        port: '',
        pathname: '/avatar/**',
      }
    ],
  },
  async redirects() {
    return [
      // Old WordPress-style URLs redirects
      {
        source: '/2016/10/aboutiptv.html',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/2016/10/contact-us.html',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/2016/10/howiptvworks.html',
        destination: '/blog/flix-iptv-complete-guide',
        permanent: true,
      },
      // Additional legacy channel/content URLs
      {
        source: '/2017/02/de-it-nl-zdf-rai-sky-cinema-sky-select.html',
        destination: '/pricing',
        permanent: true,
      },
      {
        source: '/2016/12/uk-usa-portugal-spain-m3u-vlc-list-tv.html',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/2016/10/usaitalynetherlands-m3u-iptv-sports.html',
        destination: '/pricing',
        permanent: true,
      },
      // Search query redirect
      {
        source: '/',
        has: [
          {
            type: 'query',
            key: 's',
            value: 'm3u%2Bplaylist',
          },
        ],
        destination: '/blog',
        permanent: false,
      },
      // General search redirect
      {
        source: '/',
        has: [
          {
            type: 'query',
            key: 's',
          },
        ],
        destination: '/blog',
        permanent: false,
      },
      // www to non-www redirects
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.iptvsatlink.com',
          },
        ],
        destination: 'https://iptvsatlink.com/:path*',
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
