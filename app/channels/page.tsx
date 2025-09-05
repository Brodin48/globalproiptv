'use client'

import { useState, useEffect } from 'react'
import { Search, Filter, Globe, Tv, Users, Play, Star, Crown, Check, ChevronDown, ChevronUp } from 'lucide-react'
import { channelImporter, fallbackChannels } from '../../lib/channelImporter'
import { comprehensiveChannels, massiveChannelDatabase } from '../../lib/comprehensiveChannels'

export default function ChannelsPage() {
  const [selectedRegion, setSelectedRegion] = useState('all')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [channels, setChannels] = useState(fallbackChannels)
  const [loading, setLoading] = useState(true)
  const [importStatus, setImportStatus] = useState('Initializing...')
  const [showRegions, setShowRegions] = useState(false)
  const [showCategories, setShowCategories] = useState(false)
  const channelsPerPage = 20

  useEffect(() => {
    const importChannels = async () => {
      try {
        setImportStatus('Importing channels from external databases...')
        
        const sources = [
          'https://iptv-org.github.io/iptv/index.m3u',
          'https://raw.githubusercontent.com/Free-TV/IPTV/master/playlist.m3u8',
          'https://raw.githubusercontent.com/iptv-org/iptv/master/streams/nl.m3u',
          'https://raw.githubusercontent.com/iptv-org/iptv/master/streams/sa.m3u',
          'https://raw.githubusercontent.com/iptv-org/iptv/master/streams/ae.m3u',
          'https://raw.githubusercontent.com/iptv-org/iptv/master/streams/eg.m3u',
          'https://raw.githubusercontent.com/iptv-org/iptv/master/streams/qa.m3u',
          'https://raw.githubusercontent.com/iptv-org/iptv/master/streams/ma.m3u',
          'https://raw.githubusercontent.com/iptv-org/iptv/master/streams/tn.m3u',
          'https://raw.githubusercontent.com/iptv-org/iptv/master/streams/dz.m3u',
          'https://raw.githubusercontent.com/iptv-org/iptv/master/streams/lb.m3u',
          'https://raw.githubusercontent.com/iptv-org/iptv/master/streams/jo.m3u',
          'https://raw.githubusercontent.com/iptv-org/iptv/master/streams/kw.m3u',
          'https://raw.githubusercontent.com/iptv-org/iptv/master/streams/bh.m3u',
          'https://raw.githubusercontent.com/iptv-org/iptv/master/streams/om.m3u',
          'https://raw.githubusercontent.com/iptv-org/iptv/master/streams/it.m3u',
          'https://raw.githubusercontent.com/iptv-org/iptv/master/streams/no.m3u',
          'https://raw.githubusercontent.com/iptv-org/iptv/master/streams/kw.m3u',
          'https://raw.githubusercontent.com/iptv-org/iptv/master/streams/bh.m3u',
          'https://raw.githubusercontent.com/iptv-org/iptv/master/streams/ye.m3u',
          'https://raw.githubusercontent.com/iptv-org/iptv/master/streams/sy.m3u',
          'https://raw.githubusercontent.com/iptv-org/iptv/master/streams/ps.m3u',
          'https://raw.githubusercontent.com/iptv-org/iptv/master/streams/ly.m3u',
          'https://raw.githubusercontent.com/iptv-org/iptv/master/streams/sd.m3u',
          'https://raw.githubusercontent.com/iptv-org/iptv/master/streams/mr.m3u',
          'https://raw.githubusercontent.com/iptv-org/iptv/master/streams/dj.m3u',
          'https://raw.githubusercontent.com/iptv-org/iptv/master/streams/so.m3u',
          'https://raw.githubusercontent.com/iptv-org/iptv/master/streams/km.m3u'
        ]

        let allChannels = [...fallbackChannels, ...massiveChannelDatabase]

        for (const source of sources) {
          try {
            setImportStatus(`Importing from ${source.split('/').pop()}...`)
            const response = await fetch(source)
            const content = await response.text()
            const imported = channelImporter.parseM3U(content)
            allChannels = [...allChannels, ...imported]
          } catch (error) {
            console.error(`Failed to import from ${source}:`, error)
          }
        }

        const uniqueChannels = channelImporter.removeDuplicates(allChannels)
        setChannels(uniqueChannels)
        setImportStatus(`Successfully imported ${uniqueChannels.length} channels!`)
        
        setTimeout(() => {
          setLoading(false)
        }, 1000)

      } catch (error) {
        console.error('Channel import failed:', error)
        setChannels(fallbackChannels)
        setImportStatus('Using fallback channel database')
        setLoading(false)
      }
    }

    importChannels()
  }, [])

  const regions = [
    { id: 'all', name: 'All Regions', count: channels.length },
    { id: 'usa', name: 'USA', count: channels.filter(c => c.region === 'usa').length },
    { id: 'uk', name: 'UK', count: channels.filter(c => c.region === 'uk').length },
    { id: 'canada', name: 'Canada', count: channels.filter(c => c.region === 'canada').length },
    { id: 'france', name: 'France', count: channels.filter(c => c.region === 'france').length },
    { id: 'germany', name: 'Germany', count: channels.filter(c => c.region === 'germany').length },
    { id: 'spain', name: 'Spain', count: channels.filter(c => c.region === 'spain').length },
    { id: 'italy', name: 'Italy', count: channels.filter(c => c.region === 'italy').length },
    { id: 'netherlands', name: 'Netherlands', count: channels.filter(c => c.region === 'netherlands').length },
    { id: 'norway', name: 'Norway', count: channels.filter(c => c.region === 'norway').length },
    { id: 'sweden', name: 'Sweden', count: channels.filter(c => c.region === 'sweden').length },
    { id: 'denmark', name: 'Denmark', count: channels.filter(c => c.region === 'denmark').length },
    { id: 'finland', name: 'Finland', count: channels.filter(c => c.region === 'finland').length },
    { id: 'belgium', name: 'Belgium', count: channels.filter(c => c.region === 'belgium').length },
    { id: 'switzerland', name: 'Switzerland', count: channels.filter(c => c.region === 'switzerland').length },
    { id: 'austria', name: 'Austria', count: channels.filter(c => c.region === 'austria').length },
    { id: 'portugal', name: 'Portugal', count: channels.filter(c => c.region === 'portugal').length },
    { id: 'poland', name: 'Poland', count: channels.filter(c => c.region === 'poland').length },
    { id: 'czech_republic', name: 'Czech Republic', count: channels.filter(c => c.region === 'czech_republic').length },
    { id: 'hungary', name: 'Hungary', count: channels.filter(c => c.region === 'hungary').length },
    { id: 'romania', name: 'Romania', count: channels.filter(c => c.region === 'romania').length },
    { id: 'bulgaria', name: 'Bulgaria', count: channels.filter(c => c.region === 'bulgaria').length },
    { id: 'croatia', name: 'Croatia', count: channels.filter(c => c.region === 'croatia').length },
    { id: 'serbia', name: 'Serbia', count: channels.filter(c => c.region === 'serbia').length },
    { id: 'greece', name: 'Greece', count: channels.filter(c => c.region === 'greece').length },
    { id: 'turkey', name: 'Turkey', count: channels.filter(c => c.region === 'turkey').length },
    { id: 'russia', name: 'Russia', count: channels.filter(c => c.region === 'russia').length },
    { id: 'ukraine', name: 'Ukraine', count: channels.filter(c => c.region === 'ukraine').length },
    { id: 'belarus', name: 'Belarus', count: channels.filter(c => c.region === 'belarus').length },
    { id: 'lithuania', name: 'Lithuania', count: channels.filter(c => c.region === 'lithuania').length },
    { id: 'latvia', name: 'Latvia', count: channels.filter(c => c.region === 'latvia').length },
    { id: 'estonia', name: 'Estonia', count: channels.filter(c => c.region === 'estonia').length },
    { id: 'india', name: 'India', count: channels.filter(c => c.region === 'india').length },
    { id: 'pakistan', name: 'Pakistan', count: channels.filter(c => c.region === 'pakistan').length },
    { id: 'bangladesh', name: 'Bangladesh', count: channels.filter(c => c.region === 'bangladesh').length },
    { id: 'sri_lanka', name: 'Sri Lanka', count: channels.filter(c => c.region === 'sri_lanka').length },
    { id: 'china', name: 'China', count: channels.filter(c => c.region === 'china').length },
    { id: 'japan', name: 'Japan', count: channels.filter(c => c.region === 'japan').length },
    { id: 'south_korea', name: 'South Korea', count: channels.filter(c => c.region === 'south_korea').length },
    { id: 'north_korea', name: 'North Korea', count: channels.filter(c => c.region === 'north_korea').length },
    { id: 'thailand', name: 'Thailand', count: channels.filter(c => c.region === 'thailand').length },
    { id: 'vietnam', name: 'Vietnam', count: channels.filter(c => c.region === 'vietnam').length },
    { id: 'indonesia', name: 'Indonesia', count: channels.filter(c => c.region === 'indonesia').length },
    { id: 'malaysia', name: 'Malaysia', count: channels.filter(c => c.region === 'malaysia').length },
    { id: 'philippines', name: 'Philippines', count: channels.filter(c => c.region === 'philippines').length },
    { id: 'singapore', name: 'Singapore', count: channels.filter(c => c.region === 'singapore').length },
    { id: 'saudi_arabia', name: 'Saudi Arabia', count: channels.filter(c => c.region === 'saudi_arabia').length },
    { id: 'uae', name: 'UAE', count: channels.filter(c => c.region === 'uae').length },
    { id: 'qatar', name: 'Qatar', count: channels.filter(c => c.region === 'qatar').length },
    { id: 'kuwait', name: 'Kuwait', count: channels.filter(c => c.region === 'kuwait').length },
    { id: 'bahrain', name: 'Bahrain', count: channels.filter(c => c.region === 'bahrain').length },
    { id: 'oman', name: 'Oman', count: channels.filter(c => c.region === 'oman').length },
    { id: 'egypt', name: 'Egypt', count: channels.filter(c => c.region === 'egypt').length },
    { id: 'morocco', name: 'Morocco', count: channels.filter(c => c.region === 'morocco').length },
    { id: 'tunisia', name: 'Tunisia', count: channels.filter(c => c.region === 'tunisia').length },
    { id: 'algeria', name: 'Algeria', count: channels.filter(c => c.region === 'algeria').length },
    { id: 'libya', name: 'Libya', count: channels.filter(c => c.region === 'libya').length },
    { id: 'sudan', name: 'Sudan', count: channels.filter(c => c.region === 'sudan').length },
    { id: 'lebanon', name: 'Lebanon', count: channels.filter(c => c.region === 'lebanon').length },
    { id: 'jordan', name: 'Jordan', count: channels.filter(c => c.region === 'jordan').length },
    { id: 'syria', name: 'Syria', count: channels.filter(c => c.region === 'syria').length },
    { id: 'iraq', name: 'Iraq', count: channels.filter(c => c.region === 'iraq').length },
    { id: 'iran', name: 'Iran', count: channels.filter(c => c.region === 'iran').length },
    { id: 'israel', name: 'Israel', count: channels.filter(c => c.region === 'israel').length },
    { id: 'palestine', name: 'Palestine', count: channels.filter(c => c.region === 'palestine').length },
    { id: 'australia', name: 'Australia', count: channels.filter(c => c.region === 'australia').length },
    { id: 'new_zealand', name: 'New Zealand', count: channels.filter(c => c.region === 'new_zealand').length },
    { id: 'brazil', name: 'Brazil', count: channels.filter(c => c.region === 'brazil').length },
    { id: 'mexico', name: 'Mexico', count: channels.filter(c => c.region === 'mexico').length },
    { id: 'argentina', name: 'Argentina', count: channels.filter(c => c.region === 'argentina').length },
    { id: 'chile', name: 'Chile', count: channels.filter(c => c.region === 'chile').length },
    { id: 'colombia', name: 'Colombia', count: channels.filter(c => c.region === 'colombia').length },
    { id: 'peru', name: 'Peru', count: channels.filter(c => c.region === 'peru').length },
    { id: 'venezuela', name: 'Venezuela', count: channels.filter(c => c.region === 'venezuela').length },
    { id: 'south_africa', name: 'South Africa', count: channels.filter(c => c.region === 'south_africa').length },
    { id: 'nigeria', name: 'Nigeria', count: channels.filter(c => c.region === 'nigeria').length },
    { id: 'ghana', name: 'Ghana', count: channels.filter(c => c.region === 'ghana').length },
    { id: 'kenya', name: 'Kenya', count: channels.filter(c => c.region === 'kenya').length },
    { id: 'ethiopia', name: 'Ethiopia', count: channels.filter(c => c.region === 'ethiopia').length },
    { id: 'kuwait', name: 'Kuwait', count: channels.filter(c => c.region === 'kuwait').length },
    { id: 'bahrain', name: 'Bahrain', count: channels.filter(c => c.region === 'bahrain').length },
    { id: 'oman', name: 'Oman', count: channels.filter(c => c.region === 'oman').length },
    { id: 'yemen', name: 'Yemen', count: channels.filter(c => c.region === 'yemen').length },
    { id: 'syria', name: 'Syria', count: channels.filter(c => c.region === 'syria').length },
    { id: 'palestine', name: 'Palestine', count: channels.filter(c => c.region === 'palestine').length },
    { id: 'libya', name: 'Libya', count: channels.filter(c => c.region === 'libya').length },
    { id: 'sudan', name: 'Sudan', count: channels.filter(c => c.region === 'sudan').length },
    { id: 'mauritania', name: 'Mauritania', count: channels.filter(c => c.region === 'mauritania').length },
    { id: 'djibouti', name: 'Djibouti', count: channels.filter(c => c.region === 'djibouti').length },
    { id: 'somalia', name: 'Somalia', count: channels.filter(c => c.region === 'somalia').length },
    { id: 'comoros', name: 'Comoros', count: channels.filter(c => c.region === 'comoros').length }
  ]

  const categories = [
    { id: 'all', name: 'All Categories', count: channels.length },
    { id: 'entertainment', name: 'Entertainment', count: channels.filter(c => c.category === 'entertainment').length },
    { id: 'sports', name: 'Sports', count: channels.filter(c => c.category === 'sports').length },
    { id: 'news', name: 'News', count: channels.filter(c => c.category === 'news').length },
    { id: 'movies', name: 'Movies', count: channels.filter(c => c.category === 'movies').length }
  ]

  const filteredChannels = channels.filter(channel => {
    const matchesSearch = channel.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesRegion = selectedRegion === 'all' || channel.region === selectedRegion
    const matchesCategory = selectedCategory === 'all' || channel.category === selectedCategory
    return matchesSearch && matchesRegion && matchesCategory
  })

  const totalPages = Math.ceil(filteredChannels.length / channelsPerPage)
  const startIndex = (currentPage - 1) * channelsPerPage
  const currentChannels = filteredChannels.slice(startIndex, startIndex + channelsPerPage)

  useEffect(() => {
    setCurrentPage(1)
  }, [selectedRegion, selectedCategory, searchQuery])

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="pt-24 pb-12 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">World TV Channels</h1>
          <p className="text-xl mb-6">Stream {channels.length.toLocaleString()}+ channels worldwide</p>
        </div>
      </section>

      <section className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-6">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search channels..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <button
                onClick={() => setShowRegions(!showRegions)}
                className="flex items-center justify-between w-full p-3 bg-gray-100 hover:bg-gray-200 rounded-lg mb-3 transition-colors"
              >
                <h3 className="font-semibold">Regions ({regions.length - 1})</h3>
                {showRegions ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
              
              {showRegions && (
                <div className="flex flex-wrap gap-2 max-h-60 overflow-y-auto">
                  {regions.map((region) => (
                    <button
                      key={region.id}
                      onClick={() => setSelectedRegion(region.id)}
                      className={`px-3 py-1 rounded-full text-sm whitespace-nowrap ${
                        selectedRegion === region.id
                          ? 'bg-primary-600 text-white'
                          : 'bg-gray-200 hover:bg-gray-300'
                      }`}
                    >
                      {region.name} ({region.count})
                    </button>
                  ))}
                </div>
              )}
              
              {!showRegions && (
                <div className="text-sm text-gray-600 p-3 bg-gray-50 rounded-lg">
                  Click to browse {regions.length - 1} countries and regions
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() => setShowCategories(!showCategories)}
                className="flex items-center justify-between w-full p-3 bg-gray-100 hover:bg-gray-200 rounded-lg mb-3 transition-colors"
              >
                <h3 className="font-semibold">Categories ({categories.length - 1})</h3>
                {showCategories ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
              
              {showCategories && (
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-3 py-1 rounded-full text-sm ${
                        selectedCategory === category.id
                          ? 'bg-primary-600 text-white'
                          : 'bg-gray-200 hover:bg-gray-300'
                      }`}
                    >
                      {category.name} ({category.count})
                    </button>
                  ))}
                </div>
              )}
              
              {!showCategories && (
                <div className="text-sm text-gray-600 p-3 bg-gray-50 rounded-lg">
                  Click to browse channel categories
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          {loading && (
            <div className="text-center py-12">
              <div className="animate-spin w-12 h-12 border-4 border-primary-600 border-t-transparent rounded-full mx-auto mb-4"></div>
              <p className="text-gray-600">{importStatus}</p>
            </div>
          )}

          {!loading && (
            <>
              <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 text-sm">{importStatus}</p>
              </div>

              {currentChannels.length > 0 ? (
                <>
                  <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                    {currentChannels.map((channel) => (
                      <div key={channel.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 border">
                        <h3 className="font-medium text-gray-900 mb-1 truncate">
                          {channel.name}
                        </h3>
                        <div className="text-sm text-gray-500 capitalize">
                          {channel.category}
                        </div>
                        <div className="text-xs text-gray-400 mt-2 uppercase">
                          {channel.region.replace('_', ' ')}
                        </div>
                      </div>
                    ))}
                  </div>

                  {totalPages > 1 && (
                    <div className="flex justify-center mt-8 gap-2">
                      <button
                        onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                        disabled={currentPage === 1}
                        className="px-4 py-2 bg-white border rounded-lg disabled:opacity-50"
                      >
                        Previous
                      </button>
                      <span className="px-4 py-2">
                        Page {currentPage} of {totalPages}
                      </span>
                      <button
                        onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 bg-white border rounded-lg disabled:opacity-50"
                      >
                        Next
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center py-12">
                  <Tv className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-800 mb-2">No Channels Found</h3>
                  <p className="text-gray-600">Try adjusting your filters.</p>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  )
}
