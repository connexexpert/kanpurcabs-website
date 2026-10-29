'use client'
import React from 'react'
import { Quote, Star, ShieldCheck } from 'lucide-react'

export default function TestimonialsCarousel() {
  const testimonials = [
    {
      name: 'Dr. Sanjeev Agarwal',
      loc: 'Civil Lines, Kanpur',
      service: 'Monthly Permanent Chauffeur (Honda City)',
      text: 'I hired a monthly chauffeur for my personal Honda City through KanpurDrivers. The driver is punctual, police-verified, and handles city traffic with immense patience. Excellent service for busy professionals.',
      rating: 5,
    },
    {
      name: 'Ananya Tripathi',
      loc: 'Kakadeo, Kanpur',
      service: 'Outstation Highway Driver (Innova Crysta)',
      text: 'Booked an outstation driver for our family road trip from Kanpur to Ayodhya and Lucknow. The driver drove our Innova with utmost safety, navigated toll plazas smoothly, and was very respectful to my elderly parents.',
      rating: 5,
    },
    {
      name: 'Mohit Kapoor',
      loc: 'Swaroop Nagar, Kanpur',
      service: 'Local 8-Hour Driver (Maruti Dzire)',
      text: 'Booked an 8-hour local package for a full day of wedding shopping and guest pickups. Zero parking headache in crowded Kanpur bazaars. Highly recommend their transparent hourly tariffs.',
      rating: 5,
    },
    {
      name: 'Rohit Nigam',
      loc: 'Gumti No. 5, Kanpur',
      service: 'Two-Wheeler On-Demand Rider (Activa 6G)',
      text: 'Needed urgent legal documents delivered across town while I was tied up in meetings. Booked a 2-hour bike rider for my Activa. He picked up and delivered everything safely within 45 minutes.',
      rating: 5,
    },
    {
      name: 'Shalini Saxena',
      loc: 'Mall Road, Kanpur',
      service: 'Late Night Safe Drop (Creta Automatic)',
      text: 'The night safe drop driver arrived within 40 minutes after our family dinner party. Drove our automatic car safely back to our residence. Clean uniform, polite, and completely dependable.',
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-slate-50" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent-600 font-bold uppercase tracking-wider text-xs">
            Client Experiences
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-1 mb-4">
            What Kanpur Car & Bike Owners Say
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Over 95,000 safe drives completed with verified professional chauffeurs and riders.
          </p>
        </div>

        <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar">
          {testimonials.map((test, index) => (
            <div
              key={index}
              className="snap-center shrink-0 w-full sm:w-[350px] md:w-[380px] bg-white p-7 rounded-2xl shadow-sm border border-slate-200 flex flex-col hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <Quote className="w-8 h-8 text-primary-200" />
                <div className="flex gap-1">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent-400 text-accent-400" />
                  ))}
                </div>
              </div>

              <p className="text-slate-700 text-xs sm:text-sm italic mb-6 flex-grow leading-relaxed">
                &ldquo;{test.text}&rdquo;
              </p>

              <div className="pt-4 border-t border-slate-100">
                <h4 className="font-bold text-slate-900 text-sm">{test.name}</h4>
                <span className="text-xs text-slate-500 block">{test.loc}</span>
                <span className="text-[11px] text-primary-800 font-semibold mt-1 inline-flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" /> {test.service}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
