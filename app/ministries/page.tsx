import Link from 'next/link'
import Image from 'next/image'
import { Users, Heart, BookHeart, Megaphone, Briefcase, Calendar, Music, Camera, Coffee, Smartphone, Baby, GraduationCap, ArrowRight, CheckCircle, Sparkles } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ministries | The Light Community',
  description: 'Discover our service units at TLC — TLC Online ministry, TLC Firestorm, TLC Follow up, TLC Prayer team, TLC Media & visibility, and Growth initiatives.',
}

const departments = [
  {
    id: 'tlc-online',
    name: 'TLC Online ministry',
    icon: Smartphone,
    color: 'bg-blue-500',
    gradient: 'from-blue-400 to-indigo-500',
    description: 'Live services, online discipleship and global connection through digital channels.',
    mission: 'To reach and disciple people across the world through excellent online content and intentional follow-up.',
    activities: [
      'Live streaming & production',
      'Online small groups & discipleship',
      'Digital content creation',
    ],
    requirements: ['Willingness to serve on digital teams', 'Basic tech familiarity', 'Consistency & reliability'],
    whatsappLink: '/contact#join-ministry&ministry=TLC Online ministry',
  },
  {
    id: 'firestorm',
    name: 'TLC Firestorm',
    icon: Music,
    color: 'bg-red-500',
    gradient: 'from-red-400 to-orange-500',
    description: 'Choir department — leading worship and choral ministry for services and special events.',
    mission: 'Lead the church in worship through excellent choral ministry and music stewardship.',
    activities: ['Choir rehearsals', 'Worship leading', 'Music arrangement & rehearsals', 'Special event worship sets'],
    requirements: ['Musical/choral ability', 'Availability for rehearsals and services'],
    whatsappLink: '/contact#join-ministry&ministry=TLC Firestorm',
  },
  {
    id: 'follow-up',
    name: 'TLC Follow up',
    icon: BookHeart,
    color: 'bg-green-500',
    gradient: 'from-green-400 to-teal-500',
    description: 'Caring for new contacts and helping people take next spiritual steps.',
    mission: 'Ensure every new contact is followed, discipled and integrated into community.',
    activities: ['New contact follow-up', 'Discipleship pathways', 'Mentoring'],
    requirements: ['Good communication', 'Compassion', 'Follow-through'],
    whatsappLink: '/contact#join-ministry&ministry=TLC Follow up',
  },
  {
    id: 'prayer-team',
    name: 'TLC Prayer team',
    icon: Heart,
    color: 'bg-indigo-500',
    gradient: 'from-indigo-400 to-violet-500',
    description: 'Intercession teams and coordinated prayer initiatives across the church.',
    mission: 'Sustain the ministry through persistent, strategic prayer and intercession.',
    activities: ['Intercessory groups', 'Watch hours', 'Prayer chains'],
    requirements: ['Commitment to prayer', 'Discernment', 'Faithfulness'],
    whatsappLink: '/contact#join-ministry&ministry=TLC Prayer team',
  },
  {
    id: 'media-visibility',
    name: 'TLC Media & visibility',
    icon: Camera,
    color: 'bg-orange-500',
    gradient: 'from-orange-400 to-red-500',
    description: 'Content production, social media management and creative visibility strategies.',
    mission: 'Produce high-quality media that amplifies the gospel and grows our online reach.',
    activities: ['Video production', 'Social media management', 'Graphic design'],
    requirements: ['Creativity', 'Technical skills (audio/video)', 'Consistency'],
    whatsappLink: '/contact#join-ministry&ministry=TLC Media & visibility',
  },
  {
    id: 'growth-initiatives',
    name: 'Growth initiatives',
    icon: Briefcase,
    color: 'bg-purple-500',
    gradient: 'from-purple-400 to-violet-500',
    description: 'Programs focused on discipleship, leadership development and community growth.',
    mission: 'Create pathways for personal, spiritual and organizational growth within TLC.',
    activities: ['Leadership training', 'Discipleship programs', 'Community projects'],
    requirements: ['Willingness to learn', 'Commitment to growth'],
    whatsappLink: '/contact#join-ministry&ministry=Growth initiatives',
  },
]

const otherMinistries = [
  {
    name: 'Media & Technology',
    icon: Camera,
    description: 'Managing live streams, recordings, graphics, and all tech needs',
  },
  {
    name: 'Worship Team',
    icon: Music,
    description: 'Leading the congregation in spirit-filled worship and praise',
  },
  {
    name: 'Hospitality',
    icon: Coffee,
    description: 'Creating a welcoming atmosphere and serving refreshments',
  },
  {
    name: 'Youth Ministry',
    icon: GraduationCap,
    description: 'Raising up the next generation of passionate Christ-followers',
  },
  {
    name: 'Digital Ministry',
    icon: Smartphone,
    description: 'Managing online presence, social media, and digital engagement',
  },
]

