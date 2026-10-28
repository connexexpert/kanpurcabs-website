import { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import {
  Users,
  Settings2,
  Droplets,
  MapPin,
  Briefcase,
  Check,
  Car,
  Phone,
} from "lucide-react";
import Link from "next/link";

const CARS_DATA = [
  {
    slug: "maruti-swift",
    name: "Maruti Suzuki Swift",
    category: "Hatchback",
    price: 10,
    seats: 4,
    fuel: "Petrol/CNG",
    ac: "Yes",
    transmission: "Manual",
    doors: 4,
    luggage: 2,
    year: "2022-23",
    minCharge: 2500,
    driverAllowance: 300,
    nightCharge: 250,
    imageUrl: "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    slug: "hyundai-i20",
    name: "Hyundai i20",
    category: "Hatchback",
    price: 11,
    seats: 4,
    fuel: "Petrol",
    ac: "Yes",
    transmission: "Manual",
    doors: 4,
    luggage: 2,
    year: "2023",
    minCharge: 2500,
    driverAllowance: 300,
    nightCharge: 250,
    imageUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    slug: "maruti-dzire",
    name: "Maruti Suzuki Dzire",
    category: "Sedan",
    price: 12,
    seats: 4,
    fuel: "Petrol/CNG",
    ac: "Yes",
    transmission: "Manual",
    doors: 4,
    luggage: 3,
    year: "2023",
    minCharge: 3000,
    driverAllowance: 300,
    nightCharge: 250,
    imageUrl: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    slug: "honda-city",
    name: "Honda City",
    category: "Sedan",
    price: 15,
    seats: 4,
    fuel: "Petrol",
    ac: "Yes",
    transmission: "Automatic",
    doors: 4,
    luggage: 4,
    year: "2023",
    minCharge: 3500,
    driverAllowance: 300,
    nightCharge: 250,
    imageUrl: "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    slug: "toyota-innova-crysta",
    name: "Toyota Innova Crysta",
    category: "SUV",
    price: 18,
    seats: 7,
    fuel: "Diesel",
    ac: "Yes",
    transmission: "Manual",
    doors: 5,
    luggage: 4,
    year: "2022-23",
    minCharge: 4500,
    driverAllowance: 400,
    nightCharge: 300,
    imageUrl: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    slug: "mahindra-scorpio",
    name: "Mahindra Scorpio",
    category: "SUV",
    price: 16,
    seats: 7,
    fuel: "Diesel",
    ac: "Yes",
    transmission: "Manual",
    doors: 5,
    luggage: 3,
    year: "2022",
    minCharge: 4000,
    driverAllowance: 400,
    nightCharge: 300,
    imageUrl: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    slug: "mercedes-e-class",
    name: "Mercedes-Benz E-Class",
    category: "Luxury",
    price: 40,
    seats: 4,
    fuel: "Petrol",
    ac: "Yes",
    transmission: "Automatic",
    doors: 4,
    luggage: 3,
    year: "2023",
    minCharge: 10000,
    driverAllowance: 500,
    nightCharge: 500,
    imageUrl: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    slug: "force-traveller",
    name: "Force Traveller",
    category: "Tempo Traveller",
    price: 22,
    seats: 12,
    fuel: "Diesel",
    ac: "Yes",
    transmission: "Manual",
    doors: 3,
    luggage: 8,
    year: "2022",
    minCharge: 5500,
    driverAllowance: 500,
    nightCharge: 400,
    imageUrl: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=600&q=80"
    ]
  },
];

