'use client';

import { DataTable } from '@/components/admin/DataTable';
import Link from 'next/link';

export default function CarsPage() {
  const sampleCars = [
    { id: 1, name: 'Maruti Suzuki Dzire', category: 'Sedan', seats: 4, price: 12, available: true },
    { id: 2, name: 'Toyota Innova Crysta', category: 'SUV', seats: 6, price: 18, available: true },
    { id: 3, name: 'Honda City', category: 'Sedan', seats: 4, price: 14, available: false },
  ];

  const columns = [
    { key: 'name', label: 'Car Name', render: (c: any) => <span className="font-medium">{c.name}</span> },
    { key: 'category', label: 'Category' },
    { key: 'seats', label: 'Seats' },
    { key: 'price', label: 'Price/KM (₹)' },
    { key: 'available', label: 'Status', render: (c: any) => (
      <span className={`px-2 py-1 rounded text-xs font-medium ${c.available ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
        {c.available ? 'Available' : 'Unavailable'}
      </span>
    )},
    { key: 'actions', label: 'Actions', render: (c: any) => (
      <div className="flex space-x-2">
        <Link href={`/admin/cars/${c.id}/edit`} className="text-blue-600 hover:underline text-sm">Edit</Link>
        <button className="text-red-600 hover:underline text-sm">Delete</button>
      </div>
    )}
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-900">Car Management</h1>
        <Link href="/admin/cars/new" className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-700">
          Add New Car
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        <DataTable columns={columns} data={sampleCars} keyExtractor={(c) => c.id} />
      </div>
    </div>
  );
}
