"use client";
import React, { useEffect, useState } from "react";

const PAGE_SIZE = 10;

type DevotionalItem = { id: string; title?: string; image?: string; content?: string; created_at?: string; scheduled_date?: string }

export default function PublicDevotionalsPage() {
  const [devotionals, setDevotionals] = useState<DevotionalItem[]>([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/devotionals/list?page=${page}&limit=${PAGE_SIZE}`)
      .then((r) => r.json())
      .then((data) => {
        setDevotionals(Array.isArray(data.items) ? data.items : []);
        setTotal(data.total || 0);
        setLoading(false);
      });
  }, [page]);

  const totalPages = Math.ceil(total / PAGE_SIZE);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - replica of events page, but for devotionals */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/reach.jpg"
            alt="Devotionals Hero"
            className="object-cover w-full h-full"
            draggable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/50" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center pt-16">
          <div className="inline-flex items-center space-x-2 bg-tlcc-gold/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6 border border-tlcc-gold/30">
            <span className="text-white font-semibold text-sm tracking-wider uppercase">Devotionals</span>
          </div>
          <h1 className="font-anton text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight uppercase">
            Daily Inspiration
            <br />
            <span className="text-tlcc-gold">for Your Journey</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
            Be inspired and encouraged by our latest devotionals. Explore wisdom, hope, and faith for your daily walk.
          </p>
        </div>
      </section>

      {/* Devotionals List - replica of event cards */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-anton text-4xl md:text-5xl text-tlcc-navy mb-4 uppercase">
              Latest Devotionals
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Fresh encouragement and insight for your faith journey
            </p>
          </div>
          {loading ? (
            <div className="text-center text-tlcc-navy py-16 text-xl font-bold animate-pulse">Loading devotionals...</div>
          ) : (
            <>
              {devotionals.length === 0 && (
                <div className="text-center text-gray-400 py-16 text-lg">No devotionals found.</div>
              )}
              <div className="space-y-12 max-w-6xl mx-auto">
                {devotionals.map((d, index) => (
                  <div
                    key={d.id}
                    className={`bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    {/* Devotional Image */}
                    {d.image ? (
                      <div className="md:w-1/2 relative h-64 md:h-auto min-h-[260px]">
                        <img
                          src={d.image}
                          alt={d.title}
                          className="object-cover w-full h-full absolute inset-0"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-tlcc-gold/10 to-tlcc-navy/10 opacity-30" />
                      </div>
                    ) : (
                      <div className="md:w-1/2 bg-gradient-to-br from-tlcc-gold/10 to-tlcc-navy/10 flex items-center justify-center h-64 md:h-auto min-h-[260px]">
                        <span className="text-tlcc-navy/30 text-5xl font-anton">TLCC</span>
                      </div>
                    )}
                    {/* Devotional Details */}
                    <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                      <div className="mb-4">
                        <h2 className="font-anton text-2xl md:text-3xl text-tlcc-navy uppercase mb-1 group-hover:text-tlcc-gold transition">{d.title}</h2>
                        <div className="text-xs text-tlcc-gold font-semibold mb-2 uppercase tracking-wider">{d.scheduled_date ? new Date(d.scheduled_date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' }) : (d.created_at ? new Date(d.created_at).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' }) : "")}</div>
                      </div>
                      <p className="text-gray-700 text-base mb-6 leading-relaxed line-clamp-3">{d.content ? d.content.slice(0, 180) : ''}{(d.content?.length ?? 0) > 180 ? "..." : ""}</p>
                    {/* Read More Link */}
                    <div className="mt-4">
                      <a
                        href={`/devotionals/${d.id}`}
                        className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-tlcc-gold to-tlcc-orange text-white font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-lg text-sm uppercase tracking-wide"
                      >
                        Read More
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
              </div>
              <div className="flex justify-center items-center gap-4 mt-12">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="px-5 py-2 rounded-lg bg-tlcc-gold text-tlcc-navy font-bold shadow hover:bg-yellow-400 transition disabled:opacity-50"
                >
                  Previous
                </button>
                <span className="text-tlcc-navy font-semibold text-lg">
                  Page {page} of {totalPages || 1}
                </span>
                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages || totalPages === 0}
                  className="px-5 py-2 rounded-lg bg-tlcc-gold text-tlcc-navy font-bold shadow hover:bg-yellow-400 transition disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
