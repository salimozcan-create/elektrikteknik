'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

// Sayfa isimleri ve route eşleştirmeleri
const routeNames = {
  '/': 'Anasayfa',
  '/elektrik-usta': 'Elektrik Usta',
  '/elektrik-urun': 'Elektrik Ürün',
  '/elektrik-urun/prizler': 'Prizler',
  '/elektrik-urun/ampuller': 'Ampuller',
  '/elektrik-urun/projektorler': 'Projektörler',
  '/elektrik-urun/kacak-akim-rolesi': 'Kaçak Akım Rölesi',
  '/elektrik-urun/led-paneller': 'LED Paneller',
  '/elektrik-urun/avizeler': 'Avizeler',
  '/elektrik-urun/salter-ve-sigortalar': 'Şalter & Sigortalar',
  '/elektrik-urun/aplik-ve-armaturler': 'Aplik & Armatürler',
  '/gunes-enerji': 'Güneş Enerji',
  '/guvenlik': 'Güvenlik',
  '/hakkimizda': 'Hakkımızda',
  '/iletisim': 'İletişim',
  '/site-haritasi': 'Site Haritası',
}

export default function Breadcrumb() {
  const pathname = usePathname()
  
  // Anasayfada breadcrumb gösterme
  if (pathname === '/') {
    return null
  }

  // URL'yi parçalara ayır
  const pathSegments = pathname.split('/').filter(segment => segment !== '')
  
  // Breadcrumb öğelerini oluştur
  const breadcrumbs = []
  let currentPath = ''
  
  // Anasayfa her zaman ilk öğe
  breadcrumbs.push({
    name: 'Anasayfa',
    href: '/',
    current: false
  })
  
  // Alt sayfaları ekle
  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`
    const isLast = index === pathSegments.length - 1
    
    breadcrumbs.push({
      name: routeNames[currentPath] || decodeURIComponent(segment).replace(/-/g, ' '),
      href: currentPath,
      current: isLast
    })
  })

  // Schema markup için
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://elektrikteknik.com${item.href}`
    }))
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      <nav aria-label="Breadcrumb" className="bg-gray-100 dark:bg-gray-800 py-3 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <ol className="flex flex-wrap items-center gap-1 text-sm">
            {breadcrumbs.map((item, index) => (
              <li key={item.href} className="flex items-center">
                {index > 0 && (
                  <svg 
                    className="w-4 h-4 mx-1 text-gray-400 dark:text-gray-500 flex-shrink-0" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
                
                {item.current ? (
                  <span className="text-gray-900 dark:text-white font-medium truncate max-w-[200px] sm:max-w-[300px]">
                    {item.name}
                  </span>
                ) : (
                  <Link 
                    href={item.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors truncate max-w-[200px] sm:max-w-[300px]"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  )
}