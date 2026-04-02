export const metadata = {
  title: 'Elektrik Ürün | Kaliteli Elektrik Malzemeleri ve Ekipmanları',
  description: 'Elektrik malzemeleri satışı: anahtar, priz, sigorta, kablo, aydınlatma, panolar ve tüm elektrik ekipmanları. Uygun fiyat, kaliteli ürünler.',
  keywords: 'elektrik ürün, elektrik malzemeleri, anahtar, priz, sigorta, kablo, aydınlatma',
}

export default function ElektrikUrunPage() {
  const categories = [
    { title: 'Anahtar ve Prizler', items: ['Viko anahtarlar', 'Kumanda anahtarları', 'Su geçirmez prizler', 'USB\'li prizler'], icon: '🔌' },
    { title: 'Sigorta ve Otomatlar', items: ['Kaçak akım rölesi', 'Termik manyetik', 'Mini sigortalar', 'Endüstriyel otomatlar'], icon: '⚡' },
    { title: 'Kablo Çeşitleri', items: ['NYA kablo', 'TTR kablo', 'YVV kablo', 'Koaksiyel kablo'], icon: '📦' },
    { title: 'Aydınlatma', items: ['LED ampuller', 'Avizeler', 'Aplikler', 'Armatürler'], icon: '💡' },
    { title: 'Elektrik Panoları', items: ['Dağıtım panoları', 'Sigorta kutuları', 'Kompanzasyon panoları', 'Aydınlatma panoları'], icon: '📊' },
    { title: 'Topraklama Ekipmanları', items: ['Topraklama şeridi', 'Topraklama çubuğu', 'Paratoner malzemeleri', 'Topraklama test cihazları'], icon: '🔒' }
  ]

  const brands = ['Viko', 'Panasonic', 'Legrand', 'Schneider', 'Siemens', 'Philips', 'Osram', 'Nexans']

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Elektrik Ürün</h1>
          <p className="text-xl text-blue-100 mb-6">Kaliteli ve Uygun Fiyatlı Elektrik Malzemeleri</p>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            En iyi markaların elektrik malzemelerini uygun fiyatlarla kapınıza kadar getiriyoruz.
          </p>
        </div>
      </section>

      {/* Markalar */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">Çalıştığımız Markalar</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {brands.map((brand, i) => (
              <span key={i} className="bg-white dark:bg-gray-900 px-6 py-3 rounded-full shadow-md text-gray-700 dark:text-gray-300 font-medium">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Ürün Kategorileri */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Ürün Kategorileri</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, i) => (
              <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-xl transition-all">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <span className="text-blue-500">▸</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* İletişim ve Teklif Bölümü */}
      <section className="py-16 bg-blue-50 dark:bg-blue-900/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Toplu Alımlarda Fiyat Teklifi Alın</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">Projeleriniz için özel fiyatlar ve toptan satış avantajları</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/iletisim" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all">
              Hemen Teklif Al
            </a>
            <a href="tel:+905327180613" className="inline-block border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all">
              0 (532) 718 06 13
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}