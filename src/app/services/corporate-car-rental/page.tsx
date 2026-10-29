import { Metadata } from "next";
import Link from "next/link";
import { Briefcase, FileText, Users, Building, ShieldCheck, CheckCircle2, Clock, PhoneCall, Award } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import { SITE_CONFIG, getPhoneLink, getWhatsAppLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Monthly Permanent Drivers & Corporate Chauffeurs in Kanpur | KanpurDrivers",
  description:
    "Hire dedicated monthly personal chauffeurs and corporate drivers in Kanpur. 8h, 10h, and 12h daily plans (26 days). Police verified, guaranteed leave replacement, and GST billing.",
};

const monthlyPlans = [
  {
    name: "8 Hours Daily Plan",
    duration: "8 Hours / Day (26 Days)",
    price: "₹15,000",
    ot: "₹70 / hour",
    desc: "Ideal for daily office commute, school drop-offs, and routine family errands.",
    features: [
      "26 working days (4 Sundays off)",
      "Police & Aadhaar verified chauffeur",
      "Immediate leave replacement",
      "Trial day available",
    ],
  },
  {
    name: "10 Hours Daily Plan",
    duration: "10 Hours / Day (26 Days)",
    price: "₹18,000",
    ot: "₹70 / hour",
    desc: "Best suited for business owners, doctors, factory visits & extended workdays.",
    features: [
      "26 working days (4 Sundays off)",
      "Experienced in all automatic & manual cars",
      "Dedicated account manager",
      "Immediate leave replacement",
    ],
    popular: true,
  },
  {
    name: "12 Hours Comprehensive Plan",
    duration: "12 Hours / Day (26 Days)",
    price: "₹21,000",
    ot: "₹80 / hour",
    desc: "Full-day dedicated family chauffeur service covering morning to evening transit.",
    features: [
      "26 working days (4 Sundays off)",
      "Senior luxury car chauffeur",
      "Uniformed & polite professional",
      "Zero agency hassle guarantee",
    ],
  },
];

