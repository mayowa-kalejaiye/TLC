"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function DevotionalDetailPage() {
  const { slug } = useParams();
  const [devotional, setDevotional] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    fetch(`/api/devotionals/list?id=${slug}`)
      .then((r) => r.json())
      .then((data) => {
        setDevotional(data.items?.[0] || null);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-tlcc-navy font-bold animate-pulse">
        Loading devotional...
      </div>
    );
  }

  if (!devotional) {
    return (
      <div className="min-h-screen flex items-center justify-center text-lg text-gray-400">
        Devotional not found.
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white pb-24">
      <section className="relative h-[40vh] min-h-[320px] flex items-center justify-center overflow-hidden">
        {devotional.image && (
          <img
            src={devotional.image}
            alt={devotional.title}
            className="object-cover w-full h-full absolute inset-0"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/50" />
        <div className="relative z-10 container mx-auto px-4 text-center pt-8">
          <h1 className="font-anton text-4xl md:text-5xl text-white mb-4 leading-tight uppercase drop-shadow">
            {devotional.title}
          </h1>
          <div className="text-tlcc-gold font-semibold mb-2 uppercase tracking-wider">
            {devotional.created_at ? new Date(devotional.created_at).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' }) : ""}
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 max-w-3xl mt-12">
        <article className="prose prose-lg prose-tlcc max-w-none text-gray-800">
          {devotional.content}
        </article>
      </section>
    </main>
  );
}
