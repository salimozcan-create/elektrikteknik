export default function Schema() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Elektrik Teknik",
    "description": "İstanbul'da profesyonel elektrik hizmetleri, güneş enerji sistemleri ve elektrik malzemeleri satışı",
    "url": "https://elektrikteknik.com.tr",
    "telephone": "+905551234567",
    "email": "info@elektrikteknik.com.tr",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "İstanbul",
      "addressCountry": "TR"
    },
    "areaServed": "İstanbul",
    "priceRange": "₺₺",
    "openingHours": "Mo-Su 00:00-23:59",
    "sameAs": [
      "https://www.instagram.com/elektrikteknik",
      "https://www.facebook.com/elektrikteknik"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "150"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Elektrik Hizmetleri",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Elektrik Tamir",
            "description": "7/24 acil elektrik tamir ve bakım hizmeti"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Güneş Enerji Sistemleri",
            "description": "Güneş paneli kurulumu ve enerji sistemleri"
          }
        }
      ]
    }
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Elektrik Teknik",
    "image": "https://elektrikteknik.com.tr/logo.png",
    "priceRange": "₺₺",
    "servesCuisine": "Elektrik Hizmetleri"
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Elektrik Hizmetleri",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Elektrik Teknik"
    },
    "areaServed": {
      "@type": "City",
      "name": "İstanbul"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  )
}