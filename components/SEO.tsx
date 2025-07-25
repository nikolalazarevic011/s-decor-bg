import Head from 'next/head'

interface SEOProps {
  title?: string
  description?: string
  image?: string
  url?: string
  keywords?: string
}

export default function SEO({ 
  title = "S_Decor_Bg - Farbanje i Reparacija PVC i Aluminijumske Stolarije Beograd",
  description = "Profesionalno farbanje i reparacija PVC i aluminijumske stolarije u Beogradu. Specijalizovani za spray farbanje prozora, vrata, fasada. Promena boje PVC stolarije, aluminijumskih okvira. Kvalitetno farbanje pištoljem, održavanje i renovacija. Besplatan predračun!",
  image = "/og-image.jpg",
  url = "https://your-domain.com",
  keywords = "farbanje PVC stolarije, farbanje aluminijumskih prozora, spray farbanje Beograd, reparacija PVC prozora, promena boje PVC stolarije, farbanje pištoljem, profesionalno farbanje, aluminijumska stolarija farbanje, PVC vrata farbanje, lakiranje prozora, obnova stolarije, farbanje fasade, renoviranje prozora, kvalitetno farbanje, održavanje stolarije, servis PVC prozora, reparacija aluminijumskih vrata, farbanje balkonskih vrata, bojenje stolarije Beograd, spray bojenje, industrijsko farbanje, premazivanje PVC, lakiranje aluminijuma, obnavljanje boje, profesionalni farbanje usluge, tehnika spray farbanja, kvalitetan premaz, dugotrajno farbanje, otporno farbanje"
}: SEOProps) {
  const fullTitle = title.includes('S_Decor_Bg') ? title : `${title} | S_Decor_Bg - Farbanje PVC i Aluminijum`
  
  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="language" content="sr" />
      <meta name="geo.region" content="RS-00" />
      <meta name="geo.placename" content="Beograd" />
      <meta name="geo.position" content="44.787197;20.457273" />
      <meta name="ICBM" content="44.787197, 20.457273" />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="sr_RS" />
      <meta property="og:site_name" content="S_Decor_Bg" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="S_Decor_Bg" />
      <meta name="revisit-after" content="7 days" />
      <meta name="rating" content="general" />
      <link rel="canonical" href={url} />
      
      {/* Schema.org structured data for Local Business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "S_Decor_Bg",
            "description": "Profesionalno farbanje i reparacija PVC i aluminijumske stolarije u Beogradu",
            "image": image,
            "url": url,
            "telephone": "+381607473865",
            "email": "farbanjepvcialustolarije@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Beograd",
              "addressCountry": "RS"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 44.787197,
              "longitude": 20.457273
            },
            "areaServed": {
              "@type": "City",
              "name": "Beograd"
            },
            "serviceType": [
              "Farbanje PVC stolarije",
              "Farbanje aluminijumske stolarije", 
              "Reparacija prozora",
              "Spray farbanje",
              "Renovacija stolarije"
            ],
            "priceRange": "$",
            "sameAs": [
              "https://www.instagram.com/s_decor_bg"
            ],
            "openingHours": "Mo-Sa 08:00-18:00",
            "paymentAccepted": "Cash, Transfer"
          })
        }}
      />
      
      {/* Additional Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Farbanje i Reparacija Stolarije",
            "provider": {
              "@type": "LocalBusiness",
              "name": "S_Decor_Bg"
            },
            "areaServed": {
              "@type": "City", 
              "name": "Beograd"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Usluge Farbanja i Reparacije",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Farbanje PVC Prozora"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Farbanje Aluminijumskih Vrata"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Reparacija PVC Stolarije"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Spray Farbanje Fasade"
                  }
                }
              ]
            }
          })
        }}
      />
    </Head>
  )
}
