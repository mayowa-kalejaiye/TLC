import type { Metadata } from 'next'
import { Montserrat, Anton } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import { Analytics } from "@vercel/analytics/next"
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
  metadataBase: new URL('https://tlc.ng'),
  title: {
    default: 'The Light Community | Souls Saved. Men Trained. Nations Taken.',
    template: '%s | The Light Community'
  },
  description: 'We are a group of believers set to take the nations — spreading the gospel to the ears and hearts of men, raising men and women to be arsenals for Christ, shifting the culture and transforming lives.',
  keywords: [
    'The Light Community', 
    'TLC', 
    'church', 
    'sermons', 
    'devotionals', 
    'apostle nelson', 
    'christian', 
    'ministry', 
    'online church', 
    'CCI',
    'Christ Community International', 
    'Nigeria church', 
    'Lagos church',
    'online ministry',
    'bible study',
    'prayer meetings',
    'youth ministry',
    'fire conference',
    'rooted',
    'tarry',
    'worship',
    'gospel',
    'faith',
    'christianity',
    'church online',
    'live sermons',
  ],
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
    url: 'https://tlc.ng',
    siteName: 'The Light Community',
    title: 'The Light Community | Souls Saved. Men Trained. Nations Taken.',
    description: 'We are a group of believers set to take the nations — spreading the gospel to the ears and hearts of men, raising men and women to be arsenals for Christ.',
    images: [
      {
        url: 'https://tlc.ng/images/hero-fallback.jpg',
        width: 1200,
        height: 630,
        alt: 'The Light Community - Souls Saved. Men Trained. Nations Taken.',
      },
      {
        url: 'https://tlc.ng/images/tlc-logo.png',
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
    images: ['https://tlc.ng/images/hero-fallback.jpg'],
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
    '@id': 'https://tlc.ng/#church',
    name: 'The Light Community',
    alternateName: ['TLC', 'Christ Community International', 'CCI'],
    url: 'https://tlc.ng',
    logo: {
      '@type': 'ImageObject',
      url: 'https://tlc.ng/images/tlc-logo.png',
      width: 800,
      height: 600,
    },
    image: 'https://tlc.ng/images/hero-fallback.jpg',
    description: 'We are a group of believers set to take the nations — spreading the gospel to the ears and hearts of men, raising men and women to be arsenals for Christ.',
    slogan: 'Souls Saved. Men Trained. Nations Taken.',
    founder: {
      '@type': 'Person',
      name: 'Apostle Nelson',
    },
      sameAs: [
      'https://youtube.com/@TheLightCommunity',
      'https://instagram.com/thelight_community',
      'https://www.tiktok.com/@the.lightcommunity?_r=1&_t=ZS-917gOMTaYuC',
      'https://chat.whatsapp.com/G395zowpEcAFfYWrmFlyGI',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+234-903-500-4764',
      contactType: 'customer service',
      areaServed: ['NG', 'Global'],
      availableLanguage: ['English'],
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Church Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Sunday Service',
            description: 'Weekly worship and sermon',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Prayer Meetings',
            description: 'Mon-Wed: Rooted Prayers, Friday: Watch Hour',
          },
        },
      ],
    },
    potentialAction: {
      '@type': 'WatchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://youtube.com/@TheLightCommunity',
        actionPlatform: [
          'http://schema.org/DesktopWebPlatform',
          'http://schema.org/MobileWebPlatform',
        ],
      },
    },
  }

  return (
    <html lang="en" className={`${montserrat.variable} ${anton.variable}`}>
      <head>
        <meta name="application-name" content="The Light Community" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="The Light Community" />
        <meta name="theme-color" content="#F5B82E" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={montserrat.className}>
        <Navbar />
        <main>{children}</main>
        <Analytics />
        <Footer />
      </body>
    </html>
  )
}
