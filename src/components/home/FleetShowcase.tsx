'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export default function FleetShowcase() {
  const [activeTab, setActiveTab] = useState('All')
  
  const tabs = ['All', 'Hatchback', 'Sedan', 'SUV', 'Luxury', 'Tempo Traveller']
  
  const cars = [
    { name: 'Maruti Suzuki Swift', type: 'Hatchback', seats: 4, trans: 'Manual', fuel: 'Petrol', ac: 'AC', price: 9 },
    { name: 'Maruti Suzuki Dzire', type: 'Sedan', seats: 4, trans: 'Manual', fuel: 'Petrol', ac: 'AC', price: 10 },
    { name: 'Hyundai Aura', type: 'Sedan', seats: 4, trans: 'Manual', fuel: 'Petrol', ac: 'AC', price: 10 },
    { name: 'Toyota Innova Crysta', type: 'SUV', seats: 6, trans: 'Manual', fuel: 'Diesel', ac: 'AC', price: 16 },
    { name: 'Mahindra Scorpio', type: 'SUV', seats: 7, trans: 'Manual', fuel: 'Diesel', ac: 'AC', price: 14 },
    { name: 'Force Tempo Traveller', type: 'Tempo Traveller', seats: 12, trans: 'Manual', fuel: 'Diesel', ac: 'AC', price: 22 }
  ]

  const filteredCars = activeTab === 'All' ? cars : cars.filter(c => c.type === activeTab)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Choose Your Perfect Ride</h2>
          <p className="text-slate-600 text-lg">Explore our well-maintained fleet of vehicles for every need.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "px-6 py-2 rounded-full font-medium transition-colors border",
                activeTab === tab 
                  ? "bg-blue-600 text-white border-blue-600" 
                  : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredCars.map((car, index) => (
            <div key={index} className="bg-white border rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-slate-100 to-slate-200 w-full flex items-center justify-center">
                <span className="text-slate-400 font-medium">{car.name} Image</span>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{car.name}</h3>
                    <span className="inline-block bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded mt-1 font-medium">{car.type}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-slate-500">Starting from</span>
                    <div className="text-lg font-bold text-orange-500">₹{car.price}/km</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-y-2 mb-6 text-sm text-slate-600">
                  <div>• {car.seats} Seater</div>
                  <div>• {car.ac}</div>
                  <div>• {car.trans}</div>
                  <div>• {car.fuel}</div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Link href="/cars" className="block text-center py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 font-medium transition-colors">
                    View Details
                  </Link>
                  <Link href="/booking" className="block text-center py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 font-medium transition-colors">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link href="/cars" className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-colors">
            View All Cars
          </Link>
        </div>
      </div>
    </section>
  )
}
