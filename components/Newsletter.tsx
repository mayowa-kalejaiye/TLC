'use client'

import { useState, useEffect } from 'react'
import { Mail, Send, CheckCircle, Zap } from 'lucide-react'
import emailjs from '@emailjs/browser'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('yWKH6btB5bEwVcFHU')
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    
    try {
      // Send email using EmailJS
      await emailjs.send(
        'service_q9oad7f', // Service ID
        'template_nphq0yh', // Template ID
        {
          user_email: email,
          subscription_date: new Date().toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })
        }
      )
      
      setStatus('success')
      setEmail('')
      setTimeout(() => setStatus('idle'), 5000)
    } catch (error) {
      console.error('EmailJS Error:', error)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <section id="stay-connected" className="py-16 md:py-24 bg-gradient-to-br from-white via-tlc-cream to-white relative overflow-hidden scroll-mt-24 z-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 right-20 w-72 h-72 bg-tlc-gold/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-20 w-96 h-96 bg-tlc-orange/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-tlc-gold/10 px-4 py-2 rounded-full mb-6 border border-tlc-gold/20">
              <Zap className="h-4 w-4 text-tlc-gold" />
              <span className="text-tlc-gold font-bold text-sm tracking-wider uppercase">
                DAILY INSPIRATION
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-tlc-navy mb-6 leading-tight" style={{ fontFamily: 'var(--font-anton)' }}>
              <span className="block">Stay</span>
              <span className="block text-tlc-orange">Connected</span>
            </h2>
            
            <p className="text-lg md:text-xl text-tlc-navy-light leading-relaxed max-w-2xl mx-auto">
              Get daily devotionals, sermon updates, and ministry news delivered 
              to your inbox. We promise to bless, not spam.
            </p>
          </div>

          {/* Form Section */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-tlc-cream mb-8">
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-tlc-navy-light" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full pl-12 pr-4 py-4 border-2 border-tlc-cream focus:border-tlc-gold rounded-xl focus:outline-none focus:ring-4 focus:ring-tlc-gold/20 transition-all text-tlc-navy font-medium"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="px-8 py-4 bg-gradient-to-r from-tlc-gold to-tlc-orange hover:from-tlc-orange hover:to-tlc-gold text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 hover:scale-105"
                >
                  {status === 'loading' ? (
                    <span>Subscribing...</span>
                  ) : (
                    <>
                      <span>Subscribe</span>
                      <Send className="h-5 w-5" />
                    </>
                  )}
                </button>
              </div>

              {status === 'success' && (
                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center justify-center gap-2 text-green-700 font-semibold animate-fade-in">
                  <CheckCircle className="h-5 w-5" />
                  <span>Thank you! You&apos;ve been subscribed successfully.</span>
                </div>
              )}
              {status === 'error' && (
                <p className="mt-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 font-semibold text-center animate-fade-in">
                  ✗ Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-tlc-cream/50 hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">📖</div>
              <h3 className="font-bold text-tlc-navy mb-2">Daily Devotionals</h3>
              <p className="text-sm text-tlc-navy-light">
                Start your day with inspiring biblical insights
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-tlc-cream/50 hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">🎤</div>
              <h3 className="font-bold text-tlc-navy mb-2">Sermon Updates</h3>
              <p className="text-sm text-tlc-navy-light">
                Never miss a powerful message from leadership
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-tlc-cream/50 hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">📅</div>
              <h3 className="font-bold text-tlc-navy mb-2">Event Alerts</h3>
              <p className="text-sm text-tlc-navy-light">
                Stay informed about upcoming gatherings
              </p>
            </div>
          </div>

          {/* Privacy Note */}
          <p className="text-sm text-tlc-navy-light/70 text-center max-w-2xl mx-auto">
            By subscribing, you agree to receive emails from The Light Community. 
            You can unsubscribe at any time. We respect your privacy and will never share your information.
          </p>
        </div>
      </div>
    </section>
  )
}
