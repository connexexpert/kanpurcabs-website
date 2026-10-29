"use client";

import { useState } from "react";
import PageHero from "@/components/ui/PageHero";
import { Bike, ShieldCheck, Zap, CheckCircle2, PhoneCall, Sparkles, ArrowRight, Clock } from "lucide-react";
import Link from "next/link";
import { SITE_CONFIG, getPhoneLink, getWhatsAppLink } from "@/lib/utils";

const BIKES = [
  {
    id: 1,
    name: "Scooter & Moped Pilots (Activa 6G, Access)",
    category: "Scooter",
    duty2h: "₹199 (2h)",
    duty4h: "₹349 (4h)",
    duty8h: "₹599 (8h)",
    tariffDisplay: "From ₹199 (2 Hours)",
    transmission: "Automatic Gearless",
    specialty: "Market shopping in Naveen Market / Gumti No. 5, medicine pickups, banking tasks.",
    badge: "Quick City Pilot",
    imageUrl: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Comfort Scooter Pilots (TVS Jupiter, Ntorq)",
    category: "Scooter",
    duty2h: "₹199 (2h)",
    duty4h: "₹349 (4h)",
    duty8h: "₹599 (8h)",
    tariffDisplay: "From ₹199 (2 Hours)",
    transmission: "Automatic Gearless",
    specialty: "Comfortable family errand rides, school pickups, patient assistance on pillion.",
    badge: "High Comfort",
    imageUrl: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Commuter Motorcycle Riders (Splendor Plus, Platina)",
    category: "Commuter",
    duty2h: "₹199 (2h)",
    duty4h: "₹349 (4h)",
    duty8h: "₹599 (8h)",
    tariffDisplay: "From ₹199 (2 Hours)",
    transmission: "4-Speed Manual",
    specialty: "High mileage city running, office document drops, daily field transit.",
    badge: "Reliable Commuter",
    imageUrl: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "City Motorcycle Pilots (Honda Shine, Passion)",
    category: "Commuter",
    duty2h: "₹199 (2h)",
    duty4h: "₹349 (4h)",
    duty8h: "₹599 (8h)",
    tariffDisplay: "From ₹199 (2 Hours)",
    transmission: "5-Speed Manual",
    specialty: "Smooth clutch handling, punctual transit across town, client sample delivery.",
    badge: "Smooth Transit",
    imageUrl: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Sports & Urgent Courier Pilots (Pulsar, Apache)",
    category: "Sports",
    duty2h: "₹199 (2h)",
    duty4h: "₹349 (4h)",
    duty8h: "₹599 (8h)",
    tariffDisplay: "From ₹199 (2 Hours)",
    transmission: "Manual 5/6-Speed",
    specialty: "Time-critical delivery, urgent legal document pilot, safe night recovery rider.",
    badge: "Fast & Safe Pilot",
    imageUrl: "https://images.unsplash.com/photo-1558980664-769d59546b3d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "Cruiser Motorcycle Pilots (Royal Enfield Classic 350)",
    category: "Cruiser",
    duty2h: "₹199 (2h)",
    duty4h: "₹349 (4h)",
    duty8h: "₹599 (8h)",
    tariffDisplay: "From ₹199 (2 Hours)",
    transmission: "Heavy Thumper Manual",
    specialty: "Experienced handling of heavy cruisers, highway escort, safe rider for long tours.",
    badge: "Cruiser Specialist",
    imageUrl: "https://images.unsplash.com/photo-1558981420-87aa9dad1c89?auto=format&fit=crop&w=800&q=80",
  },
];

const CATEGORIES = ["All", "Scooter", "Commuter", "Sports", "Cruiser"];

export default function BikesPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredBikes = BIKES.filter((bike) => {
    if (activeCategory === "All") return true;
    return bike.category === activeCategory;
  });

  return (
    <div className="min-h-screen bg-slate-50 pb-16">
      <PageHero
        title="Hire On-Demand Two-Wheeler Riders"
        subtitle="Professional, background-verified riders for your personal scooter or motorcycle across Kanpur — Doorstep arrival in 30-45 minutes"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Bike Riders", href: "/bikes" },
        ]}
      />

      <div className="container mx-auto px-4 mt-12">
        {/* Category Filter Pills */}
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeCategory === cat
                    ? "bg-accent-500 text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat} Riders
              </button>
            ))}
          </div>
          <span className="text-xs text-slate-500 font-medium">
            Showing {filteredBikes.length} rider categories
          </span>
        </div>

        {/* Riders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBikes.map((bike) => (
            <div
              key={bike.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="relative h-48 bg-slate-100 overflow-hidden group">
                <img
                  src={bike.imageUrl}
                  alt={bike.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-accent-600 text-white text-xs px-2.5 py-1 rounded-md font-semibold">
                  {bike.badge}
                </div>
                <div className="absolute top-3 right-3 bg-emerald-600 text-white text-xs px-2 py-0.5 rounded-md font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> 100% DL Verified
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-bold text-slate-900 text-base mb-2">{bike.name}</h3>

                <p className="text-xs text-slate-600 mb-4 leading-relaxed flex-grow">
                  {bike.specialty}
                </p>

                <div className="text-xs text-slate-600 bg-slate-50 p-3 rounded-xl mb-5 border border-slate-100 flex justify-between">
                  <div>
                    <span className="text-slate-400 block text-[10px]">Transmission</span>
                    <strong className="text-slate-800 text-[11px]">{bike.transmission}</strong>
                  </div>
                  <div className="text-right">
                    <span className="text-slate-400 block text-[10px]">Overtime Rate</span>
                    <strong className="text-slate-800 text-[11px]">₹50 / hr</strong>
                  </div>
                </div>

                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-slate-400 text-[10px] block">Rider Duty Tariff</span>
                    <strong className="text-accent-600 font-extrabold text-sm">{bike.tariffDisplay}</strong>
                  </div>
                  <Link
                    href={`/booking?serviceType=Two-Wheeler+%26+Bike+Rider&vehicle=${encodeURIComponent(bike.name)}`}
                    className="px-4 py-2 bg-accent-500 hover:bg-accent-600 text-white text-xs font-bold rounded-xl transition-colors flex items-center gap-1.5 shadow"
                  >
                    Hire Rider <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Customer Two-Wheeler Policy */}
        <div className="mt-12 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            <span>
              <strong>Customer Two-Wheeler Policy:</strong> Rider services are performed on the two-wheeler provided by the customer. All riders strictly adhere to helmet and traffic rules.
            </span>
          </div>
          <Link href="/pricing" className="text-accent-600 font-bold hover:underline whitespace-nowrap">
            View Complete Rate Chart &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
