'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

const navigation = [
  { name: 'Anasayfa', href: '/' },
  { name: 'Elektrik Usta', href: '/elektrik-usta' },
  { 
    name: 'Elektrik Ürün', 
    href: '/elektrik-urun',
    submenu: [
      { name: 'Prizler', href: '/elektrik-urun/prizler' },
      { name: 'Ampuller', href: '/elektrik-urun/ampuller' },
      { name: 'Projektörler', href: '/elektrik-urun/projektorler' },
      { name: 'Kaçak Akım Rölesi', href: '/elektrik-urun/kacak-akim-rolesi' },
      { name: 'LED Paneller', href: '/elektrik-urun/led-paneller' },
      { name: 'Avizeler', href: '/elektrik-urun/avizeler' },
      { name: 'Şalter & Sigorta', href: '/elektrik-urun/salter-ve-sigortalar' },
      { name: 'Aplik & Armatür', href: '/elektrik-urun/aplik-ve-armaturler' },
    ]
  },
  { name: 'Güneş Enerji', href: '/gunes-enerji' },
  { name: 'Güvenlik', href: '/guvenlik' },
  { name: 'Hakkımızda', href: '/hakkimizda' },
  { name: 'İletişim', href: '/iletisim' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState({});
  const pathname = usePathname();
  const submenuTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  const handleMouseEnter = (name) => {
    if (submenuTimeout.current) {
      clearTimeout(submenuTimeout.current);
      submenuTimeout.current = null;
    }
    setActiveSubmenu(name);
  };

  const handleMouseLeave = () => {
    submenuTimeout.current = setTimeout(() => {
      setActiveSubmenu(null);
    }, 150);
  };

  const handleSubmenuClick = () => {
    setActiveSubmenu(null);
  };

  const toggleMobileSubmenu = (name) => {
    setMobileExpanded(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileExpanded({});
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white dark:bg-gray-900 shadow-lg py-2'
          : 'bg-white dark:bg-gray-900 py-3 border-b border-gray-200 dark:border-gray-800'
      }`}
    >
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-1 sm:space-x-2 shrink-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-base sm:text-xl">E</span>
            </div>
            <div className="flex items-baseline">
              <span className="text-xs xs:text-sm sm:text-base font-bold text-blue-600">Elektrik</span>
              <span className="text-xs xs:text-sm sm:text-base font-bold text-gray-800 dark:text-white"> Teknik</span>
            </div>
          </Link>

          {/* Masaüstü Menüsü */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navigation.map((item) => (
              <div 
                key={item.name} 
                className="relative"
                onMouseEnter={() => item.submenu && handleMouseEnter(item.name)}
                onMouseLeave={() => item.submenu && handleMouseLeave()}
              >
                <Link
                  href={item.href}
                  className={`${
                    pathname === item.href || (item.submenu && pathname.startsWith(item.href))
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  } px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap flex items-center gap-1`}
                  onClick={() => item.submenu && setActiveSubmenu(null)}
                >
                  {item.name}
                  {item.submenu && (
                    <svg 
                      className={`w-3 h-3 transition-transform ${activeSubmenu === item.name ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
                
                {/* Alt Menü - Sadece Elektrik Ürün için */}
                {item.submenu && activeSubmenu === item.name && (
                  <div 
                    className="absolute top-full left-0 mt-1 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 py-2 min-w-[220px] z-50"
                    onMouseEnter={() => handleMouseEnter(item.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        onClick={handleSubmenuClick}
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Sağ Taraftaki Butonlar */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <ThemeToggle scrolled={scrolled} />

            <a
              href="tel:+905327180613"
              className="flex items-center space-x-1 bg-blue-600 hover:bg-blue-700 text-white px-2 sm:px-3 py-1.5 rounded-lg font-medium transition-all duration-300 shadow-md text-sm"
            >
              <svg
                className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="hidden sm:inline text-sm">0532 718 06 13</span>
              <span className="sm:hidden text-xs">Ara</span>
            </a>

            {/* Mobil Menü Butonu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Menüyü aç/kapat"
            >
              <svg
                className="h-5 w-5 sm:h-6 sm:w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobil Menü */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[57px] bottom-0 bg-white dark:bg-gray-900 z-40 overflow-y-auto">
            <div className="flex flex-col p-4 space-y-1">
              {navigation.map((item) => (
                <div key={item.name} className="border-b border-gray-100 dark:border-gray-800 last:border-0">
                  {item.submenu ? (
                    <>
                      <button
                        onClick={() => toggleMobileSubmenu(item.name)}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                          pathname.startsWith(item.href)
                            ? 'bg-blue-600 text-white'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                        }`}
                      >
                        <span>{item.name}</span>
                        <svg
                          className={`w-5 h-5 transition-transform ${mobileExpanded[item.name] ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {mobileExpanded[item.name] && (
                        <div className="ml-4 mt-1 mb-2 space-y-1 border-l-2 border-blue-200 dark:border-blue-800 pl-4">
                          <Link
                            href={item.href}
                            className="block px-4 py-2 rounded-lg text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Tümünü Gör ({item.name})
                          </Link>
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-4 py-2 rounded-lg text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                        pathname === item.href
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              <div className="pt-4 mt-2 border-t border-gray-100 dark:border-gray-800">
                <a
                  href="tel:+905327180613"
                  className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-3 rounded-xl text-base font-semibold"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  Hemen Ara: 0532 718 06 13
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}