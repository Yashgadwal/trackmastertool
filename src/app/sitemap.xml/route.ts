import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://www.trackmastertool.com';

  const pages = [
  "",
  "/solutions",
  "/features",
  "/pricing",
  "/about",
  "/security",
  "/contact",
  "/help",
  "/glossary",
  "/privacy-policy",
  "/terms",
  "/refund-policy",
  "/acceptable-use",
  "/cookie-policy",
  "/parental-control-app",
  "/family-safety-app",
  "/family-location-tracker",
  "/screen-time-monitoring",
  "/app-usage-monitor",
  "/website-blocker",
  "/web-filtering-for-families",
  "/geofencing-for-families",
  "/child-online-safety",
  "/digital-wellbeing-for-kids",
  "/android-parental-control",
  "/iphone-parental-control",
  "/device-activity-reports",
  "/family-digital-safety",
  "/online-safety-for-children",
  "/blog",
  "/blog/parental-control/android-parental-control-guide",
  "/blog/parental-control/apps-teens-love-parents-monitor",
  "/blog/parental-control/best-parental-control-app-with-location-tracking",
  "/blog/parental-control/best-tracking-software-for-iphone",
  "/blog/parental-control/call-of-duty-gaming-safety",
  "/blog/parental-control/can-i-read-my-childs-whatsapp-messages",
  "/blog/parental-control/can-parents-monitor-whatsapp-messages-on-android",
  "/blog/parental-control/can-you-track-someones-movements-without-knowing",
  "/blog/parental-control/can-you-view-someones-messages-on-your-phone",
  "/blog/parental-control/cell-phone-tracking-in-us",
  "/blog/parental-control/cellphone-gps-tracking",
  "/blog/parental-control/check-text-messages-online-truth",
  "/blog/parental-control/cybersecurity-risks-adult-websites",
  "/blog/parental-control/how-can-i-monitor-my-childs-phone-activity",
  "/blog/parental-control/how-parental-control-apps-block-content",
  "/blog/parental-control/how-to-check-husband-whatsapp-truth",
  "/blog/parental-control/how-to-monitor-childs-facebook",
  "/blog/parental-control/how-to-monitor-someones-instagram",
  "/blog/parental-control/how-to-monitor-viber-messages-safely",
  "/blog/parental-control/how-to-put-spyware-on-iphone-risks",
  "/blog/parental-control/how-to-see-someones-tiktok-dms",
  "/blog/parental-control/how-to-see-what-child-is-texting",
  "/blog/parental-control/how-to-see-what-websites-my-child-visits-on-iphone",
  "/blog/parental-control/how-to-spy-on-my-wifes-text-messages",
  "/blog/parental-control/how-to-spy-whatsapp-messages-android",
  "/blog/parental-control/how-to-track-kids-location-on-iphone",
  "/blog/parental-control/how-to-track-mobile-phone-location-without-knowing",
  "/blog/parental-control/how-to-use-whatsapp-spy-app",
  "/blog/parental-control/how-to-view-boyfriends-whatsapp-messages-on-your-phone",
  "/blog/parental-control/infidelity-statistics-relationship-trust",
  "/blog/parental-control/installed-applications-guide",
  "/blog/parental-control/is-your-child-walking-on-right-path",
  "/blog/parental-control/looking-for-cracked-version-risks",
  "/blog/parental-control/marital-affair-relationship-trust-guide",
  "/blog/parental-control/monitor-app-without-target-phone-access",
  "/blog/parental-control/monitor-latest-android-phones",
  "/blog/parental-control/prevent-teen-cyber-bullying",
  "/blog/parental-control/read-someones-whatsapp-messages",
  "/blog/parental-control/remotely-hack-track-samsung-galaxy",
  "/blog/parental-control/secretly-monitor-whatsapp-iphone-6",
  "/blog/parental-control/silent-phone-tracking-spy-software",
  "/blog/parental-control/sms-trackers-private-texts",
  "/blog/parental-control/snapchat-cheating-spouse-monitoring",
  "/blog/parental-control/special-combined-discounts",
  "/blog/parental-control/special-discount-pricing-offers",
  "/blog/parental-control/spy-children-whatsapp-messages-android",
  "/blog/parental-control/spy-on-teens-whatsapp-without-access",
  "/blog/parental-control/spy-on-whatsapp-chat-online-truth",
  "/blog/parental-control/three-types-of-cyber-stalkers",
  "/blog/parental-control/top-5-reasons-to-use-spymaster-pro-parental-control",
  "/blog/parental-control/top-cell-phone-tracker-apps",
  "/blog/parental-control/top-gps-phone-tracker-apps",
  "/blog/parental-control/top-phone-monitoring-apps-2026",
  "/blog/parental-control/track-google-chat-hangouts",
  "/blog/parental-control/track-gps-location-samsung-phone",
  "/blog/parental-control/track-wife-online-activity-legality",
  "/blog/parental-control/trackmastertool-ios-compatibility",
  "/blog/parental-control/ultimate-guide-phone-monitoring-apps",
  "/blog/parental-control/whatsapp-dangers-parents-guide",
  "/blog/parental-control/whatsapp-end-to-end-encryption-explained",
  "/blog/parental-control/whatsapp-hacking-tricks-fraud-alert",
  "/blog/parental-control/whatsapp-safety-guide"
];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (path) => `
  <url>
    <loc>${baseUrl}${path}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>${path === '' ? '1.0' : '0.8'}</priority>
  </url>`
  )
  .join('')}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
