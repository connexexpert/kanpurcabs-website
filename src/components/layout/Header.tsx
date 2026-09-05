"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Mail, Clock, Menu, X, ChevronDown, Car } from "lucide-react";
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
          <div className="flex items-center hidden md:flex">
            <Clock className="w-4 h-4 mr-2" />
            {SITE_CONFIG.workingHours}
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 text-primary-800">
            <Car className="w-8 h-8 text-accent-500" />
            <span className="font-bold text-xl sm:text-2xl tracking-tight">{SITE_CONFIG.name}</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium">
            <Link href="/" className="hover:text-accent-500 transition-colors">Home</Link>
            <Link href="/about" className="hover:text-accent-500 transition-colors">About</Link>
            <div className="relative group cursor-pointer">
              <div className="flex items-center hover:text-accent-500 transition-colors py-2">
                Cars <ChevronDown className="w-4 h-4 ml-1" />
              </div>
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all w-48 border border-gray-100">
                <Link href="/cars" className="block px-4 py-2 hover:bg-gray-50 hover:text-accent-500">Our Fleet</Link>
                <Link href="/cars/sedan" className="block px-4 py-2 hover:bg-gray-50 hover:text-accent-500">Sedan</Link>
                <Link href="/cars/suv" className="block px-4 py-2 hover:bg-gray-50 hover:text-accent-500">SUV</Link>
                <Link href="/cars/hatchback" className="block px-4 py-2 hover:bg-gray-50 hover:text-accent-500">Hatchback</Link>
              </div>
            </div>
            <div className="relative group cursor-pointer">
              <div className="flex items-center hover:text-accent-500 transition-colors py-2">
                Services <ChevronDown className="w-4 h-4 ml-1" />
              </div>
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all w-56 border border-gray-100">
                <Link href="/services/local-rental" className="block px-4 py-2 hover:bg-gray-50 hover:text-accent-500">Local Rental</Link>
                <Link href="/services/outstation" className="block px-4 py-2 hover:bg-gray-50 hover:text-accent-500">Outstation Cabs</Link>
                <Link href="/services/airport-transfer" className="block px-4 py-2 hover:bg-gray-50 hover:text-accent-500">Airport Transfer</Link>
                <Link href="/services/railway-transfer" className="block px-4 py-2 hover:bg-gray-50 hover:text-accent-500">Railway Transfer</Link>
                <Link href="/services/corporate" className="block px-4 py-2 hover:bg-gray-50 hover:text-accent-500">Corporate Rental</Link>
                <Link href="/services/wedding" className="block px-4 py-2 hover:bg-gray-50 hover:text-accent-500">Wedding Car</Link>
              </div>
            </div>
            <Link href="/tours" className="hover:text-accent-500 transition-colors">Tours & Packages</Link>
            <Link href="/routes" className="hover:text-accent-500 transition-colors">Outstation Routes</Link>
            <Link href="/contact" className="hover:text-accent-500 transition-colors">Contact</Link>
          </nav>

          {/* Right side CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex flex-col items-end mr-4">
              <span className="text-xs text-gray-500">Call Us Now</span>
              <a href={getPhoneLink(SITE_CONFIG.phone)} className="font-bold text-primary-800 text-sm hover:text-accent-500">{SITE_CONFIG.phone}</a>
            </div>
            <Link href="/booking" className="bg-accent-500 hover:bg-accent-600 text-white px-5 py-2.5 rounded-md font-medium transition-colors shadow-sm">
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden p-2 text-gray-600 hover:text-primary-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <div 
        className={cn(
          "fixed inset-0 top-[110px] sm:top-[120px] bg-white z-30 transform transition-transform duration-300 lg:hidden overflow-y-auto",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="p-4 flex flex-col space-y-4 font-medium text-lg border-t border-gray-100">
          <Link href="/" className="p-3 border-b border-gray-50 hover:text-accent-500" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link href="/about" className="p-3 border-b border-gray-50 hover:text-accent-500" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
          <div className="p-3 border-b border-gray-50">
            <div className="font-bold text-gray-400 text-sm mb-2 uppercase">Cars</div>
            <div className="flex flex-col space-y-2 pl-4 text-base">
              <Link href="/cars" className="hover:text-accent-500" onClick={() => setIsMobileMenuOpen(false)}>Our Fleet</Link>
              <Link href="/cars/sedan" className="hover:text-accent-500" onClick={() => setIsMobileMenuOpen(false)}>Sedan</Link>
              <Link href="/cars/suv" className="hover:text-accent-500" onClick={() => setIsMobileMenuOpen(false)}>SUV</Link>
              <Link href="/cars/hatchback" className="hover:text-accent-500" onClick={() => setIsMobileMenuOpen(false)}>Hatchback</Link>
            </div>
          </div>
          <div className="p-3 border-b border-gray-50">
            <div className="font-bold text-gray-400 text-sm mb-2 uppercase">Services</div>
            <div className="flex flex-col space-y-2 pl-4 text-base">
              <Link href="/services/local-rental" className="hover:text-accent-500" onClick={() => setIsMobileMenuOpen(false)}>Local Rental</Link>
              <Link href="/services/outstation" className="hover:text-accent-500" onClick={() => setIsMobileMenuOpen(false)}>Outstation</Link>
              <Link href="/services/airport-transfer" className="hover:text-accent-500" onClick={() => setIsMobileMenuOpen(false)}>Airport Transfer</Link>
              <Link href="/services/railway-transfer" className="hover:text-accent-500" onClick={() => setIsMobileMenuOpen(false)}>Railway Transfer</Link>
              <Link href="/services/corporate" className="hover:text-accent-500" onClick={() => setIsMobileMenuOpen(false)}>Corporate</Link>
              <Link href="/services/wedding" className="hover:text-accent-500" onClick={() => setIsMobileMenuOpen(false)}>Wedding</Link>
            </div>
          </div>
          <Link href="/tours" className="p-3 border-b border-gray-50 hover:text-accent-500" onClick={() => setIsMobileMenuOpen(false)}>Tours & Packages</Link>
          <Link href="/routes" className="p-3 border-b border-gray-50 hover:text-accent-500" onClick={() => setIsMobileMenuOpen(false)}>Outstation Routes</Link>
          <Link href="/contact" className="p-3 border-b border-gray-50 hover:text-accent-500" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
          
          <div className="mt-4 pt-4">
            <Link href="/booking" className="block w-full text-center bg-accent-500 hover:bg-accent-600 text-white px-5 py-3 rounded-md font-bold shadow-md" onClick={() => setIsMobileMenuOpen(false)}>
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
