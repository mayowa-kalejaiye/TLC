"use client";
import React, { useEffect, useState } from "react";
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, Share2, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

function estimateReadingTime(text: string) {
  if (!text) return '1 min'
  const words = text.replace(/<[^>]+>/g, '').trim().split(/\s+/).filter(Boolean).length
  const minutes = Math.max(1, Math.round(words / 200))
  return `${minutes} min read`
}

const PAGE_SIZE = 9;

type DevotionalItem = { 
  id: string; 
  title?: string; 
  image?: string; 
  content?: string; 
  created_at?: string; 
  scheduled_date?: string 
}

export default function PublicDevotionalsPage() {
  const [devotionals, setDevotionals] = useState<DevotionalItem[]>([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [shareStatusMap, setShareStatusMap] = useState<Record<string, string>>({});

  useEffect(() => {
    setLoading(true);
    fetch(`/api/devotionals/list?page=${page}&limit=${PAGE_SIZE}`)
      .then((r) => r.json())
      .then((data) => {
        setDevotionals(Array.isArray(data.items) ? data.items : []);
        setTotal(data.total || 0);
        setLoading(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
  }, [page]);

  const totalPages = Math.ceil(total / PAGE_SIZE);

  const handleShare = async (e: React.MouseEvent, d: DevotionalItem) => {
    e.preventDefault();
    e.stopPropagation();
    const url = `${window.location.origin}/devotionals/${d.id}`;
    try {
      if (navigator.share) {
        await navigator.share({ title: d.title || 'Devotional', url });
        setShareStatusMap(p => ({ ...p, [d.id]: 'Shared' }));
      } else {
        await navigator.clipboard.writeText(url);
        setShareStatusMap(p => ({ ...p, [d.id]: 'Link copied' }));
      }
    } catch {
      setShareStatusMap(p => ({ ...p, [d.id]: 'Error' }));
    }
    setTimeout(() => setShareStatusMap(p => { 
      const copy = { ...p }; delete copy[d.id]; return copy; 
    }), 2000);
  };

  return (
    <main className="min-h-screen bg-[#fafafa]">
      {/* Hero Section - Premium Black/Gold Gradient */}
      <section className="relative h-[65vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/reach.jpg"
            alt="Devotionals Hero"
            fill
            className="object-cover scale-105"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-b from-tlcc-navy/90 via-tlcc-navy/70 to-[#fafafa]" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-flex items-center space-x-2 bg-tlcc-gold/10 backdrop-blur-md px-4 py-2 rounded-full mb-8 border border-tlcc-gold/20 shadow-2xl">
            <div className="w-2 h-2 rounded-full bg-tlcc-gold animate-pulse" />
            <span className="text-tlcc-gold font-bold text-[10px] tracking-[0.2em] uppercase">The Word Daily</span>
          </div>
          
          <h1 className="font-anton text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white mb-6 leading-[0.9] uppercase tracking-tighter">
            Daily <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-tlcc-gold via-white/80 to-tlcc-gold/40">Inspiration</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
            Transformed by the renewing of your mind. Explore our library of spiritual nourishment and growth.
          </p>
        </div>
      </section>

      {/* Devotionals Grid Section */}
      <section className="pb-32 -mt-20 relative z-20">
        <div className="container mx-auto px-4">
          
          {loading ? (
            <div className="flex flex-col items-center justify-center py-32 space-y-4">
              <div className="w-12 h-12 border-4 border-tlcc-gold border-t-transparent rounded-full animate-spin"></div>
              <p className="text-tlcc-navy font-bold tracking-widest uppercase text-sm">Aligning the Word...</p>
            </div>
          ) : (
            <>
              {devotionals.length === 0 && !loading && (
                <div className="text-center py-32 bg-white rounded-3xl border border-dashed border-gray-200">
                  <p className="text-gray-400 text-lg uppercase tracking-widest">No seeds planted here yet.</p>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {devotionals.map((d) => {
                  const dateStr = d.scheduled_date || d.created_at;
                  const formattedDate = dateStr ? new Date(dateStr).toLocaleDateString(undefined, { 
                    month: 'short', 
                    day: 'numeric', 
                    year: 'numeric' 
                  }) : "";

                  return (
                    <Link 
                      href={`/devotionals/${d.id}`} 
                      key={d.id}
                      className="group relative bg-white rounded-[2rem] overflow-hidden border border-black/[0.03] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_-15px_rgba(214,158,46,0.15)] transition-all duration-500 hover:-translate-y-2 flex flex-col"
                    >
                      {/* Image Container */}
                      <div className="relative aspect-[16/10] overflow-hidden">
                        {d.image ? (
                          <Image
                            src={d.image}
                            alt={d.title ?? ''}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            unoptimized
                          />
                        ) : (
                          <div className="absolute inset-0 bg-tlcc-navy opacity-90 flex items-center justify-center">
                            <span className="text-tlcc-gold font-anton text-4xl opacity-20">TLCC</span>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        {/* Status/Badge Overlay */}
                        <div className="absolute top-4 left-4 flex gap-2">
                          <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-tlcc-navy border border-black/5 flex items-center gap-1.5 shadow-sm">
                            <Calendar className="h-3 w-3 text-tlcc-gold" />
                            {formattedDate}
                          </div>
                        </div>

                        {/* Share Button Overlay */}
                        <button
                          onClick={(e) => handleShare(e, d)}
                          className="absolute top-4 right-4 z-10 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-tlcc-navy border border-black/5 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 shadow-md hover:bg-tlcc-gold hover:text-white"
                        >
                          <Share2 size={16} />
                        </button>
                        
                        {shareStatusMap[d.id] && (
                          <div className="absolute top-4 right-14 bg-black/80 text-white text-[10px] px-3 py-1.5 rounded-lg backdrop-blur-md animate-in fade-in slide-in-from-right-2">
                            {shareStatusMap[d.id]}
                          </div>
                        )}
                      </div>

                      {/* Content Section */}
                      <div className="p-8 flex flex-col flex-grow">
                        <div className="flex items-center gap-4 mb-4">
                          <span className="h-[2px] w-8 bg-tlcc-gold group-hover:w-16 transition-all duration-500" />
                          <div className="flex items-center gap-1.5 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                            <Clock className="h-3 w-3" />
                            {estimateReadingTime(d.content || '')}
                          </div>
                        </div>

                        <h3 className="text-2xl font-bold text-tlcc-navy mb-4 group-hover:text-tlcc-gold transition-colors duration-300 leading-[1.2]">
                          {d.title}
                        </h3>

                        <div className="text-gray-500 text-sm line-clamp-2 mb-8 leading-relaxed font-light italic">
                          {/* Simplified preview (excluding markdown/html) */}
                          {d.content?.replace(/[#*`]/g, '').slice(0, 100)}...
                        </div>

                        <div className="mt-auto pt-6 border-t border-black/[0.03] flex items-center justify-between">
                          <span className="text-[11px] font-black uppercase tracking-[0.2em] text-tlcc-navy/40 group-hover:text-tlcc-gold transition-colors">
                            Full Story
                          </span>
                          <div className="w-10 h-10 rounded-full border border-black/[0.05] flex items-center justify-center group-hover:bg-tlcc-gold group-hover:border-tlcc-gold transition-all duration-500 group-hover:scale-110">
                            <ArrowRight className="h-4 w-4 text-tlcc-navy group-hover:text-white transition-colors rotate-0 group-hover:-rotate-45" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>

              {/* Enhanced Pagination */}
              {totalPages > 1 && (
                <div className="mt-20 flex justify-center items-center gap-8">
                  <button
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={page === 1}
                    className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-white border border-black/[0.05] text-tlcc-navy font-bold shadow-sm hover:bg-tlcc-gold hover:text-white transition-all disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-tlcc-navy group"
                  >
                    <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    <span>Prev</span>
                  </button>
                  
                  <div className="flex items-center gap-1">
                    <span className="text-tlcc-navy font-black text-2xl">{page.toString().padStart(2, '0')}</span>
                    <span className="text-gray-300 text-xl font-light mx-2">/</span>
                    <span className="text-gray-400 font-bold">{totalPages.toString().padStart(2, '0')}</span>
                  </div>

                  <button
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    disabled={page === totalPages || totalPages === 0}
                    className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-white border border-black/[0.05] text-tlcc-navy font-bold shadow-sm hover:bg-tlcc-gold hover:text-white transition-all disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-tlcc-navy group"
                  >
                    <span>Next</span>
                    <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </main>
  );
}
