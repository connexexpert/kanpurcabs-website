"use client";

import { useState } from "react";
import PageHero from "@/components/ui/PageHero";
import { Users, Droplets, MapPin, Settings2, ArrowRight } from "lucide-react";
import Link from "next/link";

const CARS = [
  {
    id: 1,
    name: "Maruti Suzuki Swift",
    slug: "maruti-swift",
    category: "Hatchback",
    price: 10,
    hourly: "₹1,200 (4h)",
    seats: 4,
    fuel: "Petrol/CNG",
    ac: true,
    transmission: "Manual",
    imageUrl: "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Hyundai i20",
    slug: "hyundai-i20",
    category: "Hatchback",
    price: 11,
    hourly: "₹1,300 (4h)",
    seats: 4,
    fuel: "Petrol",
    ac: true,
    transmission: "Manual",
    imageUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Maruti Suzuki Dzire",
    slug: "maruti-dzire",
    category: "Sedan",
    price: 11,
    hourly: "₹1,400 (4h)",
    seats: 4,
    fuel: "Petrol/CNG",
    ac: true,
    transmission: "Manual",
    imageUrl: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Hyundai Aura",
    slug: "hyundai-aura",
    category: "Sedan",
    price: 11,
    hourly: "₹1,400 (4h)",
    seats: 4,
    fuel: "Petrol",
    ac: true,
    transmission: "Manual",
    imageUrl: "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Toyota Innova Crysta",
    slug: "toyota-innova-crysta",
    category: "SUV",
    price: 18,
    hourly: "₹2,200 (4h)",
    seats: 7,
    fuel: "Diesel",
    ac: true,
    transmission: "Manual",
    imageUrl: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "Mahindra Scorpio",
    slug: "mahindra-scorpio",
    category: "SUV",
    price: 15,
    hourly: "₹2,000 (4h)",
    seats: 7,
    fuel: "Diesel",
    ac: true,
    transmission: "Manual",
    imageUrl: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    name: "Maruti Suzuki Ertiga",
    slug: "maruti-ertiga",
    category: "SUV",
    price: 14,
    hourly: "₹1,800 (4h)",
    seats: 6,
    fuel: "Petrol/CNG",
    ac: true,
    transmission: "Manual",
    imageUrl: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    name: "Force Tempo Traveller",
    slug: "force-traveller",
    category: "Tempo Traveller",
    price: 24,
    hourly: "₹3,200 (4h)",
    seats: 12,
    fuel: "Diesel",
    ac: true,
    transmission: "Manual",
    imageUrl: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=80",
  },
];

const CATEGORIES = [
  "All",
  "Hatchback",
  "Sedan",
  "SUV",
  "Tempo Traveller",
];
const SORTS = ["Most Popular", "Price Low-High", "Price High-Low"];

export default function FleetPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeSort, setActiveSort] = useState("Most Popular");

  const filteredCars = CARS.filter((car) => {
    if (activeCategory === "All") return true;
    return car.category === activeCategory;
  }).sort((a, b) => {
    if (activeSort === "Price Low-High") return a.price - b.price;
    if (activeSort === "Price High-Low") return b.price - a.price;
    return 0; // Most popular / default
  });

  return (
    <div className="min-h-screen bg-slate-50 pb-16">
      <PageHero
        title="Our Cars Fleet in Kanpur"
        subtitle="Explore our verified, sanitized hatchbacks, sedans, SUVs, and passenger travellers"
        breadcrumbs={[{ label: "Cars" }]}
      />

      <div className="container mx-auto px-4 mt-12">
        {/* Filter and Sort Controls */}
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-colors ${
                  activeCategory === category
                    ? "bg-primary-900 text-white"
                    : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto justify-end">
            <span className="text-sm text-slate-500 font-medium">Sort By:</span>
            <select
              value={activeSort}
              onChange={(e) => setActiveSort(e.target.value)}
              className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-primary-900"
            >
              {SORTS.map((sort) => (
                <option key={sort} value={sort}>
                  {sort}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Cars Grid with Real Visuals */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="h-52 relative overflow-hidden bg-slate-100">
                <img
                  src={car.imageUrl}
                  alt={car.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />
                <span className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm text-slate-800 text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
                  {car.category}
                </span>
                <span className="absolute bottom-3 left-3 text-white text-xs font-bold tracking-wider uppercase drop-shadow-md">
                  Chauffeur Included
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary-900 transition-colors">
                    {car.name}
                  </h3>
                </div>

                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-2xl font-bold text-primary-900">
                    ₹{car.price}
                  </span>
                  <span className="text-slate-500 text-sm">/ km (Outstation)</span>
                  <span className="text-slate-400 text-xs ml-auto">Local: {car.hourly}</span>
                </div>

                <div className="grid grid-cols-2 gap-2 py-3 border-y border-slate-100 text-xs text-slate-600 mb-6 bg-slate-50 rounded-xl px-3">
                  <div className="flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-primary-800" />
                    <span>{car.seats} Seats</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Droplets className="w-4 h-4 text-primary-800" />
                    <span>{car.fuel}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Settings2 className="w-4 h-4 text-primary-800" />
                    <span>{car.transmission}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-primary-800" />
                    <span>AC Included</span>
                  </div>
                </div>

                <div className="mt-auto flex gap-3">
                  <Link
                    href={`/cars/${car.slug}`}
                    className="flex-1 text-center py-2.5 border border-slate-300 hover:border-primary-900 text-slate-700 font-bold rounded-xl text-xs transition-colors"
                  >
                    Details
                  </Link>
                  <Link
                    href={`/booking?serviceType=Local+Rental&vehicle=${encodeURIComponent(car.name)}`}
                    className="flex-1 text-center py-2.5 bg-primary-900 hover:bg-primary-950 text-white font-bold rounded-xl text-xs transition-colors shadow-sm"
                  >
                    Book Car
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
