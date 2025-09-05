'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function ContactUsRedirect() {
  const router = useRouter()

  useEffect(() => {
    // Immediate redirect to the new contact page
    router.replace('/contact')
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
        <h1 className="text-xl font-semibold text-gray-800 mb-2">Redirecting...</h1>
        <p className="text-gray-600">You're being redirected to our Contact page.</p>
        <p className="text-sm text-gray-500 mt-4">
          If you're not redirected automatically, <a href="/contact" className="text-primary-600 hover:underline">click here</a>.
        </p>
      </div>
    </div>
  )
}
