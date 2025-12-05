// Utility functions for YouTube API integration

export interface YouTubeVideo {
  id: string
  title: string
  description: string
  thumbnail: string
  publishedAt: string
  duration: string
  url: string
}

type ApiListResponse<T> = {
  items?: T[]
}

type ChannelContentDetails = {
  contentDetails?: {
    relatedPlaylists?: {
      uploads?: string
    }
  }
}

type PlaylistItem = {
  snippet?: {
    resourceId?: {
      videoId?: string
    }
  }
}

type VideoItem = {
  id: string
  snippet: {
    title: string
    description: string
    publishedAt: string
    thumbnails: {
      maxres?: { url: string }
      high: { url: string }
    }
  }
  contentDetails: {
    duration: string
  }
}

type SearchItem = {
  id?: {
    videoId?: string
  }
}

type ChannelStatsItem = {
  statistics?: {
    videoCount: string
    subscriberCount: string
    viewCount: string
  }
}

const pickThumbnail = (thumbnails: VideoItem['snippet']['thumbnails']): string =>
  thumbnails.maxres?.url || thumbnails.high.url

const mapVideoToDto = (video: VideoItem): YouTubeVideo => ({
  id: video.id,
  title: video.snippet.title,
  description: video.snippet.description,
  thumbnail: pickThumbnail(video.snippet.thumbnails),
  publishedAt: video.snippet.publishedAt,
  duration: parseDuration(video.contentDetails?.duration),
  url: `https://www.youtube.com/watch?v=${video.id}`,
})

/**
 * Fetch the latest video from a YouTube channel
 */
export async function getLatestYouTubeVideo(
  channelId: string,
  apiKey: string
): Promise<YouTubeVideo | null> {
  try {
    // Step 1: Get the channel's uploads playlist ID
    const channelResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelId}&key=${apiKey}`
    )
    
    if (!channelResponse.ok) {
      console.error('Failed to fetch channel data')
      return null
    }

    const channelData = await channelResponse.json() as ApiListResponse<ChannelContentDetails>
    const uploadsPlaylistId = channelData.items?.[0]?.contentDetails?.relatedPlaylists?.uploads

    if (!uploadsPlaylistId) {
      console.error('Could not find uploads playlist')
      return null
    }

    // Step 2: Get recent videos from the uploads playlist (fetch 10 to ensure we get a non-short)
    const playlistResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=10&key=${apiKey}`
    )

    if (!playlistResponse.ok) {
      console.error('Failed to fetch playlist items')
      return null
    }

    const playlistData = await playlistResponse.json() as ApiListResponse<PlaylistItem>
    const videos = playlistData.items || []

    if (videos.length === 0) {
      console.error('No videos found')
      return null
    }

    // Step 3: Get video IDs
    const videoIds = videos
      .map((item) => item.snippet?.resourceId?.videoId)
      .filter((id): id is string => typeof id === 'string' && id.length > 0)

    if (videoIds.length === 0) {
      console.error('Playlist items missing video IDs')
      return null
    }

    // Step 4: Get detailed video information including duration
    const idParam = videoIds.join(',')

    const videoResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,snippet&id=${idParam}&key=${apiKey}`
    )

    if (!videoResponse.ok) {
      console.error('Failed to fetch video details')
      return null
    }

    const videoData = await videoResponse.json() as ApiListResponse<VideoItem>
    const detailedVideos = videoData.items || []

    // Find the first video that's not a short (>= 15 minutes) and not a live stream
    for (const video of detailedVideos) {
      const duration = video.contentDetails?.duration
      
      // Skip live streams (duration is 'P0D' or missing) and invalid durations
      if (!duration || duration === 'P0D' || duration === 'PT0S') {
        continue
      }

      const durationInSeconds = parseDurationToSeconds(duration)
      
      // Skip shorts (videos less than 15 minutes) and invalid durations
      if (durationInSeconds < 900) {
        continue
      }

      // Return the first non-short video
      return mapVideoToDto(video)
    }

    // If all videos are shorts, return null
    console.error('No non-short videos found')
    return null
  } catch (error) {
    console.error('Error fetching YouTube video:', error)
    return null
  }
}

/**
 * Parse ISO 8601 duration format to seconds
 * Example: PT1H2M10S -> 3730 seconds
 */
function parseDurationToSeconds(duration: string | undefined): number {
  if (!duration || duration === 'P0D' || duration === 'PT0S') return 0
  
  const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/)
  
  if (!match) return 0

  const hours = match[1] ? parseInt(match[1]) : 0
  const minutes = match[2] ? parseInt(match[2]) : 0
  const seconds = match[3] ? parseInt(match[3]) : 0

  return hours * 3600 + minutes * 60 + seconds
}

/**
 * Parse ISO 8601 duration format to readable string
 * Example: PT1H2M10S -> "1h 2m"
 */
function parseDuration(duration: string | undefined): string {
  if (!duration || duration === 'P0D' || duration === 'PT0S') return 'Live stream'
  
  const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/)
  
  if (!match) return ''

  const hours = match[1] ? parseInt(match[1]) : 0
  const minutes = match[2] ? parseInt(match[2]) : 0
  const seconds = match[3] ? parseInt(match[3]) : 0

  if (hours > 0) {
    return `${hours}h ${minutes}m`
  } else if (minutes > 0) {
    return `${minutes} minutes`
  } else {
    return `${seconds} seconds`
  }
}

/**
 * Format date to readable string
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

/**
 * Fetch multiple videos from a YouTube channel
 */
export async function getChannelVideos(
  channelId: string,
  apiKey: string,
  maxResults: number = 20
): Promise<YouTubeVideo[]> {
  try {
    // Step 1: Get the channel's uploads playlist ID
    const channelResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelId}&key=${apiKey}`
    )
    
    if (!channelResponse.ok) {
      console.error('Failed to fetch channel data')
      return []
    }

    const channelData = await channelResponse.json() as ApiListResponse<ChannelContentDetails>
    const uploadsPlaylistId = channelData.items?.[0]?.contentDetails?.relatedPlaylists?.uploads

    if (!uploadsPlaylistId) {
      console.error('Could not find uploads playlist')
      return []
    }

    // Step 2: Get videos from the uploads playlist
    const playlistResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=${maxResults}&key=${apiKey}`
    )

    if (!playlistResponse.ok) {
      console.error('Failed to fetch playlist items')
      return []
    }

    const playlistData = await playlistResponse.json() as ApiListResponse<PlaylistItem>
    const videos = playlistData.items || []

    if (videos.length === 0) {
      console.error('No videos found')
      return []
    }

    // Step 3: Get video IDs
    const videoIds = videos
      .map((item) => item.snippet?.resourceId?.videoId)
      .filter((id): id is string => typeof id === 'string' && id.length > 0)

    if (videoIds.length === 0) {
      console.error('Playlist items missing video IDs')
      return []
    }

    const idParam = videoIds.join(',')

    // Step 4: Get detailed video information including duration
    const videoResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,snippet&id=${idParam}&key=${apiKey}`
    )

    if (!videoResponse.ok) {
      console.error('Failed to fetch video details')
      return []
    }

    const videoData = await videoResponse.json() as ApiListResponse<VideoItem>
    const detailedVideos = videoData.items || []

    return detailedVideos
      .filter((video) => parseDurationToSeconds(video.contentDetails?.duration) >= 900)
      .map(mapVideoToDto)
  } catch (error) {
    console.error('Error fetching YouTube videos:', error)
    return []
  }
}

