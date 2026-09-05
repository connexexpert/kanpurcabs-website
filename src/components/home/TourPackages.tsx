import React from 'react'
import Link from 'next/link'
import { Clock } from 'lucide-react'

export default function TourPackages() {
  const packages = [
    { title: 'Kanpur Half-Day City Tour', duration: '4 hours', highlights: ['JK Temple', 'Allen Zoo', 'Moti Jheel'], price: '1,500' },
    { title: 'Kanpur Full-Day City Tour', duration: '8 hours', highlights: ['Complete sightseeing', 'All major attractions', 'Flexible itinerary'], price: '2,500' },
    { title: 'Bithoor Pilgrimage Tour', duration: '5 hours', highlights: ['Brahmavart Ghat', 'Valmiki Ashram', 'Temples'], price: '1,800' },
    { title: 'Ayodhya-Prayagraj Pilgrimage', duration: '2 Days', highlights: ['Ram Mandir', 'Triveni Sangam', 'Major Temples'], price: '6,500' }
  ]

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Kanpur Sightseeing & Tours</h2>
            <p className="text-slate-600 text-lg">Specially crafted tour packages for exploring Kanpur and nearby religious destinations.</p>
          </div>
          <Link href="/tours" className="text-blue-600 font-medium hover:text-blue-800 whitespace-nowrap">
            View All Packages &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {packages.map((pkg, index) => (
            <div key={index} className="bg-white flex flex-col sm:flex-row rounded-2xl overflow-hidden shadow-sm border border-slate-100">
              <div className="w-full sm:w-2/5 h-48 sm:h-auto bg-slate-200 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-slate-900/80" />
                <div className="absolute bottom-4 left-4">
                  <span className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-md text-white text-xs px-2 py-1 rounded">
                    <Clock className="w-3 h-3" /> {pkg.duration}
                  </span>
                </div>
              </div>
              
              <div className="p-6 w-full sm:w-3/5 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-4">{pkg.title}</h3>
                
                <ul className="mb-6 space-y-2 flex-grow">
                  {pkg.highlights.map((item, i) => (
                    <li key={i} className="text-slate-600 text-sm flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                  <div className="text-lg font-bold text-orange-500">₹{pkg.price}</div>
                  <Link href={`/booking?type=tour`} className="px-4 py-2 bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white rounded-lg text-sm font-medium transition-colors">
                    Book Package
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
