export default function Schema() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Electrician",
    "name": "Elektrik Teknik",
    "alternateName": ["Elektrik Teknik Elektrikçi", "7/24 Acil Elektrikçi", "724 Elektrikçi"],
    "description": "İstanbul'da 7/24 acil elektrikçi, elektrik arıza, tamir, bakım ve tesisat hizmetleri. Sigorta değişimi, priz montajı, kaçak akım rölesi.",
    "url": "https://elektrikteknik.com",
    "telephone": "+905327180613",
    "email": "info@elektrikteknik.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "A.yesevi Mh. Mekke Cd. No:9",
      "addressLocality": "Sultanbeyli",
      "addressRegion": "İstanbul",
      "postalCode": "34935",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "40.9786",
      "longitude": "29.2708"
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "40.9786",
        "longitude": "29.2708"
      },
      "geoRadius": "50000"
    },
    "priceRange": "₺₺",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "sameAs": [
      "https://wa.me/905327180613"
    ]
  }

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Elektrik Hizmetlerimiz",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "item": { "@type": "Service", "name": "Acil Elektrik Arıza", "description": "7/24 acil elektrik arıza giderme ve tamir hizmeti" } },
      { "@type": "ListItem", "position": 2, "item": { "@type": "Service", "name": "Sigorta Değişimi", "description": "Otomat sigorta ve kaçak akım rölesi değişimi" } },
      { "@type": "ListItem", "position": 3, "item": { "@type": "Service", "name": "Priz ve Anahtar Değişimi", "description": "Priz, anahtar ve tesisat elemanlarının değişimi" } },
      { "@type": "ListItem", "position": 4, "item": { "@type": "Service", "name": "Elektrik Tesisatı", "description": "Bina, ev ve işyeri elektrik tesisatı yenileme" } },
      { "@type": "ListItem", "position": 5, "item": { "@type": "Service", "name": "Elektrik Ürünleri", "description": "Kaliteli elektrik ürünleri ve malzemeleri" } },
      { "@type": "ListItem", "position": 6, "item": { "@type": "Service", "name": "Güneş Enerji Sistemleri", "description": "Güneş paneli kurulumu ve enerji sistemleri" } },
      { "@type": "ListItem", "position": 7, "item": { "@type": "Service", "name": "Güvenlik Kamera Sistemleri", "description": "CCTV, alarm ve akıllı ev sistemleri kurulumu" } }
    ]
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Elektrik Teknik",
    "url": "https://elektrikteknik.com"
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
    </>
  )
}