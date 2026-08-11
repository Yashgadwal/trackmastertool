const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding TrackMasterTool database...');

  // 1. Create Super Admin User
  const adminPassword = await bcrypt.hash('AdminPassword123!', 10);
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@trackmastertool.com' },
    update: {},
    create: {
      email: 'admin@trackmastertool.com',
      name: 'Super Admin',
      passwordHash: adminPassword,
      role: 'SUPER_ADMIN',
      isVerified: true,
    },
  });

  // 2. Create Sample Customer User
  const customerPassword = await bcrypt.hash('ParentPassword123!', 10);
  const customerUser = await prisma.user.upsert({
    where: { email: 'parent@example.com' },
    update: {},
    create: {
      email: 'parent@example.com',
      name: 'Sarah Miller',
      passwordHash: customerPassword,
      role: 'CUSTOMER',
      isVerified: true,
      customer: {
        create: {
          phone: '+1 (555) 234-5678',
          country: 'United States',
        },
      },
    },
    include: { customer: true },
  });

  // 3. Create Pricing Plans
  const plansData = [
    {
      name: 'ESSENTIAL',
      slug: 'essential',
      subtitle: 'Basic screen time & location safety for 1 device.',
      platform: 'ALL',
      billingInterval: 'YEARLY',
      originalPrice: 24.99,
      salePrice: 11.99,
      currency: 'USD',
      discountPercent: 52,
      features: JSON.stringify([
        'Supervise 1 Authorized Device',
        'Real-Time Family GPS Location',
        'Basic Screen Time Schedules',
        'Web Category Content Filtering',
        'Battery Status & Sync Alerts',
      ]),
      isFeatured: false,
      badgeText: null,
    },
    {
      name: 'PRO',
      slug: 'pro',
      subtitle: 'Complete digital wellbeing & app control for up to 3 devices.',
      platform: 'ALL',
      billingInterval: 'YEARLY',
      originalPrice: 39.99,
      salePrice: 16.99,
      currency: 'USD',
      discountPercent: 57,
      features: JSON.stringify([
        'Supervise up to 3 Authorized Devices',
        'Real-Time Family GPS & Geofences',
        'Advanced App Usage Limits & Blocker',
        'Strict SafeSearch & Web Blocker',
        'Keystroke Activity Insights',
        'Weekly Digital Wellbeing Reports',
      ]),
      isFeatured: true,
      badgeText: 'MOST POPULAR',
    },
    {
      name: 'FAMILY',
      slug: 'family',
      subtitle: 'Maximum protection for up to 5 family devices.',
      platform: 'ALL',
      billingInterval: 'YEARLY',
      originalPrice: 59.99,
      salePrice: 24.99,
      currency: 'USD',
      discountPercent: 58,
      features: JSON.stringify([
        'Supervise up to 5 Authorized Devices',
        'Unlimited Geofence Arrival Alerts',
        'Cross-Platform Android & iOS Support',
        'Custom Web & App Category Blockers',
        'Instant Urgent Safety Notifications',
      ]),
      isFeatured: false,
      badgeText: 'BEST VALUE',
    },
  ];

  for (const p of plansData) {
    await prisma.plan.upsert({
      where: { slug: p.slug },
      update: p,
      create: p,
    });
  }

  // 4. Create Authorized Device & Consent Record for Customer
  if (customerUser.customer) {
    const device = await prisma.authorizedDevice.create({
      data: {
        customerId: customerUser.customer.id,
        deviceName: "Sarah's iPhone 15 Pro",
        model: 'iPhone 15 Pro',
        osType: 'IOS',
        osVersion: '17.4',
        consentStatus: 'AUTHORIZED',
        batteryLevel: 92,
        isOnline: true,
      },
    });

    await prisma.consentRecord.create({
      data: {
        userId: customerUser.id,
        authorizedDeviceId: device.id,
        authorizationType: 'PARENTAL_SUPERVISION',
        policyVersion: '1.0.0',
        status: 'ACTIVE',
      },
    });
  }

  // 5. Create Sample Blog Categories & Posts
  const cat = await prisma.category.upsert({
    where: { slug: 'parental-control' },
    update: {},
    create: {
      name: 'Parental Control',
      slug: 'parental-control',
      description: 'Expert guides on digital safety and parenting.',
    },
  });

  await prisma.blogPost.upsert({
    where: { slug: 'complete-guide-to-parental-controls-2026' },
    update: {},
    create: {
      title: 'The Complete Guide to Parental Controls & Family Digital Safety',
      slug: 'complete-guide-to-parental-controls-2026',
      excerpt: 'Learn how to set healthy screen time limits, protect children online, and navigate modern social media safely.',
      content: `
# The Complete Guide to Parental Controls

Digital safety for children is one of the most important responsibilities facing modern parents. With smartphones and tablets becoming central to education and socializing, creating healthy digital boundaries is essential.

## 1. Why Transparent Parental Controls Matter
Secret surveillance damages trust. When parents establish transparent digital safety agreements with their children, kids learn responsible self-regulation rather than attempting to bypass rules.

## 2. Setting Healthy Screen Time Boundaries
Experts recommend establishing clear rules around device usage:
- No devices during family mealtimes.
- Bedtime downtime starting 1 hour before sleep.
- Encouraging educational apps over passive video consumption.

## 3. Location Sharing & Geofencing
Real-time GPS sharing provides parents peace of mind during school commutes while granting teenagers reasonable independence.
      `,
      categoryName: 'Parental Control',
      authorName: 'TrackMaster Editorial',
      readingTime: '6 min read',
      status: 'PUBLISHED',
    },
  });

  console.log('Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
