import type { Metadata } from 'next'
import NationTakersClient from './NationTakersClient'

export const metadata: Metadata = {
  title: 'Nation Takers Career Webinar | The Light Community',
  description: 'Building Career Greatness: Scaling Impact, Leadership & Vision in a Changing World.',
}

export default function NationTakersWebinarPage() {
  return <NationTakersClient />
}
