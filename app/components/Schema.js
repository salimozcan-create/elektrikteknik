import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: '7/24 Acil Elektrikçi | Elektrik Arıza ve Tamir Hizmeti | Elektrik Teknik',
  description: 'İstanbul\'da 7/24 acil elektrikçi, elektrik arıza, tamir, bakım ve sigorta değişimi. En yakın elektrikçi için hemen arayın: 0532 718 06 13. 724 elektrikçi hizmeti.',
  keywords: 'elektrikçi, 7/24 elektrikçi, acil elektrikçi, en yakın elektrikçi, elektrik arıza, elektrik tamiri, elektrik ustası, acil elektrik arıza, elektrikçi numarası, bana en yakın elektrikçi, yakınımda elektrikçi, gece açık elektrikçi, pazar günü açık elektrikçi, 724 elektrikçi, elektrik arıza telefon, alo elektrik arıza, elektrik arıza numarası, elektrik arıza servisi, elektrik arıza acil, elektrik açtırma, elektrik sigortası, kaçak akım rölesi, priz değişimi, sigorta atması, elektrik tesisatçı, elektrik tamircisi, yakındaki elektrikçiler, yakınımda elektrikçi, bana yakın elektrikçi, en yakin elektrikci',
  alternates: {
    canonical: 'https://www.elektrikteknik.com',
  },
}

