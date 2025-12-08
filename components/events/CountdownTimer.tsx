'use client'

import { useEffect, useMemo, useState } from 'react'

interface CountdownTimerProps {
  targetDate: string
  className?: string
}

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
  completed: boolean
}

const calculateTimeLeft = (target: Date): TimeLeft => {
  const total = target.getTime() - Date.now()

  if (total <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      completed: true,
    }
  }

  const days = Math.floor(total / (1000 * 60 * 60 * 24))
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((total / (1000 * 60)) % 60)
  const seconds = Math.floor((total / 1000) % 60)

  return {
    days,
    hours,
    minutes,
    seconds,
    completed: false,
  }
}

const pad = (value: number) => value.toString().padStart(2, '0')

export default function CountdownTimer({ targetDate, className }: CountdownTimerProps) {
  const target = useMemo(() => new Date(targetDate), [targetDate])
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => calculateTimeLeft(target))

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(target))
    }, 1000)

    return () => clearInterval(interval)
  }, [target])

  if (Number.isNaN(target.getTime())) {
    return null
  }

  if (timeLeft.completed) {
    return (
      <div className={`inline-flex flex-col gap-2 bg-white/15 border border-white/25 rounded-3xl px-6 py-4 backdrop-blur ${className ?? ''}`}>
        <p className="text-xs uppercase tracking-wide text-white/70">Countdown</p>
        <p className="text-white font-semibold">It&apos;s Rooted day — doors are open.</p>
      </div>
    )
  }

  const segments = [
    { label: 'Days', value: pad(timeLeft.days) },
    { label: 'Hours', value: pad(timeLeft.hours) },
    { label: 'Minutes', value: pad(timeLeft.minutes) },
    { label: 'Seconds', value: pad(timeLeft.seconds) },
  ]

  return (
    <div className={`bg-white/10 border border-white/30 rounded-3xl px-6 py-4 backdrop-blur flex flex-col gap-3 ${className ?? ''}`}>
      <div className="text-xs uppercase tracking-[0.3em] text-white/70">Countdown to Rooted</div>
      <div className="grid grid-cols-4 gap-4">
        {segments.map(({ label, value }) => (
          <div key={label} className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white font-anton">{value}</div>
            <p className="text-xs uppercase tracking-wide text-white/70">{label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
