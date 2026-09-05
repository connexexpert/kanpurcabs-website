'use client';

import { StatCard } from '@/components/admin/StatCard';
import { CalendarCheck, Car, Users, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { StatusBadge } from '@/components/admin/StatusBadge';

export default function Dashboard() {
  const recentBookings = [
    { id: 'BKG-001', customer: 'Rahul Sharma', service: 'Outstation', date: '2023-11-20', status: 'confirmed' },
    { id: 'BKG-002', customer: 'Priya Singh', service: 'Local Hourly', date: '2023-11-21', status: 'new' },
    { id: 'BKG-003', customer: 'Amit Kumar', service: 'Airport Transfer', date: '2023-11-19', status: 'completed' },
    { id: 'BKG-004', customer: 'Neha Gupta', service: 'Tour Package', date: '2023-11-25', status: 'in_progress' },
    { id: 'BKG-005', customer: 'Vikas Mishra', service: 'Outstation', date: '2023-11-18', status: 'cancelled' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
        <div className="space-x-3">
          <Link href="/admin/cars/new" className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors">
            Add New Car
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Bookings" value="245" icon={CalendarCheck} color="blue" trend="+12.5%" trendUp={true} />
        <StatCard title="Pending Enquiries" value="12" icon={Users} color="orange" />
        <StatCard title="Active Cars" value="48" icon={Car} color="purple" />
        <StatCard title="Revenue (Est.)" value="₹1.2L" icon={TrendingUp} color="green" trend="+8.2%" trendUp={true} />
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center">
          <h2 className="font-semibold text-slate-900">Recent Bookings</h2>
          <Link href="/admin/bookings" className="text-sm text-primary-600 hover:text-primary-700 font-medium">
            View All
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-500">
              <tr>
                <th className="px-6 py-3 font-medium">ID</th>
                <th className="px-6 py-3 font-medium">Customer</th>
                <th className="px-6 py-3 font-medium">Service</th>
                <th className="px-6 py-3 font-medium">Date</th>
                <th className="px-6 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {recentBookings.map((b) => (
                <tr key={b.id} className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-slate-900">
                    <Link href={`/admin/bookings/${b.id}`} className="hover:text-primary-600">{b.id}</Link>
                  </td>
                  <td className="px-6 py-4">{b.customer}</td>
                  <td className="px-6 py-4">{b.service}</td>
                  <td className="px-6 py-4">{b.date}</td>
                  <td className="px-6 py-4"><StatusBadge status={b.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
