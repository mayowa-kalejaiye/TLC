'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Play, Calendar, Clock, ArrowRight } from 'lucide-react'
import { getLatestYouTubeVideo, formatDate, type YouTubeVideo } from '@/lib/youtube'

export default function FeaturedSermon() {
  const [video, setVideo] = useState<YouTubeVideo | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchLatestVideo() {
      const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY
      const channelId = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID

      if (!apiKey || !channelId) {
        console.error('YouTube API credentials not found in environment variables')
        setLoading(false)
        return
      }

      const latestVideo = await getLatestYouTubeVideo(channelId, apiKey)
      setVideo(latestVideo)
      setLoading(false)
    }

    fetchLatestVideo()
  }, [])

  if (loading) {
    return (
      <section className="relative py-16 md:py-24 bg-transparent z-10">
        <div className="absolute inset-0 bg-white/95 backdrop-blur-sm"></div>
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-tlc-gold font-bold text-sm tracking-wider uppercase mb-3">
              LATEST MESSAGE
            </p>
            <h2 className="font-anton text-3xl md:text-5xl text-tlc-navy leading-none uppercase">
              This Week&apos;s Word
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-200 animate-pulse rounded-2xl h-96"></div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative py-16 md:py-24 bg-transparent z-10">
      {/* Semi-transparent white overlay for readability */}
      <div className="absolute inset-0 bg-white/95 backdrop-blur-sm"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <p className="text-tlc-gold font-bold text-sm tracking-wider uppercase mb-3">
            LATEST MESSAGE
          </p>
          <h2 className="font-anton text-3xl md:text-5xl text-tlc-navy leading-none uppercase">
            This Week&apos;s Word
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
            {/* Thumbnail */}
            <Link
              href={video?.url || "https://youtube.com/@TheLightCommunity"}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative h-64 md:h-96 bg-tlc-cream overflow-hidden"
            >
              <Image
                src={video?.thumbnail || "/images/sermon-placeholder.jpg"}
                alt={video?.title || "Latest Sermon"}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-tlc-gold hover:bg-tlc-gold-dark rounded-full flex items-center justify-center shadow-lg cursor-pointer transform group-hover:scale-110 transition-all duration-300">
                  <Play className="h-8 w-8 text-white ml-1" fill="white" />
                </div>
              </div>
            </Link>

            {/* Content */}
            <div className="p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-tlc-navy mb-4">
                {video?.title || "Living by Faith in a Broken World"}
              </h3>
              
              <div className="flex flex-wrap gap-4 text-tlc-navy-light mb-4">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">{video ? formatDate(video.publishedAt) : "November 4, 2025"}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">{video?.duration || "45 minutes"}</span>
                </div>
              </div>

              <p className="text-tlc-navy-light mb-4 line-clamp-3">
                {video?.description || "Apostle Nelson teaches on how to maintain unwavering faith even in challenging times, drawing from biblical examples and practical applications for modern believers."}
              </p>

              <Link
                href={video?.url || "https://youtube.com/@TheLightCommunity"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-tlc-gold hover:bg-tlc-gold-dark text-white font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
              >
                <Play className="h-5 w-5 mr-2" />
                Watch on YouTube
              </Link>
            </div>
          </div>

          {/* View All Sermons Link */}
          <div className="text-center mt-8">
            <Link
              href="/sermons"
              className="inline-flex items-center text-tlc-gold hover:text-tlc-gold-dark font-semibold transition-colors"
            >
              <span>View All Sermons</span>
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
