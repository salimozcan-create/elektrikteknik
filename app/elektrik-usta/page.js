export const metadata = {
  title: 'Elektrik Usta | 7/24 Profesyonel Elektrik Tamir ve Bakım',
  description: 'İstanbul\'da 7/24 acil elektrik tamir, arıza giderme, sigorta değişimi, tesisat yenileme ve bakım hizmetleri. Usta ekibiyle hızlı çözüm.',
  keywords: 'elektrik usta, elektrik tamir, acil elektrikçi, sigorta değişimi, elektrik arıza',
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

  const benefits = [
    { title: '7/24 Hizmet', desc: 'Acil durumlarda gece gündüz hizmetinizdeyiz', icon: '⏰' },
    { title: 'Usta Ekip', desc: 'Deneyimli ve sertifikalı elektrik ustaları', icon: '👨‍🔧' },
    { title: 'Garantili İşçilik', desc: 'Tüm işlerimiz 1 yıl garantilidir', icon: '✅' },
    { title: 'Hızlı Çözüm', desc: 'En kısa sürede sorunlarınıza müdahale', icon: '🚀' }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Elektrik Usta</h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-6">7/24 Profesyonel Elektrik Tamir ve Bakım</p>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            İstanbul'un her semtinde, lisanslı ve deneyimli ekibimizle elektrik sorunlarınıza hızlı ve kalıcı çözümler sunuyoruz.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/iletisim" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">Hemen Ara: 0 (532) 718 06 13</a>
            <a href="#hizmetler" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all">Hizmetleri İncele</a>
          </div>
        </div>
      </section>

      {/* Hizmetler Grid */}
      <section id="hizmetler" className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">Verdiğimiz Hizmetler</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Elektrikle ilgili her türlü sorununuza profesyonel çözümler
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

      {/* Neden Biz? */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Neden Elektrik Usta?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => (
              <div key={i} className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
                <div className="text-4xl mb-3">{benefit.icon}</div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hizmet Bölgeleri */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Hizmet Verdiğimiz Bölgeler</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            İstanbul'un tüm ilçelerinde 7/24 acil elektrik tamir hizmeti
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Kadıköy', 'Üsküdar', 'Beşiktaş', 'Şişli', 'Fatih', 'Bakırköy', 'Maltepe', 'Kartal', 'Pendik', 'Tuzla'].map((district, i) => (
              <span key={i} className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full text-gray-700 dark:text-gray-300 text-sm">{district}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}