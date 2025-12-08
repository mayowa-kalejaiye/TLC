import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, MapPin, Sparkles, Users, Utensils } from 'lucide-react'

const schedule = [
  {
    label: 'Date',
    value: 'Saturday · 20 December 2025',
    icon: Calendar,
  },
  {
    label: 'Time',
    value: '9:30 AM – 6:00 PM (Hangout follows Rooted)',
    icon: Clock,
  },
  {
    label: 'Venue',
    value: 'The Light House · 43b Babaponmile Street, Mangoro, Ikeja',
    icon: MapPin,
  },
]

const experiences = [
  'Prophetic teaching from Apostle Nelson Isaiah',
  'Extended worship, impartation and prayer circles',
  'Community panels + real conversations about living in abundance',
  'The Light Hangout: games, laughter, and family moments',
]

const menu = ['Signature jollof rice', 'Small chops & finger foods', 'Pizza slices to share', 'Refreshing drinks']

export default function RootedSpotlight() {
  return (
    <section className="relative bg-gradient-to-b from-white via-tlcc-cream to-white py-20">
      <div className="container-custom grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <div>
          <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-tlcc-orange/10 border border-tlcc-orange/30 text-tlcc-orange font-semibold tracking-wide uppercase text-xs mb-5">
            <Sparkles className="h-4 w-4" />
            Featured Gathering
          </p>
          <h2 className="font-anton text-4xl md:text-5xl text-tlcc-navy leading-tight mb-4">
            Rooted December · Living in Abundance
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            It is the last Rooted of the year and we are going all in. Worship that lingers, prophetic teaching that
            reorients your heart, impartation that ignites, and then the Light Hangout so we can laugh, eat, play games
            and build family. Come find your people, your fire, and the community that keeps you rooted.
          </p>
          <ul className="space-y-3 mb-6">
            {experiences.map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-800">
                <span className="mt-1 h-2 w-2 rounded-full bg-tlcc-orange" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {schedule.map(({ label, value, icon: Icon }) => (
              <div key={label} className="bg-white rounded-2xl shadow-lg border border-tlcc-cream/60 p-4">
                <Icon className="h-5 w-5 text-tlcc-orange mb-2" />
                <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold">{label}</p>
                <p className="text-sm font-semibold text-tlcc-navy">{value}</p>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-2xl border border-tlcc-cream/70 p-6 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <Utensils className="h-5 w-5 text-tlcc-gold" />
              <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">The Hangout Menu</p>
            </div>
            <p className="text-gray-700 mb-3 text-sm">
              We are ending the year with a table that feels like home—think comfort food, Nigerian classics and big
              sharable bites.
            </p>
            <div className="flex flex-wrap gap-2">
              {menu.map((item) => (
                <span key={item} className="px-3 py-1 rounded-full bg-tlcc-cream text-sm text-tlcc-navy font-semibold">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/events/rooted-december"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-tlcc-orange text-white font-bold uppercase tracking-wide shadow-lg hover:scale-105 transition"
            >
              Register Free
            </Link>
            <Link
              href="/events#rooted-december"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-tlcc-navy text-tlcc-navy font-bold uppercase tracking-wide hover:bg-tlcc-navy hover:text-white transition"
            >
              See Details
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-[30px] overflow-hidden shadow-2xl border-4 border-white">
            <Image
              src="/images/rooted_december.jpg"
              alt="Rooted December"
              width={900}
              height={1200}
              className="object-cover h-full"
              priority
            />
          </div>
          <div className="absolute -bottom-8 -left-6 w-64">
            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white rotate-3">
              <Image
                src="/images/rooted_hangout.jpg"
                alt="The Light Hangout"
                width={600}
                height={400}
                className="object-cover"
              />
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-4 mt-4">
              <div className="flex items-center gap-3">
                <Users className="h-6 w-6 text-tlcc-orange" />
                <div>
                  <p className="text-sm font-semibold text-tlcc-navy">The Light Hangout</p>
                  <p className="text-xs text-gray-500">Games · Food · Family</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
