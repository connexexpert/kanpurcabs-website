import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail, Clock, Car } from "lucide-react";
import { SITE_CONFIG, getPhoneLink } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-primary-900 to-primary-950 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Brand */}
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center space-x-2 text-white">
              <Car className="w-8 h-8 text-accent-500" />
              <span className="font-bold text-2xl tracking-tight">{SITE_CONFIG.name}</span>
            </Link>
            <p className="text-sm leading-relaxed mt-4 mb-6">
              {SITE_CONFIG.description}
            </p>
            <div className="flex space-x-4">
              <a href={SITE_CONFIG.social.facebook} target="_blank" rel="noopener noreferrer" className="bg-primary-800 hover:bg-accent-500 p-2 rounded-full transition-colors text-white">
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href={SITE_CONFIG.social.instagram} target="_blank" rel="noopener noreferrer" className="bg-primary-800 hover:bg-accent-500 p-2 rounded-full transition-colors text-white">
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href={SITE_CONFIG.social.twitter} target="_blank" rel="noopener noreferrer" className="bg-primary-800 hover:bg-accent-500 p-2 rounded-full transition-colors text-white">
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href={SITE_CONFIG.social.youtube} target="_blank" rel="noopener noreferrer" className="bg-primary-800 hover:bg-accent-500 p-2 rounded-full transition-colors text-white">
                <Youtube className="w-5 h-5" />
                <span className="sr-only">Youtube</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-accent-500 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-accent-500 transition-colors flex items-center before:content-['›'] before:mr-2 before:text-accent-500">Home</Link></li>
              <li><Link href="/about" className="hover:text-accent-500 transition-colors flex items-center before:content-['›'] before:mr-2 before:text-accent-500">About Us</Link></li>
              <li><Link href="/cars" className="hover:text-accent-500 transition-colors flex items-center before:content-['›'] before:mr-2 before:text-accent-500">Our Cars</Link></li>
              <li><Link href="/services" className="hover:text-accent-500 transition-colors flex items-center before:content-['›'] before:mr-2 before:text-accent-500">Services</Link></li>
              <li><Link href="/tours" className="hover:text-accent-500 transition-colors flex items-center before:content-['›'] before:mr-2 before:text-accent-500">Tours & Packages</Link></li>
              <li><Link href="/faq" className="hover:text-accent-500 transition-colors flex items-center before:content-['›'] before:mr-2 before:text-accent-500">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-accent-500 transition-colors flex items-center before:content-['›'] before:mr-2 before:text-accent-500">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              Our Services
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-accent-500 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              <li><Link href="/services/local-rental" className="hover:text-accent-500 transition-colors flex items-center before:content-['›'] before:mr-2 before:text-accent-500">Local Car Rental</Link></li>
              <li><Link href="/services/outstation" className="hover:text-accent-500 transition-colors flex items-center before:content-['›'] before:mr-2 before:text-accent-500">Outstation Cabs</Link></li>
              <li><Link href="/services/airport-transfer" className="hover:text-accent-500 transition-colors flex items-center before:content-['›'] before:mr-2 before:text-accent-500">Airport Transfer</Link></li>
              <li><Link href="/services/sightseeing" className="hover:text-accent-500 transition-colors flex items-center before:content-['›'] before:mr-2 before:text-accent-500">Sightseeing Tours</Link></li>
              <li><Link href="/services/corporate" className="hover:text-accent-500 transition-colors flex items-center before:content-['›'] before:mr-2 before:text-accent-500">Corporate Rental</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              Contact Info
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-accent-500 rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent-500 flex-shrink-0 mt-1" />
                <span>{SITE_CONFIG.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent-500 flex-shrink-0" />
                <a href={getPhoneLink(SITE_CONFIG.phone)} className="hover:text-white transition-colors">{SITE_CONFIG.phone}</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent-500 flex-shrink-0" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-white transition-colors">{SITE_CONFIG.email}</a>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-accent-500 flex-shrink-0" />
                <span>{SITE_CONFIG.workingHours}</span>
              </li>
            </ul>
          </div>
          
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-primary-800 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
