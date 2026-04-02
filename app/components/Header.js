'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeToggle from './ThemeToggle'

const navigation = [
  { name: 'Anasayfa', href: '/' },
  { name: 'Elektrik Usta', href: '/elektrik-usta' },
  { name: 'Elektrik Ürün', href: '/elektrik-urun' },
  { name: 'Güneş Enerji', href: '/gunes-enerji' },
  { name: 'Güvenlik', href: '/guvenlik' },
  { name: 'Hakkımızda', href: '/hakkimizda' },
  { name: 'İletişim', href: '/iletisim' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white dark:bg-gray-900 shadow-lg py-3' 
        : 'bg-white dark:bg-gray-900 py-4 border-b border-gray-200 dark:border-gray-800'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 shrink-0">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-xl">E</span>
            </div>
            <div>
              <span className="text-xl font-bold text-blue-600">Elektrik</span>
              <span className="text-xl font-bold text-gray-800 dark:text-white">Teknik</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`${
                  pathname === item.href
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                } px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Sağ Taraftaki Butonlar */}
          <div className="flex items-center space-x-3">
            <ThemeToggle scrolled={scrolled} />
            
            <a
              href="tel:+905327180613"
              className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 shadow-md"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="hidden sm:inline">0532 718 06 13</span>
              <span className="sm:hidden">Ara</span>
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-3 bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-100 dark:border-gray-800 overflow-hidden">
            <div className="grid grid-cols-2 gap-1 p-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`${
                    pathname === item.href 
                      ? 'bg-blue-600 text-white' 
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  } px-4 py-2.5 rounded-lg text-center text-sm font-medium transition-colors`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="border-t border-gray-100 dark:border-gray-800 pt-3 pb-2 px-3">
              <a
                href="tel:+905327180613"
                className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-3 rounded-lg text-sm font-semibold"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Hemen Ara: 0532 718 06 13
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}