import Link from 'next/link'

export const metadata = {
  title: 'Avize Çeşitleri | 3\'lü Avize, Spot Lamba, Sarkıt Avize, LED Avize | Elektrik Teknik',
  description: '3\'lü avize, spot lamba, sarkıt avize, LED avize, kumandalı avize modelleri. Salon, mutfak, yatak odası avizeleri. Toptan fiyatlar. Hemen ara: 0532 718 06 13.',
  keywords: 'avize, 3 lü avize, spot lamba, sarkıt avize, led avize, salon avizesi, mutfak avizesi, kumandalı avize, ahşap avize, modern avize',
  alternates: { canonical: 'https://elektrikteknik.com/elektrik-urun/avizeler/' },
}

export default function AvizelerPage() {
  const avizeKategorileri = [
    { isim: 'Avize Çeşitleri', urunler: ['3\'lü Avize', '5\'li Avize', 'Sarkıt Avize', 'Spot Avize', 'LED Avize'], ikon: '💎', arama: '5.000+' },
    { isim: 'Kullanım Alanı', urunler: ['Salon Avizesi', 'Mutfak Avizesi', 'Yatak Odası Avizesi', 'Çocuk Odası Avizesi'], ikon: '🏠', arama: '500+' },
    { isim: 'Tarz', urunler: ['Modern Avize', 'Klasik Avize', 'Ahşap Avize', 'Kristal Avize', 'Endüstriyel Avize'], ikon: '✨', arama: '500+' },
    { isim: 'Özellik', urunler: ['Kumandalı Avize', '3 Renkli Avize', 'Dimmer Uyumlu Avize'], ikon: '🎮', arama: '500+' }
  ]

  const oneCikanAvizeler = [
    { isim: '3\'lü LED Spot Avize', fiyat: '750 TL', ozellik: 'Kumandalı, 3 renk seçeneği, sarkıt' },
    { isim: 'Ahşap Sarkıt Avize', fiyat: '1.250 TL', ozellik: 'Doğal ahşap, 3\'lü, vintage' },
    { isim: '5\'li Modern Salon Avizesi', fiyat: '1.850 TL', ozellik: 'Krom kaplama, LED uyumlu' },
    { isim: '3\'lü Ray Spot Avize', fiyat: '650 TL', ozellik: 'Hareketli başlık, beyaz' },
    { isim: 'Kristal Sarkıt Avize', fiyat: '2.450 TL', ozellik: '3\'lü, klasik tasarım' }
  ]

  return (
    <>
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Avize Çeşitleri</h1>
          <p className="text-xl text-purple-100">3'lü Avize, Spot Lamba, Sarkıt Avize, LED Avize</p>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {avizeKategorileri.map((kat, i) => (
              <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl">{kat.ikon}</span>
                  <span className="text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full">{kat.arama}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{kat.isim}</h3>
                <ul className="space-y-2">
                  {kat.urunler.map((urun, j) => (
                    <li key={j} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <span className="text-purple-500">▸</span> {urun}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">Öne Çıkan Avizeler</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {oneCikanAvizeler.map((urun, i) => (
              <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5 shadow-lg">
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{urun.isim}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-xs mb-4">{urun.ozellik}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-purple-600">{urun.fiyat}</span>
                  <a href="tel:+905327180613" className="bg-purple-600 text-white px-3 py-1.5 rounded text-sm">Sipariş</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-purple-700 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Toptan Avize Alımlarında Özel İndirim</h2>
          <a href="tel:+905327180613" className="inline-block bg-white text-purple-700 px-8 py-3 rounded-lg font-bold text-lg">0532 718 06 13</a>
        </div>
      </section>
    </>
  )
}