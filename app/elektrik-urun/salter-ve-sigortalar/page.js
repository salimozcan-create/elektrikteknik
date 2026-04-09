import Link from 'next/link'

export const metadata = {
  title: 'Şalter ve Sigorta Çeşitleri | Pako Şalter, Kompakt Şalter, Sigorta Kutusu | Elektrik Teknik',
  description: 'Pako şalter, kompakt şalter, otomatik sigorta, sigorta kutusu. ABB, Siemens, Schneider markaları. Toptan fiyatlar. Hemen ara: 0532 718 06 13.',
  keywords: 'pako şalter, kompakt şalter, abb şalter, siemens şalter, otomatik sigorta, sigorta kutusu, 24 lü sigorta kutusu, 3na3832, 1sda',
  alternates: { canonical: 'https://elektrikteknik.com/elektrik-urun/salter-ve-sigortalar/' },
}

export default function SalterPage() {
  const salterKategorileri = [
    { isim: 'Şalter Çeşitleri', urunler: ['Pako Şalter (3 Kademeli)', 'Kompakt Şalter', 'Açık Tip Şalter', '3 Fazlı Şalter'], ikon: '🔀', arama: '500+' },
    { isim: 'Sigortalar', urunler: ['Otomatik Sigorta', 'NH Sigorta', 'Cam Sigorta', 'Termik Sigorta'], ikon: '⚡', arama: '500+' },
    { isim: 'Sigorta Kutuları', urunler: ['8\'li Sigorta Kutusu', '12\'li Sigorta Kutusu', '24\'lü Sigorta Kutusu', '36\'lı Sigorta Kutusu', 'Sıva Altı/Üstü Kutu'], ikon: '📦', arama: '500+' },
    { isim: 'Markalar', urunler: ['ABB Şalter', 'Siemens Şalter', 'Schneider Şalter'], ikon: '🏷️', arama: '500+' }
  ]

  const oneCikanSalterler = [
    { isim: '3 Kademeli Pako Şalter 63A', fiyat: '350 TL', ozellik: '0-1-2 konumlu, 63 amper' },
    { isim: 'ABB 1SDA054396R1 Kompakt Şalter', fiyat: '2.850 TL', ozellik: 'Tmax T4 250A' },
    { isim: 'Siemens 3NA3832 NH Sigorta', fiyat: '180 TL', ozellik: 'NH00, 100A' },
    { isim: '24\'lü Sıva Üstü Sigorta Kutusu', fiyat: '450 TL', ozellik: 'Viko, beyaz, şeffaf kapak' },
    { isim: 'Siemens 5SL6206 Otomat Sigorta', fiyat: '85 TL', ozellik: '6A, 2 kutuplu, C tipi' },
    { isim: 'ABB 1SDA073674R1 Şalter', fiyat: '4.250 TL', ozellik: 'XT4 250A, 3 kutuplu' }
  ]

  return (
    <>
      <section className="bg-gradient-to-r from-gray-700 to-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Şalter ve Sigortalar</h1>
          <p className="text-xl text-gray-300">Pako Şalter, Kompakt Şalter, Sigorta Kutuları - ABB, Siemens</p>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {salterKategorileri.map((kat, i) => (
              <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl">{kat.ikon}</span>
                  <span className="text-xs bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">{kat.arama}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{kat.isim}</h3>
                <ul className="space-y-2">
                  {kat.urunler.map((urun, j) => (
                    <li key={j} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <span className="text-gray-500">▸</span> {urun}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">Öne Çıkan Ürünler</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {oneCikanSalterler.map((urun, i) => (
              <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5 shadow-lg">
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{urun.isim}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-xs mb-4">{urun.ozellik}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-gray-700">{urun.fiyat}</span>
                  <a href="tel:+905327180613" className="bg-gray-700 text-white px-3 py-1.5 rounded text-sm">Sipariş</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-gray-800 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Toptan Şalter ve Sigorta Alımlarında Özel Fiyat</h2>
          <a href="tel:+905327180613" className="inline-block bg-white text-gray-800 px-8 py-3 rounded-lg font-bold text-lg">0532 718 06 13</a>
        </div>
      </section>
    </>
  )
}