'use client';

import { use } from 'react';
import { StatusBadge } from '@/components/admin/StatusBadge';
import { useRouter } from 'next/navigation';

export default function BookingDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <button onClick={() => router.back()} className="text-slate-500 hover:text-slate-900">&larr; Back</button>
        <h1 className="text-2xl font-bold text-slate-900">Booking {id}</h1>
        <StatusBadge status="confirmed" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
          <h3 className="font-semibold text-lg border-b pb-2 mb-4">Customer Info</h3>
          <div className="space-y-3 text-sm">
            <p><span className="text-slate-500 w-24 inline-block">Name:</span> <strong>Rahul Sharma</strong></p>
            <p><span className="text-slate-500 w-24 inline-block">Phone:</span> <strong>+91 9876543210</strong></p>
            <p><span className="text-slate-500 w-24 inline-block">Email:</span> <strong>rahul@example.com</strong></p>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
          <h3 className="font-semibold text-lg border-b pb-2 mb-4">Trip Details</h3>
          <div className="space-y-3 text-sm">
            <p><span className="text-slate-500 w-24 inline-block">Service:</span> <strong>Outstation</strong></p>
            <p><span className="text-slate-500 w-24 inline-block">Date:</span> <strong>Nov 20, 2023</strong></p>
            <p><span className="text-slate-500 w-24 inline-block">Pickup:</span> <strong>Kanpur Central</strong></p>
            <p><span className="text-slate-500 w-24 inline-block">Drop:</span> <strong>Lucknow Airport</strong></p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 md:col-span-2">
          <h3 className="font-semibold text-lg border-b pb-2 mb-4">Manage Status</h3>
          <div className="flex items-center gap-4">
            <select className="border-slate-300 rounded-md px-3 py-2 border w-48">
              <option value="new">New</option>
              <option value="confirmed" selected>Confirmed</option>
              <option value="in_progress">In Progress</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
            <button className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 text-sm">Update Status</button>
          </div>
        </div>
      </div>
    </div>
  );
}
