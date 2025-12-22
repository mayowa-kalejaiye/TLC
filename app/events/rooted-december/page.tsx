"use client"
// ...existing code...

export default function RootedDecemberPage() {
  return (
  <main className="bg-white min-h-[60vh] flex items-center justify-center">
  <div className="text-center py-24">
  <h1 className="font-anton text-3xl md:text-5xl text-tlcc-navy mb-6">This event has ended</h1>
  <p className="text-lg text-gray-700 mb-8">Rooted December · Living in Abundance is now concluded. Please check our events page for upcoming gatherings.</p>
  <a href="/events" className="inline-block px-8 py-4 bg-tlcc-orange text-white font-bold rounded-full uppercase tracking-wide hover:bg-tlcc-gold transition">See Upcoming Events</a>
  </div>
  </main>
  )
}