export async function generateStaticParams() {
  return CARS_DATA.map((car) => ({
    slug: car.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const car = CARS_DATA.find((c) => c.slug === slug);
  if (!car) return { title: "Car Not Found" };

  return {
    title: `${car.name} Rental in Kanpur | KanpurCabs`,
    description: `Rent a ${car.name} in Kanpur. Perfect ${car.category} with ${car.seats} seats. Book now starting at ₹${car.price}/km.`,
  };
}

export default async function CarDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const car = CARS_DATA.find((c) => c.slug === slug);
  if (!car) notFound();

  const relatedCars = CARS_DATA.filter(
    (c) => c.category === car.category && c.slug !== car.slug,
  ).slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-50 pb-16">
      <div className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 py-4">
          <Breadcrumbs
            items={[{ label: "Cars", href: "/cars" }, { label: car.name }]}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 pt-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Car Photo Gallery */}
            <div className="space-y-4">
              <div className="relative rounded-2xl h-80 md:h-[420px] overflow-hidden border border-slate-200 bg-slate-100 shadow-sm group">
                <img
                  src={car.imageUrl}
                  alt={car.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <span className="text-white text-xs sm:text-sm font-bold bg-primary-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20">
                    Chauffeur Driven • Commercial Sanitized Fleet
                  </span>
                  <span className="text-white text-xs bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-md">
                    Kanpur & UP Routes
                  </span>
                </div>
              </div>
              
              {car.gallery && (
                <div className="grid grid-cols-3 gap-3">
                  {car.gallery.map((img, i) => (
                    <div key={i} className="h-24 sm:h-28 rounded-xl overflow-hidden border border-slate-200 bg-slate-100 shadow-sm group">
                      <img
                        src={img}
                        alt={`${car.name} detail view ${i + 1}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Header */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-blue-100 text-blue-800 text-sm font-bold px-3 py-1 rounded-full">
                  {car.category}
                </span>
                <span className="text-green-600 font-medium text-sm flex items-center">
                  <Check className="w-4 h-4 mr-1" /> Available
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                {car.name}
              </h1>
            </div>

            {/* Specs Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
              <div className="flex flex-col text-center">
                <Users className="w-6 h-6 mx-auto text-blue-800 mb-2" />
                <span className="text-sm text-slate-500">Seats</span>
                <span className="font-semibold text-slate-900">
                  {car.seats} Adults
                </span>
              </div>
              <div className="flex flex-col text-center">
                <Car className="w-6 h-6 mx-auto text-blue-800 mb-2" />
                <span className="text-sm text-slate-500">Doors</span>
                <span className="font-semibold text-slate-900">
                  {car.doors}
                </span>
              </div>
              <div className="flex flex-col text-center">
                <Briefcase className="w-6 h-6 mx-auto text-blue-800 mb-2" />
                <span className="text-sm text-slate-500">Luggage</span>
                <span className="font-semibold text-slate-900">
                  {car.luggage} Bags
                </span>
              </div>
              <div className="flex flex-col text-center">
                <Settings2 className="w-6 h-6 mx-auto text-blue-800 mb-2" />
                <span className="text-sm text-slate-500">Transmission</span>
                <span className="font-semibold text-slate-900">
                  {car.transmission}
                </span>
              </div>
              <div className="flex flex-col text-center">
                <Droplets className="w-6 h-6 mx-auto text-blue-800 mb-2" />
                <span className="text-sm text-slate-500">Fuel Type</span>
                <span className="font-semibold text-slate-900">{car.fuel}</span>
              </div>
              <div className="flex flex-col text-center">
                <MapPin className="w-6 h-6 mx-auto text-blue-800 mb-2" />
                <span className="text-sm text-slate-500">AC</span>
                <span className="font-semibold text-slate-900">{car.ac}</span>
              </div>
            </div>

            {/* Inclusions */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Features & Inclusions
              </h3>
              <ul className="grid sm:grid-cols-2 gap-3">
                {[
                  "Professional Driver",
                  "Clean & Sanitized",
                  "Music System",
                  "Air Conditioning",
                  "First Aid Kit",
                  "Toll Taxes (Extra)",
                ].map((feature, i) => (
                  <li key={i} className="flex items-center text-slate-600">
                    <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Pricing Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Pricing Details
              </h3>
              <div className="flex items-end mb-6 border-b border-slate-100 pb-4">
                <span className="text-4xl font-bold text-orange-500">
                  ₹{car.price}
                </span>
                <span className="text-slate-500 font-medium ml-2 mb-1">
                  / km
                </span>
              </div>
              <div className="space-y-3 mb-6 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600">
                    Minimum Charge (250 km)
                  </span>
                  <span className="font-semibold text-slate-900">
                    ₹{car.minCharge}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Driver Allowance / Day</span>
                  <span className="font-semibold text-slate-900">
                    ₹{car.driverAllowance}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Night Halt Charges</span>
                  <span className="font-semibold text-slate-900">
                    ₹{car.nightCharge}
                  </span>
                </div>
              </div>
              <div className="bg-blue-50 p-4 rounded-xl text-sm text-blue-900">
                Toll, Parking, and State Taxes are extra as applicable.
              </div>
            </div>

            {/* Quick Form */}
            <div className="bg-blue-900 p-6 rounded-2xl text-white">
              <h3 className="text-xl font-bold mb-4">Quick Booking</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder:text-blue-200"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder:text-blue-200"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Pickup Location"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder:text-blue-200"
                  />
                </div>
                <div>
                  <input
                    type="date"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 text-white"
                  />
                </div>
                <button
                  type="button"
                  className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-colors"
                >
                  Send Request
                </button>
              </form>
            </div>

            <a
              href="tel:+919876543210"
              className="flex items-center justify-center p-4 bg-white border border-slate-200 rounded-2xl text-slate-900 font-bold hover:bg-slate-50 transition-colors"
            >
              <Phone className="w-5 h-5 mr-2 text-blue-800" />
              Call to Book: +91 98765 43210
            </a>
          </div>
        </div>

        {/* Related Cars */}
        {relatedCars.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Similar Cars
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedCars.map((related) => (
                <Link
                  key={related.slug}
                  href={`/cars/${related.slug}`}
                  className="bg-white p-4 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow flex items-center gap-4"
                >
                  <div className="w-24 h-24 bg-slate-100 rounded-xl flex-shrink-0 flex items-center justify-center">
                    <span className="text-xs text-slate-400">Image</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{related.name}</h4>
                    <p className="text-orange-500 font-semibold text-sm">
                      ₹{related.price}/km
                    </p>
                    <p className="text-slate-500 text-xs mt-1">
                      {related.seats} Seats • {related.fuel}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
