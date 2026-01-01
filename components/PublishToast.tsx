"use client"
import React from 'react'

type Props = {
  show: boolean
  message?: string
}

export default function PublishToast({ show, message = 'Published' }: Props) {
  return (
    <div aria-live="polite" className={`fixed left-1/2 bottom-8 z-50 transform -translate-x-1/2 transition-all duration-300 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'}`}>
      <div className="bg-tlcc-navy text-white px-6 py-3 rounded-full shadow-lg text-sm font-semibold">
        {message}
      </div>
    </div>
  )
}
