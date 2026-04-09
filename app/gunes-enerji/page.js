import Link from 'next/link'

export const metadata = {
  title: 'Güneş Enerji Sistemleri | Panel Montaj, Bakım ve Malzeme Satışı | Elektrik Teknik',
  description: 'İstanbul\'da güneş enerji sistemleri, güneş paneli montajı, periyodik bakım, onarım ve malzeme satışı. Ev ve işyeri için 3 kW, 5 kW, 10 kW solar paketler. CW Enerji, Lexron, Tommatech bayisi. Ücretsiz keşif. Hemen ara: 0532 718 06 13.',
  keywords: [
    'güneş enerji', 'güneş paneli', 'güneş enerjisi', 'güneş paneli fiyatları',
    'güneş enerji sistemleri', 'güneş enerjisi fiyatları', 'solar panel',
    'ev için güneş paneli', 'güneş paneli kurulumu', 'güneş enerjisi kurulumu',
    'güneş paneli montajı', 'güneş enerjisi montajı', 'güneş paneli bakımı',
    'güneş enerjisi bakım', 'güneş paneli servisi', 'güneş enerjisi servis',
    'güneş paneli tamiri', 'güneş enerjisi arıza', 'ges kurulumu',
    '10 kw güneş paneli', '5 kw güneş paneli', '3 kw güneş paneli',
    '100 watt güneş paneli', '200 watt güneş paneli', '300 watt güneş paneli',
    '400 watt güneş paneli', '500 watt güneş paneli', '550 watt güneş paneli',
    'monokristal güneş paneli', 'polikristal güneş paneli', 'esnek güneş paneli',
    'taşınabilir güneş paneli', 'karavan güneş paneli', 'bağ evi güneş paneli',
    'müstakil ev güneş paneli', 'apartman güneş paneli', 'çatı güneş paneli',
    'güneş paneli inverter', 'güneş paneli akü', 'solar inverter',
    'güneş enerjisi depolama', 'güneş paneli seti', 'solar paket',
    'güneş enerjisi su ısıtma', 'güneş enerjisi elektrik üretimi',
    'güneş paneli fiyatları 2023', 'güneş paneli fiyatları 2024',
    'İstanbul güneş enerjisi', 'Sultanbeyli güneş paneli', 'Anadolu Yakası güneş enerji'
  ].join(', '),
  alternates: {
    canonical: 'https://elektrikteknik.com/gunes-enerji/',
  },
  openGraph: {
    title: 'Güneş Enerji Sistemleri | Panel Montaj ve Bakım | Elektrik Teknik',
    description: 'İstanbul\'da güneş enerji sistemleri, panel montajı, bakım ve malzeme satışı. Ücretsiz keşif.',
    url: 'https://elektrikteknik.com/gunes-enerji/',
    siteName: 'Elektrik Teknik',
    locale: 'tr_TR',
    type: 'website',
  },
}

