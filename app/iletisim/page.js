export const metadata = {
  title: 'İletişim | 7/24 Acil Elektrikçi - Elektrik Teknik İstanbul',
  description: 'İstanbul Sultanbeyli merkezli 7/24 acil elektrikçi hizmeti. Telefon, WhatsApp ve iletişim formu ile bize ulaşın. Adres: A.yesevi Mh. Mekke Cd. No:9 Sultanbeyli/İstanbul. Tel: 0532 718 06 13.',
  keywords: [
    'elektrikçi iletişim', 'elektrik arıza telefon', 'elektrikçi telefon numarası',
    'acil elektrikçi numarası', '7/24 elektrikçi iletişim', 'elektrik teknik iletişim',
    'Sultanbeyli elektrikçi adres', 'İstanbul elektrikçi telefon', 'elektrikçi whatsapp'
  ].join(', '),
  alternates: {
    canonical: 'https://elektrikteknik.com/iletisim/',
  },
  openGraph: {
    title: 'İletişim | Elektrik Teknik - 7/24 Acil Elektrikçi',
    description: 'İstanbul\'da 7/24 acil elektrikçi hizmeti için bize ulaşın. Telefon, WhatsApp ve adres bilgileri.',
    url: 'https://elektrikteknik.com/iletisim/',
    siteName: 'Elektrik Teknik',
    locale: 'tr_TR',
    type: 'website',
  },
}

