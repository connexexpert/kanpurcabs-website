'use client'
import React, { useState, useEffect } from 'react'
import { Quote, Star } from 'lucide-react'

export default function TestimonialsCarousel() {
  const testimonials = [
    { name: 'Rahul Sharma', loc: 'Kanpur', text: 'Excellent service! Booked an outstation cab to Lucknow. The driver was on time, polite, and the car was very clean. Highly recommended for family travel.', rating: 5 },
    { name: 'Priya Singh', loc: 'Delhi', text: 'Used their airport transfer service from Chakeri Airport. Very smooth experience. Fixed prices and no haggling required.', rating: 5 },
    { name: 'Amit Gupta', loc: 'Kanpur', text: 'Booked a 8hr local package for shopping and meetings. It was very convenient. The driver knew all the local routes well.', rating: 4 },
    { name: 'Sneha Verma', loc: 'Lucknow', text: 'Took the Kanpur sightseeing tour. Covered JK Temple and Bithoor. Great comfortable Innova and an excellent guide-like driver.', rating: 5 },
    { name: 'Vikram Yadav', loc: 'Kanpur', text: 'Best cab service in Kanpur. I regularly use their outstation cabs for my business trips to Agra and Delhi. Very reliable.', rating: 5 }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto scroll logic can be added here

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Our Customers Say</h2>
          <p className="text-slate-600 text-lg">Read reviews from our satisfied travelers.</p>
        </div>

        <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar">
          {testimonials.map((test, index) => (
            <div key={index} className="snap-center shrink-0 w-full sm:w-[350px] md:w-[400px] bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col">
              <Quote className="w-10 h-10 text-orange-200 mb-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(test.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />)}
              </div>
              <p className="text-slate-600 italic mb-6 flex-grow">"{test.text}"</p>
              <div>
                <h4 className="font-bold text-slate-900">{test.name}</h4>
                <span className="text-sm text-slate-500">{test.loc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
