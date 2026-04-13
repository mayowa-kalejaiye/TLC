"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import simpleMarkdownToHtml from '@/lib/markdown'
import { ArrowLeft, Share2, Clock, Calendar, Check, Copy } from 'lucide-react'

type DevotionalItem = { 
  id: string; 
  title?: string; 
  image?: string; 
  content?: string; 
  created_at?: string; 
  scheduled_date?: string 
}

export default function DevotionalDetailClient({ devotional }: { devotional: DevotionalItem }) {
  const router = useRouter()
  const [shareStatus, setShareStatus] = useState('')
  const [readingProgress, setReadingProgress] = useState(0)
  
  const renderedHtml = devotional?.content ? simpleMarkdownToHtml(devotional.content) : ''

  // Reading Progress Logic
  useEffect(() => {
    const updateProgress = () => {
      const scrolled = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / height) * 100;
      setReadingProgress(progress);
    };
    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  const handleShare = async () => {
    const url = typeof window !== 'undefined' ? window.location.href : ''
    try {
      if (navigator.share) {
        await navigator.share({ title: devotional?.title || 'Devotional', url })
        setShareStatus('Shared')
      } else {
        await navigator.clipboard.writeText(url)
        setShareStatus('Link copied')
      }
    } catch {
      setShareStatus('Error')
    }
    setTimeout(() => setShareStatus(''), 2000)
  }

  const dateStr = devotional.scheduled_date || devotional.created_at;
  const formattedDate = dateStr ? new Date(dateStr).toLocaleDateString(undefined, { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  }) : "";

  return (
    <main className="min-h-screen bg-white pb-32">
      {/* Reading Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-tlcc-gold z-[10001] transition-all duration-150"
        style={{ width: `${readingProgress}%` }}
      />

      {/* Floating Back Button */}
      <button
        type="button"
        onClick={() => router.back()}
        className="fixed left-6 top-24 z-50 group flex items-center gap-2 bg-white/90 backdrop-blur-md border border-black/5 p-2 pr-4 rounded-full shadow-xl hover:bg-tlcc-navy hover:text-white transition-all duration-300"
      >
        <div className="w-8 h-8 rounded-full bg-tlcc-gold flex items-center justify-center text-white group-hover:rotate-[-45deg] transition-transform">
          <ArrowLeft size={18} />
        </div>
        <span className="text-xs font-black uppercase tracking-widest leading-none">Back</span>
      </button>

      {/* Hero Header */}
      <header className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-tlcc-navy">
        {devotional.image && (
          <Image
            src={devotional.image}
            alt={devotional.title ?? ''}
            fill
            className="object-cover opacity-60 scale-105"
            priority
            unoptimized
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/20" />
        
        <div className="relative z-10 container mx-auto px-4 max-w-4xl text-center">
          <div className="inline-flex items-center gap-3 mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex items-center gap-1.5 bg-tlcc-gold px-3 py-1 rounded-full text-[10px] font-black text-white uppercase tracking-tighter">
              <Calendar size={12} />
              {formattedDate}
            </div>
            <div className="flex items-center gap-1.5 bg-black/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black text-white uppercase tracking-tighter">
              <Clock size={12} />
              Quick Read
            </div>
          </div>

          <h1 className="font-anton text-5xl md:text-7xl lg:text-8xl text-tlcc-navy mb-8 leading-[0.9] uppercase tracking-tighter animate-in fade-in slide-in-from-bottom-6 duration-1000">
            {devotional.title}
          </h1>
        </div>
      </header>

      {/* Content Section */}
      <article className="container mx-auto px-4 max-w-2xl -mt-16 relative z-20">
        <div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border border-black/[0.02]">
          
          {/* Main Body */}
          <div 
            className="prose prose-xl prose-tlcc mx-auto 
              prose-headings:font-anton prose-headings:uppercase prose-headings:tracking-tight 
              prose-p:text-gray-600 prose-p:leading-relaxed prose-p:font-light 
              prose-strong:text-tlcc-navy prose-strong:font-bold
              prose-blockquote:border-l-tlcc-gold prose-blockquote:bg-tlcc-gold/5 prose-blockquote:py-2 prose-blockquote:rounded-r-xl prose-blockquote:font-serif prose-blockquote:italic prose-blockquote:text-tlcc-navy"
            dangerouslySetInnerHTML={{ __html: renderedHtml }} 
          />

          {/* Share Action */}
          <div className="mt-20 pt-10 border-t border-black/[0.05] flex flex-col items-center">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-6">Spread the Light</p>
            <button
              type="button"
              onClick={handleShare}
              className="group flex items-center gap-4 px-10 py-5 rounded-full bg-tlcc-navy text-white font-bold hover:bg-tlcc-gold transition-all duration-300 shadow-2xl hover:scale-105 active:scale-95"
            >
              {shareStatus ? (
                <>
                  <Check size={20} className="animate-in zoom-in" />
                  <span className="uppercase tracking-widest text-sm">{shareStatus}</span>
                </>
              ) : (
                <>
                  <Share2 size={20} />
                  <span className="uppercase tracking-widest text-sm">Share this Word</span>
                </>
              )}
            </button>
          </div>
        </div>
      </article>

      {/* Bottom Navigation / CTA */}
      <footer className="container mx-auto px-4 max-w-2xl mt-12 text-center">
        <button 
          onClick={() => router.push('/devotionals')}
          className="text-gray-400 hover:text-tlcc-gold text-xs font-bold uppercase tracking-[0.2em] transition-colors"
        >
          Explore more devotionals
        </button>
      </footer>
    </main>
  )
}
