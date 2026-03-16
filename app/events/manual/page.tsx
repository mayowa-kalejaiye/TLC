'use client'

import Link from 'next/link'

export default function ManualPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="font-anton text-4xl md:text-5xl text-tlcc-navy mb-4">
          THE MANUAL
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Thank you for your interest! This event has ended, but there are still plenty of opportunities to connect with us.
        </p>
        <Link
          href="/events"
          className="inline-flex items-center justify-center px-10 py-4 bg-tlcc-gold hover:bg-tlcc-orange text-white font-bold rounded-full transition-all duration-300 uppercase tracking-wide text-sm"
        >
          View Upcoming Events
        </Link>
      </section>
    </main>
  )
}
