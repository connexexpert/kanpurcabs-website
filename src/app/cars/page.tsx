"use client";

import { useState } from "react";
import PageHero from "@/components/ui/PageHero";
import { Users, Droplets, MapPin, Settings2 } from "lucide-react";
import Link from "next/link";

const CARS = [
  {
    id: 1,
    name: "Maruti Suzuki Swift",
    slug: "maruti-swift",
    category: "Hatchback",
    price: 10,
    seats: 4,
    fuel: "Petrol/CNG",
    ac: true,
    transmission: "Manual",
    image: "bg-gradient-to-br from-blue-100 to-slate-100",
  },
  {
    id: 2,
    name: "Hyundai i20",
    slug: "hyundai-i20",
    category: "Hatchback",
    price: 11,
    seats: 4,
    fuel: "Petrol",
    ac: true,
    transmission: "Manual",
    image: "bg-gradient-to-br from-blue-100 to-slate-100",
  },
  {
    id: 3,
    name: "Maruti Suzuki Dzire",
    slug: "maruti-dzire",
    category: "Sedan",
    price: 12,
    seats: 4,
    fuel: "Petrol/CNG",
    ac: true,
    transmission: "Manual",
    image: "bg-gradient-to-br from-blue-100 to-slate-100",
  },
  {
    id: 4,
    name: "Honda City",
    slug: "honda-city",
    category: "Sedan",
    price: 15,
    seats: 4,
    fuel: "Petrol",
    ac: true,
    transmission: "Automatic",
    image: "bg-gradient-to-br from-blue-100 to-slate-100",
  },
  {
    id: 5,
    name: "Toyota Innova Crysta",
    slug: "toyota-innova-crysta",
    category: "SUV",
    price: 18,
    seats: 7,
    fuel: "Diesel",
    ac: true,
    transmission: "Manual",
    image: "bg-gradient-to-br from-blue-100 to-slate-100",
  },
  {
    id: 6,
    name: "Mahindra Scorpio",
    slug: "mahindra-scorpio",
    category: "SUV",
    price: 16,
    seats: 7,
    fuel: "Diesel",
    ac: true,
    transmission: "Manual",
    image: "bg-gradient-to-br from-blue-100 to-slate-100",
  },
  {
    id: 7,
    name: "Mercedes-Benz E-Class",
    slug: "mercedes-e-class",
    category: "Luxury",
    price: 40,
    seats: 4,
    fuel: "Petrol",
    ac: true,
    transmission: "Automatic",
    image: "bg-gradient-to-br from-blue-100 to-slate-100",
  },
  {
    id: 8,
    name: "Force Traveller",
    slug: "force-traveller",
    category: "Tempo Traveller",
    price: 22,
    seats: 12,
    fuel: "Diesel",
    ac: true,
    transmission: "Manual",
    image: "bg-gradient-to-br from-blue-100 to-slate-100",
  },
];

const CATEGORIES = [
  "All",
  "Hatchback",
  "Sedan",
  "SUV",
  "Luxury",
  "Tempo Traveller",
];
const SORTS = ["Most Popular", "Price Low-High", "Price High-Low"];

export default function FleetPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeSort, setActiveSort] = useState("Most Popular");

  const filteredCars = CARS.filter(
    (car) => activeCategory === "All" || car.category === activeCategory,
  ).sort((a, b) => {
    if (activeSort === "Price Low-High") return a.price - b.price;
    if (activeSort === "Price High-Low") return b.price - a.price;
    return 0; // Most Popular - keeping default order
  });

  return (
    <div className="min-h-screen bg-slate-50 pb-16">
      <PageHero
        title="Our Fleet"
        subtitle="Choose from our wide range of well-maintained vehicles"
        breadcrumbs={[{ label: "Our Fleet" }]}
      />

      <div className="container mx-auto px-4 mt-8">
        {/* Filters */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-8 gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-blue-800 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-slate-600">Sort by:</span>
            <select
              value={activeSort}
              onChange={(e) => setActiveSort(e.target.value)}
              className="bg-slate-100 border-none rounded-lg px-4 py-2 text-sm font-medium text-slate-700 focus:ring-2 focus:ring-blue-800 outline-none"
            >
              {SORTS.map((sort) => (
                <option key={sort} value={sort}>
                  {sort}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div
                className={`h-48 ${car.image} flex items-center justify-center`}
              >
                <span className="text-slate-400 font-medium">
                  [Image Placeholder]
                </span>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-slate-900">
                    {car.name}
                  </h3>
                  <span className="bg-blue-50 text-blue-800 text-xs font-bold px-2 py-1 rounded-md">
                    {car.category}
                  </span>
                </div>

                <div className="flex items-end mb-6">
                  <span className="text-2xl font-bold text-orange-500">
                    ₹{car.price}
                  </span>
                  <span className="text-slate-500 text-sm ml-1 mb-1">/ km</span>
                </div>

                <div className="grid grid-cols-2 gap-y-3 gap-x-2 mb-6">
                  <div className="flex items-center text-sm text-slate-600">
                    <Users className="w-4 h-4 mr-2 text-slate-400" />
                    {car.seats} Seats
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Settings2 className="w-4 h-4 mr-2 text-slate-400" />
                    {car.transmission}
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Droplets className="w-4 h-4 mr-2 text-slate-400" />
                    {car.fuel}
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <MapPin className="w-4 h-4 mr-2 text-slate-400" />
                    AC
                  </div>
                </div>

                <div className="flex gap-3">
                  <Link
                    href={`/cars/${car.slug}`}
                    className="flex-1 text-center py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl transition-colors text-sm"
                  >
                    View Details
                  </Link>
                  <Link
                    href={`/contact?car=${car.slug}`}
                    className="flex-1 text-center py-2.5 bg-blue-800 hover:bg-blue-900 text-white font-semibold rounded-xl transition-colors text-sm"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCars.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-bold text-slate-700 mb-2">
              No cars found
            </h3>
            <p className="text-slate-500">Try adjusting your filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}