export default function IletisimPage() {
  const iletisimBilgileri = [
    { 
      baslik: 'Telefon', 
      deger: '0532 718 06 13', 
      link: 'tel:+905327180613',
      ikon: '📞',
      aciklama: '7/24 Acil Elektrikçi Hattı',
      renk: 'blue'
    },
    { 
      baslik: 'WhatsApp', 
      deger: '0532 718 06 13', 
      link: 'https://wa.me/905327180613',
      ikon: '💬',
      aciklama: 'Anında Mesaj ile İletişim',
      renk: 'green'
    },
    { 
      baslik: 'E-posta', 
      deger: 'info@elektrikteknik.com', 
      link: 'mailto:info@elektrikteknik.com',
      ikon: '📧',
      aciklama: 'Teklif ve Sorularınız İçin',
      renk: 'blue'
    },
    { 
      baslik: 'Adres', 
      deger: 'A.yesevi Mh. Mekke Cd. No:9 Sultanbeyli / İstanbul', 
      link: 'https://maps.google.com/?q=Sultanbeyli+İstanbul',
      ikon: '📍',
      aciklama: 'Merkez Ofisimiz',
      renk: 'red'
    }
  ]

  const calismaSaatleri = [
    { gun: 'Pazartesi - Cuma', saat: '7/24 Açık' },
    { gun: 'Cumartesi', saat: '7/24 Açık' },
    { gun: 'Pazar', saat: '7/24 Açık' },
    { gun: 'Resmi Tatiller', saat: '7/24 Açık' }
  ]

  const hizliErisim = [
    { isim: 'Elektrik Arıza', href: '/elektrik-usta', ikon: '⚡' },
    { isim: 'Sigorta Değişimi', href: '/elektrik-usta', ikon: '🔌' },
    { isim: 'Güneş Enerji', href: '/gunes-enerji', ikon: '☀️' },
    { isim: 'Güvenlik Sistemleri', href: '/guvenlik', ikon: '🛡️' }
  ]

  // Schema Markup
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Elektrik Teknik İletişim",
    "description": "İstanbul'da 7/24 acil elektrikçi hizmeti için iletişim bilgileri.",
    "url": "https://elektrikteknik.com/iletisim/",
    "mainEntity": {
      "@type": "ElectricalContractor",
      "name": "Elektrik Teknik",
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
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "00:00",
          "closes": "23:59"
        }
      ]
    }
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
        "name": "İletişim",
        "item": "https://elektrikteknik.com/iletisim/"
      }
    ]
  }

  return (
    <>
      {/* Schema Markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">İletişim</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            7/24 Bize Ulaşın, Hemen Yardımcı Olalım
          </p>
        </div>
      </section>

      {/* İletişim Bilgileri Grid */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {iletisimBilgileri.map((item, index) => (
              <a 
                key={index} 
                href={item.link} 
                target={item.link.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="group bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 text-center hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className={`text-5xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {item.ikon}
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{item.baslik}</h3>
                <p className={`text-${item.renk}-600 dark:text-${item.renk}-400 font-semibold mb-1`}>
                  {item.deger}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{item.aciklama}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* İletişim Formu ve Çalışma Saatleri */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            
            {/* Sol Taraf - Form */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Bize Yazın</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Formu doldurun, en kısa sürede size dönüş yapalım.
              </p>
              
              <form action="https://formsubmit.co/info@elektrikteknik.com" method="POST" className="space-y-5">
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_subject" value="Elektrik Teknik İletişim Formu" />
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Adınız Soyadınız
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Adınız Soyadınız"
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-700 dark:text-white"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Telefon Numaranız
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="05XX XXX XX XX"
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-700 dark:text-white"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    E-posta Adresiniz
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="ornek@email.com"
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-700 dark:text-white"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Mesajınız
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="4"
                    placeholder="Mesajınızı yazın... (Elektrik arıza, tamir, teklif vb.)"
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-700 dark:text-white"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 shadow-md"
                >
                  Mesajı Gönder
                </button>
              </form>
            </div>

            {/* Sağ Taraf - Çalışma Saatleri ve Hızlı Erişim */}
            <div className="space-y-8">
              {/* Çalışma Saatleri */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">⏰</span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Çalışma Saatleri</h3>
                </div>
                <div className="space-y-3">
                  {calismaSaatleri.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700 last:border-0">
                      <span className="text-gray-700 dark:text-gray-300">{item.gun}</span>
                      <span className="font-semibold text-green-600 dark:text-green-400">{item.saat}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
                  <div className="flex items-center gap-2 text-green-700 dark:text-green-400">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-sm font-medium">7/24 Acil Servisimiz Aktif</span>
                  </div>
                </div>
              </div>

              {/* Hızlı Erişim */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Hızlı Erişim</h3>
                <div className="grid grid-cols-2 gap-3">
                  {hizliErisim.map((item, index) => (
                    <a 
                      key={index} 
                      href={item.href} 
                      className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors group"
                    >
                      <span className="text-xl">{item.ikon}</span>
                      <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                        {item.isim}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* WhatsApp Hızlı */}
              <div className="bg-green-50 dark:bg-green-900/20 rounded-2xl p-6 text-center">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Acil durumlarda WhatsApp'tan yazın, anında cevap alın!
                </p>
                <a 
                  href="https://wa.me/905327180613?text=Merhaba,%20Elektrik%20Teknik%20sitesinden%20ula%C5%9F%C4%B1yorum.%20Yard%C4%B1mc%C4%B1%20olabilir%20misiniz?" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  </svg>
                  WhatsApp'tan Yazın
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Harita / Adres Bilgisi */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Bizi Ziyaret Edin</h2>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
            <div className="text-6xl mb-4">📍</div>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-2">
              A.yesevi Mahallesi Mekke Caddesi No:9
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Sultanbeyli / İstanbul
            </p>
            <a 
              href="https://maps.google.com/?q=A.yesevi+Mahallesi+Mekke+Caddesi+No:9+Sultanbeyli+İstanbul" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all"
            >
              Google Haritalar'da Aç
            </a>
          </div>
        </div>
      </section>

      {/* Acil Çağrı CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Elektrik Arızanız mı Var? Hemen Arayın!
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            7/24 acil elektrikçi hizmetimizle 30-45 dakikada yanınızdayız.
          </p>
          <a 
            href="tel:+905327180613" 
            className="inline-block bg-white text-blue-700 px-10 py-4 rounded-xl font-bold text-xl hover:shadow-2xl transition-all hover:scale-105"
          >
            <span className="flex items-center gap-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              0532 718 06 13
            </span>
          </a>
        </div>
      </section>
    </>
  )
}