/**
 * Get channel statistics including total video count
 */
export async function getChannelStats(
  channelId: string,
  apiKey: string
): Promise<{ videoCount: number; subscriberCount: number; viewCount: number } | null> {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${apiKey}`
    )

    if (!response.ok) {
      console.error('Failed to fetch channel statistics')
      return null
    }

    const data = await response.json() as ApiListResponse<ChannelStatsItem>
    const stats = data.items?.[0]?.statistics

    if (!stats) {
      console.error('Channel statistics not found')
      return null
    }

    return {
      videoCount: parseInt(stats.videoCount),
      subscriberCount: parseInt(stats.subscriberCount),
      viewCount: parseInt(stats.viewCount),
    }
  } catch (error) {
    console.error('Error fetching channel statistics:', error)
    return null
  }
}

/**
 * Search videos by keyword in a channel
 */
export async function searchChannelVideos(
  channelId: string,
  apiKey: string,
  query: string,
  maxResults: number = 10
): Promise<YouTubeVideo[]> {
  try {
    // Step 1: Search for videos
    const searchResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&q=${encodeURIComponent(query)}&type=video&maxResults=${maxResults}&key=${apiKey}`
    )

    if (!searchResponse.ok) {
      console.error('Failed to search videos')
      return []
    }

    const searchData = await searchResponse.json() as ApiListResponse<SearchItem>
    const videos = searchData.items || []

    if (videos.length === 0) {
      return []
    }

    // Step 2: Get video IDs
    const videoIds = videos
      .map((item) => item.id?.videoId)
      .filter((id): id is string => typeof id === 'string' && id.length > 0)

    if (videoIds.length === 0) {
      console.error('Search results missing video IDs')
      return []
    }

    const idParam = videoIds.join(',')

    // Step 3: Get detailed video information
    const videoResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,snippet&id=${idParam}&key=${apiKey}`
    )

    if (!videoResponse.ok) {
      console.error('Failed to fetch video details')
      return []
    }

    const videoData = await videoResponse.json() as ApiListResponse<VideoItem>
    const detailedVideos = videoData.items || []

    return detailedVideos
      .filter((video) => parseDurationToSeconds(video.contentDetails?.duration) >= 900)
      .map(mapVideoToDto)
  } catch (error) {
    console.error('Error searching videos:', error)
    return []
  }
}
