"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import simpleMarkdownToHtml from '@/lib/markdown'

type DevotionalItem = { id: string; title?: string; image?: string; content?: string; created_at?: string; scheduled_date?: string }

export default function DevotionalDetailClient({ devotional }: { devotional: DevotionalItem }) {
  const router = useRouter()
  const [shareStatus, setShareStatus] = useState('')
  const renderedHtml = devotional?.content ? simpleMarkdownToHtml(devotional.content) : ''

  return (
    <main className="min-h-screen bg-white pb-24">
      <section className="relative h-[40vh] min-h-[320px] flex items-center justify-center overflow-hidden">
        <button
          type="button"
          onClick={() => router.back()}
          aria-label="Back"
          className="fixed left-6 top-24 md:top-28 lg:top-32 z-[9999] bg-black/75 text-white rounded-full w-14 h-14 flex items-center justify-center hover:bg-black/90 shadow-2xl ring-2 ring-white/30"
        >
          <span className="sr-only">Back</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={2}><path d="M12 6L8 10l4 4" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
        {devotional.image && (
          <img
            src={devotional.image}
            alt={devotional.title}
            className="object-cover w-full h-full absolute inset-0"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/50" />
        <div className="relative z-10 container mx-auto px-4 text-center pt-8">
          <h1 className="font-anton text-6xl md:text-7xl text-white mb-4 leading-tight uppercase drop-shadow">
            {devotional.title}
          </h1>
          <div className="text-tlcc-gold font-semibold mb-2 uppercase tracking-wider">
            {devotional.scheduled_date ? new Date(devotional.scheduled_date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' }) : (devotional.created_at ? new Date(devotional.created_at).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' }) : "")}
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 max-w-3xl mt-12">
        <div className="prose prose-xl prose-tlcc max-w-none text-gray-800" dangerouslySetInnerHTML={{ __html: renderedHtml }} />
        <div className="mt-8 flex items-center gap-3">
          <button
            type="button"
            aria-label="Share devotional"
            onClick={async () => {
              const url = typeof window !== 'undefined' ? window.location.href : ''
              try {
                if (navigator.share) {
                  await navigator.share({ title: devotional?.title || 'Devotional', url })
                  setShareStatus('Shared')
                } else if (navigator.clipboard) {
                  await navigator.clipboard.writeText(url)
                  setShareStatus('Link copied')
                } else {
                  setShareStatus('Unable to share')
                }
              } catch {
                setShareStatus('Share cancelled')
              }
              setTimeout(() => setShareStatus(''), 2000)
            }}
            className="inline-flex items-center justify-center px-3 py-1 rounded-md border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 shadow-sm transition text-sm font-medium"
          >
            Share
          </button>
          {shareStatus && <span className="text-sm text-gray-600">{shareStatus}</span>}
        </div>
      </section>
    </main>
  )
}
