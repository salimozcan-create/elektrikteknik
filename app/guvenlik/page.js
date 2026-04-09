import Link from 'next/link'

export const metadata = {
  title: 'Güvenlik Kamera ve Alarm Sistemleri | Montaj, Servis, Bakım | Elektrik Teknik',
  description: 'İstanbul\'da profesyonel güvenlik kamera sistemleri, alarm sistemleri, CCTV kurulumu, montaj, servis ve periyodik bakım hizmetleri. 2MP, 4MP, 5MP, 4K IP kamera setleri, kablosuz kamera, plaka okuma, yangın alarmı. Keşif ücretsiz. Hemen ara: 0532 718 06 13.',
  keywords: [
    'güvenlik kamerası', 'kamera sistemi', 'alarm sistemi', 'güvenlik kamera sistemleri',
    'ip kamera', 'kablosuz kamera', 'gece görüşlü kamera', 'ahd kamera', 'dış mekan kamera',
    'ev güvenlik kamerası', 'işyeri güvenlik kamerası', 'apartman güvenlik kamerası',
    'kamera kayıt cihazı', 'dvr kayıt cihazı', 'nvr kayıt cihazı', '4 lü kamera seti',
    '8 li kamera seti', '16 lı kamera seti', '2 mp kamera', '4 mp kamera', '5 mp kamera',
    '4k güvenlik kamerası', 'dome kamera', 'bullet kamera', 'ptz kamera', 'speed dome',
    'hırsız alarm sistemi', 'yangın alarm sistemi', 'kablosuz alarm', 'ev alarmı',
    'işyeri alarmı', 'apartman alarmı', 'kamera montajı', 'kamera kurulumu',
    'kamera tamiri', 'kamera servisi', 'kamera bakımı', 'alarm montajı', 'alarm servisi',
    'güvenlik sistemleri', 'cctv kamera', 'kapı kamerası', 'bina kamera sistemi',
    'gece görüşlü güvenlik kamerası', 'ses kayıtlı kamera', 'wifi kamera',
    'hareket sensörlü kamera', 'plaka okuma kamerası', 'lpr kamera', 'poe kamera',
    'İstanbul güvenlik kamerası', 'Sultanbeyli kamera sistemleri', 'Anadolu Yakası kamera'
  ].join(', '),
  alternates: {
    canonical: 'https://elektrikteknik.com/guvenlik/',
  },
  openGraph: {
    title: 'Güvenlik Kamera ve Alarm Sistemleri | Elektrik Teknik',
    description: 'İstanbul\'da profesyonel güvenlik kamera ve alarm sistemleri. Montaj, servis, bakım. Keşif ücretsiz.',
    url: 'https://elektrikteknik.com/guvenlik/',
    siteName: 'Elektrik Teknik',
    locale: 'tr_TR',
    type: 'website',
  },
}

