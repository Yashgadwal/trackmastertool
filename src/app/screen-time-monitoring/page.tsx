import React from 'react';
import SEOLandingPage from '@/components/SEOLandingPage';
import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
  title: 'Screen Time Monitoring & App Limits for Parents',
  description: 'Manage child screen time, schedule bedtime downtimes, and encourage healthy digital habits with TrackMasterTool.',
  canonical: 'https://www.trackmastertool.com/screen-time-monitoring',
});

export default function ScreenTimeMonitoringPage() {
  return (
    <SEOLandingPage
      title="Screen Time Management & Bedtime Downtime Limits"
      subtitle="Help your children build a healthy balance between screen time, homework, sleep, and physical activity with customizable schedules."
      badge="Screen Time Control"
      problemTitle="Overcoming Screen Addiction and Late-Night Distractions"
      problemDesc="Excessive device usage causes sleep deprivation, academic distraction, and digital fatigue. TrackMasterTool gives parents simple controls to set firm digital boundaries."
      benefits={[
        'Customizable daily screen time caps per device',
        'Bedtime downtime locking starting automatically at night',
        'Instant pause button to freeze devices during dinner or homework',
        'Detailed breakdown between educational and gaming app hours',
      ]}
      featuresList={[
        { title: 'Scheduled Downtime', desc: 'Lock entertainment apps automatically during study hours and bedtime.' },
        { title: 'Instant Freeze', desc: 'Remotely pause device access for family dinner or chores.' },
        { title: 'App Category Budgets', desc: 'Allocate specific hours for gaming while keeping educational apps accessible.' },
        { title: 'Weekly Trend Analytics', desc: 'Track screen time progress over weeks and months.' },
      ]}
      faqs={[
        { q: 'Can I set different limits for weekends?', a: 'Yes! You can configure distinct weekday and weekend screen time allowances.' },
        { q: 'What happens when daily limit is reached?', a: 'Non-essential applications lock automatically while emergency phone calls remain enabled.' },
      ]}
      slug="screen-time-monitoring"
    />
  );
}
