'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { MapPin, Calendar, Clock, Car, Bike, Compass, CheckCircle2, ShieldCheck, PhoneCall, Star, UserCheck } from 'lucide-react'
import { cn, SITE_CONFIG, getPhoneLink } from '@/lib/utils'

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState<'local' | 'outstation' | 'monthly' | 'bike'>('local')
  const [pickupArea, setPickupArea] = useState('Civil Lines')
  const [packageDuration, setPackageDuration] = useState('8hr')
  const [carType, setCarType] = useState('Sedan (Manual)')
  const [travelDate, setTravelDate] = useState('')
  const [destination, setDestination] = useState('Lucknow')
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const query = new URLSearchParams()
    if (activeTab === 'local') {
      query.set('serviceType', 'Local Hourly Car Driver')
      query.set('pickupLocation', pickupArea)
      query.set('packageDuration', packageDuration)
      query.set('vehicleType', carType)
    } else if (activeTab === 'outstation') {
      query.set('serviceType', 'Outstation Trip Driver')
      query.set('pickupLocation', pickupArea)
      query.set('dropLocation', destination)
      query.set('vehicleType', carType)
    } else if (activeTab === 'monthly') {
      query.set('serviceType', 'Monthly Personal Chauffeur')
      query.set('pickupLocation', pickupArea)
      query.set('packageDuration', packageDuration)
      query.set('vehicleType', carType)
    } else {
      query.set('serviceType', 'Two-Wheeler & Bike Rider')
      query.set('pickupLocation', pickupArea)
      query.set('packageDuration', packageDuration)
      query.set('vehicleType', 'Two-Wheeler (Customer Owned)')
    }
    if (travelDate) query.set('travelDate', travelDate)

    router.push(`/booking?${query.toString()}`)
  }

  const tabs = [
    { id: 'local', label: 'Local Car Driver', icon: Car },
    { id: 'outstation', label: 'Outstation Driver', icon: Compass },
    { id: 'monthly', label: 'Monthly Driver', icon: UserCheck },
    { id: 'bike', label: 'Bike & Rider', icon: Bike },
  ] as const

  return (
    <section className="relative min-h-[85vh] flex items-center pt-16 pb-12 bg-gradient-to-br from-primary-950 via-primary-900 to-slate-900 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 text-white space-y-5">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 px-3.5 py-1.5 rounded-full text-xs font-semibold text-accent-300">
              <ShieldCheck className="w-4 h-4 text-accent-400" />
              <span>Kanpur&apos;s #1 Verified Driver & Rider Network</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold leading-tight tracking-tight">
              Hire Verified Drivers for Your Car & Bike in <span className="text-accent-400">Kanpur</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Professional, background-checked chauffeurs delivered to your doorstep in 45-60 minutes. Hire for local city errands, outstation highway journeys, monthly family drivers, or on-demand bike riders.
            </p>

            {/* Promise Banner */}
            <div className="p-3.5 bg-white/5 border border-white/10 rounded-xl flex items-center gap-3 text-xs sm:text-sm text-slate-200">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <span>
                <strong>Our Safety Guarantee:</strong> 100% Police Verified, Valid Commercial Licenses, Courteous & Uniformed, Zero Alcohol Tolerance.
              </span>
            </div>

            {/* Proof Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="bg-white/10 backdrop-blur-sm px-3.5 py-2.5 rounded-xl border border-white/10 text-center sm:text-left">
                <span className="font-extrabold text-xl text-accent-400 block">8,500+</span>
                <span className="text-xs text-slate-300">Verified Drivers</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-3.5 py-2.5 rounded-xl border border-white/10 text-center sm:text-left">
                <span className="font-extrabold text-xl text-accent-400 block">95,000+</span>
                <span className="text-xs text-slate-300">Safe Drives</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-3.5 py-2.5 rounded-xl border border-white/10 text-center sm:text-left">
                <span className="font-extrabold text-xl text-accent-400 flex items-center justify-center sm:justify-start gap-1">
                  4.9 <Star className="w-4 h-4 fill-accent-400 text-accent-400" />
                </span>
                <span className="text-xs text-slate-300">Google Rated</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-3.5 py-2.5 rounded-xl border border-white/10 text-center sm:text-left">
                <span className="font-extrabold text-xl text-accent-400 block">45 Min</span>
                <span className="text-xs text-slate-300">Doorstep Arrival</span>
              </div>
            </div>
          </div>

          {/* Right Hero Driver Booking Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl shadow-2xl p-5 sm:p-7 border border-slate-100">
              <div className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-3 flex items-center justify-between">
                <span>Hire a Driver / Rider</span>
                <span className="text-[11px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded font-bold">45-min arrival</span>
              </div>

              {/* Service Selection Tabs */}
              <div className="grid grid-cols-2 gap-1.5 mb-5 p-1 bg-slate-100 rounded-xl">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => {
                      setActiveTab(tab.id)
                      if (tab.id === 'bike') {
                        setPackageDuration('4hr')
                        setCarType('Scooter (Activa / Jupiter)')
                      } else if (tab.id === 'monthly') {
                        setPackageDuration('monthly_8hr')
                        setCarType('Sedan (Dzire / Honda City)')
                      } else {
                        setPackageDuration('8hr')
                        setCarType('Sedan (Manual)')
                      }
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
                {/* Pickup Area in Kanpur */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Your Location in Kanpur</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <select
                      value={pickupArea}
                      onChange={(e) => setPickupArea(e.target.value)}
                      className="w-full pl-9 pr-4 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-800 focus:ring-2 focus:ring-primary-500 outline-none bg-white"
                    >
                      <option>Civil Lines</option>
                      <option>Swaroop Nagar</option>
                      <option>Kakadeo (Coaching Nagar)</option>
                      <option>Kidwai Nagar</option>
                      <option>Mall Road</option>
                      <option>Kalyanpur (IIT Kanpur)</option>
                      <option>Govind Nagar</option>
                      <option>Chakeri</option>
                      <option>Harsh Nagar</option>
                      <option>Bithoor</option>
                    </select>
                  </div>
                </div>

                {/* Local Car Driver Form */}
                {activeTab === 'local' && (
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700">Driver Duty Package</label>
                      <div className="relative">
                        <Clock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                        <select
                          value={packageDuration}
                          onChange={(e) => setPackageDuration(e.target.value)}
                          className="w-full pl-9 pr-3 py-2.5 border border-slate-300 rounded-lg text-xs sm:text-sm text-slate-800 focus:ring-2 focus:ring-primary-500 outline-none bg-white"
                        >
                          <option value="4hr">4 Hours Local (₹400)</option>
                          <option value="8hr">8 Hours Full Day (₹700)</option>
                          <option value="12hr">12 Hours Extended (₹950)</option>
                          <option value="night">Night Safe Drop (₹500)</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700">Your Car Type</label>
                      <select
                        value={carType}
                        onChange={(e) => setCarType(e.target.value)}
                        className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-xs sm:text-sm text-slate-800 focus:ring-2 focus:ring-primary-500 outline-none bg-white"
                      >
                        <option value="Hatchback (Manual)">Hatchback (Manual)</option>
                        <option value="Hatchback (Automatic)">Hatchback (Automatic)</option>
                        <option value="Sedan (Manual)">Sedan (Manual)</option>
                        <option value="Sedan (Automatic)">Sedan (Automatic)</option>
                        <option value="SUV (Innova / Scorpio)">SUV / 7-Seater</option>
                        <option value="Luxury (Audi / BMW / Merc)">Luxury Car</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Outstation Driver Form */}
                {activeTab === 'outstation' && (
                  <>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-slate-700">Destination City</label>
                        <select
                          value={destination}
                          onChange={(e) => setDestination(e.target.value)}
                          className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-xs sm:text-sm text-slate-800 focus:ring-2 focus:ring-primary-500 outline-none bg-white"
                        >
                          <option value="Lucknow">Lucknow</option>
                          <option value="Ayodhya">Ayodhya Ram Mandir</option>
                          <option value="Agra">Agra Expressway</option>
                          <option value="Prayagraj">Prayagraj Sangam</option>
                          <option value="Varanasi">Varanasi</option>
                          <option value="Delhi / NCR">Delhi / NCR</option>
                        </select>
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-slate-700">Trip Plan</label>
                        <select
                          value={packageDuration}
                          onChange={(e) => setPackageDuration(e.target.value)}
                          className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-xs sm:text-sm text-slate-800 focus:ring-2 focus:ring-primary-500 outline-none bg-white"
                        >
                          <option value="outstation_sameday">Same Day Return (₹1,000)</option>
                          <option value="outstation_stay">Multi-Day Stay (₹1,200/day)</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700">Vehicle to be Driven</label>
                      <select
                        value={carType}
                        onChange={(e) => setCarType(e.target.value)}
                        className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-xs sm:text-sm text-slate-800 focus:ring-2 focus:ring-primary-500 outline-none bg-white"
                      >
                        <option value="Sedan (Dzire / City / Ciaz)">Sedan (Dzire / City / Ciaz)</option>
                        <option value="SUV (Innova Crysta / Scorpio / XUV)">SUV (Innova / Scorpio / XUV)</option>
                        <option value="Hatchback (Swift / Baleno / i20)">Hatchback (Swift / i20)</option>
                        <option value="Luxury Sedan / SUV">Luxury Sedan / SUV</option>
                      </select>
                    </div>
                  </>
                )}

                {/* Monthly Permanent Driver Form */}
                {activeTab === 'monthly' && (
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700">Duty Hours (26 Days)</label>
                      <select
                        value={packageDuration}
                        onChange={(e) => setPackageDuration(e.target.value)}
                        className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-xs sm:text-sm text-slate-800 focus:ring-2 focus:ring-primary-500 outline-none bg-white"
                      >
                        <option value="monthly_8hr">8 Hours / Day (₹15,000/mo)</option>
                        <option value="monthly_10hr">10 Hours / Day (₹18,000/mo)</option>
                        <option value="monthly_12hr">12 Hours / Day (₹21,000/mo)</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700">Primary Car</label>
                      <select
                        value={carType}
                        onChange={(e) => setCarType(e.target.value)}
                        className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-xs sm:text-sm text-slate-800 focus:ring-2 focus:ring-primary-500 outline-none bg-white"
                      >
                        <option value="Sedan">Sedan (Dzire / Honda City)</option>
                        <option value="SUV">SUV (Innova / Fortuner)</option>
                        <option value="Hatchback">Hatchback / EV</option>
                        <option value="Multiple Cars">Multiple Family Cars</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Bike & Rider Form */}
                {activeTab === 'bike' && (
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700">Rider Requirement</label>
                      <select
                        value={packageDuration}
                        onChange={(e) => setPackageDuration(e.target.value)}
                        className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-xs sm:text-sm text-slate-800 focus:ring-2 focus:ring-primary-500 outline-none bg-white"
                      >
                        <option value="2hr">2 Hours Quick Ride (₹199)</option>
                        <option value="4hr">4 Hours Half Day (₹349)</option>
                        <option value="8hr">8 Hours Full Day (₹599)</option>
                        <option value="recovery">Safe Recovery Ride (₹299)</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700">Two-Wheeler Model</label>
                      <select
                        value={carType}
                        onChange={(e) => setCarType(e.target.value)}
                        className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-xs sm:text-sm text-slate-800 focus:ring-2 focus:ring-primary-500 outline-none bg-white"
                      >
                        <option value="Honda Activa 6G">Honda Activa 6G / Scooty</option>
                        <option value="Hero Splendor / Commuter">Hero Splendor / Shine</option>
                        <option value="Bajaj Pulsar / Sports">Bajaj Pulsar / Apache</option>
                        <option value="Royal Enfield Classic 350">Royal Enfield Bullet 350</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Date Input */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Service Date</label>
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
                  <UserCheck className="w-5 h-5" />
                  <span>Check Availability & Hire Driver</span>
                </button>
              </form>

              {/* Instant Call Assist */}
              <div className="mt-3.5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Immediate 45-min dispatch?</span>
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
