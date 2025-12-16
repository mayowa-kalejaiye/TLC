'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Globe, Video, Users, BookOpen, ArrowRight } from 'lucide-react'
import { useLanguage } from '@/components/providers/LanguageProvider'

export default function GlobalFamily() {
  const { messages } = useLanguage()
  const global = messages.home.globalFamily
  const journeyIcons = [Video, Users, BookOpen]
  const journeyStyles = [
    {
      container:
        'bg-gradient-to-br from-tlcc-gold/20 to-transparent backdrop-blur-sm rounded-2xl p-8 border-2 border-tlcc-gold/40 hover:border-tlcc-gold transition-all h-full',
      iconBg: 'bg-tlcc-gold',
      link: 'text-tlcc-gold hover:text-tlcc-gold-light',
    },
    {
      container:
        'bg-gradient-to-br from-tlcc-orange/20 to-transparent backdrop-blur-sm rounded-2xl p-8 border-2 border-tlcc-orange/40 hover:border-tlcc-orange transition-all h-full',
      iconBg: 'bg-tlcc-orange',
      link: 'text-tlcc-orange hover:text-tlcc-orange-light',
    },
    {
      container:
        'bg-gradient-to-br from-tlcc-gold/20 to-transparent backdrop-blur-sm rounded-2xl p-8 border-2 border-tlcc-gold/40 hover:border-tlcc-gold transition-all h-full',
      iconBg: 'bg-tlcc-gold',
      link: 'text-tlcc-gold hover:text-tlcc-gold-light',
    },
  ]

  return (
    <section className="relative py-20 px-4 bg-transparent text-white overflow-hidden z-10">
      {/* Semi-transparent overlay for readability */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-tlcc-gold rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-tlcc-orange rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Floating Dots Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-tlcc-gold rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-tlcc-orange rounded-full animate-ping delay-500"></div>
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-tlcc-gold rounded-full animate-ping delay-1000"></div>
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-tlcc-orange rounded-full animate-ping delay-1500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Part 1: The Headline */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-tlcc-gold/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6 border border-tlcc-gold/30">
            <Globe className="h-5 w-5 text-tlcc-gold animate-spin-slow" />
            <span className="text-tlcc-gold font-bold text-sm tracking-widest uppercase">{global.badge}</span>
          </div>
          
          <h2 className="font-anton text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-4 uppercase leading-none">
            <span className="text-white">{global.headline.line1}</span><br />
            <span className="text-tlcc-orange">{global.headline.line2}</span>
          </h2>
          
          <p className="text-tlcc-gold text-xl md:text-2xl font-semibold tracking-wide">
            {global.headline.tag}
          </p>
        </div>        

        {/* Stats Grid - Visual Impact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-2xl mx-auto">
          {global.stats.map((stat, index) => (
            <div
              key={stat.label}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all"
            >
              <div className={`text-4xl md:text-5xl font-anton ${index % 2 === 0 ? 'text-tlcc-gold' : 'text-tlcc-orange'} mb-2`}>
                {stat.value}
              </div>
              <p className="text-sm text-white/80 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Part 3: The Descriptive Section with Visual Map */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Map Visualization */}
          <div className="relative">
            <div className="bg-gradient-to-br from-tlcc-gold/20 to-tlcc-orange/20 backdrop-blur-md rounded-3xl overflow-hidden border-2 border-tlcc-gold/30">
              <div className="p-8 pb-0">
                <h3 className="font-anton text-2xl md:text-3xl text-tlcc-gold mb-6 uppercase">{global.map.title}</h3>
              </div>
              
              {/* Image Placeholder - Replace with your actual image */}
              <div className="relative w-full h-64 md:h-80 mb-6">
                <Image src="/images/reachh.jpg" alt={global.map.imageAlt} fill className="object-cover" />
              </div>

              {/* Connection Points */}
              <div className="space-y-3 p-8 pt-0">
                {global.map.points.map((point, index) => (
                  <div key={point} className="flex items-center space-x-3 bg-black/30 rounded-lg p-3">
                    <div
                      className={`w-3 h-3 rounded-full animate-pulse ${index % 2 === 0 ? 'bg-tlcc-gold' : 'bg-tlcc-orange'}`}
                    ></div>
                    <span className="text-sm text-white">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Descriptive Text */}
          <div className="space-y-6">
            <h3 className="font-anton text-3xl md:text-4xl text-white uppercase">
              {global.description.titleLine1}<br />
              <span className="text-tlcc-gold">{global.description.titleLine2}</span>
            </h3>
            
            {global.description.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-lg text-white/90 leading-relaxed">
                {paragraph}
              </p>
            ))}

            <div className="bg-tlcc-gold/10 backdrop-blur-sm border-l-4 border-tlcc-gold rounded-r-xl p-6">
              <p className="text-white italic text-lg">{global.description.quote}</p>
            </div>

            {/* Impact Highlights */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {global.description.highlights.map((highlight, index) => (
                <div key={highlight.label} className="text-center p-4 bg-white/5 rounded-xl">
                  <p className={`text-2xl font-anton ${index % 2 === 0 ? 'text-tlcc-gold' : 'text-tlcc-orange'} mb-1`}>
                    {highlight.value}
                  </p>
                  <p className="text-xs text-white/70 uppercase tracking-wider">{highlight.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* The Experience Journey */}
        <div className="mb-16">
          <h3 className="font-anton text-3xl md:text-4xl text-center text-white mb-12 uppercase">
            {global.journeyHeading}
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {global.journeyItems.map((item, index) => {
              const Icon = journeyIcons[index % journeyIcons.length]
              const style = journeyStyles[index % journeyStyles.length]
              return (
                <div key={item.title} className="relative group">
                  <div className={style.container}>
                    <div
                      className={`w-16 h-16 ${style.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="font-anton text-2xl text-white mb-4 uppercase">{item.title}</h4>
                    <p className="text-white/80 leading-relaxed mb-4">{item.description}</p>
                    <Link
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className={`${style.link} font-semibold inline-flex items-center`}
                    >
                      {item.ctaLabel} <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Part 4: Call to Action - The Grand Finale */}
        <div className="relative">
          <div className="bg-gradient-to-r from-tlcc-gold via-tlcc-orange to-tlcc-gold bg-[length:200%_100%] animate-gradient rounded-3xl p-12 md:p-16 text-center border-4 border-white/20 shadow-2xl">
            <h3 className="font-anton text-4xl md:text-5xl lg:text-6xl text-white mb-6 uppercase leading-tight">
              {global.finalCta.headingLine1}<br />
              <span className="text-tlcc-navy">{global.finalCta.headingLine2}</span>
            </h3>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              {global.finalCta.paragraph}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {global.finalCta.buttons.map((button, index) => (
                <Link
                  key={button.label}
                  href={button.href}
                  target={button.href.startsWith('http') ? '_blank' : undefined}
                  rel={button.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={
                    index === 0
                      ? 'px-12 py-5 bg-white text-tlcc-navy font-anton text-xl uppercase rounded-full hover:bg-tlcc-navy hover:text-white transition-all duration-300 transform hover:scale-105 shadow-xl'
                      : 'px-12 py-5 bg-tlcc-navy text-white font-anton text-xl uppercase rounded-full hover:bg-white hover:text-tlcc-navy transition-all duration-300 transform hover:scale-105 border-4 border-white shadow-xl'
                  }
                >
                  {button.label}
                </Link>
              ))}
            </div>

            <p className="mt-8 text-white/70 text-sm">{global.finalCta.note}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

