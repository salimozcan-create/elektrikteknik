import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Ana Sayfa | Elektrik Teknik',
  description: 'Profesyonel elektrik hizmetleri, güneş enerji sistemleri ve güvenlik kamera sistemleri. 7/24 acil servis, elektrik malzemeleri ve usta ekibi.',
  keywords: 'elektrikçi, elektrik tamir, güneş enerji, güvenlik kamera, elektrik malzemeleri',
}

export default function Home() {
  // Hizmetler
  const services = [
    { title: 'Elektrik Ürün', desc: 'Kablo, priz, sigorta, panel, aydınlatma ürünleri', icon: '⚡', href: '/elektrik-urun', image: '/images/elektrik-urun.jpg' },
    { title: 'Elektrik Usta', desc: 'Arıza, tesisat, acil müdahale, sigorta değişimi', icon: '🔧', href: '/elektrik-usta', image: '/images/elektrik-usta.jpg' },
    { title: 'Güneş Enerji', desc: 'Çatı GES, arazi GES, solar panel kurulumu', icon: '☀️', href: '/gunes-enerji', image: '/images/gunes-enerji.jpg' },
    { title: 'Güvenlik', desc: 'CCTV kamera, alarm sistemleri, akıllı ev', icon: '📹', href: '/guvenlik', image: '/images/guvenlik.jpg' }
  ]

  // Referans Projeler
  const projects = [
    { title: 'XXL Alışveriş Merkezi', desc: 'Tam kapsamlı CCTV ve alarm sistemi', icon: '🏬', image: '/images/proje-1.jpg' },
    { title: 'YYY Fabrikası', desc: '200kW çatı GES kurulumu', icon: '🏭', image: '/images/proje-2.jpg' },
    { title: 'ZZZ Konutları', desc: 'Akıllı ev otomasyonu', icon: '🏘️', image: '/images/proje-3.jpg' },
    { title: 'AAA Hastanesi', desc: 'Yangın algılama ve acil aydınlatma', icon: '🏥', image: '/images/proje-4.jpg' }
  ]

  // Müşteri Yorumları
  const reviews = [
    { name: 'Mehmet Demir', text: 'Çok profesyonel bir ekip. Elektrik sorunumuzu kısa sürede çözdüler. Kesinlikle tavsiye ederim.', rating: 5, location: 'Kadıköy' },
    { name: 'Ayşe Yılmaz', text: 'Güneş enerji sistemi kurdurduk. Faturanın yarı yarıya düştü. İlgilendikleri için teşekkürler.', rating: 5, location: 'Üsküdar' },
    { name: 'Ali Kaya', text: 'Acil durumda gece 3\'te geldiler ve sorunu çözdüler. Hızlı ve güvenilir hizmet.', rating: 5, location: 'Beşiktaş' }
  ]

  // Sık Sorulan Sorular
  const faqs = [
    { q: 'Acil durumlarda ne kadar sürede geliyorsunuz?', a: 'İstanbul genelinde ortalama 30-45 dakika içinde müdahale ediyoruz.' },
    { q: 'Garanti veriyor musunuz?', a: 'Tüm işlerimiz 1 yıl garantilidir. Malzeme garantileri markalara göre değişir.' },
    { q: 'Güneş enerji sistemi ne kadar sürede kendini amorti eder?', a: 'Ortalama 4-5 yıl içinde yatırımınızı geri alırsınız.' }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Elektrik İşleri
              <span className="block text-blue-100 mt-2">Profesyonel Güvenilir</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8">
              Elektrik malzeme satışından güneş enerji kurulumuna, acil tamir hizmetlerinden 
              güvenlik sistemlerine kadar lisanslı teknik uzmanlar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/iletisim" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
                Hemen Başvur
              </Link>
              <Link href="#hizmetler" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all">
                Kategorileri Keşfet
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* İstatistikler */}
      <section className="bg-gray-50 dark:bg-gray-800 py-12 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto text-center">
            <div className="p-4"><div className="text-3xl font-bold text-blue-600">5K+</div><div className="text-sm text-gray-600 dark:text-gray-400">Elektrik Ürün</div></div>
            <div className="p-4"><div className="text-3xl font-bold text-blue-600">200+</div><div className="text-sm text-gray-600 dark:text-gray-400">GES Kurulum</div></div>
            <div className="p-4"><div className="text-3xl font-bold text-blue-600">24/7</div><div className="text-sm text-gray-600 dark:text-gray-400">Acil Tamir</div></div>
            <div className="p-4"><div className="text-3xl font-bold text-blue-600">1000+</div><div className="text-sm text-gray-600 dark:text-gray-400">Mutlu Müşteri</div></div>
          </div>
        </div>
      </section>

      {/* Hizmetler - Resimli Kartlar */}
      <section id="hizmetler" className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Hizmetlerimiz</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Profesyonel ekip ve kaliteli malzemelerle hizmetinizdeyiz</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <Link key={i} href={service.href} className="group bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
                {/* Görsel Alanı */}
                <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center relative">
                  <div className="text-6xl group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{service.desc}</p>
                  <span className="inline-block text-blue-600 font-semibold text-sm group-hover:underline">Detaylı Bilgi →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Referans Projeler - Resimli Galeri */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Referans Projelerimiz</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Güvendiğimiz iş ortaklarımız ve tamamladığımız projeler</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, i) => (
              <div key={i} className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                <div className="h-40 bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                  <div className="text-5xl">{project.icon}</div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">{project.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neden Biz? */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Neden Elektrik Teknik?</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Farkımızı ortaya koyan değerlerimiz</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: '7/24 Hizmet', desc: 'Acil durumlarda 7/24 hizmetinizdeyiz', icon: '⏰' },
              { title: 'Usta Ekip', desc: 'Deneyimli ve sertifikalı ekibimiz', icon: '👨‍🔧' },
              { title: 'Garantili İşçilik', desc: 'Tüm işlerimiz 1 yıl garantilidir', icon: '✅' },
              { title: 'Uygun Fiyat', desc: 'En uygun fiyat garantisi', icon: '💰' }
            ].map((item, i) => (
              <div key={i} className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all">
                <div className="text-5xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Müşteri Yorumları */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Müşterilerimiz Ne Diyor?</h2>
            <p className="text-gray-600 dark:text-gray-400">Binlerce mutlu müşterimizden bazı yorumlar</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <div key={i} className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex text-yellow-400">
                    {'★'.repeat(review.rating)}{'☆'.repeat(5-review.rating)}
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 italic">"{review.text}"</p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white">{review.name}</p>
                    <p className="text-sm text-gray-500">{review.location}</p>
                  </div>
                  <div className="text-blue-500 text-xl">⭐</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sık Sorulan Sorular */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Sık Sorulan Sorular</h2>
            <p className="text-gray-600 dark:text-gray-400">Merak ettiğiniz konularda yanıtlar</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">❓ {faq.q}</h3>
                <p className="text-gray-600 dark:text-gray-400 pl-4">✓ {faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Harekete Geçirici Mesaj */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Hemen Hizmet Almaya Başlayın</h2>
          <p className="text-xl text-blue-100 mb-8">7/24 acil destek hattımız sizleri bekliyor</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+905327180613" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">0 (532) 718 06 13</a>
            <Link href="/iletisim" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all">İletişime Geç</Link>
          </div>
        </div>
      </section>
    </>
  )
}