import React from 'react';
import SEOLandingPage from '@/components/SEOLandingPage';
import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
  title: 'Parental Control App for Android & iPhone',
  description: 'TrackMasterTool is the leading transparent parental control app. Manage screen time, app usage, GPS location sharing, and web safety easily.',
  canonical: 'https://www.trackmastertool.com/parental-control-app',
});

export default function ParentalControlAppPage() {
  return (
    <SEOLandingPage
      title="Transparent Parental Control App for Modern Families"
      subtitle="Gain clear insights into screen time, app usage, location safety, and digital habits while encouraging open trust between parents and children."
      badge="Parental Control Software"
      problemTitle="Empowering Parents Without Destroying Family Trust"
      problemDesc="Traditional monitoring tools often operate in secret or invade privacy unnecessarily. TrackMasterTool provides transparent parental supervision so kids build healthy lifelong digital habits."
      benefits={[
        'Comprehensive screen time management and bedtime downtime schedules',
        'Real-time GPS family location sharing with geofence arrival alerts',
        'Strict web content filtering and inappropriate website blocking',
        'Weekly digital wellbeing digests emailed directly to parents',
      ]}
      featuresList={[
        { title: 'Screen Time Limits', desc: 'Set daily windows for games and entertainment apps to prevent screen addiction.' },
        { title: 'SafeSearch & Web Filter', desc: 'Block adult content, violent sites, and gambling across Safari and Chrome.' },
        { title: 'Geofenced Safety Zones', desc: 'Receive instant notifications when your child arrives safely at school or coaching.' },
        { title: 'Multi-Device Supervision', desc: 'Supervise up to 5 family devices from one single centralized parent dashboard.' },
      ]}
      faqs={[
        { q: 'Is TrackMasterTool parental control software transparent?', a: 'Yes. TrackMasterTool operates with explicit consent and transparent parental authorization.' },
        { q: 'Can I restrict specific app usage?', a: 'Yes, you can set custom daily limits or block specific applications on target devices.' },
      ]}
      slug="parental-control-app"
    />
  );
}
