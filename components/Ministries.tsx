import Link from 'next/link'
import { Users, Heart, Music, Briefcase, Camera, BookHeart, ArrowRight } from 'lucide-react'

const ministries = [
  {
    name: 'TLC Online ministry',
    icon: Users,
    description: 'Connecting people worldwide through live services, digital discipleship and online community.',
    color: 'bg-blue-500',
  },
  {
    name: 'TLC Firestorm',
    icon: Music,
    description: 'Choir department — leading worship and choral ministry for services and events.',
    color: 'bg-red-500',
  },
  {
    name: 'TLC Follow up',
    icon: BookHeart,
    description: 'Leading follow-up processes for new contacts and helping people take next steps in faith.',
    color: 'bg-green-500',
  },
  {
    name: 'TLC Prayer team',
    icon: Heart,
    description: 'Intercession, watch groups and coordinated prayer support across the church.',
    color: 'bg-indigo-500',
  },
  {
    name: 'TLC Media & visibility',
    icon: Camera,
    description: 'Media production, social channels and visibility strategy for the church.',
    color: 'bg-orange-500',
  },
  {
    name: 'Growth initiatives',
    icon: Briefcase,
    description: 'Discipleship programs, leadership development and community growth projects.',
    color: 'bg-purple-500',
  },
]

export default function Ministries() {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-white to-tlc-cream z-20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-tlc-gold/10 px-6 py-2 rounded-full mb-4">
            <Users className="h-4 w-4 text-tlc-gold" />
            <span className="text-tlc-gold font-bold text-sm tracking-wider uppercase">Join A Ministry</span>
          </div>
          <h2 className="font-anton text-4xl md:text-5xl lg:text-6xl text-tlc-navy mb-6 uppercase">
            There's a Place<br />
            <span className="text-tlc-orange">For Everyone</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover your calling and use your gifts to serve. Whether you&apos;re passionate about events, 
            teaching, caring for others, reaching the lost, or organizing behind the scenes — 
            <span className="text-tlc-navy font-semibold"> we have a place for you to thrive</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {ministries.map((ministry, index) => (
            <div
              key={ministry.name}
              className="group bg-white rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-2 border-transparent hover:border-tlc-gold cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex p-4 ${ministry.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                <ministry.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="font-bold text-2xl text-tlc-navy mb-3 group-hover:text-tlc-gold transition-colors">
                {ministry.name}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {ministry.description}
              </p>
              <div className="flex items-center text-tlc-gold opacity-0 group-hover:opacity-100 transition-opacity font-semibold text-sm">
                Learn More <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}

          {/* CTA Card */}
          <div className="bg-gradient-to-br from-tlc-gold via-tlc-orange to-tlc-gold bg-[length:200%_200%] animate-gradient rounded-2xl p-8 flex flex-col justify-center items-center text-center text-white shadow-2xl border-4 border-white/50">
            <div className="text-5xl mb-4 animate-bounce">🙌</div>
            <h3 className="font-anton text-2xl md:text-3xl mb-3 uppercase">Ready to Serve?</h3>
            <p className="text-white/90 mb-6 leading-relaxed">
              Join a ministry and make an eternal impact in God&apos;s kingdom
            </p>
            <Link
              href="/ministries"
              className="inline-flex items-center px-8 py-3 bg-white text-tlc-navy font-bold rounded-full hover:bg-tlc-navy hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg uppercase text-sm tracking-wider"
            >
              Get Started
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-lg border-2 border-tlc-cream">
          <p className="text-gray-600 mb-4 text-lg">
            Want to learn more about our ministries and how you can serve?
          </p>
          <Link
            href="/ministries"
            className="inline-flex items-center text-tlc-gold hover:text-tlc-orange font-bold transition-colors text-lg group"
          >
            <span>Explore All Ministries</span>
            <ArrowRight className="h-6 w-6 ml-2 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
