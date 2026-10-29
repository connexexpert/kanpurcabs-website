import React from 'react'
import Link from 'next/link'
import { Clock, ShieldCheck, ArrowRight } from 'lucide-react'

export default function TourPackages() {
  const packages = [
    {
      title: 'Kanpur Half-Day City Sightseeing Driver',
      duration: '4 Hours Duty',
      highlights: ['JK Temple & Kamla Tower', 'Allen Forest Zoo', 'Moti Jheel & Mall Road'],
      price: '400',
      imageUrl: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Kanpur Full-Day City Sightseeing Driver',
      duration: '8 Hours Duty',
      highlights: ['Complete city sightseeing', 'Ganga Barrage & Atal Ghat', 'Blue World & Shopping in Bazaars'],
      price: '700',
      imageUrl: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Bithoor Holy Pilgrimage Chauffeur',
      duration: '5 Hours Duty',
      highlights: ['Brahmavart Ghat Darshan', 'Valmiki Ashram & Sita Rasoi', 'Dhruva Teela & Sacred Shrines'],
      price: '500',
      imageUrl: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Ayodhya & Prayagraj Pilgrimage Driver',
      duration: '2 Days Outstation',
      highlights: ['Ayodhya Ram Mandir & Hanuman Garhi', 'Prayagraj Triveni Sangam Snan', 'Overnight stay in your car'],
      price: '2,400',
      imageUrl: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
    },
  ]

  return (
    <section className="py-20 bg-slate-50" id="tour-packages">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="max-w-2xl">
            <span className="text-accent-600 font-bold uppercase tracking-wider text-xs">
              Sightseeing & Pilgrimage Chauffeurs
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-1 mb-3">
              Kanpur Sightseeing & Temple Pilgrimage Drivers
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Enjoy peaceful spiritual journeys with your family in your personal vehicle. Our chauffeurs know all temple parking and scenic routes.
            </p>
          </div>
          <Link
            href="/services/local-car-rental"
            className="text-primary-800 font-bold hover:text-primary-950 inline-flex items-center gap-1.5 text-sm"
          >
            All Sightseeing Tariffs <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-white flex flex-col sm:flex-row rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
            >
              <div className="w-full sm:w-2/5 h-48 sm:h-auto bg-slate-200 relative overflow-hidden group">
                <img
                  src={pkg.imageUrl}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4">
                  <span className="inline-flex items-center gap-1 bg-black/60 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded-md font-semibold">
                    <Clock className="w-3 h-3 text-accent-400" /> {pkg.duration}
                  </span>
                </div>
              </div>

              <div className="p-6 w-full sm:w-3/5 flex flex-col">
                <h3 className="text-lg font-bold text-slate-900 mb-3">{pkg.title}</h3>

                <ul className="mb-6 space-y-2 flex-grow">
                  {pkg.highlights.map((item, i) => (
                    <li key={i} className="text-slate-600 text-xs flex items-start gap-2">
                      <span className="text-primary-800 font-bold">•</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                  <div>
                    <span className="text-slate-400 text-[10px] block">Driver Duty Fee</span>
                    <div className="text-base font-extrabold text-primary-900">₹{pkg.price}</div>
                  </div>
                  <Link
                    href={`/booking?serviceType=Local+Hourly+Car+Driver&package=${encodeURIComponent(pkg.title)}`}
                    className="px-4 py-2 bg-primary-50 text-primary-800 hover:bg-primary-900 hover:text-white rounded-lg text-xs font-bold transition-colors"
                  >
                    Hire Chauffeur
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
