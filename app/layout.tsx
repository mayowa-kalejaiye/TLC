import type { Metadata } from 'next'
import { Montserrat, Anton } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
  display: 'swap',
})

const anton = Anton({ 
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-anton',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://thelightcommunity.netlify.app'),
  title: {
    default: 'The Light Community | Souls Saved. Men Trained. Nations Taken.',
    template: '%s | The Light Community'
  },
  description: 'We are a group of believers set to take the nations — spreading the gospel to the ears and hearts of men, raising men and women to be arsenals for Christ, shifting the culture and transforming lives.',
  keywords: ['The Light Community', 'TLC', 'church', 'sermons', 'devotionals', 'apostle nelson', 'christian', 'ministry', 'online church', 'CCI', 'Christ Community International', 'Nigeria church', 'online ministry'],
  authors: [{ name: 'The Light Community' }],
  creator: 'The Light Community',
  publisher: 'The Light Community',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: 'https://thelightcommunity.netlify.app',
    siteName: 'The Light Community',
    title: 'The Light Community | Souls Saved. Men Trained. Nations Taken.',
    description: 'We are a group of believers set to take the nations — spreading the gospel to the ears and hearts of men, raising men and women to be arsenals for Christ.',
    images: [
      {
        url: '/images/hero-fallback.jpg',
        width: 1200,
        height: 630,
        alt: 'The Light Community - Souls Saved. Men Trained. Nations Taken.',
      },
      {
        url: '/images/tlc-logo.png',
        width: 800,
        height: 600,
        alt: 'The Light Community Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Light Community | Souls Saved. Men Trained. Nations Taken.',
    description: 'We are a group of believers set to take the nations — spreading the gospel to the ears and hearts of men, raising men and women to be arsenals for Christ.',
    images: ['/images/hero-fallback.jpg'],
    creator: '@thelight_community',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/images/tlc-logo.png',
    shortcut: '/images/tlc-logo.png',
    apple: '/images/tlc-logo.png',
  },
  manifest: '/site.webmanifest',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#F5B82E',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Church',
    name: 'The Light Community',
    alternateName: 'TLC',
    url: 'https://thelightcommunity.netlify.app',
    logo: 'https://thelightcommunity.netlify.app/images/tlc-logo.png',
    description: 'We are a group of believers set to take the nations — spreading the gospel to the ears and hearts of men, raising men and women to be arsenals for Christ.',
    slogan: 'Souls Saved. Men Trained. Nations Taken.',
    sameAs: [
      'https://youtube.com/@TheLightCommunity',
      'https://instagram.com/thelight_community',
      'https://tiktok.com/@thelightcommunity',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+234-903-500-4764',
      contactType: 'customer service',
      areaServed: 'NG',
      availableLanguage: 'English',
    },
  }

  return (
    <html lang="en" className={`${montserrat.variable} ${anton.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={montserrat.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
