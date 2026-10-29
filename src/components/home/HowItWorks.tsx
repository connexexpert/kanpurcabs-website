import React from 'react'
import { CalendarCheck, ShieldCheck, CarFront } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      icon: CalendarCheck,
      title: '1. Choose Service & Vehicle',
      desc: 'Select Local Hourly (4h, 8h, 12h), Outstation Highway, Monthly Chauffeur, or Bike Rider for your manual/automatic vehicle.',
    },
    {
      icon: ShieldCheck,
      title: '2. Driver Reaches in 45 Mins',
      desc: 'Our uniformed, police-verified driver arrives at your Kanpur doorstep with original driving license and ID verification.',
    },
    {
      icon: CarFront,
      title: '3. Relax in Your Personal Car',
      desc: 'Avoid city traffic stress and highway exhaustion. Enjoy a smooth drive in your own car and pay standard transparent tariffs.',
    },
  ]

  return (
    <section className="py-20 bg-primary-950 text-white relative overflow-hidden" id="how-it-works">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent-400 font-bold uppercase tracking-wider text-xs">
            Seamless Booking Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-1 mb-4">
            Hire a Professional Driver in 3 Easy Steps
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Fast, verified, and hassle-free chauffeur dispatch to your doorstep across Kanpur.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto relative">
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-primary-800 border-t-2 border-dashed border-accent-400/40 z-0" />

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-primary-900 rounded-full flex items-center justify-center mb-6 shadow-xl border-4 border-primary-800 relative">
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent-500 text-white rounded-full flex items-center justify-center font-bold text-sm shadow">
                  {index + 1}
                </div>
                <step.icon className="w-10 h-10 text-accent-400" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">{step.title}</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
