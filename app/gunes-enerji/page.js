export const metadata = {
  title: 'Güneş Enerji | Solar Panel Kurulumu',
  description: 'Güneş enerji sistemleri, solar panel kurulumu, invertör sistemleri ve enerji depolama çözümleri.',
}

export default function GunesEnerjiPage() {
  return (
    <div>
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Güneş Enerji Sistemleri</h1>
          <p className="text-xl">Yenilenebilir enerji ile geleceğe yatırım yapın</p>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Neden Güneş Enerjisi?</h2>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3"><span className="text-yellow-500 text-xl">☀️</span><span>Elektrik faturanızda %70'e varan tasarruf</span></li>
                <li className="flex items-start space-x-3"><span className="text-yellow-500 text-xl">🌱</span><span>Çevre dostu, karbon ayak izinizi azaltın</span></li>
                <li className="flex items-start space-x-3"><span className="text-yellow-500 text-xl">🏠</span><span>Devlet teşvikleri ve desteklerinden faydalanın</span></li>
              </ul>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-xl text-center">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Hemen Bilgi Alın</h3>
              <a href="/iletisim" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">İletişime Geç</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}