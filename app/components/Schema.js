const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Electrician", // Değişen kısım burası
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