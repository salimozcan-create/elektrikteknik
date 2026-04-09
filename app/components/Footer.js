import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand - Sol */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <div>
                <span className="text-xl font-bold text-white">Elektrik</span>
                <span className="text-xl font-bold text-blue-400">Teknik</span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              İstanbul Sultanbeyli'de profesyonel elektrik hizmetleri. 7/24 acil servis, tamir, bakım, 
              güneş enerji sistemleri, güvenlik kamera ve elektrik ürünleri satışı.
            </p>
          </div>

          {/* Hizmetlerimiz */}
          <div>
            <h3 className="text-lg font-bold mb-4">Hizmetlerimiz</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/elektrik-usta" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                  Elektrik Usta (Tamir & Bakım)
                </Link>
              </li>
              <li>
                <Link href="/gunes-enerji" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                  Güneş Enerji Sistemleri
                </Link>
              </li>
              <li>
                <Link href="/guvenlik" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                  Güvenlik & Kamera Sistemleri
                </Link>
              </li>
            </ul>
          </div>

          {/* Elektrik Ürünleri */}
          <div>
            <h3 className="text-lg font-bold mb-4">Elektrik Ürünleri</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/elektrik-urun" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                  Tüm Ürünler
                </Link>
              </li>
              <li>
                <Link href="/elektrik-urun/prizler" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                  Prizler
                </Link>
              </li>
              <li>
                <Link href="/elektrik-urun/ampuller" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                  Ampuller
                </Link>
              </li>
              <li>
                <Link href="/elektrik-urun/projektorler" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                  Projektörler
                </Link>
              </li>
              <li>
                <Link href="/elektrik-urun/kacak-akim-rolesi" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                  Kaçak Akım Rölesi
                </Link>
              </li>
              <li>
                <Link href="/elektrik-urun/led-paneller" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                  LED Paneller
                </Link>
              </li>
              <li>
                <Link href="/elektrik-urun/avizeler" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                  Avizeler
                </Link>
              </li>
            </ul>
          </div>

          {/* İletişim & Kurumsal */}
          <div>
            <h3 className="text-lg font-bold mb-4">İletişim & Kurumsal</h3>
            <ul className="space-y-2 mb-6">
              <li>
                <Link href="/hakkimizda" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                  İletişim
                </Link>
              </li>
              <li>
                <Link href="/site-haritasi" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                  Site Haritası
                </Link>
              </li>
            </ul>

            <div className="space-y-2 text-gray-400">
              <div className="flex items-center gap-2">
                <span>📞</span>
                <a href="tel:+905327180613" className="hover:text-white transition-colors">
                  0 (532) 718 06 13
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span>💬</span>
                <a 
                  href="https://wa.me/905327180613" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors"
                >
                  WhatsApp Destek
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span>📧</span>
                <a href="mailto:info@elektrikteknik.com" className="hover:text-white transition-colors">
                  info@elektrikteknik.com
                </a>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-800">
              <div className="flex items-center gap-2 text-green-400">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-sm font-medium">7/24 Acil Servis</span>
              </div>
            </div>
          </div>
        </div>

        {/* Alt Telif */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Elektrik Teknik. Tüm hakları saklıdır.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            İstanbul'da 7/24 acil elektrikçi, elektrik tamir, bakım, tesisat, güneş enerji, 
            güvenlik sistemleri ve elektrik ürünleri satışı.
          </p>
        </div>
      </div>
    </footer>
  )
}