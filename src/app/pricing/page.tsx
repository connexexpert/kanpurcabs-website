import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import PricingSection from "@/components/home/PricingSection";
import Link from "next/link";
import { PhoneCall, ShieldCheck, Clock, FileCheck, CheckCircle2, Award } from "lucide-react";
import { SITE_CONFIG, getPhoneLink, getWhatsAppLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Pricing & Rate Chart | KanpurDrivers - Verified Driver & Rider Tariffs in Kanpur",
  description:
    "Transparent pricing and tariff chart for hiring verified drivers and riders in Kanpur. Local hourly driver packages (4h, 8h, 12h), outstation daily charges, and monthly permanent chauffeurs.",
};

export default function PricingPage() {
  return (
    <main>
      <PageHero
        title="Driver & Rider Tariffs"
        subtitle="100% transparent duty charges for hiring verified drivers for your personal car and two-wheeler in Kanpur"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Price Chart", href: "/pricing" },
        ]}
      />

      {/* Main Pricing Section */}
      <PricingSection />

      {/* Monthly & Corporate Chauffeur Guarantees */}
      <section className="py-14 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Looking for a Dedicated Monthly Chauffeur?
            </h3>
            <p className="text-slate-600 text-sm">
              We provide screened, police-verified personal and corporate chauffeurs on 26-day monthly contracts for families, business owners, and corporate executives in Kanpur.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-center">
              <Clock className="w-8 h-8 text-primary-800 mx-auto mb-2" />
              <div className="font-bold text-slate-900 text-sm mb-1">Flexible Duty Shifts</div>
              <div className="text-xs text-slate-500">Choose between 8 hours (₹15k), 10 hours (₹18k), or 12 hours (₹21k) daily duty.</div>
            </div>
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-center">
              <ShieldCheck className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
              <div className="font-bold text-slate-900 text-sm mb-1">Police & Criminal Check</div>
              <div className="text-xs text-slate-500">Every chauffeur comes with verified police records and residential Aadhaar background.</div>
            </div>
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-center">
              <Award className="w-8 h-8 text-primary-800 mx-auto mb-2" />
              <div className="font-bold text-slate-900 text-sm mb-1">Leave Replacement</div>
              <div className="text-xs text-slate-500">Instant qualified replacement driver provided at zero extra cost when regular driver takes leave.</div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={getPhoneLink(SITE_CONFIG.phone)}
              className="bg-primary-900 hover:bg-primary-950 text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors inline-flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4" /> Call Monthly Desk: {SITE_CONFIG.phone}
            </a>
            <a
              href={getWhatsAppLink(SITE_CONFIG.whatsapp, "Hello KanpurDrivers, I want to inquire about a monthly permanent driver for my car.")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
