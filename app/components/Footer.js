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
              İstanbul Sultanbeyli'de profesyonel elektrik hizmetleri. 7/24 acil servis, tamir, bakım ve güneş enerji sistemleri.
            </p>
          </div>

          {/* Hızlı Bağlantılar - Sadece 4 Madde */}
          <div>
            <h3 className="text-lg font-bold mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/elektrik-usta" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                  Elektrik Usta
                </Link>
              </li>
              <li>
                <Link href="/elektrik-urun" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                  Elektrik Ürün
                </Link>
              </li>
              <li>
                <Link href="/gunes-enerji" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                  Güneş Enerji
                </Link>
              </li>
              <li>
                <Link href="/guvenlik" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                  Güvenlik
                </Link>
              </li>
            </ul>
          </div>

          {/* İletişim - Orta Sağ */}
          <div>
            <h3 className="text-lg font-bold mb-4">İletişim</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-3">
                <span className="text-blue-400 text-xl">📞</span>
                <a href="tel:+905327180613" className="hover:text-white transition-colors">
                  0 (532) 718 06 13
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-400 text-xl">💬</span>
                <a 
                  href="https://wa.me/905327180613" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors"
                >
                  0 (532) 718 06 13 (WhatsApp)
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-400 text-xl">📧</span>
                <a href="mailto:info@elektrikteknik.com" className="hover:text-white transition-colors">
                  info@elektrikteknik.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-400 text-xl">📍</span>
                <span className="text-sm">A.yesevi Mh. Mekke Cd. No:9 Sultanbeyli İstanbul</span>
              </li>
            </ul>
          </div>

          {/* Çalışma Saatleri - Sağ */}
          <div>
            <h3 className="text-lg font-bold mb-4">Çalışma Saatleri</h3>
            <div className="space-y-2 text-gray-400">
              <div className="flex justify-between">
                <span>Hafta İçi:</span>
                <span className="text-white font-semibold">7/24</span>
              </div>
              <div className="flex justify-between">
                <span>Cumartesi:</span>
                <span className="text-white font-semibold">7/24</span>
              </div>
              <div className="flex justify-between">
                <span>Pazar:</span>
                <span className="text-white font-semibold">7/24</span>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-800">
                <div className="flex items-center gap-2 text-green-400">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-sm">Acil Durum: 7/24 Hizmet</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Alt Telif */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Elektrik Teknik. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}