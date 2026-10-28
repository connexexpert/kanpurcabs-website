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
    image: "bg-gradient-to-br from-blue-100 to-slate-100",
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
    image: "bg-gradient-to-br from-indigo-100 to-slate-100",
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
    image: "bg-gradient-to-br from-amber-100 to-slate-100",
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
    image: "bg-gradient-to-br from-emerald-100 to-slate-100",
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
    image: "bg-gradient-to-br from-red-100 to-slate-100",
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
    image: "bg-gradient-to-br from-rose-100 to-slate-100",
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
    image: "bg-gradient-to-br from-yellow-100 to-slate-100",
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
    image: "bg-gradient-to-br from-cyan-100 to-slate-100",
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
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Bike Rentals", href: "/bikes" },
        ]}
      />

      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Category Pill Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full font-medium text-sm transition-all ${
                selectedCategory === cat
                  ? "bg-primary-900 text-white shadow-md"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Bike Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredBikes.map((bike) => (
            <div
              key={bike.id}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div
                className={`h-44 ${bike.image} p-4 flex flex-col justify-between relative`}
              >
                <div className="flex justify-between items-start">
                  <span className="bg-white/90 backdrop-blur-sm text-slate-800 text-xs font-bold px-2.5 py-1 rounded-md shadow-sm">
                    {bike.category}
                  </span>
                  <span className="bg-primary-900 text-white text-[11px] font-semibold px-2 py-0.5 rounded-full">
                    {bike.badge}
                  </span>
                </div>
                <div className="text-center py-2">
                  <Bike className="w-16 h-16 mx-auto text-primary-800/80 mb-1" />
                  <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                    {bike.name}
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg text-slate-900">{bike.name}</h3>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs text-slate-600 bg-slate-50 p-3 rounded-lg mb-4">
                  <div>
                    <span className="text-slate-400 block">Daily:</span>
                    <strong className="text-slate-900 text-sm">₹{bike.priceDaily}/day</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Hourly:</span>
                    <strong className="text-slate-900 text-sm">₹{bike.priceHourly}/hr</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Mileage:</span>
                    <strong className="text-slate-900">{bike.mileage}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Transmission:</span>
                    <strong className="text-slate-900">{bike.transmission}</strong>
                  </div>
                </div>

                <div className="space-y-1.5 text-xs text-slate-600 mb-6 flex-1">
                  <div className="flex items-center gap-1.5 text-emerald-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>Free ISI Sanitized Helmet</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-600">
                    <Shield className="w-3.5 h-3.5 text-primary-600 flex-shrink-0" />
                    <span>Comprehensive Insurance</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-600">
                    <Zap className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                    <span>24/7 Roadside Assistance in Kanpur</span>
                  </div>
                </div>

                <div className="mt-auto space-y-2">
                  <Link
                    href={`/booking?service=bike_rental&vehicle=${encodeURIComponent(bike.name)}`}
                    className="block w-full text-center bg-accent-500 hover:bg-accent-600 text-white font-bold py-2.5 rounded-lg transition-colors text-sm shadow-sm"
                  >
                    Rent Now
                  </Link>
                  <a
                    href={getWhatsAppLink(
                      SITE_CONFIG.whatsapp,
                      `Hi, I want to rent ${bike.name} in Kanpur.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold py-2 rounded-lg transition-colors text-xs"
                  >
                    WhatsApp Enquiry
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Inclusions Banner */}
        <div className="mt-16 bg-gradient-to-r from-primary-900 to-primary-950 text-white rounded-2xl p-8 sm:p-10 shadow-xl">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <div className="text-accent-400 font-bold text-sm uppercase tracking-wider mb-1">
                Zero Hidden Charges
              </div>
              <h3 className="text-2xl font-bold mb-2">Transparent Kanpur Rates</h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                Clear hourly and 24-hour packages. Pay only for what you ride, with instant deposit refund upon return.
              </p>
            </div>
            <div>
              <div className="text-accent-400 font-bold text-sm uppercase tracking-wider mb-1">
                Doorstep or Hub Pickup
              </div>
              <h3 className="text-2xl font-bold mb-2">Key Kanpur Locations</h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                Pick up near Civil Lines, Swaroop Nagar, Kakadeo, or Kalyanpur (IIT Kanpur). Home delivery available on request.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center md:items-end">
              <a
                href={getPhoneLink(SITE_CONFIG.phone)}
                className="bg-accent-500 hover:bg-accent-600 text-white font-bold px-6 py-3 rounded-lg shadow-md transition-colors text-sm inline-flex items-center gap-2 mb-2"
              >
                <PhoneCall className="w-4 h-4" /> Call {SITE_CONFIG.phone}
              </a>
              <span className="text-xs text-slate-400">Available 24 hours / 7 days</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
