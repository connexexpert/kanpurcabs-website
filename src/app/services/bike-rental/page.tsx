import { Metadata } from "next";
import Link from "next/link";
import {
  Bike,
  ShieldCheck,
  Clock,
  MapPin,
  CheckCircle2,
  Sparkles,
  PhoneCall,
  FileCheck,
  CreditCard,
  Headphones,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import { SITE_CONFIG, getPhoneLink, getWhatsAppLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Bike & Scooter Rental in Kanpur | Hourly & Daily Two-Wheeler Hire",
  description:
    "Rent scooters and bikes in Kanpur at affordable hourly and daily rates. Activa, Jupiter, Splendor, Pulsar & Royal Enfield Classic 350. Free helmet, zero hidden charges.",
};

const BIKE_FLEET = [
  {
    name: "Honda Activa 6G",
    category: "Scooter",
    engine: "110 cc",
    mileage: "45-50 km/l",
    hourlyRate: 50,
    dailyRate: 400,
    securityDeposit: 1000,
    bestFor: "City commute, coaching, shopping in Naveen Market",
    badge: "Most Popular",
    imageUrl: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "TVS Jupiter 125",
    category: "Scooter",
    engine: "125 cc",
    mileage: "45-50 km/l",
    hourlyRate: 55,
    dailyRate: 450,
    securityDeposit: 1000,
    bestFor: "Comfortable family ride, ample boot storage",
    badge: "High Comfort",
    imageUrl: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Hero Splendor Plus",
    category: "Commuter Bike",
    engine: "100 cc",
    mileage: "65-70 km/l",
    hourlyRate: 50,
    dailyRate: 400,
    securityDeposit: 1000,
    bestFor: "Maximum fuel economy, daily local errands",
    badge: "Budget Friendly",
    imageUrl: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Honda Shine 125",
    category: "Commuter Bike",
    engine: "125 cc",
    mileage: "55-60 km/l",
    hourlyRate: 60,
    dailyRate: 500,
    securityDeposit: 1000,
    bestFor: "Smooth reliable city & highway commute",
    badge: "Smooth Ride",
    imageUrl: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Bajaj Pulsar 150",
    category: "Sports Bike",
    engine: "150 cc",
    mileage: "40-45 km/l",
    hourlyRate: 80,
    dailyRate: 650,
    securityDeposit: 1500,
    bestFor: "College students, stylish city riding",
    badge: "Youth Choice",
    imageUrl: "https://images.unsplash.com/photo-1558980664-769d59546b3d?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Royal Enfield Classic 350",
    category: "Cruiser",
    engine: "350 cc",
    mileage: "32-35 km/l",
    hourlyRate: 140,
    dailyRate: 1100,
    securityDeposit: 2500,
    bestFor: "Long drives, Ganga Barrage cruises, Bithoor tours",
    badge: "Premium Cruiser",
    imageUrl: "https://images.unsplash.com/photo-1558981420-87aa9dad1c89?auto=format&fit=crop&w=800&q=80",
  },
];

const PACKAGES = [
  {
    duration: "4 Hours",
    kms: "40 KMs included",
    scooterRate: "₹250",
    commuterRate: "₹250",
    sportsRate: "₹350",
    enfieldRate: "₹600",
    extraKm: "₹4/km",
  },
  {
    duration: "8 Hours",
    kms: "80 KMs included",
    scooterRate: "₹400",
    commuterRate: "₹400",
    sportsRate: "₹550",
    enfieldRate: "₹950",
    extraKm: "₹4/km",
  },
  {
    duration: "12 Hours",
    kms: "120 KMs included",
    scooterRate: "₹500",
    commuterRate: "₹500",
    sportsRate: "₹700",
    enfieldRate: "₹1,200",
    extraKm: "₹4/km",
  },
  {
    duration: "24 Hours (Full Day)",
    kms: "200 KMs included",
    scooterRate: "₹650",
    commuterRate: "₹650",
    sportsRate: "₹900",
    enfieldRate: "₹1,500",
    extraKm: "₹4/km",
  },
  {
    duration: "7 Days (Weekly)",
    kms: "1,200 KMs included",
    scooterRate: "₹3,800",
    commuterRate: "₹3,800",
    sportsRate: "₹5,200",
    enfieldRate: "₹8,500",
    extraKm: "₹3.5/km",
  },
];

export default function BikeRentalPage() {
  return (
    <main>
      <PageHero
        title="Bike & Scooter Rental in Kanpur"
        subtitle="Freedom to explore Kanpur on your own schedule with zero traffic stress"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Bike Rental", href: "/services/bike-rental" },
        ]}
      />

      {/* Overview & Quick Highlight */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 bg-orange-100 text-accent-700 text-xs sm:text-sm font-semibold px-3 py-1 rounded-full mb-4">
                <Bike className="w-4 h-4" /> Self-Drive Two-Wheeler Rentals in Kanpur
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight mb-4">
                Affordable Two-Wheelers For Every Journey in Kanpur
              </h2>
              <p className="text-slate-600 text-base sm:text-lg mb-6 leading-relaxed">
                Whether you are a student heading to coaching classes in Kakadeo, visiting IIT Kanpur, shopping across Naveen Market and Mall Road, or enjoying an evening cruise along the Ganga Barrage, our fleet of scooters and motorbikes offers the fastest, most economical way to navigate Kanpur.
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl">
                  <Clock className="w-6 h-6 text-primary-700 mb-2" />
                  <div className="font-bold text-slate-900 text-sm">Hourly & Daily</div>
                  <div className="text-xs text-slate-500">Rent from 2 hrs to 30 days</div>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl">
                  <ShieldCheck className="w-6 h-6 text-primary-700 mb-2" />
                  <div className="font-bold text-slate-900 text-sm">Complimentary Helmet</div>
                  <div className="text-xs text-slate-500">Sanitized ISI helmets included</div>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl">
                  <Sparkles className="w-6 h-6 text-primary-700 mb-2" />
                  <div className="font-bold text-slate-900 text-sm">Well Maintained</div>
                  <div className="text-xs text-slate-500">Regularly serviced & washed</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/booking?service=bike_rental"
                  className="bg-accent-500 hover:bg-accent-600 text-white font-bold px-6 py-3 rounded-lg shadow-md transition-colors"
                >
                  Book A Bike Now
                </Link>
                <a
                  href={getWhatsAppLink(SITE_CONFIG.whatsapp, "Hi KanpurCabs, I want to rent a bike/scooter in Kanpur.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-lg shadow-md transition-colors inline-flex items-center gap-2"
                >
                  Instant WhatsApp Booking
                </a>
              </div>
            </div>

            {/* Quick Pricing Summary Card */}
            <div className="lg:col-span-5">
              <div className="bg-gradient-to-br from-primary-900 to-primary-950 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-primary-800">
                <div className="text-accent-400 font-semibold text-sm uppercase tracking-wider mb-2">
                  Special Local Kanpur Rates
                </div>
                <h3 className="text-2xl font-bold mb-4">Starting at Just ₹50/Hour</h3>
                <p className="text-slate-300 text-sm mb-6">
                  Zero security deposit headaches. Quick digital verification with driving license and Aadhaar card.
                </p>

                <div className="space-y-3 mb-6 text-sm">
                  <div className="flex justify-between pb-2 border-b border-primary-800">
                    <span className="text-slate-300">Honda Activa 6G / Jupiter:</span>
                    <span className="font-bold text-white">₹400 / Day</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-primary-800">
                    <span className="text-slate-300">Hero Splendor / Shine:</span>
                    <span className="font-bold text-white">₹400 / Day</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-primary-800">
                    <span className="text-slate-300">Bajaj Pulsar 150 / Apache:</span>
                    <span className="font-bold text-white">₹650 / Day</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-primary-800">
                    <span className="text-slate-300">Royal Enfield Classic 350:</span>
                    <span className="font-bold text-white">₹1,100 / Day</span>
                  </div>
                </div>

                <div className="bg-primary-800/60 rounded-xl p-3 text-xs text-slate-300 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Free pickup & drop assistance at Civil Lines & Swaroop Nagar</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Fleet Grid */}
      <section className="py-14 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Our Two-Wheeler Fleet</h2>
            <p className="text-slate-600">Choose from top brands for everyday commutes, work errands, or weekend getaways.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BIKE_FLEET.map((bike, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all flex flex-col"
              >
                <div className="h-48 relative overflow-hidden bg-slate-100 group">
                  <img
                    src={bike.imageUrl}
                    alt={bike.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute top-3 right-3 bg-primary-900/90 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
                    {bike.badge}
                  </span>
                  <span className="absolute bottom-3 left-3 text-white text-xs font-bold uppercase tracking-wider drop-shadow-md">
                    Self Drive • Helmet Included
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-bold text-xl text-slate-900">{bike.name}</h3>
                      <span className="text-xs font-semibold text-accent-700 bg-orange-50 px-2 py-0.5 rounded">
                        {bike.category}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-primary-900">₹{bike.dailyRate}</div>
                      <div className="text-xs text-slate-500">per day</div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 mb-4">{bike.bestFor}</p>

                  <div className="grid grid-cols-2 gap-2 text-xs text-slate-600 bg-slate-50 p-3 rounded-lg mb-4">
                    <div>
                      <span className="text-slate-400 block">Hourly Rate:</span>
                      <strong className="text-slate-800">₹{bike.hourlyRate}/hr</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Mileage:</span>
                      <strong className="text-slate-800">{bike.mileage}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Engine:</span>
                      <strong className="text-slate-800">{bike.engine}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Refundable Dep:</span>
                      <strong className="text-slate-800">₹{bike.securityDeposit}</strong>
                    </div>
                  </div>

                  <div className="mt-auto pt-2">
                    <Link
                      href={`/booking?service=bike_rental&vehicle=${encodeURIComponent(bike.name)}`}
                      className="block w-full text-center bg-primary-800 hover:bg-primary-900 text-white font-semibold py-2.5 rounded-lg transition-colors text-sm"
                    >
                      Book This Bike
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Package Pricing Table (DriversKatta inspired) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-accent-600 font-bold uppercase tracking-wider text-xs">Transparent Tariff</span>
            <h2 className="text-3xl font-bold text-slate-900 mt-1 mb-3">Kanpur Two-Wheeler Rental Rate Chart</h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Clear, transparent pricing without hidden surprises. Fuel terms, helmet, and roadside assist included.
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-x-auto shadow-md rounded-xl border border-slate-200">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-primary-900 text-white text-sm sm:text-base">
                  <th className="py-4 px-4 font-semibold">Rental Duration</th>
                  <th className="py-4 px-4 font-semibold">Scooters (Activa/Jupiter)</th>
                  <th className="py-4 px-4 font-semibold">Commuter Bikes (Splendor/Shine)</th>
                  <th className="py-4 px-4 font-semibold">Sports Bikes (Pulsar/Apache)</th>
                  <th className="py-4 px-4 font-semibold">Cruiser (Classic 350)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm">
                {PACKAGES.map((pkg, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50 hover:bg-slate-100"}>
                    <td className="py-3.5 px-4 font-medium text-slate-900">
                      <div>{pkg.duration}</div>
                      <div className="text-xs text-slate-500 font-normal">{pkg.kms}</div>
                    </td>
                    <td className="py-3.5 px-4 font-bold text-slate-800">{pkg.scooterRate}</td>
                    <td className="py-3.5 px-4 font-bold text-slate-800">{pkg.commuterRate}</td>
                    <td className="py-3.5 px-4 font-bold text-slate-800">{pkg.sportsRate}</td>
                    <td className="py-3.5 px-4 font-bold text-primary-800">{pkg.enfieldRate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pricing Fine Print */}
          <div className="max-w-4xl mx-auto mt-6 bg-slate-50 border border-slate-200 rounded-xl p-5 text-xs text-slate-600 space-y-2">
            <div className="font-semibold text-slate-800 text-sm mb-1">Important Rental Terms & Inclusions:</div>
            <div className="grid sm:grid-cols-2 gap-2">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>1 ISI certified sanitized helmet provided free. Additional helmet @ ₹50.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>Extra kilometers beyond package limits charged @ ₹4/km only.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>Fuel Policy: Vehicle is provided with full/sufficient tank and returned at same level.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>Refundable security deposit is returned immediately upon inspection at drop-off.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Rent - 4 Easy Steps */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">How to Rent a Bike in Kanpur</h2>
            <p className="text-slate-600 text-sm sm:text-base">Quick, hassle-free booking process in less than 5 minutes</p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 text-center shadow-sm">
              <div className="w-12 h-12 bg-primary-100 text-primary-800 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">
                1
              </div>
              <h3 className="font-bold text-slate-900 mb-1">Choose Model</h3>
              <p className="text-xs text-slate-500">Pick Activa, Splendor, Pulsar, or Royal Enfield.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 text-center shadow-sm">
              <div className="w-12 h-12 bg-primary-100 text-primary-800 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">
                2
              </div>
              <h3 className="font-bold text-slate-900 mb-1">Upload Documents</h3>
              <p className="text-xs text-slate-500">Valid Driving License and original Govt ID proof.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 text-center shadow-sm">
              <div className="w-12 h-12 bg-primary-100 text-primary-800 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">
                3
              </div>
              <h3 className="font-bold text-slate-900 mb-1">Pickup or Delivery</h3>
              <p className="text-xs text-slate-500">Pick up at Civil Lines or get doorstep delivery.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 text-center shadow-sm">
              <div className="w-12 h-12 bg-primary-100 text-primary-800 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">
                4
              </div>
              <h3 className="font-bold text-slate-900 mb-1">Ride Freely</h3>
              <p className="text-xs text-slate-500">Enjoy your ride with 24/7 roadside assistance support.</p>
            </div>
          </div>

          {/* Call to action bar */}
          <div className="mt-12 text-center bg-primary-900 text-white p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-1">Need a two-wheeler right now in Kanpur?</h3>
              <p className="text-slate-300 text-sm">Call us directly or WhatsApp for immediate vehicle availability.</p>
            </div>
            <div className="flex gap-3">
              <a
                href={getPhoneLink(SITE_CONFIG.phone)}
                className="bg-white text-primary-900 hover:bg-slate-100 font-bold px-5 py-3 rounded-lg text-sm transition-colors inline-flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4" /> {SITE_CONFIG.phone}
              </a>
              <Link
                href="/booking?service=bike_rental"
                className="bg-accent-500 hover:bg-accent-600 text-white font-bold px-5 py-3 rounded-lg text-sm transition-colors"
              >
                Book Online
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
