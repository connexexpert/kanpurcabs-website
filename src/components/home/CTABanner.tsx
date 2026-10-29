import React from 'react'
import Link from 'next/link'
import { Phone, MessageCircle, ShieldCheck } from 'lucide-react'
import { SITE_CONFIG, getPhoneLink, getWhatsAppLink } from '@/lib/utils'

export default function CTABanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-primary-950 via-primary-900 to-slate-900 text-white border-t border-white/10">
      <div className="container mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-1.5 bg-white/10 text-accent-400 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-white/10">
          <ShieldCheck className="w-3.5 h-3.5" /> 24/7 Verified Chauffeur & Rider Dispatch
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">
          Ready to Hire a Verified Driver in Kanpur?
        </h2>
        <p className="text-slate-300 text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
          Sit back, avoid Kanpur traffic stress, and travel safely in your own car or two-wheeler. Doorstep arrival in 45-60 minutes!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/booking"
            className="px-8 py-3.5 bg-accent-500 hover:bg-accent-600 text-white font-bold rounded-xl shadow-lg transition-colors w-full sm:w-auto text-center text-sm"
          >
            Hire Driver Online
          </Link>
          <a
            href={getPhoneLink(SITE_CONFIG.phone)}
            className="px-8 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2 w-full sm:w-auto text-sm"
          >
            <Phone className="w-4 h-4 text-accent-400" />
            {SITE_CONFIG.phone}
          </a>
          <a
            href={getWhatsAppLink(SITE_CONFIG.whatsapp, "Hello KanpurDrivers, I want to hire a driver for my car.")}
            target="_blank"
            rel="noreferrer"
            className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2 w-full sm:w-auto text-sm"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp Dispatch
          </a>
        </div>
      </div>
    </section>
  )
}
