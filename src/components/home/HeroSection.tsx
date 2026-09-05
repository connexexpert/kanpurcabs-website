'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { MapPin, Calendar, Clock, Car, Navigation, Briefcase } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState('local')
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    router.push(`/booking?type=${activeTab}`)
  }

  const tabs = [
    { id: 'local', label: 'Local Rental' },
    { id: 'outstation', label: 'Outstation' },
    { id: 'airport', label: 'Airport/Railway' },
    { id: 'tour', label: 'Tour/Sightseeing' }
  ]

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 pb-16">
      {/* Background with dark overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-900 to-slate-800">
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container mx-auto px-4 z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="text-white space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Reliable Car Rental & Tourism Services in Kanpur
          </h1>
          <p className="text-lg md:text-xl text-slate-200">
            Book affordable cabs for local travel, outstation trips, airport transfers, and sightseeing tours across Kanpur and Uttar Pradesh.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <span className="font-semibold text-orange-400">5000+</span>
              <span className="text-sm">Happy Trips</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <span className="font-semibold text-orange-400">24/7</span>
              <span className="text-sm">Available</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <span className="font-semibold text-orange-400">Best</span>
              <span className="text-sm">Prices</span>
            </div>
          </div>
        </div>

        {/* Booking Form Card */}
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <div className="flex overflow-x-auto gap-2 mb-6 border-b pb-2 no-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "whitespace-nowrap px-4 py-2 rounded-lg font-medium transition-colors",
                  activeTab === tab.id 
                    ? "bg-blue-100 text-blue-800" 
                    : "text-slate-600 hover:bg-slate-100"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <form onSubmit={handleSearch} className="space-y-4">
            {activeTab === 'local' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-sm font-medium text-slate-700">Pickup Area</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                    <select className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
                      <option>Select Area in Kanpur</option>
                      <option>Swaroop Nagar</option>
                      <option>Civil Lines</option>
                      <option>Kakadeo</option>
                      <option>Kidwai Nagar</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium text-slate-700">Package</label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                    <select className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
                      <option>4hr / 40km</option>
                      <option>8hr / 80km</option>
                      <option>12hr / 120km</option>
                    </select>
                  </div>
                </div>
              </div>
            )}
            
            {/* Minimal implementation for other tabs for brevity */}
            {activeTab !== 'local' && (
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-sm font-medium text-slate-700">From</label>
                  <input type="text" placeholder="Kanpur" disabled className="w-full px-4 py-2 border rounded-lg bg-slate-50" />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium text-slate-700">To / Details</label>
                  <input type="text" placeholder="Destination / Info" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
                </div>
               </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-sm font-medium text-slate-700">Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                  <input type="date" className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-slate-700">Vehicle Type</label>
                <div className="relative">
                  <Car className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                  <select className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
                    <option>Hatchback</option>
                    <option>Sedan</option>
                    <option>SUV</option>
                  </select>
                </div>
              </div>
            </div>

            <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-colors mt-4">
              Get Free Quote
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
