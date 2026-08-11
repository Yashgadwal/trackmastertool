import React from 'react';
import SEOLandingPage from '@/components/SEOLandingPage';
import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
  title: 'Android Parental Controls - Supervise Samsung, Pixel & Xiaomi',
  description: 'Manage Android screen time, app limits, web filtering, and real-time GPS location sharing without root access.',
  canonical: 'https://www.trackmastertool.com/android-parental-control',
});

export default function AndroidParentalControlPage() {
  return (
    <SEOLandingPage
      title="Comprehensive Android Parental Control Software"
      subtitle="Supervise Samsung Galaxy, Google Pixel, Xiaomi, OnePlus, Motorola, and standard Android devices with full screen time, app, and location controls."
      badge="Android Controls"
      problemTitle="Managing Android Device Safety Without Root Access"
      problemDesc="Many Android tools require complex rooting procedures. TrackMasterTool installs cleanly in under 3 minutes without voiding device warranties."
      benefits={[
        'Full support for Android 4.0 through Android 14+ devices',
        'Zero root required for screen time, app limits, and web filtering',
        'Real-time GPS location sharing with geofence alerts',
        'Battery-optimized background supervision',
      ]}
      featuresList={[
        { title: 'Samsung & Pixel Compatible', desc: 'Optimized for all major Android phone and tablet brands.' },
        { title: 'App Blocker & Schedules', desc: 'Restrict gaming or social apps during homework hours.' },
        { title: 'Chrome & Web SafeSearch', desc: 'Enforce strict content filters across mobile browsers.' },
        { title: 'Remote Control Dashboard', desc: 'Manage rules from your phone, tablet, or laptop browser.' },
      ]}
      faqs={[
        { q: 'Do I need to root the Android device?', a: 'No, TrackMasterTool requires zero rooting.' },
        { q: 'How long does Android setup take?', a: 'Setup takes under 3 minutes with guided instructions.' },
      ]}
      slug="android-parental-control"
    />
  );
}
