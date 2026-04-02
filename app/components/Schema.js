export default function Schema() {
  // Ana İşletme Şeması (LocalBusiness)
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ElectricalContractor",
    "name": "Elektrik Teknik",
    "alternateName": "Elektrik Teknik Elektrikçi Hizmetleri",
    "description": "İstanbul'da 7/24 acil elektrik tamir, arıza giderme, sigorta değişimi, priz montajı, elektrik tesisatı ve güneş enerji sistemleri hizmetleri.",
    "url": "https://www.elektrikteknik.com",
    "telephone": "+905327180613",
    "email": "info@elektrikteknik.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "A.yesevi Mh. Mekke Cd. No:9",
      "addressLocality": "Sultanbeyli",
      "addressRegion": "İstanbul",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "40.9786",
      "longitude": "29.2708"
    },
    "areaServed": {
      "@type": "City",
      "name": "İstanbul"
    },
    "priceRange": "₺₺",
    "openingHours": "Mo-Su 00:00-23:59",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/elektrikteknik",
      "https://www.facebook.com/elektrikteknik",
      "https://wa.me/905327180613"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "247",
      "bestRating": "5",
      "worstRating": "1"
    }
  }

  // Hizmetler Şeması (Service)
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Elektrik Hizmetlerimiz",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Service",
          "name": "Acil Elektrik Arıza",
          "description": "7/24 acil elektrik arıza giderme ve tamir hizmeti",
          "provider": { "@type": "LocalBusiness", "name": "Elektrik Teknik" }
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Service",
          "name": "Sigorta Değişimi",
          "description": "Otomat sigorta ve kaçak akım rölesi değişimi",
          "provider": { "@type": "LocalBusiness", "name": "Elektrik Teknik" }
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Service",
          "name": "Priz ve Anahtar Değişimi",
          "description": "Priz, anahtar ve tesisat elemanlarının değişimi",
          "provider": { "@type": "LocalBusiness", "name": "Elektrik Teknik" }
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "Service",
          "name": "Elektrik Tesisatı",
          "description": "Bina, ev ve işyeri elektrik tesisatı yenileme",
          "provider": { "@type": "LocalBusiness", "name": "Elektrik Teknik" }
        }
      },
      {
        "@type": "ListItem",
        "position": 5,
        "item": {
          "@type": "Service",
          "name": "Güneş Enerji Sistemleri",
          "description": "Güneş paneli kurulumu ve enerji sistemleri",
          "provider": { "@type": "LocalBusiness", "name": "Elektrik Teknik" }
        }
      },
      {
        "@type": "ListItem",
        "position": 6,
        "item": {
          "@type": "Service",
          "name": "Güvenlik Kamera Sistemleri",
          "description": "CCTV, alarm ve akıllı ev sistemleri kurulumu",
          "provider": { "@type": "LocalBusiness", "name": "Elektrik Teknik" }
        }
      }
    ]
  }

  // Soru-Cevap Şeması (FAQ - Sık Sorulan Sorular için)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Acil elektrik arızası için ne kadar sürede geliyorsunuz?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "İstanbul genelinde ortalama 30-45 dakika içinde müdahale ediyoruz. Acil durumlarda daha da hızlı yönlendirme yapıyoruz."
        }
      },
      {
        "@type": "Question",
        "name": "Elektrik tamir işleriniz garantili mi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Evet, tüm elektrik tamir ve bakım işlerimiz 1 yıl garantilidir. Malzeme garantileri markalara göre değişmektedir."
        }
      },
      {
        "@type": "Question",
        "name": "7/24 hizmet veriyor musunuz?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Evet, haftanın 7 günü 24 saat acil elektrik tamir ve arıza hizmeti veriyoruz. Gece, gündüz, resmi tatil fark etmez."
        }
      },
      {
        "@type": "Question",
        "name": "Hangi bölgelere hizmet veriyorsunuz?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "İstanbul'un tüm ilçelerine hizmet vermekteyiz. Özellikle Sultanbeyli, Kadıköy, Üsküdar, Beşiktaş, Şişli, Fatih ve çevresinde daha hızlı hizmet sağlıyoruz."
        }
      }
    ]
  }

  // WebSite Şeması
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Elektrik Teknik",
    "url": "https://www.elektrikteknik.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.elektrikteknik.com/arama?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <>
      {/* Ana İşletme Şeması */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      
      {/* Hizmetler Şeması */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      
      {/* FAQ Şeması */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* WebSite Şeması */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  )
}