import { NextResponse } from 'next/server'

interface RegistrationPayload {
  fullName: string
  email: string
  phone: string
  attendingRooted: boolean
  attendingHangout: boolean
  guests: number
  expectations: string
  foodNotes: string
}

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as Partial<RegistrationPayload>

    if (!data.fullName || !data.email || !data.phone) {
      return NextResponse.json({ error: 'Full name, email and phone are required.' }, { status: 400 })
    }

    const payload: RegistrationPayload & { submittedAt: string } = {
      fullName: data.fullName.trim(),
      email: data.email.trim(),
      phone: data.phone.trim(),
      attendingRooted: data.attendingRooted ?? true,
      attendingHangout: data.attendingHangout ?? true,
      guests: Number.isFinite(data.guests) ? Math.max(1, Number(data.guests)) : 1,
      expectations: data.expectations?.trim() ?? '',
      foodNotes: data.foodNotes?.trim() ?? '',
      submittedAt: new Date().toISOString(),
    }

    const webhookUrl = process.env.ROOTED_REG_SHEET_WEBHOOK

    if (!webhookUrl) {
      if (process.env.NODE_ENV === 'development') {
        console.warn('ROOTED_REG_SHEET_WEBHOOK is not configured. Payload:', payload)
        return NextResponse.json({ success: true, message: 'Registration captured locally (dev mode).' })
      }

      return NextResponse.json(
        { error: 'Registration storage is not configured. Please set ROOTED_REG_SHEET_WEBHOOK in your environment.' },
        { status: 500 }
      )
    }

    const webhookResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      cache: 'no-store',
    })

    if (!webhookResponse.ok) {
      const errorText = await webhookResponse.text()
      throw new Error(`Webhook responded with ${webhookResponse.status}: ${errorText}`)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Rooted registration webhook error:', error)
    return NextResponse.json(
      { error: 'Unable to save your registration right now. Please try again shortly.' },
      { status: 500 }
    )
  }
}
