import React from 'react';
import SEOLandingPage from '@/components/SEOLandingPage';
import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
  title: 'iPhone Parental Controls - iOS Screen Time & Family Safety',
  description: 'Manage iPhone and iPad screen time, location sharing, and web safety via authorized Apple Family Sharing without jailbreaking.',
  canonical: 'https://www.trackmastertool.com/iphone-parental-control',
});

export default function IPhoneParentalControlPage() {
  return (
    <SEOLandingPage
      title="iPhone & iPad Parental Control Software"
      subtitle="Supervise Apple iOS devices easily. Manage screen time, Safari web filtering, and family GPS location sharing without jailbreaking."
      badge="iPhone Controls"
      problemTitle="Seamless iOS Family Protection Without Jailbreaking"
      problemDesc="Jailbreaking compromises iOS security. TrackMasterTool utilizes official Apple Family Sharing and authorized cloud sync to protect your child safely."
      benefits={[
        'Full support for iOS 12 through iOS 18+ iPhones and iPads',
        'Zero jailbreak required for screen time, web, and location controls',
        'Real-time Apple location sharing on interactive maps',
        'Safari web content filtering and SafeSearch enforcement',
      ]}
      featuresList={[
        { title: 'No-Jailbreak Setup', desc: 'Connect via official Apple parental account authorization.' },
        { title: 'Safari Web Filter', desc: 'Filter adult websites and enforce SafeSearch automatically.' },
        { title: 'Location Sync', desc: 'Track authorized iPhone locations in real-time.' },
        { title: 'Cross-Platform Dashboard', desc: 'Parent dashboard works on Android, Mac, Windows, or iOS.' },
      ]}
      faqs={[
        { q: 'Does this require jailbreaking the iPhone?', a: 'No jailbreaking is required.' },
        { q: 'Can I manage an iPhone from an Android phone?', a: 'Yes! The TrackMasterTool parent dashboard works on any browser.' },
      ]}
      slug="iphone-parental-control"
    />
  );
}
