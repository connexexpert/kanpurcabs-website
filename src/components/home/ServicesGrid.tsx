import React from 'react'
import Link from 'next/link'
import { CarFront, Map, Bike, MapPin, Briefcase, Calculator, ArrowRight } from 'lucide-react'

export default function ServicesGrid() {
  const services = [
    {
      icon: CarFront,
      title: 'Local Car Rental',
      description: 'Hourly car rentals (4h, 8h & 12h) with professional chauffeur for city errands, shopping & family visits.',
      link: '/services/local-car-rental',
      badge: 'Chauffeured',
    },
    {
      icon: Bike,
      title: 'Bike & Scooter Rental',
      description: 'Affordable self-drive two-wheeler hire. Activa, Jupiter, Splendor, Pulsar & Royal Enfield Bullet with helmet included.',
      link: '/services/bike-rental',
      badge: 'Self Drive',
    },
    {
      icon: Map,
      title: 'Outstation Cabs',
      description: 'Comfortable one-way drops and round-trip cabs from Kanpur to Lucknow, Agra, Ayodhya, Varanasi & Delhi.',
      link: '/services/outstation-cab',
      badge: 'One Way / Round',
    },
    {
      icon: MapPin,
      title: 'Sightseeing Tours',
      description: 'Custom sightseeing packages for Bithoor Pilgrimage, JK Temple, Allen Forest Zoo, and holy Ganga Ghats.',
      link: '/tours',
      badge: 'Full & Half Day',
    },
    {
      icon: Briefcase,
      title: 'Corporate Travel',
      description: 'Dedicated business mobility solutions for Kanpur MSMEs and corporate offices with GST compliant invoicing.',
      link: '/services/corporate-car-rental',
      badge: 'B2B & Monthly',
    },
    {
      icon: Calculator,
      title: 'Transparent Tariffs',
      description: 'Upfront rates for cars and bikes. Zero surge pricing, clear night allowances, and honest per-km billing.',
      link: '/pricing',
      badge: 'Zero Hidden Fees',
    },
  ]

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-accent-600 font-bold uppercase tracking-wider text-xs mb-2">
            Tailored For Kanpur Travel
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Our Core Rental & Tourism Services
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Choose from chauffeured car packages, self-drive bikes, outstation routes, and curated local Kanpur tour packages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all border border-slate-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 bg-primary-50 text-primary-800 rounded-xl flex items-center justify-center group-hover:bg-primary-900 group-hover:text-white transition-colors">
                    <service.icon className="w-7 h-7" />
                  </div>
                  <span className="text-[11px] font-bold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-full group-hover:bg-accent-50 group-hover:text-accent-700 transition-colors">
                    {service.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2.5">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{service.description}</p>
              </div>
              <Link
                href={service.link}
                className="inline-flex items-center text-primary-800 font-bold text-sm hover:text-accent-600 transition-colors"
              >
                <span>View Details & Rates</span>
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
