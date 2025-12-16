'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Heart, BookOpen, Users, Globe, Lightbulb, TrendingUp } from 'lucide-react'
import { useLanguage } from '@/components/providers/LanguageProvider'

const coreValueIcons = [BookOpen, Users, Heart, Lightbulb, TrendingUp, Globe]

export default function AboutPage() {
  const { messages } = useLanguage()
  const about = messages.about

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
            {about.hero.headingLead}<br />
            <span className="text-tlcc-orange">{about.hero.headingHighlight}</span>
          </motion.h1>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl md:text-3xl text-tlcc-gold font-semibold mb-8"
          >
            {about.hero.subtitle}
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed"
          >
            {about.hero.description}
          </motion.p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-anton text-4xl md:text-5xl text-tlcc-navy mb-8 text-center uppercase">
            {about.story.heading}
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            {about.story.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-lg md:text-xl mb-6 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* What We Believe Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-anton text-4xl md:text-5xl text-tlcc-navy mb-12 text-center uppercase">
            {about.beliefs.heading}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {about.beliefs.items.map((belief) => (
              <div key={belief.title} className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-100 hover:border-tlcc-gold transition-colors">
                <h3 className="font-bold text-2xl text-tlcc-navy mb-4">
                  {belief.title}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  {belief.content}
                </p>
                {belief.verse && (
                  <p className="text-tlcc-orange font-semibold text-sm italic">
                    {belief.verse}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
          <section className="relative py-20 px-4 text-white">
            {/* Background image for 'What We Do' (hero-fallback) */}
            <div className="absolute inset-0 z-0">
                <Image
                  src="/images/hero-fallback.jpg"
                  alt="What we do background"
                  fill
                  className="object-cover object-center md:object-top"
                  priority
                />
              <div className="absolute inset-0 bg-black/55" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="text-center md:text-left">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <span className="font-semibold uppercase text-sm tracking-wider">{about.missionVision.missionLabel}</span>
              </div>
              <h3 className="font-anton text-3xl md:text-4xl mb-6 uppercase">
                {about.missionVision.missionHeading}
              </h3>
              <p className="text-xl font-semibold mb-4">
                {about.missionVision.missionStatement}
              </p>
              <p className="text-white/90 text-lg">
                {about.missionVision.missionDescription}
              </p>
            </div>

            {/* Vision */}
            <div className="text-center md:text-left">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <span className="font-semibold uppercase text-sm tracking-wider">{about.missionVision.visionLabel}</span>
              </div>
              <h3 className="font-anton text-3xl md:text-4xl mb-6 uppercase">
                {about.missionVision.visionHeading}
              </h3>
              <p className="text-xl font-semibold mb-4">
                {about.missionVision.visionStatement}
              </p>
              <p className="text-white/90 text-lg">
                {about.missionVision.visionDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-anton text-4xl md:text-5xl text-tlcc-navy mb-12 text-center uppercase">
            {about.coreValues.heading}
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {about.coreValues.items.map((value, index) => {
              const IconComponent = coreValueIcons[index % coreValueIcons.length]
              return (
                <div key={value.title} className="text-center p-6">
                  <div className="w-16 h-16 bg-tlcc-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-xl text-tlcc-navy mb-3">
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
          <h2 className="font-anton text-4xl md:text-5xl text-tlcc-navy mb-12 text-center uppercase">
            {about.leadership.heading}
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
                <h3 className="font-anton text-3xl text-tlcc-navy mb-2 uppercase">
                  {about.leadership.name}
                </h3>
                <p className="text-tlcc-orange font-semibold mb-6 text-lg">
                  {about.leadership.role}
                </p>
                {about.leadership.paragraphs.map((paragraph, index) => (
                  <p key={paragraph} className={`text-gray-700 leading-relaxed ${index === 0 ? 'mb-4' : ''}`}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonies Section */}
      <section id="testimonies" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-anton text-4xl md:text-5xl text-tlcc-navy mb-6 text-center uppercase">
            {about.testimonies.heading}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            {about.testimonies.intro}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {about.testimonies.cards.map((card) => (
              <div
                key={`${card.author}-${card.meta}`}
                className={`bg-tlcc-cream rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow ${
                  card.fullWidth ? 'md:col-span-2 lg:col-span-3' : ''
                }`}
              >
                <div className="text-tlcc-gold text-4xl mb-4">&quot;</div>
                {card.title && <h4 className="text-lg font-bold text-tlcc-navy mb-4">{card.title}</h4>}
                {card.quote && (
                  <p className="text-gray-700 leading-relaxed mb-6 italic max-w-4xl mx-auto">
                    {card.quote}
                  </p>
                )}
                {card.paragraphs && (
                  <div className="text-gray-700 leading-relaxed mb-6 italic space-y-3 max-w-4xl mx-auto">
                    {card.paragraphs.map((paragraph, index) => (
                      <p key={`${card.author}-${index}`}>{paragraph}</p>
                    ))}
                  </div>
                )}
                <div className={`border-t-2 border-tlcc-gold pt-4 ${card.fullWidth ? 'max-w-4xl mx-auto' : ''}`}>
                  <p className="font-bold text-tlcc-navy">{card.author}</p>
                  <p className="text-sm text-gray-600">{card.meta}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Share Your Testimony CTA */}
          <div className="bg-gradient-to-r from-tlcc-navy to-tlcc-gold text-white rounded-2xl p-8 md:p-12 text-center">
            <h3 className="font-anton text-3xl md:text-4xl mb-4 uppercase">{about.testimonies.share.heading}</h3>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              {about.testimonies.share.description}
            </p>
            <Link
              href="/contact#testimony"
              className="inline-block px-10 py-4 bg-white text-tlcc-navy hover:bg-tlcc-cream font-bold rounded-full transition-all duration-300 uppercase tracking-wide text-sm"
            >
              {about.testimonies.share.cta}
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
            {about.join.heading}
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            {about.join.description}
          </p>

          <div className="space-y-4">
            {about.join.cards.map((card) => (
              <div key={card.title} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <p className="text-tlcc-gold font-semibold mb-2">{card.title}</p>
                {card.details.map((detail) => (
                  <p key={detail} className="text-lg">
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>

          <Link
            href="https://youtube.com/@TheLightCommunity"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 px-10 py-4 bg-tlcc-gold hover:bg-tlcc-orange text-white font-bold rounded-full transition-all duration-300 uppercase tracking-wide text-sm"
          >
            {about.join.watchCta}
          </Link>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-anton text-4xl md:text-5xl text-tlcc-navy mb-6 uppercase">
            {about.finalCta.heading}
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-12 leading-relaxed">
            {about.finalCta.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {about.finalCta.buttons.map((button, index) => {
              const isPrimary = index === 0
              return (
              <Link
                key={button.href}
                href={button.href}
                  className={`px-10 py-4 font-bold rounded-full transition-all duration-300 uppercase tracking-wide text-sm ${
                    isPrimary
                      ? 'bg-tlcc-navy hover:bg-tlcc-orange text-white'
                      : 'bg-transparent border-2 border-tlcc-navy hover:bg-tlcc-navy hover:text-white text-tlcc-navy'
                  }`}
              >
                {button.label}
              </Link>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}

// Page-level metadata removed: this page is a client component ('use client')
// and exporting `metadata` is not allowed. Server-level or layout metadata
// in `app/layout.tsx` will provide site-wide defaults.

