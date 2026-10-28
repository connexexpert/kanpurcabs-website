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

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-6 text-sm font-semibold text-slate-700">
            <Link href="/" className="hover:text-accent-600 transition-colors">Home</Link>
            <Link href="/cars" className="hover:text-accent-600 transition-colors">Cars</Link>
            <Link href="/bikes" className="hover:text-accent-600 transition-colors flex items-center gap-1">
              <span>Bikes</span>
              <span className="bg-orange-100 text-accent-700 text-[10px] font-bold px-1.5 py-0.5 rounded-full">New</span>
            </Link>

            {/* Services Dropdown */}
            <div className="relative group cursor-pointer">
              <div className="flex items-center hover:text-accent-600 transition-colors py-2">
                Services <ChevronDown className="w-4 h-4 ml-1 opacity-70 group-hover:rotate-180 transition-transform" />
              </div>
              <div className="absolute top-full left-0 bg-white shadow-xl rounded-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all w-60 border border-slate-100 p-2">
                <Link href="/services/local-car-rental" className="block px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50 hover:text-primary-900">
                  <div className="font-bold">Local Car Rental</div>
                  <div className="text-xs text-slate-400 font-normal">Hourly 4h, 8h & 12h in city</div>
                </Link>
                <Link href="/services/bike-rental" className="block px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50 hover:text-primary-900">
                  <div className="font-bold flex items-center justify-between">
                    <span>Bike & Scooter Rental</span>
                    <span className="bg-orange-100 text-accent-600 text-[10px] font-bold px-1 rounded">Self Drive</span>
                  </div>
                  <div className="text-xs text-slate-400 font-normal">Activa, Splendor, Pulsar, Bullet</div>
                </Link>
                <Link href="/services/outstation-cab" className="block px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50 hover:text-primary-900">
                  <div className="font-bold">Outstation Cabs</div>
                  <div className="text-xs text-slate-400 font-normal">One-Way & Round Trips</div>
                </Link>
                <Link href="/tours" className="block px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50 hover:text-primary-900">
                  <div className="font-bold">Sightseeing Tours</div>
                  <div className="text-xs text-slate-400 font-normal">Bithoor & City Packages</div>
                </Link>
                <Link href="/services/corporate-car-rental" className="block px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50 hover:text-primary-900">
                  <div className="font-bold">Corporate Travel</div>
                  <div className="text-xs text-slate-400 font-normal">Monthly Retainers & GST Billing</div>
                </Link>
              </div>
            </div>

            <Link href="/outstation" className="hover:text-accent-600 transition-colors">Outstation</Link>
            <Link href="/tours" className="hover:text-accent-600 transition-colors">Tours</Link>
            <Link href="/pricing" className="hover:text-accent-600 transition-colors font-bold text-primary-900">
              Pricing Chart
            </Link>
            <Link href="/about" className="hover:text-accent-600 transition-colors">About</Link>
            <Link href="/contact" className="hover:text-accent-600 transition-colors">Contact</Link>
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
        <div className="p-5 flex flex-col space-y-3 font-semibold text-slate-800">
          <Link href="/" className="py-2.5 border-b border-slate-100 hover:text-accent-600" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link href="/cars" className="py-2.5 border-b border-slate-100 hover:text-accent-600" onClick={() => setIsMobileMenuOpen(false)}>Car Rentals</Link>
          <Link href="/bikes" className="py-2.5 border-b border-slate-100 hover:text-accent-600 flex items-center justify-between" onClick={() => setIsMobileMenuOpen(false)}>
            <span>Bike & Scooter Rental</span>
            <span className="bg-orange-100 text-accent-600 text-xs font-bold px-2 py-0.5 rounded-full">New</span>
          </Link>

          <div className="py-2 border-b border-slate-100">
            <div className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-2">Our Services</div>
            <div className="pl-3 space-y-2 text-sm font-medium">
              <Link href="/services/local-car-rental" className="block py-1 hover:text-accent-600" onClick={() => setIsMobileMenuOpen(false)}>Local Car Rental</Link>
              <Link href="/services/bike-rental" className="block py-1 hover:text-accent-600" onClick={() => setIsMobileMenuOpen(false)}>Bike & Scooter Hire</Link>
              <Link href="/services/outstation-cab" className="block py-1 hover:text-accent-600" onClick={() => setIsMobileMenuOpen(false)}>Outstation Cabs</Link>
              <Link href="/tours" className="block py-1 hover:text-accent-600" onClick={() => setIsMobileMenuOpen(false)}>Sightseeing Tours</Link>
              <Link href="/services/corporate-car-rental" className="block py-1 hover:text-accent-600" onClick={() => setIsMobileMenuOpen(false)}>Corporate Travel</Link>
            </div>
          </div>

          <Link href="/pricing" className="py-2.5 border-b border-slate-100 text-primary-900 font-bold hover:text-accent-600" onClick={() => setIsMobileMenuOpen(false)}>
            Transparent Pricing Chart
          </Link>
          <Link href="/outstation" className="py-2.5 border-b border-slate-100 hover:text-accent-600" onClick={() => setIsMobileMenuOpen(false)}>Outstation Routes</Link>
          <Link href="/tours" className="py-2.5 border-b border-slate-100 hover:text-accent-600" onClick={() => setIsMobileMenuOpen(false)}>Tours & Packages</Link>
          <Link href="/about" className="py-2.5 border-b border-slate-100 hover:text-accent-600" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
          <Link href="/contact" className="py-2.5 border-b border-slate-100 hover:text-accent-600" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
          
          <div className="pt-4">
            <Link 
              href="/booking" 
              className="block w-full text-center bg-accent-500 hover:bg-accent-600 text-white font-bold py-3 rounded-xl shadow-md"
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
