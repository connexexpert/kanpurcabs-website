"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Mail, Clock, Menu, X, ChevronDown, UserCheck, ShieldCheck, Bike, Car } from "lucide-react";
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
            <ShieldCheck className="w-3.5 h-3.5 mr-1.5 text-accent-400" />
            24/7 Verified Drivers for Your Car & Bike in Kanpur
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 text-primary-900">
            <div className="bg-primary-900 text-accent-400 p-2 rounded-xl flex items-center justify-center">
              <UserCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-primary-900 block leading-none">
                Kanpur<span className="text-accent-600">Drivers</span>
              </span>
              <span className="text-[10px] text-slate-500 tracking-wider font-semibold uppercase block mt-0.5">
                Verified Drivers & Riders
              </span>
            </div>
          </Link>

          {/* Desktop Nav in Exact Order: Home -> Price Chart -> Car -> Bike -> Contact Us */}
          <nav className="hidden lg:flex items-center space-x-7 text-sm font-semibold text-slate-700">
            <Link href="/" className="hover:text-accent-600 transition-colors">Home</Link>
            
            <Link href="/pricing" className="hover:text-accent-600 transition-colors font-bold text-primary-900">
              Price Chart
            </Link>

            {/* Car Drivers Dropdown */}
            <div className="relative group cursor-pointer py-2">
              <div className="flex items-center hover:text-accent-600 transition-colors">
                <Link href="/cars" className="font-semibold">Car</Link>
                <ChevronDown className="w-4 h-4 ml-1 opacity-70 group-hover:rotate-180 transition-transform" />
              </div>
              <div className="absolute top-full left-0 bg-white shadow-xl rounded-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all w-72 border border-slate-100 p-2 z-50">
                <Link href="/cars" className="block px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50 hover:text-primary-900 border-b border-slate-100 mb-1">
                  <div className="font-bold text-primary-900 flex items-center justify-between">
                    <span>Drivers by Car Type</span>
                    <span className="text-[10px] bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded font-bold">Manual & Auto</span>
                  </div>
                  <div className="text-xs text-slate-400 font-normal">Hatchback, Sedan, SUV, Luxury & Travellers</div>
                </Link>
                <Link href="/services/local-car-rental" className="block px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50 hover:text-primary-900">
                  <div className="font-bold">Local Hourly Car Driver</div>
                  <div className="text-xs text-slate-400 font-normal">4h, 8h & 12h for shopping, meetings, hospitals</div>
                </Link>
                <Link href="/services/outstation-cab" className="block px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50 hover:text-primary-900">
                  <div className="font-bold">Outstation Highway Driver</div>
                  <div className="text-xs text-slate-400 font-normal">Experienced drivers for Lucknow, Agra, Delhi, Ayodhya</div>
                </Link>
                <Link href="/services/corporate-car-rental" className="block px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50 hover:text-primary-900">
                  <div className="font-bold">Monthly / Permanent Driver</div>
                  <div className="text-xs text-slate-400 font-normal">Dedicated full-time private chauffeurs & corporate fleet</div>
                </Link>
                <Link href="/tours" className="block px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50 hover:text-primary-900">
                  <div className="font-bold">City & Pilgrimage Tour Driver</div>
                  <div className="text-xs text-slate-400 font-normal">Chauffeur for Bithoor, JK Temple, Ram Mandir</div>
                </Link>
              </div>
            </div>

            {/* Bike Riders Dropdown */}
            <div className="relative group cursor-pointer py-2">
              <div className="flex items-center hover:text-accent-600 transition-colors">
                <Link href="/bikes" className="font-semibold flex items-center gap-1">
                  <span>Bike</span>
                  <span className="bg-orange-100 text-accent-700 text-[10px] font-bold px-1.5 py-0.5 rounded-full">Riders</span>
                </Link>
                <ChevronDown className="w-4 h-4 ml-1 opacity-70 group-hover:rotate-180 transition-transform" />
              </div>
              <div className="absolute top-full left-0 bg-white shadow-xl rounded-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all w-72 border border-slate-100 p-2 z-50">
                <Link href="/bikes" className="block px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50 hover:text-primary-900 border-b border-slate-100 mb-1">
                  <div className="font-bold text-accent-600 flex items-center justify-between">
                    <span>Two-Wheeler Riders Network</span>
                    <span className="text-[10px] bg-orange-50 text-accent-600 px-1.5 py-0.5 rounded font-bold">On Demand</span>
                  </div>
                  <div className="text-xs text-slate-400 font-normal">Scooters, Commuters, Sports & Royal Enfield</div>
                </Link>
                <Link href="/services/bike-rental" className="block px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50 hover:text-primary-900">
                  <div className="font-bold">Two-Wheeler Rider Service</div>
                  <div className="text-xs text-slate-400 font-normal">Hourly, half-day & full-day personal riders</div>
                </Link>
                <Link href="/bikes?category=Scooter" className="block px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50 hover:text-primary-900">
                  <div className="font-bold">City Scooter Riders</div>
                  <div className="text-xs text-slate-400 font-normal">Riders for Activa 6G, TVS Jupiter</div>
                </Link>
                <Link href="/bikes?category=Commuter" className="block px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50 hover:text-primary-900">
                  <div className="font-bold">Errands & Daily Riders</div>
                  <div className="text-xs text-slate-400 font-normal">Pick & drop tasks, documents, parcels</div>
                </Link>
                <Link href="/bikes?category=Cruiser" className="block px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50 hover:text-primary-900">
                  <div className="font-bold">Cruiser & Highway Pilots</div>
                  <div className="text-xs text-slate-400 font-normal">Experienced riders for Royal Enfield Classic 350</div>
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
              <span className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">Driver Dispatch</span>
              <a href={getPhoneLink(SITE_CONFIG.phone)} className="font-bold text-primary-900 text-sm hover:text-accent-600 transition-colors">
                {SITE_CONFIG.phone}
              </a>
            </div>
            <Link href="/booking" className="bg-accent-500 hover:bg-accent-600 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-md hover:shadow-lg">
              Hire a Driver
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

      {/* Mobile Navigation Drawer in Exact Order: Home -> Price Chart -> Car -> Bike -> Contact Us */}
      <div 
        className={cn(
          "fixed inset-0 top-[105px] sm:top-[115px] bg-white z-50 transform transition-transform duration-300 lg:hidden overflow-y-auto border-t border-slate-200",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="p-5 flex flex-col space-y-3 font-semibold text-slate-800">
          <Link href="/" className="py-2.5 border-b border-slate-100 hover:text-accent-600 flex items-center justify-between" onClick={() => setIsMobileMenuOpen(false)}>
            <span>Home</span>
          </Link>

          <Link href="/pricing" className="py-2.5 border-b border-slate-100 text-primary-900 font-bold hover:text-accent-600 flex items-center justify-between" onClick={() => setIsMobileMenuOpen(false)}>
            <span>Price Chart</span>
            <span className="text-[10px] bg-blue-100 text-primary-900 px-2 py-0.5 rounded-full font-bold">Driver Tariffs</span>
          </Link>

          {/* Car Drivers Category Group */}
          <div className="py-2.5 border-b border-slate-100">
            <div className="flex items-center justify-between text-primary-900 font-bold mb-2">
              <span className="text-base">Car Drivers</span>
              <Link href="/cars" className="text-xs text-accent-600 font-bold hover:underline" onClick={() => setIsMobileMenuOpen(false)}>
                Drivers by Car
              </Link>
            </div>
            <div className="pl-3 space-y-2 text-sm font-medium">
              <Link href="/services/local-car-rental" className="block py-1 text-slate-600 hover:text-accent-600" onClick={() => setIsMobileMenuOpen(false)}>
                Local Hourly Driver (4h, 8h, 12h for Your Car)
              </Link>
              <Link href="/services/outstation-cab" className="block py-1 text-slate-600 hover:text-accent-600" onClick={() => setIsMobileMenuOpen(false)}>
                Outstation Highway Driver (Same Day & Stay)
              </Link>
              <Link href="/services/corporate-car-rental" className="block py-1 text-slate-600 hover:text-accent-600" onClick={() => setIsMobileMenuOpen(false)}>
                Monthly / Permanent Private Chauffeur
              </Link>
              <Link href="/tours" className="block py-1 text-slate-600 hover:text-accent-600" onClick={() => setIsMobileMenuOpen(false)}>
                City & Pilgrimage Tour Driver (Bithoor, Ayodhya)
              </Link>
            </div>
          </div>

          {/* Bike Riders Category Group */}
          <div className="py-2.5 border-b border-slate-100">
            <div className="flex items-center justify-between text-accent-600 font-bold mb-2">
              <span className="text-base flex items-center gap-1.5">
                <span>Bike & Two-Wheeler Riders</span>
                <span className="bg-orange-100 text-accent-600 text-xs px-1.5 py-0.5 rounded-full">On Demand</span>
              </span>
              <Link href="/bikes" className="text-xs text-primary-900 font-bold hover:underline" onClick={() => setIsMobileMenuOpen(false)}>
                Riders Network
              </Link>
            </div>
            <div className="pl-3 space-y-2 text-sm font-medium">
              <Link href="/services/bike-rental" className="block py-1 text-slate-600 hover:text-accent-600" onClick={() => setIsMobileMenuOpen(false)}>
                Two-Wheeler Rider Service Overview
              </Link>
              <Link href="/bikes?category=Scooter" className="block py-1 text-slate-600 hover:text-accent-600" onClick={() => setIsMobileMenuOpen(false)}>
                City Scooter Riders (Activa, Jupiter)
              </Link>
              <Link href="/bikes?category=Commuter" className="block py-1 text-slate-600 hover:text-accent-600" onClick={() => setIsMobileMenuOpen(false)}>
                Errand & Document Pickup Riders
              </Link>
              <Link href="/bikes?category=Cruiser" className="block py-1 text-slate-600 hover:text-accent-600" onClick={() => setIsMobileMenuOpen(false)}>
                Cruiser Riders (Royal Enfield Classic 350)
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
              Hire a Driver Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
