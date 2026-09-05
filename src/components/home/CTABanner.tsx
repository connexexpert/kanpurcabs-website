import React from 'react'
import Link from 'next/link'
import { Phone, MessageCircle } from 'lucide-react'

export default function CTABanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-500 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Book Your Ride in Kanpur?</h2>
        <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
          Get the best car rental deals for local travel, outstation trips, and sightseeing. Call us or book online now!
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/booking" className="px-8 py-3 bg-white text-blue-700 font-bold rounded-lg hover:bg-slate-100 transition-colors w-full sm:w-auto text-center">
            Book Now Online
          </Link>
          <a href="tel:+919876543210" className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto">
            <Phone className="w-5 h-5" />
            +91 98765 43210
          </a>
          <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="px-8 py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto">
            <MessageCircle className="w-5 h-5" />
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  )
}
