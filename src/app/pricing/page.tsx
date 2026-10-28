import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import PricingSection from "@/components/home/PricingSection";
import Link from "next/link";
import { PhoneCall, ShieldCheck, Clock, FileCheck } from "lucide-react";
import { SITE_CONFIG, getPhoneLink, getWhatsAppLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Pricing & Rate Chart | KanpurCabs - Car & Bike Rental Tariffs in Kanpur",
  description:
    "Transparent pricing and rate chart for car and bike rentals in Kanpur. Hourly local packages, outstation per km rates, night allowance, and driver DA with zero hidden fees.",
};

export default function PricingPage() {
  return (
    <main>
      <PageHero
        title="Rental Tariffs & Pricing"
        subtitle="100% transparent rates for car rentals, outstation trips, and two-wheeler hire in Kanpur"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Pricing", href: "/pricing" },
        ]}
      />

      {/* Main Pricing Section */}
      <PricingSection />

      {/* FAQ & Quick Contact Strip */}
      <section className="py-14 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Have Custom Or Long-Term Rental Requirements?</h3>
            <p className="text-slate-600 text-sm">
              We offer special monthly packages for corporate clients, daily office commuters, and university students in Kanpur.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 text-center">
              <Clock className="w-8 h-8 text-primary-800 mx-auto mb-2" />
              <div className="font-bold text-slate-900 text-sm mb-1">Monthly Retainers</div>
              <div className="text-xs text-slate-500">Dedicated vehicle and driver on flexible monthly terms</div>
            </div>
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 text-center">
              <FileCheck className="w-8 h-8 text-primary-800 mx-auto mb-2" />
              <div className="font-bold text-slate-900 text-sm mb-1">GST Billing</div>
              <div className="text-xs text-slate-500">Compliant B2B tax invoices with instant input tax credit</div>
            </div>
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 text-center">
              <ShieldCheck className="w-8 h-8 text-primary-800 mx-auto mb-2" />
              <div className="font-bold text-slate-900 text-sm mb-1">Guaranteed Backup</div>
              <div className="text-xs text-slate-500">Immediate replacement car/bike in case of maintenance</div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={getPhoneLink(SITE_CONFIG.phone)}
              className="bg-primary-900 hover:bg-primary-950 text-white font-bold px-6 py-3 rounded-lg text-sm transition-colors inline-flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4" /> Call For Custom Quote: {SITE_CONFIG.phone}
            </a>
            <a
              href={getWhatsAppLink(SITE_CONFIG.whatsapp, "Hello KanpurCabs, I want a custom quote for car/bike rental.")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-lg text-sm transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
