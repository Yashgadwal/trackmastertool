export interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  noindex?: boolean;
}

export function generateMetadata({
  title,
  description,
  canonical = 'https://www.trackmastertool.com',
  ogImage = '/og-image.jpg',
  noindex = false,
}: SEOProps) {
  return {
    title: `${title} | TrackMasterTool`,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: `${title} | TrackMasterTool`,
      description,
      url: canonical,
      siteName: 'TrackMasterTool',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | TrackMasterTool`,
      description,
      images: [ogImage],
    },
    robots: {
      index: !noindex,
      follow: !noindex,
    },
  };
}

export function generateSoftwareJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'TrackMasterTool',
    operatingSystem: 'Android, iOS, Web',
    applicationCategory: 'ParentalControlApplication',
    description:
      'Transparent, consent-based parental control and authorized family device safety software.',
    offers: {
      '@type': 'Offer',
      price: '11.99',
      priceCurrency: 'USD',
    },
  };
}

export function generateOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'TrackMasterTool',
    url: 'https://www.trackmastertool.com',
    logo: 'https://www.trackmastertool.com/logo.png',
    sameAs: [
      'https://twitter.com/trackmastertool',
      'https://www.facebook.com/trackmastertool',
    ],
  };
}
