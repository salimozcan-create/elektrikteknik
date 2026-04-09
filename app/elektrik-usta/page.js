import Link from 'next/link'

export const metadata = {
  title: '7/24 Acil Elektrikçi | Elektrik Arıza, Tamir, Bakım, Tesisat | Elektrik Teknik',
  description: 'İstanbul\'da 7/24 acil elektrikçi, elektrik arıza, tamir, bakım ve tesisat hizmetleri. 30 dakikada müdahale. Sigorta değişimi, priz montajı, kaçak akım rölesi. En yakın elektrikçi için hemen ara: 0532 718 06 13.',
  keywords: [
    'elektrik', 'elektrik arıza', 'elektrikçi', 'acil elektrikçi', '7/24 elektrikçi',
    '724 elektrikçi', 'elektrik arıza telefon', 'elektrik arıza numarası',
    'en yakın elektrikçi', 'elektrik tamircisi', 'elektrik ustası', 'elektrik tesisatçı',
    'elektrik tamiri', 'elektrik bakım', 'elektrik servisi', 'elektrik arıza servisi',
    'bana en yakın elektrikçi', 'yakınımda elektrikçi', 'nöbetçi elektrikçi',
    'gece açık elektrikçi', 'pazar günü açık elektrikçi', '24 saat elektrikçi',
    'elektrik açtırma', 'sigorta değişimi', 'priz değişimi', 'kaçak akım rölesi',
    'elektrik tesisatı', 'ev elektrik tesisatı', 'işyeri elektrik tesisatı',
    'İstanbul elektrikçi', 'Anadolu Yakası elektrikçi', 'Sultanbeyli elektrikçi'
  ].join(', '),
  alternates: {
    canonical: 'https://elektrikteknik.com/',
  },
  openGraph: {
    title: '7/24 Acil Elektrikçi | Elektrik Arıza ve Tamir | Elektrik Teknik',
    description: 'İstanbul\'da 7/24 acil elektrikçi, elektrik arıza ve tamir hizmetleri. 30 dakikada müdahale.',
    url: 'https://elektrikteknik.com/',
    siteName: 'Elektrik Teknik',
    locale: 'tr_TR',
    type: 'website',
  },
}