export default function GunesEnerjiPage() {
  // Ana Hizmet Kategorileri
  const anaHizmetler = [
    {
      id: 1,
      kategori: 'Güneş Paneli Montaj ve Kurulum',
      ikon: '🔧',
      aciklama: 'Ev, işyeri, bağ evi, apartman ve fabrikalar için profesyonel güneş enerji sistemi kurulumu.',
      altHizmetler: [
        { isim: 'Ev Tipi Güneş Enerji Sistemleri', detay: '3 kW, 5 kW, 7.5 kW, 10 kW çatı tipi solar sistemler. Elektrik faturanızı düşürün.' },
        { isim: 'Bağ Evi Solar Paketleri', detay: 'Şebekeden bağımsız (off-grid) akülü güneş enerji sistemleri. Buzdolabı, TV, aydınlatma için.' },
        { isim: 'İşyeri ve Fabrika Çatı GES', detay: 'Yüksek kapasiteli ticari güneş enerji santralleri. 25 kW, 50 kW, 100 kW ve üzeri.' },
        { isim: 'Karavan ve Tekne Güneş Paneli', detay: '12V ve 24V mobil sistemler, esnek paneller, akü şarj sistemleri.' },
        { isim: 'Tarımsal Sulama Sistemleri', detay: 'Güneş enerjili dalgıç pompa ve sulama sistemleri. 1 HP, 2 HP, 5 HP çözümler.' }
      ]
    },
    {
      id: 2,
      kategori: 'Bakım, Servis ve Onarım',
      ikon: '🔨',
      aciklama: 'Mevcut güneş enerji sistemleriniz için periyodik bakım, arıza tespit ve onarım hizmetleri.',
      altHizmetler: [
        { isim: 'Panel Temizliği ve Bakım', detay: 'Güneş panellerinin profesyonel ekipmanla temizliği, verimlilik artışı sağlanır.' },
        { isim: 'İnverter Arıza ve Onarım', detay: 'İnverter arızalarının tespiti, yazılım güncelleme ve gerektiğinde değişim.' },
        { isim: 'Akü Bakım ve Değişimi', detay: 'Jel akü, lityum akü kontrolleri, kapasite testi ve değişim hizmetleri.' },
        { isim: 'Kablo ve Bağlantı Kontrolü', detay: 'Gevşeyen bağlantıların sıkılması, oksitlenme kontrolü, enerji kayıplarının önlenmesi.' },
        { isim: 'Sistem Performans Analizi', detay: 'Üretim takibi, gölgeleme analizi, sistem verimlilik raporlaması.' }
      ]
    },
    {
      id: 3,
      kategori: 'Güneş Enerjisi Malzeme Satışı',
      ikon: '🛒',
      aciklama: 'CW Enerji, Lexron, Tommatech, Gazioğlu gibi markaların yetkili satıcısı. Toptan ve perakende satış.',
      altHizmetler: [
        { isim: 'Monokristal Güneş Panelleri', detay: '400W, 450W, 455W, 550W half-cut monokristal paneller. Yüksek verimlilik.' },
        { isim: 'Polikristal Güneş Panelleri', detay: '170W, 275W, 330W polikristal paneller. Ekonomik çözümler.' },
        { isim: 'Esnek ve Taşınabilir Paneller', detay: '50W, 100W, 150W, 200W esnek paneller. Karavan ve tekne için ideal.' },
        { isim: 'İnverter ve Aküler', detay: 'On-grid, off-grid ve hibrit inverterler. Jel akü, lityum akü çeşitleri.' },
        { isim: 'Konstrüksiyon ve Ekipman', detay: 'Çatı tipi, arazi tipi alüminyum konstrüksiyon. Solar kablo, konnektör.' }
      ]
    }
  ]

  // Popüler Güneş Paneli Modelleri (Yüksek arama hacimli)
  const populerPaneller = [
    { isim: '455 Watt Half-Cut Monokristal Panel', marka: 'Lexron / CW Enerji', arama: '455 watt güneş paneli' },
    { isim: '550 Watt Monokristal Panel', marka: 'CW Enerji / Tommatech', arama: '550 watt güneş paneli' },
    { isim: '410 Watt Monokristal Panel', marka: 'Lexron', arama: '410 watt güneş paneli' },
    { isim: '340 Watt Monokristal Panel', marka: 'CW Enerji / Gazioğlu', arama: '340 watt monokristal güneş paneli' },
    { isim: '205 Watt Monokristal Panel', marka: 'Lexron', arama: '205 watt güneş paneli' },
    { isim: '170 Watt Polikristal Panel', marka: 'Çeşitli Markalar', arama: '170 watt güneş paneli' },
    { isim: '100 Watt Esnek Panel', marka: 'Esnek Solar', arama: '100 watt esnek güneş paneli' },
    { isim: '100 Watt Monokristal Panel', marka: 'Küçük Tip', arama: '100 watt güneş paneli' }
  ]

  // Popüler Solar Paketler
  const solarPaketler = [
    { isim: '3 kW Ev Tipi Solar Paket', icerik: '8 adet panel, 3 kW inverter, konstrüksiyon, kablo', hedef: 'ev için güneş paneli' },
    { isim: '5 kW Ev Tipi Solar Paket', icerik: '12 adet panel, 5 kW inverter, çatı konstrüksiyonu', hedef: '5 kw güneş paneli' },
    { isim: '10 kW İşyeri Solar Paketi', icerik: '22 adet panel, 10 kW inverter, komple montaj', hedef: '10 kw güneş paneli' },
    { isim: 'Bağ Evi Off-Grid Paketi', icerik: '4 panel, 3 kW inverter, 2 adet jel akü, kablo', hedef: 'bağ evi güneş paneli' },
    { isim: 'Karavan Solar Paketi', icerik: '2 adet esnek panel, MPPT şarj kontrol, akü', hedef: 'karavan güneş paneli' },
    { isim: 'Tarımsal Sulama Paketi', icerik: 'Panel, solar sürücü, dalgıç pompa', hedef: 'tarımsal sulama güneş enerjisi' }
  ]

  // Sık Karşılaşılan Sorunlar ve Çözümleri
  const arizaCozumleri = [
    { sorun: 'Güneş paneli elektrik üretmiyor', cozum: 'Panel yüzey temizliği, kablo bağlantı kontrolü, inverter arıza kodu kontrolü' },
    { sorun: 'İnverter hata veriyor', cozum: 'Şebeke voltaj kontrolü, panel string gerilim ölçümü, yazılım güncellemesi' },
    { sorun: 'Aküler çabuk bitiyor', cozum: 'Akü kapasite testi, şarj kontrol cihazı ayarları, aşırı yük kontrolü' },
    { sorun: 'Panel verimi düştü', cozum: 'Profesyonel panel temizliği, gölgeleme analizi, mikro çatlak kontrolü' },
    { sorun: 'Sıcak su sistemi ısıtmıyor', cozum: 'Vakum tüp kontrolü, antifriz seviyesi, kolektör eğim açısı ayarı' }
  ]

  // Neden Biz?
  const avantajlar = [
    { baslik: 'Ücretsiz Keşif', aciklama: 'İstanbul genelinde ücretsiz keşif ve fizibilite raporu hizmeti.', ikon: '📍' },
    { baslik: 'Yetkili Bayi', aciklama: 'CW Enerji, Lexron, Tommatech yetkili satıcısı. Orijinal ürün garantisi.', ikon: '🏅' },
    { baslik: 'Profesyonel Montaj', aciklama: 'Sertifikalı GES montaj ekibi. TSE ve ISO standartlarında kurulum.', ikon: '🔧' },
    { baslik: '2 Yıl Garanti', aciklama: 'Tüm kurulum ve işçilik işlerimiz 2 yıl garantilidir.', ikon: '✅' },
    { baslik: '7/24 Teknik Destek', aciklama: 'Arıza durumunda telefon ve uzaktan bağlantı ile anında destek.', ikon: '📞' },
    { baslik: 'Devlet Teşvik Danışmanlığı', aciklama: 'Çatı GES başvuruları ve teşvik süreçlerinde danışmanlık.', ikon: '📋' }
  ]

  // Popüler Markalar
  const markalar = [
    'CW Enerji', 'Lexron', 'Tommatech', 'Gazioğlu', 'Eraslan', 'Ezinç', 
    'Demir Solar', 'Alfa Solar', 'GTC', 'Daxler', 'Gookir', 'Sunpower'
  ]

  // Hizmet Bölgeleri
  const hizmetBolgesi = [
    'Sultanbeyli', 'Kadıköy', 'Üsküdar', 'Beşiktaş', 'Şişli', 'Fatih',
    'Bakırköy', 'Maltepe', 'Kartal', 'Pendik', 'Tuzla', 'Sancaktepe',
    'Ataşehir', 'Beylikdüzü', 'Esenyurt', 'Bağcılar', 'Ümraniye', 'Çekmeköy',
    'Beykoz', 'Sarıyer', 'Silivri', 'Çatalca', 'Şile'
  ]

  // SSS
  const sikSorulanSorular = [
    {
      soru: 'Bir eve yetecek güneş paneli maliyeti ne kadar?',
      cevap: 'Ortalama bir evin elektrik ihtiyacı için 3-5 kW arası sistem yeterlidir. 2024 yılı için 3 kW sistem maliyeti yaklaşık 80.000-100.000 TL, 5 kW sistem maliyeti 120.000-150.000 TL arasındadır. Keşif sonrası net fiyat verilmektedir.'
    },
    {
      soru: 'Güneş paneli kaç yılda kendini amorti eder?',
      cevap: 'Türkiye\'deki elektrik fiyatları ve güneşlenme süreleri dikkate alındığında, çatı tipi güneş enerji sistemleri ortalama 4-6 yıl arasında kendini amorti etmektedir. Panellerin ekonomik ömrü 25+ yıldır.'
    },
    {
      soru: 'Monokristal mi polikristal panel mi tercih etmeliyim?',
      cevap: 'Monokristal paneller daha yüksek verimlilik sunar (%19-22) ve sınırlı alan için idealdir. Polikristal paneller biraz daha ekonomiktir (%16-18 verimlilik). Çatı alanınız yeterliyse polikristal, alan kısıtlıysa monokristal öneririz.'
    },
    {
      soru: 'Güneş paneli bakımı ne sıklıkla yapılmalı?',
      cevap: 'Yılda en az 2 kez panel yüzey temizliği ve genel sistem kontrolü önerilir. İlkbahar ve sonbahar ayları bakım için idealdir. Düzenli bakım, sistem verimliliğini %5-15 arası artırır.'
    },
    {
      soru: 'Kışın güneş paneli elektrik üretir mi?',
      cevap: 'Evet, güneş panelleri kışın da elektrik üretir. Soğuk hava panel verimliliğini artırır. Ancak kış aylarında güneşlenme süresi daha kısa olduğu için yaz aylarına göre %30-40 daha az üretim olur. Kar yağışı panel yüzeyini kapatırsa temizlenmelidir.'
    },
    {
      soru: 'Devlet güneş enerjisine destek veriyor mu?',
      cevap: 'Evet, çatı tipi lisanssız elektrik üretimi için devlet teşvikleri mevcuttur. Fazla üretilen elektriği şebekeye satabilirsiniz. Ayrıca KDV muafiyeti ve çeşitli vergi avantajları bulunmaktadır. Başvuru sürecinde danışmanlık veriyoruz.'
    },
    {
      soru: 'Akülü sistem mi aküsüz sistem mi?',
      cevap: 'Şebeke elektriği olan yerlerde aküsüz (on-grid) sistemler daha ekonomiktir. Fazla enerji şebekeye satılır, gece şebekeden kullanılır. Bağ evi, yayla gibi şebeke olmayan yerlerde akülü (off-grid) sistem gereklidir. Aküler sistem maliyetini artırır.'
    },
    {
      soru: 'Güneş paneli inverter arızası nasıl anlaşılır?',
      cevap: 'İnverter ekranında hata kodu görülmesi, panelden elektrik gelmesine rağmen çıkış olmaması, aşırı ısınma veya ses gelmesi arıza belirtileridir. İnverter arızaları için mutlaka yetkili servis çağrılmalıdır.'
    }
  ]

  // Schema Markup
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Güneş Enerji Sistemleri - Montaj, Bakım ve Malzeme Satışı",
    "description": "İstanbul'da güneş enerji sistemleri, güneş paneli montajı, periyodik bakım, onarım ve malzeme satışı. Ev ve işyeri için solar paketler.",
    "provider": {
      "@type": "SolarEnergyContractor",
      "name": "Elektrik Teknik",
      "telephone": "+905327180613",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "A.yesevi Mh. Mekke Cd. No:9",
        "addressLocality": "Sultanbeyli",
        "addressRegion": "İstanbul",
        "addressCountry": "TR"
      }
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
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Güneş Enerji Hizmetleri ve Ürünleri",
      "itemListElement": populerPaneller.map((panel, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": panel.isim,
          "description": panel.marka
        },
        "position": index + 1
      }))
    },
    "hoursAvailable": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    }
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
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Güneş Enerji Sistemleri",
        "item": "https://elektrikteknik.com/gunes-enerji/"
      }
    ]
  }

  return (
    <>
      {/* Schema Markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-yellow-500 via-amber-500 to-orange-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        {/* Dekoratif güneş efekti */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-green-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                YENİLENEBİLİR ENERJİ ÇÖZÜMLERİ
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                Güneş Enerji Sistemleri
                <span className="block text-2xl md:text-3xl text-yellow-100 mt-4 font-semibold">
                  Panel Montaj, Bakım, Servis ve Malzeme Satışı
                </span>
              </h1>

              <p className="text-lg md:text-xl text-yellow-50 mb-8 max-w-3xl mx-auto leading-relaxed">
                İstanbul'da <strong className="text-white">ev, işyeri, bağ evi ve fabrikalar</strong> için 
                <strong className="text-white"> 3 kW, 5 kW, 10 kW güneş enerji sistemleri</strong> kurulumu. 
                <strong className="text-white"> CW Enerji, Lexron, Tommatech</strong> yetkili bayisi. 
                Ücretsiz keşif, 2 yıl garanti, profesyonel montaj.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+905327180613" className="group bg-white text-orange-700 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all hover:scale-105 flex items-center gap-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Hemen Ara: 0532 718 06 13
                </a>
                <a href="#hizmetler" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-orange-700 transition-all">
                  Hizmetlerimizi İnceleyin
                </a>
              </div>

              {/* Hızlı Erişim Rozetleri */}
              <div className="flex flex-wrap justify-center gap-4 mt-10 text-sm text-yellow-100">
                <span className="flex items-center gap-1">☀️ 3 kW Ev Paketi</span>
                <span className="flex items-center gap-1">🏠 5 kW Sistem</span>
                <span className="flex items-center gap-1">🏭 10 kW İşyeri</span>
                <span className="flex items-center gap-1">🏕️ Bağ Evi Solar</span>
                <span className="flex items-center gap-1">🔧 Bakım & Servis</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popüler Paneller ve Paketler */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            En Çok Tercih Edilen Güneş Panelleri ve Solar Paketler
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
            455W, 550W monokristal paneller, 3 kW, 5 kW, 10 kW hazır solar paketler. 
            İhtiyacınıza özel fiyat teklifi için keşif talep edin.
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {populerPaneller.slice(0, 6).map((panel, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700">
                <div className="text-4xl mb-3">☀️</div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{panel.isim}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{panel.marka}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 px-3 py-1 rounded-full">
                    Stokta
                  </span>
                  <a href="tel:+905327180613" className="text-amber-600 dark:text-amber-400 font-semibold text-sm hover:underline">
                    Fiyat Sor →
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Solar Paketler */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-8">
            {solarPaketler.map((paket, index) => (
              <div key={index} className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-amber-200 dark:border-amber-800">
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{paket.isim}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{paket.icerik}</p>
                <a href="tel:+905327180613" className="inline-flex items-center gap-2 text-amber-700 dark:text-amber-400 font-semibold text-sm hover:underline">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Paket Fiyatı Öğren
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ana Hizmet Kategorileri */}
      <section id="hizmetler" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Profesyonel Güneş Enerji Hizmetlerimiz
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Montaj, bakım, servis ve malzeme satışı alanlarında uzman ekibimizle hizmetinizdeyiz.
            </p>
          </div>

          <div className="space-y-16">
            {anaHizmetler.map((kategori) => (
              <div key={kategori.id} className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-5xl">{kategori.ikon}</span>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                      {kategori.kategori}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">
                      {kategori.aciklama}
                    </p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                  {kategori.altHizmetler.map((hizmet, index) => (
                    <div key={index} className="bg-white dark:bg-gray-900 rounded-xl p-5 shadow-sm hover:shadow-md transition-all">
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">{hizmet.isim}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{hizmet.detay}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Arıza ve Çözüm Tablosu */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
            Sık Karşılaşılan Güneş Enerjisi Sorunları
          </h2>
          
          <div className="overflow-x-auto max-w-5xl mx-auto">
            <table className="w-full bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-amber-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Sorun</th>
                  <th className="px-6 py-4 text-left">Çözüm</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {arizaCozumleri.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{item.sorun}</td>
                    <td className="px-6 py-4 text-gray-600 dark:text-gray-400">{item.cozum}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Güneş enerji sisteminizde sorun mu var? Hemen teknik servis talep edin.
            </p>
            <a href="tel:+905327180613" className="inline-flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-all">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Teknik Servis Çağır
            </a>
          </div>
        </div>
      </section>

      {/* Neden Biz? */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Neden Elektrik Teknik?
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {avantajlar.map((item, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center hover:shadow-lg transition-all">
                <div className="text-5xl mb-4">{item.ikon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{item.baslik}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.aciklama}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Markalar */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h3 className="text-xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            Yetkili Satıcısı Olduğumuz Güneş Enerjisi Markaları
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {markalar.map((marka, index) => (
              <span key={index} className="bg-white dark:bg-gray-900 px-5 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm">
                {marka}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SEO İçerik Makalesi */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-5xl">
          <article className="prose prose-lg dark:prose-invert mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
              İstanbul'da Güneş Enerji Sistemleri: Kurulum, Bakım ve Malzeme
            </h2>
            
            <div className="space-y-6 text-gray-700 dark:text-gray-300 text-justify">
              <p>
                <strong>Elektrik Teknik</strong> olarak İstanbul genelinde güneş enerji sistemleri 
                kurulumu, periyodik bakım, onarım ve malzeme satışı hizmetleri sunuyoruz. 
                Evler, işyerleri, bağ evleri, apartmanlar ve fabrikalar için anahtar teslim 
                solar enerji çözümleri üretiyoruz. CW Enerji, Lexron, Tommatech ve Gazioğlu 
                başta olmak üzere sektörün önde gelen markalarının yetkili satıcısıyız.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">
                Güneş Paneli Seçerken Nelere Dikkat Edilmeli?
              </h3>
              <p>
                Güneş paneli seçiminde en önemli kriterler; panel tipi (monokristal/polikristal), 
                watt gücü, verimlilik oranı ve garanti süresidir. Monokristal paneller %19-22 
                verimlilikle daha az alanda daha fazla enerji üretir. 2024 yılı itibariyle 
                455W, 550W half-cut monokristal paneller en popüler tercihlerdir. Çatı alanınız 
                kısıtlıysa yüksek watt'lı monokristal panelleri, alanınız genişse daha ekonomik 
                polikristal panelleri tercih edebilirsiniz.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">
                Ev İçin Kaç kW Güneş Paneli Gerekir?
              </h3>
              <p>
                Ortalama bir evin günlük elektrik tüketimi 10-15 kWh arasındadır. Bu tüketimi 
                karşılamak için 3-5 kW arası bir güneş enerji sistemi yeterlidir. 3 kW sistem 
                yaklaşık 8 adet panel, 5 kW sistem ise 12-14 adet panel gerektirir. Sadece 
                buzdolabı, aydınlatma ve TV çalıştırmak için 1.5-2 kW sistemler de mevcuttur. 
                Ücretsiz keşif hizmetimizle evinizin tam ihtiyacını belirliyoruz.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">
                Güneş Paneli Bakımı ve Servis Hizmetleri
              </h3>
              <p>
                Güneş enerji sistemleri düzenli bakım gerektirir. Yılda en az 2 kez yapılacak 
                panel temizliği, verimliliği %5-15 artırır. Ayrıca inverter kontrolleri, 
                kablo bağlantılarının sıkılması ve akü bakımı sistem ömrünü uzatır. 
                Arıza durumunda 7/24 teknik servis hizmetimizle yanınızdayız. İnverter 
                arızaları, panel düşük verimi, akü sorunları gibi problemlere profesyonel 
                çözüm sunuyoruz.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Hizmet Bölgeleri */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h3 className="text-xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            İstanbul'da Güneş Enerjisi Hizmeti Verdiğimiz İlçeler
          </h3>
          <div className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto">
            {hizmetBolgesi.map((ilce, index) => (
              <span key={index} className="bg-white dark:bg-gray-900 px-4 py-2 rounded-lg text-sm text-gray-700 dark:text-gray-300 shadow-sm">
                {ilce}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SSS */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
            Güneş Enerji Sistemleri Hakkında Sık Sorulan Sorular
          </h2>
          <div className="space-y-4">
            {sikSorulanSorular.map((item, index) => (
              <details key={index} className="group bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-gray-900 dark:text-white hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
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
      <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ücretsiz Keşif ve Fiyat Teklifi Alın!
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Eviniz veya işyeriniz için en uygun güneş enerji sistemini birlikte belirleyelim.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+905327180613" className="bg-white text-orange-700 px-10 py-4 rounded-xl font-bold text-xl hover:shadow-2xl transition-all hover:scale-105 inline-flex items-center justify-center gap-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              0532 718 06 13
            </a>
            <Link href="/iletisim" className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-orange-700 transition-all">
              İletişim Formu
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}