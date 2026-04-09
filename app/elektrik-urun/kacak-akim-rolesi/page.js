import Link from 'next/link'

export const metadata = {
  title: 'Kaçak Akım Rölesi | 25A, 40A, 63A, 300mA, 30mA | Siemens, Schneider, ABB',
  description: 'Siemens, Schneider, ABB, Legrand marka kaçak akım röleleri. 25A, 40A, 63A, 30mA, 300mA, 2x40, 4x40, monofaze, trifaze kaçak akım rölesi. Toptan fiyatlar. Hemen ara: 0532 718 06 13.',
  keywords: 'kaçak akım rölesi, 40 amper kaçak akım rölesi, 63 amper kaçak akım, 300ma kaçak akım rölesi, 30ma kaçak akım, siemens kaçak akım, schneider röle, abb kaçak akım, 2x40 kaçak akım, 4x40 kaçak akım',
  alternates: { canonical: 'https://elektrikteknik.com/elektrik-urun/kacak-akim-rolesi/' },
}

export default function KacakAkimPage() {
  const roleKategorileri = [
    { isim: 'Akım Değerine Göre', urunler: ['25A Kaçak Akım', '40A Kaçak Akım', '63A Kaçak Akım', '80A Kaçak Akım', '100A Kaçak Akım'], ikon: '⚡', arama: '5.000+' },
    { isim: 'Kaçak Akım Hassasiyeti', urunler: ['30mA Kaçak Akım (İnsan Koruma)', '300mA Kaçak Akım (Yangın Koruma)'], ikon: '🛡️', arama: '5.000+' },
    { isim: 'Faz Sayısına Göre', urunler: ['Monofaze Kaçak Akım (2x25, 2x40)', 'Trifaze Kaçak Akım (4x25, 4x40, 4x63)'], ikon: '🔌', arama: '500+' },
    { isim: 'Markalar', urunler: ['Siemens Kaçak Akım', 'Schneider Kaçak Akım', 'ABB Kaçak Akım', 'Legrand Kaçak Akım', 'Viko Kaçak Akım'], ikon: '🏷️', arama: '500+' }
  ]

  const oneCikanRoleler = [
    { isim: 'Siemens 2x40A 30mA Kaçak Akım', fiyat: '650 TL', ozellik: 'Monofaze, insan koruma' },
    { isim: 'Siemens 4x40A 30mA Kaçak Akım', fiyat: '1.250 TL', ozellik: 'Trifaze, kompakt tip' },
    { isim: 'Siemens 4x63A 300mA Kaçak Akım', fiyat: '1.850 TL', ozellik: 'Trifaze, yangın koruma' },
    { isim: 'Schneider 40A 30mA Kaçak Akım', fiyat: '580 TL', ozellik: 'A tipi, monofaze' },
    { isim: 'ABB 40A 300mA Kaçak Akım', fiyat: '720 TL', ozellik: 'Yangın koruma, 4 kutuplu' },
    { isim: 'Legrand 4x40A 30mA Kaçak Akım', fiyat: '950 TL', ozellik: 'Trifaze, insan koruma' }
  ]

  const markalar = ['Siemens', 'Schneider Electric', 'ABB', 'Legrand', 'Viko']

  const sikSorulanSorular = [
    { soru: '30mA ve 300mA kaçak akım rölesi farkı nedir?', cevap: '30mA (miliamper) kaçak akım rölesi insan hayatını korumak içindir. 30mA üzerinde kaçak algılarsa devreyi keser. 300mA ise yangın koruma amaçlıdır, hassasiyeti daha düşüktür, ana pano girişlerinde kullanılır.' },
    { soru: 'Kaçak akım rölesi neden atar?', cevap: '1) Gerçek kaçak (cihazdan toprağa akım kaçağı), 2) Toprak-nötr teması, 3) Nemli ortamlarda yalıtım sorunu, 4) Röle arızası. Sürekli atıyorsa mutlaka bir elektrikçi çağırın.' },
    { soru: '2x40 ve 4x40 ne demek?', cevap: '2x40: 2 kutuplu (faz + nötr), 40A, monofaze sistemler için. 4x40: 4 kutuplu (3 faz + nötr), 40A, trifaze (sanayi) sistemler için kullanılır.' },
    { soru: 'A tipi ve AC tipi kaçak akım rölesi farkı nedir?', cevap: 'AC tipi sadece alternatif akım kaçaklarını algılar. A tipi hem AC hem de DC (doğru akım) kaçaklarını algılar. Günümüzde elektronik cihazların yaygınlaşması nedeniyle A tipi önerilir.' }
  ]

  return (
    <>
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Kaçak Akım Röleleri</h1>
          <p className="text-xl text-red-100">Siemens, Schneider, ABB, Legrand - 25A, 40A, 63A, 30mA, 300mA</p>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {roleKategorileri.map((kat, i) => (
              <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl">{kat.ikon}</span>
                  <span className="text-xs bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 px-3 py-1 rounded-full">{kat.arama}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{kat.isim}</h3>
                <ul className="space-y-2">
                  {kat.urunler.map((urun, j) => (
                    <li key={j} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <span className="text-red-500">▸</span> {urun}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">Öne Çıkan Kaçak Akım Röleleri</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {oneCikanRoleler.map((urun, i) => (
              <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5 shadow-lg">
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{urun.isim}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-xs mb-4">{urun.ozellik}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-red-600">{urun.fiyat}</span>
                  <a href="tel:+905327180613" className="bg-red-600 text-white px-3 py-1.5 rounded text-sm">Sipariş</a>
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

      <section className="py-10 bg-red-700 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Toptan Kaçak Akım Rölesi Alımlarında Özel İndirim</h2>
          <a href="tel:+905327180613" className="inline-block bg-white text-red-700 px-8 py-3 rounded-lg font-bold text-lg">0532 718 06 13</a>
        </div>
      </section>
    </>
  )
}