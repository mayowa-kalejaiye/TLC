import React from 'react'

type DevotionalItem = { id: string; title?: string; image?: string; content?: string; created_at?: string; scheduled_date?: string }

export default async function Head({ params }: { params: { slug: string } }) {
  const id = params.slug
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || '').replace(/\/$/, '')
  const makeAbsolute = (u?: string | null) => {
    if (!u) return ''
    if (/^https?:\/\//i.test(u)) return u
    if (siteUrl) return `${siteUrl}/${u.replace(/^\//, '')}`
    return u
  }
  const fallbackRel = '/images/tlcc-logo.png'
  const fallback = siteUrl ? `${siteUrl}${fallbackRel}` : fallbackRel

  try {
    // Dynamically import supabase to avoid import-time failures if env is missing
    const { supabase } = await import('@/lib/supabase')
    const { data } = await supabase.from('devotionals').select('*').eq('id', id).limit(1).single()
    const devotional = (data || null) as DevotionalItem | null

    if (!devotional) {
      return (
        <>
          <title>Devotional</title>
          <meta name="description" content="Devotional from TLCC" />
          <meta property="og:image" content={fallback} />
        </>
      )
    }

    const raw = devotional.content || ''
    const stripped = raw.replace(/```[\s\S]*?```/g, '').replace(/[`*_>#\[\]\(\)~]/g, '').replace(/\s+/g, ' ').trim()
    const excerpt = stripped.length > 140 ? stripped.slice(0, 140).trim() + '…' : stripped
    const description = devotional.title ? `${devotional.title} — ${excerpt}` : excerpt
    const ogImage = makeAbsolute(devotional.image || fallback)
    const pageUrl = siteUrl ? `${siteUrl}/devotionals/${id}` : `${'/devotionals/' + id}`

    return (
      <>
        <title>{devotional.title || 'Devotional'}</title>
        <meta name="description" content={description || ''} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={devotional.title || ''} />
        <meta property="og:description" content={description || ''} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={pageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={devotional.title || ''} />
        <meta name="twitter:description" content={description || ''} />
        <meta name="twitter:image" content={ogImage} />
      </>
    )
  } catch (err) {
    // On any error, return a safe fallback so scrapers still get basic meta
    const msg = err instanceof Error ? err.message : String(err)
    // eslint-disable-next-line no-console
    console.error('Head generation failed:', msg)
    return (
      <>
        <title>Devotional</title>
        <meta name="description" content="Devotional from TLCC" />
        <meta property="og:image" content={fallback} />
      </>
    )
  }
}
