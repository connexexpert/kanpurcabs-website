import React from 'react'
import { ShieldCheck, IndianRupee, Clock, Car, MapPin, Headphones } from 'lucide-react'

export default function WhyChooseUs() {
  const features = [
    {
      icon: ShieldCheck,
      title: '100% Police Verified Drivers',
      desc: 'Every driver undergoes strict criminal background verification, Aadhaar confirmation, and driving test before onboarding.',
    },
    {
      icon: IndianRupee,
      title: 'Fixed & Transparent Tariffs',
      desc: 'No hidden agency commissions or surge pricing. You pay only the agreed driver duty fee with zero surprise extras.',
    },
    {
      icon: Clock,
      title: '45-Min Doorstep Arrival',
      desc: 'Uniformed drivers reach your Kanpur doorstep within 45 to 60 minutes across Civil Lines, Swaroop Nagar, Kakadeo & more.',
    },
    {
      icon: Car,
      title: 'Drive Any Car or Two-Wheeler',
      desc: 'Skilled in all transmissions: Manual, AMT, Torque Converter, CVT, and Dual-Clutch for hatchbacks, sedans, SUVs & bikes.',
    },
    {
      icon: MapPin,
      title: 'Kanpur & Highway Specialists',
      desc: 'Local drivers who know every Kanpur shortcut, plus highway-certified chauffeurs for Agra, Yamuna & Purvanchal expressways.',
    },
    {
      icon: Headphones,
      title: '24/7 Dispatch Desk',
      desc: 'Need a driver for an emergency, late-night party drop, or 4 AM departure? Our Kanpur dispatch is active 24/7.',
    },
  ]

  return (
    <section className="py-20 bg-slate-50" id="why-choose-us">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent-600 font-bold uppercase tracking-wider text-xs">
            Safety, Reliability & Comfort
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-1 mb-4">
            Why Car & Bike Owners Choose KanpurDrivers
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Avoid driving exhaustion, parking hassles, and highway fatigue. Let our vetted professional take the steering wheel while you relax.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, index) => {
            const isPrimary = index % 2 === 0
            return (
              <div key={index} className="flex gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                <div className="shrink-0">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${isPrimary ? 'bg-primary-100 text-primary-800' : 'bg-orange-100 text-orange-600'}`}>
                    <feat.icon className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{feat.title}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
