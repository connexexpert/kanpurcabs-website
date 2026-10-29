import React from 'react'
import Link from 'next/link'
import { UserCheck, Compass, Bike, Moon, Briefcase, Calculator, ArrowRight, ShieldCheck } from 'lucide-react'

export default function ServicesGrid() {
  const services = [
    {
      icon: UserCheck,
      title: 'Local Hourly Car Driver',
      description: 'Hire verified chauffeurs for 4h, 8h, or 12h duty to drive your own car for shopping in Naveen Market, meetings, family events, or hospital visits.',
      link: '/services/local-car-rental',
      badge: 'Starting ₹400',
    },
    {
      icon: Compass,
      title: 'Outstation Highway Driver',
      description: 'Experienced, highway-tested drivers for your personal car for one-way drops or multi-day trips to Lucknow, Agra, Ayodhya, Varanasi & Delhi.',
      link: '/services/outstation-cab',
      badge: 'Same-Day & Stay',
    },
    {
      icon: ShieldCheck,
      title: 'Monthly Permanent Driver',
      description: 'Dedicated full-time chauffeurs for families, doctors, executives & senior citizens. Police verified, 26 days/month, with free replacements.',
      link: '/services/corporate-car-rental',
      badge: 'Permanent Hire',
    },
    {
      icon: Bike,
      title: 'Two-Wheeler & Bike Rider',
      description: 'On-demand riders to pilot your scooter or motorcycle, navigate tight traffic, run city errands, or deliver important documents safely.',
      link: '/services/bike-rental',
      badge: 'Starting ₹199',
    },
    {
      icon: Moon,
      title: 'Night Party & Safe Drop',
      description: 'Avoid late-night driving fatigue or DUI risks. Book a professional chauffeur to drive you and your family safely home in your own vehicle.',
      link: '/booking?serviceType=Night+Safe+Drop+Driver',
      badge: '24/7 Available',
    },
    {
      icon: Calculator,
      title: 'Transparent Driver Tariffs',
      description: 'Clear, upfront driver charges. No hidden commissions, transparent night allowances, and affordable hourly rates inspired by standard tariffs.',
      link: '/pricing',
      badge: 'Zero Hidden Fees',
    },
  ]

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-accent-600 font-bold uppercase tracking-wider text-xs mb-2">
            Professional Chauffeur Solutions
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Our Core Driver & Rider Services in Kanpur
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Your vehicle, our verified drivers. Enjoy stress-free travel, eliminate parking worries, and let seasoned professionals handle Kanpur traffic.
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
                <span>View Rates & Driver Details</span>
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
