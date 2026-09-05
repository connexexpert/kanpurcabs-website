import React from 'react'
import { Shield, IndianRupee, Clock, Car, MapPin, Headphones } from 'lucide-react'

export default function WhyChooseUs() {
  const features = [
    { icon: Shield, title: 'Verified Professional Drivers', desc: 'All drivers are background-verified, trained, and experienced.' },
    { icon: IndianRupee, title: 'Transparent Pricing', desc: 'No hidden charges. Pay only what you see. Clear fare breakdown.' },
    { icon: Clock, title: '24/7 Availability', desc: 'Book anytime, travel anytime. Round-the-clock support.' },
    { icon: Car, title: 'Well-Maintained Fleet', desc: 'Clean, sanitized, well-maintained cars with regular servicing.' },
    { icon: MapPin, title: 'Kanpur Experts', desc: 'Local drivers who know every road, shortcut, and landmark in Kanpur.' },
    { icon: Headphones, title: 'Dedicated Support', desc: 'Friendly customer support team available via call, WhatsApp, or email.' }
  ]

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Choose KanpurCabs?</h2>
          <p className="text-slate-600 text-lg">We pride ourselves on delivering the best travel experience.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, index) => {
            const isPrimary = index % 2 === 0
            return (
              <div key={index} className="flex gap-4 p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                <div className="shrink-0">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${isPrimary ? 'bg-blue-100 text-blue-600' : 'bg-orange-100 text-orange-500'}`}>
                    <feat.icon className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{feat.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
