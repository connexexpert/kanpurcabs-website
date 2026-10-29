import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export function formatDate(date: Date | string): string {
  return new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function formatDateTime(date: Date | string): string {
  return new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function generateBookingId(): string {
  const prefix = "KD"; // Kanpur Drivers
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `${prefix}-${timestamp}-${random}`;
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + "...";
}

export function getWhatsAppLink(phone: string, message?: string): string {
  const cleanPhone = phone.replace(/[^\d+]/g, "");
  const baseUrl = `https://wa.me/${cleanPhone}`;
  if (message) {
    return `${baseUrl}?text=${encodeURIComponent(message)}`;
  }
  return baseUrl;
}

export function getPhoneLink(phone: string): string {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

export const SITE_CONFIG = {
  name: "KanpurDrivers",
  tagline: "Hire Verified Drivers for Your Car & Bike in Kanpur",
  description:
    "Hire professional, background-verified drivers on hourly, outstation, and monthly basis in Kanpur. Experienced chauffeurs for all manual and automatic cars, plus on-demand bike riders. Punctual, courteous, 24/7 service.",
  phone: "+91 98765 43210",
  whatsapp: "+919876543210",
  email: "info@kanpurdrivers.com",
  address: "Civil Lines, Near Mall Road, Kanpur, Uttar Pradesh 208001",
  city: "Kanpur",
  state: "Uttar Pradesh",
  url: "https://www.kanpurdrivers.com",
  social: {
    facebook: "https://facebook.com/kanpurdrivers",
    instagram: "https://instagram.com/kanpurdrivers",
    twitter: "https://twitter.com/kanpurdrivers",
    youtube: "https://youtube.com/@kanpurdrivers",
  },
  workingHours: "24/7 Dispatch Available",
  foundedYear: 2018,
} as const;

export const CAR_DRIVER_CATEGORIES = [
  { value: "hatchback", label: "Hatchback & Compact Car Driver", icon: "Car" },
  { value: "sedan", label: "Executive Sedan Chauffeur", icon: "Car" },
  { value: "suv", label: "SUV & 4x4 Highway Driver", icon: "Truck" },
  { value: "luxury", label: "Luxury & Automatic Car Chauffeur", icon: "Crown" },
  { value: "commercial", label: "Commercial & Heavy Vehicle Driver", icon: "Bus" },
] as const;

export const BIKE_RIDER_CATEGORIES = [
  { value: "scooter", label: "City Scooter Rider (Activa / Jupiter)", icon: "Bike" },
  { value: "commuter", label: "Commuter Motorcycle Rider (Splendor / Shine)", icon: "Bike" },
  { value: "sports", label: "Sports Bike Rider (Pulsar / Apache)", icon: "Bike" },
  { value: "cruiser", label: "Cruiser Rider (Royal Enfield Classic 350)", icon: "Bike" },
] as const;

export const TRIP_TYPES = [
  { value: "local_driver", label: "Local Hourly Driver (City Trips)" },
  { value: "outstation_driver", label: "Outstation Trip Driver (Highway)" },
  { value: "monthly_driver", label: "Monthly / Permanent Chauffeur" },
  { value: "bike_rider", label: "Two-Wheeler / Bike Rider" },
  { value: "night_drop", label: "Night Party / Safe Drop Driver" },
] as const;

export const SERVICE_TYPES = [
  { value: "local_driver", label: "Local Hourly Car Driver" },
  { value: "outstation_driver", label: "Outstation Trip Driver" },
  { value: "monthly_driver", label: "Monthly Personal Chauffeur" },
  { value: "bike_rider", label: "Two-Wheeler & Bike Rider" },
  { value: "night_drop", label: "Night Safe Drop Driver" },
  { value: "corporate_driver", label: "Corporate Fleet Driver Retainer" },
] as const;

export const LOCAL_DRIVER_PACKAGES = [
  { value: "4hr", label: "4 Hours Local Duty", hours: 4, rate: 400, otRate: 80 },
  { value: "8hr", label: "8 Hours Full Day Duty", hours: 8, rate: 700, otRate: 80 },
  { value: "12hr", label: "12 Hours Extended Duty", hours: 12, rate: 950, otRate: 100 },
] as const;

export const OUTSTATION_DRIVER_PACKAGES = [
  { value: "outstation_sameday", label: "Outstation Same Day (12h)", rate: 1000, allowance: 250 },
  { value: "outstation_stay", label: "Outstation Night Stay (Per Day)", rate: 1200, allowance: 400 },
] as const;

export const MONTHLY_DRIVER_PACKAGES = [
  { value: "monthly_8hr", label: "8 Hours / 26 Days Duty", hours: 8, rate: 15000 },
  { value: "monthly_10hr", label: "10 Hours / 26 Days Duty", hours: 10, rate: 18000 },
  { value: "monthly_12hr", label: "12 Hours / 26 Days Duty", hours: 12, rate: 21000 },
] as const;

export const BIKE_RIDER_PACKAGES = [
  { value: "2hr_quick", label: "2 Hours Quick Task Rider", hours: 2, rate: 199 },
  { value: "4hr_half", label: "4 Hours Half Day Rider", hours: 4, rate: 349 },
  { value: "8hr_full", label: "8 Hours Full Day Rider", hours: 8, rate: 599 },
] as const;

export const BOOKING_STATUSES = [
  { value: "new", label: "New", color: "blue" },
  { value: "confirmed", label: "Confirmed", color: "green" },
  { value: "driver_assigned", label: "Driver Assigned", color: "purple" },
  { value: "in_progress", label: "Trip In Progress", color: "yellow" },
  { value: "completed", label: "Duty Completed", color: "emerald" },
  { value: "cancelled", label: "Cancelled", color: "red" },
] as const;

export const KANPUR_AREAS = [
  "Civil Lines",
  "Swaroop Nagar",
  "Kakadeo",
  "Govind Nagar",
  "Kidwai Nagar",
  "Harsh Nagar",
  "Ashok Nagar",
  "Shastri Nagar",
  "Kalyanpur",
  "Rawatpur",
  "Chakeri",
  "Barra",
  "Panki",
  "Jajmau",
  "Arya Nagar",
  "Mall Road",
  "Phool Bagh",
  "Naubasta",
  "Vikas Nagar",
  "Transport Nagar",
  "Kanpur Central Area",
  "Govindpuri Area",
  "Chakeri Area",
  "GT Road",
  "Bithoor",
] as const;
