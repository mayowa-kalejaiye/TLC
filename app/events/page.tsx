"use client";

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  ArrowRight, 
  Sparkles,
  ChevronRight,
  Flame,
  Heart,
  RefreshCw,
  type LucideIcon
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type EventItem = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  date: string;
  time: string;
  location: string;
  type: string;
  image: string;
  icon: LucideIcon;
  color: string;
  featured: boolean;
  ctaLink?: string;
  ctaLabel?: string;
}

export default function EventsPage() {
  const upcomingEvents: EventItem[] = [
    {
      id: 'unlearning-conference',
      title: 'The Unlearning Conference',
      tagline: '10-Day Online Conference',
      description:
        'Ten days to lay down everything religion taught us to carry, and pick up what God actually said. Daily sermons at 10AM and live reviews at 8:30PM.',
      date: 'June 29 to July 10, 2026',
      time: 'Weekdays • 10AM & 8:30PM',
      location: 'Online (WhatsApp Community)',
      type: 'Conference',
      image: '/images/tlc-unlearn.jpg',
      icon: RefreshCw,
      color: 'from-[#1a365d] to-[#2a4365]',
      featured: true,
      ctaLink: '/events/unlearning-conference',
      ctaLabel: 'Register Now',
    },
    {
      id: 'understanding-salvation',
      title: '4 Days of Understanding Salvation',
      tagline: 'Intensive Discipleship Training',
      description:
        'A 4-day intensive discipleship training designed to ground participants in the foundational truth of the Gospel. Registration closes once all 6 slots are filled.',
      date: 'April 13, 14, 16, 17, 2026',
      time: '7:00 PM Nightly',
      location: 'Online (Google Meet)',
      type: 'Intensive',
      image: '/images/event-hero.jpg',
      icon: Sparkles,
      color: 'from-[#1a365d] to-[#2a4365]',
      featured: true,
      ctaLink: '/events/understanding-salvation',
      ctaLabel: 'Secure Your Slot',
    },
    {
      id: 'watch-hour',
      title: 'Watch Hour Prayers',
      tagline: 'Friday Night Intercession',
      description:
        'Join us as we stand in the gap, pray for the Body of Christ, and strengthen one another in passionate intercession.',
      date: 'Bi-weekly Fridays',
      time: '9:00 PM',
      location: 'The Light House & Online',
      type: 'Prayer Watch',
      image: '/images/watch_hour.jpg',
      icon: Clock,
      color: 'from-[#d69e2e] to-[#b88627]',
      featured: true,
      ctaLabel: 'Learn More',
    },
    {
      id: 'rooted',
      title: 'Rooted (Monthly Gathering)',
      tagline: 'Great Sermons, Deep Connections',
      description:
        'Our monthly in-person gathering for powerful preaching and community connection. Come for life-changing sermons and stay for fellowship.',
      date: 'First Saturday Monthly',
      time: '10:00 AM',
      location: 'The Light House, Mangoro',
      type: 'Gathering',
      image: '/images/rooted2.JPG',
      icon: Users,
      color: 'from-[#064e3b] to-[#065f46]',
      featured: true,
      ctaLabel: 'Details',
    },
    {
      id: 'fire-conference',
      title: 'Fire Conference',
      tagline: 'An Encounter with the Holy Spirit',
      description: 'Our annual youth and teenage conference designed to ignite your passion for God. Experience days of powerful worship and supernatural encounters.',
      date: 'Annually in August',
      time: 'One-Day Conference',
      location: 'The Light House',
      type: 'Youth Conference',
      image: '/images/fire-conference.jpg',
      icon: Flame,
      color: 'from-[#f97316] to-[#dc2626]',
      featured: true,
      ctaLabel: 'More Info'
    },
    {
      id: 'tarry',
      title: 'Tarry',
      tagline: 'Extended Hours of Prayer & Worship',
      description: 'A small, intimate gathering where we tarry in God\'s presence, interceding for the church, nations, and revival.',
      date: 'Regular Meetings',
      time: 'Check Schedule',
      location: 'The Light House & Online',
      type: 'Prayer Meeting',
      image: '/images/tarry.jpg',
      icon: Heart,
      color: 'from-[#fbbf24] to-[#f59e0b]',
      featured: true,
      ctaLabel: 'Join Us'
    }
  ];

  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animation
      if (heroRef.current) {
        gsap.from(heroRef.current.querySelectorAll('[data-animate]'), {
          opacity: 0,
          y: 60,
          duration: 1,
          stagger: 0.2,
          ease: 'power4.out',
        });
      }

      // Cards Scroll Animation
      (gsap.utils.toArray('.event-card') as HTMLElement[]).forEach((card) => {
        gsap.from(card, {
          opacity: 0,
          y: 100,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        });
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <main className="min-h-screen bg-[#fafafa]">
      {/* Premium Dark Hero */}
      <section ref={heroRef} className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-tlcc-navy">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="/images/event-hero.jpg"
            alt="Events Background"
            fill
            className="object-cover scale-110 blur-[2px]"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-tlcc-navy/80 via-tlcc-navy/90 to-[#fafafa]" />
        
        <div className="relative z-10 container mx-auto px-4 text-center mt-20">
          <div data-animate className="inline-flex items-center gap-2 bg-tlcc-gold/10 backdrop-blur-xl px-4 py-2 rounded-full mb-8 border border-tlcc-gold/20">
            <Sparkles className="h-4 w-4 text-tlcc-gold" />
            <span className="text-tlcc-gold font-bold text-[10px] tracking-[0.3em] uppercase">Calendar of Light</span>
          </div>

          <h1 data-animate className="font-anton text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white mb-6 uppercase tracking-tighter leading-[0.85]">
            Experience <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-tlcc-gold to-tlcc-gold/40">The Encounter</span>
          </h1>

          <p data-animate className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 font-light tracking-wide leading-relaxed">
            Join our vibrant community for life-transforming gatherings, 
            conferences, and intimate moments in the presence of God.
          </p>

          <Link
            data-animate
            href="#upcoming"
            className="group relative inline-flex items-center gap-4 bg-tlcc-gold hover:bg-white text-white hover:text-tlcc-navy px-10 py-5 rounded-full font-black uppercase tracking-[0.2em] transition-all duration-500 shadow-2xl overflow-hidden active:scale-95"
          >
            <span className="relative z-10">Discover Events</span>
            <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Modern Event Cards Collection */}
      <section id="upcoming" className="pb-32 -mt-24 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {upcomingEvents.map((event) => {
              const Icon = event.icon;
              return (
                <Link
                  href={event.ctaLink ?? '#'}
                  key={event.id}
                  className="event-card group block relative bg-white rounded-[2.5rem] overflow-hidden border border-black/[0.03] shadow-[0_15px_45px_-15px_rgba(0,0,0,0.06)] hover:shadow-[0_45px_90px_-20px_rgba(214,158,46,0.2)] transition-all duration-700"
                >
                  {/* Visual Header */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110 blur-0 group-hover:blur-[2px]"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-tlcc-navy/40 group-hover:bg-tlcc-navy/60 transition-colors duration-500" />
                    
                    {/* Badge */}
                    <div className="absolute top-6 left-6">
                      <div className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl text-[10px] font-black text-tlcc-navy uppercase tracking-widest flex items-center gap-2 shadow-2xl">
                        <Icon className="h-3 w-3 text-tlcc-gold" />
                        {event.type}
                      </div>
                    </div>

                    {/* Quick View Stats Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
                      <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl text-white text-center">
                         <ChevronRight className="h-10 w-10 mx-auto animate-pulse" />
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-10 flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="h-[2px] w-6 bg-tlcc-gold group-hover:w-12 transition-all duration-500" />
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-tlcc-navy/30">{event.tagline}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-tlcc-navy mb-6 group-hover:text-tlcc-gold transition-colors duration-300 leading-tight">
                      {event.title}
                    </h3>

                    <div className="space-y-3 mb-10">
                      <div className="flex items-center gap-3 text-sm text-gray-500">
                        <Calendar size={16} className="text-tlcc-gold" />
                        <span className="font-medium">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-500">
                        <Clock size={16} className="text-tlcc-gold" />
                        <span className="font-medium">{event.time}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-500">
                        <MapPin size={16} className="text-tlcc-gold" />
                        <span className="font-medium">{event.location}</span>
                      </div>
                    </div>

                    <div className="mt-auto pt-8 border-t border-black/[0.03] flex items-center justify-between">
                      <span className="text-[11px] font-black uppercase tracking-[0.3em] text-tlcc-navy group-hover:text-tlcc-gold transition-colors">
                        {event.ctaLabel}
                      </span>
                      <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-tlcc-gold transition-all duration-500">
                        <ArrowRight size={20} className="text-tlcc-navy group-hover:text-white transition-transform -rotate-45 group-hover:rotate-0" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Contact Inquiry Block */}
          <div className="mt-32 max-w-4xl mx-auto bg-tlcc-navy rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-tlcc-gold/10 rounded-full -mr-32 -mt-32 blur-3xl" />
            <div className="relative z-10">
              <h2 className="font-anton text-4xl md:text-5xl text-white uppercase mb-6">Want to host an event?</h2>
              <p className="text-white/60 mb-10 max-w-xl mx-auto leading-relaxed">
                We believe in the power of community gatherings. Reach out to collaborate or inquire about using our facilities.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 text-tlcc-gold font-bold uppercase tracking-[0.2em] text-sm hover:gap-6 transition-all"
              >
                Get in touch <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* Why Attend Section - Restored with Premium Styling */}
          <div className="mt-32">
            <div className="text-center mb-16">
              <h2 className="font-anton text-4xl md:text-5xl text-tlcc-navy mb-4 uppercase">
                Why Attend?
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Every gathering is an opportunity to grow, connect, and experience the manifest presence of God.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
              <div className="text-center group p-8 rounded-[2rem] hover:bg-white hover:shadow-xl transition-all duration-500">
                <div className="w-20 h-20 bg-tlcc-gold/10 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:bg-tlcc-gold group-hover:rotate-[15deg] transition-all duration-500">
                  <Flame className="h-10 w-10 text-tlcc-gold group-hover:text-white" />
                </div>
                <h3 className="font-anton text-2xl text-tlcc-navy mb-4 uppercase">Encounter God</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Experience the manifest presence of God in worship, prayer, and powerful teaching that transforms lives.
                </p>
              </div>

              <div className="text-center group p-8 rounded-[2rem] hover:bg-white hover:shadow-xl transition-all duration-500">
                <div className="w-20 h-20 bg-tlcc-gold/10 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:bg-tlcc-gold group-hover:rotate-[-15deg] transition-all duration-500">
                  <Users className="h-10 w-10 text-tlcc-gold group-hover:text-white" />
                </div>
                <h3 className="font-anton text-2xl text-tlcc-navy mb-4 uppercase">Build Community</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Connect with a family of believers who are passionate about growing in faith and supporting each other.
                </p>
              </div>

              <div className="text-center group p-8 rounded-[2rem] hover:bg-white hover:shadow-xl transition-all duration-500">
                <div className="w-20 h-20 bg-tlcc-gold/10 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:bg-tlcc-gold group-hover:rotate-[15deg] transition-all duration-500">
                  <Heart className="h-10 w-10 text-tlcc-gold group-hover:text-white" />
                </div>
                <h3 className="font-anton text-2xl text-tlcc-navy mb-4 uppercase">Grow Deeper</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Receive sound spiritual nourishment and practical wisdom to navigate your walk with Christ.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

