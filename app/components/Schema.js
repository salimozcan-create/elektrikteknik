export default function Schema() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ElectricalContractor",
    "name": "Elektrik Teknik",
    "alternateName": "Elektrik Teknik Elektrikçi Hizmetleri",
    "description": "İstanbul'da 7/24 acil elektrik tamir, arıza giderme, sigorta değişimi, priz montajı, elektrik tesisatı ve güneş enerji sistemleri hizmetleri.",
    "url": "https://elektrikteknik.com",
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