export default function Home() {
  // Ana Hizmetler
  const anaHizmetler = [
    {
      id: 1,
      baslik: '7/24 Acil Elektrik Arıza',
      aciklama: 'Gece gündüz, hafta sonu ve resmi tatillerde 30-45 dakikada acil müdahale.',
      ikon: '⚡',
      href: '/elektrik-usta'
    },
    {
      id: 2,
      baslik: 'Sigorta Değişimi',
      aciklama: 'Atan sigortalar, termik şalter ve kaçak akım rölesi değişimi ve onarımı.',
      ikon: '🔌',
      href: '/elektrik-usta'
    },
    {
      id: 3,
      baslik: 'Priz ve Anahtar Tamiri',
      aciklama: 'Arızalı prizler, anahtarlar, topraklı priz ve USB\'li priz montajı.',
      ikon: '🔧',
      href: '/elektrik-usta'
    },
    {
      id: 4,
      baslik: 'Elektrik Tesisatı',
      aciklama: 'Ev, işyeri ve bina komple elektrik tesisatı yenileme ve bakım.',
      ikon: '🏠',
      href: '/elektrik-usta'
    },
    {
      id: 5,
      baslik: 'Güneş Enerji Sistemleri',
      aciklama: 'Güneş paneli kurulumu, inverter montajı ve enerji depolama çözümleri.',
      ikon: '☀️',
      href: '/gunes-enerji'
    },
    {
      id: 6,
      baslik: 'Güvenlik Sistemleri',
      aciklama: 'CCTV kamera, hırsız alarmı ve akıllı ev güvenlik çözümleri.',
      ikon: '🛡️',
      href: '/guvenlik'
    },
    {
      id: 7,
      baslik: 'Elektrik Ürünleri',
      aciklama: 'Kaliteli elektrik malzemeleri; anahtar, priz, sigorta, kablo ve aydınlatma.',
      ikon: '📦',
      href: '/elektrik-urun'
    },
    {
      id: 8,
      baslik: 'Aydınlatma Sistemleri',
      aciklama: 'LED dönüşümü, avize montajı, bahçe ve dış cephe aydınlatma.',
      ikon: '💡',
      href: '/elektrik-usta'
    }
  ]

  const istatistikler = [
    { deger: '7/24', etiket: 'Acil Servis' },
    { deger: '30-45', etiket: 'Dakikada Müdahale' },
    { deger: '10+', etiket: 'Yıllık Tecrübe' },
    { deger: '10.000+', etiket: 'Başarılı Tamir' }
  ]

  const nedenBiz = [
    { baslik: '7/24 Acil Hizmet', aciklama: 'Gece 03:00\'te bile elektrik arızanıza 30-45 dakikada müdahale ediyoruz.', ikon: '⏰' },
    { baslik: 'Sertifikalı Ustalar', aciklama: 'EMO onaylı, deneyimli, sigortalı ve profesyonel elektrik ustaları.', ikon: '👨‍🔧' },
    { baslik: '2 Yıl Garanti', aciklama: 'Tüm elektrik tamir, bakım ve tesisat işlerimiz 2 yıl garantilidir.', ikon: '✅' },
    { baslik: 'Ücretsiz Keşif', aciklama: 'Büyük çaplı işlerde ücretsiz keşif ve fiyat teklifi hizmeti.', ikon: '💰' }
  ]

  const hizmetBolgesi = [
    'Sultanbeyli', 'Kadıköy', 'Üsküdar', 'Beşiktaş', 'Şişli', 'Fatih',
    'Bakırköy', 'Maltepe', 'Kartal', 'Pendik', 'Tuzla', 'Sancaktepe',
    'Ataşehir', 'Beylikdüzü', 'Esenyurt', 'Bağcılar', 'Ümraniye', 'Çekmeköy'
  ]

  const sikSorulanSorular = [
    {
      soru: '7/24 acil elektrikçi hizmeti veriyor musunuz?',
      cevap: 'Evet, haftanın 7 günü 24 saat acil elektrik arıza ve tamir hizmeti veriyoruz. Gece, gündüz, hafta sonu ve resmi tatillerde mobil ekiplerimiz her zaman hazırdır.'
    },
    {
      soru: 'Elektrik arızası için ne kadar sürede geliyorsunuz?',
      cevap: 'İstanbul genelinde ortalama 30-45 dakika içinde müdahale ediyoruz. Sultanbeyli ve Anadolu Yakası ilçelerinde bu süre 20-30 dakikaya kadar düşmektedir.'
    },
    {
      soru: 'En yakın elektrikçi nasıl bulunur?',
      cevap: 'İstanbul\'un birçok ilçesinde konumlanmış mobil ekiplerimiz sayesinde size en yakın elektrikçiyi anında yönlendiriyoruz. "Bana en yakın elektrikçi" aramalarınızda bizi tercih edebilirsiniz.'
    },
    {
      soru: 'Elektrik tamir işleriniz garantili mi?',
      cevap: 'Evet, tüm elektrik tamir, bakım ve tesisat işlerimiz 2 yıl işçilik garantilidir. Kullanılan malzemeler üretici firma garantisi altındadır.'
    },
    {
      soru: 'Sigorta neden sürekli atar?',
      cevap: 'Sigorta atmasının başlıca nedenleri: devreye aşırı yük binmesi, kısa devre, kaçak akım veya eskiyen tesisattır. Sigorta sürekli atıyorsa mutlaka uzman elektrikçi çağırın.'
    },
    {
      soru: 'Kaçak akım rölesi taktırmak zorunlu mu?',
      cevap: 'Evet, 2004 yılından sonra yapılan tüm binalarda kaçak akım rölesi zorunludur. Eski binalarda da hayati güvenlik için mutlaka taktırılması önerilir.'
    }
  ]

  // Schema Markup
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ElectricalContractor",
    "name": "Elektrik Teknik",
    "alternateName": ["Elektrik Teknik Elektrikçi", "7/24 Acil Elektrikçi", "724 Elektrikçi"],
    "description": "İstanbul'da 7/24 acil elektrikçi, elektrik arıza, tamir, bakım ve tesisat hizmetleri. Sigorta değişimi, priz montajı, kaçak akım rölesi.",
    "url": "https://elektrikteknik.com",
    "telephone": "+905327180613",
    "email": "info@elektrikteknik.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "A.yesevi Mh. Mekke Cd. No:9",
      "addressLocality": "Sultanbeyli",
      "addressRegion": "İstanbul",
      "postalCode": "34935",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "40.9786",
      "longitude": "29.2708"
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "40.9786",
        "longitude": "29.2708"
      },
      "geoRadius": "50000"
    },
    "priceRange": "₺₺",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/elektrikteknik",
      "https://www.facebook.com/elektrikteknik",
      "https://wa.me/905327180613"
    ]
  }

  const emergencyServiceSchema = {
    "@context": "https://schema.org",
    "@type": "EmergencyService",
    "name": "7/24 Acil Elektrikçi Servisi",
    "description": "İstanbul'da 7/24 acil elektrik arıza ve tamir hizmeti. 30-45 dakikada müdahale.",
    "provider": {
      "@type": "ElectricalContractor",
      "name": "Elektrik Teknik"
    },
    "areaServed": "İstanbul",
    "availableLanguage": "Turkish",
    "telephone": "+905327180613"
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": sikSorulanSorular.map(item => ({
      "@type": "Question",
      "name": item.soru,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.cevap
      }
    }))
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
      }
    ]
  }

  return (
    <>
      {/* Schema Markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(emergencyServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 py-16 md:py-28 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Acil Servis Badge */}
            <div className="inline-flex items-center gap-2 bg-red-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-pulse">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              7/24 ACİL ELEKTRİKÇİ - 30 DAKİKADA MÜDAHALE
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
              7/24 Acil Elektrikçi
              <span className="block text-2xl md:text-4xl text-blue-100 mt-4 font-semibold">
                İstanbul'un Her Yerinde Elektrik Arıza Servisi
              </span>
            </h1>

            <p className="text-lg md:text-xl text-blue-50 mb-8 max-w-3xl mx-auto leading-relaxed">
              <strong className="text-white">Elektrik arıza, sigorta değişimi, priz montajı, tesisat yenileme</strong> ve daha fazlası için 
              <strong className="text-white"> 7/24 acil elektrikçi</strong> hizmeti. 
              <strong className="text-white"> 30-45 dakikada müdahale</strong>, 
              <strong className="text-white"> 2 yıl garantili</strong> profesyonel çözümler.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:+905327180613" className="group bg-white text-blue-700 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all hover:scale-105 flex items-center gap-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Hemen Ara: 0532 718 06 13
              </a>
              <Link href="/elektrik-usta" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-700 transition-all">
                Elektrik Tamir Hizmetleri
              </Link>
            </div>

            {/* Güven Rozetleri */}
            <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm text-blue-100">
              <span className="flex items-center gap-1">✅ 2 Yıl Garanti</span>
              <span className="flex items-center gap-1">👨‍🔧 Sertifikalı Ustalar</span>
              <span className="flex items-center gap-1">💰 Ücretsiz Keşif</span>
              <span className="flex items-center gap-1">🚀 30-45 Dakikada Müdahale</span>
            </div>
          </div>
        </div>
      </section>

      {/* İstatistikler */}
      <section className="bg-white dark:bg-gray-900 py-12 border-b border-gray-200 dark:border-gray-800">
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

      {/* Ana Hizmetler */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Profesyonel Elektrik Hizmetlerimiz
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              7/24 acil elektrik arıza, tamir, bakım, tesisat, güneş enerji ve güvenlik sistemleri hizmetleri.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {anaHizmetler.map((hizmet) => (
              <Link key={hizmet.id} href={hizmet.href} className="group bg-white dark:bg-gray-900 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {hizmet.ikon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {hizmet.baslik}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {hizmet.aciklama}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Neden Biz? */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Neden Elektrik Teknik?
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {nedenBiz.map((item, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center hover:shadow-lg transition-all">
                <div className="text-5xl mb-4">{item.ikon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{item.baslik}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{item.aciklama}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO İçerik Makalesi */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 max-w-5xl">
          <article className="prose prose-lg dark:prose-invert mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
              İstanbul'da 7/24 Acil Elektrikçi - Elektrik Arıza ve Tamir Hizmetleri
            </h2>
            
            <div className="space-y-6 text-gray-700 dark:text-gray-300 text-justify">
              <p>
                <strong>Elektrik Teknik</strong> olarak İstanbul genelinde <strong>7/24 acil elektrikçi</strong>, 
                <strong> elektrik arıza</strong>, tamir, bakım ve tesisat hizmetleri sunuyoruz. 
                Sultanbeyli merkezli firmamız, Anadolu Yakası başta olmak üzere tüm İstanbul'da 
                profesyonel elektrik çözümleri ile müşterilerimizin yanındadır. 
                <strong> Elektrik arıza telefon</strong> ve <strong>elektrik arıza numarası</strong> aramalarınızda 
                bize ulaşabilir, <strong>en yakın elektrikçi</strong> hizmetimizden faydalanabilirsiniz.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">
                7/24 Acil Elektrik Arıza Servisi
              </h3>
              <p>
                Elektrik arızaları her an karşınıza çıkabilir. Gece yarısı sigorta atması, 
                prize elektrik gelmemesi, kısa devre veya şalter indirmeme gibi sorunlar acil 
                müdahale gerektirir. <strong>7/24 hizmet veren mobil ekiplerimiz</strong>, İstanbul'un her 
                noktasına ortalama 30-45 dakika içinde ulaşarak sorununuzu güvenle çözer. 
                "Bana en yakın elektrikçi", "yakınımda elektrikçi" veya "24 saat açık elektrikçi" 
                aramalarınızda bizi tercih edebilirsiniz.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">
                Elektrik Tamir ve Bakım Hizmetlerimiz
              </h3>
              <p>
                <strong>Sigorta değişimi, priz ve anahtar tamiri, kısa devre tespiti, aydınlatma arızaları, 
                elektrik panosu onarımı</strong> gibi tüm elektrik tamir işlerinizde sertifikalı ustalarımızla 
                hizmet vermekteyiz. Tüm tamir işlerimiz <strong>2 yıl işçilik garantilidir</strong>. 
                <strong>Kaçak akım rölesi</strong> montajı, topraklama ölçümü ve termal kamera ile tesisat 
                kontrolü gibi özel hizmetler de sunuyoruz.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">
                Komple Elektrik Tesisatı Yenileme
              </h3>
              <p>
                15-20 yıldan eski elektrik tesisatları güvenlik riski oluşturur. Alüminyum 
                kablolar, topraklama eksikliği, yetersiz kablo kesitleri ve eski tip sigortalar 
                yangın ve elektrik çarpması riskini artırır. Uzman ekibimizle dairenizin veya 
                işyerinizin <strong>elektrik tesisatını komple yeniliyor</strong>, güncel standartlara uygun 
                hale getiriyoruz.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Hizmet Bölgeleri */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h3 className="text-xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            İstanbul'da Hizmet Verdiğimiz İlçeler - En Yakın Elektrikçi
          </h3>
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {hizmetBolgesi.map((ilce, index) => (
              <span key={index} className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-lg text-sm text-gray-700 dark:text-gray-300">
                {ilce}
              </span>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6">
            Size en yakın elektrikçi için hemen arayın, 30-45 dakikada adresinizdeyiz!
          </p>
        </div>
      </section>

      {/* SSS */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
            Elektrik Arıza ve Tamir Hakkında Sık Sorulan Sorular
          </h2>
          <div className="space-y-4">
            {sikSorulanSorular.map((item, index) => (
              <details key={index} className="group bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <span>{item.soru}</span>
                  <svg className="w-5 h-5 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-gray-600 dark:text-gray-400">
                  {item.cevap}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Elektrik Arızanız mı Var? Hemen Arayın!
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            7/24 acil elektrikçi hizmetimizle 30-45 dakikada yanınızdayız.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+905327180613" className="bg-white text-blue-700 px-10 py-4 rounded-xl font-bold text-xl hover:shadow-2xl transition-all hover:scale-105 inline-flex items-center justify-center gap-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              0532 718 06 13
            </a>
            <Link href="/iletisim" className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-700 transition-all">
              İletişim Formu
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}