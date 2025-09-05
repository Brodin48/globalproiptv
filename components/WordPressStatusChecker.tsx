'use client'

import { useState } from 'react'
import { RefreshCw, CheckCircle, XCircle, AlertCircle, ExternalLink } from 'lucide-react'

export default function WordPressStatusChecker() {
  const [status, setStatus] = useState(null)
  const [posts, setPosts] = useState(null)
  const [loading, setLoading] = useState(false)

  const checkStatus = async () => {
    setLoading(true)
    try {
      // Test WordPress API connectivity
      const response = await fetch('/api/test-wordpress')
      const data = await response.json()
      setStatus(data.status)
      setPosts(data.posts)
    } catch (error) {
      setStatus({
        accessible: false,
        hasWordPress: false,
        hasRestAPI: false,
        message: 'Client-side fetch failed'
      })
    }
    setLoading(false)
  }

  const getStatusIcon = () => {
    if (!status) return <AlertCircle className="w-5 h-5 text-gray-500" />
    if (status.accessible && status.hasRestAPI) return <CheckCircle className="w-5 h-5 text-green-500" />
    if (status.accessible) return <AlertCircle className="w-5 h-5 text-yellow-500" />
    return <XCircle className="w-5 h-5 text-red-500" />
  }

  const getStatusColor = () => {
    if (!status) return 'gray'
    if (status.accessible && status.hasRestAPI) return 'green'
    if (status.accessible) return 'yellow'
    return 'red'
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          WordPress Connection Status
        </h3>
        <p className="text-gray-600 text-sm">
          Check if blog.iptvsatlink.com is accessible and WordPress REST API is working
        </p>
      </div>

      <div className="text-center mb-6">
        <button
          onClick={checkStatus}
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2 mx-auto"
        >
          <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
          <span>{loading ? 'Testing...' : 'Test Connection'}</span>
        </button>
      </div>

      {status && (
        <div className="space-y-4">
          {/* Status Overview */}
          <div className={`p-4 rounded-lg border-2 ${
            getStatusColor() === 'green' ? 'border-green-200 bg-green-50' :
            getStatusColor() === 'yellow' ? 'border-yellow-200 bg-yellow-50' :
            getStatusColor() === 'red' ? 'border-red-200 bg-red-50' :
            'border-gray-200 bg-gray-50'
          }`}>
            <div className="flex items-center space-x-3 mb-2">
              {getStatusIcon()}
              <h4 className="font-semibold text-gray-800">Overall Status</h4>
            </div>
            <p className="text-sm text-gray-700 ml-8">{status.message}</p>
          </div>

          {/* Detailed Status */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-3 rounded-lg bg-gray-50">
              <div className="flex items-center justify-center mb-2">
                {status.accessible ? (
                  <CheckCircle className="w-5 h-5 text-green-500" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-500" />
                )}
              </div>
              <h5 className="font-medium text-gray-800 text-sm">Domain Access</h5>
              <p className="text-xs text-gray-600 mt-1">
                {status.accessible ? 'Reachable' : 'Not reachable'}
              </p>
            </div>

            <div className="text-center p-3 rounded-lg bg-gray-50">
              <div className="flex items-center justify-center mb-2">
                {status.hasWordPress ? (
                  <CheckCircle className="w-5 h-5 text-green-500" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-500" />
                )}
              </div>
              <h5 className="font-medium text-gray-800 text-sm">WordPress</h5>
              <p className="text-xs text-gray-600 mt-1">
                {status.hasWordPress ? 'Detected' : 'Not found'}
              </p>
            </div>

            <div className="text-center p-3 rounded-lg bg-gray-50">
              <div className="flex items-center justify-center mb-2">
                {status.hasRestAPI ? (
                  <CheckCircle className="w-5 h-5 text-green-500" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-500" />
                )}
              </div>
              <h5 className="font-medium text-gray-800 text-sm">REST API</h5>
              <p className="text-xs text-gray-600 mt-1">
                {status.hasRestAPI ? 'Available' : 'Unavailable'}
              </p>
            </div>
          </div>

          {/* Posts Preview */}
          {posts && posts.length > 0 && (
            <div className="border-t pt-4">
              <h4 className="font-semibold text-gray-800 mb-3">
                Latest Posts ({posts.length} found)
              </h4>
              <div className="space-y-2">
                {posts.slice(0, 3).map((post, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg">
                    <h5 className="font-medium text-gray-800 text-sm">{post.title}</h5>
                    <p className="text-xs text-gray-600 mt-1">{post.date}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Quick Links */}
          <div className="border-t pt-4 flex flex-col sm:flex-row gap-3">
            <a
              href="https://blog.iptvsatlink.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-200 transition-colors text-sm font-medium"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Visit WordPress Site</span>
            </a>
            <a
              href="https://blog.iptvsatlink.com/wp-admin"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-lg hover:bg-green-200 transition-colors text-sm font-medium"
            >
              <ExternalLink className="w-4 h-4" />
              <span>WordPress Admin</span>
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
