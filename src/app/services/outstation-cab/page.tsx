import { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, ThumbsUp, CreditCard, CheckCircle2, Compass, Clock, MapPin } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import { SITE_CONFIG } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Outstation Highway Drivers from Kanpur | In Your Own Car | KanpurDrivers",
  description:
    "Hire verified, professional highway drivers for your personal car for one-way and round trips from Kanpur to Lucknow, Delhi, Agra, Varanasi, Ayodhya, and Prayagraj.",
};

const popularRoutes = [
  {
    dest: "Lucknow",
    dist: "90 km",
    time: "2 hrs",
    tariff: "₹1,000 / day",
    da: "₹250 DA",
    duty: "Same-Day Return",
  },
  {
    dest: "Ayodhya",
    dist: "230 km",
    time: "4 hrs",
    tariff: "₹1,000 / day",
    da: "₹250 DA",
    duty: "Same-Day Return",
  },
  {
    dest: "Prayagraj",
    dist: "210 km",
    time: "3.5 hrs",
    tariff: "₹1,000 / day",
    da: "₹250 DA",
    duty: "Same-Day Return",
  },
  {
    dest: "Agra",
    dist: "280 km",
    time: "4.5 hrs",
    tariff: "₹1,000 / day",
    da: "₹250 DA",
    duty: "Same-Day Return",
  },
  {
    dest: "Varanasi",
    dist: "330 km",
    time: "6 hrs",
    tariff: "₹1,200 / day",
    da: "₹400 Stay DA",
    duty: "Overnight Stay",
  },
  {
    dest: "Delhi / NCR",
    dist: "500 km",
    time: "7.5 hrs",
    tariff: "₹1,200 / day",
    da: "₹400 Stay DA",
    duty: "Overnight Stay",
  },
];

const faqs = [
  {
    q: "Who pays for fuel, toll tax, and interstate road taxes?",
    a: "Because our highway chauffeur drives your personal car, fuel, actual toll plaza taxes, and interstate road taxes are paid directly by the customer. You only pay KanpurDrivers the fixed driver duty tariff and driver food/stay allowance.",
  },
  {
    q: "Are your outstation drivers experienced in night highway driving?",
    a: "Yes. All our outstation drivers have a minimum of 8+ years of highway driving experience, certified commercial licenses, and proven track records on expressways including Yamuna Expressway, Agra-Lucknow Expressway, and Purvanchal Expressway.",
  },
  {
    q: "What is the food and night stay allowance for the driver?",
    a: "For same-day outstation trips, a flat driver food allowance (DA) of ₹250 applies. For overnight trips where the driver stays outside Kanpur, the daily night stay and food allowance is ₹400 per night.",
  },
];

