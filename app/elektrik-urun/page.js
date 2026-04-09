import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Elektrik Ürünleri | Priz, Ampul, Projektör, Led Panel, Kaçak Akım Rölesi | Elektrik Teknik',
  description: 'Elektrik ürünleri satışı: 3\'lü priz, 5\'li priz, led ampul, tasarruflu ampul, projektör, 60x60 led panel, kaçak akım rölesi, avize, aplik. Viko, Siemens, Philips, Schneider, ABB markaları. Toptan ve perakende satış. Hemen ara: 0532 718 06 13.',
  keywords: [
    'elektrik ürünleri', 'priz', '3 lü priz', '5 li priz', 'akım korumalı priz',
    'led ampul', 'tasarruflu ampul', 'projektör', 'led projektör', 'kaçak akım rölesi',
    '60x60 led panel', 'avize', 'aplik', 'pako şalter', 'sigorta kutusu',
    'viko priz', 'siemens kaçak akım', 'philips ampul', 'schneider röle', 'abb şalter',
    'topraklı priz', 'usb priz', 'rustik ampul', 'şarjlı ampul', 'sensörlü projektör'
  ].join(', '),
  alternates: {
    canonical: 'https://elektrikteknik.com/elektrik-urun/',
  },
  openGraph: {
    title: 'Elektrik Ürünleri | Priz, Ampul, Projektör | Elektrik Teknik',
    description: 'Toptan ve perakende elektrik ürünleri satışı. Viko, Siemens, Philips markaları.',
    url: 'https://elektrikteknik.com/elektrik-urun/',
    siteName: 'Elektrik Teknik',
    locale: 'tr_TR',
    type: 'website',
  },
}

