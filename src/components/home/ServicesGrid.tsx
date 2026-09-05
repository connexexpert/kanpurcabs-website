import React from 'react'
import Link from 'next/link'
import { CarFront, Map, Plane, Train, MapPin, Briefcase, ArrowRight } from 'lucide-react'

export default function ServicesGrid() {
  const services = [
    {
      icon: CarFront,
      title: 'Local Car Rental',
      description: 'Hourly car rentals with driver for city travel, shopping, and meetings.',
      link: '/services/local-car-rental'
    },
    {
      icon: Map,
      title: 'Outstation Cabs',
      description: 'One-way and round-trip cabs to Lucknow, Agra, Varanasi & more.',
      link: '/services/outstation-cab'
    },
    {
      icon: Plane,
      title: 'Airport Transfer',
      description: 'Reliable pickup & drop to Kanpur Airport (Chakeri).',
      link: '/services/airport-transfer'
    },
    {
      icon: Train,
      title: 'Railway Station Transfer',
      description: 'Comfortable transfers to/from Kanpur Central & Govindpuri.',
      link: '/services/railway-station-transfer'
    },
    {
      icon: MapPin,
      title: 'Sightseeing Tours',
      description: 'Explore Kanpur attractions - JK Temple, Allen Zoo, Bithoor & more.',
      link: '/tours'
    },
    {
      icon: Briefcase,
      title: 'Corporate Rentals',
      description: 'Dedicated car rental solutions for businesses & organizations.',
      link: '/services/corporate-car-rental'
    }
  ]

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
          <p className="text-slate-600 text-lg">Complete Car Rental & Tourism Solutions in Kanpur</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all border border-slate-100 group">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 mb-6">{service.description}</p>
              <Link href={service.link} className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
