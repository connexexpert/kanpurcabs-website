"use client";

import { useState } from "react";
import PageHero from "@/components/ui/PageHero";
import { Bike, Shield, Zap, CheckCircle2, PhoneCall, Sparkles } from "lucide-react";
import Link from "next/link";
import { SITE_CONFIG, getPhoneLink, getWhatsAppLink } from "@/lib/utils";

const BIKES = [
  {
    id: 1,
    name: "Honda Activa 6G",
    category: "Scooter",
    priceHourly: 50,
    priceDaily: 400,
    mileage: "45-50 km/l",
    engine: "109.5 cc",
    fuel: "Petrol",
    transmission: "Automatic",
    deposit: 1000,
    badge: "Most Rented in Kanpur",
    imageUrl: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "TVS Jupiter 125",
    category: "Scooter",
    priceHourly: 55,
    priceDaily: 450,
    mileage: "48-52 km/l",
    engine: "124.8 cc",
    fuel: "Petrol",
    transmission: "Automatic",
    deposit: 1000,
    badge: "Comfort Ride",
    imageUrl: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Hero Splendor Plus",
    category: "Commuter",
    priceHourly: 50,
    priceDaily: 400,
    mileage: "65-70 km/l",
    engine: "97.2 cc",
    fuel: "Petrol",
    transmission: "4-Speed Manual",
    deposit: 1000,
    badge: "Best Fuel Economy",
    imageUrl: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Honda Shine 125",
    category: "Commuter",
    priceHourly: 60,
    priceDaily: 500,
    mileage: "55-60 km/l",
    engine: "123.9 cc",
    fuel: "Petrol",
    transmission: "5-Speed Manual",
    deposit: 1000,
    badge: "Smooth Highway Commute",
    imageUrl: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Bajaj Pulsar 150",
    category: "Sports",
    priceHourly: 80,
    priceDaily: 650,
    mileage: "42-45 km/l",
    engine: "149.5 cc",
    fuel: "Petrol",
    transmission: "5-Speed Manual",
    deposit: 1500,
    badge: "Youth & College Favorite",
    imageUrl: "https://images.unsplash.com/photo-1558980664-769d59546b3d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "TVS Apache RTR 160",
    category: "Sports",
    priceHourly: 85,
    priceDaily: 700,
    mileage: "40-45 km/l",
    engine: "159.7 cc",
    fuel: "Petrol",
    transmission: "5-Speed Manual",
    deposit: 1500,
    badge: "High Performance",
    imageUrl: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    name: "Royal Enfield Classic 350",
    category: "Cruiser",
    priceHourly: 140,
    priceDaily: 1100,
    mileage: "32-35 km/l",
    engine: "349 cc",
    fuel: "Petrol",
    transmission: "5-Speed Manual",
    deposit: 2500,
    badge: "Iconic Bullet Sound",
    imageUrl: "https://images.unsplash.com/photo-1558981420-87aa9dad1c89?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    name: "Royal Enfield Hunter 350",
    category: "Cruiser",
    priceHourly: 130,
    priceDaily: 1050,
    mileage: "35-37 km/l",
    engine: "349 cc",
    fuel: "Petrol",
    transmission: "5-Speed Manual",
    deposit: 2500,
    badge: "Modern Urban Cruiser",
    imageUrl: "https://images.unsplash.com/photo-1558981359-219d6364c9c8?auto=format&fit=crop&w=800&q=80",
  },
];

const CATEGORIES = ["All", "Scooter", "Commuter", "Sports", "Cruiser"];

export default function BikesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredBikes =
    selectedCategory === "All"
      ? BIKES
      : BIKES.filter((b) => b.category === selectedCategory);

  return (
    <main>
      <PageHero
        title="Bike & Scooter Rental in Kanpur"
        subtitle="Explore our certified two-wheelers for easy, traffic-free travel across Kanpur"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Bike Rentals" }]}
      />

      <section className="py-12 md:py-16 container mx-auto px-4">
        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full font-bold text-sm transition-all border ${
                selectedCategory === cat
                  ? "bg-accent-500 text-white border-accent-500 shadow-md"
                  : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
              }`}
            >
              {cat} {cat === "All" ? `(${BIKES.length})` : ""}
            </button>
          ))}
        </div>

        {/* Bike Grid with Real Photography */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredBikes.map((bike) => (
            <div
              key={bike.id}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="h-52 relative overflow-hidden bg-slate-100">
                <img
                  src={bike.imageUrl}
                  alt={bike.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
                <div className="absolute top-3 left-3">
                  <span className="bg-white/95 backdrop-blur-sm text-slate-800 text-xs font-bold px-2.5 py-1 rounded-md shadow-sm">
                    {bike.category}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="bg-primary-900/90 text-white text-[11px] font-semibold px-2 py-0.5 rounded-full shadow-sm">
                    {bike.badge}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 text-white">
                  <span className="text-xs font-bold uppercase tracking-wider block drop-shadow-md">
                    Self Drive • Helmet Included
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-slate-900">{bike.name}</h3>
                </div>

                <div className="grid grid-cols-2 gap-2 my-3 py-2.5 bg-slate-50 rounded-xl px-3 border border-slate-100 text-xs text-slate-600">
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-semibold">Daily Rate</span>
                    <strong className="text-base text-accent-600 font-extrabold">₹{bike.priceDaily}</strong>
                    <span className="text-[10px] text-slate-500">/day</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-semibold">Hourly Rate</span>
                    <strong className="text-base text-primary-900 font-extrabold">₹{bike.priceHourly}</strong>
                    <span className="text-[10px] text-slate-500">/hr</span>
                  </div>
                </div>

                <div className="space-y-1.5 text-xs text-slate-600 mb-5">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Mileage:</span>
                    <span className="font-semibold">{bike.mileage}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Engine:</span>
                    <span className="font-semibold">{bike.engine}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Transmission:</span>
                    <span className="font-semibold">{bike.transmission}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Refundable Deposit:</span>
                    <span className="font-semibold text-emerald-600">₹{bike.deposit}</span>
                  </div>
                </div>

                <div className="mt-auto pt-3 border-t border-slate-100 flex gap-2">
                  <Link
                    href={`/booking?serviceType=Bike+Rental&vehicle=${encodeURIComponent(bike.name)}`}
                    className="flex-1 text-center bg-accent-500 hover:bg-accent-600 text-white font-bold py-2.5 rounded-xl text-xs transition-colors shadow-sm"
                  >
                    Book Now
                  </Link>
                  <a
                    href={getWhatsAppLink(`Hi KanpurCabs, I want to rent ${bike.name} on self-drive basis in Kanpur.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 border border-slate-200 hover:border-emerald-500 text-emerald-600 rounded-xl transition-colors flex items-center justify-center"
                    title="WhatsApp Enquiry"
                  >
                    <PhoneCall className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits banner */}
        <div className="mt-16 bg-gradient-to-r from-primary-900 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent-500/20 text-accent-400 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Free Sanitized ISI Helmet</h4>
                <p className="text-slate-300 text-xs sm:text-sm">Complimentary helmet provided with every scooter & motorcycle rental.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent-500/20 text-accent-400 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Instant Paperless Verification</h4>
                <p className="text-slate-300 text-xs sm:text-sm">Just show your original Driving License & Aadhaar card. Collect your bike in 5 minutes.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent-500/20 text-accent-400 rounded-2xl flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Multiple Kanpur Hubs</h4>
                <p className="text-slate-300 text-xs sm:text-sm">Pickup and drop points at Civil Lines, Kakadeo (Coaching Nagar), Swaroop Nagar, and IIT Kanpur.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
