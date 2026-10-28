'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { Car, Bike, Users, Fuel, Gauge, Sparkles, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function FleetShowcase() {
  const [vehicleMode, setVehicleMode] = useState<'cars' | 'bikes'>('cars')
  const [activeCarTab, setActiveCarTab] = useState('All')
  const [activeBikeTab, setActiveBikeTab] = useState('All')

  const carTabs = ['All', 'Hatchback', 'Sedan', 'SUV', 'Tempo Traveller']
  const bikeTabs = ['All', 'Scooter', 'Commuter', 'Sports', 'Cruiser']

  const cars = [
    { name: 'Maruti Suzuki Swift', type: 'Hatchback', seats: 4, trans: 'Manual', fuel: 'Petrol', ac: 'AC', pricePerKm: 10, hourlyRate: '₹1,200 (4h)', slug: 'maruti-swift', imageUrl: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=800&q=80' },
    { name: 'Maruti Suzuki Dzire', type: 'Sedan', seats: 4, trans: 'Manual', fuel: 'Petrol/CNG', ac: 'AC', pricePerKm: 11, hourlyRate: '₹1,400 (4h)', slug: 'maruti-dzire', imageUrl: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80' },
    { name: 'Hyundai Aura', type: 'Sedan', seats: 4, trans: 'Manual', fuel: 'Petrol', ac: 'AC', pricePerKm: 11, hourlyRate: '₹1,400 (4h)', slug: 'hyundai-aura', imageUrl: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=800&q=80' },
    { name: 'Toyota Innova Crysta', type: 'SUV', seats: 7, trans: 'Manual', fuel: 'Diesel', ac: 'AC', pricePerKm: 18, hourlyRate: '₹2,200 (4h)', slug: 'innova-crysta', imageUrl: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=800&q=80' },
    { name: 'Mahindra Scorpio', type: 'SUV', seats: 7, trans: 'Manual', fuel: 'Diesel', ac: 'AC', pricePerKm: 15, hourlyRate: '₹2,000 (4h)', slug: 'mahindra-scorpio', imageUrl: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80' },
    { name: 'Force Tempo Traveller', type: 'Tempo Traveller', seats: 12, trans: 'Manual', fuel: 'Diesel', ac: 'AC', pricePerKm: 24, hourlyRate: '₹3,200 (4h)', slug: 'tempo-traveller-12', imageUrl: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=80' },
  ]

  const bikes = [
    { name: 'Honda Activa 6G', type: 'Scooter', engine: '110 cc', mileage: '50 km/l', trans: 'Automatic', dailyPrice: 400, hourlyRate: '₹50/hr', badge: 'Popular Scooter', imageUrl: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80' },
    { name: 'TVS Jupiter 125', type: 'Scooter', engine: '125 cc', mileage: '50 km/l', trans: 'Automatic', dailyPrice: 450, hourlyRate: '₹55/hr', badge: 'Comfort King', imageUrl: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80' },
    { name: 'Hero Splendor Plus', type: 'Commuter', engine: '100 cc', mileage: '68 km/l', trans: 'Manual', dailyPrice: 400, hourlyRate: '₹50/hr', badge: 'Best Mileage', imageUrl: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=800&q=80' },
    { name: 'Honda Shine 125', type: 'Commuter', engine: '125 cc', mileage: '58 km/l', trans: 'Manual', dailyPrice: 500, hourlyRate: '₹60/hr', badge: 'Smooth Commute', imageUrl: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80' },
    { name: 'Bajaj Pulsar 150', type: 'Sports', engine: '150 cc', mileage: '45 km/l', trans: 'Manual', dailyPrice: 650, hourlyRate: '₹80/hr', badge: 'Youth Choice', imageUrl: 'https://images.unsplash.com/photo-1558980664-769d59546b3d?auto=format&fit=crop&w=800&q=80' },
    { name: 'Royal Enfield Classic 350', type: 'Cruiser', engine: '350 cc', mileage: '35 km/l', trans: 'Manual', dailyPrice: 1100, hourlyRate: '₹140/hr', badge: 'Iconic Cruiser', imageUrl: 'https://images.unsplash.com/photo-1558981420-87aa9dad1c89?auto=format&fit=crop&w=800&q=80' },
  ]

  const filteredCars = activeCarTab === 'All' ? cars : cars.filter(c => c.type === activeCarTab)
  const filteredBikes = activeBikeTab === 'All' ? bikes : bikes.filter(b => b.type === activeBikeTab)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-accent-600 font-bold uppercase tracking-wider text-xs">
            Well-Maintained Fleet
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-1 mb-4">
            Explore Our Cars & Two-Wheelers
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Choose from chauffeured sedans & SUVs or economical self-drive scooters and bikes for city navigation.
          </p>
        </div>

        {/* Cars vs Bikes Toggle */}
        <div className="flex justify-center mb-8">
          <div className="bg-slate-100 p-1 rounded-full border border-slate-200 inline-flex">
            <button
              onClick={() => setVehicleMode('cars')}
              className={cn(
                "flex items-center gap-2 px-6 py-2 rounded-full font-bold text-sm transition-all",
                vehicleMode === 'cars'
                  ? "bg-primary-900 text-white shadow"
                  : "text-slate-600 hover:text-slate-900"
              )}
            >
              <Car className="w-4 h-4" /> Cars Fleet ({cars.length})
            </button>
            <button
              onClick={() => setVehicleMode('bikes')}
              className={cn(
                "flex items-center gap-2 px-6 py-2 rounded-full font-bold text-sm transition-all",
                vehicleMode === 'bikes'
                  ? "bg-accent-500 text-white shadow"
                  : "text-slate-600 hover:text-slate-900"
              )}
            >
              <Bike className="w-4 h-4" /> Bikes & Scooters ({bikes.length})
            </button>
          </div>
        </div>

        {/* Sub-Tabs for Cars */}
        {vehicleMode === 'cars' && (
          <>
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {carTabs.map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveCarTab(tab)}
                  className={cn(
                    "px-5 py-1.5 rounded-full text-xs font-semibold transition-all border",
                    activeCarTab === tab 
                      ? "bg-primary-800 text-white border-primary-800 shadow-sm" 
                      : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                  )}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
              {filteredCars.map((car, index) => (
                <div key={index} className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col group">
                  <div className="h-48 relative overflow-hidden bg-slate-100 w-full group">
                    <img
                      src={car.imageUrl}
                      alt={car.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                    <span className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm text-slate-800 text-xs px-2.5 py-1 rounded-full font-bold shadow-sm">
                      {car.type}
                    </span>
                    <span className="absolute bottom-3 left-3 text-white text-xs font-bold uppercase tracking-wider drop-shadow-md">
                      Chauffeur Included
                    </span>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">{car.name}</h3>
                        <span className="text-xs text-slate-500">Chauffeur Included</span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-slate-400 block">Outstation</span>
                        <span className="text-lg font-bold text-primary-900">₹{car.pricePerKm}/km</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-100 text-center text-xs text-slate-600 mb-4 bg-slate-50 rounded-lg">
                      <div>
                        <span className="text-slate-400 block">Seats</span>
                        <strong className="text-slate-800">{car.seats} Person</strong>
                      </div>
                      <div>
                        <span className="text-slate-400 block">Fuel</span>
                        <strong className="text-slate-800">{car.fuel}</strong>
                      </div>
                      <div>
                        <span className="text-slate-400 block">Local 4h</span>
                        <strong className="text-slate-800">{car.hourlyRate}</strong>
                      </div>
                    </div>

                    <div className="mt-auto flex gap-3">
                      <Link
                        href={`/cars/${car.slug}`}
                        className="flex-1 text-center border border-slate-300 hover:border-primary-900 text-slate-700 font-bold py-2.5 rounded-xl transition-colors text-xs"
                      >
                        Car Details
                      </Link>
                      <Link
                        href={`/booking?service=local_rental&vehicle=${encodeURIComponent(car.name)}`}
                        className="flex-1 text-center bg-primary-900 hover:bg-primary-950 text-white font-bold py-2.5 rounded-xl transition-colors text-xs shadow-sm"
                      >
                        Book Car
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link href="/cars" className="inline-flex items-center gap-2 text-primary-800 font-bold hover:text-accent-600 text-sm">
                <span>View Full Cars Fleet (8 Models Available)</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </>
        )}

        {/* Sub-Tabs for Bikes */}
        {vehicleMode === 'bikes' && (
          <>
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {bikeTabs.map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveBikeTab(tab)}
                  className={cn(
                    "px-5 py-1.5 rounded-full text-xs font-semibold transition-all border",
                    activeBikeTab === tab 
                      ? "bg-accent-500 text-white border-accent-500 shadow-sm" 
                      : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                  )}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
              {filteredBikes.map((bike, index) => (
                <div key={index} className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col group">
                  <div className="h-48 relative overflow-hidden bg-slate-100 w-full group">
                    <img
                      src={bike.imageUrl}
                      alt={bike.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                    <span className="absolute top-3 right-3 bg-accent-500 text-white text-xs px-2.5 py-1 rounded-full font-bold shadow-sm">
                      {bike.badge}
                    </span>
                    <span className="absolute bottom-3 left-3 text-white text-xs font-bold uppercase tracking-wider drop-shadow-md">
                      Self Drive • Helmet Included
                    </span>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">{bike.name}</h3>
                        <span className="text-xs text-accent-700 font-semibold bg-orange-50 px-2 py-0.5 rounded">
                          Self Drive
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-slate-400 block">Daily Rent</span>
                        <span className="text-lg font-bold text-primary-900">₹{bike.dailyPrice}/day</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-100 text-center text-xs text-slate-600 mb-4 bg-slate-50 rounded-lg">
                      <div>
                        <span className="text-slate-400 block">Hourly</span>
                        <strong className="text-slate-800">{bike.hourlyRate}</strong>
                      </div>
                      <div>
                        <span className="text-slate-400 block">Mileage</span>
                        <strong className="text-slate-800">{bike.mileage}</strong>
                      </div>
                      <div>
                        <span className="text-slate-400 block">Engine</span>
                        <strong className="text-slate-800">{bike.engine}</strong>
                      </div>
                    </div>

                    <div className="mt-auto flex gap-3">
                      <Link
                        href="/services/bike-rental"
                        className="flex-1 text-center border border-slate-300 hover:border-accent-500 text-slate-700 font-bold py-2.5 rounded-xl transition-colors text-xs"
                      >
                        Rate Card
                      </Link>
                      <Link
                        href={`/booking?service=bike_rental&vehicle=${encodeURIComponent(bike.name)}`}
                        className="flex-1 text-center bg-accent-500 hover:bg-accent-600 text-white font-bold py-2.5 rounded-xl transition-colors text-xs shadow-sm"
                      >
                        Rent Bike
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link href="/bikes" className="inline-flex items-center gap-2 text-accent-600 font-bold hover:text-accent-700 text-sm">
                <span>View All Bikes & Scooters Available in Kanpur</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
