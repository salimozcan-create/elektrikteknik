import Link from 'next/link'

export const metadata = {
  title: 'Priz Çeşitleri | 3\'lü Priz, 5\'li Priz, Akım Korumalı Priz, USB Priz | Elektrik Teknik',
  description: 'Viko, Siemens, Schneider marka prizler. 3\'lü priz, 5\'li priz, akım korumalı priz, USB\'li priz, topraklı priz, sıva altı/üstü priz. Toptan ve perakende satış. Hemen ara: 0532 718 06 13.',
  keywords: '3 lü priz, 5 li priz, akım korumalı priz, topraklı priz, usb priz, viko priz, grup priz, uzatma kablosu',
  alternates: { canonical: 'https://elektrikteknik.com/elektrik-urun/prizler/' },
}

export default function PrizlerPage() {
  const prizKategorileri = [
    { isim: 'Grup Prizler', urunler: ['3\'lü Priz', '5\'li Priz', '6\'lı Priz', '8\'li Priz', '10\'lu Priz'], ikon: '🔌' },
    { isim: 'Akım Korumalı Prizler', urunler: ['Akım Korumalı 3\'lü Priz', 'Akım Korumalı 5\'li Priz', 'UPS Priz'], ikon: '🛡️' },
    { isim: 'Duvar Prizleri', urunler: ['Topraklı Priz', 'USB\'li Priz', 'Sıva Altı Priz', 'Sıva Üstü Priz'], ikon: '🧱' },
    { isim: 'Özel Prizler', urunler: ['Kauçuk Priz', 'Papatya Priz', 'Yonca Priz', 'Golyat Priz'], ikon: '⚡' }
  ]

  const oneCikanPrizler = [
    { isim: 'Viko 3\'lü Grup Priz (2 Metre)', fiyat: '150 TL', ozellik: 'Topraklı, beyaz' },
    { isim: 'Viko 5\'li Grup Priz (3 Metre)', fiyat: '250 TL', ozellik: 'Topraklı, anahtarlı' },
    { isim: 'Akım Korumalı 5\'li Priz', fiyat: '450 TL', ozellik: 'Aşırı gerilim korumalı' },
    { isim: 'Viko USB\'li Duvar Priz', fiyat: '180 TL', ozellik: '2 USB + 2 priz, beyaz' },
    { isim: 'Kauçuk 3\'lü Sanayi Priz', fiyat: '350 TL', ozellik: 'Su geçirmez, 5 metre' },
    { isim: 'Topraklı Sıva Altı Priz', fiyat: '45 TL', ozellik: 'Viko, beyaz' }
  ]

  const markalar = ['Viko', 'Siemens', 'Schneider Electric', 'Legrand', 'Tunçmatik', 'Almera']

  return (
    <>
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Priz Çeşitleri</h1>
          <p className="text-xl text-blue-100">Grup Prizler, Akım Korumalı Prizler, Duvar Prizleri</p>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {prizKategorileri.map((kat, i) => (
              <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                <div className="text-4xl mb-4">{kat.ikon}</div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{kat.isim}</h3>
                <ul className="space-y-2">
                  {kat.urunler.map((urun, j) => (
                    <li key={j} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <span className="text-blue-500">▸</span> {urun}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">Öne Çıkan Prizler</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {oneCikanPrizler.map((urun, i) => (
              <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{urun.isim}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{urun.ozellik}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">{urun.fiyat}</span>
                  <a href="tel:+905327180613" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                    Sipariş Ver
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Priz Markaları</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {markalar.map((m, i) => (
              <span key={i} className="bg-white dark:bg-gray-900 px-6 py-3 rounded-full shadow-md">{m}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-700 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Toptan Priz Alımlarında Özel Fiyat</h2>
          <a href="tel:+905327180613" className="inline-block bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold text-lg">
            0532 718 06 13
          </a>
        </div>
      </section>
    </>
  )
}