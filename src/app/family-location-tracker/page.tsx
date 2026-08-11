import React from 'react';
import SEOLandingPage from '@/components/SEOLandingPage';
import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
  title: 'Family Location Tracker & Geofencing App',
  description: 'Real-time GPS family location sharing with custom geofence safe zone alerts. Stay connected with authorized family location updates.',
  canonical: 'https://www.trackmastertool.com/family-location-tracker',
});

export default function FamilyLocationTrackerPage() {
  return (
    <SEOLandingPage
      title="Real-Time Family Location Sharing & Geofence Safety"
      subtitle="Stay connected with your loved ones. View authorized family locations on an interactive GPS map and get instant notifications when children arrive at school or home."
      badge="Family GPS Tracker"
      problemTitle="Peace of Mind for Daily Commutes and Outdoor Activity"
      problemDesc="Knowing your children have arrived safely at school or soccer practice shouldn't require constant texting. TrackMasterTool automates location alerts with full data encryption."
      benefits={[
        'High-accuracy real-time GPS positioning on interactive maps',
        'Custom geofence zones (School, Home, Sports Ground) with arrival alerts',
        '30-day location history log to review daily commutes',
        'Privacy-focused consent-based location sharing',
      ]}
      featuresList={[
        { title: 'Interactive Map View', desc: 'See all authorized family devices on a clean, responsive satellite or vector map.' },
        { title: 'Instant Arrival Alerts', desc: 'Get automated push/email notifications when family members enter safe zones.' },
        { title: 'Battery-Optimized Sync', desc: 'Low-power GPS location updates that do not drain target device battery.' },
        { title: 'Location History', desc: 'Inspect location logs with timestamp details for safety verification.' },
      ]}
      faqs={[
        { q: 'How accurate is the family location tracker?', a: 'TrackMasterTool utilizes GPS, cellular triangulation, and Wi-Fi data to provide location accuracy within 2 to 5 meters.' },
        { q: 'Can children see location sharing status?', a: 'Yes, location sharing is transparent and consent-verified for family safety.' },
      ]}
      slug="family-location-tracker"
    />
  );
}
