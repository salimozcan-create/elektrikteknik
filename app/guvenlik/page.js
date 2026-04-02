export const metadata = {
  title: 'Güvenlik | CCTV ve Alarm Sistemleri',
  description: 'Profesyonel güvenlik kamera sistemleri, CCTV kurulumu, alarm sistemleri ve akıllı ev çözümleri.',
}

export default function GuvenlikPage() {
  return (
    <div>
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Güvenlik Sistemleri</h1>
          <p className="text-xl">7/24 Profesyonel Güvenlik Çözümleri</p>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: 'CCTV Kamera', desc: 'HD ve 4K çözünürlük, gece görüş', icon: '📹' },
              { title: 'Alarm Sistemleri', desc: 'Hareket sensörü, GSM bildirim', icon: '🚨' },
              { title: 'Akıllı Ev', desc: 'Uzaktan erişim, sesli komut', icon: '🏠' },
              { title: 'Yangın Algılama', desc: 'Duman sensörü, erken uyarı', icon: '🔥' },
              { title: 'Geçiş Kontrol', desc: 'Parmak izi, yüz tanıma', icon: '🔐' },
              { title: 'Plaka Tanıma', desc: 'OTO plaka okuma, park kontrol', icon: '🚗' }
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}