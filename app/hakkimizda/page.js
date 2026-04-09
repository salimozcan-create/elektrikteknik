export const metadata = {
  title: 'Hakkımızda | 7/24 Acil Elektrikçi ve Elektrik Arıza Servisi | Elektrik Teknik',
  description: 'Elektrik Teknik olarak 10+ yıllık tecrübemizle İstanbul\'da 7/24 acil elektrikçi, elektrik arıza, tamir, bakım ve tesisat hizmetleri sunuyoruz. Sertifikalı ustalar, 2 yıl garanti.',
  keywords: [
    'elektrikçi hakkımızda', 'elektrik teknisyeni', 'elektrik ustası',
    'elektrik firması', 'elektrik teknik', 'İstanbul elektrikçi',
    '7/24 elektrikçi', 'acil elektrikçi', 'sertifikalı elektrikçi',
    'Sultanbeyli elektrikçi', 'güvenilir elektrikçi', 'profesyonel elektrikçi'
  ].join(', '),
  alternates: {
    canonical: 'https://elektrikteknik.com/hakkimizda/',
  },
  openGraph: {
    title: 'Hakkımızda | Elektrik Teknik - 7/24 Acil Elektrikçi',
    description: '10+ yıllık tecrübe, sertifikalı ustalar, 2 yıl garanti. İstanbul\'da güvenilir elektrik hizmeti.',
    url: 'https://elektrikteknik.com/hakkimizda/',
    siteName: 'Elektrik Teknik',
    locale: 'tr_TR',
    type: 'website',
  },
}

