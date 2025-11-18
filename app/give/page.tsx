 'use client'

import type { Metadata } from 'next'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Heart, Copy, Check, CreditCard, Building2, Smartphone } from 'lucide-react'

export default function GivePage() {
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<'naira' | 'domiciliary'>('naira')

  const copyToClipboard = (text: string, accountType: string) => {
    navigator.clipboard.writeText(text)
    setCopiedAccount(accountType)
    setTimeout(() => setCopiedAccount(null), 2000)
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/give.jpg"
            alt="Give"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-flex items-center space-x-2 bg-tlc-gold/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6 border border-tlc-gold/30">
            <Heart className="h-4 w-4 text-tlc-gold fill-tlc-gold" />
            <span className="text-white font-semibold text-sm tracking-wider uppercase">Give</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight uppercase">
            Your <span className="text-white">Generosity</span><br />
            Our <span className="text-tlc-orange">Mission</span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Give towards our mission to reach a billion souls in ten thousand cities with the message of the gospel
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#give-now"
              className="w-full sm:w-auto px-10 py-4 bg-white text-tlc-green font-bold rounded-full transition-all duration-300 hover:bg-tlc-gold hover:text-white uppercase tracking-wide text-sm"
            >
              Give Now
            </a>
            <a
              href="#other-ways"
              className="w-full sm:w-auto px-10 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-tlc-green text-white font-bold rounded-full transition-all duration-300 uppercase tracking-wide text-sm"
            >
              Other Ways to Give
            </a>
          </div>
        </div>
      </section>

      {/* Ways to Give Section */}
      <section id="give-now" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-tlc-green/10 px-6 py-2 rounded-full mb-4">
                <CreditCard className="h-4 w-4 text-tlc-green" />
                <span className="text-tlc-green font-semibold text-sm tracking-wider uppercase">Give to TLC</span>
              </div>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-tlc-navy mb-4 uppercase">
                Ways to Give
              </h2>
              <p className="text-gray-600 text-lg">
                Join us as we put out our money rights where our faith is, partnering with God for the spread of the gospel in our day.
              </p>
            </div>

            {/* Account Tabs */}
            <div className="flex gap-4 mb-8 justify-center">
              <button
                onClick={() => setActiveTab('naira')}
                className={`px-8 py-3 rounded-full font-bold uppercase text-sm tracking-wide transition-all duration-300 ${
                  activeTab === 'naira'
                    ? 'bg-tlc-orange text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Naira Account
              </button>
              <button
                onClick={() => setActiveTab('domiciliary')}
                className={`px-8 py-3 rounded-full font-bold uppercase text-sm tracking-wide transition-all duration-300 ${
                  activeTab === 'domiciliary'
                    ? 'bg-tlc-orange text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Domiciliary Account
              </button>
            </div>

            {/* Bank Accounts */}
            {activeTab === 'naira' && (
              <div className="space-y-6">
                {/* Moniepoint Bank */}
                <div className="bg-gradient-to-br from-tlc-cream to-white border-2 border-tlc-gold/20 rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-tlc-gold rounded-full flex items-center justify-center">
                        <Building2 className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-tlc-navy">Moniepoint MFB</h3>
                        <p className="text-gray-600 text-sm">Nigeria</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
                      🇳🇬 NGN
                    </span>
                  </div>

                  <div className="bg-white rounded-xl p-8 border border-gray-200">
                    <p className="text-sm text-gray-500 font-semibold mb-2 uppercase tracking-wider">Account Name</p>
                    <p className="text-lg font-medium text-tlc-navy mb-4">Nelson Concept Studios - The Light Community Projects</p>
                    
                    <p className="text-sm text-gray-500 font-semibold mb-2 uppercase tracking-wider">Account Number</p>
                    <div className="flex items-center justify-between">
                      <p className="text-3xl font-bold text-tlc-navy">4583629271</p>
                      <button
                        onClick={() => copyToClipboard('4583629271', 'moniepoint')}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        title="Copy account number"
                      >
                        {copiedAccount === 'moniepoint' ? (
                          <Check className="h-5 w-5 text-green-600" />
                        ) : (
                          <Copy className="h-5 w-5 text-gray-400" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Domiciliary Tab Content */}
            {activeTab === 'domiciliary' && (
              <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-2xl text-tlc-navy mb-4">Domiciliary Account Details</h3>
                <p className="text-gray-600 mb-6">
                  For international donations and foreign currency transfers
                </p>
                <p className="text-sm text-gray-500 italic">
                  Contact our finance team for domiciliary account information
                </p>
                <div className="mt-6">
                  <Link
                    href="/contact#partnership"
                    className="inline-block px-8 py-3 bg-tlc-green text-white font-bold rounded-full hover:bg-tlc-green-dark transition-all duration-300"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Online Giving Section */}
      <section id="other-ways" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-tlc-navy mb-4 uppercase">
                Other Ways to Give
              </h2>
              <p className="text-gray-600 text-lg">
                Simple and convenient ways to support our mission
              </p>
            </div>

            {/* Mobile Transfer */}
            <div className="bg-gradient-to-br from-tlc-gold/10 to-tlc-orange/10 rounded-2xl p-8 border-2 border-tlc-gold/20">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-tlc-gold rounded-xl flex items-center justify-center flex-shrink-0">
                  <Smartphone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-tlc-navy mb-2">Give via Mobile Transfer</h3>
                  <p className="text-gray-700 mb-4">
                    Use your mobile banking app to transfer to the account number above. Quick, easy, and secure.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center space-x-2">
                      <Check className="h-5 w-5 text-tlc-gold" />
                      <span>Instant transfer from your mobile app</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="h-5 w-5 text-tlc-gold" />
                      <span>No additional fees</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="h-5 w-5 text-tlc-gold" />
                      <span>Available 24/7</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Give Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-tlc-navy mb-6">
              Why Your Giving Matters
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Every gift makes an eternal impact as we spread the gospel and transform lives
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6">
                <div className="w-16 h-16 bg-tlc-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-tlc-green" />
                </div>
                <h3 className="font-bold text-xl text-tlc-navy mb-3">Souls Saved</h3>
                <p className="text-gray-600">
                  Supporting evangelism and outreach to unreached communities
                </p>
              </div>

              <div className="p-6">
                <div className="w-16 h-16 bg-tlc-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="h-8 w-8 text-tlc-orange" />
                </div>
                <h3 className="font-bold text-xl text-tlc-navy mb-3">Men Trained</h3>
                <p className="text-gray-600">
                  Equipping leaders and ministers for kingdom work
                </p>
              </div>

              <div className="p-6">
                <div className="w-16 h-16 bg-tlc-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🌍</span>
                </div>
                <h3 className="font-bold text-xl text-tlc-navy mb-3">Nations Taken</h3>
                <p className="text-gray-600">
                  Planting churches and transforming cities globally
                </p>
              </div>
            </div>

            <div className="mt-12 p-8 bg-gradient-to-br from-tlc-green to-tlc-green-dark rounded-2xl text-white">
              <p className="text-lg md:text-xl mb-4">
                "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver."
              </p>
              <p className="font-bold">— 2 Corinthians 9:7</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export const metadata: Metadata = {
  title: 'Give | The Light Community',
  description: 'Partner with The Light Community — give online or learn other ways to support our mission to reach the nations.',
  openGraph: {
    title: 'Give - The Light Community',
    description: 'Partner with The Light Community — give online or learn other ways to support our mission.',
    images: [
      {
        url: 'https://thelightcommunity.vercel.app/images/give.jpg',
        alt: 'Give to The Light Community',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://thelightcommunity.vercel.app/images/give.jpg'],
  },
}
