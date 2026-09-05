'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function FAQSection() {
  const faqs = [
    { q: 'How do I book a car in Kanpur?', a: 'You can easily book a car through our website by selecting your required service (local, outstation, airport), filling in your details, and clicking "Book Now". You can also call or WhatsApp us directly.' },
    { q: 'What types of cars are available?', a: 'We offer a wide range of vehicles including Hatchbacks (Swift, etc.), Sedans (Dzire, Aura), SUVs (Innova, Scorpio), Luxury cars, and Tempo Travellers for larger groups.' },
    { q: 'What are your outstation trip charges?', a: 'Outstation charges depend on the vehicle type and are calculated per kilometer. A minimum of 250-300 km per day is charged for round trips. Tolls, parking, and state taxes are extra.' },
    { q: 'Do you provide airport/railway station transfers?', a: 'Yes, we provide dedicated pickup and drop services for Kanpur Airport (Chakeri), Kanpur Central, and Govindpuri railway stations.' },
    { q: 'Can I book a car for a wedding?', a: 'Absolutely! We have a special fleet of luxury and premium cars available for weddings and special events in Kanpur.' },
    { q: 'What is your cancellation policy?', a: 'We offer free cancellation up to 24 hours before the scheduled pickup time. Cancellations made within 24 hours may incur a nominal fee.' }
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-600 text-lg">Find answers to common queries about our car rental services.</p>
        </div>

        <div className="space-y-4 mb-10">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-slate-200 rounded-lg overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center bg-white hover:bg-slate-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-slate-900">{faq.q}</span>
                <ChevronDown className={cn("w-5 h-5 text-slate-500 transition-transform", openIndex === index ? "rotate-180" : "")} />
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-slate-50 text-slate-600 border-t border-slate-100">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/faq" className="text-blue-600 font-medium hover:text-blue-800">
            View All FAQs &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}
