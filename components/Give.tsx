import Link from 'next/link'
import Image from 'next/image'
import { Heart, CreditCard, Building2, Sparkles } from 'lucide-react'

export default function Give() {
  return (
    <section className="relative py-16 md:py-24 text-white overflow-hidden z-20">
      {/* Background Image with overlay to match the Give page */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/give.jpg" alt="Give" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Decorative animated elements (subtle, above the image) */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-tlc-gold rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-tlc-gold/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-tlc-gold/30">
              <Sparkles className="h-4 w-4 text-tlc-gold" />
              <span className="text-tlc-gold font-bold text-sm tracking-wider uppercase">
                PARTNER WITH US
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight" style={{ fontFamily: 'var(--font-anton)' }}>
              <span className="block">Give to</span>
              <span className="block text-tlc-gold">The Light Community</span>
            </h2>

            <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
              Your generosity helps us reach more souls, train more disciples, 
              and transform more lives. Thank you for partnering with us in the work.
            </p>
          </div>

          {/* Giving Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-tlc-gold to-tlc-orange rounded-xl flex items-center justify-center mx-auto mb-5 shadow-lg group-hover:scale-110 transition-transform">
                <CreditCard className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-3">Online Giving</h3>
              <p className="text-gray-200 leading-relaxed">
                Give securely via Paystack or Flutterwave with instant confirmation
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-tlc-gold to-tlc-orange rounded-xl flex items-center justify-center mx-auto mb-5 shadow-lg group-hover:scale-110 transition-transform">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-3">Bank Transfer</h3>
              <p className="text-gray-200 leading-relaxed">
                Direct deposit to our church account for larger gifts
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-tlc-gold to-tlc-orange rounded-xl flex items-center justify-center mx-auto mb-5 shadow-lg group-hover:scale-110 transition-transform">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-3">Recurring Giving</h3>
              <p className="text-gray-200 leading-relaxed">
                Set up automatic monthly donations for consistent partnership
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Link
                href="/give"
                className="group w-full sm:w-auto px-10 py-4 bg-tlc-gold hover:bg-tlc-orange text-white font-bold rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2"
              >
                <span>Give Now</span>
                <Heart className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </Link>
              <Link
                href="/give#bank-details"
                className="w-full sm:w-auto px-10 py-4 bg-white/10 backdrop-blur-md border-2 border-white hover:bg-white hover:text-tlc-green font-bold rounded-full transition-all duration-300 hover:scale-105"
              >
                Bank Transfer Details
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="inline-block bg-white/5 backdrop-blur-md rounded-2xl px-8 py-6 border border-white/10">
              <p className="text-sm text-gray-300 mb-3 font-semibold">Secure & Trusted Banking</p>
              <div className="flex flex-wrap justify-center items-center gap-6 text-sm">
                <div className="flex items-center gap-2 text-gray-200">
                  <span className="text-green-400">🔒</span>
                  <span className="font-medium">Secure Transfer</span>
                </div>
                <div className="w-px h-4 bg-white/20"></div>
                <span className="font-medium text-gray-200">Bank Transfer</span>
                <div className="w-px h-4 bg-white/20"></div>
                <span className="font-medium text-gray-200">Moniepoint MFB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
