import { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import { Users, ShieldCheck, Target, Award, MapPin, CheckCircle2, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About Us | KanpurDrivers - Verified Drivers & Riders in Kanpur",
  description:
    "Learn about KanpurDrivers, Kanpur's leading network of background-verified, professional drivers and riders for personal cars and two-wheelers.",
};

const stats = [
  { label: "Years Serving Kanpur", value: "8+" },
  { label: "Verified Drivers & Riders", value: "8,500+" },
  { label: "Safe Drives Completed", value: "95,000+" },
  { label: "Customer Satisfaction", value: "99.4%" },
];

const values = [
  {
    icon: ShieldCheck,
    title: "100% Police & DL Verified",
    description:
      "Every driver and rider undergoes strict criminal background checks, Aadhaar identity confirmation, and driving proficiency evaluations.",
  },
  {
    icon: Users,
    title: "In Your Personal Vehicle",
    description:
      "We believe you shouldn't have to rent expensive cabs when you already own a car. Our chauffeurs take the steering wheel while you relax.",
  },
  {
    icon: Target,
    title: "Transparent Fixed Tariffs",
    description:
      "Zero hidden fees, zero surge pricing, and no surprise agency cuts. Transparent hourly, outstation, and monthly tariffs.",
  },
  {
    icon: Award,
    title: "Leave Replacement Guarantee",
    description:
      "For monthly drivers, if your designated chauffeur is ill or on leave, our dispatch desk immediately deploys a qualified backup.",
  },
  {
    icon: MapPin,
    title: "Local Kanpur Expertise",
    description:
      "Our chauffeurs know every road, flyover, and traffic bypass across Kanpur and Uttar Pradesh expressways.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 pb-16">
      <PageHero
        title="About KanpurDrivers"
        subtitle="Kanpur's Most Trusted Network of Verified Chauffeurs & Riders Since 2018"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent-600 font-bold uppercase tracking-wider text-xs">
                Our Mission & Vision
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-1 mb-4">
                Redefining Personal Travel in Kanpur
              </h2>
              <div className="prose text-slate-600 max-w-none space-y-4 text-xs sm:text-sm leading-relaxed">
                <p>
                  Founded in 2018, KanpurDrivers was created to solve a universal problem faced by car owners in Kanpur: navigating increasingly congested city traffic, fighting for parking spots, and suffering exhaustion during long highway journeys.
                </p>
                <p>
                  We recognized that most families and professionals already own dependable cars and two-wheelers. What they need is not an overpriced rental vehicle, but a trustworthy, background-verified professional driver who treats their personal vehicle with utmost care.
                </p>
                <p>
                  Today, KanpurDrivers connects over 8,500 police-verified chauffeurs and riders with thousands of vehicle owners across Kanpur. From 4-hour local city errands and emergency late-night safe drops to multi-day highway pilgrimage tours and dedicated monthly chauffeurs, we deliver punctuality, safety, and peace of mind.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-slate-50 p-6 rounded-2xl text-center border border-slate-200"
                >
                  <div className="text-3xl font-extrabold text-primary-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Safety & Quality Pillars"
            subtitle="The core values that guide our driver vetting and client service"
            className="mb-12"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200"
              >
                <div className="w-12 h-12 bg-primary-100 text-primary-900 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-primary-950 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">
            Ready to Experience Stress-Free Driving?
          </h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Hire a verified driver for your car or two-wheeler. Doorstep arrival in 45-60 minutes across Kanpur.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center px-8 py-3.5 text-xs font-bold text-white bg-accent-500 hover:bg-accent-600 rounded-xl transition-colors shadow-md"
            >
              Hire Driver Online
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center px-8 py-3.5 text-xs font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-colors"
            >
              View Tariff Chart
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
