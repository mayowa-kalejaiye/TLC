 'use client'

import type { Metadata } from 'next'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Play, Download, FileText, Search, Share2, Clock } from 'lucide-react'
import { 
  getChannelVideos, 
  getChannelStats, 
  searchChannelVideos,
  formatDate,
  type YouTubeVideo 
} from '@/lib/youtube'
import AudioPlayer from '@/components/AudioPlayer'

const topics = [
  'Faith', 'Grace', 'Forgiveness', 'Hope', 'The Cross', 'New Life', 
  'Prayer', 'Leadership', 'Money', 'Relationships', 'The Holy Spirit'
]

export default function SermonsPage() {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [videos, setVideos] = useState<YouTubeVideo[]>([])
  const [displayedVideos, setDisplayedVideos] = useState<YouTubeVideo[]>([])
  const [totalVideoCount, setTotalVideoCount] = useState<number>(0)
  const [loading, setLoading] = useState(true)
  const [featuredSermon, setFeaturedSermon] = useState<YouTubeVideo | null>(null)
  const [extractedTopics, setExtractedTopics] = useState<string[]>([])
  const [videosToShow, setVideosToShow] = useState<number>(12)
  const [loadingMore, setLoadingMore] = useState(false)
  const [currentAudio, setCurrentAudio] = useState<YouTubeVideo | null>(null)

  useEffect(() => {
    async function fetchSermons() {
      const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY
      const channelId = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID

      if (!apiKey || !channelId) {
        console.error('YouTube API credentials not found')
        setLoading(false)
        return
      }

      // Fetch all videos and channel stats
      const [allVideos, stats] = await Promise.all([
        getChannelVideos(channelId, apiKey, 50),
        getChannelStats(channelId, apiKey)
      ])

      setVideos(allVideos)
      setDisplayedVideos(allVideos.slice(0, 12))
      setTotalVideoCount(stats?.videoCount || allVideos.length)
      setFeaturedSermon(allVideos[0] || null)
      
      // Extract topics from video titles
      const topics = extractTopicsFromVideos(allVideos)
      setExtractedTopics(topics)
      
      setLoading(false)
    }

    fetchSermons()
  }, [])

  // Extract common topics/themes from video titles
  const extractTopicsFromVideos = (videos: YouTubeVideo[]): string[] => {
    const topicMap: { [key: string]: number } = {}
    
    const keywords = [
      'Faith', 'Grace', 'Spirit', 'Holy Spirit', 'Prayer', 'Love', 'Hope',
      'Forgiveness', 'Jesus', 'God', 'Cross', 'Salvation', 'Peace', 'Joy',
      'Healing', 'Deliverance', 'Worship', 'Praise', 'Testimony', 'Miracle',
      'Blessing', 'Prophecy', 'Redemption', 'Righteousness', 'Truth', 'Life',
      'Kingdom', 'Power', 'Glory', 'Mercy', 'Covenant', 'Promise', 'Victory',
      'Breakthrough', 'Transformation', 'Renewal', 'Revival', 'Anointing'
    ]

    videos.forEach(video => {
      const title = video.title.toLowerCase()
      const description = video.description.toLowerCase()
      
      keywords.forEach(keyword => {
        if (title.includes(keyword.toLowerCase()) || description.includes(keyword.toLowerCase())) {
          topicMap[keyword] = (topicMap[keyword] || 0) + 1
        }
      })
    })

    // Return top 12 most common topics
    return Object.entries(topicMap)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 12)
      .map(([topic]) => topic)
  }

  // Handle search - fetch results from YouTube API
  useEffect(() => {
    async function performSearch() {
      if (!searchQuery.trim()) return

      const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY
      const channelId = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID

      if (!apiKey || !channelId) {
        // Fallback to local search if API not configured
        const query = searchQuery.toLowerCase()
        const searchResults = videos.filter(video => 
          video.title.toLowerCase().includes(query) ||
          video.description.toLowerCase().includes(query)
        )
        setDisplayedVideos(searchResults)
        return
      }

      setLoading(true)
      try {
        // Search YouTube API for videos on this channel
        const searchResults = await searchChannelVideos(channelId, apiKey, searchQuery, 50)
        setDisplayedVideos(searchResults)
      } catch (error) {
        console.error('Search error:', error)
        // Fallback to local search on error
        const query = searchQuery.toLowerCase()
        const searchResults = videos.filter(video => 
          video.title.toLowerCase().includes(query) ||
          video.description.toLowerCase().includes(query)
        )
        setDisplayedVideos(searchResults)
      } finally {
        setLoading(false)
      }
    }

    const debounce = setTimeout(() => {
      if (searchQuery.trim()) {
        performSearch()
      } else if (selectedTopic) {
        // If no search but topic selected, filter by topic
        const filtered = videos.filter(video => 
          video.title.toLowerCase().includes(selectedTopic.toLowerCase()) ||
          video.description.toLowerCase().includes(selectedTopic.toLowerCase())
        )
        setDisplayedVideos(filtered)
      } else {
        // No search and no topic - show all videos
        setDisplayedVideos(videos)
      }
    }, 500)

    return () => clearTimeout(debounce)
  }, [searchQuery, selectedTopic, videos])

  // Reset videosToShow when search or topic changes
  useEffect(() => {
    setVideosToShow(12)
  }, [searchQuery, selectedTopic])

  // Load more videos function
  const loadMoreVideos = () => {
    setLoadingMore(true)
    // Simulate loading delay for better UX
    setTimeout(() => {
      setVideosToShow(prev => prev + 12)
      setLoadingMore(false)
    }, 500)
  }

  // Group videos into series based on common keywords
  const organizeIntoSeries = () => {
    const seriesMap: { [key: string]: YouTubeVideo[] } = {}
    
    videos.forEach(video => {
      // Extract series name from title (common patterns)
      const titleLower = video.title.toLowerCase()
      let seriesName = 'Other Messages'

      // Check for common series patterns
      if (titleLower.includes('grace') || titleLower.includes('monday')) {
        seriesName = 'Grace Monday Series'
      } else if (titleLower.includes('spirit') || titleLower.includes('working')) {
        seriesName = 'The Spirit Series'
      } else if (titleLower.includes('faith') || titleLower.includes('living by')) {
        seriesName = 'Living by Faith'
      } else if (titleLower.includes('jesus') || titleLower.includes('god')) {
        seriesName = 'Knowing God'
      }

      if (!seriesMap[seriesName]) {
        seriesMap[seriesName] = []
      }
      seriesMap[seriesName].push(video)
    })

    // Return top 3 series with most videos
    return Object.entries(seriesMap)
      .sort((a, b) => b[1].length - a[1].length)
      .slice(0, 3)
      .map(([name, sermons]) => ({
        title: name.toUpperCase(),
        tagline: `${sermons.length} powerful messages`,
        sermons: sermons.slice(0, 4)
      }))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Image Section */}
      <section className="relative h-[80vh] md:h-[90vh] lg:h-[95vh] overflow-hidden">
        <Image
          src="/images/preach.jpg"
          alt="Preaching at The Light Community"
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-tlc-navy"></div>
        
        {/* Centered Badge on Image */}
        
        <div className="absolute inset-0 flex items-start justify-center pt-32 md:pt-40 lg:pt-48 pb-12">
            
          <div className="text-center max-w-6xl px-4">
            
            <motion.div 
              className="inline-block mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-widest border border-white/30">
                🎙️ SERMONS
              </span>
            </motion.div>

            <motion.h1 
              className="font-anton text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-none uppercase"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Over <span className="text-tlc-gold">{totalVideoCount || '200'}+</span> sermons curated<br />
              for your progress and joy<br />
              in the faith
            </motion.h1>

            <motion.h2 
              className="text-xl md:text-2xl text-gray-300 font-light mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Watch, Listen, and Grow with Our Weekly Messages
            </motion.h2>

          {/* Description */}
          <motion.p 
            className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            We are committed to providing biblical teaching that leads to real progress and deep joy in your faith journey. Our library is constantly updated with new sermons.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <Link
              href="#latest"
              className="w-full sm:w-auto px-8 py-4 bg-tlc-gold hover:bg-tlc-gold-dark text-white font-bold rounded-full transition-all duration-300 flex items-center justify-center space-x-2 uppercase tracking-wide text-sm shadow-lg hover:shadow-xl"
            >
              <Play className="h-5 w-5" />
              <span>Watch The Latest Sermon</span>
            </Link>
          </motion.div>

          {/* Secondary Info */}
          <motion.p 
            className="text-sm text-gray-400 mt-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            Streaming live Thursday & Saturday by 8:00 PM & available on-demand after.
          </motion.p>
          </div>
        </div>
      </section>

      {/* Hero Section */}

      {/* Search & Filter Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="bg-tlc-gold/10 text-tlc-gold px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                📺 WATCH
              </span>
            </div>
            <h2 className="font-anton text-3xl md:text-4xl text-tlc-navy mb-4 leading-none uppercase">
              Find a Message That Speaks to You
            </h2>
            <p className="text-gray-600">
              Weekly sermons for your progress and joy in the faith
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative group">
              <input
                type="text"
                placeholder="Search by title, speaker, or scripture..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 pr-14 rounded-full border-2 border-gray-200 focus:border-tlc-gold focus:outline-none focus:ring-4 focus:ring-tlc-gold/20 text-lg transition-all duration-300 hover:border-gray-300 hover:shadow-md placeholder:text-gray-400"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-11 h-11 bg-tlc-gold hover:bg-tlc-gold-dark rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group-focus-within:scale-110 group-focus-within:shadow-lg">
                <Search className="h-5 w-5 text-white" />
              </button>
              {searchQuery && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  onClick={() => setSearchQuery('')}
                  className="absolute right-[60px] top-1/2 -translate-y-1/2 w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                  title="Clear search"
                >
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              )}
            </div>
          </div>
        </div>

        <div className="mb-12">
            <h3 className="text-center text-sm font-bold text-gray-500 uppercase tracking-wider mb-6">
              Or Browse by Topic:
            </h3>
            {loading ? (
              <div className="flex flex-wrap justify-center gap-3">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="h-9 w-24 bg-gray-200 animate-pulse rounded-full"></div>
                ))}
              </div>
            ) : extractedTopics.length > 0 ? (
              <div className="flex flex-wrap justify-center gap-3">
                {extractedTopics.map((topic) => (
                  <button
                    key={topic}
                    onClick={() => setSelectedTopic(selectedTopic === topic ? null : topic)}
                    className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                      selectedTopic === topic
                        ? 'bg-tlc-gold text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {topic}
                  </button>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500">Topics loading...</p>
            )}
          </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Loading State */}
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-md">
                  <div className="h-48 bg-gray-200 animate-pulse"></div>
                  <div className="p-4 space-y-3">
                    <div className="h-4 bg-gray-200 animate-pulse rounded"></div>
                    <div className="h-3 bg-gray-200 animate-pulse rounded w-3/4"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : displayedVideos.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No sermons found. Try a different search.</p>
            </div>
          ) : (
            <>
              {/* Sermon Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
                {displayedVideos.slice(0, videosToShow).map((sermon, index) => (
                  <div
                    key={sermon.id}
                    className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                  >
                    {/* Thumbnail */}
                    <div className="relative h-48 overflow-hidden cursor-pointer" onClick={() => setCurrentAudio(sermon)}>
                      <Image
                        src={sermon.thumbnail}
                        alt={sermon.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="absolute top-3 right-3 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded">
                        {sermon.duration}
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                          <Play className="h-8 w-8 text-tlc-gold ml-1" fill="currentColor" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <h3 className="font-bold text-lg text-tlc-navy mb-1 line-clamp-2">
                        {sermon.title}
                      </h3>
                      <p className="text-xs text-gray-500 mb-3">{formatDate(sermon.publishedAt)}</p>
                      
                      {/* Action Buttons */}
                      <div className="flex gap-2">
                        <button 
                          onClick={() => setCurrentAudio(sermon)}
                          className="flex-1 px-3 py-2 bg-tlc-gold hover:bg-tlc-gold-dark text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1"
                        >
                          <Play className="h-3 w-3" />
                          Listen
                        </button>
                        <Link
                          href={sermon.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-2 bg-tlc-navy hover:bg-tlc-navy-light text-white text-xs font-semibold rounded-lg transition-colors"
                        >
                          YouTube
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Loading More Skeletons */}
          {loadingMore && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
              {[...Array(12)].map((_, i) => (
                <div key={`loading-${i}`} className="bg-white rounded-2xl overflow-hidden shadow-md">
                  <div className="h-48 bg-gray-200 animate-pulse"></div>
                  <div className="p-4 space-y-3">
                    <div className="h-4 bg-gray-200 animate-pulse rounded"></div>
                    <div className="h-3 bg-gray-200 animate-pulse rounded w-3/4"></div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* See More Button */}
          {!loadingMore && videosToShow < displayedVideos.length && (
            <div className="text-center">
              <button 
                onClick={loadMoreVideos}
                disabled={loadingMore}
                className="px-8 py-3 bg-tlc-navy hover:bg-tlc-navy-light text-white font-semibold rounded-full transition-all duration-200 hover:scale-105 transform disabled:opacity-50 disabled:cursor-not-allowed"
              >
                See More
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Featured Series Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-anton text-3xl md:text-4xl text-tlc-navy mb-12 leading-none uppercase text-center">
            Dive Into a Series
          </h2>

          {/* Series Cards */}
          {loading ? (
            <div className="space-y-12">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2 mb-6"></div>
                  <div className="space-y-4">
                    {[...Array(3)].map((_, j) => (
                      <div key={j} className="h-20 bg-gray-100 rounded-lg"></div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-12">
              {organizeIntoSeries().map((series, seriesIndex) => (
                <div key={seriesIndex} className="border-b border-gray-200 pb-12 last:border-b-0">
                  {/* Series Header */}
                  <div className="mb-6">
                    <h3 className="font-anton text-2xl md:text-3xl text-tlc-navy mb-2 uppercase">
                      {series.title}
                    </h3>
                    <p className="text-gray-600 italic text-lg">{series.tagline}</p>
                  </div>

                  {/* Sermons List */}
                  <div className="space-y-4">
                    {series.sermons.map((sermon, sermonIndex) => (
                      <div
                        key={sermonIndex}
                        className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <div className="flex-1 mb-3 md:mb-0">
                          <h4 className="font-bold text-tlc-navy mb-1 line-clamp-1">{sermon.title}</h4>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <span>{formatDate(sermon.publishedAt)}</span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {sermon.duration}
                            </span>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-2">
                          <Link
                            href={sermon.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-tlc-gold hover:bg-tlc-gold-dark text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-1"
                          >
                            <Play className="h-3 w-3" />
                            WATCH
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Detailed Sermon Example */}
      {featuredSermon && !loading && (
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            {/* Breadcrumb */}
            <div className="text-sm text-gray-500 mb-6">
              <Link href="/sermons" className="hover:text-tlc-gold">Sermons</Link>
              {' > '}
              <span className="text-gray-700">Featured Message</span>
            </div>

            {/* Sermon Title */}
            <h1 className="font-anton text-4xl md:text-5xl lg:text-6xl text-tlc-navy mb-6 leading-none">
              {featuredSermon.title}
            </h1>

            {/* Metadata Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Date</p>
                <p className="font-semibold text-tlc-navy">{formatDate(featuredSermon.publishedAt)}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Duration</p>
                <p className="font-semibold text-tlc-navy">{featuredSermon.duration}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Channel</p>
                <p className="font-semibold text-tlc-navy">The Light Community</p>
              </div>
            </div>

            {/* Video Embed Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h3 className="font-bold text-lg text-tlc-navy mb-4">Watch the Sermon</h3>
              
              {/* Video Thumbnail with Play Button */}
              <Link
                href={featuredSermon.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative rounded-lg overflow-hidden mb-4 group"
              >
                <div className="relative aspect-video">
                  <Image
                    src={featuredSermon.thumbnail}
                    alt={featuredSermon.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <div className="w-20 h-20 bg-tlc-gold hover:bg-tlc-gold-dark rounded-full flex items-center justify-center transition-all transform group-hover:scale-110">
                      <Play className="h-10 w-10 text-white ml-1" fill="white" />
                    </div>
                  </div>
                </div>
              </Link>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <Link
                  href={featuredSermon.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 bg-tlc-gold hover:bg-tlc-gold-dark text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Play className="h-4 w-4" />
                  Watch on YouTube
                </Link>
                <button 
                  onClick={() => {
                    navigator.clipboard.writeText(featuredSermon.url)
                    alert('Link copied to clipboard!')
                  }}
                  className="px-4 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Share2 className="h-4 w-4" />
                  Share
                </button>
                <Link
                  href={featuredSermon.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 bg-tlc-navy hover:bg-tlc-navy-light text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Download className="h-4 w-4" />
                  View on YouTube
                </Link>
              </div>
            </div>

            {/* Sermon Description */}
            <div className="prose prose-lg max-w-none">
              <h3 className="font-bold text-xl text-tlc-navy mb-4">About This Message</h3>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {featuredSermon.description.slice(0, 500)}
                {featuredSermon.description.length > 500 ? '...' : ''}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Audio Player */}
      {currentAudio && (
        <AudioPlayer
          videoUrl={currentAudio.url}
          title={currentAudio.title}
          thumbnail={currentAudio.thumbnail}
          date={currentAudio.publishedAt}
          onClose={() => setCurrentAudio(null)}
        />
      )}
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Sermons | The Light Community',
  description: 'Explore sermons from The Light Community — watch or listen to messages that help you grow in faith.',
  openGraph: {
    title: 'Sermons - The Light Community',
    description: 'Explore sermons from The Light Community — watch or listen to messages that help you grow in faith.',
    images: [
      {
        url: 'https://thelightcommunity.vercel.app/images/preach.jpg',
        alt: 'Preaching at The Light Community',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://thelightcommunity.vercel.app/images/preach.jpg'],
  },
}
