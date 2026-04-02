export const metadata = {
  title: 'İletişim | Bize Ulaşın',
  description: '7/24 acil elektrik hizmeti için bize ulaşın. Telefon, WhatsApp veya form üzerinden iletişime geçebilirsiniz.',
}

export default function IletisimPage() {
  return (
    <div>
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">İletişim</h1>
          <p className="text-xl text-blue-100">7/24 Bize Ulaşın, Hemen Yardımcı Olalım</p>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Sol Taraf - İletişim Bilgileri */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">İletişim Bilgileri</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white mb-1">Telefon</p>
                    <a href="tel:+905327180613" className="text-blue-600 dark:text-blue-400 hover:underline text-lg">0 (532) 718 06 13</a>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">7/24 Acil Destek Hattı</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">💬</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white mb-1">WhatsApp</p>
                    <a href="https://wa.me/905327180613" target="_blank" rel="noopener noreferrer" className="text-green-600 dark:text-green-400 hover:underline text-lg">0 (532) 718 06 13</a>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Hızlı Destek Hattı</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white mb-1">E-posta</p>
                    <a href="mailto:info@elektrikteknik.com.tr" className="text-blue-600 dark:text-blue-400 hover:underline">info@elektrikteknik.com.tr</a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white mb-1">Adres</p>
                    <p className="text-gray-600 dark:text-gray-400">İstanbul, Türkiye</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">⏰</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white mb-1">Çalışma Saatleri</p>
                    <p className="text-gray-600 dark:text-gray-400">7/24 Hizmet</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sağ Taraf - WhatsApp Formu */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">WhatsApp'tan Yazın</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">Formu doldurun, mesajınız WhatsApp üzerinden bize iletilsin.</p>
              
              {/* Form - Sayfa yenilemeden çalışan basit form */}
              <form action="https://wa.me/905327180613" method="GET" target="_blank" className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Adınız Soyadınız</label>
                  <input
                    type="text"
                    name="text"
                    placeholder="Adınız Soyadınız"
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Telefon Numaranız</label>
                  <input
                    type="tel"
                    placeholder="0 (532) 718 06 13"
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Mesajınız</label>
                  <textarea
                    name="text"
                    placeholder="Mesajınızı yazın..."
                    rows="4"
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-700 dark:text-white"
                  ></textarea>
                </div>
                <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 shadow-md flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  </svg>
                  WhatsApp ile Gönder
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}