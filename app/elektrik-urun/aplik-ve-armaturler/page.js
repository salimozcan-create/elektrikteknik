import Link from 'next/link'

export const metadata = {
  title: 'Aplik ve Armatür Çeşitleri | Duvar Aplik, Bant Armatür, Floresan Armatür | Elektrik Teknik',
  description: 'Duvar aplikleri, bant armatür, floresan armatür, acil aydınlatma armatürleri. Toptan fiyatlar. Hemen ara: 0532 718 06 13.',
  keywords: 'aplik, duvar aplik, bant armatür, floresan armatür, acil aydınlatma armatürü, 60x60 armatür, 4x18 armatür, led armatür',
  alternates: { canonical: 'https://elektrikteknik.com/elektrik-urun/aplik-ve-armaturler/' },
}

export default function AplikPage() {
  const aplikKategorileri = [
    { isim: 'Aplik Çeşitleri', urunler: ['Duvar Aplik', 'LED Aplik', 'Ahşap Aplik', 'Modern Aplik', 'Klasik Aplik'], ikon: '🏮', arama: '500+' },
    { isim: 'Armatür Çeşitleri', urunler: ['Bant Armatür', 'Floresan Armatür', 'LED Armatür', '60x60 Armatür', '4x18 Armatür'], ikon: '💡', arama: '500+' },
    { isim: 'Özel Armatürler', urunler: ['Acil Aydınlatma Armatürü', 'Acil Kitli Armatür', 'Sensörlü Armatür', 'Su Geçirmez Armatür'], ikon: '🚨', arama: '500+' }
  ]

  const oneCikanUrunler = [
    { isim: 'LED Duvar Aplik (Beyaz)', fiyat: '180 TL', ozellik: 'Modern tasarım, 4000K' },
    { isim: 'Ahşap Duvar Aplik', fiyat: '250 TL', ozellik: 'Vintage, rustik, E27 duy' },
    { isim: '36W LED Bant Armatür', fiyat: '450 TL', ozellik: '120cm, 6500K, beyaz' },
    { isim: '72W LED Bant Armatür', fiyat: '850 TL', ozellik: '150cm, yüksek lümen' },
    { isim: 'Acil Aydınlatma Armatürü', fiyat: '320 TL', ozellik: '3 saat çalışma, yönlendirme kiti' },
    { isim: '4x18W Floresan Armatür', fiyat: '550 TL', ozellik: 'Sıva üstü, beyaz' }
  ]

  return (
    <>
      <section className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Aplik ve Armatürler</h1>
          <p className="text-xl text-emerald-100">Duvar Aplik, Bant Armatür, Acil Aydınlatma Armatürleri</p>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {aplikKategorileri.map((kat, i) => (
              <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl">{kat.ikon}</span>
                  <span className="text-xs bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-3 py-1 rounded-full">{kat.arama}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{kat.isim}</h3>
                <ul className="space-y-2">
                  {kat.urunler.map((urun, j) => (
                    <li key={j} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <span className="text-emerald-500">▸</span> {urun}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">Öne Çıkan Aplik ve Armatürler</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {oneCikanUrunler.map((urun, i) => (
              <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5 shadow-lg">
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{urun.isim}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-xs mb-4">{urun.ozellik}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-emerald-600">{urun.fiyat}</span>
                  <a href="tel:+905327180613" className="bg-emerald-600 text-white px-3 py-1.5 rounded text-sm">Sipariş</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-emerald-700 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Toptan Aplik ve Armatür Alımlarında Özel Fiyat</h2>
          <a href="tel:+905327180613" className="inline-block bg-white text-emerald-700 px-8 py-3 rounded-lg font-bold text-lg">0532 718 06 13</a>
        </div>
      </section>
    </>
  )
}