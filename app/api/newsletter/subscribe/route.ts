import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { email } = await req.json()
    if (!email || typeof email !== 'string') return NextResponse.json({ error: 'Email required' }, { status: 400 })

    const apiKey = process.env.EMAILOCTOPUS_API_KEY
    const listId = process.env.EMAILOCTOPUS_LIST_ID

    if (!apiKey || !listId) {
      // fallback: store locally
      const fs = await import('fs')
      const path = await import('path')
      const dir = path.join(process.cwd(), 'data', 'subscribers')
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
      const file = path.join(dir, `${Date.now()}.json`)
      fs.writeFileSync(file, JSON.stringify({ email, createdAt: new Date().toISOString() }))
      return NextResponse.json({ ok: true, stored: true })
    }

    const url = `https://emailoctopus.com/api/1.6/lists/${listId}/contacts`
    const r = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-Api-Key': apiKey,
      },
      body: JSON.stringify({ email_address: email, status: 'SUBSCRIBED' }),
    })

    const contentType = r.headers.get('content-type') || ''
    let body: unknown
    if (contentType.includes('application/json')) {
      body = await r.json()
    } else {
      body = await r.text()
    }

    if (!r.ok) {
      const errMsg = typeof body === 'string'
        ? body
        : (body && typeof body === 'object' && 'error' in body ? (body as any).error || 'Subscription failed' : 'Subscription failed')
      return NextResponse.json({ error: errMsg, upstreamStatus: r.status, upstreamBody: body }, { status: 502 })
    }

    return NextResponse.json({ ok: true, upstreamBody: body })
  } catch {
    return NextResponse.json({ error: 'Bad Request' }, { status: 400 })
  }
}
