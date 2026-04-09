import Link from 'next/link'

export const metadata = {
  title: 'Site Haritası | Elektrik Teknik - Tüm Sayfalar',
  description: 'Elektrik Teknik web sitesi site haritası. 7/24 acil elektrikçi, elektrik ürünleri, güneş enerji sistemleri, güvenlik sistemleri sayfalarımıza kolay erişim.',
  keywords: 'site haritası, elektrik teknik site haritası, tüm sayfalar',
  alternates: {
    canonical: 'https://elektrikteknik.com/site-haritasi/',
  },
}

export default function SiteHaritasiPage() {
  const siteYapisi = [
    {
      kategori: 'Ana Sayfalar',
      sayfalar: [
        { isim: 'Anasayfa', href: '/', aciklama: '7/24 acil elektrikçi, elektrik arıza ve tamir hizmetleri' },
        { isim: 'Hakkımızda', href: '/hakkimizda', aciklama: 'Elektrik Teknik hakkında, vizyon ve misyonumuz' },
        { isim: 'İletişim', href: '/iletisim', aciklama: 'İletişim bilgileri, adres, telefon ve WhatsApp' },
        { isim: 'Site Haritası', href: '/site-haritasi', aciklama: 'Web sitesi sayfa haritası' },
      ]
    },
    {
      kategori: 'Elektrik Usta Hizmetleri',
      sayfalar: [
        { isim: 'Elektrik Usta', href: '/elektrik-usta', aciklama: '7/24 acil elektrikçi, elektrik tamir, bakım, servis ve tesisat hizmetleri' },
      ]
    },
    {
      kategori: 'Elektrik Ürünleri',
      sayfalar: [
        { isim: 'Elektrik Ürünleri (Ana Sayfa)', href: '/elektrik-urun', aciklama: 'Toptan ve perakende elektrik malzemeleri satışı' },
        { isim: 'Prizler', href: '/elektrik-urun/prizler', aciklama: '3\'lü priz, 5\'li priz, akım korumalı priz, USB priz' },
        { isim: 'Ampuller', href: '/elektrik-urun/ampuller', aciklama: 'LED ampul, tasarruflu ampul, rustik ampul, şarjlı ampul' },
        { isim: 'Projektörler', href: '/elektrik-urun/projektorler', aciklama: '50W, 100W, 200W LED projektör, sensörlü projektör' },
        { isim: 'Kaçak Akım Rölesi', href: '/elektrik-urun/kacak-akim-rolesi', aciklama: '25A, 40A, 63A, 30mA, 300mA kaçak akım rölesi' },
        { isim: 'LED Paneller', href: '/elektrik-urun/led-paneller', aciklama: '60x60, 30x30, sıva altı/üstü LED paneller' },
        { isim: 'Avizeler', href: '/elektrik-urun/avizeler', aciklama: '3\'lü avize, spot lamba, sarkıt avize, LED avize' },
        { isim: 'Şalter & Sigortalar', href: '/elektrik-urun/salter-ve-sigortalar', aciklama: 'Pako şalter, kompakt şalter, sigorta kutuları' },
        { isim: 'Aplik & Armatürler', href: '/elektrik-urun/aplik-ve-armaturler', aciklama: 'Duvar aplik, bant armatür, acil aydınlatma' },
      ]
    },
    {
      kategori: 'Güneş Enerji Sistemleri',
      sayfalar: [
        { isim: 'Güneş Enerji', href: '/gunes-enerji', aciklama: 'Güneş paneli montaj, bakım ve malzeme satışı' },
      ]
    },
    {
      kategori: 'Güvenlik Sistemleri',
      sayfalar: [
        { isim: 'Güvenlik', href: '/guvenlik', aciklama: 'Kamera ve alarm sistemleri montaj, servis, bakım' },
      ]
    }
  ]

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Anasayfa", "item": "https://elektrikteknik.com/" },
      { "@type": "ListItem", "position": 2, "name": "Site Haritası", "item": "https://elektrikteknik.com/site-haritasi/" }
    ]
  }

  // Toplam sayfa sayısını hesapla
  const toplamSayfa = siteYapisi.reduce((total, bolum) => total + bolum.sayfalar.length, 0)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="bg-gradient-to-r from-gray-700 to-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Site Haritası</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Elektrik Teknik web sitesindeki tüm sayfalara hızlı erişim
          </p>
        </div>
      </section>

      <div className="bg-gray-100 dark:bg-gray-800 py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Anasayfa</Link>
            <span>/</span>
            <span className="text-gray-900 dark:text-white font-medium">Site Haritası</span>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="space-y-12">
            {siteYapisi.map((bolum, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-3">
                  {bolum.kategori}
                </h2>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {bolum.sayfalar.map((sayfa, idx) => (
                    <Link 
                      key={idx}
                      href={sayfa.href}
                      className="group block p-4 bg-white dark:bg-gray-900 rounded-xl hover:shadow-md transition-all border border-gray-100 dark:border-gray-700"
                    >
                      <span className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 flex items-center gap-2">
                        <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        {sayfa.isim}
                      </span>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 ml-6">
                        {sayfa.aciklama}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl text-center">
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-bold text-blue-600 dark:text-blue-400">Elektrik Teknik</span> web sitesinde 
              toplam <span className="font-bold">{toplamSayfa}</span> sayfa bulunmaktadır.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Aradığınızı Bulamadınız mı?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Hemen bize ulaşın, size yardımcı olalım.
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