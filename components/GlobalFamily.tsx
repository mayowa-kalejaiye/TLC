import Link from 'next/link'
import Image from 'next/image'
import { Globe, Video, Users, BookOpen, ArrowRight } from 'lucide-react'

export default function GlobalFamily() {
  return (
    <section className="relative py-20 px-4 bg-transparent text-white overflow-hidden z-10">
      {/* Semi-transparent overlay for readability */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-tlc-gold rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-tlc-orange rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Floating Dots Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-tlc-gold rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-tlc-orange rounded-full animate-ping delay-500"></div>
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-tlc-gold rounded-full animate-ping delay-1000"></div>
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-tlc-orange rounded-full animate-ping delay-1500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Part 1: The Headline */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-tlc-gold/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6 border border-tlc-gold/30">
            <Globe className="h-5 w-5 text-tlc-gold animate-spin-slow" />
            <span className="text-tlc-gold font-bold text-sm tracking-widest uppercase">Our Reach</span>
          </div>
          
          <h2 className="font-anton text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-4 uppercase leading-none">
            <span className="text-white">One Church.</span><br />
            <span className="text-tlc-orange">Many Nations.</span>
          </h2>
          
          <p className="text-tlc-gold text-xl md:text-2xl font-semibold tracking-wide">
            A LOCAL COMMUNITY WITH A GLOBAL HEART
          </p>
        </div>        

        {/* Stats Grid - Visual Impact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all">
            <div className="text-4xl md:text-5xl font-anton text-tlc-gold mb-2">24/7</div>
            <p className="text-sm text-white/80 uppercase tracking-wider">Online Access</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all">
            <div className="text-4xl md:text-5xl font-anton text-tlc-orange mb-2">∞</div>
            <p className="text-sm text-white/80 uppercase tracking-wider">God&apos;s Faithfulness</p>
          </div>
        </div>

        {/* Part 3: The Descriptive Section with Visual Map */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Map Visualization */}
          <div className="relative">
            <div className="bg-gradient-to-br from-tlc-gold/20 to-tlc-orange/20 backdrop-blur-md rounded-3xl overflow-hidden border-2 border-tlc-gold/30">
              <div className="p-8 pb-0">
                <h3 className="font-anton text-2xl md:text-3xl text-tlc-gold mb-6 uppercase">Our Global Footprint</h3>
              </div>
              
              {/* Image Placeholder - Replace with your actual image */}
              <div className="relative w-full h-64 md:h-80 mb-6">
                <Image
                  src="/images/reachh.jpg"
                  alt="The Light Community Global Reach"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Connection Points */}
              <div className="space-y-3 p-8 pt-0">
                <div className="flex items-center space-x-3 bg-black/30 rounded-lg p-3">
                  <div className="w-3 h-3 bg-tlc-gold rounded-full animate-pulse"></div>
                  <span className="text-sm text-white">Physical Hub: Lagos, Nigeria</span>
                </div>
                <div className="flex items-center space-x-3 bg-black/30 rounded-lg p-3">
                  <div className="w-3 h-3 bg-tlc-orange rounded-full animate-pulse"></div>
                  <span className="text-sm text-white">Digital Reach: The Light Community</span>
                </div>
                <div className="flex items-center space-x-3 bg-black/30 rounded-lg p-3">
                  <div className="w-3 h-3 bg-tlc-gold rounded-full animate-pulse"></div>
                  <span className="text-sm text-white">Vision: Reaching Nations with the Gospel</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Descriptive Text */}
          <div className="space-y-6">
            <h3 className="font-anton text-3xl md:text-4xl text-white uppercase">
              One Family.<br />
              <span className="text-tlc-gold">Infinite Possibilities.</span>
            </h3>
            
            <p className="text-lg text-white/90 leading-relaxed">
              Though we gather in <span className="text-tlc-gold font-semibold">one place</span>, our heart beats for <span className="text-tlc-orange font-semibold">the world</span>. We are a single, vibrant family at The Light Community, but our mission extends across the globe.
            </p>
            
            <p className="text-lg text-white/90 leading-relaxed">
              Through our <span className="text-tlc-gold font-semibold">online services</span>, partnerships, and a vision to plant life-giving churches, we are part of God&apos;s work right here in Lagos and to the <span className="text-tlc-orange font-semibold">ends of the earth</span>.
            </p>

            <div className="bg-tlc-gold/10 backdrop-blur-sm border-l-4 border-tlc-gold rounded-r-xl p-6">
              <p className="text-white italic text-lg">
                &ldquo;Young people <span className="text-tlc-gold font-bold">primed to take the nations</span>.&rdquo;
              </p>
            </div>

            {/* Impact Highlights */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="text-center p-4 bg-white/5 rounded-xl">
                <p className="text-2xl font-anton text-tlc-gold mb-1">Thursday & Saturday</p>
                <p className="text-xs text-white/70 uppercase tracking-wider">Live Online Services</p>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl">
                <p className="text-2xl font-anton text-tlc-orange mb-1">First Friday</p>
                <p className="text-xs text-white/70 uppercase tracking-wider">Rooted (Physical)</p>
              </div>
            </div>
          </div>
        </div>

        {/* The Experience Journey */}
        <div className="mb-16">
          <h3 className="font-anton text-3xl md:text-4xl text-center text-white mb-12 uppercase">
            <span className="text-tlc-gold">How We</span> Connect The World
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Online */}
            <div className="relative group">
              <div className="bg-gradient-to-br from-tlc-gold/20 to-transparent backdrop-blur-sm rounded-2xl p-8 border-2 border-tlc-gold/40 hover:border-tlc-gold transition-all h-full">
                <div className="w-16 h-16 bg-tlc-gold rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Video className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-anton text-2xl text-white mb-4 uppercase">Online Services</h4>
                <p className="text-white/80 leading-relaxed mb-4">
                  Join our community every Thursday & Saturday at 8:00 PM. Experience worship, teaching, and fellowship from wherever you are.
                </p>
                <Link 
                  href="https://youtube.com/@TheLightCommunity"
                  target="_blank"
                  className="text-tlc-gold hover:text-tlc-gold-light font-semibold inline-flex items-center"
                >
                  Watch Live <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
            </div>

            {/* Physical */}
            <div className="relative group">
              <div className="bg-gradient-to-br from-tlc-orange/20 to-transparent backdrop-blur-sm rounded-2xl p-8 border-2 border-tlc-orange/40 hover:border-tlc-orange transition-all h-full">
                <div className="w-16 h-16 bg-tlc-orange rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-anton text-2xl text-white mb-4 uppercase">Rooted Gatherings</h4>
                <p className="text-white/80 leading-relaxed mb-4">
                  Experience the warmth of in-person fellowship every first Friday at The Light House, Mangoro. Where digital meets physical.
                </p>
                <Link 
                  href="/map"
                  className="text-tlc-orange hover:text-tlc-orange-light font-semibold inline-flex items-center"
                >
                  Find Us <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
            </div>

            {/* Training */}
            <div className="relative group">
              <div className="bg-gradient-to-br from-tlc-gold/20 to-transparent backdrop-blur-sm rounded-2xl p-8 border-2 border-tlc-gold/40 hover:border-tlc-gold transition-all h-full">
                <div className="w-16 h-16 bg-tlc-gold rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-anton text-2xl text-white mb-4 uppercase">Discipleship</h4>
                <p className="text-white/80 leading-relaxed mb-4">
                  From seekers to servants, from believers to leaders. We&apos;re raising arsenals for Christ who will take nations with the Gospel.
                </p>
                <Link 
                  href="/ministries"
                  className="text-tlc-gold hover:text-tlc-gold-light font-semibold inline-flex items-center"
                >
                  Get Involved <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Part 4: Call to Action - The Grand Finale */}
        <div className="relative">
          <div className="bg-gradient-to-r from-tlc-gold via-tlc-orange to-tlc-gold bg-[length:200%_100%] animate-gradient rounded-3xl p-12 md:p-16 text-center border-4 border-white/20 shadow-2xl">
            <h3 className="font-anton text-4xl md:text-5xl lg:text-6xl text-white mb-6 uppercase leading-tight">
              Your Story<br />
              <span className="text-tlc-navy">Starts Here</span>
            </h3>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Whether you&apos;re across the street or across the ocean, you have a place in this family.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="https://youtube.com/@TheLightCommunity"
                target="_blank"
                rel="noopener noreferrer"
                className="px-12 py-5 bg-white text-tlc-navy font-anton text-xl uppercase rounded-full hover:bg-tlc-navy hover:text-white transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Join Us Online
              </Link>
              
              <Link
                href="/map"
                className="px-12 py-5 bg-tlc-navy text-white font-anton text-xl uppercase rounded-full hover:bg-white hover:text-tlc-navy transition-all duration-300 transform hover:scale-105 border-4 border-white shadow-xl"
              >
                Visit In Person
              </Link>
            </div>

            <p className="mt-8 text-white/70 text-sm">
              🌍 Building community <span className="text-white font-bold">one soul at a time</span> • Impacting lives <span className="text-white font-bold">with the Gospel</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
