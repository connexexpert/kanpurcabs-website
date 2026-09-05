'use client';

import { use } from 'react';
import { useRouter } from 'next/navigation';

export default function EditCarPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-slate-900">Edit Car {id}</h1>
      <p className="text-slate-500">Same form as New Car, pre-filled with data.</p>
      <button onClick={() => router.back()} className="px-4 py-2 bg-slate-100 rounded">Go Back</button>
    </div>
  );
}
