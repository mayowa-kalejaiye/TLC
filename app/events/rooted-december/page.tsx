
"use client"

import Image from 'next/image'
import CountdownTimer from '@/components/events/CountdownTimer'
import RootedRegistrationForm from '@/components/events/RootedRegistrationForm'

export default function HeartRoomPage() {
  return (
    <main className="min-h-screen bg-white">
      <section id="heart-room" className="container mx-auto px-4 py-16 grid lg:grid-cols-2 gap-12 items-start scroll-mt-48">
        <div>
          <h1 className="font-anton text-4xl md:text-5xl text-tlcc-navy mb-4 scroll-mt-48">HEART ROOM</h1>
          <p className="text-lg text-gray-700 mb-6">A prayer & counseling meeting designed to create space for healing, encouragement, and restoration. You do not want to miss this.</p>

          <div className="space-y-3 mb-6">
            <p className="font-semibold">Date: <span className="font-normal">Friday, 14th February 2026</span></p>
            <p className="font-semibold">Time: <span className="font-normal">10:00 AM</span></p>
            <p className="font-semibold">Venue: <span className="font-normal">The Light House, Opp 43B, Babaponmile Street, Mangoro, Ikeja</span></p>
          </div>

          <div className="mb-6">
            <CountdownTimer targetDate="2026-02-14T10:00:00+01:00" variant="light" />
          </div>

          <p className="text-sm text-gray-600">All are welcome. Bring a friend and come expectant to receive prayer, counsel, and restoration.</p>

          {/* Desktop registration form shown under the left content */}
          <div className="hidden md:block mt-6">
            <RootedRegistrationForm />
          </div>
        </div>

        <div>
          <div className="rounded-2xl overflow-hidden shadow-xl mb-8">
            <Image src="/images/tlcevent.png" alt="Heart Room" width={1200} height={800} className="object-cover w-full" />
          </div>

            <div className="md:hidden">
              <RootedRegistrationForm />
            </div>
        </div>
        
      </section>
    </main>
  )
}
