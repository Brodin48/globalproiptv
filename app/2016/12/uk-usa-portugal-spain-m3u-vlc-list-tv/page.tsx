'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function M3UListRedirect() {
  const router = useRouter()

  useEffect(() => {
    // Immediate redirect to blog page
    router.replace('/blog')
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Redirecting...</h1>
        <p>You're being redirected to our blog for the latest IPTV guides and tutorials.</p>
        <p className="mt-4">
          <a href="/blog" className="text-blue-600 hover:text-blue-800 underline">
            Click here if you're not redirected automatically
          </a>
        </p>
      </div>
    </div>
  )
}
