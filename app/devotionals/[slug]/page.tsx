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
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || ''
    const fallback = siteUrl ? `${siteUrl.replace(/\/$/, '')}/images/tlcc-logo.png` : '/images/tlcc-logo.png'
    const ogImage = devotional.image || fallback
    return {
      title: devotional.title || 'Devotional',
      description: description || undefined,
      openGraph: {
        images: [ogImage],
        url: siteUrl ? `${siteUrl.replace(/\/$/, '')}/devotionals/${id}` : undefined,
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

  return <DevotionalDetailClient devotional={devotional} />
}
