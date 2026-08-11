import React from 'react';
import SEOLandingPage from '@/components/SEOLandingPage';
import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
  title: 'Family Safety App for Android & iPhone',
  description: 'TrackMasterTool is the modern family safety app providing real-time location sharing, screen time balance, and web security with full consent.',
  canonical: 'https://www.trackmastertool.com/family-safety-app',
});

export default function FamilySafetyAppPage() {
  return (
    <SEOLandingPage
      title="All-in-One Family Safety App for Android & iOS"
      subtitle="Protect your children online and stay connected with real-time location sharing, screen time boundaries, and web content filtering."
      badge="Family Safety Platform"
      problemTitle="Modern Digital Challenges Facing Families"
      problemDesc="Children navigate an increasingly complex online world filled with screen distractions, cyberbullying, and inappropriate web content. TrackMasterTool gives parents simple tools to keep their family safe."
      benefits={[
        'Real-time GPS location tracking with safe zone geofencing alerts',
        'Balanced screen time limits and bedtime downtime enforcement',
        'Strict web filtering shielding children from inappropriate content',
        'Consent-verified transparent supervision for peaceful parenting',
      ]}
      featuresList={[
        { title: 'Family Location Map', desc: 'View all authorized family devices on an interactive map in real-time.' },
        { title: 'Screen Time Schedules', desc: 'Configure automatic downtime during homework and bedtime hours.' },
        { title: 'Web SafeSearch', desc: 'Enforce strict SafeSearch across Google, Bing, and major search engines.' },
        { title: 'Urgent Safety Alerts', desc: 'Get notified immediately if a child departs from a designated geofenced area.' },
      ]}
      faqs={[
        { q: 'How does the family safety app protect my children?', a: 'By establishing transparent boundaries for screen time, web content, and location sharing.' },
        { q: 'Is it hard to set up on my child’s phone?', a: 'No, setup takes under 3 minutes with simple guided onboarding.' },
      ]}
      slug="family-safety-app"
    />
  );
}
