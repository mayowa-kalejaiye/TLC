import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, MapPin, Users, Video } from 'lucide-react'
import WebinarRegistrationForm from '@/components/events/WebinarRegistrationForm'

export default function NationTakersWebinarPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-tlcc-navy via-gray-900 to-black">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 to-transparent pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-500/20 border border-blue-500/30 rounded-full px-6 py-2 mb-6">
              <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">
                Career Webinar · Online Event
              </span>
            </div>
            
            <h1 id="nation-takers-webinar" className="text-5xl md:text-7xl font-bold text-white mb-6 scroll-mt-48">
              Nation Takers Career<br />Webinar 1.0
            </h1>
            
            <p className="text-2xl md:text-3xl text-blue-300 font-medium mb-8">
              Building Career Greatness: Scaling Impact,<br />Leadership & Vision in a Changing World
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-gray-300">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-400" />
                <span className="font-medium">Friday, February 7, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-400" />
                <span className="font-medium">10:00 AM WAT</span>
              </div>
              <div className="flex items-center gap-2">
                <Video className="w-5 h-5 text-blue-400" />
                <span className="font-medium">Google Meet (Online)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column - Content */}
            <div className="space-y-8">
              {/* About */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">About This Webinar</h2>
                <p className="text-gray-300 leading-relaxed">
                  This webinar is designed as a <strong className="text-white">mindset-shifting career intervention</strong>, 
                  not a motivational talk. It focuses on how professionals can move from competence to significance 
                  by developing leadership capacity, intentional thinking, and strategic clarity that enables 
                  long-term relevance across industries.
                </p>
              </div>

              {/* What You'll Learn */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">What You'll Gain</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">▸</span>
                    <span>Strategic clarity for navigating career transitions and industry changes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">▸</span>
                    <span>Leadership capacity development beyond your current role</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">▸</span>
                    <span>Intentional thinking frameworks for long-term career impact</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">▸</span>
                    <span>Vision alignment with your purpose and professional goals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">▸</span>
                    <span>Actionable steps to scale your influence in your field</span>
                  </li>
                </ul>
              </div>

              {/* Speakers */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Featured Speakers</h3>
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Users className="w-8 h-8 text-blue-400" />
                    <div>
                      <p className="text-white font-semibold">Two Expert Speakers</p>
                      <p className="text-gray-400 text-sm">Industry leaders sharing proven strategies</p>
                    </div>
                  </div>
                  <div className="border-t border-white/10 pt-4">
                    <p className="text-white font-semibold mb-1">Hosted by:</p>
                    <p className="text-gray-300">Apostle Nelson</p>
                  </div>
                </div>
              </div>

              {/* Who Should Attend */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Who Should Attend</h3>
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
                  <ul className="space-y-2 text-gray-300">
                    <li>✓ Professionals seeking career advancement</li>
                    <li>✓ Leaders looking to scale their impact</li>
                    <li>✓ Anyone ready to move from competence to significance</li>
                    <li>✓ Individuals navigating career transitions</li>
                    <li>✓ Those building intentional career strategies</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column - Registration Form */}
            <div className="md:sticky md:top-32 md:self-start">
              <WebinarRegistrationForm />
              
              <div className="mt-6 bg-white/5 border border-white/10 rounded-xl p-6">
                <h4 className="text-white font-semibold mb-3">After Registration</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Instant confirmation email</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Google Meet link sent to your email</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Event reminder 24 hours before</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Access to post-event resources</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 pb-32">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-tlcc-navy rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Build Career Greatness?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join us February 7th and take the first step toward scaling your impact and vision.
          </p>
          <Link
            href="#register"
            className="inline-block bg-white text-blue-600 font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition"
          >
            Register Now - It's Free
          </Link>
        </div>
      </section>
    </div>
  )
}
