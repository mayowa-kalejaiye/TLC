import Link from 'next/link'
import { Calendar, Clock, MapPin, Users } from 'lucide-react'
import UnderstandingSalvationRegistrationForm from '@/components/events/UnderstandingSalvationRegistrationForm'

export default function UnderstandingSalvationPage() {
  return (
    <main className="min-h-screen bg-slate-50 selection:bg-tlcc-orange selection:text-white">
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-tlcc-navy py-24 text-white md:py-32">
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-50 to-transparent"></div>
        <div className="container relative z-10 mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-tlcc-gold/30 bg-tlcc-gold/10 px-6 py-2 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-tlcc-gold opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-tlcc-gold"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-tlcc-gold">
                Discipleship Intensive Cohort 1.0
              </span>
            </div>

            <h1 className="font-anton mb-8 text-5xl leading-tight tracking-tight md:text-8xl">
              Understanding <span className="text-tlcc-orange italic">Salvation</span>
            </h1>

            <p className="mx-auto mb-10 max-w-2xl text-xl leading-relaxed text-slate-300 md:text-2xl">
              A 4-day deep-dive discipleship training designed to anchor your soul in the foundational truth of the Gospel.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold uppercase tracking-wider">
              <div className="flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2 ring-1 ring-white/10">
                <Calendar className="h-4 w-4 text-tlcc-gold" />
                <span>April 13, 14, 16, 17</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2 ring-1 ring-white/10">
                <Clock className="h-4 w-4 text-tlcc-gold" />
                <span>7:00 PM Nightly</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2 ring-1 ring-white/10">
                <MapPin className="h-4 w-4 text-tlcc-gold" />
                <span>Online (Google Meet)</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2 ring-1 ring-white/10 text-tlcc-gold">
                <Users className="h-4 w-4" />
                <span>Only 6 Slots Available</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content & Form Grid */}
      <section className="container mx-auto -mt-12 px-6 pb-32">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Left Side: Program Details */}
          <div className="lg:col-span-7 lg:pt-16">
            <div className="space-y-12">
              <div>
                <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-tlcc-navy">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-tlcc-orange/10 text-xl text-tlcc-orange">01</span>
                  The Vision
                </h2>
                <div className="space-y-4 text-lg leading-relaxed text-slate-600">
                  <p>
                    This training is intentionally structured as a high-engagement cohort to nurture believers into becoming committed, knowledgeable, and Spirit-led disciples.
                  </p>
                  <p>
                    We aren&apos;t just sharing information; we are building conviction. By the end of these 4 days, you will walk away with a clarity on Salvation that changes how you live, pray, and witness.
                  </p>
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-md">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-tlcc-gold text-white">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 font-bold text-tlcc-navy">Host & Anchor</h3>
                  <p className="text-slate-500 italic">Apostle Isaiah Peter Nelson</p>
                  <p className="text-xs text-slate-400 mt-1 uppercase tracking-tight">Lead Strategist & Teacher</p>
                </div>
              </div>

              <div className="rounded-[40px] bg-tlcc-navy p-8 text-white md:p-12">
                <h3 className="mb-6 text-2xl font-bold italic text-tlcc-gold">Why 7:00 PM?</h3>
                <p className="text-lg leading-relaxed text-slate-300">
                  We value your community commitments. This time slot ensures you can finish your workday and still join clan prayers or other scheduled meetings without any clash.
                </p>
              </div>

              <div>
                <Link
                  href="/events"
                  className="group inline-flex items-center gap-2 font-bold text-tlcc-navy transition-colors hover:text-tlcc-orange"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 transition-colors group-hover:border-tlcc-orange">←</span>
                  Explore more experiences
                </Link>
              </div>
            </div>
          </div>

          {/* Right Side: Sticky Form */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-8">
              <div className="relative overflow-hidden rounded-[2.5rem] bg-white shadow-2xl ring-1 ring-slate-100">
                <div className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-tlcc-orange to-tlcc-gold"></div>
                <div className="p-8 md:p-10">
                  <UnderstandingSalvationRegistrationForm />
                </div>
              </div>
              
              <div className="mt-8 flex items-center justify-center gap-4 text-slate-400">
                <div className="h-px w-8 bg-slate-200"></div>
                <p className="text-xs font-medium uppercase tracking-widest">Secured by TLCC</p>
                <div className="h-px w-8 bg-slate-200"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
