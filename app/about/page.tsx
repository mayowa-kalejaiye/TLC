'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Heart, BookOpen, Users, Globe, Lightbulb, TrendingUp, Video, ArrowRight } from 'lucide-react'

export default function AboutPage() {
  const beliefs = [
    {
      title: 'The Bible',
      content: 'We believe the Bible is the inspired, infallible, and authoritative Word of God. It is our ultimate source of truth and the final authority for all faith and conduct.',
      verse: '2 Timothy 3:16-17'
    },
    {
      title: 'God',
      content: 'We believe in one eternal God, Creator of all things, who exists in three persons: Father, Son, and Holy Spirit. He is perfectly holy, infinitely loving, and all-powerful.',
      verse: ''
    },
    {
      title: 'Jesus Christ',
      content: 'We believe in the deity of our Lord Jesus Christ, in His virgin birth, in His sinless life, in His miracles, in His vicarious and atoning death through His shed blood, in His bodily resurrection, in His ascension to the right hand of the Father, and in His personal return in power and glory.',
      verse: ''
    },
    {
      title: 'Salvation',
      content: 'We believe that for the salvation of lost and sinful humanity, repentance and faith in Jesus Christ alone are essential. Salvation is a gift of God\'s grace, received through faith, not by works.',
      verse: 'Ephesians 2:8-9'
    },
    {
      title: 'The Holy Spirit',
      content: 'We believe in the present ministry of the Holy Spirit, whose indwelling presence empowers the Christian for life and service. He provides spiritual gifts for the edification of the church and convicts the world of sin, righteousness, and judgment.',
      verse: ''
    },
    {
      title: 'The Church',
      content: 'We believe in the universal church as the body of Christ, of which Jesus is the head. The local church is the practical expression of this body, gathered for worship, fellowship, discipleship, and the mission of spreading the Gospel.',
      verse: ''
    }
  ]

  const coreValues = [
    {
      icon: BookOpen,
      title: 'Biblical Authority',
      description: 'We submit to the Word of God as our final authority.'
    },
    {
      icon: Users,
      title: 'Spiritual Family',
      description: 'We are a diverse community committed to loving God and one another.'
    },
    {
      icon: Heart,
      title: 'Heart of Service',
      description: 'We follow Jesus\' example by serving our church and our city with humility.'
    },
    {
      icon: Lightbulb,
      title: 'Generous Living',
      description: 'We give freely of our time, talents, and resources because we serve a generous God.'
    },
    {
      icon: TrendingUp,
      title: 'Spiritual Growth',
      description: 'We are committed to every believer\'s journey toward Christ-like maturity.'
    },
    {
      icon: Globe,
      title: 'Outward Focus',
      description: 'We exist for those not yet here, always seeking to share the love of Christ.'
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative text-white py-20 md:py-32 px-4 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about.JPG"
            alt="About Us"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-anton text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 uppercase leading-tight"
          >
            We Are<br />
            <span className="text-tlc-orange">The Light Community</span>
          </motion.h1>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl md:text-3xl text-tlc-gold font-semibold mb-8"
          >
            A House of Grace, A Home of Love, A Beacon of Hope
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed"
          >
            Welcome to The Light Community, a vibrant and diverse family where everyone is valued, nobody is perfect, and anything is possible through Christ. We are more than just a Sunday gathering; we are a community on a mission to know God and make Him known in our city and to the ends of the earth.
          </motion.p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-anton text-4xl md:text-5xl text-tlc-navy mb-8 text-center uppercase">
            Our Story
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="text-lg md:text-xl mb-6">
              The Light Community began with a small group of believers united by a simple yet powerful vision: to build a church that reflects the joy and life-changing power of the Gospel. From those humble beginnings, God has faithfully grown us into a multi-generational family passionate about His Kingdom.
            </p>
            <p className="text-lg md:text-xl">
              Our story is one of God's relentless grace—a story we are still writing together as we serve our communities, disciple believers, and celebrate every life changed by Jesus. We are committed to raising men and women who will be arsenals for Christ, taking nations and transforming cultures with the message of the Gospel.
            </p>
          </div>
        </div>
      </section>

      {/* What We Believe Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-anton text-4xl md:text-5xl text-tlc-navy mb-12 text-center uppercase">
            What We Believe
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {beliefs.map((belief, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-100 hover:border-tlc-gold transition-colors">
                <h3 className="font-bold text-2xl text-tlc-navy mb-4">
                  {belief.title}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  {belief.content}
                </p>
                {belief.verse && (
                  <p className="text-tlc-orange font-semibold text-sm italic">
                    {belief.verse}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-tlc-orange to-tlc-gold text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="text-center md:text-left">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <span className="font-semibold uppercase text-sm tracking-wider">Our Mission</span>
              </div>
              <h3 className="font-anton text-3xl md:text-4xl mb-6 uppercase">
                What We Do
              </h3>
              <p className="text-xl font-semibold mb-4">
                To lead people into a growing relationship with Jesus Christ.
              </p>
              <p className="text-white/90 text-lg">
                This is our daily focus—helping everyone, from the seeker to the seasoned believer, take their next step toward God.
              </p>
            </div>

            {/* Vision */}
            <div className="text-center md:text-left">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <span className="font-semibold uppercase text-sm tracking-wider">Our Vision</span>
              </div>
              <h3 className="font-anton text-3xl md:text-4xl mb-6 uppercase">
                Where We're Going
              </h3>
              <p className="text-xl font-semibold mb-4">
                To see our city and our world transformed by the hope of the Gospel.
              </p>
              <p className="text-white/90 text-lg">
                We envision thriving communities, restored families, and countless lives redeemed by God's love—souls saved, men trained, nations taken.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-anton text-4xl md:text-5xl text-tlc-navy mb-12 text-center uppercase">
            Our Core Values
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => {
              const IconComponent = value.icon
              return (
                <div key={index} className="text-center p-6">
                  <div className="w-16 h-16 bg-tlc-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-xl text-tlc-navy mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-anton text-4xl md:text-5xl text-tlc-navy mb-12 text-center uppercase">
            Meet Our Lead Pastor
          </h2>

          <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Pastor Photo */}
              <div className="relative h-80 md:h-auto min-h-[400px]">
                <Image
                  src="/images/pastor.JPG"
                  alt="Apostle Nelson Isaiah"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Bio */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="font-anton text-3xl text-tlc-navy mb-2 uppercase">
                  Apostle Nelson Isaiah
                </h3>
                <p className="text-tlc-orange font-semibold mb-6 text-lg">
                  Lead Pastor & Founder
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  With a passion for God's Word and a deep love for people, Apostle Nelson has led The Light Community with visionary leadership grounded in practical Bible teaching. His ministry has been instrumental in fostering a culture of grace, growth, and generosity.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  He is dedicated to raising up disciples and leaders who will impact every sphere of society, training men and women to be arsenals for Christ who will take nations with the Gospel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonies Section */}
      <section id="testimonies" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-anton text-4xl md:text-5xl text-tlc-navy mb-6 text-center uppercase">
            Stories of Transformation
          </h2>
          <p className="text-lg md:text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Real people. Real stories. Real miracles. See how God is moving in the lives of our community members.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Testimony Card 1 - Oghale */}
            <div className="bg-tlc-cream rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="text-tlc-gold text-4xl mb-4">&quot;</div>
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                &quot;The Light Community is what I call a &apos;family.&apos; It&apos;s a place where you grow and you never get tired of growing. Before I joined in August 2022, I was comfortable in my own shell, not used to expressing myself fully. But when I came to this family, I met with the Senior Pastor and other members, and I&apos;ve been able to express myself fully. I&apos;ve connected with people I never thought I would meet and realized my full potential in Christ. TLC has given me a new lens of seeing life—a new definition of life.&quot;
              </p>
              <div className="border-t-2 border-tlc-gold pt-4">
                <p className="font-bold text-tlc-navy">Oghale</p>
                <p className="text-sm text-gray-600">Member since August 2022</p>
              </div>
            </div>

            {/* Testimony Card 2 - Isaac */}
            <div className="bg-tlc-cream rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="text-tlc-gold text-4xl mb-4">&quot;</div>
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                &quot;I joined The Light Community on October 1st, 2022. The first day Papa called me, we spent about two hours talking, and I was free enough to tell someone about my past without feeling judged. I got four prophetic words in one week! I&apos;d never knew God was this intentional about me. I&apos;ve grown so much. A few years from now, I can see myself in a crusade, changing lives just like mine was changed. I haven&apos;t found a better family than The Light Community.&quot;
              </p>
              <div className="border-t-2 border-tlc-gold pt-4">
                <p className="font-bold text-tlc-navy">Isaac</p>
                <p className="text-sm text-gray-600">Member since October 2022</p>
              </div>
            </div>

            {/* Testimony Card 3 - Susan */}
            <div className="bg-tlc-cream rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="text-tlc-gold text-4xl mb-4">&quot;</div>
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                &quot;In February, while praying with Apostle Nelson, he prophesied over my life and confirmed the ministry God has placed in my hands. From then till now, God has been opening doors—leading me to orphanages, providing resources, and showing His faithfulness step by step. I thank God for fulfilling His word and for Apostle&apos;s covering over my life, which has been a key part of this journey. His testimony is a reminder that when God sends you, He also provides and brings the vision to pass.&quot;
              </p>
              <div className="border-t-2 border-tlc-gold pt-4">
                <p className="font-bold text-tlc-navy">Susan</p>
                <p className="text-sm text-gray-600">Member</p>
              </div>
            </div>

            {/* Testimony Card 4 - Apostle Nelson (Spans full width on larger screens) */}
            <div className="bg-tlc-cream rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow md:col-span-2 lg:col-span-3">
              <div className="text-tlc-gold text-4xl mb-4">&quot;</div>
              <p className="text-gray-700 leading-relaxed mb-6 italic max-w-4xl mx-auto">
                &quot;I would have never thought God was going to use us to where He was going to use us. In May 2022, the Lord told me to hold a meeting. I obeyed immediately, and I saw people pray with fervor for six hours. I&apos;ve seen people who knew nothing about the gospel turn into vocal evangelists. People who didn&apos;t know they could hear God have become prophets. People who never knew they could teach have become eloquent teachers. God has turned mere kids into His ministers. That&apos;s the story of The Light Community. That&apos;s the story of my family.&quot;
              </p>
              <div className="border-t-2 border-tlc-gold pt-4 max-w-4xl mx-auto">
                <p className="font-bold text-tlc-navy">Apostle Nelson Isaiah</p>
                <p className="text-sm text-gray-600">Lead Pastor & Founder</p>
              </div>
            </div>

            {/* Testimony Card 5 - Joy (Full Documentary - Spans wider on desktop) */}
            <div className="bg-tlc-cream rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow md:col-span-2 lg:col-span-3">
              <div className="text-tlc-gold text-4xl mb-4">&quot;</div>
              <h4 className="text-lg font-bold text-tlc-navy mb-4">A Short Documentary</h4>
              <div className="text-gray-700 leading-relaxed mb-6 italic space-y-3 max-w-4xl mx-auto">
                <p>&quot;Hello there, my name is Joy.</p>
                <p>Before I joined The Light Community, I honestly didn&apos;t know who I was. I was a woman carrying so much baggage but never knowing when to stop or let go — only piling more. I didn&apos;t really know God, and because of that, I didn&apos;t know myself or what I truly wanted.</p>
                <p>Then came Tarry Zeo in April 2024 — thank God for using Susan to invite me. I had never prayed for one hour, not to mention eight hours straight! My body was weak, but my spirit was alive and awakened.</p>
                <p>But after some time, I drifted until my ex broke up with me, Apostle Nelson called that day. The first words he said were, &apos;God loves you.&apos; And that was exactly what I needed to hear. I broke down in tears.</p>
                <p>That call marked the beginning of my transformation. God started using Apostle Nelson to water my heart — he sent me sermons daily, and I sent back my reviews and notes. For the first time, I was consistent and determined to know God.</p>
                <p>Gradually, my heart, mind, and space became lighter — like a clog had been cleared away. I began to hear God clearly, and He started leading me to do things I normally wouldn&apos;t.</p>
                <p>Fast forward to January 2025, I grew more serious with God. He led me into a season of consecration. I started watching sermons daily, praying more, and allowing God to help me. There were struggles, but I knew I wasn&apos;t alone anymore.</p>
                <p>In March 2025, Apostle Nelson called and asked if I wanted to join The Rooted Clan. I said yes immediately because I desired a community where I could grow and connect. That decision blessed me beyond words. I met amazing people.</p>
                <p>Since then, there has been tremendous growth — in my personal walk with God and my understanding of who I am in Christ.</p>
                <p>I&apos;m lighter, happier, and stronger. I handle situations better — all glory to God. I used to think I couldn&apos;t be used by Him, but this truth set me free: &apos;God doesn&apos;t call the qualified; He qualifies the unqualified who he has called.&apos;</p>
                <p>He called me, and I answered. He healed me from the pain I carried, lifted my burdens, and gave me peace — the kind that surpasses all understanding. God loves me deeply and is very intentional with me.</p>
                <p>Thank you, Apostle Nelson, for not giving up on me — for nurturing, disciplining, and helping me grow. You saw me through the lens of God — who He says I am — and that made all the difference. God bless you, sir.</p>
                <p>Thank you to The Light Community — filled with powerful, beautiful souls. An army God is raising, and I&apos;m honored to be among you. I can&apos;t just watch when God needs men to go forth. And it&apos;s amazing here.&quot;</p>
              </div>
              <div className="border-t-2 border-tlc-gold pt-4">
                <p className="font-bold text-tlc-navy">Joy</p>
                <p className="text-sm text-gray-600">Member</p>
              </div>
            </div>
          </div>

          {/* Share Your Testimony CTA */}
          <div className="bg-gradient-to-r from-tlc-navy to-tlc-gold text-white rounded-2xl p-8 md:p-12 text-center">
            <h3 className="font-anton text-3xl md:text-4xl mb-4 uppercase">
              Share Your Testimony
            </h3>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Has God done something amazing in your life? We&apos;d love to hear your story! Your testimony could be the encouragement someone else needs today.
            </p>
            <Link
              href="/contact#testimony"
              className="inline-block px-10 py-4 bg-white text-tlc-navy hover:bg-tlc-cream font-bold rounded-full transition-all duration-300 uppercase tracking-wide text-sm"
            >
              Share Your Story
            </Link>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section id="services" className="relative py-20 px-4 text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/join.JPG"
            alt="Join Us"
            fill
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="font-anton text-4xl md:text-5xl mb-6 uppercase">
            Join Us This Week
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Experience a warm welcome, engaging atmosphere, and a relevant message from the Bible. We can't wait to meet you!
          </p>

          <div className="space-y-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <p className="text-tlc-gold font-semibold mb-2">Weekly Services</p>
              <p className="text-lg">Thursday & Saturday | 8:00 PM</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <p className="text-tlc-gold font-semibold mb-2">Prayer Meetings</p>
              <p className="text-lg">Monday-Wednesday | 9:00 PM (Rooted Prayers)</p>
              <p className="text-lg">Friday | 9:00 PM (Watch Hour Prayers)</p>
            </div>
          </div>

          <Link
            href="https://youtube.com/@TheLightCommunity"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 px-10 py-4 bg-tlc-gold hover:bg-tlc-orange text-white font-bold rounded-full transition-all duration-300 uppercase tracking-wide text-sm"
          >
            Watch Live on YouTube
          </Link>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-anton text-4xl md:text-5xl text-tlc-navy mb-6 uppercase">
            Your Story Is Next
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-12 leading-relaxed">
            We believe that God has a purpose and a plan for your life. You have a place here. Whether you are exploring faith for the first time or looking for a church to call home, we invite you to join our family.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/map"
              className="px-10 py-4 bg-tlc-navy hover:bg-tlc-orange text-white font-bold rounded-full transition-all duration-300 uppercase tracking-wide text-sm"
            >
              Plan Your Visit
            </Link>
            <Link
              href="/sermons"
              className="px-10 py-4 bg-transparent border-2 border-tlc-navy hover:bg-tlc-navy hover:text-white text-tlc-navy font-bold rounded-full transition-all duration-300 uppercase tracking-wide text-sm"
            >
              Watch A Sermon
            </Link>
            <Link
              href="/contact"
              className="px-10 py-4 bg-transparent border-2 border-tlc-navy hover:bg-tlc-navy hover:text-white text-tlc-navy font-bold rounded-full transition-all duration-300 uppercase tracking-wide text-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
