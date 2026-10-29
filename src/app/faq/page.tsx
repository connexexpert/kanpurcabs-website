"use client";

import { useState } from "react";
import PageHero from "@/components/ui/PageHero";
import { Search, ChevronDown, HelpCircle, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const FAQS = [
  {
    category: "Driver Hire Basics",
    q: "Who provides the vehicle and fuel?",
    a: "All driving and riding services are carried out on the vehicle provided by the customer (your personal car, SUV, or two-wheeler). The customer is responsible for vehicle fuel, insurance, and maintenance, while KanpurDrivers provides the background-verified, skilled chauffeur or rider.",
  },
  {
    category: "Driver Hire Basics",
    q: "How quickly can a driver arrive at my Kanpur address?",
    a: "Our uniformed drivers typically arrive within 45 to 60 minutes across all major Kanpur locations, including Civil Lines, Swaroop Nagar, Kakadeo, Kidwai Nagar, Kalyanpur, and Mall Road. You can also book in advance.",
  },
  {
    category: "Driver Hire Basics",
    q: "Can I book a driver for just a few hours?",
    a: "Yes! We offer a minimum 4-hour local city package (starting at ₹400 for hatchbacks/sedans), an 8-hour full-day package (₹700), and a 12-hour extended duty package (₹950). Overtime is billed at ₹80 to ₹100 per hour.",
  },
  {
    category: "Safety & Verification",
    q: "Are the drivers background-checked and police-verified?",
    a: "Yes, 100%. Every driver and rider in our network undergoes criminal record verification with local police, residential address verification via Aadhaar, and a thorough assessment of driving history and commercial licensing.",
  },
  {
    category: "Safety & Verification",
    q: "Can your chauffeurs drive automatic, AMT, and luxury cars?",
    a: "Yes. Our team includes senior chauffeurs certified in driving all modern transmission types: Manual, AMT, Torque Converter, CVT, and Dual-Clutch (DCT/DSG) systems across luxury brands like BMW, Mercedes, Audi, Fortuner, and premium sedans.",
  },
  {
    category: "Safety & Verification",
    q: "What is your driver alcohol and safety policy?",
    a: "We maintain a strict zero-tolerance policy towards alcohol and reckless driving. Every driver is screened, carries a commercial badge, and adheres to strict safety protocols.",
  },
  {
    category: "Outstation Drivers",
    q: "How does outstation driver billing work in my personal car?",
    a: "For outstation journeys, the driver daily tariff is ₹1,000/day for same-day returns (plus ₹250 food allowance) or ₹1,200/day for multi-day trips (plus ₹400 night stay & food allowance). Fuel, toll taxes, and state border permits are paid directly by the customer.",
  },
  {
    category: "Outstation Drivers",
    q: "Are drivers experienced in expressway and night highway driving?",
    a: "Yes. Our outstation drivers have a minimum of 8+ years of highway experience and are well-versed in navigating Agra-Lucknow Expressway, Yamuna Expressway, and Purvanchal Expressway safely at night.",
  },
  {
    category: "Monthly Chauffeurs",
    q: "What are the packages for monthly permanent drivers?",
    a: "We offer 26-day monthly contracts (with 4 Sundays off): 8 Hours/day (₹15,000/month), 10 Hours/day (₹18,000/month), and 12 Hours/day (₹21,000/month). You can also schedule a 1-day trial before confirming.",
  },
  {
    category: "Monthly Chauffeurs",
    q: "What if my monthly driver takes leave or falls ill?",
    a: "We provide an uninterrupted leave replacement guarantee. If your designated chauffeur is ill or takes emergency leave, our dispatch coordinator immediately deploys a qualified replacement driver at zero extra agency cost.",
  },
  {
    category: "Bike Riders",
    q: "Can I hire a rider for my scooter or motorcycle?",
    a: "Yes! We offer on-demand two-wheeler riders starting at ₹199 for 2 hours, ₹349 for 4 hours, and ₹599 for 8 hours. Perfect for urgent document delivery, city shopping errands, or a safe ride home if you are feeling unwell.",
  },
  {
    category: "Billing & Payment",
    q: "What payment methods do you accept?",
    a: "We accept UPI (Google Pay, PhonePe, Paytm), cash directly to the driver upon duty completion, and online bank transfer. For corporate clients, we provide 100% GST-compliant B2B invoices.",
  },
];

const CATEGORIES = [
  "All",
  "Driver Hire Basics",
  "Safety & Verification",
  "Outstation Drivers",
  "Monthly Chauffeurs",
  "Bike Riders",
  "Billing & Payment",
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCategory =
      activeCategory === "All" || faq.category === activeCategory;
    const matchesSearch =
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 pb-16">
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Answers to common questions about hiring verified drivers and riders in Kanpur"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "FAQs" }]}
      />

      <div className="container mx-auto px-4 mt-12 max-w-4xl">
        {/* Search Bar */}
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 mb-8 flex items-center gap-3">
          <Search className="w-5 h-5 text-slate-400 flex-shrink-0" />
          <input
            type="text"
            placeholder="Search FAQs (e.g. outstation, monthly, automatic, bike rider)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent border-none focus:outline-none text-xs sm:text-sm text-slate-800"
          />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-4 py-2 rounded-xl text-xs font-bold transition-all",
                activeCategory === cat
                  ? "bg-primary-900 text-white shadow-sm"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-4 mb-12">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl border border-slate-200">
              <p className="text-slate-500 text-sm">No matching questions found.</p>
            </div>
          ) : (
            filteredFaqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-5 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
                >
                  <span className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-primary-800 flex-shrink-0" />
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 text-slate-400 transition-transform flex-shrink-0",
                      openIndex === index ? "rotate-180 text-primary-800" : ""
                    )}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 border-t border-slate-100 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Contact Assistance Strip */}
        <div className="bg-primary-950 text-white rounded-2xl p-8 text-center border border-primary-900">
          <h3 className="text-xl font-bold mb-2">Still Have Questions?</h3>
          <p className="text-slate-300 text-xs sm:text-sm mb-6 max-w-md mx-auto">
            Our Kanpur dispatch coordinator is available 24/7 to answer your driver requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-accent-500 hover:bg-accent-600 text-white font-bold text-xs rounded-xl transition-colors shadow"
            >
              Contact Dispatch Desk
            </Link>
            <Link
              href="/booking"
              className="px-6 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs rounded-xl transition-colors"
            >
              Hire a Driver Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