export default function MinistriesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/rooted.jpg"
            alt="Ministries"
            fill
            className="object-cover"
            priority
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-tlc-gold rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-tlc-orange rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container-custom relative z-10 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-tlc-gold/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-tlc-gold/30">
            <Sparkles className="h-5 w-5 text-tlc-gold" />
            <span className="text-tlc-gold font-bold text-sm tracking-wider uppercase">
              Find Your Calling
            </span>
          </div>

          <h1 className="font-anton text-5xl md:text-7xl lg:text-8xl mb-8 uppercase leading-tight">
            There's A Place<br />
            <span className="text-tlc-gold">For Everyone</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-12">
            God has called you for such a time as this. Discover your gifts, 
            develop your potential, and deploy your talents for kingdom impact.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#departments"
              className="inline-flex items-center px-8 py-4 bg-tlc-gold hover:bg-tlc-orange text-white font-bold rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              <span>Explore Ministries</span>
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
            <Link
              href="/contact#join-ministry"
              className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white hover:bg-white hover:text-tlc-navy font-bold rounded-full transition-all duration-300 hover:scale-105"
            >
              Join Now
            </Link>
          </div>
        </div>
      </section>

      {/* Why Serve Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-tlc-cream">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-anton text-4xl md:text-5xl text-tlc-navy mb-6 uppercase">
              Why <span className="text-tlc-orange">Serve?</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Serving isn't just about what you do—it's about who you become. 
              When you serve, you grow spiritually, develop your gifts, build meaningful relationships, 
              and make an eternal impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-tlc-cream hover:border-tlc-gold transition-all hover:-translate-y-1">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="font-bold text-xl text-tlc-navy mb-3">Grow Spiritually</h3>
              <p className="text-gray-600">
                Serving stretches your faith and deepens your relationship with God
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-tlc-cream hover:border-tlc-gold transition-all hover:-translate-y-1">
              <div className="text-4xl mb-4">🎁</div>
              <h3 className="font-bold text-xl text-tlc-navy mb-3">Discover Your Gifts</h3>
              <p className="text-gray-600">
                Find and develop the unique abilities God has placed in you
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-tlc-cream hover:border-tlc-gold transition-all hover:-translate-y-1">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="font-bold text-xl text-tlc-navy mb-3">Build Community</h3>
              <p className="text-gray-600">
                Form deep, lasting friendships with like-minded believers
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-tlc-cream hover:border-tlc-gold transition-all hover:-translate-y-1">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-bold text-xl text-tlc-navy mb-3">Make Impact</h3>
              <p className="text-gray-600">
                Be part of something bigger—transforming lives for eternity
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Departments Section */}
      <section id="departments" className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-anton text-4xl md:text-6xl text-tlc-navy mb-6 uppercase">
              Our <span className="text-tlc-orange">Departments</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Each department plays a vital role in fulfilling our mission. 
              Explore the options below and find where you fit best.
            </p>
          </div>

          <div className="space-y-16">
            {departments.map((dept, index) => (
              <div
                key={dept.id}
                id={dept.id}
                className="scroll-mt-24 bg-gradient-to-br from-white to-tlc-cream rounded-3xl shadow-xl overflow-hidden border-2 border-tlc-cream hover:border-tlc-gold transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 p-8 md:p-12">
                  {/* Left: Icon & Name */}
                  <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                    <div className={`inline-flex p-6 bg-gradient-to-br ${dept.gradient} rounded-3xl mb-6 shadow-2xl`}>
                      <dept.icon className="h-16 w-16 text-white" />
                    </div>
                    <h3 className="font-anton text-3xl md:text-4xl text-tlc-navy mb-4 uppercase">
                      {dept.name}
                    </h3>
                    <p className="text-gray-600 text-lg mb-6">
                      {dept.description}
                    </p>
                    <Link
                      href={dept.whatsappLink}
                      className="inline-flex items-center px-6 py-3 bg-tlc-gold hover:bg-tlc-orange text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                    >
                      Join This Ministry
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Link>
                  </div>

                  {/* Right: Details */}
                  <div className="space-y-8">
                    {/* Mission */}
                    <div>
                      <h4 className="font-bold text-xl text-tlc-navy mb-3 flex items-center">
                        <span className="text-2xl mr-2">🎯</span>
                        Our Mission
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {dept.mission}
                      </p>
                    </div>

                    {/* Activities */}
                    <div>
                      <h4 className="font-bold text-xl text-tlc-navy mb-4 flex items-center">
                        <span className="text-2xl mr-2">✨</span>
                        What We Do
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {dept.activities.map((activity) => (
                          <div key={activity} className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-tlc-gold flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{activity}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Requirements */}
                    <div>
                      <h4 className="font-bold text-xl text-tlc-navy mb-4 flex items-center">
                        <span className="text-2xl mr-2">📋</span>
                        What We're Looking For
                      </h4>
                      <div className="space-y-2">
                        {dept.requirements.map((req) => (
                          <div key={req} className="flex items-start gap-2 bg-white rounded-lg p-3 border border-tlc-cream">
                            <span className="text-tlc-gold font-bold flex-shrink-0">•</span>
                            <span className="text-gray-700">{req}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Ministries */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-tlc-cream to-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-anton text-4xl md:text-5xl text-tlc-navy mb-6 uppercase">
              More <span className="text-tlc-orange">Opportunities</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Beyond our main departments, we have specialized ministries 
              that need passionate volunteers just like you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherMinistries.map((ministry) => (
              <div
                key={ministry.name}
                className="bg-white rounded-2xl p-8 shadow-lg border-2 border-tlc-cream hover:border-tlc-gold transition-all hover:-translate-y-2 group"
              >
                <div className="inline-flex p-4 bg-tlc-gold/10 rounded-2xl mb-4 group-hover:bg-tlc-gold/20 transition-all">
                  <ministry.icon className="h-8 w-8 text-tlc-gold" />
                </div>
                <h3 className="font-bold text-xl text-tlc-navy mb-3">
                  {ministry.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {ministry.description}
                </p>
                <Link
                  href="/contact#join-ministry"
                  className="inline-flex items-center text-tlc-gold hover:text-tlc-orange font-semibold text-sm group-hover:translate-x-1 transition-transform"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Join Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-tlc-navy via-tlc-green to-tlc-navy text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-96 h-96 bg-tlc-gold rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-tlc-orange rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-anton text-4xl md:text-6xl mb-6 uppercase">
              Ready to <span className="text-tlc-gold">Get Started?</span>
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Joining a ministry is simple. Follow these steps and we'll help you find your perfect fit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-tlc-gold rounded-full text-2xl font-bold text-white mb-4">
                1
              </div>
              <h3 className="font-bold text-xl mb-3">Choose a Ministry</h3>
              <p className="text-gray-200">
                Browse the options and pray about where God is leading you
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-tlc-gold rounded-full text-2xl font-bold text-white mb-4">
                2
              </div>
              <h3 className="font-bold text-xl mb-3">Contact Us</h3>
              <p className="text-gray-200">
                Fill out the form or send us a message via WhatsApp
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-tlc-gold rounded-full text-2xl font-bold text-white mb-4">
                3
              </div>
              <h3 className="font-bold text-xl mb-3">Start Serving</h3>
              <p className="text-gray-200">
                Meet the team, get trained, and begin making impact
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/contact#join-ministry"
              className="inline-flex items-center px-10 py-5 bg-tlc-gold hover:bg-tlc-orange text-white font-bold rounded-full transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-110 text-lg"
            >
              <span>Join a Ministry Today</span>
              <ArrowRight className="h-6 w-6 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-anton text-4xl md:text-5xl text-tlc-navy mb-6 uppercase">
              Common <span className="text-tlc-orange">Questions</span>
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-tlc-cream rounded-2xl p-6 md:p-8 border-2 border-transparent hover:border-tlc-gold transition-all">
              <h3 className="font-bold text-xl text-tlc-navy mb-3">
                Do I need to be a member to serve?
              </h3>
              <p className="text-gray-600">
                While we welcome everyone to serve, we encourage those interested in leadership positions 
                to complete our membership process. This ensures alignment with our values and vision.
              </p>
            </div>

            <div className="bg-tlc-cream rounded-2xl p-6 md:p-8 border-2 border-transparent hover:border-tlc-gold transition-all">
              <h3 className="font-bold text-xl text-tlc-navy mb-3">
                How much time commitment is required?
              </h3>
              <p className="text-gray-600">
                It varies by department. Some require weekly commitment, others are event-based. 
                We'll work with your schedule to find the best fit for you.
              </p>
            </div>

            <div className="bg-tlc-cream rounded-2xl p-6 md:p-8 border-2 border-transparent hover:border-tlc-gold transition-all">
              <h3 className="font-bold text-xl text-tlc-navy mb-3">
                Can I serve in multiple ministries?
              </h3>
              <p className="text-gray-600">
                Yes! However, we recommend starting with one ministry to avoid burnout. 
                Once you're settled, you can explore serving in additional areas.
              </p>
            </div>

            <div className="bg-tlc-cream rounded-2xl p-6 md:p-8 border-2 border-transparent hover:border-tlc-gold transition-all">
              <h3 className="font-bold text-xl text-tlc-navy mb-3">
                What if I'm not sure where I fit?
              </h3>
              <p className="text-gray-600">
                No problem! Contact our assimilation team and they'll help you discover your gifts 
                and find the perfect place for you to serve.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
