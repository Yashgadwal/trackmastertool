'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Users, MapPin, Clock, Smartphone, Globe, AlertTriangle, Settings, ShieldCheck } from 'lucide-react';

export default function DashboardSidebar() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Overview', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Location & Geofence', href: '/dashboard/location', icon: MapPin },
    { name: 'Screen Time Limits', href: '/dashboard/screen-time', icon: Clock },
    { name: 'App Usage & Locker', href: '/dashboard/apps', icon: Smartphone },
    { name: 'Web Filtering', href: '/dashboard/web', icon: Globe },
    { name: 'Safety Alerts', href: '/dashboard/alerts', icon: AlertTriangle },
    { name: 'Authorized Devices', href: '/dashboard/devices', icon: Users },
    { name: 'Account Settings', href: '/account', icon: Settings },
  ];

  return (
    <aside className="w-full lg:w-64 bg-slate-900 border-r border-slate-800 p-4 flex flex-col gap-1.5 flex-shrink-0">
      <div className="flex items-center gap-2 px-3.5 py-2 mb-2 text-xs font-bold uppercase tracking-wider text-purple-400 border-b border-slate-800">
        <ShieldCheck className="w-4 h-4 text-purple-400" />
        <span>Parent Control Panel</span>
      </div>

      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-semibold text-xs transition-all ${
              isActive
                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-950/40'
                : 'text-slate-400 hover:bg-slate-800/80 hover:text-white'
            }`}
          >
            <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-purple-400'}`} />
            <span>{item.name}</span>
          </Link>
        );
      })}
    </aside>
  );
}
