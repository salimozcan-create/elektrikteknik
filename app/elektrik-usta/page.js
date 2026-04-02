export const metadata = {
  title: 'Elektrik Tamir | 7/24 Acil Elektrikçi ve Arıza Servisi | Elektrik Teknik',
  description: 'İstanbul\'da 7/24 acil elektrik tamir, arıza giderme, sigorta değişimi, priz montajı ve tesisat yenileme. En yakın elektrikçi için hemen arayın: 0532 718 06 13',
  keywords: 'elektrik tamir, acil elektrikçi, elektrik arıza, sigorta değişimi, priz değişimi, elektrik tesisatı, elektrik ustası, 7/24 elektrikçi, elektrikçi en yakın, bana en yakın elektrikçi, yakınımda elektrikçi, gece açık elektrikçi, pazar günü açık elektrikçi, 724 elektrikçi, elektrik arıza telefon, alo elektrik arıza, elektrik arıza numarası, elektrik arıza servisi, elektrik arıza acil, elektrik açtırma, kaçak akım rölesi, sigorta atması, elektrik tesisatçı, elektrik tamircisi, yakındaki elektrikçiler, en yakin elektrikci',
  alternates: {
    canonical: 'https://www.elektrikteknik.com/elektrik-usta',
  },
}

export default function ElektrikUstaPage() {
  const services = [
    { title: 'Acil Elektrik Arıza', desc: '7/24 acil müdahale ile elektrik arızalarınıza anında çözüm', icon: '⚡' },
    { title: 'Sigorta Değişimi', desc: 'Otomat sigortalar, kaçak akım rölesi değişim ve onarımı', icon: '🔌' },
    { title: 'Priz ve Anahtar', desc: 'Priz, anahtar, panel ve tesisat elemanlarının değişimi', icon: '🔧' },
    { title: 'Aydınlatma Sistemleri', desc: 'LED aydınlatma, avize, aplik ve armatür montajı', icon: '💡' },
    { title: 'Elektrik Tesisatı', desc: 'Bina, ev ve işyeri elektrik tesisatı yenileme', icon: '🏠' },
    { title: 'Kısa Devre Sorunları', desc: 'Kısa devre tespiti, onarımı ve önleyici bakım', icon: '⚠️' }
  ]

  const districts = ['Kadıköy', 'Üsküdar', 'Beşiktaş', 'Şişli', 'Fatih', 'Bakırköy', 'Maltepe', 'Kartal', 'Pendik', 'Tuzla', 'Sultanbeyli', 'Sancaktepe']

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">7/24 Elektrik Tamir ve Arıza Servisi</h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-6">İstanbul'un Her Semtinde Acil Elektrikçi Hizmeti</p>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
            Elektrik arızası mı var? Sigorta atıyor mu? Priziniz mi çalışmıyor? 
            Uzman elektrik ustalarımızla 7/24 yanınızdayız.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+905327180613" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:shadow-lg transition-all">
              Hemen Ara: 0532 718 06 13
            </a>
            <a href="#hizmetler" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all">
              Elektrik Tamir Hizmetleri
            </a>
          </div>
        </div>
      </section>

      {/* Hizmetler Grid */}
      <section id="hizmetler" className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">Elektrik Tamir Hizmetlerimiz</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Elektrikle ilgili her türlü sorununuza profesyonel ve hızlı çözüm
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hizmet Bölgeleri */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Hizmet Verdiğimiz Bölgeler</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            İstanbul'un tüm ilçelerinde 7/24 acil elektrik tamir ve arıza servisi
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {districts.map((district, i) => (
              <span key={i} className="bg-white dark:bg-gray-900 px-4 py-2 rounded-full text-gray-700 dark:text-gray-300 text-sm shadow-sm">
                {district}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Neden Biz? */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Neden Bizi Tercih Etmelisiniz?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: '7/24 Hizmet', desc: 'Gece gündüz demeden acil elektrikçi', icon: '⏰' },
              { title: 'Usta Ekip', desc: 'Deneyimli ve sertifikalı elektrik ustaları', icon: '👨‍🔧' },
              { title: 'Hızlı Müdahale', desc: 'Ortalama 30-45 dakikada adresinizdeyiz', icon: '🚀' },
              { title: 'Garantili İşçilik', desc: 'Tüm elektrik tamir işlerimiz garantili', icon: '✅' }
            ].map((item, i) => (
              <div key={i} className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Harekete Geçirici */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Elektrik Arızanız mı Var?</h2>
          <p className="text-lg text-blue-100 mb-6">Hemen arayın, ekibimiz en kısa sürede adresinize gelsin</p>
          <a href="tel:+905327180613" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:shadow-lg transition-all">
            0532 718 06 13
          </a>
        </div>
      </section>
    </div>
  )
}