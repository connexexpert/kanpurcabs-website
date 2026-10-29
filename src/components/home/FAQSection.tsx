'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, ArrowRight, HelpCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function FAQSection() {
  const faqs = [
    {
      q: 'Who provides the vehicle and fuel?',
      a: 'All driving services are performed on the vehicle provided by the customer (your personal car, SUV, or two-wheeler). The customer is responsible for vehicle fuel, insurance, and roadworthiness, while KanpurDrivers provides the verified, skilled professional driver.',
    },
    {
      q: 'Are your drivers police-verified and background checked?',
      a: 'Yes, 100%. Every driver in our network undergoes comprehensive criminal background verification with local law enforcement, Aadhaar identity confirmation, residential address check, and an active commercial driving license verification.',
    },
    {
      q: 'Do your chauffeurs drive automatic, AMT & luxury cars?',
      a: 'Yes. Our team includes certified drivers with extensive experience handling all transmission types: Manual, AMT, Torque Converter, CVT, and Dual-Clutch systems for luxury vehicles like BMW, Mercedes, Audi, Fortuner, and premium sedans.',
    },
    {
      q: 'How fast can a driver arrive at my Kanpur doorstep?',
      a: 'We provide doorstep dispatch within 45 to 60 minutes across Kanpur, including Civil Lines, Swaroop Nagar, Kakadeo, Kidwai Nagar, Kalyanpur, Mall Road, and surrounding sectors. You can also schedule in advance.',
    },
    {
      q: 'How does outstation driver billing work for road trips?',
      a: 'For outstation trips in your personal car, driver tariff is ₹1,000/day for same-day return (plus ₹250 driver food allowance) or ₹1,200/day for multi-day journeys (plus ₹400 night stay & food allowance). All actual toll plaza fees, state road taxes, and parking fees are settled directly by the customer.',
    },
    {
      q: 'What if my monthly driver takes leave or falls sick?',
      a: 'Our monthly permanent chauffeur service (starting at ₹15,000/month for 8h/day) includes an uninterrupted replacement guarantee. If your dedicated driver is unwell or on leave, our dispatch desk immediately deploys a qualified replacement driver at zero extra agency cost.',
    },
    {
      q: 'Can I hire a rider for my scooter or motorcycle?',
      a: 'Yes! We provide on-demand two-wheeler riders starting at just ₹199 for 2 hours. Perfect for urgent document delivery, city shopping errands, or a safe ride home on your two-wheeler if you are tired or unwell.',
    },
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <span className="text-accent-600 font-bold uppercase tracking-wider text-xs">
            Got Questions?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-1 mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Everything you need to know about hiring verified drivers and riders in Kanpur.
          </p>
        </div>

        <div className="space-y-4 mb-10">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-slate-200 rounded-xl overflow-hidden shadow-sm">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center bg-white hover:bg-slate-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-primary-800 flex-shrink-0" />
                  {faq.q}
                </span>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 text-slate-500 transition-transform flex-shrink-0",
                    openIndex === index ? "rotate-180 text-primary-800" : ""
                  )}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-slate-50 text-slate-600 border-t border-slate-100 text-xs sm:text-sm leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/faq"
            className="text-primary-800 font-bold hover:text-primary-950 inline-flex items-center gap-1.5 text-sm"
          >
            Read All KanpurDrivers FAQs <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
