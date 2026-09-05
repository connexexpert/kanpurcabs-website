"use client";

import { useState } from "react";
import PageHero from "@/components/ui/PageHero";
import { Search, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const FAQS = [
  {
    category: "Booking",
    q: "How can I book a cab?",
    a: "You can book a cab through our website by filling out the contact form, by calling us directly on our helpline numbers, or via WhatsApp. We recommend booking in advance to ensure availability.",
  },
  {
    category: "Booking",
    q: "Is advance payment required?",
    a: "Yes, we require a nominal advance payment (usually 20%) to confirm your booking. The remaining amount can be paid directly to the driver at the end of your trip.",
  },
  {
    category: "Booking",
    q: "Can I modify my booking later?",
    a: "Yes, you can modify your booking details up to 12 hours before the scheduled pickup time, subject to vehicle availability.",
  },
  {
    category: "Pricing",
    q: "Are there any hidden charges?",
    a: "No, we believe in complete transparency. Our pricing includes base fare and driver allowance (unless specified otherwise). Tolls, parking, and state taxes are charged extra on actuals.",
  },
  {
    category: "Pricing",
    q: "How is the per km charge calculated?",
    a: "The per km charge is calculated from our garage to garage. A minimum of 250 km per day is billed for outstation trips.",
  },
  {
    category: "Pricing",
    q: "What payment methods do you accept?",
    a: "We accept Cash, UPI (Google Pay, PhonePe, Paytm), Bank Transfers, and all major Credit/Debit Cards.",
  },
  {
    category: "Outstation",
    q: "Do you provide outstation car rentals?",
    a: "Yes, we provide outstation car rentals across Uttar Pradesh and neighboring states. We offer both round-trip and one-way drop services.",
  },
  {
    category: "Outstation",
    q: "What is the minimum km per day for outstation?",
    a: "For outstation trips, a minimum billing of 250 kms per day is applicable, irrespective of the actual distance traveled.",
  },
  {
    category: "Outstation",
    q: "Are driver night halt charges extra?",
    a: "Yes, a night halt charge (typically ₹250-₹500 depending on the vehicle) is applicable if the driver is kept engaged between 10 PM and 6 AM.",
  },
  {
    category: "Local",
    q: "Do you offer local sightseeing packages?",
    a: "Yes, we offer 8 hours/80 km and 12 hours/120 km packages for local sightseeing and city usage in Kanpur.",
  },
  {
    category: "Airport",
    q: "Do you provide airport transfer services?",
    a: "Yes, we provide pickup and drop services to Kanpur Airport, Lucknow Airport (CCSIA), and other nearby airports.",
  },
  {
    category: "Airport",
    q: "Will the driver wait if my flight is delayed?",
    a: "Yes, our drivers track flight statuses and will wait for you. We provide complimentary waiting time up to 1 hour for airport pickups.",
  },
  {
    category: "Safety",
    q: "Are your vehicles sanitized?",
    a: "Absolutely. All our vehicles undergo thorough cleaning and sanitization before and after every trip.",
  },
  {
    category: "Safety",
    q: "Are your drivers verified?",
    a: "Yes, all our drivers are professionally trained, hold valid commercial licenses, and undergo strict background checks before hiring.",
  },
  {
    category: "Safety",
    q: "What happens in case of a breakdown?",
    a: "We maintain our fleet in top condition to minimize such incidents. However, in the rare event of a breakdown, we will provide a replacement vehicle as quickly as possible.",
  },
];

const CATEGORIES = [
  "All",
  "Booking",
  "Pricing",
  "Safety",
  "Outstation",
  "Local",
  "Airport",
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
        subtitle="Find answers to common questions about our services, bookings, and policies."
        breadcrumbs={[{ label: "FAQ" }]}
      />

      <div className="container mx-auto px-4 mt-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Search and Filter */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 space-y-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-800 bg-slate-50"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setOpenIndex(null);
                  }}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                    activeCategory === cat
                      ? "bg-blue-800 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200",
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden"
                >
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                  >
                    <span className="font-bold text-slate-900 pr-8">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={cn(
                        "w-5 h-5 text-slate-400 transition-transform duration-200 flex-shrink-0",
                        openIndex === index ? "rotate-180" : "",
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      "px-6 overflow-hidden transition-all duration-200 ease-in-out",
                      openIndex === index
                        ? "max-h-96 pb-4 opacity-100"
                        : "max-h-0 opacity-0",
                    )}
                  >
                    <p className="text-slate-600">{faq.a}</p>
                    {activeCategory === "All" && (
                      <span className="inline-block mt-3 px-2 py-1 bg-slate-100 text-slate-500 text-xs rounded-md">
                        {faq.category}
                      </span>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12 bg-white rounded-2xl border border-slate-100">
                <p className="text-slate-500">
                  No questions found matching your criteria.
                </p>
              </div>
            )}
          </div>

          {/* CTA */}
          <div className="bg-blue-900 rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Still have questions?</h3>
            <p className="text-blue-200 mb-6">
              Can't find the answer you're looking for? Please chat to our
              friendly team.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-white text-blue-900 font-bold rounded-xl hover:bg-slate-50 transition-colors"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
