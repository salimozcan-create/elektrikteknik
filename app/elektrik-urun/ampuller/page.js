import Link from 'next/link'

export const metadata = {
  title: 'Ampul Çeşitleri | LED Ampul, Tasarruflu Ampul, Rustik Ampul, Şarjlı Ampul | Elektrik Teknik',
  description: 'Philips, Osram, Siemens marka ampuller. LED ampul, 9W, 12W, 20W, tasarruflu ampul, rustik ampul, şarjlı ampul, alev efektli ampul, E14/E27 duy. Toptan fiyatlar. Hemen ara: 0532 718 06 13.',
  keywords: 'led ampul, tasarruflu ampul, rustik ampul, şarjlı ampul, 9w led ampul, 20w led ampul, philips ampul, osram ampul, e27 ampul, e14 ampul, alev efektli ampul, akkor ampul, halojen ampul',
  alternates: { canonical: 'https://elektrikteknik.com/elektrik-urun/ampuller/' },
}

export default function AmpullerPage() {
  const ampulKategorileri = [
    { isim: 'LED Ampuller', urunler: ['9W LED Ampul', '12W LED Ampul', '15W LED Ampul', '20W LED Ampul', '40W LED Ampul', '50W LED Ampul'], ikon: '💡', arama: '50.000+' },
    { isim: 'Tasarruflu Ampuller', urunler: ['8W Tasarruflu', '15W Tasarruflu', '20W Tasarruflu', '23W Tasarruflu', '45W Tasarruflu'], ikon: '🌱', arama: '5.000+' },
    { isim: 'Özel Ampuller', urunler: ['Rustik Ampul', 'Alev Efektli Ampul', 'Şarjlı LED Ampul', '3 Kanatlı LED', 'Mum Ampul'], ikon: '✨', arama: '5.000+' },
    { isim: 'Duy Tipine Göre', urunler: ['E27 Duy Ampul', 'E14 Duy Ampul', 'G4 Ampul', 'GU10 Ampul', 'B22 Duy Ampul'], ikon: '🔧', arama: '500+' },
    { isim: 'Voltaja Göre', urunler: ['12 Volt Ampul', '24 Volt Ampul', '220 Volt Ampul', '12V LED Ampul'], ikon: '⚡', arama: '500+' },
    { isim: 'Renk Sıcaklığı', urunler: ['2700K Sarı Işık', '4000K Gün Işığı', '6500K Beyaz Işık', 'RGB Renkli Ampul'], ikon: '🎨', arama: '500+' }
  ]

  const oneCikanAmpuller = [
    { isim: 'Philips 9W LED Ampul E27', fiyat: '45 TL', ozellik: '4000K gün ışığı, A+++' },
    { isim: 'Osram 20W LED Ampul E27', fiyat: '85 TL', ozellik: '6500K beyaz ışık, 2000 lümen' },
    { isim: 'Rustik Dekoratif Ampul E27', fiyat: '65 TL', ozellik: 'Amber renk, 4W, vintage' },
    { isim: 'Şarjlı LED Ampul (Acil)', fiyat: '120 TL', ozellik: 'Kesintide 4 saat yanar' },
    { isim: 'Alev Efektli LED Ampul E27', fiyat: '95 TL', ozellik: 'Alev efekti, 3W, dekoratif' },
    { isim: '3 Kanatlı LED Ampul 30W', fiyat: '150 TL', ozellik: 'Yüksek lümen, garaj/bahçe için' },
    { isim: 'Philips 8W Tasarruflu Ampul', fiyat: '55 TL', ozellik: 'E27, 4000K, %80 tasarruf' },
    { isim: '12V 5W LED Ampul (Araba)', fiyat: '35 TL', ozellik: '12 volt, karavan/tekne için' }
  ]

  const markalar = ['Philips', 'Osram', 'Siemens', 'Aeron', 'Ack', 'Almina', 'Gookir']

  const sikSorulanSorular = [
    { soru: 'LED ampul ile tasarruflu ampul arasındaki fark nedir?', cevap: 'LED ampuller daha az enerji tüketir (yaklaşık %90 tasarruf), daha uzun ömürlüdür (25.000 saat) ve anında tam ışık verir. Tasarruflu ampuller (CFL) %75 tasarruf sağlar, 8.000 saat ömürlüdür ve tam parlaklığa ulaşması biraz zaman alır.' },
    { soru: '2700K, 4000K, 6500K ne anlama gelir?', cevap: 'Kelvin (K) değeri ışığın renk sıcaklığını belirtir. 2700K sarı/sıcak ışık (oturma odası için ideal), 4000K doğal gün ışığı (mutfak/ofis için), 6500K soğuk beyaz ışık (banyo/çalışma alanı için) anlamına gelir.' },
    { soru: 'E27 ve E14 duy farkı nedir?', cevap: 'E27 (Edison 27mm) standart büyük duydur, evlerdeki çoğu avize ve lambada kullanılır. E14 (Edison 14mm) küçük/mum duydur, apliklerde, avizelerde ve dekoratif lambalarda kullanılır.' },
    { soru: 'Şarjlı ampul nasıl çalışır?', cevap: 'Şarjlı ampuller elektrik varken kendi içindeki bataryayı şarj eder. Elektrik kesildiğinde otomatik olarak bataryadan çalışmaya devam eder (genelde 3-6 saat). Acil aydınlatma için idealdir.' }
  ]

  const schema = {
    "@context": "https://schema.org",
    "@type": "ProductCategory",
    "name": "Ampul Çeşitleri",
    "description": "LED ampul, tasarruflu ampul, rustik ampul, şarjlı ampul çeşitleri. Philips, Osram, Siemens.",
    "url": "https://elektrikteknik.com/elektrik-urun/ampuller/",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "TRY",
      "lowPrice": "35",
      "highPrice": "150"
    }
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      
      <section className="bg-gradient-to-r from-yellow-500 to-amber-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Ampul Çeşitleri</h1>
          <p className="text-xl text-yellow-100">LED Ampul, Tasarruflu Ampul, Rustik Ampul, Şarjlı Ampul</p>
          <p className="text-lg mt-4">Philips, Osram, Siemens markaları stoklarımızda</p>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {ampulKategorileri.map((kat, i) => (
              <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl">{kat.ikon}</span>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full">Aylık {kat.arama}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{kat.isim}</h3>
                <ul className="space-y-2">
                  {kat.urunler.map((urun, j) => (
                    <li key={j} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <span className="text-yellow-500">▸</span> {urun}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">Öne Çıkan Ampuller</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {oneCikanAmpuller.map((urun, i) => (
              <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5 shadow-lg">
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{urun.isim}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-xs mb-4">{urun.ozellik}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-amber-600">{urun.fiyat}</span>
                  <a href="tel:+905327180613" className="bg-amber-600 text-white px-3 py-1.5 rounded text-sm font-semibold">Sipariş</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">Sık Sorulan Sorular</h2>
          <div className="space-y-4">
            {sikSorulanSorular.map((item, i) => (
              <details key={i} className="bg-white dark:bg-gray-900 rounded-xl p-5">
                <summary className="font-bold text-gray-900 dark:text-white cursor-pointer">{item.soru}</summary>
                <p className="text-gray-600 dark:text-gray-400 mt-3">{item.cevap}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-amber-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Toptan Ampul Alımlarında Özel İndirim</h2>
          <a href="tel:+905327180613" className="inline-block bg-white text-amber-700 px-8 py-3 rounded-lg font-bold text-lg">0532 718 06 13</a>
        </div>
      </section>
    </>
  )
}