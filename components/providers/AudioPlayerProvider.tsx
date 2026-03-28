'use client'

import { createContext, useContext, useMemo, useState } from 'react'
import type { YouTubeVideo } from '@/lib/youtube'

type AudioPlayerContextValue = {
  currentAudio: YouTubeVideo | null
  setCurrentAudio: (video: YouTubeVideo | null) => void
}

const AudioPlayerContext = createContext<AudioPlayerContextValue | undefined>(undefined)

export function AudioPlayerProvider({ children }: { children: React.ReactNode }) {
  const [currentAudio, setCurrentAudio] = useState<YouTubeVideo | null>(null)

  const value = useMemo(
    () => ({ currentAudio, setCurrentAudio }),
    [currentAudio]
  )

  return (
    <AudioPlayerContext.Provider value={value}>
      {children}
    </AudioPlayerContext.Provider>
  )
}

export function useAudioPlayer() {
  const context = useContext(AudioPlayerContext)
  if (!context) {
    throw new Error('useAudioPlayer must be used within an AudioPlayerProvider')
  }
  return context
}
