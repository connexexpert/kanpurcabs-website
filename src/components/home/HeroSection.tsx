'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { MapPin, Calendar, Clock, Car, Bike, Compass, CheckCircle2, ShieldCheck, PhoneCall } from 'lucide-react'
import { cn, SITE_CONFIG, getPhoneLink } from '@/lib/utils'

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState<'local' | 'bike' | 'outstation' | 'tour'>('local')
  const [pickupArea, setPickupArea] = useState('Civil Lines')
  const [packageDuration, setPackageDuration] = useState('8hr_80km')
  const [vehicleChoice, setVehicleChoice] = useState('sedan')
  const [travelDate, setTravelDate] = useState('')
  const [destination, setDestination] = useState('')
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const query = new URLSearchParams()
    if (activeTab === 'local') {
      query.set('service', 'local_rental')
      query.set('pickup', pickupArea)
      query.set('duration', packageDuration)
      query.set('vehicle', vehicleChoice)
    } else if (activeTab === 'bike') {
      query.set('service', 'bike_rental')
      query.set('pickup', pickupArea)
      query.set('vehicle', vehicleChoice)
    } else if (activeTab === 'outstation') {
      query.set('service', 'outstation')
      query.set('destination', destination || 'Lucknow')
    } else {
      query.set('service', 'sightseeing')
    }
    if (travelDate) query.set('date', travelDate)

    router.push(`/booking?${query.toString()}`)
  }

  const tabs = [
    { id: 'local', label: '🚗 Local Car Rental', icon: Car },
    { id: 'bike', label: '🏍️ Bike & Scooter Rental', icon: Bike },
    { id: 'outstation', label: '🛣️ Outstation Cabs', icon: Car },
    { id: 'tour', label: '🏛️ Kanpur Sightseeing', icon: Compass },
  ] as const

  return (
    <section className="relative min-h-[85vh] flex items-center pt-16 pb-12 bg-gradient-to-br from-primary-950 via-primary-900 to-slate-900 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Hero Text Content */}
          <div className="lg:col-span-7 text-white space-y-5">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 px-3.5 py-1.5 rounded-full text-xs font-semibold text-accent-300">
              <ShieldCheck className="w-4 h-4 text-accent-400" />
              <span>Kanpur&apos;s Trusted Car & Bike Rental Service</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold leading-tight tracking-tight">
              Reliable Car & Bike Rentals in <span className="text-accent-400">Kanpur</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Book chauffeured cars for local hourly trips and outstations, or rent self-drive bikes & scooters across Kanpur. Punctual service, verified drivers, transparent billing, and 24/7 support.
            </p>

            {/* Value Motto Badge */}
            <div className="p-3.5 bg-white/5 border border-white/10 rounded-xl flex items-center gap-3 text-xs sm:text-sm text-slate-200">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <span>
                <strong>Our Promise:</strong> Every Drive Matters. Zero surge pricing, sanitized fleet, and on-time pickup guarantee.
              </span>
            </div>

            {/* Quick Proof Metrics (DriverSuvidha pattern) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="bg-white/10 backdrop-blur-sm px-3.5 py-2.5 rounded-xl border border-white/10 text-center sm:text-left">
                <span className="font-extrabold text-xl text-accent-400 block">95,000+</span>
                <span className="text-xs text-slate-300">Happy Trips</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-3.5 py-2.5 rounded-xl border border-white/10 text-center sm:text-left">
                <span className="font-extrabold text-xl text-accent-400 block">250+</span>
                <span className="text-xs text-slate-300">Cars & Bikes</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-3.5 py-2.5 rounded-xl border border-white/10 text-center sm:text-left">
                <span className="font-extrabold text-xl text-accent-400 block">4.9 ★</span>
                <span className="text-xs text-slate-300">Google Rated</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-3.5 py-2.5 rounded-xl border border-white/10 text-center sm:text-left">
                <span className="font-extrabold text-xl text-accent-400 block">24/7</span>
                <span className="text-xs text-slate-300">Roadside Assist</span>
              </div>
            </div>
          </div>

          {/* Right Hero Booking Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl shadow-2xl p-5 sm:p-7 border border-slate-100">
              <div className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-3">
                Quick Online Booking
              </div>

              {/* Service Tabs */}
              <div className="grid grid-cols-2 gap-1.5 mb-5 p-1 bg-slate-100 rounded-xl">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => {
                      setActiveTab(tab.id)
                      if (tab.id === 'bike') setVehicleChoice('Activa 6G')
                      else setVehicleChoice('sedan')
                    }}
                    className={cn(
                      "text-xs sm:text-sm font-bold py-2 px-2.5 rounded-lg transition-all text-center truncate",
                      activeTab === tab.id
                        ? "bg-white text-primary-900 shadow-sm"
                        : "text-slate-600 hover:text-slate-900"
                    )}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <form onSubmit={handleSearch} className="space-y-3.5">
                {/* Local Car Rental Form */}
                {activeTab === 'local' && (
                  <>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700">Pickup Area in Kanpur</label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                        <select
                          value={pickupArea}
                          onChange={(e) => setPickupArea(e.target.value)}
                          className="w-full pl-9 pr-4 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-800 focus:ring-2 focus:ring-primary-500 outline-none"
                        >
                          <option>Civil Lines</option>
                          <option>Swaroop Nagar</option>
                          <option>Kakadeo</option>
                          <option>Kidwai Nagar</option>
                          <option>Mall Road</option>
                          <option>Kalyanpur (IIT Kanpur)</option>
                          <option>Govind Nagar</option>
                          <option>Chakeri</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-slate-700">Package</label>
                        <div className="relative">
                          <Clock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                          <select
                            value={packageDuration}
                            onChange={(e) => setPackageDuration(e.target.value)}
                            className="w-full pl-9 pr-3 py-2.5 border border-slate-300 rounded-lg text-xs sm:text-sm text-slate-800 focus:ring-2 focus:ring-primary-500 outline-none"
                          >
                            <option value="4hr_40km">4hr / 40km (₹1,200+)</option>
                            <option value="8hr_80km">8hr / 80km (₹2,000+)</option>
                            <option value="12hr_120km">12hr / 120km (₹2,800+)</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-slate-700">Car Category</label>
                        <select
                          value={vehicleChoice}
                          onChange={(e) => setVehicleChoice(e.target.value)}
                          className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-xs sm:text-sm text-slate-800 focus:ring-2 focus:ring-primary-500 outline-none"
                        >
                          <option value="hatchback">Hatchback (Swift/i20)</option>
                          <option value="sedan">Sedan (Dzire/Aura)</option>
                          <option value="suv">SUV (Innova/Ertiga)</option>
                          <option value="tempo_traveller">Tempo (12 Seater)</option>
                        </select>
                      </div>
                    </div>
                  </>
                )}

                {/* Bike Rental Form */}
                {activeTab === 'bike' && (
                  <>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700">Pickup Area in Kanpur</label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                        <select
                          value={pickupArea}
                          onChange={(e) => setPickupArea(e.target.value)}
                          className="w-full pl-9 pr-4 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-800 focus:ring-2 focus:ring-primary-500 outline-none"
                        >
                          <option>Civil Lines Hub</option>
                          <option>Swaroop Nagar Hub</option>
                          <option>Kakadeo Coaching Hub</option>
                          <option>IIT Kanpur / Kalyanpur</option>
                          <option>Kidwai Nagar</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-slate-700">Bike / Scooter</label>
                        <select
                          value={vehicleChoice}
                          onChange={(e) => setVehicleChoice(e.target.value)}
                          className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-xs sm:text-sm text-slate-800 focus:ring-2 focus:ring-primary-500 outline-none"
                        >
                          <option value="Activa 6G">Activa 6G (₹400/day)</option>
                          <option value="Jupiter 125">Jupiter 125 (₹450/day)</option>
                          <option value="Splendor Plus">Splendor (₹400/day)</option>
                          <option value="Honda Shine">Shine 125 (₹500/day)</option>
                          <option value="Bajaj Pulsar">Pulsar 150 (₹650/day)</option>
                          <option value="Royal Enfield Classic 350">Bullet 350 (₹1100/day)</option>
                        </select>
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-slate-700">Rental Duration</label>
                        <select
                          value={packageDuration}
                          onChange={(e) => setPackageDuration(e.target.value)}
                          className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-xs sm:text-sm text-slate-800 focus:ring-2 focus:ring-primary-500 outline-none"
                        >
                          <option value="4hr_40km">4 Hours Ride</option>
                          <option value="8hr_80km">8 Hours Ride</option>
                          <option value="24hr_daily">24 Hours (Full Day)</option>
                          <option value="weekly">7 Days (Weekly)</option>
                        </select>
                      </div>
                    </div>
                  </>
                )}

                {/* Outstation Form */}
                {activeTab === 'outstation' && (
                  <>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-slate-700">From</label>
                        <input
                          type="text"
                          value="Kanpur"
                          disabled
                          className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-xs sm:text-sm bg-slate-50 font-semibold text-slate-700"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-slate-700">Destination City</label>
                        <select
                          value={destination}
                          onChange={(e) => setDestination(e.target.value)}
                          className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-xs sm:text-sm text-slate-800 focus:ring-2 focus:ring-primary-500 outline-none"
                        >
                          <option value="Lucknow">Lucknow (85 km)</option>
                          <option value="Agra">Agra (270 km)</option>
                          <option value="Ayodhya">Ayodhya (220 km)</option>
                          <option value="Prayagraj">Prayagraj (200 km)</option>
                          <option value="Varanasi">Varanasi (330 km)</option>
                          <option value="Delhi">Delhi / NCR (450 km)</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700">Car Type</label>
                      <select
                        value={vehicleChoice}
                        onChange={(e) => setVehicleChoice(e.target.value)}
                        className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-xs sm:text-sm text-slate-800 focus:ring-2 focus:ring-primary-500 outline-none"
                      >
                        <option value="sedan">Sedan (₹11/km - Dzire/Aura)</option>
                        <option value="suv">SUV (₹15/km - Ertiga)</option>
                        <option value="crysta">Innova Crysta (₹18/km)</option>
                      </select>
                    </div>
                  </>
                )}

                {/* Sightseeing Tour Form */}
                {activeTab === 'tour' && (
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">Select Sightseeing Package</label>
                    <select
                      className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-xs sm:text-sm text-slate-800 focus:ring-2 focus:ring-primary-500 outline-none"
                    >
                      <option>Bithoor Pilgrimage Tour (Half Day - ₹1,800)</option>
                      <option>Kanpur Heritage & Zoo Tour (Full Day - ₹2,500)</option>
                      <option>Holy Temples of Kanpur (JK Temple, ISKCON, Panki - ₹2,000)</option>
                      <option>Ayodhya & Prayagraj Sangam Tour (2 Days - ₹8,500)</option>
                    </select>
                  </div>
                )}

                {/* Date Input */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Travel Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <input
                      type="date"
                      value={travelDate}
                      onChange={(e) => setTravelDate(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 border border-slate-300 rounded-lg text-xs sm:text-sm text-slate-800 focus:ring-2 focus:ring-primary-500 outline-none"
                    />
                  </div>
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  className="w-full bg-accent-500 hover:bg-accent-600 text-white font-bold py-3 rounded-xl transition-all shadow-md hover:shadow-lg text-sm sm:text-base flex items-center justify-center gap-2"
                >
                  <span>Instant Booking & Price Check</span>
                </button>
              </form>

              {/* Instant Call Assist */}
              <div className="mt-3.5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Prefer phone booking?</span>
                <a
                  href={getPhoneLink(SITE_CONFIG.phone)}
                  className="font-bold text-primary-900 hover:text-accent-600 inline-flex items-center gap-1"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-accent-500" />
                  {SITE_CONFIG.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
