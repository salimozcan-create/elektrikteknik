export const metadata = {
  title: 'Hakkımızda | Elektrik Teknik',
  description: '10+ yıllık deneyimle profesyonel elektrik hizmetleri. Müşteri memnuniyeti odaklı çalışıyoruz.',
}

export default function HakkimizdaPage() {
  return (
    <div>
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hakkımızda</h1>
          <p className="text-xl text-blue-100">10+ yıllık deneyimle güvenilir elektrik hizmeti</p>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="space-y-12">
            {/* Vizyon ve Misyon */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl">
                <div className="text-4xl mb-4">🎯</div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Vizyonumuz</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Türkiye'nin lider elektrik hizmetleri markası olmak ve yenilikçi çözümlerle sektöre yön vermek. 
                  Güneş enerjisi ve akıllı ev sistemlerinde öncü firma olmayı hedefliyoruz.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl">
                <div className="text-4xl mb-4">💡</div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Misyonumuz</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Müşterilerimize en kaliteli, en güvenli ve en uygun fiyatlı elektrik hizmetlerini sunmak, 
                  güneş enerji sistemleriyle çevreye katkı sağlamak ve 7/24 kesintisiz destek vermek.
                </p>
              </div>
            </div>

            {/* Hikayemiz */}
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">📖 Hikayemiz</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Elektrik Teknik, 2014 yılında İstanbul'da kurulmuştur. Kurulduğumuz günden bu yana, 
                elektrik sektöründe kaliteli ve güvenilir hizmet anlayışıyla çalışıyoruz.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Bugün 20+ kişilik uzman ekibimizle, yüzlerce mutlu müşteriye hizmet vermenin gururunu yaşıyoruz. 
                Her geçen gün kendimizi yenileyerek, en yeni teknolojileri takip ediyor ve müşterilerimize 
                en iyi hizmeti sunmak için çalışıyoruz.
              </p>
            </div>

            {/* Değerlerimiz */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">Değerlerimiz</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { title: 'Güvenilirlik', desc: 'Verdiğimiz sözleri tutarız', icon: '🔒' },
                  { title: 'Kalite', desc: 'En iyi malzemeleri kullanırız', icon: '⭐' },
                  { title: 'Hız', desc: '7/24 acil müdahale', icon: '⚡' },
                  { title: 'Şeffaflık', desc: 'Fiyatlandırmada açıklık', icon: '📋' }
                ].map((value, i) => (
                  <div key={i} className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                    <div className="text-3xl mb-2">{value.icon}</div>
                    <h3 className="font-bold text-gray-900 dark:text-white">{value.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{value.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Ekip */}
            <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-2xl text-center">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">👥 Profesyonel Ekibimiz</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Lisanslı, sertifikalı ve deneyimli teknik ekibimizle hizmetinizdeyiz. 
                Tüm personelimiz düzenli olarak eğitim almakta ve sektördeki yenilikleri takip etmektedir.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}