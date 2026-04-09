import Link from 'next/link'

export const metadata = {
  title: 'LED Panel Çeşitleri | 60x60, 30x30, 60x120 LED Panel, Sıva Altı/Üstü | Elektrik Teknik',
  description: '60x60, 30x30, 60x120 LED paneller. Sıva altı, sıva üstü, slim LED panel çeşitleri. 18W, 36W, 40W, 48W. Philips, Ack, Pelsan markaları. Toptan fiyatlar. Hemen ara: 0532 718 06 13.',
  keywords: '60x60 led panel, 30x30 led panel, sıva üstü led panel, sıva altı led panel, slim led panel, 60x120 led panel, philips led panel, ack led panel, 40w led panel',
  alternates: { canonical: 'https://elektrikteknik.com/elektrik-urun/led-paneller/' },
}

export default function LedPanellerPage() {
  const panelKategorileri = [
    { 
      id: 1,
      isim: 'Ebatlara Göre', 
      urunler: ['30x30 LED Panel', '60x60 LED Panel', '30x120 LED Panel', '60x120 LED Panel'], 
      ikon: '📐', 
      arama: '5.000+' 
    },
    { 
      id: 2,
      isim: 'Montaj Tipine Göre', 
      urunler: ['Sıva Üstü LED Panel', 'Sıva Altı LED Panel', 'Slim LED Panel', 'Askı Telli LED Panel'], 
      ikon: '🔧', 
      arama: '5.000+' 
    },
    { 
      id: 3,
      isim: 'Güç Watt', 
      urunler: ['18W LED Panel', '36W LED Panel', '40W LED Panel', '48W LED Panel', '72W LED Panel'], 
      ikon: '⚡', 
      arama: '500+' 
    },
    { 
      id: 4,
      isim: 'Renk Sıcaklığı', 
      urunler: ['4000K Gün Işığı Panel', '6500K Beyaz Işık Panel'], 
      ikon: '🎨', 
      arama: '500+' 
    }
  ]

  const oneCikanPaneller = [
    { id: 1, isim: '60x60 40W Sıva Üstü LED Panel', fiyat: '550 TL', ozellik: '4000K, 4000 lümen, beyaz kasa' },
    { id: 2, isim: '60x60 40W Sıva Altı LED Panel', fiyat: '480 TL', ozellik: '4000K, slim tasarım' },
    { id: 3, isim: '60x60 48W Slim LED Panel (Ack)', fiyat: '650 TL', ozellik: '6500K, yüksek verim, 2 yıl garanti' },
    { id: 4, isim: '30x30 18W Sıva Üstü LED Panel', fiyat: '320 TL', ozellik: '4000K, kompakt, banyo/mutfak için' },
    { id: 5, isim: '60x120 72W Sıva Üstü LED Panel', fiyat: '1.250 TL', ozellik: '6500K, ofis/plaza için ideal' },
    { id: 6, isim: 'Philips 60x60 34W LED Panel', fiyat: '850 TL', ozellik: '4000K, CoreLine serisi' }
  ]

  const markalar = ['Philips', 'Ack', 'Pelsan', 'Osram', 'Alvino']

  const sikSorulanSorular = [
    {
      soru: 'Sıva üstü ve sıva altı LED panel farkı nedir?',
      cevap: 'Sıva üstü paneller doğrudan tavana monte edilir, kasası görünür. Sıva altı paneller ise alçıpan/asma tavan içine gömülerek monte edilir, sadece ışık yüzeyi görünür. Asma tavan varsa sıva altı, beton tavan varsa sıva üstü tercih edilmelidir.'
    },
    {
      soru: '60x60 LED panel kaç watt olmalı?',
      cevap: 'Ofis ve çalışma alanları için 40W yeterlidir. Daha aydınlık istenen yerlerde 48W tercih edilebilir. Ev kullanımı için 36W da yeterli olabilir. Watt arttıkça lümen (parlaklık) değeri de artar.'
    },
    {
      soru: 'LED panel montajı nasıl yapılır?',
      cevap: 'Sıva üstü paneller dübel ve vida ile doğrudan tavana sabitlenir, elektrik bağlantısı yapılır. Sıva altı paneller için asma tavan konstrüksiyonuna uygun boşluk bırakılmalıdır. Profesyonel elektrikçi tarafından montaj önerilir.'
    },
    {
      soru: '4000K ve 6500K arasındaki fark nedir?',
      cevap: '4000K doğal gün ışığı rengidir, gözü yormaz, ofis ve ev için idealdir. 6500K soğuk beyaz/mavi ışıktır, daha parlaktır, hastane ve mağaza gibi alanlarda tercih edilir.'
    }
  ]

  // Schema Markup
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProductCategory",
    "name": "LED Panel Çeşitleri",
    "description": "60x60, 30x30, sıva altı, sıva üstü LED paneller. Philips, Ack, Pelsan.",
    "url": "https://elektrikteknik.com/elektrik-urun/led-paneller/",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "TRY",
      "lowPrice": "320",
      "highPrice": "1250"
    }
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">LED Paneller</h1>
          <p className="text-xl text-blue-100">60x60, 30x30, Sıva Altı, Sıva Üstü, Slim LED Paneller</p>
        </div>
      </section>

      {/* Kategoriler Grid */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {panelKategorileri.map((kat) => (
              <div key={kat.id} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl">{kat.ikon}</span>
                  <span className="text-xs bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 px-3 py-1 rounded-full">
                    {kat.arama}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{kat.isim}</h3>
                <ul className="space-y-2">
                  {kat.urunler.map((urun, j) => (
                    <li key={j} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <span className="text-cyan-500">▸</span> {urun}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Öne Çıkan Ürünler */}
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">Öne Çıkan LED Paneller</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {oneCikanPaneller.map((urun) => (
              <div key={urun.id} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5 shadow-lg hover:shadow-xl transition-all">
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{urun.isim}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-xs mb-4">{urun.ozellik}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-cyan-600 dark:text-cyan-400">{urun.fiyat}</span>
                  <a href="tel:+905327180613" className="bg-cyan-600 hover:bg-cyan-700 text-white px-3 py-1.5 rounded text-sm font-semibold transition-colors">
                    Sipariş
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Markalar */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h3 className="text-xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            LED Panel Markaları
          </h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {markalar.map((marka, i) => (
              <span key={i} className="bg-white dark:bg-gray-900 px-6 py-3 rounded-full shadow-md text-gray-700 dark:text-gray-300 font-medium">
                {marka}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Sık Sorulan Sorular */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">Sık Sorulan Sorular</h2>
          <div className="space-y-4">
            {sikSorulanSorular.map((item, i) => (
              <details key={i} className="group bg-gray-50 dark:bg-gray-800 rounded-xl p-5 shadow-md">
                <summary className="font-bold text-gray-900 dark:text-white cursor-pointer list-none flex items-center justify-between">
                  <span>{item.soru}</span>
                  <svg className="w-5 h-5 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="text-gray-600 dark:text-gray-400 mt-3">{item.cevap}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-cyan-600 to-blue-700 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Toptan LED Panel Alımlarında Özel Fiyat</h2>
          <p className="text-xl text-cyan-100 mb-8">
            Projeleriniz için toptan fiyat teklifi alın, stok durumunu öğrenin.
          </p>
          <a href="tel:+905327180613" className="inline-block bg-white text-cyan-700 px-10 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all hover:scale-105">
            0532 718 06 13
          </a>
        </div>
      </section>
    </>
  )
}