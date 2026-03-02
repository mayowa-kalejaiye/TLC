'use client'

import Image from 'next/image'
import CountdownTimer from '@/components/events/CountdownTimer'
import ManualRegistrationForm from '@/components/events/ManualRegistrationForm'

export default function ManualPage() {
  return (
    <main className="min-h-screen bg-white">
      <section
        id="manual"
        className="container mx-auto px-4 py-16 grid lg:grid-cols-2 gap-12 items-start scroll-mt-48"
      >
        <div>
          <h1 className="font-anton text-4xl md:text-5xl text-tlcc-navy mb-4 scroll-mt-48">
            THE MANUAL
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Man understanding why he was created. A meeting where we learn about the
            plans God has for man — that man was not meant to just do life on their own
            and guess how things work. There is an original plan, an initial blueprint
            for man. Come discover it.
          </p>

          <div className="space-y-3 mb-6">
            <p className="font-semibold">
              Date: <span className="font-normal">Saturday, 7th March 2026</span>
            </p>
            <p className="font-semibold">
              Time: <span className="font-normal">10:00 AM</span>
            </p>
            <p className="font-semibold">
              Venue:{' '}
              <span className="font-normal">
                The Light House, Opp 43B, Babaponmile Street, Mangoro, Ikeja
              </span>
            </p>
          </div>

          <div className="mb-6">
            <CountdownTimer targetDate="2026-03-07T10:00:00+01:00" variant="light" />
          </div>

          <p className="text-sm text-gray-600">
            All are welcome. Bring a friend and come ready to discover God&apos;s original
            plan for your life.
          </p>

          {/* Desktop registration form shown under the left content */}
          <div className="hidden md:block mt-6">
            <ManualRegistrationForm />
          </div>
        </div>

        <div>
          <div className="rounded-2xl overflow-hidden shadow-xl mb-8">
            <Image
              src="/images/manual.jpg"
              alt="The Manual"
              width={1200}
              height={800}
              className="object-cover w-full"
            />
          </div>

          <div className="md:hidden">
            <ManualRegistrationForm />
          </div>
        </div>
      </section>
    </main>
  )
}
