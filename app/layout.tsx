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
  title: 'The Light Community | Souls Saved. Men Trained. Nations Taken.',
  description: 'We are a group of believers set to take the nations — spreading the gospel to the ears and hearts of men, raising men and women to be arsenals for Christ, shifting the culture and transforming lives.',
  keywords: ['The Light Community', 'TLC', 'church', 'sermons', 'devotionals', 'apostle nelson', 'christian', 'ministry', 'online church'],
  authors: [{ name: 'The Light Community' }],
  openGraph: {
    title: 'The Light Community',
    description: 'Souls Saved. Men Trained. Nations Taken.',
    type: 'website',
    locale: 'en_NG',
    siteName: 'The Light Community',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Light Community',
    description: 'Souls Saved. Men Trained. Nations Taken.',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#F5B82E',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${anton.variable}`}>
      <body className={montserrat.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
