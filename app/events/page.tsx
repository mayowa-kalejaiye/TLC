 'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, MapPin, Users, Flame, Heart, ChevronRight, ArrowRight } from 'lucide-react'

export default function EventsPage() {
  const upcomingEvents = [
    {
      id: 'watch-hour',
      title: 'Watch Hour Prayers',
      tagline: 'Friday Night Intercession',
      description:
        'Watch Hour Prayers is this Friday! Join us at 9:00 PM as we stand in the gap, pray for the Body of Christ, strengthen one another, and lift the church of Christ in passionate intercession.',
      date: 'This Friday · 9:00 PM WAT',
      time: 'One Night of Prayer',
      location: 'The Light House & Online',
      type: 'Prayer Watch',
      image: '/images/watch_hour.jpg',
      icon: Clock,
      color: 'from-emerald-900 via-green-700 to-yellow-400',
      whatsappLink: 'https://chat.whatsapp.com/G395zowpEcAFfYWrmFlyGI',
      featured: true,
    },
    {
      id: 'fire-conference',
      title: 'Fire Conference',
      tagline: 'An Encounter with the Holy Spirit',
      description: 'Our annual youth and teenage conference designed to ignite your passion for God. Experience days of powerful worship, life-changing messages, and supernatural encounters that will transform your walk with Christ.',
      date: 'Annually in August',
      time: 'One-Day Conference',
      location: 'The Light House',
      type: 'Youth Conference',
      image: '/images/fire-conference.jpg',
      icon: Flame,
      color: 'from-orange-500 to-red-600',
      featured: true
    },
    {
      id: 'tarry',
      title: 'Tarry',
      tagline: 'Extended Hours of Prayer & Worship',
      description: 'A small, intimate gathering where young and old come together to PRAY! We tarry in God\'s presence, intercede for the church, nations, and revival. Expect extended hours of fervent prayer and worship.',
      date: 'Regular Meetings',
      time: 'Check Schedule',
      location: 'The Light House & Online',
      type: 'Prayer Meeting',
      image: '/images/tarry.jpg',
      icon: Heart,
      color: 'from-tlc-gold to-tlc-orange',
      featured: true
    },
    {
      id: 'rooted',
      title: 'Rooted',
      tagline: 'Great Sermons, Deep Connections',
      description: 'Our monthly in-person gathering for powerful preaching and community connection. Come for life-changing sermons, stay for fellowship and meaningful relationships with fellow believers.',
      date: 'First Saturday of Every Month',
      time: '10:00 AM',
      location: 'The Light House, 43b Babaponmile Street, Mangoro, Ikeja',
      type: 'Monthly Gathering',
      image: '/images/rooted2.jpg',
      icon: Users,
      color: 'from-tlc-green to-tlc-navy',
      featured: true
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/event-hero.jpg"
            alt="Events"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/50" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-flex items-center space-x-2 bg-tlc-gold/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6 border border-tlc-gold/30">
            <Calendar className="h-4 w-4 text-tlc-gold" />
            <span className="text-white font-semibold text-sm tracking-wider uppercase">Events</span>
          </div>

          <h1 className="font-anton text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight uppercase">
            Experience
            <br />
            <span className="text-tlc-orange">God Together</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
            From powerful conferences to intimate prayer meetings, join us for life-changing encounters with God
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#upcoming-events"
              className="px-10 py-4 bg-tlc-gold hover:bg-tlc-orange text-white font-bold rounded-full transition-all duration-300 uppercase tracking-wide text-sm"
            >
              View Events
            </Link>
            <Link
              href="/contact#event-inquiry"
              className="px-10 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-tlc-navy text-white font-bold rounded-full transition-all duration-300 uppercase tracking-wide text-sm"
            >
              Get Information
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section id="upcoming-events" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-anton text-4xl md:text-5xl text-tlc-navy mb-4 uppercase">
              Upcoming Events
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Mark your calendars! Here's what's happening at The Light Community
            </p>
          </div>

          <div className="space-y-12 max-w-6xl mx-auto">
            {upcomingEvents.map((event, index) => {
              const IconComponent = event.icon
              return (
                <div
                  key={event.id}
                  id={event.id}
                  className={`bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex flex-col md:flex`}
                >
                  {/* Event Image */}
                  <div className="md:w-1/2 relative h-64 md:h-auto min-h-[400px]">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-30`} />
                    <div className="absolute top-6 left-6">
                      <div className={`bg-gradient-to-r ${event.color} text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide`}>
                        {event.type}
                      </div>
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${event.color} rounded-xl flex items-center justify-center`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-anton text-3xl text-tlc-navy uppercase">
                          {event.title}
                        </h3>
                        <p className="text-tlc-orange font-semibold">
                          {event.tagline}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                      {event.description}
                    </p>

                    {/* Event Info */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3 text-gray-600">
                        <Calendar className="h-5 w-5 text-tlc-gold" />
                        <span className="font-semibold">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-600">
                        <Clock className="h-5 w-5 text-tlc-gold" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-600">
                        <MapPin className="h-5 w-5 text-tlc-gold" />
                        <span>{event.location}</span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        href="/contact#event-inquiry"
                        className={`inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r ${event.color} text-white font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-lg`}
                      >
                        <span>Learn More</span>
                        <ArrowRight className="h-5 w-5" />
                      </Link>
                      {event.whatsappLink && (
                        <a
                          href={event.whatsappLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-tlc-navy font-bold rounded-full border-2 border-tlc-navy hover:bg-tlc-navy hover:text-white transition-all duration-300 shadow-lg"
                        >
                          <span>Join WhatsApp Group</span>
                          <ArrowRight className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Attend Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-anton text-4xl md:text-5xl text-tlc-navy mb-6 uppercase">
              Why Attend Our Events?
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Every event is designed to bring you closer to God and connect you with a family that cares
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6">
                <div className="w-16 h-16 bg-tlc-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Flame className="h-8 w-8 text-tlc-gold" />
                </div>
                <h3 className="font-bold text-xl text-tlc-navy mb-3">
                  Encounter God
                </h3>
                <p className="text-gray-600">
                  Experience the manifest presence of God in worship, prayer, and powerful teaching
                </p>
              </div>

              <div className="p-6">
                <div className="w-16 h-16 bg-tlc-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-tlc-orange" />
                </div>
                <h3 className="font-bold text-xl text-tlc-navy mb-3">
                  Build Community
                </h3>
                <p className="text-gray-600">
                  Connect with believers who are passionate about growing in faith together
                </p>
              </div>

              <div className="p-6">
                <div className="w-16 h-16 bg-tlc-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-tlc-green" />
                </div>
                <h3 className="font-bold text-xl text-tlc-navy mb-3">
                  Grow Deeper
                </h3>
                <p className="text-gray-600">
                  Receive practical teaching and spiritual nourishment for your journey
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-tlc-navy to-tlc-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-anton text-4xl md:text-5xl mb-6 uppercase">
            Don't Miss Out!
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Get updates on upcoming events and be the first to know when registration opens
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#stay-connected"
              className="px-10 py-4 bg-tlc-gold hover:bg-tlc-orange text-white font-bold rounded-full transition-all duration-300 uppercase tracking-wide text-sm"
            >
              Subscribe for Updates
            </Link>
            <Link
              href="/contact#event-inquiry"
              className="px-10 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-tlc-navy text-white font-bold rounded-full transition-all duration-300 uppercase tracking-wide text-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

// Page-level metadata removed: this page is a client component ('use client')
// Exporting `metadata` from a client component is invalid in Next.js App Router.
// Keep site-wide metadata in `app/layout.tsx` or convert this page to a server
// component if page-specific metadata is required.
