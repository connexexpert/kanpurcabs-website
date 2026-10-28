"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Mail, Clock, Menu, X, ChevronDown, Car, Bike } from "lucide-react";
import { SITE_CONFIG, getPhoneLink, cn } from "@/lib/utils";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn("sticky top-0 z-40 w-full transition-all duration-300", isScrolled ? "bg-white shadow-md" : "bg-white")}>
      {/* Top bar */}
      <div className="bg-primary-900 text-white text-xs sm:text-sm py-2 px-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center space-x-4">
            <a href={getPhoneLink(SITE_CONFIG.phone)} className="flex items-center hover:text-accent-500 transition-colors">
              <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              {SITE_CONFIG.phone}
            </a>
            <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center hover:text-accent-500 transition-colors">
              <Mail className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              {SITE_CONFIG.email}
            </a>
          </div>
          <div className="flex items-center hidden md:flex text-slate-300 text-xs">
            <Clock className="w-3.5 h-3.5 mr-1.5 text-accent-400" />
            24/7 Car & Bike Rentals across Kanpur
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 text-primary-900">
            <div className="bg-primary-900 text-accent-400 p-2 rounded-xl flex items-center justify-center">
              <Car className="w-6 h-6" />
            </div>
            <div>
              <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-primary-900 block leading-none">
                Kanpur<span className="text-accent-600">Cabs</span>
              </span>
              <span className="text-[10px] text-slate-500 tracking-wider font-semibold uppercase block mt-0.5">
                Cars & Bikes on Rent
              </span>
            </div>
          </Link>

          {/* Desktop Nav in Exact Order: Home -> Price Chart -> Car -> Bike -> Contact Us */}
          <nav className="hidden lg:flex items-center space-x-7 text-sm font-semibold text-slate-700">
            <Link href="/" className="hover:text-accent-600 transition-colors">Home</Link>
            
            <Link href="/pricing" className="hover:text-accent-600 transition-colors font-bold text-primary-900">
              Price Chart
            </Link>

            {/* Car Services & Fleet Dropdown */}
            <div className="relative group cursor-pointer py-2">
              <div className="flex items-center hover:text-accent-600 transition-colors">
                <Link href="/cars" className="font-semibold">Car</Link>
                <ChevronDown className="w-4 h-4 ml-1 opacity-70 group-hover:rotate-180 transition-transform" />
              </div>
              <div className="absolute top-full left-0 bg-white shadow-xl rounded-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all w-64 border border-slate-100 p-2 z-50">
                <Link href="/cars" className="block px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50 hover:text-primary-900 border-b border-slate-100 mb-1">
                  <div className="font-bold text-primary-900 flex items-center justify-between">
                    <span>View Cars Fleet</span>
                    <span className="text-[10px] bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded font-bold">All Cars</span>
                  </div>
                  <div className="text-xs text-slate-400 font-normal">Hatchbacks, Sedans, SUVs & Travellers</div>
                </Link>
                <Link href="/services/local-car-rental" className="block px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50 hover:text-primary-900">
                  <div className="font-bold">Local Car Rental</div>
                  <div className="text-xs text-slate-400 font-normal">Hourly 4h, 8h & 12h in city</div>
                </Link>
                <Link href="/services/outstation-cab" className="block px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50 hover:text-primary-900">
                  <div className="font-bold">Outstation Cabs</div>
                  <div className="text-xs text-slate-400 font-normal">One-Way & Round Trips from Kanpur</div>
                </Link>
                <Link href="/tours" className="block px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50 hover:text-primary-900">
                  <div className="font-bold">Kanpur Sightseeing & Tours</div>
                  <div className="text-xs text-slate-400 font-normal">Bithoor, Ayodhya, Varanasi Packages</div>
                </Link>
                <Link href="/services/corporate-car-rental" className="block px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50 hover:text-primary-900">
                  <div className="font-bold">Corporate Car Rental</div>
                  <div className="text-xs text-slate-400 font-normal">Monthly Retainers & GST Billing</div>
                </Link>
              </div>
            </div>

            {/* Bike Services & Fleet Dropdown */}
            <div className="relative group cursor-pointer py-2">
              <div className="flex items-center hover:text-accent-600 transition-colors">
                <Link href="/bikes" className="font-semibold flex items-center gap-1">
                  <span>Bike</span>
                  <span className="bg-orange-100 text-accent-700 text-[10px] font-bold px-1.5 py-0.5 rounded-full">New</span>
                </Link>
                <ChevronDown className="w-4 h-4 ml-1 opacity-70 group-hover:rotate-180 transition-transform" />
              </div>
              <div className="absolute top-full left-0 bg-white shadow-xl rounded-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all w-64 border border-slate-100 p-2 z-50">
                <Link href="/bikes" className="block px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50 hover:text-primary-900 border-b border-slate-100 mb-1">
                  <div className="font-bold text-accent-600 flex items-center justify-between">
                    <span>View Bikes Fleet</span>
                    <span className="text-[10px] bg-orange-50 text-accent-600 px-1.5 py-0.5 rounded font-bold">Self Drive</span>
                  </div>
                  <div className="text-xs text-slate-400 font-normal">Scooters, Commuters, Sports & Cruisers</div>
                </Link>
                <Link href="/services/bike-rental" className="block px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50 hover:text-primary-900">
                  <div className="font-bold">Bike & Scooter Rental Service</div>
                  <div className="text-xs text-slate-400 font-normal">Hourly, 24h & weekly packages</div>
                </Link>
                <Link href="/bikes?category=Scooter" className="block px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50 hover:text-primary-900">
                  <div className="font-bold">City Scooters</div>
                  <div className="text-xs text-slate-400 font-normal">Activa 6G, TVS Jupiter 125</div>
                </Link>
                <Link href="/bikes?category=Commuter" className="block px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50 hover:text-primary-900">
                  <div className="font-bold">Commuter Bikes</div>
                  <div className="text-xs text-slate-400 font-normal">Hero Splendor Plus, Honda Shine 125</div>
                </Link>
                <Link href="/bikes?category=Cruiser" className="block px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50 hover:text-primary-900">
                  <div className="font-bold">Cruisers & Highway Bikes</div>
                  <div className="text-xs text-slate-400 font-normal">Royal Enfield Classic 350, Pulsar 150</div>
                </Link>
              </div>
            </div>

            <Link href="/contact" className="hover:text-accent-600 transition-colors">
              Contact Us
            </Link>
          </nav>

          {/* Right side CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex flex-col items-end mr-2">
              <span className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">Quick Booking</span>
              <a href={getPhoneLink(SITE_CONFIG.phone)} className="font-bold text-primary-900 text-sm hover:text-accent-600 transition-colors">
                {SITE_CONFIG.phone}
              </a>
            </div>
            <Link href="/booking" className="bg-accent-500 hover:bg-accent-600 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-md hover:shadow-lg">
              Book Online
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden p-2 text-slate-700 hover:text-primary-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <div 
        className={cn(
          "fixed inset-0 top-[105px] sm:top-[115px] bg-white z-50 transform transition-transform duration-300 lg:hidden overflow-y-auto border-t border-slate-200",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Mobile Navigation in Exact Order: Home -> Price Chart -> Car -> Bike -> Contact Us */}
        <div className="p-5 flex flex-col space-y-3 font-semibold text-slate-800">
          <Link href="/" className="py-2.5 border-b border-slate-100 hover:text-accent-600 flex items-center justify-between" onClick={() => setIsMobileMenuOpen(false)}>
            <span>Home</span>
          </Link>

          <Link href="/pricing" className="py-2.5 border-b border-slate-100 text-primary-900 font-bold hover:text-accent-600 flex items-center justify-between" onClick={() => setIsMobileMenuOpen(false)}>
            <span>Price Chart</span>
            <span className="text-[10px] bg-blue-100 text-primary-900 px-2 py-0.5 rounded-full font-bold">Transparent</span>
          </Link>

          {/* Car Category Group */}
          <div className="py-2.5 border-b border-slate-100">
            <div className="flex items-center justify-between text-primary-900 font-bold mb-2">
              <span className="text-base">Car Services & Fleet</span>
              <Link href="/cars" className="text-xs text-accent-600 font-bold hover:underline" onClick={() => setIsMobileMenuOpen(false)}>
                View Cars
              </Link>
            </div>
            <div className="pl-3 space-y-2 text-sm font-medium">
              <Link href="/services/local-car-rental" className="block py-1 text-slate-600 hover:text-accent-600" onClick={() => setIsMobileMenuOpen(false)}>
                Local Car Rental (Hourly 4h, 8h, 12h)
              </Link>
              <Link href="/services/outstation-cab" className="block py-1 text-slate-600 hover:text-accent-600" onClick={() => setIsMobileMenuOpen(false)}>
                Outstation Cabs (One-Way & Round Trip)
              </Link>
              <Link href="/tours" className="block py-1 text-slate-600 hover:text-accent-600" onClick={() => setIsMobileMenuOpen(false)}>
                Kanpur Sightseeing & Tours (Bithoor, Ayodhya)
              </Link>
              <Link href="/services/corporate-car-rental" className="block py-1 text-slate-600 hover:text-accent-600" onClick={() => setIsMobileMenuOpen(false)}>
                Corporate Car Rental (Monthly Retainers)
              </Link>
            </div>
          </div>

          {/* Bike Category Group */}
          <div className="py-2.5 border-b border-slate-100">
            <div className="flex items-center justify-between text-accent-600 font-bold mb-2">
              <span className="text-base flex items-center gap-1.5">
                <span>Bike & Scooter Rental</span>
                <span className="bg-orange-100 text-accent-600 text-xs px-1.5 py-0.5 rounded-full">New</span>
              </span>
              <Link href="/bikes" className="text-xs text-primary-900 font-bold hover:underline" onClick={() => setIsMobileMenuOpen(false)}>
                View Bikes
              </Link>
            </div>
            <div className="pl-3 space-y-2 text-sm font-medium">
              <Link href="/services/bike-rental" className="block py-1 text-slate-600 hover:text-accent-600" onClick={() => setIsMobileMenuOpen(false)}>
                Bike Rental Overview & Hubs
              </Link>
              <Link href="/bikes?category=Scooter" className="block py-1 text-slate-600 hover:text-accent-600" onClick={() => setIsMobileMenuOpen(false)}>
                City Scooters (Activa 6G, Jupiter)
              </Link>
              <Link href="/bikes?category=Commuter" className="block py-1 text-slate-600 hover:text-accent-600" onClick={() => setIsMobileMenuOpen(false)}>
                Commuter Bikes (Splendor Plus, Shine)
              </Link>
              <Link href="/bikes?category=Cruiser" className="block py-1 text-slate-600 hover:text-accent-600" onClick={() => setIsMobileMenuOpen(false)}>
                Cruisers (Royal Enfield Classic 350)
              </Link>
            </div>
          </div>

          <Link href="/contact" className="py-2.5 border-b border-slate-100 hover:text-accent-600 flex items-center justify-between" onClick={() => setIsMobileMenuOpen(false)}>
            <span>Contact Us</span>
          </Link>
          
          <div className="pt-3">
            <Link 
              href="/booking" 
              className="block w-full text-center bg-accent-500 hover:bg-accent-600 text-white font-bold py-3 rounded-xl shadow-md transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book Car / Bike Online
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
