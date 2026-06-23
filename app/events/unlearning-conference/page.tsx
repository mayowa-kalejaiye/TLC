import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  BookOpen,
  Calendar,
  GraduationCap,
  RefreshCw,
  Sparkles,
  Sprout,
  Sunrise,
  Moon,
} from 'lucide-react'
import UnlearningRegistrationForm from '@/components/events/UnlearningRegistrationForm'

export const metadata: Metadata = {
  title: 'The Unlearning Conference',
  description:
    'A 10-day online conference from The Light Community. Unlearn religion, relearn relationship, with daily sermons at 10AM and live reviews at 8:30PM, June 29 to July 10, 2026.',
  openGraph: {
    title: 'The Unlearning Conference | The Light Community',
    description:
      'Ten days to lay down what religion taught us and pick up what God actually said. June 29 to July 10, 2026.',
    images: ['/images/tlc-unlearn.jpg'],
  },
}

const phases = [
  {
    icon: GraduationCap,
    step: 'Phase 01',
    title: 'Learning',
    body: 'We have learned a lot. We gathered, we read, we listened, and we built a foundation of faith.',
    state: 'done',
  },
  {
    icon: RefreshCw,
    step: 'Phase 02',
    title: 'Unlearning',
    body: 'This is where we are now. Naming the religious mindsets that keep us bound, and separating what God said from what religion told us.',
    state: 'now',
  },
  {
    icon: Sprout,
    step: 'Phase 03',
    title: 'Relearning',
    body: 'What comes after: rebuilding on truth, walking with God by His word and His wisdom instead of performance.',
    state: 'next',
  },
]

const pillars = [
  {
    label: 'Miracle',
    body: 'Rare. Unique. Sovereign. A miracle cannot be reproduced or taught. 1 + 1 = 10. It happens by the hand of God alone, and that is okay.',
  },
  {
    label: 'Principle',
    body: 'Repeatable. Logical. Wisdom. Diligence, positioning, networking, the right questions. 1 + 1 = 2. This is how God leads most of us, most of the time.',
  },
  {
    label: 'Providence',
    body: 'God providing before you even ask. Doors that were open before you arrived. Grace you did not engineer, but still walked in wisely.',
  },
]

const schedule = [
  { week: 'Week 1', days: 'Mon Jun 29 to Fri Jul 3' },
  { week: 'Week 2', days: 'Mon Jul 6 to Fri Jul 10' },
]

