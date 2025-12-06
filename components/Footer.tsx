import Link from 'next/link'
import Image from 'next/image'
import { Youtube, Instagram, MessageCircle } from 'lucide-react'

// TikTok SVG Icon Component
const TikTokIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
)

const footerLinks = {
  connect: [
    { name: 'About Us', href: '/about' },
    { name: 'Join a Ministry', href: '/ministries' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Become a Member', href: '/contact#become-member' },
  ],
  ministries: [
    { name: 'TLCC Online ministry', href: '/ministries#tlcc-online' },
    { name: 'TLCC Firestorm', href: '/ministries#firestorm' },
    { name: 'TLCC Follow up', href: '/ministries#follow-up' },
    { name: 'TLCC Prayer team', href: '/ministries#prayer-team' },
    { name: 'TLCC Media & visibility', href: '/ministries#media-visibility' },
    { name: 'Growth initiatives', href: '/ministries#growth-initiatives' },
  ],
  resources: [
    { name: 'Daily Devotionals', href: '/sermons#featured' },
    { name: 'Rooted Program', href: '/map' },
    { name: 'Prayer Requests', href: '/contact#prayer-request' },
    { name: 'Testimonies', href: '/about#testimonies' },
    { name: 'Service Times', href: '/about#services' },
  ],
  media: [
    { name: 'Sermons', href: '/sermons' },
    { name: 'YouTube Channel', href: 'https://youtube.com/@TheLightCommunity', external: true },
    { name: 'Worship Sessions', href: '/sermons' },
  ],
}

const socialLinks = [
  { name: 'YouTube', href: 'https://youtube.com/@TheLightCommunity', icon: Youtube },
  { name: 'Instagram', href: 'https://instagram.com/thelight_community', icon: Instagram },
  { name: 'WhatsApp', href: 'https://chat.whatsapp.com/G395zowpEcAFfYWrmFlyGI', icon: MessageCircle },
  { name: 'TikTok', href: 'https://www.tiktok.com/@the.lightcommunity?_r=1&_t=ZS-917gOMTaYuC', icon: TikTokIcon },
]

export default function Footer() {
  return (
    <footer className="relative z-20 bg-tlcc-green text-white">
      <div className="container-custom py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <Image
              src="/images/tlcc-logo.png"
              alt="The Light Community Church"
              width={160}
              height={60}
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Souls saved. Men Trained. Nations taken.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-tlcc-green-light hover:bg-tlcc-gold rounded-lg transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-tlcc-gold">CONNECT</h3>
            <ul className="space-y-2">
              {footerLinks.connect.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-tlcc-gold transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ministries */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-tlcc-gold">MINISTRIES</h3>
            <ul className="space-y-2">
              {footerLinks.ministries.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-tlcc-gold transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-tlcc-gold">RESOURCES</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-tlcc-gold transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Media */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-tlcc-gold">MEDIA</h3>
            <ul className="space-y-2">
              {footerLinks.media.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-tlcc-gold transition-colors duration-200 text-sm"
                    {...(link.external && { target: '_blank', rel: 'noopener noreferrer' })}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-tlcc-green-light pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2 text-tlcc-gold">Contact Us</h4>
              <p className="text-gray-300 text-sm">
                Joy: <a href="tel:09035004764" className="hover:text-tlcc-gold">09035004764</a>
              </p>
              <p className="text-gray-300 text-sm">
                Naomi: <a href="tel:08087207044" className="hover:text-tlcc-gold">08087207044</a>
              </p>
            </div>
            <div>
                <h4 className="font-semibold mb-2 text-tlcc-gold">Service Times</h4>
                <p className="text-gray-300 text-sm">Mon-Wed: Rooted Prayers (9:00 PM)</p>
                <p className="text-gray-300 text-sm">Tues & Sat: Sermons (9:00 PM)</p>
                <p className="text-gray-300 text-sm">Watch Hour Prayers: 9:00 PM (fortnightly — every two weeks)</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-tlcc-green-light pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} The Light Community Church. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

