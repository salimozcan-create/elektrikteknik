import Link from 'next/link'

export const metadata = {
  title: 'Projektör Çeşitleri | 50W, 100W, 200W LED Projektör, Sensörlü Projektör | Elektrik Teknik',
  description: '50W, 100W, 200W, 400W LED projektörler. Sensörlü, şarjlı, RGB, yeşil, beyaz projektör çeşitleri. Ack, Alvino, Philips, Cata markaları. Toptan fiyatlar. Hemen ara: 0532 718 06 13.',
  keywords: 'led projektör, 50w projektör, 100w led projektör, 200w projektör, sensörlü projektör, şarjlı projektör, rgb projektör, yeşil projektör, dış mekan projektör, cata projektör, ack projektör',
  alternates: { canonical: 'https://elektrikteknik.com/elektrik-urun/projektorler/' },
}

export default function ProjektorlerPage() {
  const projektorKategorileri = [
    { isim: 'Watt Gücüne Göre', urunler: ['10W Projektör', '20W Projektör', '30W Projektör', '50W Projektör', '100W Projektör', '150W Projektör', '200W Projektör', '300W Projektör', '400W Projektör', '500W Projektör'], ikon: '🔦', arama: '50.000+' },
    { isim: 'Özelliklerine Göre', urunler: ['Sensörlü Projektör', 'Şarjlı LED Projektör', 'RGB Renkli Projektör', 'Solar Projektör', 'IP66 Su Geçirmez'], ikon: '⚙️', arama: '5.000+' },
    { isim: 'Renk Seçenekleri', urunler: ['Beyaz Işık Projektör', 'Yeşil Projektör', 'Sarı Projektör', 'RGB Projektör'], ikon: '🎨', arama: '500+' },
    { isim: 'Markalar', urunler: ['Ack Projektör', 'Alvino Projektör', 'Philips Projektör', 'Cata Projektör', 'Pelsan Projektör'], ikon: '🏷️', arama: '500+' }
  ]

  const oneCikanProjektorler = [
    { isim: '50W LED Projektör (Ack)', fiyat: '450 TL', ozellik: '6500K beyaz, IP65 su geçirmez' },
    { isim: '100W LED Projektör (Cata)', fiyat: '850 TL', ozellik: '8500 lümen, IP66, 2 yıl garanti' },
    { isim: '200W LED Projektör (Ack)', fiyat: '1.650 TL', ozellik: '17000 lümen, geniş açı' },
    { isim: '50W Sensörlü LED Projektör', fiyat: '550 TL', ozellik: 'Hareket sensörlü, otomatik yanar' },
    { isim: '100W RGB LED Projektör', fiyat: '1.200 TL', ozellik: '16 renk, kumandalı, uzaktan kontrol' },
    { isim: '50W Şarjlı LED Projektör', fiyat: '750 TL', ozellik: 'Akülü, 6 saat çalışma, portatif' },
    { isim: '20W Yeşil LED Projektör', fiyat: '350 TL', ozellik: 'Yeşil ışık, bahçe/peyzaj için' },
    { isim: '400W LED Projektör (Philips)', fiyat: '3.850 TL', ozellik: '40000 lümen, stadyum aydınlatma' }
  ]

  const markalar = ['Ack', 'Alvino', 'Philips', 'Cata', 'Pelsan', 'Horoz', 'Alkan']

  const sikSorulanSorular = [
    { soru: 'Kaç watt projektör almalıyım?', cevap: 'Bahçe aydınlatması için 30-50W, bina dış cephe için 100W, geniş alan/şantiye için 200W, stadyum/büyük alan için 400W ve üzeri önerilir.' },
    { soru: 'IP65 ve IP66 ne demek?', cevap: 'IP koruma sınıfıdır. IP65 toza karşı tam korumalı ve her yönden su jetine dayanıklıdır. IP66 daha güçlü su jetlerine karşı dayanıklıdır. Dış mekanda IP65 yeterlidir.' },
    { soru: 'Sensörlü projektör nasıl çalışır?', cevap: 'Üzerindeki PIR hareket sensörü sayesinde hareket algıladığında otomatik yanar. Ayarlanabilir süre (10 sn - 5 dk) sonunda söner. Güvenlik ve enerji tasarrufu için idealdir.' },
    { soru: 'RGB projektör ile normal projektör farkı nedir?', cevap: 'RGB projektörler kırmızı, yeşil, mavi LED\'lerin karışımıyla 16 milyon renk üretebilir. Kumanda veya uygulama ile renk değiştirilebilir. Dekoratif ve sahne aydınlatması için kullanılır.' }
  ]

  return (
    <>
      <section className="bg-gradient-to-r from-slate-700 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">LED Projektörler</h1>
          <p className="text-xl text-slate-300">50W, 100W, 200W, 400W - Sensörlü, Şarjlı, RGB</p>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {projektorKategorileri.map((kat, i) => (
              <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl">{kat.ikon}</span>
                  <span className="text-xs bg-slate-200 dark:bg-slate-700 px-3 py-1 rounded-full">{kat.arama}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{kat.isim}</h3>
                <ul className="space-y-2">
                  {kat.urunler.map((urun, j) => (
                    <li key={j} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <span className="text-slate-500">▸</span> {urun}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">Öne Çıkan Projektörler</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {oneCikanProjektorler.map((urun, i) => (
              <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5 shadow-lg">
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{urun.isim}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-xs mb-4">{urun.ozellik}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-slate-700 dark:text-slate-300">{urun.fiyat}</span>
                  <a href="tel:+905327180613" className="bg-slate-700 text-white px-3 py-1.5 rounded text-sm">Sipariş</a>
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

      <section className="py-10 bg-slate-800 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Toptan Projektör Alımlarında Özel Fiyat</h2>
          <a href="tel:+905327180613" className="inline-block bg-white text-slate-800 px-8 py-3 rounded-lg font-bold text-lg">0532 718 06 13</a>
        </div>
      </section>
    </>
  )
}