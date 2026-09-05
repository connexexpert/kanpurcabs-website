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
  const prefix = "KC";
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
  name: "KanpurCabs",
  tagline: "Reliable Car Rental & Tourism Services in Kanpur",
  description:
    "Book affordable car rentals, outstation cabs, airport transfers, and sightseeing tours in Kanpur. Professional drivers, well-maintained cars, 24/7 service.",
  phone: "+91 98765 43210",
  whatsapp: "+919876543210",
  email: "info@kanpurcabs.com",
  address: "Civil Lines, Kanpur, Uttar Pradesh 208001",
  city: "Kanpur",
  state: "Uttar Pradesh",
  url: "https://www.kanpurcabs.com",
  social: {
    facebook: "https://facebook.com/kanpurcabs",
    instagram: "https://instagram.com/kanpurcabs",
    twitter: "https://twitter.com/kanpurcabs",
    youtube: "https://youtube.com/@kanpurcabs",
  },
  workingHours: "24/7 Available",
  foundedYear: 2015,
} as const;

export const CAR_CATEGORIES = [
  { value: "hatchback", label: "Hatchback", icon: "Car" },
  { value: "sedan", label: "Sedan", icon: "Car" },
  { value: "suv", label: "SUV", icon: "Truck" },
  { value: "luxury", label: "Luxury", icon: "Crown" },
  { value: "tempo_traveller", label: "Tempo Traveller", icon: "Bus" },
] as const;

export const TRIP_TYPES = [
  { value: "one_way", label: "One Way" },
  { value: "round_trip", label: "Round Trip" },
  { value: "local", label: "Local Rental" },
  { value: "airport", label: "Airport Transfer" },
  { value: "tour", label: "Tour / Sightseeing" },
] as const;

export const SERVICE_TYPES = [
  { value: "local_rental", label: "Local Car Rental" },
  { value: "outstation", label: "Outstation Cab" },
  { value: "airport_transfer", label: "Airport Transfer" },
  { value: "railway_transfer", label: "Railway Station Transfer" },
  { value: "sightseeing", label: "Sightseeing Tour" },
  { value: "corporate", label: "Corporate Car Rental" },
  { value: "wedding", label: "Wedding Car Rental" },
] as const;

export const LOCAL_PACKAGES = [
  { value: "4hr_40km", label: "4 Hours / 40 KMs", hours: 4, kms: 40 },
  { value: "8hr_80km", label: "8 Hours / 80 KMs", hours: 8, kms: 80 },
  { value: "12hr_120km", label: "12 Hours / 120 KMs", hours: 12, kms: 120 },
] as const;

export const BOOKING_STATUSES = [
  { value: "new", label: "New", color: "blue" },
  { value: "confirmed", label: "Confirmed", color: "green" },
  { value: "in_progress", label: "In Progress", color: "yellow" },
  { value: "completed", label: "Completed", color: "emerald" },
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
  "Kanpur Central Station",
  "Govindpuri Railway Station",
  "Kanpur Airport (Chakeri)",
  "GT Road",
  "Bithoor",
] as const;
