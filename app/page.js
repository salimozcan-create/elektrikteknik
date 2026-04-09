import Link from 'next/link'

export const metadata = {
  title: '7/24 Acil Elektrikçi | Elektrik Arıza, Güneş Enerji ve Güvenlik Hizmetleri | Elektrik Teknik',
  description: 'İstanbul\'da 7/24 acil elektrikçi, elektrik arıza, tamir, bakım, sigorta değişimi, güneş enerji sistemleri ve güvenlik kameraları hizmeti. Hemen arayın: 0532 718 06 13.',
  keywords: 'elektrikçi, acil elektrikçi, elektrik arıza, elektrik tamiri, elektrik ustası, güneş enerji paneli, güvenlik kamera, alarm sistemi, elektrik ürünleri, elektrik tesisatı, sigorta değişimi, priz montajı, İstanbul elektrikçi',
  alternates: {
    canonical: 'https://www.elektrikteknik.com',
  },
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            7/24 Acil Elektrikçi
            <span className="block text-blue-100 mt-2">İstanbul'un Her Yerinde</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8">
            Elektrik arıza, tamir, sigorta değişimi, priz ve anahtar montajı, tesisat yenileme 
            gibi tüm elektrik sorunlarınıza profesyonel ve hızlı çözüm.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+905327180613" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all text-lg">
              Hemen Ara: 0532 718 06 13
            </a>
            <Link href="/elektrik-usta" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all">
              Elektrik Tamir Hizmetleri
            </Link>
          </div>
        </div>
      </section>

      {/* Hizmetler / Elektrik Tamir */}
      <section id="elektrik-usta" className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">Elektrik Tamir Hizmetlerimiz</h2>
          <p className="text-center text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            7/24 acil elektrikçi, sigorta değişimi, priz montajı ve tüm elektrik tamir işlerinizde yanınızdayız
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Acil Elektrik Arıza', desc: '7/24 acil müdahale ile elektrik arızalarınıza anında çözüm', icon: '⚡', href: '/elektrik-usta' },
              { title: 'Sigorta Değişimi', desc: 'Otomat sigortalar ve kaçak akım rölesi değişimi', icon: '🔌', href: '/elektrik-usta' },
              { title: 'Priz ve Anahtar', desc: 'Priz, anahtar ve tesisat elemanlarının değişimi', icon: '🔧', href: '/elektrik-usta' },
              { title: 'Elektrik Tesisatı', desc: 'Bina, ev ve işyeri elektrik tesisatı yenileme ve bakım', icon: '🏠', href: '/elektrik-usta' }
            ].map((service, i) => (
              <Link key={i} href={service.href} className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="text-4xl mb-3">{service.icon}</div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{service.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{service.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Elektrik Ürünleri */}
      <section id="elektrik-urunler" className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">Elektrik Ürünlerimiz</h2>
          <p className="text-center text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Ev ve iş yeriniz için kaliteli elektrik ürünleri: prizler, anahtarlar, kablolar ve daha fazlası
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Prizler & Anahtarlar', desc: 'Kaliteli priz ve anahtar seçenekleri', icon: '🔌', href: '/elektrik-urunler' },
              { title: 'Kablolar & Tesisat', desc: 'Güvenli kablo ve tesisat ürünleri', icon: '🧵', href: '/elektrik-urunler' },
              { title: 'Sigortalar', desc: 'Otomat ve kaçak akım sigortaları', icon: '⚡', href: '/elektrik-urunler' },
              { title: 'Enerji Tasarruf Ürünleri', desc: 'LED ampul ve enerji verimli çözümler', icon: '💡', href: '/elektrik-urunler' }
            ].map((item, i) => (
              <Link key={i} href={item.href} className="bg-white dark:bg-gray-900 rounded-xl p-6 text-center hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Güneş Enerji */}
      <section id="gunes-enerji" className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">Güneş Enerji Sistemleri</h2>
          <p className="text-center text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Ev ve iş yeriniz için güneş enerji paneli kurulumu ve enerji yönetimi hizmetleri
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Güneş Paneli Kurulumu', desc: 'Çatı ve arazi panel kurulumu', icon: '☀️', href: '/gunes-enerji' },
              { title: 'Enerji Yönetimi', desc: 'Üretim ve tüketim takibi', icon: '📊', href: '/gunes-enerji' },
              { title: 'Bakım & Onarım', desc: 'Sistem bakım ve onarım hizmetleri', icon: '🛠️', href: '/gunes-enerji' },
              { title: 'Enerji Tasarrufu', desc: 'Verimli enerji kullanımı çözümleri', icon: '💡', href: '/gunes-enerji' }
            ].map((item, i) => (
              <Link key={i} href={item.href} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Güvenlik */}
      <section id="guvenlik" className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">Güvenlik Sistemleri</h2>
          <p className="text-center text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            CCTV kamera, alarm ve akıllı ev sistemleri kurulumu ile mekanınızı güvence altına alın
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'CCTV Kameralar', desc: 'Güvenli izleme çözümleri', icon: '📹', href: '/guvenlik' },
              { title: 'Alarm Sistemleri', desc: 'Ev ve işyeri alarm sistemleri', icon: '🔔', href: '/guvenlik' },
              { title: 'Akıllı Ev', desc: 'Otomasyon ve uzaktan kontrol', icon: '🏠', href: '/guvenlik' },
              { title: 'Bakım & Destek', desc: 'Sistem kurulumu ve desteği', icon: '🛠️', href: '/guvenlik' }
            ].map((item, i) => (
              <Link key={i} href={item.href} className="bg-white dark:bg-gray-900 rounded-xl p-6 text-center hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Elektrik Arızanız mı Var? Hemen Arayın!</h2>
          <p className="text-xl text-blue-100 mb-8">7/24 acil elektrikçi hizmeti için bizi arayın</p>
          <a href="tel:+905327180613" className="inline-block bg-white text-blue-600 dark:bg-gray-900 dark:text-white px-8 py-3 rounded-lg font-semibold text-lg hover:shadow-lg transition-all">
            0532 718 06 13
          </a>
        </div>
      </section>
    </>
  )
}