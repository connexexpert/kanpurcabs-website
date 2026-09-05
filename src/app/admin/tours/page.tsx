'use client';

import { DataTable } from '@/components/admin/DataTable';
import Link from 'next/link';

export default function ToursPage() {
  const sample = [
    { id: 1, name: 'Ayodhya Darshan', duration: '1 Day', price: '₹4,500' },
    { id: 2, name: 'Naimisharanya Tour', duration: '2 Days', price: '₹8,000' },
  ];

  const columns = [
    { key: 'name', label: 'Tour Name' },
    { key: 'duration', label: 'Duration' },
    { key: 'price', label: 'Starting Price' },
    { key: 'actions', label: 'Actions', render: (t: any) => <Link href={`/admin/tours/${t.id}/edit`} className="text-blue-600 text-sm">Edit</Link> }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-900">Tour Packages</h1>
        <Link href="/admin/tours/new" className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-700">
          Add New Tour
        </Link>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        <DataTable columns={columns} data={sample} keyExtractor={(t) => t.id} />
      </div>
    </div>
  );
}
