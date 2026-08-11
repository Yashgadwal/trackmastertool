import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const forwardedHost = request.headers.get('x-forwarded-host');
  const host = forwardedHost || request.headers.get('host') || 'trackmastertool.vercel.app';
  const forwardedProto = request.headers.get('x-forwarded-proto');
  const proto = forwardedProto || (host.includes('localhost') ? 'http' : 'https');
  const baseUrl = `${proto}://${host}`;

  const robots = `User-agent: *
Allow: /
Disallow: /admin/
Disallow: /account/
Disallow: /checkout/
Disallow: /api/
Disallow: /dashboard/

Sitemap: ${baseUrl}/sitemap.xml
`;

  return new NextResponse(robots, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
