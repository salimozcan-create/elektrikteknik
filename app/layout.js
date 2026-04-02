import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsApp from './components/Whatsapp'
import Schema from './components/Schema'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://elektrikteknik.com.tr'),
  title: {
    default: 'Elektrik Teknik | Profesyonel Elektrik ve Güvenlik Sistemleri',
    template: '%s | Elektrik Teknik'
  },
  description: 'İstanbul\'da 7/24 elektrik tamir, güneş enerji sistemleri ve güvenlik kamera sistemleri. Profesyonel hizmet.',
  keywords: 'elektrikçi, elektrik tamir, güneş enerji, güvenlik kamera sistemleri',
  authors: [{ name: 'Elektrik Teknik' }],
  openGraph: {
    title: 'Elektrik Teknik | Profesyonel Elektrik ve Güvenlik Sistemleri',
    description: '7/24 elektrik tamir, güneş enerji ve güvenlik kamera sistemleri',
    url: 'https://elektrikteknik.com.tr',
    siteName: 'Elektrik Teknik',
    locale: 'tr_TR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300`}>
        <Header />
        {/* pt-20 ile header'ın altından başlamasını sağladık */}
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