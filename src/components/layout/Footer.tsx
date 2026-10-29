import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail, Clock, UserCheck, ShieldCheck } from "lucide-react";
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
                <UserCheck className="w-7 h-7" />
              </div>
              <div>
                <span className="font-extrabold text-2xl tracking-tight text-white block leading-none">
                  Kanpur<span className="text-accent-400">Drivers</span>
                </span>
                <span className="text-[10px] text-slate-400 tracking-wider font-semibold uppercase block mt-1">
                  Verified Drivers for Your Vehicle
                </span>
              </div>
            </Link>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-400 mt-2">
              Kanpur&apos;s leading on-demand and monthly driver partner network. Hire background-verified, professional chauffeurs for your car (local hourly, outstations, permanent) and certified riders for your two-wheeler.
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
              <li><Link href="/pricing" className="hover:text-accent-400 transition-colors flex items-center before:content-['›'] before:mr-2 before:text-accent-400 font-semibold text-white">Driver Tariffs & Rates</Link></li>
              <li><Link href="/cars" className="hover:text-accent-400 transition-colors flex items-center before:content-['›'] before:mr-2 before:text-accent-400">Drivers by Car Model</Link></li>
              <li><Link href="/bikes" className="hover:text-accent-400 transition-colors flex items-center before:content-['›'] before:mr-2 before:text-accent-400">Two-Wheeler Riders</Link></li>
              <li><Link href="/services" className="hover:text-accent-400 transition-colors flex items-center before:content-['›'] before:mr-2 before:text-accent-400">All Driver Services</Link></li>
              <li><Link href="/tours" className="hover:text-accent-400 transition-colors flex items-center before:content-['›'] before:mr-2 before:text-accent-400">Tour & Pilgrimage Chauffeurs</Link></li>
              <li><Link href="/outstation" className="hover:text-accent-400 transition-colors flex items-center before:content-['›'] before:mr-2 before:text-accent-400">Highway & Outstation Routes</Link></li>
              <li><Link href="/about" className="hover:text-accent-400 transition-colors flex items-center before:content-['›'] before:mr-2 before:text-accent-400">About Our Drivers</Link></li>
              <li><Link href="/contact" className="hover:text-accent-400 transition-colors flex items-center before:content-['›'] before:mr-2 before:text-accent-400">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Driver Services */}
          <div>
            <h3 className="text-white font-bold text-base mb-5 relative inline-block">
              Driver Services
              <span className="absolute -bottom-1.5 left-0 w-8 h-0.5 bg-accent-500 rounded-full"></span>
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><Link href="/services/local-car-rental" className="hover:text-accent-400 transition-colors flex items-center before:content-['›'] before:mr-2 before:text-accent-400">Local Hourly Car Driver (4h, 8h, 12h)</Link></li>
              <li><Link href="/services/outstation-cab" className="hover:text-accent-400 transition-colors flex items-center before:content-['›'] before:mr-2 before:text-accent-400">Outstation Highway Chauffeur</Link></li>
              <li><Link href="/services/corporate-car-rental" className="hover:text-accent-400 transition-colors flex items-center before:content-['›'] before:mr-2 before:text-accent-400">Monthly / Permanent Driver Hire</Link></li>
              <li><Link href="/services/bike-rental" className="hover:text-accent-400 transition-colors flex items-center before:content-['›'] before:mr-2 before:text-accent-400 font-medium text-accent-300">Bike & Scooter Rider on Demand</Link></li>
              <li><Link href="/tours" className="hover:text-accent-400 transition-colors flex items-center before:content-['›'] before:mr-2 before:text-accent-400">Kanpur Sightseeing Tour Chauffeur</Link></li>
              <li><Link href="/booking" className="hover:text-accent-400 transition-colors flex items-center before:content-['›'] before:mr-2 before:text-accent-400">Hire a Driver Online</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-white font-bold text-base mb-5 relative inline-block">
              Kanpur Driver Hub
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
                <span className="text-slate-300">24/7 Dispatch • 45-Min Arrival</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-primary-800/80 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved. Kanpur&apos;s #1 Driver Network.</p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/pricing" className="hover:text-white transition-colors">Pricing Tariff</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Driver Helpline</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
