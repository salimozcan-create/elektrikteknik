export const metadata = {
  title: '7/24 Elektrik Tamir ve Arıza Servisi | Acil Elektrikçi | Elektrik Teknik',
  description: 'İstanbul\'da 7/24 acil elektrik tamir, arıza giderme, sigorta değişimi, priz montajı ve tesisat yenileme. En yakın elektrikçi için hemen arayın: 0532 718 06 13',
  keywords: 'elektrik tamir, acil elektrikçi, elektrik arıza, sigorta değişimi, priz değişimi, elektrik tesisatı, elektrik ustası, 7/24 elektrikçi, elektrikçi en yakın, bana en yakın elektrikçi, yakınımda elektrikçi, gece açık elektrikçi, pazar günü açık elektrikçi, 724 elektrikçi, elektrik arıza telefon, alo elektrik arıza, elektrik arıza numarası, elektrik arıza servisi, elektrik arıza acil, elektrik açtırma, kaçak akım rölesi, sigorta atması, elektrik tesisatçı, elektrik tamircisi, yakındaki elektrikçiler, en yakin elektrikci',
  alternates: {
    canonical: 'https://www.elektrikteknik.com/elektrik-usta',
  },
}

export default function ElektrikUstaPage() {
  const services = [
    { title: 'Acil Elektrik Arıza', desc: '7/24 acil müdahale ile elektrik arızalarınıza anında çözüm', icon: '⚡' },
    { title: 'Sigorta Değişimi', desc: 'Otomat sigortalar, kaçak akım rölesi değişim ve onarımı', icon: '🔌' },
    { title: 'Priz ve Anahtar Değişimi', desc: 'Priz, anahtar, panel ve tesisat elemanlarının değişimi', icon: '🔧' },
    { title: 'Aydınlatma Sistemleri', desc: 'LED aydınlatma, avize, aplik ve armatür montajı', icon: '💡' },
    { title: 'Elektrik Tesisatı Yenileme', desc: 'Bina, ev ve işyeri elektrik tesisatı yenileme', icon: '🏠' },
    { title: 'Kısa Devre Sorunları', desc: 'Kısa devre tespiti, onarımı ve önleyici bakım', icon: '⚠️' }
  ]

  const districts = ['Kadıköy', 'Üsküdar', 'Beşiktaş', 'Şişli', 'Fatih', 'Bakırköy', 'Maltepe', 'Kartal', 'Pendik', 'Tuzla', 'Sultanbeyli', 'Sancaktepe', 'Ataşehir', 'Beylikdüzü', 'Esenyurt', 'Bağcılar']

  const advantages = [
    { title: '7/24 Hizmet', desc: 'Gece gündüz demeden acil elektrikçi', icon: '⏰' },
    { title: 'Usta Ekip', desc: 'Deneyimli ve sertifikalı elektrik ustaları', icon: '👨‍🔧' },
    { title: 'Hızlı Müdahale', desc: 'Ortalama 30-45 dakikada adresinizdeyiz', icon: '🚀' },
    { title: 'Garantili İşçilik', desc: 'Tüm elektrik tamir işlerimiz garantilidir', icon: '✅' }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">7/24 Elektrik Tamir ve Arıza Servisi</h1>
          <h2 className="text-xl md:text-2xl text-blue-100 mb-6">İstanbul'un Her Semtinde Acil Elektrikçi Hizmeti</h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
            Elektrik arızası mı var? Sigorta atıyor mu? Priziniz mi çalışmıyor? 
            Uzman elektrik ustalarımızla 7/24 yanınızdayız.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+905327180613" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:shadow-lg transition-all">
              Hemen Ara: 0532 718 06 13
            </a>
            <a href="#hizmetler" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all">
              Elektrik Tamir Hizmetleri
            </a>
          </div>
        </div>
      </section>

      {/* Hizmetler Grid */}
      <section id="hizmetler" className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Profesyonel Elektrik Tamir Hizmetlerimiz</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Elektrikle ilgili her türlü sorununuza profesyonel ve hızlı çözüm sunuyoruz. 
              Uzman ekibimizle 7/24 hizmetinizdeyiz.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neden Bizi Tercih Etmelisiniz? */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Neden Elektrik Teknik?</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              10+ yıllık deneyimimizle İstanbul'da güvenilir elektrik hizmeti sunuyoruz
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((item, i) => (
              <div key={i} className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <div className="text-5xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hizmet Bölgeleri */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Hizmet Verdiğimiz Bölgeler</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              İstanbul'un tüm ilçelerine 7/24 acil elektrik tamir ve arıza servisi
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {districts.map((district, i) => (
              <span key={i} className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full text-gray-700 dark:text-gray-300 text-sm">
                {district}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Sık Sorulan Sorular - SEO için zengin içerik */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Sık Sorulan Sorular</h2>
            <p className="text-gray-600 dark:text-gray-400">Elektrik tamir ve arıza hakkında merak edilenler</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-5 shadow-md">
              <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">❓ Acil elektrik arızası için ne kadar sürede geliyorsunuz?</h3>
              <p className="text-gray-600 dark:text-gray-400">İstanbul genelinde ortalama 30-45 dakika içinde müdahale ediyoruz. Acil durumlarda daha hızlı yönlendirme yapıyoruz.</p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-xl p-5 shadow-md">
              <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">❓ Elektrik tamir işleriniz garantili mi?</h3>
              <p className="text-gray-600 dark:text-gray-400">Evet, tüm elektrik tamir ve bakım işlerimiz 1 yıl garantilidir. Malzeme garantileri markalara göre değişmektedir.</p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-xl p-5 shadow-md">
              <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">❓ Hangi bölgelere hizmet veriyorsunuz?</h3>
              <p className="text-gray-600 dark:text-gray-400">İstanbul'un tüm ilçelerine hizmet vermekteyiz. Özellikle Sultanbeyli, Kadıköy, Üsküdar, Beşiktaş, Şişli, Fatih ve çevresinde daha hızlı hizmet sağlıyoruz.</p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-xl p-5 shadow-md">
              <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">❓ Sigorta neden atar? Ne yapmalıyım?</h3>
              <p className="text-gray-600 dark:text-gray-400">Sigorta atmasının birçok nedeni olabilir: aşırı yüklenme, kısa devre veya kaçak akım. Kesin teşhis için uzman elektrikçi ekibimiz müdahale etmelidir.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Harekete Geçirici Mesaj */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Elektrik Arızanız mı Var?</h2>
          <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
            7/24 acil elektrikçi hizmetimizle yanınızdayız. Hemen arayın, sorununuzu çözelim.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+905327180613" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:shadow-lg transition-all">
              Hemen Ara: 0532 718 06 13
            </a>
            <a href="/iletisim" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all">
              İletişime Geç
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}