export default function Home() {
  return (
    <>
      {/* Hero Section - Elektrik Tamir Odaklı */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              7/24 Acil Elektrikçi
              <span className="block text-blue-100 mt-2">İstanbul'un Her Yerinde</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8">
              Elektrik arıza, tamir, sigorta değişimi, priz ve anahtar montajı, tesisat yenileme 
              gibi tüm elektrik sorunlarınıza profesyonel ve hızlı çözüm. 7/24 hizmet.
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
        </div>
      </section>

      {/* Makale / SEO İçerik */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100 text-center">Profesyonel Elektrik Hizmetleri – İstanbul Anadolu Yakası</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4 text-justify">
            İstanbul’un Anadolu yakasında Sultanbeyli merkezli olarak hizmet veren <strong>Elektrik Teknik</strong>, 7/24 acil elektrikçi ve elektrik tamir hizmetleri sunmaktadır. Evlerde, iş yerlerinde ve ticari alanlarda yaşanan elektrik arızaları için hızlı ve güvenilir çözümler sağlıyoruz. <strong>Sigorta değişimi, priz ve anahtar montajı, elektrik tesisatı yenileme</strong> gibi tüm elektrik hizmetlerimiz alanında uzman ekiplerimiz tarafından gerçekleştirilir.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4 text-justify">
            Ayrıca, elektrik tamiratının yanı sıra <strong>elektrik ürünleri</strong> konusunda da geniş bir portföye sahibiz. Priz, anahtar, sigorta, kablo ve panel gibi ürünleri temin ederek, montaj ve bakım işlemlerini profesyonelce yapıyoruz. Böylece hem ürün temini hem de montaj tek bir noktadan sağlanmış olur.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4 text-justify">
            Enerji verimliliğine önem veren müşterilerimiz için <strong>güneş enerji sistemleri</strong> kurulum hizmeti de sunuyoruz. Güneş panelleri ve destekleyici enerji sistemleri ile hem elektrik maliyetlerini azaltıyor hem de çevre dostu çözümler üretiyoruz.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4 text-justify">
            Ev ve iş yerlerinde güvenlik de bizim önceliğimiz. Bu nedenle <strong>güvenlik kamera ve alarm sistemleri</strong> kurulumu ile alanınızı koruma altına alıyoruz. CCTV ve akıllı güvenlik çözümleri ile evinizi ve iş yerinizi 7/24 izleyebilirsiniz.
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-justify">
            Tüm bu hizmetlerimiz <strong>Sultanbeyli başta olmak üzere İstanbul’un Anadolu yakası ilçelerine hızlı müdahale</strong> avantajıyla sunulmaktadır. Acil elektrik arızalarında 30–45 dakika içerisinde adresinizde oluyoruz. Deneyimli ve sertifikalı elektrik ustalarımız, işçilik ve malzeme garantisi ile hizmet verir.
          </p>
        </div>
      </section>

      {/* İstatistikler - Hizmet Metrikleri */}
      <section className="bg-gray-50 dark:bg-gray-800 py-12 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto text-center">
            <div><div className="text-3xl font-bold text-blue-600">7/24</div><div className="text-sm text-gray-600 dark:text-gray-400">Acil Elektrikçi</div></div>
            <div><div className="text-3xl font-bold text-blue-600">30-45</div><div className="text-sm text-gray-600 dark:text-gray-400">Dakikada Müdahale</div></div>
            <div><div className="text-3xl font-bold text-blue-600">5K+</div><div className="text-sm text-gray-600 dark:text-gray-400">Başarılı Tamir</div></div>
            <div><div className="text-3xl font-bold text-blue-600">1000+</div><div className="text-sm text-gray-600 dark:text-gray-400">Mutlu Müşteri</div></div>
          </div>
        </div>
      </section>

      {/* Hizmetler */}
      <section id="hizmetler" className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">Elektrik ve Diğer Hizmetlerimiz</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">7/24 acil elektrikçi, sigorta değişimi, priz montajı, güneş enerji sistemleri ve güvenlik çözümlerimizle yanınızdayız</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[ 
              { title: 'Acil Elektrik Arıza', desc: '7/24 acil müdahale ile elektrik arızalarınıza anında çözüm', icon: '⚡', href: '/elektrik-usta' },
              { title: 'Sigorta Değişimi', desc: 'Otomat sigortalar, kaçak akım rölesi değişim ve onarımı', icon: '🔌', href: '/elektrik-usta' },
              { title: 'Priz ve Anahtar', desc: 'Priz, anahtar, panel ve tesisat elemanlarının değişimi', icon: '🔧', href: '/elektrik-usta' },
              { title: 'Elektrik Tesisatı', desc: 'Bina, ev ve işyeri elektrik tesisatı yenileme ve bakım', icon: '🏠', href: '/elektrik-usta' },
              { title: 'Güneş Enerji Sistemleri', desc: 'Güneş paneli kurulumu ve enerji sistemleri', icon: '☀️', href: '/gunes-enerji' },
              { title: 'Güvenlik Sistemleri', desc: 'CCTV, alarm ve akıllı ev sistemleri kurulumu', icon: '🛡️', href: '/guvenlik' },
              { title: 'Elektrik Ürünleri', desc: 'Priz, anahtar, sigorta ve diğer elektrik malzemeleri', icon: '📦', href: '/elektrik-urunler' },
            ].map((service, i) => (
              <Link key={i} href={service.href} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="text-4xl mb-3">{service.icon}</div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-gray-100">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{service.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Neden Biz? */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">Neden Elektrik Teknik?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[ 
              { title: '7/24 Hizmet', desc: 'Gece gündüz demeden acil elektrikçi hizmeti', icon: '⏰' },
              { title: 'Usta Ekip', desc: 'Deneyimli ve sertifikalı elektrik ustaları', icon: '👨‍🔧' },
              { title: 'Hızlı Müdahale', desc: 'En kısa sürede adresinize geliyoruz', icon: '🚀' },
              { title: 'Garantili İşçilik', desc: 'Tüm elektrik tamir işlerimiz garantilidir', icon: '✅' }
            ].map((item, i) => (
              <div key={i} className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
                <div className="text-5xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Harekete Geçirici Mesaj */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Elektrik Arızanız mı Var? Hemen Arayın!</h2>
          <p className="text-xl text-blue-100 mb-8">7/24 acil elektrikçi hizmeti için bizi arayın</p>
          <a href="tel:+905327180613" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:shadow-lg transition-all">
            0532 718 06 13
          </a>
        </div>
      </section>
    </>
  )
}