export default function ElektrikUrunPage() {
  const urunKategorileri = [
    {
      id: 1,
      kategori: 'Prizler ve Grup Prizler',
      aciklama: '3\'lü priz, 5\'li priz, topraklı priz, USB\'li priz, akım korumalı priz, sıva altı/üstü prizler.',
      ikon: '🔌',
      href: '/elektrik-urun/prizler',
      populerUrunler: ['3 lü priz', '5 li priz', 'Akım korumalı priz', 'USB\'li priz', 'Topraklı priz'],
      aramaHacmi: '50.000+'
    },
    {
      id: 2,
      kategori: 'Ampuller ve LED Ampuller',
      aciklama: 'LED ampul, tasarruflu ampul, rustik ampul, şarjlı ampul, alev efektli ampul, E14/E27 duy.',
      ikon: '💡',
      href: '/elektrik-urun/ampuller',
      populerUrunler: ['9W LED ampul', '20W LED ampul', 'Rustik ampul', 'Şarjlı LED ampul', 'Alev efektli ampul'],
      aramaHacmi: '50.000+'
    },
    {
      id: 3,
      kategori: 'Projektörler',
      aciklama: '50W, 100W, 200W, 400W LED projektörler. Sensörlü, şarjlı, RGB, yeşil projektör çeşitleri.',
      ikon: '🔦',
      href: '/elektrik-urun/projektorler',
      populerUrunler: ['50W LED projektör', '100W LED projektör', '200W LED projektör', 'Sensörlü projektör'],
      aramaHacmi: '5.000+'
    },
    {
      id: 4,
      kategori: 'Kaçak Akım Röleleri',
      aciklama: '25A, 40A, 63A, 300mA kaçak akım rölesi. Siemens, Schneider, Legrand, ABB markaları.',
      ikon: '⚡',
      href: '/elektrik-urun/kacak-akim-rolesi',
      populerUrunler: ['40A 30mA Röle', '63A 300mA Röle', '4x40 Kaçak Akım', 'ABB Kaçak Akım'],
      aramaHacmi: '5.000+'
    },
    {
      id: 5,
      kategori: 'LED Paneller',
      aciklama: '60x60, 30x30, 60x120 LED paneller. Sıva altı, sıva üstü, slim panel çeşitleri.',
      ikon: '📦',
      href: '/elektrik-urun/led-paneller',
      populerUrunler: ['60x60 LED panel', '30x30 LED panel', 'Sıva üstü panel', 'Slim LED panel'],
      aramaHacmi: '5.000+'
    },
    {
      id: 6,
      kategori: 'Avizeler ve Spot Lambalar',
      aciklama: '3\'lü avize, spot lamba, sarkıt avize, ahşap avize, kumandalı LED avize modelleri.',
      ikon: '💎',
      href: '/elektrik-urun/avizeler',
      populerUrunler: ['3 lü avize', 'Spot lamba', 'Sarkıt avize', 'LED avize'],
      aramaHacmi: '5.000+'
    },
    {
      id: 7,
      kategori: 'Şalter ve Sigortalar',
      aciklama: 'Pako şalter, kompakt şalter, otomatik sigorta, sigorta kutusu. ABB, Siemens, Schneider.',
      ikon: '🔒',
      href: '/elektrik-urun/salter-ve-sigortalar',
      populerUrunler: ['Pako şalter', 'Kompakt şalter', 'ABB Şalter', 'Sigorta kutusu'],
      aramaHacmi: '500+'
    },
    {
      id: 8,
      kategori: 'Aplik ve Armatürler',
      aciklama: 'Duvar aplikleri, bant armatür, floresan armatür, acil aydınlatma armatürleri.',
      ikon: '🏮',
      href: '/elektrik-urun/aplik-ve-armaturler',
      populerUrunler: ['Duvar aplik', 'Bant armatür', 'Floresan armatür', 'Acil aydınlatma'],
      aramaHacmi: '500+'
    }
  ]

  const markalar = [
    'Viko', 'Siemens', 'Philips', 'Schneider Electric', 'Legrand', 'ABB',
    'Osram', 'Panasonic', 'CW Enerji', 'Lexron', 'Tunçmatik', 'Almera'
  ]

  const oneCikanUrunler = [
    { isim: '3\'lü Grup Priz (Viko)', fiyat: '150 TL', aciklama: '2 metre kablolu, topraklı' },
    { isim: '9W LED Ampul (Philips)', fiyat: '45 TL', aciklama: 'E27 duy, 4000K gün ışığı' },
    { isim: '100W LED Projektör', fiyat: '850 TL', aciklama: 'IP66, 6500K beyaz ışık' },
    { isim: '40A 30mA Kaçak Akım Rölesi (Siemens)', fiyat: '650 TL', aciklama: '2x40A, monofaze' },
    { isim: '60x60 LED Panel', fiyat: '550 TL', aciklama: 'Sıva üstü, 4000K' },
    { isim: '3\'lü LED Avize', fiyat: '750 TL', aciklama: 'Kumandalı, 3 renk seçeneği' }
  ]

  // Schema Markup
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Elektrik Ürünleri Kategorileri",
    "numberOfItems": urunKategorileri.length,
    "itemListElement": urunKategorileri.map((kat, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "ProductCategory",
        "name": kat.kategori,
        "description": kat.aciklama,
        "url": `https://elektrikteknik.com${kat.href}`
      }
    }))
  }

  const storeSchema = {
    "@context": "https://schema.org",
    "@type": "Store",
    "name": "Elektrik Teknik Elektrik Ürünleri",
    "description": "Toptan ve perakende elektrik malzemeleri satışı. Priz, ampul, projektör, led panel, kaçak akım rölesi.",
    "url": "https://elektrikteknik.com/elektrik-urun/",
    "telephone": "+905327180613",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "A.yesevi Mh. Mekke Cd. No:9",
      "addressLocality": "Sultanbeyli",
      "addressRegion": "İstanbul",
      "addressCountry": "TR"
    },
    "openingHours": "Mo-Su 00:00-23:59",
    "currenciesAccepted": "TRY",
    "paymentAccepted": "Nakit, Kredi Kartı, Havale/EFT"
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Anasayfa", "item": "https://elektrikteknik.com/" },
      { "@type": "ListItem", "position": 2, "name": "Elektrik Ürünleri", "item": "https://elektrikteknik.com/elektrik-urun/" }
    ]
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(storeSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Elektrik Ürünleri</h1>
          <p className="text-xl text-blue-100 mb-6">Toptan ve Perakende Elektrik Malzemeleri Satışı</p>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Priz, ampul, projektör, LED panel, kaçak akım rölesi ve daha fazlası. 
            Viko, Siemens, Philips, Schneider markaları stoklarımızda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a href="tel:+905327180613" className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:shadow-lg">
              Sipariş Ver: 0532 718 06 13
            </a>
            <a href="#kategoriler" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700">
              Kategorileri İncele
            </a>
          </div>
        </div>
      </section>

      {/* Markalar */}
      <section className="py-10 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-900 dark:text-white">Çalıştığımız Markalar</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {markalar.map((marka, i) => (
              <span key={i} className="bg-white dark:bg-gray-900 px-6 py-3 rounded-full shadow-md text-gray-700 dark:text-gray-300 font-medium">
                {marka}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Ürün Kategorileri */}
      <section id="kategoriler" className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Ürün Kategorileri</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {urunKategorileri.map((kat) => (
              <Link key={kat.id} href={kat.href} className="group bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="text-5xl mb-4">{kat.ikon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600">
                  {kat.kategori}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{kat.aciklama}</p>
                <div className="border-t pt-3">
                  <p className="text-xs text-gray-500 mb-2">Popüler Ürünler:</p>
                  <div className="flex flex-wrap gap-1">
                    {kat.populerUrunler.slice(0, 3).map((urun, i) => (
                      <span key={i} className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded">
                        {urun}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Öne Çıkan Ürünler */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Öne Çıkan Ürünler</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {oneCikanUrunler.map((urun, i) => (
              <div key={i} className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{urun.isim}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{urun.aciklama}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">{urun.fiyat}</span>
                  <a href="tel:+905327180613" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700">
                    Sipariş Ver
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Toptan alımlarda özel fiyat teklifi için bize ulaşın.
            </p>
            <a href="tel:+905327180613" className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              0532 718 06 13
            </a>
          </div>
        </div>
      </section>

      {/* SEO İçerik */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-5xl">
          <article className="prose prose-lg dark:prose-invert mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
              İstanbul'da Toptan ve Perakende Elektrik Ürünleri Satışı
            </h2>
            <div className="space-y-6 text-gray-700 dark:text-gray-300 text-justify">
              <p>
                <strong>Elektrik Teknik</strong> olarak İstanbul Sultanbeyli'de elektrik ürünleri 
                satışı yapıyoruz. Prizler, ampuller, projektörler, LED paneller, kaçak akım röleleri, 
                şalterler ve daha binlerce elektrik malzemesini toptan ve perakende olarak temin 
                edebilirsiniz. Viko, Siemens, Philips, Schneider Electric, Legrand, ABB gibi dünya 
                markalarının yetkili satıcısıyız.
              </p>
              <p>
                Stoklarımızda 3'lü priz, 5'li priz, akım korumalı priz, USB'li priz, topraklı priz 
                gibi tüm priz çeşitleri bulunmaktadır. LED ampul, tasarruflu ampul, rustik ampul, 
                şarjlı ampul ve özel efektli ampuller ile aydınlatma ihtiyaçlarınızı karşılıyoruz. 
                50W, 100W, 200W LED projektörler ve sensörlü projektör çeşitlerimiz mevcuttur.
              </p>
              <p>
                Toptan alımlarda özel fiyat avantajları sunuyoruz. Müteahhitler, elektrikçiler ve 
                kurumsal firmalar için cazip tekliflerimiz var. Siparişleriniz İstanbul içi aynı gün, 
                şehir dışına kargo ile gönderilmektedir. Fiyat teklifi ve stok durumu için bize 
                ulaşabilirsiniz.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Toplu Alımlarda Özel Fiyat Teklifi Alın</h2>
          <p className="text-xl text-blue-100 mb-8">
            Projeleriniz için toptan fiyat listesi ve stok durumu için hemen arayın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+905327180613" className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold text-lg hover:shadow-lg">
              Hemen Ara: 0532 718 06 13
            </a>
            <Link href="/iletisim" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700">
              İletişime Geç
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}