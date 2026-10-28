'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function FAQSection() {
  const faqs = [
    { q: 'How do I book a car or bike in Kanpur?', a: 'You can easily book online through our website by selecting your required service (local car rental, bike hire, outstation, or tours), selecting your vehicle, and clicking "Book Now". You can also call or WhatsApp us directly.' },
    { q: 'What types of cars and two-wheelers are available?', a: 'For cars, we offer Hatchbacks (Swift, i20), Sedans (Dzire, Aura), SUVs (Innova Crysta, Scorpio), and Tempo Travellers. For two-wheelers, we have Activa 6G, TVS Jupiter, Splendor Plus, Honda Shine, Bajaj Pulsar, and Royal Enfield Classic 350.' },
    { q: 'How does your transparent pricing work?', a: 'For local car rentals, we offer fixed 4h/40km, 8h/80km, and 12h/120km packages with driver and fuel included. Outstation is billed per kilometer (minimum 250 km/day). Two-wheelers have fixed hourly (₹50-₹140/hr) and 24h daily rates (₹400-₹1100/day) with zero surge pricing.' },
    { q: 'What documents are required to rent a bike or scooter?', a: 'You only need a valid original Driving License and an official Government ID proof (such as Aadhaar Card or Voter ID), plus a small refundable security deposit returned instantly upon drop-off.' },
    { q: 'Are helmets and roadside assistance included with bike rentals?', a: 'Yes! Every bike and scooter rental comes with a complimentary sanitized ISI-marked helmet and 24/7 on-road breakdown assistance anywhere within Kanpur.' },
    { q: 'What is your cancellation policy?', a: 'We offer 100% free cancellation up to 6 hours before your scheduled pickup time. Cancellations can be easily requested via phone or WhatsApp.' }
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
