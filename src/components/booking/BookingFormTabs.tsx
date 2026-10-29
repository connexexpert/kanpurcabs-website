'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { MapPin, Calendar, Clock, ArrowRight, Car, Compass, UserCheck, Bike } from 'lucide-react';

type TabType = 'local' | 'outstation' | 'monthly' | 'bike';

export default function BookingFormTabs({ className }: { className?: string }) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabType>('local');
  const [formData, setFormData] = useState({
    pickup: 'Civil Lines, Kanpur',
    drop: '',
    date: '',
    time: '',
    package: '8hr',
    vehicle: 'Sedan (Manual)',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();

    const serviceMap = {
      local: 'Local Hourly Car Driver',
      outstation: 'Outstation Trip Driver',
      monthly: 'Monthly Personal Chauffeur',
      bike: 'Two-Wheeler & Bike Rider',
    };

    params.append('serviceType', serviceMap[activeTab]);
    if (formData.pickup) params.append('pickupLocation', formData.pickup);
    if (formData.drop) params.append('dropLocation', formData.drop);
    if (formData.date) params.append('travelDate', formData.date);
    if (formData.package) params.append('packageDuration', formData.package);
    if (formData.vehicle) params.append('vehicleType', formData.vehicle);

    router.push(`/booking?${params.toString()}`);
  };

  const tabs: { id: TabType; label: string; icon: any }[] = [
    { id: 'local', label: 'Local Car Driver', icon: Car },
    { id: 'outstation', label: 'Outstation Driver', icon: Compass },
    { id: 'monthly', label: 'Monthly Chauffeur', icon: UserCheck },
    { id: 'bike', label: 'Bike & Rider', icon: Bike },
  ];

  return (
    <div className={cn("bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto w-full border border-slate-200", className)}>
      <div className="flex flex-wrap border-b border-slate-100 bg-slate-50">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex-1 py-3.5 px-3 text-center font-bold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2",
                activeTab === tab.id
                  ? "bg-white text-primary-900 border-b-2 border-primary-900 shadow-sm"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              )}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      <div className="p-6 sm:p-8">
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 items-end">
          {activeTab === 'local' && (
            <>
              <div className="w-full md:flex-1 relative">
                <label className="block text-[11px] font-bold text-slate-500 mb-1 uppercase tracking-wider">
                  Pickup Area in Kanpur
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary-800" />
                  <input
                    type="text"
                    name="pickup"
                    value={formData.pickup}
                    onChange={handleInputChange}
                    placeholder="E.g. Swaroop Nagar, Civil Lines"
                    className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary-800"
                    required
                  />
                </div>
              </div>
              <div className="w-full md:flex-1 relative">
                <label className="block text-[11px] font-bold text-slate-500 mb-1 uppercase tracking-wider">
                  Duty Package
                </label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary-800" />
                  <select
                    name="package"
                    value={formData.package}
                    onChange={handleInputChange}
                    className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary-800 appearance-none"
                    required
                  >
                    <option value="4hr">4 Hours Duty (₹400)</option>
                    <option value="8hr">8 Hours Full Day (₹700) — Popular</option>
                    <option value="12hr">12 Hours Extended (₹950)</option>
                  </select>
                </div>
              </div>
            </>
          )}

          {activeTab === 'outstation' && (
            <>
              <div className="w-full md:flex-1 relative">
                <label className="block text-[11px] font-bold text-slate-500 mb-1 uppercase tracking-wider">
                  Kanpur Pickup Area
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary-800" />
                  <input
                    type="text"
                    name="pickup"
                    value={formData.pickup}
                    onChange={handleInputChange}
                    className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary-800"
                    required
                  />
                </div>
              </div>
              <div className="w-full md:flex-1 relative">
                <label className="block text-[11px] font-bold text-slate-500 mb-1 uppercase tracking-wider">
                  Destination City
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-accent-500" />
                  <input
                    type="text"
                    name="drop"
                    value={formData.drop}
                    onChange={handleInputChange}
                    placeholder="e.g. Lucknow, Ayodhya, Delhi"
                    className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary-800"
                    required
                  />
                </div>
              </div>
            </>
          )}

          {activeTab === 'monthly' && (
            <>
              <div className="w-full md:flex-1 relative">
                <label className="block text-[11px] font-bold text-slate-500 mb-1 uppercase tracking-wider">
                  Kanpur Residence / Office
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary-800" />
                  <input
                    type="text"
                    name="pickup"
                    value={formData.pickup}
                    onChange={handleInputChange}
                    className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary-800"
                    required
                  />
                </div>
              </div>
              <div className="w-full md:flex-1 relative">
                <label className="block text-[11px] font-bold text-slate-500 mb-1 uppercase tracking-wider">
                  Monthly Plan (26 Days)
                </label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary-800" />
                  <select
                    name="package"
                    value={formData.package}
                    onChange={handleInputChange}
                    className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary-800 appearance-none"
                    required
                  >
                    <option value="monthly_8hr">8 Hours / Day — ₹15,000/mo</option>
                    <option value="monthly_10hr">10 Hours / Day — ₹18,000/mo</option>
                    <option value="monthly_12hr">12 Hours / Day — ₹21,000/mo</option>
                  </select>
                </div>
              </div>
            </>
          )}

          {activeTab === 'bike' && (
            <>
              <div className="w-full md:flex-1 relative">
                <label className="block text-[11px] font-bold text-slate-500 mb-1 uppercase tracking-wider">
                  Kanpur Pickup Area
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-accent-500" />
                  <input
                    type="text"
                    name="pickup"
                    value={formData.pickup}
                    onChange={handleInputChange}
                    className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-accent-500"
                    required
                  />
                </div>
              </div>
              <div className="w-full md:flex-1 relative">
                <label className="block text-[11px] font-bold text-slate-500 mb-1 uppercase tracking-wider">
                  Rider Package
                </label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-accent-500" />
                  <select
                    name="package"
                    value={formData.package}
                    onChange={handleInputChange}
                    className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-accent-500 appearance-none"
                    required
                  >
                    <option value="2hr_quick">2 Hours Task Rider — ₹199</option>
                    <option value="4hr_half">4 Hours Half Day — ₹349</option>
                    <option value="8hr_full">8 Hours Full Day — ₹599</option>
                  </select>
                </div>
              </div>
            </>
          )}

          <div className="w-full md:w-44 relative">
            <label className="block text-[11px] font-bold text-slate-500 mb-1 uppercase tracking-wider">
              Duty Date
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary-800" />
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                min={new Date().toISOString().split('T')[0]}
                className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary-800"
              />
            </div>
          </div>

          <div className="w-full md:w-auto">
            <button
              type="submit"
              className="w-full h-[42px] px-6 bg-primary-900 hover:bg-primary-950 text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap shadow text-xs"
            >
              Hire Driver <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
