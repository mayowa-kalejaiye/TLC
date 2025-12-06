'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { Play, Pause, X, SkipBack, SkipForward } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

type YouTubePlayer = {
  playVideo: () => void
  pauseVideo: () => void
  seekTo: (seconds: number, allowSeekAhead: boolean) => void
  getCurrentTime: () => number
  getDuration: () => number
  destroy: () => void
}

type YouTubePlayerEvent = {
  target: YouTubePlayer
  data: number
}

type YTNamespace = {
  Player: new (
    elementId: string,
    options: {
      height: string
      width: string
      videoId: string
      playerVars?: Record<string, string | number>
      events?: {
        onReady?: (event: YouTubePlayerEvent) => void
        onStateChange?: (event: YouTubePlayerEvent) => void
      }
    }
  ) => YouTubePlayer
  PlayerState: {
    PLAYING: number
    PAUSED: number
    ENDED: number
  }
}

interface AudioPlayerProps {
  videoUrl: string
  title: string
  thumbnail: string
  date: string
  onClose: () => void
}

// Declare YouTube IFrame API types
declare global {
  interface Window {
    YT?: YTNamespace
    onYouTubeIframeAPIReady?: () => void
  }
}

export default function AudioPlayer({ videoUrl, title, thumbnail, date, onClose }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const playerRef = useRef<YouTubePlayer | null>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const stopTimeTracking = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }, [])

  const startTimeTracking = useCallback(() => {
    stopTimeTracking()
    intervalRef.current = setInterval(() => {
      if (playerRef.current?.getCurrentTime) {
        setCurrentTime(playerRef.current.getCurrentTime())
      }
    }, 100)
  }, [stopTimeTracking])

  // Extract video ID from YouTube URL
  const getVideoId = (url: string) => {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([^&?]+)/)
    return match ? match[1] : null
  }

  // Format date to readable string
  const formatPublishedDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }

  const videoId = getVideoId(videoUrl)

  useEffect(() => {
    if (!videoId) return

    // Load YouTube IFrame API
    if (!window.YT) {
      const tag = document.createElement('script')
      tag.src = 'https://www.youtube.com/iframe_api'
      const firstScriptTag = document.getElementsByTagName('script')[0]
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag)
    }

    // Initialize player when API is ready
    const initPlayer = () => {
      if (window.YT && window.YT.Player) {
        playerRef.current = new window.YT.Player('youtube-player', {
          height: '0',
          width: '0',
          videoId: videoId,
          playerVars: {
            autoplay: 1,
            controls: 0,
            modestbranding: 1,
          },
          events: {
            onReady: (event: YouTubePlayerEvent) => {
              setDuration(event.target.getDuration())
              event.target.playVideo()
              setIsPlaying(true)
              startTimeTracking()
            },
            onStateChange: (event: YouTubePlayerEvent) => {
              const playerState = window.YT?.PlayerState
              if (!playerState) return
              if (event.data === playerState.PLAYING) {
                setIsPlaying(true)
                startTimeTracking()
              } else if (event.data === playerState.PAUSED) {
                setIsPlaying(false)
                stopTimeTracking()
              } else if (event.data === playerState.ENDED) {
                setIsPlaying(false)
                stopTimeTracking()
              }
            },
          },
        })
      }
    }

    if (window.YT && window.YT.Player) {
      initPlayer()
    } else {
      window.onYouTubeIframeAPIReady = initPlayer
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy()
      }
      stopTimeTracking()
    }
  }, [videoId, startTimeTracking, stopTimeTracking])

  const togglePlay = () => {
    if (!playerRef.current) return

    if (isPlaying) {
      playerRef.current.pauseVideo()
    } else {
      playerRef.current.playVideo()
    }
  }

  const skipTime = (seconds: number) => {
    if (!playerRef.current) return
    const newTime = Math.max(0, Math.min(currentTime + seconds, duration))
    playerRef.current.seekTo(newTime, true)
  }

  const formatTime = (time: number) => {
    if (isNaN(time)) return '00:00'
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!playerRef.current) return

    const bounds = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - bounds.left
    const percentage = x / bounds.width
    const newTime = percentage * duration
    playerRef.current.seekTo(newTime, true)
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-2xl border-t border-gray-200"
      >
        <div className="max-w-full px-4 py-3">
          <div className="flex items-center gap-4">
            {/* Thumbnail */}
            <div className="relative w-12 h-12 flex-shrink-0 rounded-lg overflow-hidden">
              <Image
                src={thumbnail}
                alt={title}
                fill
                className="object-cover"
              />
            </div>

            {/* Title */}
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-semibold text-tlcc-navy truncate">
                {title}
              </h4>
              <p className="text-xs text-gray-500">{formatPublishedDate(date)}</p>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => skipTime(-15)}
                className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
                title="Skip back 15s"
              >
                <SkipBack className="w-4 h-4 text-tlcc-navy" />
              </button>

              <button
                onClick={togglePlay}
                className="w-10 h-10 rounded-full bg-tlcc-navy hover:bg-tlcc-navy-light flex items-center justify-center transition-colors"
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5 text-white" fill="white" />
                ) : (
                  <Play className="w-5 h-5 text-white ml-0.5" fill="white" />
                )}
              </button>

              <button
                onClick={() => skipTime(15)}
                className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
                title="Skip forward 15s"
              >
                <SkipForward className="w-4 h-4 text-tlcc-navy" />
              </button>

              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors ml-2"
                title="Close player"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-3 flex items-center gap-2">
            <span className="text-xs text-gray-500 font-medium tabular-nums">
              {formatTime(currentTime)}
            </span>
            <div
              onClick={handleProgressClick}
              className="flex-1 h-1.5 bg-gray-200 rounded-full cursor-pointer overflow-hidden"
            >
              <div
                className="h-full bg-tlcc-gold transition-all duration-100"
                style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
              />
            </div>
            <span className="text-xs text-gray-500 font-medium tabular-nums">
              {formatTime(duration)}
            </span>
          </div>
        </div>

        {/* Hidden YouTube Player */}
        <div id="youtube-player" className="hidden"></div>
      </motion.div>
    </AnimatePresence>
  )
}