export default function GuvenlikPage() {
  // Ana Hizmet Kategorileri
  const anaHizmetler = [
    {
      id: 1,
      kategori: 'Güvenlik Kamera Sistemleri',
      ikon: '📹',
      aciklama: 'Ev, işyeri, apartman ve site için profesyonel CCTV ve IP kamera sistemleri kurulumu.',
      altHizmetler: [
        { isim: 'IP Kamera Sistemleri', detay: '2MP, 4MP, 5MP, 8MP ve 4K çözünürlükte IP kamera setleri. Uzaktan izleme, POE bağlantı.' },
        { isim: 'AHD / HD Kamera Sistemleri', detay: 'Ekonomik ve güvenilir AHD teknolojisi. 1080p Full HD, 2MP, 4MP, 5MP seçenekleri.' },
        { isim: 'Kablosuz WiFi Kamera', detay: 'Kablo çekme imkanı olmayan alanlar için WiFi bağlantılı, kolay kurulumlu sistemler.' },
        { isim: 'Dış Mekan Kamera', detay: 'IP66/IP67 korumalı, gece görüşlü, yağmur ve toza dayanıklı profesyonel kameralar.' },
        { isim: 'Dome / Bullet / PTZ Kamera', detay: 'Sabit dome, silindirik bullet, hareketli PTZ ve 360 derece dönen kamera modelleri.' },
        { isim: '4K Ultra HD Kamera', detay: '8MP/4K çözünürlükte, plaka okuma ve yüz tanıma için ultra net görüntü.' }
      ]
    },
    {
      id: 2,
      kategori: 'Alarm ve Güvenlik Sistemleri',
      ikon: '🚨',
      aciklama: 'Hırsız alarmı, yangın alarmı, gaz dedektörü ve çevre güvenlik sistemleri.',
      altHizmetler: [
        { isim: 'Hırsız Alarm Sistemleri', detay: 'Kablolu ve kablosuz alarm setleri. Hareket sensörü, manyetik kontak, siren, GSM bildirim.' },
        { isim: 'Yangın Alarm Sistemleri', detay: 'Duman dedektörü, ısı sensörü, buton ve sirenli konvansiyonel/adresli yangın alarmı.' },
        { isim: 'Akıllı Ev Güvenliği', detay: 'Telefondan kontrol edilebilen akıllı alarm, kapı/pencere sensörleri, su baskını dedektörü.' },
        { isim: 'Geçiş Kontrol Sistemleri', detay: 'Parmak izi, kartlı geçiş, şifreli kapı kontrolü ve turnike sistemleri.' },
        { isim: 'Plaka Tanıma (LPR) Kamera', detay: 'Otopark ve site girişleri için otomatik plaka okuma ve bariyer entegrasyonu.' }
      ]
    },
    {
      id: 3,
      kategori: 'Montaj, Servis ve Bakım',
      ikon: '🔧',
      aciklama: 'Mevcut sistemlerin onarımı, periyodik bakımı ve profesyonel montaj hizmetleri.',
      altHizmetler: [
        { isim: 'Kamera Montaj ve Kurulum', detay: 'Profesyonel ekiplerle duvar/tavan montajı, kablo çekimi, cihaz konfigürasyonu.' },
        { isim: 'Arıza Tespit ve Onarım', detay: 'Görüntü gelmeme, kayıt yapmama, gece görüş sorunu gibi arızaların giderilmesi.' },
        { isim: 'Periyodik Bakım', detay: 'Kamera lens temizliği, bağlantı kontrolü, kayıt cihazı güncellemesi, disk sağlığı kontrolü.' },
        { isim: 'Sistem Yükseltme', detay: 'Analog sistemden IP/HD sisteme geçiş, kamera ekleme, depolama kapasitesi artırma.' },
        { isim: 'Uzaktan İzleme Kurulumu', detay: 'Telefon ve tabletten canlı izleme ve geriye dönük kayıt izleme ayarları.' }
      ]
    }
  ]

  // Popüler Kamera Setleri
  const populerSetler = [
    { isim: '4\'lü Güvenlik Kamera Seti', ozellik: '2MP / 4MP AHD veya IP, 1TB harddiskli kayıt cihazı, gece görüşlü', arama: '4 lü kamera seti' },
    { isim: '8\'li Güvenlik Kamera Seti', ozellik: '5MP IP kamera, 8 kanal NVR, 2TB harddisk, yüz tanıma özellikli', arama: '8 li kamera seti' },
    { isim: '16\'lı Güvenlik Kamera Seti', ozellik: '4MP IP/AHD kamera, 16 kanal kayıt cihazı, 4TB depolama, geniş alan koruması', arama: '16 lı kamera seti' },
    { isim: '2\'li WiFi Kamera Seti', ozellik: 'Kablosuz IP kamera, hafıza kartlı, 2 yönlü ses, hareket algılama', arama: '2 li kamera seti' },
    { isim: '4K Ultra HD Kamera Seti', ozellik: '8MP çözünürlük, renkli gece görüşü, plaka okuma özellikli', arama: '4k güvenlik kamerası' },
    { isim: 'Kablosuz Alarm Seti', ozellik: 'GSM bildirimli, 5 hareket sensörü, 3 manyetik kontak, uzaktan kontrol', arama: 'kablosuz alarm sistemi' }
  ]

  // Sık Karşılaşılan Sorunlar ve Çözümleri
  const arizaCozumleri = [
    { sorun: 'Kamera görüntü vermiyor', cozum: 'Güç adaptörü kontrolü, kablo bağlantı testi, IP adres çakışması kontrolü' },
    { sorun: 'Kayıt cihazı kayıt yapmıyor', cozum: 'Harddisk sağlık kontrolü, kayıt takvimi ayarları, depolama alanı kontrolü' },
    { sorun: 'Gece görüşü çalışmıyor', cozum: 'IR LED arızası, lens temizliği, gece modu ayarları kontrolü' },
    { sorun: 'Telefondan izleyemiyorum', cozum: 'İnternet bağlantısı, port yönlendirme, DDNS ayarları, P2P bağlantı kontrolü' },
    { sorun: 'Alarm sürekli ötüyor', cozum: 'Sensör kalibrasyonu, pil değişimi, manyetik kontak hizası kontrolü' },
    { sorun: 'Görüntü donuyor / atlıyor', cozum: 'Switch/router kontrolü, kablo kalitesi testi, bant genişliği optimizasyonu' }
  ]

  // Neden Biz?
  const avantajlar = [
    { baslik: 'Ücretsiz Keşif', aciklama: 'İstanbul genelinde ücretsiz keşif ve fiyat teklifi hizmeti.', ikon: '📍' },
    { baslik: 'Profesyonel Montaj', aciklama: 'Sertifikalı teknisyenlerle düzgün kablo çekimi ve estetik montaj.', ikon: '🔧' },
    { baslik: '2 Yıl Garanti', aciklama: 'Tüm kurulum ve işçilik işlerimiz 2 yıl garantilidir.', ikon: '✅' },
    { baslik: '7/24 Teknik Destek', aciklama: 'Acil durumlarda telefon ve uzaktan bağlantı ile anında destek.', ikon: '📞' },
    { baslik: 'Orijinal Ürünler', aciklama: 'Hikvision, Dahua, Uniview gibi dünya markalarının yetkili satıcısı.', ikon: '🏷️' },
    { baslik: 'Uzaktan İzleme', aciklama: 'Tüm sistemleri telefon ve tabletten izleyebilmeniz için kurulum.', ikon: '📱' }
  ]

  // Popüler Markalar
  const markalar = [
    'Hikvision', 'Dahua', 'Uniview', 'Hilook', 'Haikon', 'Neutron', 
    'Xiaomi', 'TP-Link', 'Ezviz', 'Imou', 'Ajax', 'Paradox', 'Bosch'
  ]

  // Hizmet Bölgeleri
  const hizmetBolgesi = [
    'Sultanbeyli', 'Kadıköy', 'Üsküdar', 'Beşiktaş', 'Şişli', 'Fatih',
    'Bakırköy', 'Maltepe', 'Kartal', 'Pendik', 'Tuzla', 'Sancaktepe',
    'Ataşehir', 'Beylikdüzü', 'Esenyurt', 'Bağcılar', 'Ümraniye', 'Çekmeköy',
    'Beykoz', 'Sarıyer', 'Zeytinburnu', 'Bayrampaşa', 'Gaziosmanpaşa'
  ]

  // SSS
  const sikSorulanSorular = [
    {
      soru: 'Güvenlik kamerası sistemi kurulumu ne kadar sürer?',
      cevap: '4 kameralı bir sistem için ortalama 2-4 saat, 8 kameralı sistem için 4-6 saat, 16 kameralı sistem için ise 1-2 gün sürmektedir. Kablolama mesafesi ve montaj zorluğuna göre süre değişebilir.'
    },
    {
      soru: 'Kamera kayıtları kaç gün saklanır?',
      cevap: 'Kayıt süresi; kamera sayısına, çözünürlüğe, hareket algılama ayarlarına ve harddisk kapasitesine bağlıdır. Standart 4 kameralı 1TB sistemde 7-15 gün, 2TB ile 15-30 gün, 4TB ile 30-60 gün kayıt saklanabilir.'
    },
    {
      soru: 'Kamerayı telefondan nasıl izlerim?',
      cevap: 'Kurulum sırasında kayıt cihazınıza internet bağlantısı yapılır ve ücretsiz mobil uygulama (Hik-Connect, DMSS, XMEye vb.) telefonunuza yüklenir. QR kod ile cihaz eklenerek canlı ve geçmiş kayıtları izleyebilirsiniz.'
    },
    {
      soru: 'Kablosuz kamera mı kablolu kamera mı tercih etmeliyim?',
      cevap: 'Kablolu sistemler daha güvenilir ve kesintisiz görüntü sağlar. Profesyonel kurulumlarda önerilir. Kablosuz sistemler kablo çekme imkanı olmayan yerler için pratiktir ancak WiFi sinyal kalitesine bağlıdır. Kritik alanlar için kablolu sistem tavsiye ediyoruz.'
    },
    {
      soru: 'IP kamera ile AHD kamera arasındaki fark nedir?',
      cevap: 'IP kameralar dijital sinyal ile çalışır, daha yüksek çözünürlük (8MP/4K) ve akıllı analiz özellikleri sunar. AHD kameralar analog sinyali dijitale çevirir, daha ekonomiktir. Yeni kurulumlarda IP sistem önerilir.'
    },
    {
      soru: 'Alarm sistemi aylık ücretli mi?',
      cevap: 'Standart alarm sistemlerinde aylık ücret yoktur. Sadece GSM bildirim için hat takılırsa operatöre ait SIM kart ücreti olabilir. Özel güvenlik şirketlerine bağlı izleme merkezi hizmeti alınırsa aylık abonelik ücreti uygulanır.'
    },
    {
      soru: 'Yangın alarm sistemi zorunlu mu?',
      cevap: 'İşyerleri, apartmanlar, oteller ve kamu binaları için yönetmelik gereği yangın alarm sistemi zorunludur. Evler için zorunlu değildir ancak can ve mal güvenliği için şiddetle tavsiye edilir.'
    },
    {
      soru: 'Periyodik bakım ne sıklıkla yapılmalı?',
      cevap: 'Kamera sistemleri için yılda 1 kez bakım önerilir. Bakımda lens temizliği, bağlantı kontrolü, harddisk sağlık testi ve yazılım güncellemeleri yapılır. Alarm sistemleri için 6 ayda bir sensör ve siren testi yapılmalıdır.'
    }
  ]

  // Schema Markup
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Güvenlik Kamera ve Alarm Sistemleri",
    "description": "İstanbul'da profesyonel güvenlik kamera sistemleri, alarm sistemleri, CCTV kurulumu, montaj, servis ve periyodik bakım hizmetleri.",
    "provider": {
      "@type": "SecurityBusiness",
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
      "name": "Güvenlik ve Kamera Hizmetleri",
      "itemListElement": populerSetler.map((set, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": set.isim,
          "description": set.ozellik
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
        "name": "Güvenlik Kamera ve Alarm Sistemleri",
        "item": "https://elektrikteknik.com/guvenlik/"
      }
    ]
  }

  // SVG pattern - düzeltilmiş
  const gridSvgPattern = "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L30 60M0 30L60 30' stroke='white' stroke-opacity='0.05' /%3E%3C/svg%3E\")"

  return (
    <>
      {/* Schema Markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        {/* Dekoratif grid çizgileri */}
        <div className="absolute inset-0" style={{ backgroundImage: gridSvgPattern }}></div>

        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-red-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                7/24 GÜVENLİK VE İZLEME
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                Güvenlik Kamera ve Alarm Sistemleri
                <span className="block text-2xl md:text-3xl text-slate-300 mt-4 font-semibold">
                  Profesyonel Montaj, Servis ve Bakım Hizmetleri
                </span>
              </h1>

              <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                İstanbul'da <strong className="text-white">ev, işyeri, apartman ve siteler</strong> için 
                <strong className="text-white"> 4'lü, 8'li, 16'lı kamera setleri</strong>, IP/AHD kamera sistemleri, 
                hırsız ve yangın alarm sistemleri kurulumu. <strong className="text-white">Ücretsiz keşif</strong>, 
                <strong className="text-white"> 2 yıl garanti</strong>, profesyonel montaj.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+905327180613" className="group bg-white text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all hover:scale-105 flex items-center gap-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Hemen Ara: 0532 718 06 13
                </a>
                <a href="#hizmetler" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all">
                  Hizmetlerimizi İnceleyin
                </a>
              </div>

              {/* Hızlı Erişim Rozetleri */}
              <div className="flex flex-wrap justify-center gap-4 mt-10 text-sm text-slate-300">
                <span className="flex items-center gap-1">📹 4'lü Setler</span>
                <span className="flex items-center gap-1">🎥 8'li Setler</span>
                <span className="flex items-center gap-1">📡 16'lı Setler</span>
                <span className="flex items-center gap-1">🚨 Alarm Sistemleri</span>
                <span className="flex items-center gap-1">🔧 Montaj & Bakım</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popüler Setler */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            En Çok Tercih Edilen Kamera ve Alarm Setleri
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
            İhtiyacınıza uygun 2'li, 4'lü, 8'li, 16'lı kamera setleri ve kablosuz alarm paketleri. 
            Montaj dahil fiyatlar için keşif talep edin.
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {populerSetler.map((set, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{set.isim}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{set.ozellik}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full">
                    Popüler Tercih
                  </span>
                  <a href="tel:+905327180613" className="text-blue-600 dark:text-blue-400 font-semibold text-sm hover:underline">
                    Fiyat Sor →
                  </a>
                </div>
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
              Profesyonel Güvenlik ve Kamera Hizmetlerimiz
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Kamera sistemleri, alarm çözümleri ve teknik servis alanlarında uzman ekibimizle 7/24 yanınızdayız.
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
            Sık Karşılaşılan Kamera ve Alarm Sorunları
          </h2>
          
          <div className="overflow-x-auto max-w-5xl mx-auto">
            <table className="w-full bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-slate-800 text-white">
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
              Sisteminizde sorun mu var? Hemen teknik servis talep edin.
            </p>
            <a href="tel:+905327180613" className="inline-flex items-center gap-2 bg-slate-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-700 transition-all">
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
            Çalıştığımız Güvenlik ve Kamera Markaları
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
              İstanbul'da Profesyonel Güvenlik Kamera ve Alarm Çözümleri
            </h2>
            
            <div className="space-y-6 text-gray-700 dark:text-gray-300 text-justify">
              <p>
                <strong>Elektrik Teknik</strong> olarak İstanbul genelinde güvenlik kamera sistemleri, 
                hırsız alarmı, yangın alarmı ve geçiş kontrol sistemleri kurulumu yapıyoruz. 
                Ev, işyeri, apartman, site, fabrika ve depo gibi tüm mekanlar için profesyonel 
                güvenlik çözümleri sunuyoruz. 2MP'den 8MP/4K çözünürlüğe kadar IP ve AHD kamera 
                setleri, kablosuz alarm sistemleri ve uzaktan izleme çözümlerimizle güvenliğinizi 
                sağlıyoruz.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">
                Kamera Sistemi Seçerken Nelere Dikkat Edilmeli?
              </h3>
              <p>
                Kamera sistemi seçiminde çözünürlük (2MP, 4MP, 5MP, 4K), gece görüş mesafesi, 
                depolama kapasitesi ve uzaktan izleme özellikleri önemlidir. Profesyonel 
                kurulumlarda IP kamera sistemleri daha yüksek çözünürlük ve akıllı analiz 
                özellikleri sunar. Ekonomik çözümler için AHD kamera setleri tercih edilebilir. 
                Keşif sırasında alanın büyüklüğüne ve ihtiyaca göre en uygun sistemi öneriyoruz.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">
                Alarm Sistemleri ile Güvenliğinizi Artırın
              </h3>
              <p>
                Hırsız alarm sistemleri, hareket sensörleri ve manyetik kontaklar ile izinsiz 
                girişleri tespit eder. GSM bildirim özelliği sayesinde alarm durumunda telefonunuza 
                anında mesaj veya arama gelir. Yangın alarm sistemleri ise duman ve ısı sensörleri 
                ile erken uyarı sağlayarak can ve mal güvenliğinizi korur. Tüm alarm sistemlerimiz 
                uzaktan kontrol edilebilir ve kamera sistemleri ile entegre çalışabilir.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">
                Periyodik Bakım ve Teknik Servis Hizmeti
              </h3>
              <p>
                Mevcut kamera ve alarm sistemlerinizin düzenli bakımı, arızaların önlenmesi ve 
                sistem ömrünün uzatılması için kritiktir. Yılda en az bir kez yapılacak periyodik 
                bakımda; kamera lens temizliği, bağlantı kontrolleri, harddisk sağlık testi, 
                sensör kalibrasyonu ve yazılım güncellemeleri yapılır. Arıza durumunda 7/24 
                teknik servis hizmetimizle yanınızdayız.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Hizmet Bölgeleri */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h3 className="text-xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            İstanbul'da Kamera ve Alarm Hizmeti Verdiğimiz İlçeler
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
            Güvenlik Kamera ve Alarm Sistemleri Hakkında Sık Sorulan Sorular
          </h2>
          <div className="space-y-4">
            {sikSorulanSorular.map((item, index) => (
              <details key={index} className="group bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
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
      <section className="py-16 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ücretsiz Keşif ve Fiyat Teklifi Alın!
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Ev, işyeri veya siteniz için en uygun kamera ve alarm sistemini birlikte belirleyelim.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+905327180613" className="bg-white text-slate-900 px-10 py-4 rounded-xl font-bold text-xl hover:shadow-2xl transition-all hover:scale-105 inline-flex items-center justify-center gap-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              0532 718 06 13
            </a>
            <Link href="/iletisim" className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all">
              İletişim Formu
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}