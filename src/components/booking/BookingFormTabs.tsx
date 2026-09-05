'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { MapPin, Calendar, Clock, ArrowRight } from 'lucide-react';

type TabType = 'local' | 'outstation' | 'transfer' | 'tour';

export default function BookingFormTabs({ className }: { className?: string }) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabType>('local');
  const [formData, setFormData] = useState({
    pickup: '',
    drop: '',
    date: '',
    time: '',
    package: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    
    // Map active tab to service type
    const serviceMap = {
      local: 'Local Rental',
      outstation: 'Outstation',
      transfer: 'Airport Transfer',
      tour: 'Sightseeing Tour'
    };
    
    params.append('serviceType', serviceMap[activeTab]);
    
    if (formData.pickup) params.append('from', formData.pickup);
    if (formData.drop) params.append('to', formData.drop);
    if (formData.date) params.append('date', formData.date);
    if (formData.package) params.append('package', formData.package);
    
    router.push(`/booking?${params.toString()}`);
  };

  const tabs: { id: TabType; label: string }[] = [
    { id: 'local', label: 'Local' },
    { id: 'outstation', label: 'Outstation' },
    { id: 'transfer', label: 'Airport/Railway' },
    { id: 'tour', label: 'Tour Packages' },
  ];

  return (
    <div className={cn("bg-white rounded-xl shadow-xl overflow-hidden max-w-4xl mx-auto w-full", className)}>
      <div className="flex flex-wrap border-b border-gray-100">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "flex-1 py-4 px-2 text-center font-medium text-sm sm:text-base transition-colors",
              activeTab === tab.id 
                ? "bg-blue-50 text-blue-700 border-b-2 border-blue-600" 
                : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="p-6 sm:p-8">
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 items-end">
          
          {activeTab === 'local' && (
            <>
              <div className="w-full md:flex-1 relative">
                <label className="block text-xs font-medium text-gray-500 mb-1 uppercase tracking-wider">Pickup Location</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-500" />
                  <input type="text" name="pickup" value={formData.pickup} onChange={handleInputChange} placeholder="E.g. Kakadeo, Kanpur" className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                </div>
              </div>
              <div className="w-full md:flex-1 relative">
                <label className="block text-xs font-medium text-gray-500 mb-1 uppercase tracking-wider">Rental Package</label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-500" />
                  <select name="package" value={formData.package} onChange={handleInputChange} className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none" required>
                    <option value="">Select Package</option>
                    <option value="4hr/40km">4 Hrs / 40 Kms</option>
                    <option value="8hr/80km">8 Hrs / 80 Kms</option>
                    <option value="12hr/120km">12 Hrs / 120 Kms</option>
                  </select>
                </div>
              </div>
            </>
          )}

          {activeTab === 'outstation' && (
            <>
              <div className="w-full md:flex-1 relative">
                <label className="block text-xs font-medium text-gray-500 mb-1 uppercase tracking-wider">From</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-500" />
                  <input type="text" name="pickup" value={formData.pickup || 'Kanpur'} onChange={handleInputChange} className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                </div>
              </div>
              <div className="w-full md:flex-1 relative">
                <label className="block text-xs font-medium text-gray-500 mb-1 uppercase tracking-wider">To</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-orange-500" />
                  <input type="text" name="drop" value={formData.drop} onChange={handleInputChange} placeholder="Destination City" className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                </div>
              </div>
            </>
          )}

          {activeTab === 'transfer' && (
            <>
              <div className="w-full md:flex-1 relative">
                <label className="block text-xs font-medium text-gray-500 mb-1 uppercase tracking-wider">Pickup / Drop</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-500" />
                  <select name="pickup" value={formData.pickup} onChange={handleInputChange} className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none" required>
                    <option value="">Select Station/Airport</option>
                    <option value="Kanpur Central">Kanpur Central Railway Station</option>
                    <option value="Lucknow Airport">Lucknow Airport</option>
                    <option value="Kanpur Airport">Kanpur Airport</option>
                  </select>
                </div>
              </div>
            </>
          )}

          {activeTab === 'tour' && (
            <>
              <div className="w-full md:flex-1 relative">
                <label className="block text-xs font-medium text-gray-500 mb-1 uppercase tracking-wider">Tour Package</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-500" />
                  <select name="package" value={formData.package} onChange={handleInputChange} className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none" required>
                    <option value="">Select Destination</option>
                    <option value="Ayodhya">Ayodhya Ram Mandir Darshan</option>
                    <option value="Varanasi">Varanasi Ghats & Temples</option>
                    <option value="Agra">Agra Taj Mahal Tour</option>
                    <option value="Naimisharanya">Naimisharanya Yatra</option>
                  </select>
                </div>
              </div>
            </>
          )}

          <div className="w-full md:w-48 relative">
            <label className="block text-xs font-medium text-gray-500 mb-1 uppercase tracking-wider">Travel Date</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-500" />
              <input type="date" name="date" value={formData.date} onChange={handleInputChange} min={new Date().toISOString().split('T')[0]} className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            </div>
          </div>

          <div className="w-full md:w-auto">
            <button type="submit" className="w-full h-[50px] px-8 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 whitespace-nowrap shadow-md hover:shadow-lg">
              Get Free Quote
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
