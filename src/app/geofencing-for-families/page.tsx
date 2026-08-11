import React from 'react';
import SEOLandingPage from '@/components/SEOLandingPage';
import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
  title: 'Geofencing for Families - Custom GPS Safe Zone Alerts',
  description: 'Create geofence safe zones for Home, School, and Coaching. Receive instant arrival and departure notifications on your phone.',
  canonical: 'https://trackmastertool.vercel.app/geofencing-for-families',
});

export default function GeofencingForFamiliesPage() {
  return (
    <SEOLandingPage
      title="Family Geofencing & Automated Arrival Alerts"
      subtitle="Define safe boundary zones around School, Home, and Sports Practice. Receive automated alerts whenever your family members enter or leave."
      badge="GPS Geofencing"
      problemTitle="Automated Peace of Mind for Busy Parents"
      problemDesc="Checking in constantly can feel micro-managing. Geofencing automates check-ins so you get instant peace of mind without interrupting your teenager."
      benefits={[
        'Unlimited custom circular or polygonal geofence safe zones',
        'Configurable arrival and departure notifications',
        '30-day location route history logs',
        'Low battery consumption map tracking engine',
      ]}
      featuresList={[
        { title: 'School & Home Safe Zones', desc: 'Set virtual perimeters around daily destinations.' },
        { title: 'Instant Push & Email Notifications', desc: 'Get alerted the moment a child crosses a boundary.' },
        { title: 'Route Verification', desc: 'Ensure daily commutes follow safe, approved pathways.' },
        { title: 'Multi-Device Map Pinning', desc: 'Track all authorized children on one unified map view.' },
      ]}
      faqs={[
        { q: 'How many geofence zones can I create?', a: 'You can create unlimited safe zones on Pro and Family plans.' },
        { q: 'What happens if GPS signal is lost?', a: 'TrackMasterTool uses fallback cell tower and Wi-Fi data to maintain location accuracy.' },
      ]}
      slug="geofencing-for-families"
    />
  );
}
