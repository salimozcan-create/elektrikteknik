export default function Schema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "Electrician"],
        "@id": "https://elektrikteknik.com/#business",
        "name": "Elektrik Teknik",
        "url": "https://elektrikteknik.com",
        "telephone": "+905327180613",
        "image": "https://elektrikteknik.com/elektrikci-istanbul.jpg",
        "description": "İstanbul Anadolu Yakası'nda 7/24 acil elektrikçi hizmeti. Sultanbeyli merkezli elektrik arıza, sigorta değişimi ve tesisat hizmetleri.",
        
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "A.yesevi Mh. Mekke Cd. No:9",
          "addressLocality": "Sultanbeyli",
          "addressRegion": "İstanbul",
          "addressCountry": "TR"
        },

        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 40.9786,
          "longitude": 29.2708
        },

        "areaServed": [
          { "@type": "City", "name": "Sultanbeyli" },
          { "@type": "City", "name": "Pendik" },
          { "@type": "City", "name": "Kartal" },
          { "@type": "City", "name": "Maltepe" },
          { "@type": "City", "name": "Kadıköy" },
          { "@type": "City", "name": "Üsküdar" },
          { "@type": "City", "name": "Ataşehir" },
          { "@type": "City", "name": "Sancaktepe" },
          { "@type": "City", "name": "Çekmeköy" },
          { "@type": "City", "name": "Tuzla" },
          { "@type": "City", "name": "Beykoz" },
          { "@type": "City", "name": "Ümraniye" },
          { "@type": "City", "name": "Adalar" }
        ],

        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"
          ],
          "opens": "00:00",
          "closes": "23:59"
        },

        "priceRange": "₺₺",

        "sameAs": [
          "https://www.instagram.com/elektrikteknik",
          "https://www.facebook.com/elektrikteknik",
          "https://wa.me/905327180613"
        ]
      },

      {
        "@type": "Service",
        "name": "Acil Elektrikçi Anadolu Yakası",
        "description": "Sultanbeyli merkezli Anadolu Yakası genelinde 7/24 acil elektrik arıza ve tamir hizmeti",
        "provider": {
          "@id": "https://elektrikteknik.com/#business"
        },
        "areaServed": "İstanbul Anadolu Yakası"
      },

      {
        "@type": "Service",
        "name": "Sultanbeyli Elektrikçi",
        "description": "Sultanbeyli ilçesinde hızlı elektrik arıza ve tamir hizmeti",
        "provider": {
          "@id": "https://elektrikteknik.com/#business"
        }
      },

      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Anadolu Yakası'nda ne kadar sürede geliyorsunuz?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sultanbeyli merkezli olduğumuz için Pendik, Kartal ve Sancaktepe bölgelerine çok hızlı, diğer ilçelere ortalama 30-45 dakika içinde ulaşım sağlıyoruz."
            }
          },
          {
            "@type": "Question",
            "name": "Hangi ilçelere hizmet veriyorsunuz?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "İstanbul Anadolu Yakası'nda Sultanbeyli, Pendik, Kartal, Maltepe, Kadıköy, Üsküdar, Ataşehir, Sancaktepe, Çekmeköy, Tuzla ve çevresine hizmet veriyoruz."
            }
          }
        ]
      },

      {
        "@type": "WebSite",
        "@id": "https://elektrikteknik.com/#website",
        "url": "https://elektrikteknik.com",
        "name": "Elektrik Teknik",
        "publisher": {
          "@id": "https://elektrikteknik.com/#business"
        }
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}