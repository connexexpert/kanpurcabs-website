"use client";

import { useState } from "react";
import PageHero from "@/components/ui/PageHero";
import { ShieldCheck, CheckCircle2, MapPin, Settings2, ArrowRight, Car, Clock } from "lucide-react";
import Link from "next/link";

const CAR_DRIVER_SPECIALISTS = [
  {
    id: 1,
    name: "Hatchback & Compact Car Drivers",
    carModels: "Maruti Swift, WagonR, Hyundai i10, i20, Tata Tiago",
    category: "Hatchback",
    tariff: 400,
    hourlyDisplay: "₹400 (4h) / ₹700 (8h)",
    transmission: "Manual & AMT Automatic",
    experience: "5+ Years Exp",
    specialty: "Expert navigation through tight Kanpur lanes, market parking, and daily errands.",
    badge: "City Specialist",
    imageUrl: "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=800&q=80",
    slug: "maruti-swift",
  },
  {
    id: 2,
    name: "Executive Sedan Chauffeurs",
    carModels: "Maruti Dzire, Honda City, Hyundai Verna, Ciaz, Aura",
    category: "Sedan",
    tariff: 400,
    hourlyDisplay: "₹400 (4h) / ₹700 (8h)",
    transmission: "Manual, CVT & Torque Converter",
    experience: "6+ Years Exp",
    specialty: "Smooth executive gear shifting, VIP etiquette, family airport drops & corporate transit.",
    badge: "Executive Chauffeur",
    imageUrl: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80",
    slug: "maruti-dzire",
  },
  {
    id: 3,
    name: "7-Seater MPV & Family Chauffeurs",
    carModels: "Toyota Innova Crysta, Maruti Ertiga, Kia Carens",
    category: "SUV",
    tariff: 450,
    hourlyDisplay: "₹450 (4h) / ₹800 (8h)",
    transmission: "Manual & Automatic",
    experience: "8+ Years Exp",
    specialty: "Highway family safety, long-distance stamina, smooth cornering with elderly passengers.",
    badge: "Family & Highway",
    imageUrl: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=800&q=80",
    slug: "innova-crysta",
  },
  {
    id: 4,
    name: "Tough SUV & 4x4 Highway Drivers",
    carModels: "Mahindra Scorpio-N, Thar, XUV700, Tata Safari, Fortuner",
    category: "SUV",
    tariff: 450,
    hourlyDisplay: "₹450 (4h) / ₹800 (8h)",
    transmission: "Manual & Automatic AT",
    experience: "8+ Years Exp",
    specialty: "Tough terrain confidence, expressway cruising, night highway visibility and stability.",
    badge: "Highway Certified",
    imageUrl: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80",
    slug: "mahindra-scorpio",
  },
  {
    id: 5,
    name: "Premium Luxury Car Chauffeurs",
    carModels: "BMW 3/5 Series, Audi A4/A6, Mercedes C/E Class, Fortuner Legender",
    category: "Luxury",
    tariff: 600,
    hourlyDisplay: "₹600 (4h) / ₹1,100 (8h)",
    transmission: "Dual-Clutch (DCT/DSG) & Steptronic",
    experience: "10+ Years Exp",
    specialty: "Suit & tie attire, elite driving etiquette, gentle braking, and advanced electronics handling.",
    badge: "Elite Luxury Specialist",
    imageUrl: "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=800&q=80",
    slug: "hyundai-aura",
  },
  {
    id: 6,
    name: "Commercial & Passenger Tempo Drivers",
    carModels: "Force Tempo Traveller (12/17/26 Seater), Tata Winger",
    category: "Commercial",
    tariff: 700,
    hourlyDisplay: "₹700 (4h) / ₹1,200 (8h)",
    transmission: "Manual Heavy Vehicle",
    experience: "10+ Years Commercial",
    specialty: "Commercial transport badge holders, pilgrimage group tours to Ayodhya/Varanasi, passenger safety.",
    badge: "Commercial Badge",
    imageUrl: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=80",
    slug: "tempo-traveller-12",
  },
];

const CATEGORIES = ["All", "Hatchback", "Sedan", "SUV", "Luxury", "Commercial"];

export default function FleetPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCars = CAR_DRIVER_SPECIALISTS.filter((item) => {
    if (activeCategory === "All") return true;
    return item.category === activeCategory;
  });

  return (
    <div className="min-h-screen bg-slate-50 pb-16">
      <PageHero
        title="Verified Drivers for Every Car Type"
        subtitle="Hire police-verified, experienced chauffeurs for your personal Hatchback, Sedan, SUV, or Luxury Car in Kanpur"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Car Drivers", href: "/cars" },
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
                    ? "bg-primary-900 text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <span className="text-xs text-slate-500 font-medium">
            Showing {filteredCars.length} driver categories
          </span>
        </div>

        {/* Driver Specialization Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="relative h-48 bg-slate-100 overflow-hidden group">
                <img
                  src={car.imageUrl}
                  alt={car.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-primary-900/90 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-md font-semibold">
                  {car.badge}
                </div>
                <div className="absolute top-3 right-3 bg-emerald-600 text-white text-xs px-2 py-0.5 rounded-md font-bold flex items-center gap-1 shadow">
                  <ShieldCheck className="w-3.5 h-3.5" /> 100% Police Verified
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-bold text-slate-900 text-lg mb-1">{car.name}</h3>
                <span className="text-xs font-medium text-primary-800 mb-3 block">
                  Fits: {car.carModels}
                </span>

                <p className="text-xs text-slate-600 mb-4 leading-relaxed flex-grow">
                  {car.specialty}
                </p>

                <div className="grid grid-cols-2 gap-2 text-xs text-slate-600 bg-slate-50 p-3 rounded-xl mb-5 border border-slate-100">
                  <div>
                    <span className="text-slate-400 block text-[10px]">Transmission</span>
                    <strong className="text-slate-800 text-[11px]">{car.transmission}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">Experience</span>
                    <strong className="text-slate-800 text-[11px]">{car.experience}</strong>
                  </div>
                </div>

                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-slate-400 text-[10px] block">Driver Tariff</span>
                    <strong className="text-primary-900 font-extrabold text-sm">{car.hourlyDisplay}</strong>
                  </div>
                  <Link
                    href={`/booking?serviceType=Local+Hourly+Car+Driver&vehicle=${encodeURIComponent(car.name)}`}
                    className="px-4 py-2 bg-primary-900 hover:bg-primary-950 text-white text-xs font-bold rounded-xl transition-colors flex items-center gap-1.5 shadow"
                  >
                    Hire Driver <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Customer Car Policy Notice */}
        <div className="mt-12 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            <span>
              <strong>Customer Car Policy:</strong> Our chauffeurs drive your personal vehicle. Fuel, tolls, and parking receipts are settled directly by the customer.
            </span>
          </div>
          <Link href="/pricing" className="text-primary-800 font-bold hover:underline whitespace-nowrap">
            View Complete Rate Chart &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
