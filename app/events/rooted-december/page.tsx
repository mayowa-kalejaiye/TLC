
"use client"
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, MapPin, Sparkles, Utensils, Users, Heart } from 'lucide-react'
import type { Metadata } from 'next'
import RootedRegistrationForm from '@/components/events/RootedRegistrationForm'
import CountdownTimer from '@/components/events/CountdownTimer'
import { useLanguage } from '@/components/providers/LanguageProvider'

export const metadata: Metadata = {
  title: 'Rooted December | The Light Community Church',
  description:
    'Register for Rooted December — Living in Abundance with Apostle Nelson Isaiah. Worship, impartation, Light Hangout, food and family all in one day.',
  openGraph: {
    title: 'Rooted December — Living in Abundance',
    description:
      'Worship, impartation, prayer circles and The Light Hangout happening on Saturday 20 December. Save your seat today.',
    images: [
      {
        url: 'https://tlcc.ng/images/rooted_hangout.jpg',
        width: 1200,
        height: 630,
        alt: 'Rooted December — Light Hangout vibes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rooted December — Living in Abundance',
    description:
      'Register for Rooted December and The Light Hangout happening Saturday 20 December at The Light House.',
    images: ['https://tlcc.ng/images/rooted_hangout.jpg'],
  },
}

const infoIcons = [Calendar, Sparkles, Heart, Clock, MapPin]


export default function RootedDecemberPage() {
  const { messages } = useLanguage()
  const rooted = messages.home.rootedSpotlight
  const info = [
    { label: rooted.schedule[0].label, value: rooted.schedule[0].value },
    { label: rooted.title.split('·')[1]?.trim() || rooted.title, value: rooted.title },
    { label: 'Host', value: 'Apostle Nelson Isaiah' },
    { label: rooted.schedule[1].label, value: rooted.schedule[1].value },
    { label: rooted.schedule[2].label, value: rooted.schedule[2].value },
  ]
  const hangoutHighlights = [
    { title: rooted.menuTitle, description: rooted.menuDescription, icon: Utensils },
    { title: rooted.hangoutTitle, description: rooted.hangoutSubtitle, icon: Users },
  ]

  return (
    <main className="bg-white">
      <section className="relative min-h-[70vh] flex items-center py-24 overflow-hidden">
        <Image
          src="/images/rooted_december.jpg"
          alt={rooted.mainImageAlt}
          fill
          className="object-cover absolute inset-0"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/70" />
        <div className="container-custom relative z-10 text-white space-y-8">
          <p className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/30 rounded-full uppercase tracking-wide text-xs font-semibold">
            <Sparkles className="h-4 w-4" /> {rooted.badge} {rooted.title}
          </p>
          <h1 className="font-anton text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
            {rooted.title}
          </h1>
          <p className="text-lg md:text-xl max-w-3xl text-white/90">
            {rooted.description}
          </p>
          <CountdownTimer targetDate="2025-12-20T09:30:00+01:00" className="max-w-xl" />
          <div className="flex flex-wrap gap-4">
            <Link
              href="#register"
              className="px-8 py-4 rounded-full bg-tlcc-orange text-white font-bold uppercase tracking-wide hover:bg-tlcc-gold transition"
            >
              {rooted.primaryCta}
            </Link>
            <Link
              href="/events"
              className="px-8 py-4 rounded-full border-2 border-white text-white font-bold uppercase tracking-wide hover:bg-white hover:text-tlcc-navy transition"
            >
              {messages.nav.events}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom grid lg:grid-cols-[1.2fr_0.8fr] gap-10">
          <div>
            <h2 className="font-anton text-3xl md:text-4xl text-tlcc-navy mb-6">{messages.home.rootedSpotlight.menuTitle}</h2>
            <p className="text-lg text-gray-700 mb-8">{messages.home.rootedSpotlight.menuDescription}</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {info.map(({ label, value }, idx) => {
                const Icon = infoIcons[idx % infoIcons.length]
                return (
                  <div key={label} className="bg-tlcc-cream rounded-3xl p-4 border border-white shadow-sm">
                    <Icon className="h-5 w-5 text-tlcc-orange mb-2" />
                    <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold">{label}</p>
                    <p className="text-sm font-semibold text-tlcc-navy">{value}</p>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="relative">
            <div className="rounded-[32px] overflow-hidden shadow-2xl border-4 border-white">
              <Image src="/images/rooted_hangout.jpg" alt={rooted.hangoutImageAlt} width={900} height={900} className="object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-4 bg-white rounded-3xl shadow-xl p-5 w-72">
              <p className="text-sm font-semibold text-tlcc-orange uppercase tracking-wide mb-1">{rooted.hangoutTitle}</p>
              <p className="text-xs text-gray-600">{rooted.hangoutSubtitle}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-tlcc-navy to-tlcc-green text-white">
        <div className="container-custom grid md:grid-cols-2 gap-6">
          {hangoutHighlights.map(({ title, description, icon: Icon }) => (
            <div key={title} className="bg-white/10 border border-white/20 rounded-3xl p-6 backdrop-blur-sm">
              <Icon className="h-8 w-8 text-tlcc-gold mb-4" />
              <h3 className="font-anton text-2xl mb-3">{title}</h3>
              <p className="text-white/80 text-sm">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="register" className="py-20 bg-gray-50">
        <div className="container-custom grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
          <div>
            <p className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wide bg-tlcc-gold/10 border border-tlcc-gold/30 rounded-full text-tlcc-gold mb-4">
              <Users className="h-4 w-4" /> {rooted.badge}
            </p>
            <h2 className="font-anton text-3xl md:text-4xl text-tlcc-navy mb-4">{rooted.primaryCta}</h2>
            <p className="text-gray-700 mb-8">{rooted.description}</p>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>• {messages.home.rootedSpotlight.experiences[0]}</li>
              <li>• {messages.home.rootedSpotlight.experiences[1]}</li>
              <li>• {messages.home.rootedSpotlight.experiences[2]}</li>
              <li>• {messages.home.rootedSpotlight.experiences[3]}</li>
            </ul>
          </div>
          <RootedRegistrationForm />
        </div>
      </section>
    </main>
  )
}
