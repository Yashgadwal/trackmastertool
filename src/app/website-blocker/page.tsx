import React from 'react';
import SEOLandingPage from '@/components/SEOLandingPage';
import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
  title: 'Website Blocker for Kids & Family Web Filter',
  description: 'Block inappropriate websites, adult content, gambling, and violent sites across Safari, Chrome, and mobile browsers.',
  canonical: 'https://www.trackmastertool.com/website-blocker',
});

export default function WebsiteBlockerPage() {
  return (
    <SEOLandingPage
      title="URL & Website Blocker for Family Safety"
      subtitle="Shield your children from explicit web content, violent sites, and adult materials with strict category filtering and custom URL blocking."
      badge="Web Security & Blocker"
      problemTitle="Keeping Internet Browsing Safe for Growing Children"
      problemDesc="The internet contains vast educational resources alongside severe risks. TrackMasterTool automatically filters harmful web domains while allowing safe exploration."
      benefits={[
        'Automatic blocking of adult, gambling, violence, and phishing categories',
        'Custom blacklist for blocking specific domain names and web URLs',
        'Strict SafeSearch enforcement across Google, Bing, and DuckDuckGo',
        'Safari and Chrome browser compatibility on Android and iOS',
      ]}
      featuresList={[
        { title: 'Category Filtering', desc: 'Pre-configured filters for 18+ content, gambling, drugs, and violent web domains.' },
        { title: 'Custom Blacklist & Whitelist', desc: 'Add specific website URLs you wish to block or explicitly allow.' },
        { title: 'SafeSearch Force', desc: 'Automatically force SafeSearch filtering on all major web search engines.' },
        { title: 'Incognito Activity Insights', desc: 'Ensure web filtering remains active even if Incognito or Private mode is enabled.' },
      ]}
      faqs={[
        { q: 'Does web blocking work in Private / Incognito mode?', a: 'Yes, TrackMasterTool web filtering enforces security rules across all browser modes.' },
        { q: 'Can I unblock a website if needed?', a: 'Yes, parents can add any domain to the trusted whitelist instantly.' },
      ]}
      slug="website-blocker"
    />
  );
}
