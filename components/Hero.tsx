'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Play, BookOpen, Circle } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false)

  useEffect(() => {
    // Preload video after component mounts
    const timer = setTimeout(() => {
      setVideoLoaded(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Fixed Background Video with Overlay - Stays in place while content scrolls */}
      <div className="fixed inset-0 z-0">
        {/* Fallback Image - Shows while video loads */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-fallback.jpg"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* YouTube Video Background - Loads after page */}
        {videoLoaded && (
          <div className="absolute inset-0 overflow-hidden">
            <iframe
              className="absolute pointer-events-none"
              src="https://www.youtube.com/embed/3MWdPbaBLxg?autoplay=1&mute=1&loop=1&playlist=3MWdPbaBLxg&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
              title="Hero Background Video"
              allow="autoplay; encrypted-media"
              loading="lazy"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '100vw',
                height: '56.25vw', // 16:9 aspect ratio
                minHeight: '100vh',
                minWidth: '177.77vh', // 16:9 aspect ratio
                transform: 'translate(-50%, -50%)',
              }}
            />
          </div>
        )}
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/75 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Vision Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-tlc-gold/20 backdrop-blur-sm px-6 py-2 rounded-full mb-8 border border-tlc-gold/30"
          >
            <Circle className="h-2 w-2 fill-tlc-gold text-tlc-gold" />
            <span className="text-white font-semibold text-sm tracking-wider uppercase">Our Vision</span>
          </motion.div>

          {/* Main Heading - Bold Statement with opacity on desktop */}
          <h1 className="font-anton text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white mb-6 leading-none uppercase text-center">
            <span className="block lg:opacity-90">
              Souls <span className="text-tlc-orange">saved</span>.
            </span>
            <span className="block lg:opacity-85">
              Men <span className="text-tlc-orange">Trained</span>.
            </span>
            <span className="block lg:opacity-90">
              Nations <span className="text-tlc-orange">taken</span>.
            </span>
          </h1>

          {/* CTA Buttons - Outlined Style */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <Link
              href="/sermons"
              className="group w-full sm:w-auto px-10 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-tlc-navy text-white font-bold rounded-full transition-all duration-300 flex items-center justify-center space-x-2 uppercase tracking-wide text-sm"
            >
              <span>Watch Live</span>
            </Link>
            <Link
              href="/quick-links"
              className="group w-full sm:w-auto px-10 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-tlc-navy text-white font-bold rounded-full transition-all duration-300 flex items-center justify-center space-x-2 uppercase tracking-wide text-sm"
            >
              <span>Quick Links</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
