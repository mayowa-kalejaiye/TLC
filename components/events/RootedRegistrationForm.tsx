'use client'

import { useState } from 'react'
import { CheckCircle, Loader2, AlertCircle, Users } from 'lucide-react'

interface FormState {
  fullName: string
  email: string
  phone: string
  foodNotes: string
}

const initialState: FormState = {
  fullName: '',
  email: '',
  phone: '',
  foodNotes: '',
}

export default function RootedRegistrationForm() {
  const [form, setForm] = useState<FormState>(initialState)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const updateField = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!form.fullName || !form.email || !form.phone) {
      setStatus('error')
      setMessage('Please provide your full name, email and phone number.')
      return
    }

    setStatus('loading')
    setMessage('')

    try {
      const response = await fetch('/api/rooted-registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...form,
          attendingRooted: true,
          attendingHangout: true,
          guests: 1,
          expectations: '',
        }),
      })

      const payload = await response.json()

      if (!response.ok) {
        throw new Error(payload.error || 'Unable to save your registration right now.')
      }

      setStatus('success')
      setMessage('You are booked in! Check your inbox for next steps and share the link with a friend.')
      setForm(initialState)
    } catch (error) {
      console.error('Rooted registration error:', error)
      setStatus('error')
      setMessage(
        error instanceof Error ? error.message : 'Something went wrong while saving your registration. Please try again.'
      )
    }
  }

  return (
    <div className="bg-white rounded-[32px] shadow-2xl border border-tlcc-cream p-8 md:p-10">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="text-sm font-semibold text-tlcc-navy block mb-2 uppercase tracking-wide">Full Name</label>
            <input
              type="text"
              value={form.fullName}
              onChange={(event) => updateField('fullName', event.target.value)}
              required
              placeholder="Surname & first name"
              className="w-full border-2 border-tlcc-cream rounded-xl px-4 py-3 focus:outline-none focus:border-tlcc-orange text-tlcc-navy"
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-tlcc-navy block mb-2 uppercase tracking-wide">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(event) => updateField('email', event.target.value)}
              required
              placeholder="example@tlcc.ng"
              className="w-full border-2 border-tlcc-cream rounded-xl px-4 py-3 focus:outline-none focus:border-tlcc-orange text-tlcc-navy"
            />
          </div>
        </div>
        <div>
          <label className="text-sm font-semibold text-tlcc-navy block mb-2 uppercase tracking-wide">Phone Number</label>
          <input
            type="tel"
            value={form.phone}
            onChange={(event) => updateField('phone', event.target.value)}
            required
            placeholder="WhatsApp-enabled phone"
            className="w-full border-2 border-tlcc-cream rounded-xl px-4 py-3 focus:outline-none focus:border-tlcc-orange text-tlcc-navy"
          />
          <p className="text-xs text-gray-500 mt-2">One form = one seat. Register again if you&apos;re bringing someone.</p>
        </div>

        {/* <div>
          <label className="text-sm font-semibold text-tlcc-navy block mb-2 uppercase tracking-wide">
            What are you believing for at Rooted?
          </label>
          <textarea
            value={form.expectations}
            onChange={(event) => updateField('expectations', event.target.value)}
            rows={4}
            placeholder="Tell us how to agree with you in prayer."
            className="w-full border-2 border-tlcc-cream rounded-2xl px-4 py-3 focus:outline-none focus:border-tlcc-orange text-tlcc-navy"
          />
        </div> */}

        <div>
          <label className="text-sm font-semibold text-tlcc-navy block mb-2 uppercase tracking-wide">
            Food notes or allergies?
          </label>
          <textarea
            value={form.foodNotes}
            onChange={(event) => updateField('foodNotes', event.target.value)}
            rows={3}
            placeholder="Example: I&apos;m gluten-free, or I&apos;m bringing juice."
            className="w-full border-2 border-tlcc-cream rounded-2xl px-4 py-3 focus:outline-none focus:border-tlcc-orange text-tlcc-navy"
          />
        </div>

        <div className="bg-tlcc-cream/80 border border-tlcc-cream rounded-2xl px-4 py-3 text-sm text-tlcc-navy">
          Save your details, hit submit, then repeat the form if you&apos;re registering friends or family.
        </div>

        {status === 'success' && (
          <div className="flex items-center gap-3 bg-green-50 border border-green-200 text-green-700 rounded-2xl px-4 py-3">
            <CheckCircle className="h-5 w-5" />
            <p className="text-sm font-semibold">{message}</p>
          </div>
        )}

        {status === 'error' && (
          <div className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 rounded-2xl px-4 py-3">
            <AlertCircle className="h-5 w-5" />
            <p className="text-sm font-semibold">{message}</p>
          </div>
        )}

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-tlcc-orange to-tlcc-gold text-white font-bold uppercase tracking-wide rounded-full py-4 shadow-xl hover:shadow-2xl transition disabled:opacity-60"
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Saving your seat...
            </>
          ) : (
            <>
              <Users className="h-5 w-5" /> Reserve My Seat
            </>
          )}
        </button>
        <p className="text-xs text-gray-500 text-center">
          We&apos;ll confirm your registration via email/WhatsApp. By registering you consent to receive event updates.
        </p>
      </form>
    </div>
  )
}
