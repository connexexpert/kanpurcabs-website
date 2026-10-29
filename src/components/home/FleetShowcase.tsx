'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { Car, Bike, ShieldCheck, CheckCircle2, Award, Clock, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function FleetShowcase() {
  const [vehicleMode, setVehicleMode] = useState<'cars' | 'bikes'>('cars')
  const [activeCarTab, setActiveCarTab] = useState('All')
  const [activeBikeTab, setActiveBikeTab] = useState('All')

  const carTabs = ['All', 'Hatchback', 'Sedan', 'SUV', 'Luxury', 'Commercial']
  const bikeTabs = ['All', 'Scooter', 'Commuter', 'Sports', 'Cruiser']

  const cars = [
    {
      name: 'Hatchbacks (Swift, i10, WagonR, Tiago)',
      type: 'Hatchback',
      transmission: 'Manual & AMT Auto',
      exp: '5+ Yrs Exp',
      tariff: '₹400 (4h)',
      specialty: 'Congested street navigation, tight parking & bazaar errands',
      badge: 'City Specialist',
      slug: 'maruti-swift',
      imageUrl: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Sedans (Dzire, Aura, Ciaz, City)',
      type: 'Sedan',
      transmission: 'Manual, CVT & AT',
      exp: '6+ Yrs Exp',
      tariff: '₹400 (4h)',
      specialty: 'Smooth executive driving, family outings & corporate client drops',
      badge: 'Executive Chauffeur',
      slug: 'maruti-dzire',
      imageUrl: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'SUVs & MPVs (Innova Crysta, Ertiga, Fortuner)',
      type: 'SUV',
      transmission: 'Manual & Automatic',
      exp: '8+ Yrs Exp',
      tariff: '₹450 (4h) / ₹1,000 Outstation',
      specialty: 'Highway & expressway expert, mountain safety, 7-seater mastery',
      badge: 'Highway Certified',
      slug: 'innova-crysta',
      imageUrl: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Tough SUVs (Scorpio, Thar, Safari, Harrier)',
      type: 'SUV',
      transmission: 'Manual & Torque Converter',
      exp: '7+ Yrs Exp',
      tariff: '₹450 (4h)',
      specialty: 'Rough road confidence, heavy highway stability & night travel',
      badge: 'Rugged Specialist',
      slug: 'mahindra-scorpio',
      imageUrl: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Luxury Sedans & SUVs (BMW, Audi, Mercedes)',
      type: 'Luxury',
      transmission: 'Dual Clutch & Steptronic',
      exp: '10+ Yrs Exp',
      tariff: '₹600 (4h) / ₹1,500 Outstation',
      specialty: 'Gentle throttle handling, electronic parking mastery & VIP etiquette',
      badge: 'Elite Luxury Chauffeur',
      slug: 'hyundai-aura',
      imageUrl: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Commercial & Tempo Travellers (12-17 Seater)',
      type: 'Commercial',
      transmission: 'Manual Heavy',
      exp: '10+ Yrs Commercial',
      tariff: '₹700 (4h)',
      specialty: 'Commercial badge holder, passenger bus safety & pilgrimage routes',
      badge: 'Commercial Badge',
      slug: 'tempo-traveller-12',
      imageUrl: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=80',
    },
  ]

  const bikes = [
    {
      name: 'Automatic Scooters (Activa, Jupiter, Access)',
      type: 'Scooter',
      transmission: 'Gearless Automatic',
      exp: '4+ Yrs Riding',
      tariff: 'From ₹199 (2h)',
      specialty: 'Quick market errands, medicine purchase & traffic-free pilot',
      badge: 'Quick Errand Pilot',
      imageUrl: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Commuter Motorcycles (Splendor, Shine, Platina)',
      type: 'Commuter',
      transmission: '4/5-Speed Manual',
      exp: '5+ Yrs Riding',
      tariff: 'From ₹199 (2h)',
      specialty: 'Reliable city transit, banking tasks & document delivery',
      badge: 'City Commuter',
      imageUrl: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Sports & Performance Bikes (Pulsar, Apache, FZ)',
      type: 'Sports',
      transmission: '5/6-Speed Manual',
      exp: '5+ Yrs Riding',
      tariff: 'From ₹199 (2h)',
      specialty: 'Fast urgent parcel transport & night safe recovery pilot',
      badge: 'Fast & Safe Pilot',
      imageUrl: 'https://images.unsplash.com/photo-1558980664-769d59546b3d?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Cruiser Motorcycles (Royal Enfield Classic, Bullet)',
      type: 'Cruiser',
      transmission: 'Heavy Thumper Manual',
      exp: '6+ Yrs Riding',
      tariff: 'From ₹199 (2h)',
      specialty: 'Heavyweight bike balancing, clutch control & long ride support',
      badge: 'Cruiser Specialist',
      imageUrl: 'https://images.unsplash.com/photo-1558981420-87aa9dad1c89?auto=format&fit=crop&w=800&q=80',
    },
  ]

  const filteredCars = activeCarTab === 'All' ? cars : cars.filter(c => c.type === activeCarTab)
  const filteredBikes = activeBikeTab === 'All' ? bikes : bikes.filter(b => b.type === activeBikeTab)

  return (
    <section className="py-20 bg-white" id="drivers-showcase">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-accent-600 font-bold uppercase tracking-wider text-xs">
            Driver & Rider Specialization
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-1 mb-4">
            Verified Drivers for Every Vehicle You Own
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Our drivers are thoroughly certified across all vehicle types and transmissions. Relax in your personal vehicle while our professional handles the driving.
          </p>
        </div>

        {/* Cars vs Bikes Toggle */}
        <div className="flex justify-center mb-8">
          <div className="bg-slate-100 p-1.5 rounded-full border border-slate-200 inline-flex">
            <button
              onClick={() => setVehicleMode('cars')}
              className={cn(
                "flex items-center gap-2 px-6 py-2 rounded-full font-bold text-sm transition-all",
                vehicleMode === 'cars'
                  ? "bg-primary-900 text-white shadow"
                  : "text-slate-600 hover:text-slate-900"
              )}
            >
              <Car className="w-4 h-4" /> Car Chauffeurs ({cars.length})
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
              <Bike className="w-4 h-4" /> Two-Wheeler Riders ({bikes.length})
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
                <div key={index} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
                  <div className="relative h-48 bg-slate-100 overflow-hidden group">
                    <img
                      src={car.imageUrl}
                      alt={car.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-primary-900/90 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-md font-semibold">
                      {car.badge}
                    </div>
                    <div className="absolute top-3 right-3 bg-emerald-600 text-white text-xs px-2 py-1 rounded-md font-bold flex items-center gap-1 shadow">
                      <ShieldCheck className="w-3.5 h-3.5" /> Police Verified
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-bold text-slate-900 text-lg mb-2">{car.name}</h3>
                    <p className="text-xs text-slate-600 mb-4 leading-relaxed">{car.specialty}</p>

                    <div className="grid grid-cols-2 gap-2 text-xs text-slate-600 bg-slate-50 p-3 rounded-xl mb-4 border border-slate-100">
                      <div>
                        <span className="text-slate-400 block text-[11px]">Transmission</span>
                        <strong className="text-slate-800">{car.transmission}</strong>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[11px]">Experience</span>
                        <strong className="text-slate-800">{car.exp}</strong>
                      </div>
                    </div>

                    <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                      <div>
                        <span className="text-slate-400 text-[11px] block">Driver Tariff</span>
                        <strong className="text-primary-800 font-extrabold text-base">{car.tariff}</strong>
                      </div>
                      <Link
                        href={`/booking?serviceType=Local+Hourly+Car+Driver&vehicle=${encodeURIComponent(car.name)}`}
                        className="px-4 py-2 bg-primary-900 hover:bg-primary-950 text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5"
                      >
                        Hire Driver <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {filteredBikes.map((bike, index) => (
                <div key={index} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
                  <div className="relative h-44 bg-slate-100 overflow-hidden group">
                    <img
                      src={bike.imageUrl}
                      alt={bike.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-accent-600 text-white text-xs px-2.5 py-1 rounded-md font-semibold">
                      {bike.badge}
                    </div>
                    <div className="absolute top-3 right-3 bg-emerald-600 text-white text-xs px-2 py-0.5 rounded-md font-bold flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" /> DL Verified
                    </div>
                  </div>

                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="font-bold text-slate-900 text-base mb-1.5">{bike.name}</h3>
                    <p className="text-xs text-slate-600 mb-3 leading-relaxed">{bike.specialty}</p>

                    <div className="text-xs text-slate-600 bg-slate-50 p-2.5 rounded-xl mb-4 border border-slate-100 flex justify-between">
                      <div>
                        <span className="text-slate-400 block text-[10px]">Control</span>
                        <strong className="text-slate-800">{bike.transmission}</strong>
                      </div>
                      <div className="text-right">
                        <span className="text-slate-400 block text-[10px]">Experience</span>
                        <strong className="text-slate-800">{bike.exp}</strong>
                      </div>
                    </div>

                    <div className="mt-auto pt-3 border-t border-slate-100 flex items-center justify-between">
                      <div>
                        <span className="text-slate-400 text-[10px] block">Rider Charge</span>
                        <strong className="text-accent-600 font-extrabold text-sm">{bike.tariff}</strong>
                      </div>
                      <Link
                        href={`/booking?serviceType=Two-Wheeler+%26+Bike+Rider&vehicle=${encodeURIComponent(bike.name)}`}
                        className="px-3.5 py-1.5 bg-accent-500 hover:bg-accent-600 text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-1"
                      >
                        Hire Rider <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        <div className="text-center">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-black text-white px-8 py-3 rounded-xl font-bold text-sm transition-all"
          >
            Review Complete Kanpur Tariff Card <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
