'use client';

import { useState } from 'react';
import { DataTable } from '@/components/admin/DataTable';
import { StatusBadge } from '@/components/admin/StatusBadge';
import Link from 'next/link';

export default function BookingsPage() {
  const [filter, setFilter] = useState('All');
  
  const sampleData = [
    { id: 'BKG-001', customer: 'Rahul Sharma', phone: '9876543210', service: 'Outstation', date: '2023-11-20', status: 'confirmed' },
    { id: 'BKG-002', customer: 'Priya Singh', phone: '9876543211', service: 'Local Hourly', date: '2023-11-21', status: 'new' },
    { id: 'BKG-003', customer: 'Amit Kumar', phone: '9876543212', service: 'Airport Transfer', date: '2023-11-19', status: 'completed' },
  ];

  const columns = [
    { key: 'id', label: 'Booking ID', render: (b: any) => <Link href={`/admin/bookings/${b.id}`} className="font-medium text-primary-600 hover:underline">{b.id}</Link> },
    { key: 'customer', label: 'Customer Name' },
    { key: 'phone', label: 'Phone' },
    { key: 'service', label: 'Service Type' },
    { key: 'date', label: 'Travel Date' },
    { key: 'status', label: 'Status', render: (b: any) => <StatusBadge status={b.status} /> },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-900">Booking Management</h1>
      </div>

      <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex gap-4">
        <select className="border border-slate-300 rounded-md px-3 py-2 text-sm" value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All Statuses</option>
          <option value="new">New</option>
          <option value="confirmed">Confirmed</option>
          <option value="in_progress">In Progress</option>
          <option value="completed">Completed</option>
          <option value="cancelled">Cancelled</option>
        </select>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        <DataTable 
          columns={columns} 
          data={sampleData.filter(d => filter === 'All' || d.status === filter)} 
          keyExtractor={(d) => d.id} 
        />
      </div>
    </div>
  );
}
