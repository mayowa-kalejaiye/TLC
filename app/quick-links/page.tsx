 'use client'


import { useLanguage } from '@/components/providers/LanguageProvider'

  const { messages } = useLanguage()
  const sections = [
    {
      title: messages.quickLinks.sections[0].title,
      description: messages.quickLinks.sections[0].description,
      icon: UserPlus,
      links: [
        {
          title: messages.quickLinks.sections[0].links[0].title,
          description: messages.quickLinks.sections[0].links[0].description,
          url: '/contact#first-timer'
        },
        {
          title: messages.quickLinks.sections[0].links[1].title,
          description: messages.quickLinks.sections[0].links[1].description,
          url: '/about'
        },
        {
          title: messages.quickLinks.sections[0].links[2].title,
          description: messages.quickLinks.sections[0].links[2].description,
          url: '/ministries'
        },
        {
          title: messages.quickLinks.sections[0].links[3].title,
          description: messages.quickLinks.sections[0].links[3].description,
          url: 'https://youtube.com/@TheLightCommunity'
        }
      ]
    },
    {
      title: messages.quickLinks.sections[1].title,
      description: messages.quickLinks.sections[1].description,
      icon: Users,
      links: [
        // ...existing code, replace each title/description with messages.quickLinks.sections[1].links[n].title/description
      ]
    },
    {
      title: messages.quickLinks.sections[2].title,
      description: messages.quickLinks.sections[2].description,
      icon: BookOpen,
      links: [
        {
          title: 'Watch Sermons',
          description: 'Access our complete library of powerful messages and teachings.',
          url: '/sermons'
        },
        {
          title: 'Daily Devotionals',
          description: 'Start your day with Word-based reflections and spiritual insights.',
          url: '/sermons#featured'
        },
        {
          title: 'Bible Study Groups',
          description: 'Join a small group for deeper fellowship and Scripture study.',
          url: '/contact#bible-study'
        }
      ]
    },
    {
      title: messages.quickLinks.sections[3].title,
      description: messages.quickLinks.sections[3].description,
      icon: Heart,
      links: [
        {
          title: 'Give Online',
          description: 'Support our mission through tithes, offerings, and special projects.',
          url: '/give#give-now'
        },
        {
          title: 'Building Project',
          description: 'Contribute to our permanent church facility and expansion.',
          url: '/give#give-now'
        },
        {
          title: 'Global Missions',
          description: 'Support our vision to reach a billion souls in ten thousand cities.',
          url: '/give#give-now'
        },
      ]
    },
    {
      title: messages.quickLinks.sections[4].title,
      description: messages.quickLinks.sections[4].description,
      icon: MessageCircle,
      links: [
        {
          title: 'Prayer Request',
          description: 'Submit a prayer request. Our intercessors are ready to stand with you.',
          url: '/contact#prayer-request'
        },
        {
          title: 'Testimony',
          description: 'Share what God has done! Tell your story of transformation and victory.',
          url: '/contact#testimony'
        },
        {
          title: 'Counselling',
          description: 'Receive biblical guidance and pastoral support in challenging times.',
          url: '/contact#counselling'
        },
        {
          title: 'Contact Pastors',
          description: 'Reach out to our pastoral team for spiritual guidance and support.',
          url: '/contact#pastoral-support'
        }
      ]
    },
    {
      title: messages.quickLinks.sections[5].title,
      description: messages.quickLinks.sections[5].description,
      icon: Video,
      links: [
        {
          title: 'YouTube Channel',
          description: 'Subscribe to watch live services and past sermons anytime.',
          url: 'https://youtube.com/@TheLightCommunity'
        },
        {
          title: 'WhatsApp Community',
          description: 'Join our WhatsApp groups for updates, prayers, and fellowship.',
          url: 'https://chat.whatsapp.com/G395zowpEcAFfYWrmFlyGI'
        },
        {
          title: 'Social Media',
          description: 'Follow us on Instagram, Facebook, and Twitter for daily inspiration.',
          url: '/contact#general'
        },
        {
          title: 'Newsletter',
          description: 'Subscribe to receive weekly updates, devotionals, and event announcements.',
          url: '/#stay-connected'
        }
      ]
    }
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative text-white py-20 px-4 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/quick.JPG"
            alt={messages.quickLinks.heroImageAlt}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-tlcc-gold/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6 border border-tlcc-gold/30">
            <Globe className="h-4 w-4 text-tlcc-gold" />
            <span className="text-white font-semibold text-sm tracking-wider uppercase">{messages.quickLinks.badge}</span>
          </div>

          <h1 className="font-anton text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 uppercase leading-tight">
            {messages.quickLinks.heroTitle}
          </h1>
          <h2 className="text-xl md:text-2xl text-white/90 font-semibold mb-4">
            {messages.quickLinks.heroSubtitle}
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            {messages.quickLinks.heroDescription}
          </p>
        </div>
      </section>

      {/* Sections */}
      <div className="max-w-6xl mx-auto px-4 py-16 space-y-16">
        {sections.map((section, sectionIndex) => {
          const IconComponent = section.icon
          return (
            <section key={sectionIndex} className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
              {/* Section Header */}
              <div className="flex items-start space-x-4 mb-6 pb-6 border-b-2 border-gray-100">
                <div className="w-14 h-14 bg-tlcc-gold rounded-xl flex items-center justify-center flex-shrink-0">
                  <IconComponent className="h-7 w-7 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="font-anton text-3xl md:text-4xl text-tlcc-navy mb-2 uppercase">
                    {section.title}
                  </h2>
                  <p className="text-gray-600 text-lg">
                    {section.description}
                  </p>
                </div>
              </div>

              {/* Links Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {section.links.map((link, linkIndex) => (
                  <Link
                    key={linkIndex}
                    href={link.url}
                    className="group bg-gray-50 hover:bg-tlcc-navy rounded-xl p-6 transition-all duration-300 border-2 border-transparent hover:border-tlcc-navy"
                  >
                    <h3 className="font-bold text-lg text-tlcc-navy group-hover:text-white mb-2 transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-gray-600 group-hover:text-white/90 text-sm transition-colors">
                      {link.description}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )
        })}
      </div>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-tlcc-orange to-tlcc-gold py-16 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="font-anton text-3xl md:text-4xl mb-4 uppercase">
            {messages.quickLinks.ctaTitle}
          </h2>
          <p className="text-lg mb-8 text-white/90">
            {messages.quickLinks.ctaDescription}
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-white text-tlcc-navy font-bold rounded-full hover:bg-tlcc-navy hover:text-white border-2 border-white transition-all duration-300 uppercase tracking-wide text-sm"
          >
            {messages.quickLinks.ctaButton}
          </Link>
        </div>
      </section>
    </main>
  )
}

// Page-level metadata removed: client component cannot export `metadata`.
// Defaults are provided in `app/layout.tsx`.