export default function MonthlyCorporateDriverPage() {
  return (
    <main>
      <PageHero
        title="Monthly Permanent Chauffeurs & Corporate Retainers"
        subtitle="Dedicated, background-verified personal drivers for families, business owners, and corporate fleets in Kanpur"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Monthly Drivers", href: "/services/corporate-car-rental" },
        ]}
      />

      <div className="container mx-auto px-4 py-12 lg:py-20 flex flex-col lg:flex-row gap-12">
        <div className="lg:w-2/3">
          <section className="mb-12">
            <span className="text-primary-800 font-bold uppercase tracking-wider text-xs">
              Dedicated Chauffeur Solutions
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-1 mb-4">
              Reliable Full-Time Chauffeurs for Your Personal Car
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-6">
              Finding a trustworthy, skilled, and punctual driver in Kanpur has traditionally been difficult and risky. KanpurDrivers eliminates the uncertainty by providing police-verified, professionally trained chauffeurs on flexible monthly contracts.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="flex gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-200">
                <Users className="w-8 h-8 text-primary-800 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-base text-slate-900">
                    Family & Senior Citizen Transit
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Gentle, courteous drivers who take immense care of elderly parents, children going to school, and daily household errands.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-200">
                <Briefcase className="w-8 h-8 text-primary-800 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-base text-slate-900">
                    Business Executives & Doctors
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Punctual, uniformed chauffeurs who allow you to take calls, review documents, and arrive relaxed for critical meetings.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-200">
                <Building className="w-8 h-8 text-primary-800 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-base text-slate-900">
                    Corporate Fleet Driver Retainers
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Scalable driver staffing for Kanpur manufacturing units, corporate director cars, and visiting executive guest transport.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-200">
                <FileText className="w-8 h-8 text-primary-800 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-base text-slate-900">
                    100% GST Tax Compliant Invoices
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Seamless monthly corporate billing with GST input tax credit for companies, partnerships, and professional firms.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Monthly Packages */}
          <section className="mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Monthly Chauffeur Tariff Plans (26 Days Duty)
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {monthlyPlans.map((plan, i) => (
                <div
                  key={i}
                  className={`rounded-2xl p-6 border flex flex-col ${
                    plan.popular
                      ? "bg-primary-950 text-white border-primary-900 shadow-xl relative"
                      : "bg-white text-slate-900 border-slate-200 shadow-sm"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 right-4 bg-accent-500 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                      Most Chosen
                    </div>
                  )}
                  <h4 className="font-bold text-lg mb-1">{plan.name}</h4>
                  <span className={`text-xs block mb-4 ${plan.popular ? "text-slate-300" : "text-slate-500"}`}>
                    {plan.duration}
                  </span>
                  <div className="text-3xl font-extrabold mb-1">{plan.price} <span className="text-xs font-normal opacity-75">/ mo</span></div>
                  <span className={`text-[11px] mb-4 block ${plan.popular ? "text-accent-300" : "text-slate-500"}`}>
                    OT Rate: {plan.ot}
                  </span>

                  <ul className="space-y-2 mb-6 text-xs flex-grow">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <CheckCircle2
                          className={`w-3.5 h-3.5 flex-shrink-0 ${
                            plan.popular ? "text-accent-400" : "text-emerald-600"
                          }`}
                        />
                        <span className={plan.popular ? "text-slate-200" : "text-slate-600"}>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/booking?serviceType=Monthly+Personal+Chauffeur&package=${encodeURIComponent(plan.name)}`}
                    className={`py-2.5 rounded-xl font-bold text-xs text-center transition-colors ${
                      plan.popular
                        ? "bg-accent-500 hover:bg-accent-600 text-white"
                        : "bg-primary-900 hover:bg-primary-950 text-white"
                    }`}
                  >
                    Select Plan
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* Guarantee Box */}
          <section className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 mb-12">
            <div className="flex items-start gap-4">
              <Award className="w-8 h-8 text-emerald-700 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-emerald-950 text-base mb-1">
                  Our Uninterrupted Service Guarantee
                </h4>
                <p className="text-xs text-emerald-800 leading-relaxed">
                  If your assigned monthly driver falls ill, needs emergency leave, or doesn&apos;t meet your family&apos;s standards, we deploy a vetted replacement driver within 24 hours at no extra agency fee.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar Enquiry */}
        <div className="lg:w-1/3">
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm sticky top-24">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Hire a Monthly Driver</h3>
            <p className="text-xs text-slate-600 mb-6">
              Share your daily car requirements and schedule a 1-day driver trial in Kanpur.
            </p>

            <div className="space-y-4 mb-6">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-primary-800" />
                <span className="text-xs font-semibold text-slate-700">Police & ID Verified</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary-800" />
                <span className="text-xs font-semibold text-slate-700">Trial Day Available</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center gap-3">
                <Award className="w-5 h-5 text-primary-800" />
                <span className="text-xs font-semibold text-slate-700">Instant Leave Backup</span>
              </div>
            </div>

            <div className="space-y-3">
              <Link
                href="/booking?serviceType=Monthly+Personal+Chauffeur"
                className="w-full py-3 bg-primary-900 hover:bg-primary-950 text-white font-bold rounded-xl text-center block text-xs transition-colors"
              >
                Book Driver Trial Online
              </Link>
              <a
                href={getPhoneLink(SITE_CONFIG.phone)}
                className="w-full py-3 border border-slate-300 text-slate-800 hover:bg-slate-50 font-bold rounded-xl text-center flex items-center justify-center gap-2 text-xs transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5 text-primary-800" />
                Call Desk: {SITE_CONFIG.phone}
              </a>
              <a
                href={getWhatsAppLink(SITE_CONFIG.whatsapp, "Hello KanpurDrivers, I want to inquire about a monthly permanent driver.")}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-center block text-xs transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
