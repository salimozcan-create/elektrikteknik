import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsApp from './components/Whatsapp'
import Schema from './components/Schema'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://www.elektrikteknik.com'),
  title: {
    default: 'Elektrik Teknik | 7/24 Acil Elektrikçi ve Elektrik Tamir Hizmeti',
    template: '%s | Elektrik Teknik'
  },
  description: 'İstanbul\'da 7/24 acil elektrikçi, elektrik arıza, tamir, bakım, güneş enerji ve güvenlik kamera sistemleri.',
  keywords: 'elektrikçi, 7/24 elektrikçi, acil elektrikçi, en yakın elektrikçi, elektrik arıza, elektrik tamiri',
  authors: [{ name: 'Elektrik Teknik' }],
  openGraph: {
    title: 'Elektrik Teknik | Profesyonel Elektrik ve Güvenlik Sistemleri',
    description: '7/24 elektrik tamir, güneş enerji ve güvenlik kamera sistemleri',
    url: 'https://www.elektrikteknik.com',
    siteName: 'Elektrik Teknik',
    locale: 'tr_TR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'manifest',
        url: '/site.webmanifest',
      },
    ],
  },
  manifest: '/site.webmanifest',
  themeColor: '#2563eb',
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#2563eb" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300`}>
        <Header />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
        <WhatsApp />
        <Schema />
      </body>
    </html>
  )
}