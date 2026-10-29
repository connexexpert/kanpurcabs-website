import React from 'react'
import Link from 'next/link'
import { ArrowRight, Compass, ShieldCheck } from 'lucide-react'

export default function PopularRoutes() {
  const routes = [
    { dest: 'Lucknow', dist: '80 km', time: '1.5 hrs', price: '1,000', duty: 'Same-Day Return', da: '₹250 DA' },
    { dest: 'Ayodhya', dist: '230 km', time: '4.0 hrs', price: '1,000', duty: 'Same-Day Return', da: '₹250 DA' },
    { dest: 'Prayagraj', dist: '200 km', time: '3.5 hrs', price: '1,000', duty: 'Same-Day Return', da: '₹250 DA' },
    { dest: 'Varanasi', dist: '330 km', time: '5.5 hrs', price: '1,200', duty: 'Overnight Stay', da: '₹400 Stay DA' },
    { dest: 'Agra', dist: '280 km', time: '4.5 hrs', price: '1,000', duty: 'Same-Day Return', da: '₹250 DA' },
    { dest: 'Delhi / NCR', dist: '440 km', time: '6.5 hrs', price: '1,200', duty: 'Overnight Stay', da: '₹400 Stay DA' },
  ]

  return (
    <section className="py-20 bg-white" id="outstation-routes">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="max-w-2xl">
            <span className="text-accent-600 font-bold uppercase tracking-wider text-xs">
              Highway Chauffeur Service
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-1 mb-3">
              Popular Outstation Highway Routes (In Your Car)
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Hire vetted expressway chauffeurs to drive your personal car comfortably to major destinations from Kanpur.
            </p>
          </div>
          <Link
            href="/services/outstation-cab"
            className="text-primary-800 font-bold hover:text-primary-950 inline-flex items-center gap-1.5 whitespace-nowrap text-sm"
          >
            All Outstation Tariffs <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {routes.map((route, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden group border border-slate-200 bg-slate-900 shadow-sm hover:shadow-md transition-all h-64"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent z-10" />
              <div className="absolute inset-0 bg-primary-950 opacity-40 group-hover:opacity-60 transition-opacity" />

              <div className="absolute top-4 right-4 z-20 bg-white/10 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] text-accent-300 font-semibold border border-white/10">
                {route.duty}
              </div>

              <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
                <span className="text-blue-300 text-xs font-semibold uppercase tracking-wider mb-1">
                  Kanpur &rarr; {route.dest}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">{route.dest}</h3>

                <div className="flex items-center text-slate-300 text-xs gap-3 mb-4">
                  <span>{route.dist}</span>
                  <span>•</span>
                  <span>{route.time}</span>
                  <span>•</span>
                  <span className="text-emerald-400 font-semibold">{route.da}</span>
                </div>

                <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/10">
                  <div>
                    <span className="text-slate-400 text-[11px] block">Driver Daily Tariff</span>
                    <div className="text-accent-400 font-extrabold text-xl">₹{route.price} / day</div>
                  </div>
                  <Link
                    href={`/booking?serviceType=Outstation+Trip+Driver&dropLocation=${encodeURIComponent(route.dest)}`}
                    className="px-4 py-2 bg-accent-500 hover:bg-accent-600 text-white rounded-lg text-xs font-bold transition-colors shadow"
                  >
                    Hire Driver
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
