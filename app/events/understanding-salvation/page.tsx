import type { Metadata } from 'next'
import SalvationClient from './SalvationClient'

export const metadata: Metadata = {
  title: 'Understanding Salvation | The Light Community',
  description: 'A 4-day deep-dive discipleship training designed to anchor your soul in the foundational truth of the Gospel.',
}

export default function UnderstandingSalvationPage() {
  return <SalvationClient />
}
