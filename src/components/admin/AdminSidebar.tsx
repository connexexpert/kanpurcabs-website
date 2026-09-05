'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { 
  LayoutDashboard, 
  CalendarCheck, 
  Car, 
  MapPin, 
  MessageSquare, 
  HelpCircle, 
  Image as ImageIcon, 
  Settings,
  X
} from 'lucide-react';

interface AdminSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  { href: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/bookings', label: 'Bookings', icon: CalendarCheck },
  { href: '/admin/cars', label: 'Cars', icon: Car },
  { href: '/admin/tours', label: 'Tours', icon: MapPin },
  { href: '/admin/testimonials', label: 'Testimonials', icon: MessageSquare },
  { href: '/admin/faqs', label: 'FAQs', icon: HelpCircle },
  { href: '/admin/settings', label: 'Settings', icon: Settings },
];

export function AdminSidebar({ isOpen, onClose }: AdminSidebarProps) {
  const pathname = usePathname();

  return (
    <>
      <div 
        className={cn(
          "fixed inset-0 z-40 bg-black/50 lg:hidden",
          isOpen ? "block" : "hidden"
        )} 
        onClick={onClose}
      />
      <aside 
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 text-slate-300 transition-transform lg:static lg:block lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-16 items-center justify-between px-6 bg-slate-950">
          <Link href="/admin/dashboard" className="text-xl font-bold text-white flex items-center gap-2">
            <Car className="text-primary-500" />
            <span>KanpurCabs Admin</span>
          </Link>
          <button className="lg:hidden text-slate-400 hover:text-white" onClick={onClose}>
            <X size={20} />
          </button>
        </div>
        <nav className="p-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname?.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                  isActive 
                    ? "bg-primary-500/10 text-primary-500" 
                    : "hover:bg-slate-800 hover:text-white"
                )}
              >
                <Icon size={18} className={isActive ? "text-primary-500" : "text-slate-400"} />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
