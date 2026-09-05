import React from 'react'
import { Search, CalendarDays, CarFront } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    { icon: Search, title: 'Choose Your Service', desc: 'Select from local rental, outstation, airport transfer, or tour packages.' },
    { icon: CalendarDays, title: 'Book & Confirm', desc: 'Fill in your travel details and get an instant quote. Confirm your booking.' },
    { icon: CarFront, title: 'Enjoy Your Ride', desc: 'Our professional driver arrives on time. Sit back and enjoy your journey.' }
  ]

  return (
    <section className="py-20 bg-blue-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Book Your Ride in 3 Simple Steps</h2>
          <p className="text-blue-200 text-lg">Fast, easy, and hassle-free car booking experience.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto relative">
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-blue-800 border-t-2 border-dashed border-blue-400/50 z-0" />
          
          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-blue-800 rounded-full flex items-center justify-center mb-6 shadow-xl border-4 border-blue-900 relative">
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                <step.icon className="w-10 h-10 text-blue-300" />
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-blue-200">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
