import Hero from '@/components/Hero'
import Welcome from '@/components/Welcome'
import GlobalFamily from '@/components/GlobalFamily'
import FeaturedSermon from '@/components/FeaturedSermon'
// import Devotionals from '@/components/Devotionals'
import Ministries from '@/components/Ministries'
import Give from '@/components/Give'
import Newsletter from '@/components/Newsletter'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home | The Light Community',
  description: 'The Light Community — Souls Saved. Men Trained. Nations Taken. Join us for powerful teaching, worship, and community.',
  openGraph: {
    title: 'The Light Community',
    description: 'The Light Community — Souls Saved. Men Trained. Nations Taken.',
    images: [
      {
        url: 'https://thelightcommunity.vercel.app/images/tlc-logo.png',
        alt: 'The Light Community Logo',
        width: 800,
        height: 600,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://thelightcommunity.vercel.app/images/tlc-logo.png'],
  },
}

export default function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      <GlobalFamily />
      <FeaturedSermon />
      {/* <Devotionals /> */}
      <Ministries />
      <Give />
      <Newsletter />
    </>
  )
}
