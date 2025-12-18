'use client'

import { Users } from 'lucide-react'

export default function RootedRegistrationForm() {
  return (
    <div className="bg-white rounded-[32px] shadow-2xl border border-tlcc-cream p-8 md:p-10">
      <div className="flex items-start gap-6">
        <Users className="h-10 w-10 text-tlcc-orange" />
        <div>
          <h3 className="font-anton text-2xl text-tlcc-navy mb-2">Registration Closed</h3>
          <p className="text-gray-700 mb-3">Registration for Rooted December has closed. We invite you to join the Glory Clan for deeper fellowship and discipleship.</p>

          <p className="mb-3 text-gray-700">If you desire to grow deeper in your walk with God and be closely discipled, the Glory Clan is about to begin! 🌿</p>

          <p className="mb-6 text-gray-700">It’s a space for intentional growth, deeper fellowship, and spiritual maturity in Christ.</p>

          <a
            href="https://chat.whatsapp.com/KZQLS2eFsrX4JlSox4y2wd?mode=hqrt1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-tlcc-green text-white rounded-full font-bold"
          >
            Join the Glory Clan on WhatsApp
          </a>

          <p className="text-xs text-gray-500 mt-4">God bless you.</p>
        </div>
      </div>
    </div>
  )
}
