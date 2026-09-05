import React from 'react'
import Link from 'next/link'

export default function PopularRoutes() {
  const routes = [
    { dest: 'Lucknow', dist: '80km', time: '1.5hr', price: '2,500' },
    { dest: 'Agra', dist: '280km', time: '4.5hr', price: '5,500' },
    { dest: 'Varanasi', dist: '330km', time: '5.5hr', price: '6,500' },
    { dest: 'Delhi', dist: '440km', time: '6.5hr', price: '8,000' },
    { dest: 'Prayagraj', dist: '200km', time: '3.5hr', price: '4,000' },
    { dest: 'Ayodhya', dist: '230km', time: '4hr', price: '4,500' }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Popular Outstation Routes</h2>
            <p className="text-slate-600 text-lg">Comfortable and safe intercity travel from Kanpur to major destinations.</p>
          </div>
          <Link href="/outstation" className="text-blue-600 font-medium hover:text-blue-800 whitespace-nowrap">
            View All Routes &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {routes.map((route, index) => (
            <div key={index} className="relative rounded-2xl overflow-hidden group cursor-pointer h-64 bg-slate-800">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent z-10" />
              <div className="absolute inset-0 bg-slate-300 opacity-20 group-hover:opacity-40 transition-opacity" />
              
              <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
                <span className="text-blue-300 text-sm font-medium mb-1">Kanpur to</span>
                <h3 className="text-2xl font-bold text-white mb-2">{route.dest}</h3>
                
                <div className="flex items-center text-slate-300 text-sm gap-4 mb-4">
                  <span>{route.dist}</span>
                  <span>•</span>
                  <span>{route.time}</span>
                </div>
                
                <div className="flex items-center justify-between mt-auto">
                  <div>
                    <span className="text-slate-400 text-xs">Starting from</span>
                    <div className="text-orange-400 font-bold text-lg">₹{route.price}</div>
                  </div>
                  <Link href={`/booking?type=outstation&to=${route.dest}`} className="px-4 py-2 bg-white/20 hover:bg-orange-500 text-white rounded-lg text-sm font-medium transition-colors backdrop-blur-sm">
                    Book Now
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
