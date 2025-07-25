import Head from 'next/head'

interface SEOProps {
  title?: string
  description?: string
  image?: string
  url?: string
}

export default function SEO({ 
  title = "Stefan - Professional Painter & Artist",
  description = "Discover stunning artwork by Stefan, a professional painter specializing in [your specialty]. View portfolio, commission custom pieces, and explore beautiful paintings.",
  image = "/og-image.jpg",
  url = "https://your-domain.com"
}: SEOProps) {
  const fullTitle = title.includes('Stefan') ? title : `${title} | Stefan - Artist`
  
  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Stefan" />
      <link rel="canonical" href={url} />
      
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Stefan",
            "jobTitle": "Professional Painter",
            "url": url,
            "image": image,
            "sameAs": [
              // Add your social media links here
              // "https://instagram.com/stefan_artist",
              // "https://facebook.com/stefan_paintings"
            ]
          })
        }}
      />
    </Head>
  )
}
