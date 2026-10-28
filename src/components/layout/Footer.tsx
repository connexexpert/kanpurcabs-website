import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail, Clock, Car, Bike } from "lucide-react";
import { SITE_CONFIG, getPhoneLink } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-primary-900 to-primary-950 text-slate-300 pt-16 pb-8 border-t border-primary-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Brand */}
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center space-x-2 text-white">
              <div className="bg-white/10 p-2 rounded-xl text-accent-400">
                <Car className="w-7 h-7" />
              </div>
              <div>
                <span className="font-extrabold text-2xl tracking-tight text-white block leading-none">
                  Kanpur<span className="text-accent-400">Cabs</span>
                </span>
                <span className="text-[10px] text-slate-400 tracking-wider font-semibold uppercase block mt-1">
                  Car & Bike Rental Kanpur
                </span>
              </div>
            </Link>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-400 mt-2">
              Kanpur&apos;s premier mobility provider. Offering affordable local hourly car rentals, self-drive bikes & scooters, outstation cabs across UP, and customized Kanpur city tours.
            </p>
            <div className="flex space-x-3 pt-2">
              <a href={SITE_CONFIG.social.facebook} target="_blank" rel="noopener noreferrer" className="bg-primary-800 hover:bg-accent-500 p-2 rounded-lg transition-colors text-white" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href={SITE_CONFIG.social.instagram} target="_blank" rel="noopener noreferrer" className="bg-primary-800 hover:bg-accent-500 p-2 rounded-lg transition-colors text-white" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href={SITE_CONFIG.social.twitter} target="_blank" rel="noopener noreferrer" className="bg-primary-800 hover:bg-accent-500 p-2 rounded-lg transition-colors text-white" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href={SITE_CONFIG.social.youtube} target="_blank" rel="noopener noreferrer" className="bg-primary-800 hover:bg-accent-500 p-2 rounded-lg transition-colors text-white" aria-label="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold text-base mb-5 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1.5 left-0 w-8 h-0.5 bg-accent-500 rounded-full"></span>
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><Link href="/" className="hover:text-accent-400 transition-colors flex items-center before:content-['›'] before:mr-2 before:text-accent-400">Home</Link></li>
              <li><Link href="/cars" className="hover:text-accent-400 transition-colors flex items-center before:content-['›'] before:mr-2 before:text-accent-400">Our Cars Fleet</Link></li>
              <li><Link href="/bikes" className="hover:text-accent-400 transition-colors flex items-center before:content-['›'] before:mr-2 before:text-accent-400">Bikes & Scooters</Link></li>
              <li><Link href="/pricing" className="hover:text-accent-400 transition-colors flex items-center before:content-['›'] before:mr-2 before:text-accent-400 font-semibold text-white">Tariff & Pricing Chart</Link></li>
              <li><Link href="/tours" className="hover:text-accent-400 transition-colors flex items-center before:content-['›'] before:mr-2 before:text-accent-400">Kanpur Tours & Packages</Link></li>
              <li><Link href="/outstation" className="hover:text-accent-400 transition-colors flex items-center before:content-['›'] before:mr-2 before:text-accent-400">Outstation Routes</Link></li>
              <li><Link href="/about" className="hover:text-accent-400 transition-colors flex items-center before:content-['›'] before:mr-2 before:text-accent-400">About Us</Link></li>
              <li><Link href="/faq" className="hover:text-accent-400 transition-colors flex items-center before:content-['›'] before:mr-2 before:text-accent-400">FAQs</Link></li>
              <li><Link href="/contact" className="hover:text-accent-400 transition-colors flex items-center before:content-['›'] before:mr-2 before:text-accent-400">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-white font-bold text-base mb-5 relative inline-block">
              Our Services
              <span className="absolute -bottom-1.5 left-0 w-8 h-0.5 bg-accent-500 rounded-full"></span>
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><Link href="/services/local-car-rental" className="hover:text-accent-400 transition-colors flex items-center before:content-['›'] before:mr-2 before:text-accent-400">Local Car Rental (Hourly)</Link></li>
              <li><Link href="/services/bike-rental" className="hover:text-accent-400 transition-colors flex items-center before:content-['›'] before:mr-2 before:text-accent-400 font-medium text-accent-300">Bike & Scooter Rental</Link></li>
              <li><Link href="/services/outstation-cab" className="hover:text-accent-400 transition-colors flex items-center before:content-['›'] before:mr-2 before:text-accent-400">Outstation Cabs (One Way / Round)</Link></li>
              <li><Link href="/tours" className="hover:text-accent-400 transition-colors flex items-center before:content-['›'] before:mr-2 before:text-accent-400">Kanpur Sightseeing Tours</Link></li>
              <li><Link href="/services/corporate-car-rental" className="hover:text-accent-400 transition-colors flex items-center before:content-['›'] before:mr-2 before:text-accent-400">Corporate & B2B Travel</Link></li>
              <li><Link href="/booking" className="hover:text-accent-400 transition-colors flex items-center before:content-['›'] before:mr-2 before:text-accent-400">Online Booking & Enquiry</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-white font-bold text-base mb-5 relative inline-block">
              Kanpur Office
              <span className="absolute -bottom-1.5 left-0 w-8 h-0.5 bg-accent-500 rounded-full"></span>
            </h3>
            <ul className="space-y-3.5 text-xs sm:text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-accent-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">{SITE_CONFIG.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-accent-400 flex-shrink-0" />
                <a href={getPhoneLink(SITE_CONFIG.phone)} className="hover:text-white transition-colors text-white font-semibold">{SITE_CONFIG.phone}</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-accent-400 flex-shrink-0" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-white transition-colors">{SITE_CONFIG.email}</a>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-accent-400 flex-shrink-0" />
                <span className="text-slate-300">{SITE_CONFIG.workingHours} (Cars & Bikes)</span>
              </li>
            </ul>
          </div>
          
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-primary-800/60 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved. Registered in Kanpur, UP.</p>
          <div className="flex space-x-6">
            <Link href="/terms" className="hover:text-slate-200 transition-colors">Terms of Service</Link>
            <Link href="/privacy" className="hover:text-slate-200 transition-colors">Privacy Policy</Link>
            <Link href="/pricing" className="hover:text-slate-200 transition-colors">Tariff Card</Link>
            <Link href="/admin/login" className="hover:text-slate-200 transition-colors text-slate-500">Admin</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
