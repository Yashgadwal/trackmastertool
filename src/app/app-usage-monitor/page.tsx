import React from 'react';
import SEOLandingPage from '@/components/SEOLandingPage';
import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
  title: 'App Usage Monitor & App Blocker for Parents',
  description: 'Categorized app usage reports, daily app budgets, and instant app blocking to manage your child digital habits.',
  canonical: 'https://www.trackmastertool.com/app-usage-monitor',
});

export default function AppUsageMonitorPage() {
  return (
    <SEOLandingPage
      title="Categorized App Usage Insights & App Blocker"
      subtitle="Gain clear visibility into which applications your children use most. Set daily budgets for games and social media while keeping educational apps open."
      badge="App Usage Monitor"
      problemTitle="Understanding App Time vs Educational Focus"
      problemDesc="Not all screen time is equal. TrackMasterTool categorizes app activity so parents can differentiate between homework study time and compulsive gaming."
      benefits={[
        'Categorized usage reports (Education, Social, Gaming, Entertainment)',
        'App-specific time budgets and daily limits',
        'Instant remote app blocker for distracting applications',
        'Weekly trend comparisons across devices',
      ]}
      featuresList={[
        { title: 'App Category Insights', desc: 'Break down daily usage between learning tools, gaming, and messaging.' },
        { title: 'Remote App Blocker', desc: 'Block specific games or social apps with a single toggle from your dashboard.' },
        { title: 'Educational Whitelisting', desc: 'Keep learning apps like Khan Academy and Duolingo accessible even during study lockouts.' },
        { title: 'New App Installation Alerts', desc: 'Receive notifications whenever a new app is downloaded on a supervised device.' },
      ]}
      faqs={[
        { q: 'Can I block specific apps during study hours?', a: 'Yes! You can configure custom app schedules for study time and bedtime.' },
        { q: 'Does app monitoring work on both Android and iPhone?', a: 'Yes, TrackMasterTool supports app reporting on both platforms.' },
      ]}
      slug="app-usage-monitor"
    />
  );
}
