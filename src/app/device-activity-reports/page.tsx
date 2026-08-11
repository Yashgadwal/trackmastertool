import React from 'react';
import SEOLandingPage from '@/components/SEOLandingPage';
import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
  title: 'Device Activity Reports & Family Analytics | TrackMasterTool',
  description: 'Automated weekly digital wellbeing reports detailing screen time trends, application activity, and safety logs for authorized family devices.',
  canonical: 'https://www.trackmastertool.com/device-activity-reports',
});

export default function DeviceActivityReportsPage() {
  return (
    <SEOLandingPage
      title="Automated Device Activity & Digital Wellbeing Reports"
      subtitle="Say goodbye to constant monitoring. TrackMasterTool delivers an elegant, high-level summary of your family's weekly digital habits directly to your inbox."
      badge="Device Activity Reports"
      problemTitle="No Time to Micro-Manage Screen Time?"
      problemDesc="Checking live device usage logs everyday can be exhausting. TrackMasterTool summarizes the noise into a clear weekly digest, allowing you to monitor healthy trends without constantly checking dashboards."
      benefits={[
        'Automated weekly email summaries delivered straight to you',
        'Top 5 most used apps categorized by productivity and fun',
        'Security warnings highlighting blocked website attempts',
        'Physical route history highlights and frequent location safe-zones',
      ]}
      featuresList={[
        { title: 'Weekly Trend Analytics', desc: 'Identify spikes or reductions in device use with clean week-over-week comparison charts.' },
        { title: 'App Classification Reports', desc: 'See a visual breakdown of time spent on social media, learning, gaming, and messaging.' },
        { title: 'Security Incident Highlights', desc: 'Get instant flags on blocked domains, bedtime limit overrides, and newly installed apps.' },
        { title: 'Consent-Verified Logging', desc: 'Built on transparent tracking where report data is compiled and shared with consent.' },
      ]}
      faqs={[
        { q: 'How often are device activity reports compiled?', a: 'Activity reports are compiled weekly on Sunday evenings. You can also download custom-range reports (daily, weekly, monthly) in PDF format from your parent dashboard.' },
        { q: 'Can my child see their own activity reports?', a: 'Yes! We believe in transparent, consent-based digital parenting. You can choose to share the weekly reports with your child to build digital trust.' },
      ]}
      slug="device-activity-reports"
    />
  );
}
