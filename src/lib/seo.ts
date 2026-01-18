interface SEOProps {
  title: string
  description: string
  path?: string
  ogImage?: string
}

/**
 * Generate SEO metadata for a page
 */
export function getSEO({ title, description, path = '', ogImage }: SEOProps) {
  const siteUrl = import.meta.env.PROD 
    ? 'https://studiotuka.com' // Update with actual domain
    : 'http://localhost:5173'
  
  const fullUrl = `${siteUrl}${path}`

  return {
    title,
    description,
    canonical: fullUrl,
    og: {
      title,
      description,
      url: fullUrl,
      image: ogImage || `${siteUrl}/og-image.jpg`,
      type: 'website',
    },
  }
}
