'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function NewCarPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert('Car saved successfully! (Demo)');
      router.push('/admin/cars');
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-slate-900">Add New Car</h1>
      
      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Car Name</label>
            <input required type="text" className="w-full border-slate-300 rounded-md px-3 py-2 border" placeholder="e.g. Maruti Swift Dzire" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Category</label>
            <select className="w-full border-slate-300 rounded-md px-3 py-2 border">
              <option>Sedan</option>
              <option>Hatchback</option>
              <option>SUV</option>
              <option>Luxury</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Price per KM (₹)</label>
            <input required type="number" className="w-full border-slate-300 rounded-md px-3 py-2 border" placeholder="e.g. 12" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Seats</label>
            <input required type="number" className="w-full border-slate-300 rounded-md px-3 py-2 border" placeholder="e.g. 4" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-slate-700 mb-1">Description</label>
            <textarea className="w-full border-slate-300 rounded-md px-3 py-2 border" rows={4} placeholder="About the car..."></textarea>
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-4 border-t">
          <button type="button" onClick={() => router.back()} className="px-4 py-2 text-sm font-medium text-slate-700 bg-slate-100 rounded-md hover:bg-slate-200">
            Cancel
          </button>
          <button type="submit" disabled={loading} className="px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700 disabled:opacity-50">
            {loading ? 'Saving...' : 'Save Car'}
          </button>
        </div>
      </form>
    </div>
  );
}
