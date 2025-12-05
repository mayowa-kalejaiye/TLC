import Link from 'next/link'
import { BookOpen, ArrowRight, Calendar } from 'lucide-react'

export default function Devotionals() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-tlc-cream to-tlc-cream-dark">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-tlc-gold font-bold text-sm tracking-wider uppercase mb-3">
            DAILY BREAD
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-tlc-navy font-serif">
            Fresh Word Every Day
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Today's Devotional Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 bg-tlc-gold/10 rounded-lg">
                  <BookOpen className="h-6 w-6 text-tlc-gold" />
                </div>
                <div>
                  <p className="text-xs text-tlc-navy-light uppercase tracking-wide">Today&apos;s Devotional</p>
                  <div className="flex items-center text-sm text-tlc-navy-light">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>{new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-tlc-navy mb-3">
                Walk in the Light
              </h3>

              <p className="text-sm text-tlc-navy-light italic mb-4">
                &quot;But if we walk in the light, as he is in the light, we have fellowship 
                one with another...&quot; — 1 John 1:7
              </p>

              <p className="text-tlc-navy-light leading-relaxed mb-6">
                As believers, we are called to walk in the light of Christ daily. 
                This means living transparently before God and others, allowing His 
                truth to illuminate every area of our lives...
              </p>

              <Link
                href="/sermons#featured"
                className="inline-flex items-center text-tlc-gold hover:text-tlc-gold-dark font-semibold transition-colors"
              >
                <span>Read Full Devotional</span>
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Devotional Info & CTA */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-tlc-navy mb-4">
                  Start Your Day with God&apos;s Word
                </h3>
                  <p className="text-tlc-navy-light leading-relaxed mb-6">
                    Receive daily inspiration, biblical insights, and practical teachings 
                    to strengthen your walk with Christ. Our devotionals are designed to 
                    help you grow spiritually and apply God&apos;s Word to your everyday life.
                  </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-tlc-gold/10 rounded-lg mt-1">
                    <span className="text-xl">📖</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-tlc-navy mb-1">Daily Content</h4>
                    <p className="text-sm text-tlc-navy-light">
                      Fresh devotionals published every morning
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-tlc-gold/10 rounded-lg mt-1">
                    <span className="text-xl">✉️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-tlc-navy mb-1">Email Delivery</h4>
                    <p className="text-sm text-tlc-navy-light">
                      Get devotionals delivered straight to your inbox
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-tlc-gold/10 rounded-lg mt-1">
                    <span className="text-xl">💡</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-tlc-navy mb-1">Practical Insights</h4>
                    <p className="text-sm text-tlc-navy-light">
                      Biblical wisdom for modern life challenges
                    </p>
                  </div>
                </div>
              </div>

              <Link
                href="/sermons#featured"
                className="inline-block px-8 py-4 bg-tlc-gold hover:bg-tlc-gold-dark text-white font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Browse All Devotionals
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