export default function HakkimizdaPage() {
  const degerlerimiz = [
    { baslik: 'Güvenilirlik', aciklama: 'Verdiğimiz sözleri tutar, işimizi zamanında ve eksiksiz teslim ederiz.', ikon: '🤝' },
    { baslik: 'Kalite', aciklama: 'Orijinal malzeme kullanır, işçiliğimizi 2 yıl garanti altına alırız.', ikon: '⭐' },
    { baslik: 'Hız', aciklama: '7/24 acil servis, 30-45 dakikada müdahale ile yanınızdayız.', ikon: '⚡' },
    { baslik: 'Şeffaflık', aciklama: 'İşe başlamadan önce net fiyat teklifi sunar, sürpriz maliyet çıkarmayız.', ikon: '📋' }
  ]

  const istatistikler = [
    { deger: '10+', etiket: 'Yıllık Tecrübe' },
    { deger: '10.000+', etiket: 'Başarılı Tamir' },
    { deger: '20+', etiket: 'Uzman Personel' },
    { deger: '50.000+', etiket: 'Mutlu Müşteri' }
  ]

  const sertifikalar = [
    'Elektrik Mühendisleri Odası (EMO) Üyeliği',
    'ISO 9001:2015 Kalite Yönetim Sistemi',
    'Yüksek Gerilim İşletme Sorumluluğu Belgesi',
    'İç Tesisat Yetki Belgesi',
    'Topraklama Ölçüm Yetki Belgesi'
  ]

  const markalar = [
    'Siemens', 'Schneider Electric', 'Legrand', 'Viko', 'Panasonic',
    'Philips', 'Osram', 'CW Enerji', 'Lexron', 'Hikvision', 'Dahua'
  ]

  // Schema Markup
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Elektrik Teknik Hakkımızda",
    "description": "İstanbul'da 10+ yıllık tecrübeyle 7/24 acil elektrikçi, elektrik arıza, tamir, bakım ve tesisat hizmetleri sunan profesyonel elektrik firması.",
    "url": "https://elektrikteknik.com/hakkimizda/",
    "mainEntity": {
      "@type": "ElectricalContractor",
      "name": "Elektrik Teknik",
      "foundingDate": "2014",
      "founder": {
        "@type": "Person",
        "name": "Elektrik Teknik Kurucu"
      },
      "employee": {
        "@type": "QuantitativeValue",
        "value": "20+"
      },
      "areaServed": "İstanbul",
      "award": "ISO 9001:2015 Sertifikalı",
      "hasCredential": sertifikalar.map(sert => ({
        "@type": "EducationalOccupationalCredential",
        "name": sert
      }))
    }
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ElectricalContractor",
    "name": "Elektrik Teknik",
    "alternateName": ["Elektrik Teknik Elektrikçi", "7/24 Acil Elektrikçi"],
    "description": "İstanbul'da 10+ yıllık tecrübeyle 7/24 acil elektrikçi, elektrik arıza, tamir, bakım ve tesisat hizmetleri.",
    "url": "https://elektrikteknik.com",
    "logo": "https://elektrikteknik.com/logo.png",
    "foundingDate": "2014",
    "founders": [
      {
        "@type": "Person",
        "name": "Elektrik Teknik Kurucu"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "A.yesevi Mh. Mekke Cd. No:9",
      "addressLocality": "Sultanbeyli",
      "addressRegion": "İstanbul",
      "postalCode": "34935",
      "addressCountry": "TR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+905327180613",
      "contactType": "customer service",
      "areaServed": "TR",
      "availableLanguage": "Turkish",
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    },
    "sameAs": [
      "https://www.instagram.com/elektrikteknik",
      "https://www.facebook.com/elektrikteknik",
      "https://wa.me/905327180613"
    ]
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Anasayfa",
        "item": "https://elektrikteknik.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Hakkımızda",
        "item": "https://elektrikteknik.com/hakkimizda/"
      }
    ]
  }

  return (
    <>
      {/* Schema Markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Hakkımızda</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            10+ Yıllık Tecrübe ile İstanbul'da Güvenilir Elektrik Hizmeti
          </p>
        </div>
      </section>

      {/* İstatistikler */}
      <section className="py-12 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {istatistikler.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {stat.deger}
                </div>
                <div className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium">
                  {stat.etiket}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Biz Kimiz? */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Biz Kimiz?</h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  <strong>Elektrik Teknik</strong>, 2014 yılında İstanbul Sultanbeyli'de kurulmuş, 
                  elektrik sektöründe güvenilir ve kaliteli hizmet anlayışıyla faaliyet gösteren 
                  profesyonel bir elektrik firmasıdır.
                </p>
                <p>
                  Kurulduğumuz günden bu yana <strong>7/24 acil elektrikçi</strong>, elektrik arıza, 
                  tamir, bakım, tesisat, güneş enerji sistemleri ve güvenlik kamera sistemleri 
                  alanlarında binlerce müşteriye hizmet verdik.
                </p>
                <p>
                  Sertifikalı ve deneyimli ustalarımızla, en yeni teknolojileri takip ederek 
                  müşterilerimize en iyi hizmeti sunmak için çalışıyoruz. Tüm işlerimiz 
                  <strong> 2 yıl işçilik garantisi</strong> altındadır.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">📍 Hizmet Bölgemiz</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Sultanbeyli merkezli olarak İstanbul'un Anadolu Yakası başta olmak üzere tüm ilçelerine 
                <strong> 7/24 acil elektrik arıza</strong> ve tamir hizmeti vermekteyiz.
              </p>
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300 mb-2">
                <span className="text-blue-600 text-xl">📍</span>
                <span>A.yesevi Mh. Mekke Cd. No:9 Sultanbeyli / İstanbul</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300 mb-2">
                <span className="text-blue-600 text-xl">📞</span>
                <a href="tel:+905327180613" className="hover:text-blue-600">0532 718 06 13</a>
              </div>
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <span className="text-blue-600 text-xl">✉️</span>
                <a href="mailto:info@elektrikteknik.com" className="hover:text-blue-600">info@elektrikteknik.com</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vizyon & Misyon */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg">
              <div className="text-4xl mb-4">🎯</div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Vizyonumuz</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Türkiye'nin lider elektrik hizmetleri markası olmak, yenilikçi çözümlerle 
                sektöre yön vermek. Güneş enerjisi, akıllı ev sistemleri ve yenilenebilir 
                enerji alanlarında öncü firma olmayı hedefliyoruz.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg">
              <div className="text-4xl mb-4">💡</div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Misyonumuz</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Müşterilerimize en kaliteli, en güvenli ve en uygun fiyatlı elektrik 
                hizmetlerini sunmak. 7/24 kesintisiz destek anlayışıyla, elektrik arıza 
                ve tamir işlerinde güvenilir çözüm ortağı olmak.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Değerlerimiz */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Değerlerimiz
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {degerlerimiz.map((item, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center hover:shadow-lg transition-all">
                <div className="text-5xl mb-4">{item.ikon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{item.baslik}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{item.aciklama}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sertifikalar ve Yetkiler */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
            Sertifikalarımız ve Yetkilerimiz
          </h2>
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
            <ul className="grid sm:grid-cols-2 gap-4">
              {sertifikalar.map((sertifika, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <span className="text-green-600 text-xl">✅</span>
                  {sertifika}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Çalıştığımız Markalar */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Çalıştığımız Markalar
          </h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {markalar.map((marka, index) => (
              <span key={index} className="bg-gray-100 dark:bg-gray-800 px-6 py-3 rounded-full text-gray-700 dark:text-gray-300 font-medium shadow-sm">
                {marka}
              </span>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-8">
            Orijinal ve garantili ürünler kullanarak işlerimizi yapıyoruz.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Bize Ulaşın, Hemen Yardımcı Olalım</h2>
          <p className="text-xl text-blue-100 mb-8">
            7/24 acil elektrikçi hizmetimizle her zaman yanınızdayız.
          </p>
          <a href="tel:+905327180613" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:shadow-lg transition-all">
            Hemen Ara: 0532 718 06 13
          </a>
        </div>
      </section>
    </>
  )
}