export default function UnlearningConferencePage() {
  return (
    <main className="min-h-screen bg-slate-50 selection:bg-tlcc-orange selection:text-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-tlcc-navy py-20 text-white md:py-28">
        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-tlcc-gold/10 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-tlcc-orange/10 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-50 to-transparent" />

        <div className="container relative z-10 mx-auto px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Copy */}
            <div className="order-2 lg:order-1">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-tlcc-gold/30 bg-tlcc-gold/10 px-5 py-2 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-tlcc-gold opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-tlcc-gold" />
                </span>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-tlcc-gold">
                  10-Day Online Conference
                </span>
              </div>

              <h1 className="font-anton mb-6 text-5xl uppercase leading-[0.9] tracking-tight md:text-7xl">
                The <span className="text-tlcc-orange italic">Unlearning</span> Conference
              </h1>

              <p className="mb-8 max-w-xl text-lg leading-relaxed text-slate-300 md:text-xl">
                For ten days, we lay down everything religion taught us to carry, and pick up
                what God actually said. Hosted by The Light Community.
              </p>

              <div className="mb-9 flex flex-wrap gap-3 text-sm font-semibold">
                <div className="flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2.5 ring-1 ring-white/10">
                  <Calendar className="h-4 w-4 text-tlcc-gold" />
                  <span>Jun 29 to Jul 10, 2026</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2.5 ring-1 ring-white/10">
                  <Sunrise className="h-4 w-4 text-tlcc-gold" />
                  <span>Sermons 10:00 AM</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2.5 ring-1 ring-white/10">
                  <Moon className="h-4 w-4 text-tlcc-gold" />
                  <span>Review 8:30 PM</span>
                </div>
              </div>

              <Link
                href="#register"
                className="group inline-flex items-center gap-3 rounded-2xl bg-tlcc-gold px-8 py-4 font-bold uppercase tracking-wider text-tlcc-navy transition-all hover:bg-white hover:shadow-2xl active:scale-95"
              >
                Register Now
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Poster */}
            <div className="order-1 flex justify-center lg:order-2">
              <div className="relative">
                <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-tlcc-gold/30 to-tlcc-orange/20 blur-xl" />
                <div className="relative overflow-hidden rounded-[1.75rem] shadow-2xl ring-1 ring-white/10">
                  <Image
                    src="/images/tlc-unlearn.jpg"
                    alt="The Unlearning Conference"
                    width={1600}
                    height={1954}
                    priority
                    unoptimized
                    className="h-auto w-full max-w-sm object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why we're here: the message */}
      <section className="container mx-auto px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-tlcc-orange">
            Why this conference
          </p>
          <h2 className="font-anton mb-8 text-4xl uppercase leading-tight text-tlcc-navy md:text-5xl">
            We have learned. Now we unlearn.
          </h2>
          <div className="space-y-5 text-lg leading-relaxed text-slate-600">
            <p>
              There are three levels of growing with God: <strong className="text-tlcc-navy">learning</strong>,{' '}
              <strong className="text-tlcc-navy">unlearning</strong>, and{' '}
              <strong className="text-tlcc-navy">relearning</strong>. As a community, we have learned a
              lot. But somewhere along the way, religion crept in beside the truth.
            </p>
            <p>
              Religion is man&apos;s way of reaching God: the things we do to earn His approval, the
              constant running after His affection. It is subtle. You rarely notice when you have
              slipped from walking in the truth of God into simply performing for Him.
            </p>
            <p className="text-xl font-medium text-tlcc-navy">
              For ten days, we are going to name those mindsets out loud, and set them down.
            </p>
          </div>
        </div>
      </section>

      {/* Three phases */}
      <section className="bg-white py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mb-14 text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-tlcc-orange">
              Where we are
            </p>
            <h2 className="font-anton text-4xl uppercase text-tlcc-navy md:text-5xl">
              The Three Phases
            </h2>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            {phases.map((phase) => {
              const Icon = phase.icon
              const active = phase.state === 'now'
              return (
                <div
                  key={phase.title}
                  className={`relative rounded-[2rem] border p-8 transition-all ${
                    active
                      ? 'border-tlcc-orange/30 bg-tlcc-navy text-white shadow-2xl md:-translate-y-3'
                      : 'border-slate-100 bg-slate-50/60 text-tlcc-navy hover:shadow-md'
                  }`}
                >
                  {active && (
                    <span className="absolute right-6 top-6 rounded-full bg-tlcc-orange px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                      We are here
                    </span>
                  )}
                  <div
                    className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${
                      active ? 'bg-tlcc-orange text-white' : 'bg-tlcc-gold/15 text-tlcc-gold-dark'
                    }`}
                  >
                    <Icon className="h-7 w-7" />
                  </div>
                  <p
                    className={`mb-2 text-xs font-bold uppercase tracking-[0.2em] ${
                      active ? 'text-tlcc-gold' : 'text-slate-400'
                    }`}
                  >
                    {phase.step}
                  </p>
                  <h3 className="mb-3 text-2xl font-bold">{phase.title}</h3>
                  <p className={`leading-relaxed ${active ? 'text-slate-300' : 'text-slate-500'}`}>
                    {phase.body}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Miracle / Principle / Providence */}
      <section className="container mx-auto px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-tlcc-orange">
            One mindset we&apos;ll confront
          </p>
          <h2 className="font-anton mb-6 text-4xl uppercase leading-tight text-tlcc-navy md:text-5xl">
            Miracle. Principle. Providence.
          </h2>
          <p className="mb-14 text-lg leading-relaxed text-slate-600">
            When you pray for God to bless your career, your business, your exams. What does that
            blessing actually look like? Many of us confuse miracles with principles. Learning to
            tell them apart changes how you live, work, and pray.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.label}
              className="group relative overflow-hidden rounded-[2rem] border border-slate-100 bg-white p-8 shadow-sm transition-all hover:shadow-xl"
            >
              <div className="absolute right-0 top-0 h-1 w-full bg-gradient-to-r from-tlcc-orange to-tlcc-gold opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="font-anton text-5xl text-slate-100 transition-colors group-hover:text-tlcc-gold/20">
                0{i + 1}
              </span>
              <h3 className="mb-3 mt-2 text-2xl font-bold text-tlcc-navy">{pillar.label}</h3>
              <p className="leading-relaxed text-slate-500">{pillar.body}</p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-2xl text-center text-lg italic leading-relaxed text-slate-500">
          &ldquo;Seest thou a man diligent in his business? He shall stand before kings.&rdquo;
          God leads His people by His word and by wisdom, and that is no less spiritual.
        </p>
      </section>

      {/* Daily rhythm */}
      <section className="bg-tlcc-navy py-20 text-white md:py-28">
        <div className="container mx-auto px-6">
          <div className="mb-14 text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-tlcc-gold">
              How it runs
            </p>
            <h2 className="font-anton text-4xl uppercase md:text-5xl">The Daily Rhythm</h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-300">
              Ten sessions across two weeks, every weekday, Monday to Friday.
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            <div className="rounded-[2rem] bg-white/5 p-8 ring-1 ring-white/10">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-tlcc-gold text-tlcc-navy">
                <Sunrise className="h-7 w-7" />
              </div>
              <p className="text-sm font-bold uppercase tracking-widest text-tlcc-gold">Each Morning</p>
              <h3 className="mb-2 mt-1 text-3xl font-bold">Sermon at 10:00 AM</h3>
              <p className="leading-relaxed text-slate-300">
                The day&apos;s message is released by 10AM. Watch it on your own time, in your own space.
              </p>
            </div>

            <div className="rounded-[2rem] bg-white/5 p-8 ring-1 ring-white/10">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-tlcc-orange text-white">
                <Moon className="h-7 w-7" />
              </div>
              <p className="text-sm font-bold uppercase tracking-widest text-tlcc-orange">Each Night</p>
              <h3 className="mb-2 mt-1 text-3xl font-bold">Review at 8:30 PM</h3>
              <p className="leading-relaxed text-slate-300">
                We gather daily at 8:30PM to review the sermon together, ask the hard questions, and
                unlearn out loud.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-10 flex max-w-4xl flex-col gap-4 sm:flex-row">
            {schedule.map((s) => (
              <div
                key={s.week}
                className="flex flex-1 items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5"
              >
                <Calendar className="h-6 w-6 shrink-0 text-tlcc-gold" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-tlcc-gold">{s.week}</p>
                  <p className="text-lg font-semibold">{s.days}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration */}
      <section className="container mx-auto px-6 py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Left intro */}
          <div className="lg:col-span-6 lg:pt-10">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-tlcc-orange">
              Reserve your place
            </p>
            <h2 className="font-anton mb-6 text-4xl uppercase leading-tight text-tlcc-navy md:text-5xl">
              Step in. <br />
              Take the pledge.
            </h2>
            <p className="mb-8 max-w-md text-lg leading-relaxed text-slate-600">
              Registration is one short step. The moment you take the pledge, the conference
              WhatsApp group unlocks, and that&apos;s where every sermon and every 8:30PM review will
              be shared, daily.
            </p>

            <ul className="space-y-4">
              {[
                'Daily sermons released by 10:00 AM',
                'Live sermon review every night at 8:30 PM',
                '10 sessions, weekdays, Jun 29 to Jul 10',
                'Direct access to the conference WhatsApp group',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-600">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-tlcc-gold/15">
                    <Sparkles className="h-3 w-3 text-tlcc-gold-dark" />
                  </span>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-5">
              <BookOpen className="h-6 w-6 shrink-0 text-tlcc-gold" />
              <p className="text-sm leading-relaxed text-slate-500">
                Hosted by <span className="font-semibold text-tlcc-navy">The Light Community</span>.
                Keep up with your devotionals and Bible readings as we go.
              </p>
            </div>
          </div>

          {/* Right form */}
          <div className="lg:col-span-6">
            <div className="lg:sticky lg:top-28">
              <div className="relative overflow-hidden rounded-[2.5rem] bg-white shadow-2xl ring-1 ring-slate-100">
                <div className="absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r from-tlcc-orange to-tlcc-gold" />
                <div className="p-8 md:p-10">
                  <UnlearningRegistrationForm />
                </div>
              </div>
              <div className="mt-6 flex items-center justify-center gap-4 text-slate-400">
                <div className="h-px w-8 bg-slate-200" />
                <p className="text-xs font-medium uppercase tracking-widest">The Light Community</p>
                <div className="h-px w-8 bg-slate-200" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/events"
            className="group inline-flex items-center gap-2 font-bold text-tlcc-navy transition-colors hover:text-tlcc-orange"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 transition-colors group-hover:border-tlcc-orange">
              ←
            </span>
            Explore more experiences
          </Link>
        </div>
      </section>
    </main>
  )
}