export default function OutstationDriverPage() {
  return (
    <main>
      <PageHero
        title="Outstation Highway Driver Service"
        subtitle="Hire vetted, professional highway chauffeurs for your personal car from Kanpur — Safe, relaxed intercity road trips"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Outstation Drivers", href: "/services/outstation-cab" },
        ]}
      />

      {/* Main Tariff Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-primary-800 font-bold uppercase tracking-wider text-xs">
              Highway Chauffeur on Demand
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-1 mb-4">
              Enjoy Interstate Road Trips in Your Own Car
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Why bear the stress of 6 to 8 hours of continuous highway driving or pay hefty cab rental fees when you already own a comfortable car? Hire an experienced highway driver to take the wheel.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {/* Same Day Outstation Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold bg-blue-100 text-primary-800 px-3 py-1 rounded-full">
                  Up to 12 Hours Duty
                </span>
                <span className="text-xs text-slate-500 font-medium">Local Return</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Same-Day Highway Return</h3>
              <p className="text-xs text-slate-600 mb-6">
                Perfect for quick day trips from Kanpur to Lucknow, Ayodhya, Prayagraj, or Agra and returning the same night.
              </p>

              <div className="bg-slate-50 p-4 rounded-xl mb-6 border border-slate-100">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs text-slate-500">Driver Daily Tariff</span>
                  <span className="text-3xl font-extrabold text-slate-900">₹1,000 <span className="text-xs font-normal text-slate-500">/ day</span></span>
                </div>
                <div className="text-xs text-slate-600 mt-2 pt-2 border-t border-slate-200 flex justify-between">
                  <span>Driver Food Allowance (DA):</span>
                  <strong>₹250 / day</strong>
                </div>
              </div>

              <ul className="space-y-2 mb-8 text-xs text-slate-600 flex-grow">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Highway tested & expressway certified driver</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Doorstep pickup anywhere in Kanpur</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Customer bears actual fuel & toll expenses</span>
                </li>
              </ul>

              <Link
                href="/booking?serviceType=Outstation+Trip+Driver&package=outstation_sameday"
                className="w-full py-3 bg-primary-900 hover:bg-primary-950 text-white font-bold rounded-xl text-center text-xs transition-colors"
              >
                Hire Same-Day Highway Driver
              </Link>
            </div>

            {/* Multi-Day Outstation Card */}
            <div className="bg-primary-950 rounded-2xl border border-primary-900 p-8 shadow-xl text-white flex flex-col relative">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold bg-accent-500 text-white px-3 py-1 rounded-full shadow">
                  Multi-Day / Overnight Stay
                </span>
                <span className="text-xs text-accent-300 font-medium">24h Coverage</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Outstation Multi-Day & Stay</h3>
              <p className="text-xs text-slate-300 mb-6">
                Ideal for family vacations, wedding tours to Delhi, Varanasi, Rajasthan, or multi-city pilgrimage circuits in your vehicle.
              </p>

              <div className="bg-white/10 p-4 rounded-xl mb-6 border border-white/10">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs text-slate-300">Driver Daily Tariff</span>
                  <span className="text-3xl font-extrabold text-accent-400">₹1,200 <span className="text-xs font-normal text-slate-300">/ day</span></span>
                </div>
                <div className="text-xs text-slate-300 mt-2 pt-2 border-t border-white/10 flex justify-between">
                  <span>Night Stay & Food Allowance:</span>
                  <strong className="text-white">₹400 / night</strong>
                </div>
              </div>

              <ul className="space-y-2 mb-8 text-xs text-slate-200 flex-grow">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent-400" />
                  <span>10+ yrs highway safety & night vision certification</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent-400" />
                  <span>Expert in hills, ghats, and heavy rain conditions</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent-400" />
                  <span>Continuous personal chauffeur for your entire trip</span>
                </li>
              </ul>

              <Link
                href="/booking?serviceType=Outstation+Trip+Driver&package=outstation_stay"
                className="w-full py-3 bg-accent-500 hover:bg-accent-600 text-white font-bold rounded-xl text-center text-xs transition-colors shadow-md"
              >
                Hire Multi-Day Highway Driver
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Routes Matrix */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-5xl">
          <SectionHeading
            title="Popular Highway Destinations from Kanpur"
            subtitle="Standard driver daily tariffs for major interstate and intercity routes"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {popularRoutes.map((route, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-primary-800">Kanpur &rarr; {route.dest}</span>
                  <span className="text-[11px] bg-slate-100 px-2 py-0.5 rounded text-slate-600 font-medium">
                    {route.duty}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-1">{route.dest}</h4>
                <div className="text-xs text-slate-500 mb-4">
                  {route.dist} • Approx {route.time}
                </div>

                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-slate-400 text-[10px] block">Driver Tariff</span>
                    <strong className="text-primary-900 text-base font-extrabold">{route.tariff}</strong>
                    <span className="text-[10px] text-emerald-600 block">{route.da}</span>
                  </div>
                  <Link
                    href={`/booking?serviceType=Outstation+Trip+Driver&dropLocation=${encodeURIComponent(route.dest)}`}
                    className="px-3 py-1.5 bg-primary-900 hover:bg-primary-950 text-white text-xs font-bold rounded-lg transition-colors"
                  >
                    Hire Driver
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outstation FAQs */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-3xl">
          <SectionHeading
            title="Outstation Driver FAQs"
            subtitle="Common questions regarding highway chauffeur duty"
          />

          <div className="space-y-4 mt-8">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                <h4 className="font-bold text-slate-900 text-sm mb-2">{faq.q}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
