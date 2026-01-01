import React from 'react'
import { supabase } from '@/lib/supabase'
import DevotionalDetailClient from '@/components/DevotionalDetailClient'

type DevotionalItem = { id: string; title?: string; image?: string; content?: string; created_at?: string; scheduled_date?: string }

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const id = params.slug
  try {
    const { data, error } = await supabase.from('devotionals').select('*').eq('id', id).limit(1).single()
    if (error || !data) {
      return { title: 'Devotional' }
    }
    const devotional = data as DevotionalItem
    // Build a short plain-text excerpt from the markdown content
    const raw = devotional.content || ''
    const stripped = raw.replace(/```[\s\S]*?```/g, '').replace(/[`*_>#\[\]\(\)~]/g, '').replace(/\s+/g, ' ').trim()
    const excerpt = stripped.length > 140 ? stripped.slice(0, 140).trim() + '…' : stripped
    const description = devotional.title ? `${devotional.title} — ${excerpt}` : excerpt
    const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || '').replace(/\/$/, '')
    const fallbackRel = '/images/tlcc-logo.png'
    const fallback = siteUrl ? `${siteUrl}${fallbackRel}` : fallbackRel

    const makeAbsolute = (u?: string | null) => {
      if (!u) return ''
      if (/^https?:\/\//i.test(u)) return u
      if (siteUrl) return `${siteUrl}/${u.replace(/^\//, '')}`
      return u
    }

    const ogImage = makeAbsolute(devotional.image || fallback)
    const pageUrl = siteUrl ? `${siteUrl}/devotionals/${id}` : undefined

    return {
      title: devotional.title || 'Devotional',
      description: description || undefined,
      openGraph: {
        title: devotional.title || undefined,
        description: description || undefined,
        url: pageUrl,
        images: [
          {
            url: ogImage,
            alt: devotional.title || undefined,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        images: [ogImage],
      },
    }
  } catch {
    return { title: 'Devotional' }
  }
}

export default async function Page({ params }: { params: { slug: string } }) {
  const id = params.slug
  const { data } = await supabase.from('devotionals').select('*').eq('id', id).limit(1).single()
  const devotional = (data || null) as DevotionalItem | null

  if (!devotional) {
    return <div className="min-h-screen flex items-center justify-center text-lg text-gray-400">Devotional not found.</div>
  }

  // Provide explicit meta tags in the document body as a last-resort fallback
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || '').replace(/\/$/, '')
  const makeAbsolute = (u?: string | null) => {
    if (!u) return ''
    if (/^https?:\/\//i.test(u)) return u
    if (siteUrl) return `${siteUrl}/${u.replace(/^\//, '')}`
    return u
  }
  const fallbackRel = '/images/tlcc-logo.png'
  const fallback = siteUrl ? `${siteUrl}${fallbackRel}` : fallbackRel
  const ogImage = makeAbsolute(devotional.image || fallback)
  const pageUrl = siteUrl ? `${siteUrl}/devotionals/${id}` : `${'/devotionals/' + id}`
  const raw = devotional.content || ''
  const stripped = raw.replace(/```[\s\S]*?```/g, '').replace(/[`*_>#\[\]\(\)~]/g, '').replace(/\s+/g, ' ').trim()
  const excerpt = stripped.length > 140 ? stripped.slice(0, 140).trim() + '…' : stripped
  const description = devotional.title ? `${devotional.title} — ${excerpt}` : excerpt

  return (
    <>
      <meta property="og:title" content={devotional.title || 'Devotional'} />
      <meta property="og:description" content={description || ''} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={pageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={devotional.title || 'Devotional'} />
      <meta name="twitter:description" content={description || ''} />
      <meta name="twitter:image" content={ogImage} />
      <DevotionalDetailClient devotional={devotional} />
    </>
  )
}
