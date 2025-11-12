# YouTube API Setup Guide

This guide will help you set up the YouTube Data API v3 to automatically fetch your latest video for the "This Week's Word" section.

## Step 1: Get YouTube API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Click on "Enable APIs and Services"
4. Search for "YouTube Data API v3" and click on it
5. Click "Enable"
6. Go to "Credentials" in the left sidebar
7. Click "Create Credentials" → "API Key"
8. Copy the API key

### Optional: Restrict the API Key (Recommf.enended)
1. Click on the API key you just created
2. Under "API restrictions", select "Restrict key"
3. Check only "YouTube Data API v3"
4. Under "Website restrictions", add your domain (e.g., `thelightcommunity.org`)
5. Save

## Step 2: Get Your YouTube Channel ID

### Method 1: From YouTube Studio
1. Go to [YouTube Studio](https://studio.youtube.com/)
2. Go to "Settings" → "Channel" → "Advanced settings"
3. Your Channel ID will be displayed there

### Method 2: From Your Channel URL
1. Go to your channel: [@TheLightCommunity](https://youtube.com/@TheLightCommunity)
2. Click on the channel name to view the "About" page
3. Click "Share channel" button
4. Click "Copy channel ID"

Alternatively, your Channel ID is in the URL:
- If your URL is `youtube.com/channel/UC...`, the part after `/channel/` is your Channel ID
- If your URL is `youtube.com/@TheLightCommunity`, you need to use Method 1 above

## Step 3: Add Credentials to Your Project

1. Open the file `.env.local` in your project root
2. Replace the placeholder values:

```env
NEXT_PUBLIC_YOUTUBE_API_KEY=YOUR_ACTUAL_API_KEY_HERE
NEXT_PUBLIC_YOUTUBE_CHANNEL_ID=YOUR_ACTUAL_CHANNEL_ID_HERE
```

### Example:
```env
NEXT_PUBLIC_YOUTUBE_API_KEY=AIzaSyDXXXXXXXXXXXXXXXXXXXXXXXXXXXX
NEXT_PUBLIC_YOUTUBE_CHANNEL_ID=UCxxxxxxxxxxxxxxxxxxxxxxxxx
```

## Step 4: Restart Your Development Server

After adding the environment variables:

```bash
# Stop the current server (Ctrl+C)
# Then restart it
npm run dev
```

## Step 5: Test the Integration

1. Navigate to your homepage
2. Scroll to the "This Week's Word" section
3. You should see your latest YouTube video with:
   - Thumbnail
   - Title
   - Upload date
   - Duration
   - Description
   - Direct link to the video

## How It Works

The component will:
- ✅ Automatically fetch your latest video when the page loads
- ✅ Update whenever you publish a new video (refresh the page)
- ✅ Show a loading skeleton while fetching
- ✅ Fall back to default content if the API fails
- ✅ Display the video thumbnail, title, date, duration, and description

## API Quota

YouTube Data API has daily quotas:
- **Free tier**: 10,000 units per day
- **Each video fetch**: ~3-5 units
- This means you can handle thousands of page loads per day

### Optimizations (Future):
- Add caching to reduce API calls
- Use ISR (Incremental Static Regeneration) to rebuild every hour
- Store the latest video in a database

## Troubleshooting

### "YouTube API credentials not found"
- Make sure `.env.local` exists in your project root
- Check that the variable names match exactly
- Restart your development server after adding environment variables

### No video appearing
- Check the browser console for errors (F12 → Console)
- Verify your API key is correct
- Verify your Channel ID is correct
- Make sure your channel has at least one public video
- Check if you've exceeded the API quota

### Need to change the video manually?
If the API isn't working, you can temporarily edit `components/FeaturedSermon.tsx` and replace the fallback content with your specific video details.

## Support

If you need help:
1. Check the browser console for error messages
2. Verify your API key works at: https://developers.google.com/youtube/v3/docs/search/list
3. Make sure your channel is public and has videos
