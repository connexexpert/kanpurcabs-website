"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Car,
  Bike,
  CheckCircle2,
  Info,
  ArrowRight,
  ShieldCheck,
  Clock,
  Moon,
  CalendarCheck,
  UserCheck,
  Sparkles,
  PhoneCall,
} from "lucide-react";
import { cn, SITE_CONFIG, getPhoneLink, getWhatsAppLink } from "@/lib/utils";

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState<"cars" | "bikes">("cars");

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200" id="pricing-section">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-primary-800 text-xs font-semibold px-3 py-1 rounded-full mb-3">
            <Clock className="w-3.5 h-3.5" /> 100% Transparent Driver Tariffs — Zero Hidden Charges
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-3">
            Transparent Driver & Rider Tariffs in Kanpur
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Hire police-verified, experienced chauffeurs for your personal car or on-demand riders for your two-wheeler. Customer provides the vehicle; you pay solely for professional driver duty.
          </p>
        </div>

        {/* Tab Switcher: Car Drivers vs Bike Riders */}
        <div className="flex justify-center mb-10">
          <div className="bg-white p-1.5 rounded-full border border-slate-200 shadow-sm flex items-center gap-1">
            <button
              onClick={() => setActiveTab("cars")}
              className={cn(
                "flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm transition-all",
                activeTab === "cars"
                  ? "bg-primary-900 text-white shadow"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              )}
            >
              <Car className="w-4 h-4" /> Car Driver Tariffs
            </button>
            <button
              onClick={() => setActiveTab("bikes")}
              className={cn(
                "flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm transition-all",
                activeTab === "bikes"
                  ? "bg-accent-500 text-white shadow"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              )}
            >
              <Bike className="w-4 h-4" /> Bike Rider Tariffs
            </button>
          </div>
        </div>

        {/* CAR DRIVER PRICING CONTENT */}
        {activeTab === "cars" && (
          <div className="space-y-10 max-w-5xl mx-auto">
            {/* Table 1: Local Hourly Driver Charges */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="bg-primary-900 text-white px-6 py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <div>
                  <h3 className="font-bold text-lg sm:text-xl">1. Local City Hourly Driver Charges (In Your Car)</h3>
                  <p className="text-xs text-blue-200">
                    For local city shopping, hospital visits, family functions, client meetings & daily errands across Kanpur
                  </p>
                </div>
                <span className="text-xs font-semibold bg-primary-800 text-accent-300 px-3 py-1 rounded-full border border-primary-700">
                  Manual & Automatic Cars
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700 font-semibold border-b border-slate-200">
                      <th className="py-3.5 px-4 sm:px-6">Package Duration</th>
                      <th className="py-3.5 px-4 text-center">Hatchback (Swift/i10/Tiago)</th>
                      <th className="py-3.5 px-4 text-center">Sedan (Dzire/Aura/City)</th>
                      <th className="py-3.5 px-4 text-center">SUV / MPV (Innova/Ertiga)</th>
                      <th className="py-3.5 px-4 text-center">Luxury (BMW/Audi/Mercedes)</th>
                      <th className="py-3.5 px-4 text-center">Overtime (Per Hr)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 sm:px-6 font-medium text-slate-900">
                        4 Hours Duty
                        <span className="block text-xs text-slate-500 font-normal">Quick errands & doctor visits</span>
                      </td>
                      <td className="py-3.5 px-4 text-center font-bold text-slate-900">₹400</td>
                      <td className="py-3.5 px-4 text-center font-bold text-slate-900">₹400</td>
                      <td className="py-3.5 px-4 text-center font-bold text-primary-800">₹450</td>
                      <td className="py-3.5 px-4 text-center font-bold text-slate-900">₹600</td>
                      <td className="py-3.5 px-4 text-center text-xs text-slate-600 font-medium">₹80/hr</td>
                    </tr>
                    <tr className="bg-blue-50/40 hover:bg-blue-50/70">
                      <td className="py-3.5 px-4 sm:px-6 font-medium text-slate-900">
                        8 Hours Duty
                        <span className="inline-block text-[11px] bg-accent-500 text-white font-bold px-2 py-0.5 rounded ml-1">
                          Most Popular
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-center font-bold text-slate-900">₹700</td>
                      <td className="py-3.5 px-4 text-center font-bold text-slate-900">₹700</td>
                      <td className="py-3.5 px-4 text-center font-bold text-primary-800">₹800</td>
                      <td className="py-3.5 px-4 text-center font-bold text-slate-900">₹1,100</td>
                      <td className="py-3.5 px-4 text-center text-xs text-slate-600 font-medium">₹80/hr</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 sm:px-6 font-medium text-slate-900">
                        12 Hours Extended Duty
                        <span className="block text-xs text-slate-500 font-normal">Weddings & full day city duty</span>
                      </td>
                      <td className="py-3.5 px-4 text-center font-bold text-slate-900">₹950</td>
                      <td className="py-3.5 px-4 text-center font-bold text-slate-900">₹950</td>
                      <td className="py-3.5 px-4 text-center font-bold text-primary-800">₹1,100</td>
                      <td className="py-3.5 px-4 text-center font-bold text-slate-900">₹1,500</td>
                      <td className="py-3.5 px-4 text-center text-xs text-slate-600 font-medium">₹100/hr</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-slate-50 px-6 py-3.5 border-t border-slate-200 text-xs text-slate-600 flex flex-wrap items-center justify-between gap-3">
                <span className="flex items-center gap-1.5 font-medium text-slate-700">
                  <Moon className="w-4 h-4 text-primary-800" />
                  <strong>Night Charge:</strong> ₹200 for duty running between 10:00 PM and 06:00 AM.
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" /> Doorstep arrival in 45-60 mins anywhere in Kanpur
                </span>
                <Link
                  href="/booking?serviceType=Local+Hourly+Car+Driver"
                  className="text-primary-800 font-bold hover:underline inline-flex items-center gap-1"
                >
                  Hire Local Driver <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Table 2: Outstation Highway Driver Charges */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="bg-slate-900 text-white px-6 py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <div>
                  <h3 className="font-bold text-lg sm:text-xl">2. Outstation Highway Driver Charges (In Your Car)</h3>
                  <p className="text-xs text-slate-300">
                    Experienced expressway & highway chauffeurs for Kanpur to Lucknow, Ayodhya, Delhi, Varanasi, Agra, and Prayagraj
                  </p>
                </div>
                <span className="text-xs font-semibold bg-slate-800 text-accent-300 px-3 py-1 rounded-full border border-slate-700">
                  Highway Certified
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700 font-semibold border-b border-slate-200">
                      <th className="py-3.5 px-4 sm:px-6">Trip Type</th>
                      <th className="py-3.5 px-4">Duty Window</th>
                      <th className="py-3.5 px-4 text-center">Driver Daily Fee</th>
                      <th className="py-3.5 px-4 text-center">Food Allowance (DA)</th>
                      <th className="py-3.5 px-4 text-center">Night Stay Allowance</th>
                      <th className="py-3.5 px-4 text-right pr-6">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 sm:px-6 font-medium text-slate-900">
                        Outstation Same-Day Return
                        <span className="block text-xs text-slate-500 font-normal">e.g. Kanpur to Lucknow/Ayodhya & return same day</span>
                      </td>
                      <td className="py-3.5 px-4 text-slate-600 text-xs">Up to 12 Hours duty</td>
                      <td className="py-3.5 px-4 text-center font-bold text-slate-900">₹1,000 / day</td>
                      <td className="py-3.5 px-4 text-center text-xs font-medium text-slate-600">₹250 / day</td>
                      <td className="py-3.5 px-4 text-center text-xs text-slate-400">N/A (Returned)</td>
                      <td className="py-3.5 px-4 text-right pr-6">
                        <Link
                          href="/booking?serviceType=Outstation+Trip+Driver&package=outstation_sameday"
                          className="text-xs font-bold text-primary-800 hover:text-primary-900 bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-200"
                        >
                          Book Driver
                        </Link>
                      </td>
                    </tr>
                    <tr className="bg-slate-50/50 hover:bg-slate-50">
                      <td className="py-3.5 px-4 sm:px-6 font-medium text-slate-900">
                        Outstation Multi-Day / Night Stay
                        <span className="block text-xs text-slate-500 font-normal">e.g. Kanpur to Delhi, Agra, Varanasi, Rajasthan tour</span>
                      </td>
                      <td className="py-3.5 px-4 text-slate-600 text-xs">Per Calendar Day (24 hrs)</td>
                      <td className="py-3.5 px-4 text-center font-bold text-primary-800">₹1,200 / day</td>
                      <td className="py-3.5 px-4 text-center text-xs font-medium text-slate-600">Included in Stay DA</td>
                      <td className="py-3.5 px-4 text-center text-xs font-bold text-accent-600">₹400 / night</td>
                      <td className="py-3.5 px-4 text-right pr-6">
                        <Link
                          href="/booking?serviceType=Outstation+Trip+Driver&package=outstation_stay"
                          className="text-xs font-bold text-white bg-primary-900 hover:bg-primary-950 px-3 py-1.5 rounded-lg"
                        >
                          Book Driver
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-slate-50 px-6 py-3.5 border-t border-slate-200 text-xs text-slate-600 flex flex-wrap items-center justify-between gap-3">
                <span className="flex items-center gap-1.5">
                  <Info className="w-4 h-4 text-blue-600" />
                  <strong>Customer Responsibility:</strong> Fuel, toll taxes, state border road taxes & parking charges are directly paid by the customer.
                </span>
                <span className="text-emerald-700 font-medium">Over 10+ yrs highway-tested drivers</span>
              </div>
            </div>

            {/* Table 3: Monthly Permanent Driver Packages */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-900 to-primary-900 text-white px-6 py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <div>
                  <h3 className="font-bold text-lg sm:text-xl">3. Monthly Permanent Chauffeur Packages (For Your Personal Car)</h3>
                  <p className="text-xs text-blue-200">
                    Dedicated, background-verified personal chauffeurs for families, doctors, corporate directors & business owners
                  </p>
                </div>
                <span className="text-xs font-semibold bg-accent-500 text-white px-3 py-1 rounded-full">
                  Guaranteed Replacement
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700 font-semibold border-b border-slate-200">
                      <th className="py-3.5 px-4 sm:px-6">Monthly Plan</th>
                      <th className="py-3.5 px-4">Daily Working Hours</th>
                      <th className="py-3.5 px-4">Monthly Working Days</th>
                      <th className="py-3.5 px-4 text-center">Monthly Driver Salary</th>
                      <th className="py-3.5 px-4 text-center">Overtime Rate</th>
                      <th className="py-3.5 px-4 text-right pr-6">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 sm:px-6 font-medium text-slate-900">
                        8 Hours Daily Plan
                        <span className="block text-xs text-slate-500 font-normal">Ideal for regular office commute & school drops</span>
                      </td>
                      <td className="py-3.5 px-4 text-slate-600 text-xs">8 Hours / Day</td>
                      <td className="py-3.5 px-4 text-slate-600 text-xs">26 Days (4 Sundays off)</td>
                      <td className="py-3.5 px-4 text-center font-bold text-slate-900">₹15,000 / month</td>
                      <td className="py-3.5 px-4 text-center text-xs text-slate-600">₹70 / hour</td>
                      <td className="py-3.5 px-4 text-right pr-6">
                        <Link
                          href="/booking?serviceType=Monthly+Personal+Chauffeur&package=monthly_8hr"
                          className="text-xs font-bold text-primary-800 bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-200"
                        >
                          Inquire Plan
                        </Link>
                      </td>
                    </tr>
                    <tr className="bg-blue-50/30 hover:bg-blue-50/60">
                      <td className="py-3.5 px-4 sm:px-6 font-medium text-slate-900">
                        10 Hours Daily Plan
                        <span className="block text-xs text-slate-500 font-normal">Best for business owners, factory visits & long workdays</span>
                      </td>
                      <td className="py-3.5 px-4 text-slate-600 text-xs">10 Hours / Day</td>
                      <td className="py-3.5 px-4 text-slate-600 text-xs">26 Days (4 Sundays off)</td>
                      <td className="py-3.5 px-4 text-center font-bold text-primary-800">₹18,000 / month</td>
                      <td className="py-3.5 px-4 text-center text-xs text-slate-600">₹70 / hour</td>
                      <td className="py-3.5 px-4 text-right pr-6">
                        <Link
                          href="/booking?serviceType=Monthly+Personal+Chauffeur&package=monthly_10hr"
                          className="text-xs font-bold text-white bg-primary-900 hover:bg-primary-950 px-3 py-1.5 rounded-lg"
                        >
                          Inquire Plan
                        </Link>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 sm:px-6 font-medium text-slate-900">
                        12 Hours Comprehensive Plan
                        <span className="block text-xs text-slate-500 font-normal">Full-time family chauffeur coverage</span>
                      </td>
                      <td className="py-3.5 px-4 text-slate-600 text-xs">12 Hours / Day</td>
                      <td className="py-3.5 px-4 text-slate-600 text-xs">26 Days (4 Sundays off)</td>
                      <td className="py-3.5 px-4 text-center font-bold text-slate-900">₹21,000 / month</td>
                      <td className="py-3.5 px-4 text-center text-xs text-slate-600">₹80 / hour</td>
                      <td className="py-3.5 px-4 text-right pr-6">
                        <Link
                          href="/booking?serviceType=Monthly+Personal+Chauffeur&package=monthly_12hr"
                          className="text-xs font-bold text-primary-800 bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-200"
                        >
                          Inquire Plan
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-slate-50 px-6 py-3.5 border-t border-slate-200 text-xs text-slate-600 flex flex-wrap items-center justify-between gap-3">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <strong>Included Benefits:</strong> Police verification certificate, trial day available, immediate backup chauffeur in case of driver sickness or leave.
                </span>
                <a href={getPhoneLink(SITE_CONFIG.phone)} className="text-primary-800 font-bold hover:underline">
                  Talk to Monthly Coordinator: {SITE_CONFIG.phone}
                </a>
              </div>
            </div>
          </div>
        )}

        {/* BIKE RIDER PRICING CONTENT */}
        {activeTab === "bikes" && (
          <div className="space-y-10 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="bg-gradient-to-r from-orange-600 to-amber-600 text-white px-6 py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <div>
                  <h3 className="font-bold text-lg sm:text-xl">Two-Wheeler & Bike Riders on Demand (In Your Two-Wheeler)</h3>
                  <p className="text-xs text-orange-100">
                    Hire certified riders to navigate your scooter or motorcycle for urgent city errands, courier delivery, or safe ride home
                  </p>
                </div>
                <span className="text-xs font-semibold bg-white/20 text-white px-3 py-1 rounded-full border border-white/20">
                  Starts @ ₹199
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700 font-semibold border-b border-slate-200">
                      <th className="py-3.5 px-4 sm:px-6">Rider Service Package</th>
                      <th className="py-3.5 px-4">Duty Duration</th>
                      <th className="py-3.5 px-4 text-center">Package Fee</th>
                      <th className="py-3.5 px-4 text-center">Overtime Rate</th>
                      <th className="py-3.5 px-4">Ideal Use Case</th>
                      <th className="py-3.5 px-4 text-right pr-6">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 sm:px-6 font-medium text-slate-900">
                        2 Hours Quick Task Rider
                      </td>
                      <td className="py-3.5 px-4 text-slate-600 text-xs">2 Hours Duty</td>
                      <td className="py-3.5 px-4 text-center font-bold text-slate-900">₹199</td>
                      <td className="py-3.5 px-4 text-center text-xs font-medium text-slate-600">₹50 / hr</td>
                      <td className="py-3.5 px-4 text-xs text-slate-600">
                        Bank tasks, urgent document courier drop, medical prescription pickup
                      </td>
                      <td className="py-3.5 px-4 text-right pr-6">
                        <Link
                          href="/booking?serviceType=Two-Wheeler+%26+Bike+Rider&package=2hr_quick"
                          className="text-xs font-bold text-orange-600 bg-orange-50 px-3 py-1.5 rounded-lg border border-orange-200"
                        >
                          Hire Rider
                        </Link>
                      </td>
                    </tr>
                    <tr className="bg-orange-50/30 hover:bg-orange-50/60">
                      <td className="py-3.5 px-4 sm:px-6 font-medium text-slate-900">
                        4 Hours Half-Day Rider
                        <span className="inline-block text-[10px] bg-orange-500 text-white font-bold px-1.5 py-0.5 rounded ml-1">
                          Popular
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-slate-600 text-xs">4 Hours Duty</td>
                      <td className="py-3.5 px-4 text-center font-bold text-orange-600">₹349</td>
                      <td className="py-3.5 px-4 text-center text-xs font-medium text-slate-600">₹50 / hr</td>
                      <td className="py-3.5 px-4 text-xs text-slate-600">
                        Multi-stop market shopping, multiple client deliveries across Kanpur
                      </td>
                      <td className="py-3.5 px-4 text-right pr-6">
                        <Link
                          href="/booking?serviceType=Two-Wheeler+%26+Bike+Rider&package=4hr_half"
                          className="text-xs font-bold text-white bg-orange-600 hover:bg-orange-700 px-3 py-1.5 rounded-lg"
                        >
                          Hire Rider
                        </Link>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 sm:px-6 font-medium text-slate-900">
                        8 Hours Full-Day Rider
                      </td>
                      <td className="py-3.5 px-4 text-slate-600 text-xs">8 Hours Duty</td>
                      <td className="py-3.5 px-4 text-center font-bold text-slate-900">₹599</td>
                      <td className="py-3.5 px-4 text-center text-xs font-medium text-slate-600">₹60 / hr</td>
                      <td className="py-3.5 px-4 text-xs text-slate-600">
                        Full-day dedicated pilot for field executives, surveyors, or city delivery runs
                      </td>
                      <td className="py-3.5 px-4 text-right pr-6">
                        <Link
                          href="/booking?serviceType=Two-Wheeler+%26+Bike+Rider&package=8hr_full"
                          className="text-xs font-bold text-orange-600 bg-orange-50 px-3 py-1.5 rounded-lg border border-orange-200"
                        >
                          Hire Rider
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-slate-50 px-6 py-3.5 border-t border-slate-200 text-xs text-slate-600 flex flex-wrap items-center justify-between gap-3">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  All riders hold valid two-wheeler commercial DL, helmet compliance, and clean police track record.
                </span>
                <span className="font-semibold text-slate-700">Doorstep rider dispatch within 30-45 mins</span>
              </div>
            </div>

            {/* Rider Specializations Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                  <Bike className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 mb-2">Scooter & Moped Pilots</h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Expert handling of Honda Activa, TVS Jupiter, Suzuki Access for quick, congestion-free navigation through tight Kanpur bazaars like Gumti No. 5 and Naveen Market.
                </p>
                <span className="text-xs font-bold text-orange-600">From ₹199 (2 Hours)</span>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                  <Clock className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 mb-2">Urgent City Errand Riders</h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Hire a dedicated rider to collect cheques, legal paperwork, medicines, keys, or parcel packages while you focus on your work or family time.
                </p>
                <span className="text-xs font-bold text-blue-600">Doorstep in 45 Mins</span>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 mb-2">Safe Recovery & Home Pilot</h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Feeling unwell, exhausted after a long shift, or had dental surgery? Our verified rider will ride your two-wheeler safely to your home with you as pillion.
                </p>
                <span className="text-xs font-bold text-emerald-600">100% Safe & Reliable</span>
              </div>
            </div>
          </div>
        )}

        {/* Essential Tariff Policies Card */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm max-w-5xl mx-auto">
          <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Info className="w-5 h-5 text-primary-800" /> Standard Driver Hire Terms & Conditions
          </h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs text-slate-600">
            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100">
              <span className="font-bold text-slate-900 block mb-1">Customer Vehicle & Fuel</span>
              All driver and rider services are executed on the vehicle provided by the customer. Customer is responsible for fuel and vehicle condition.
            </div>
            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100">
              <span className="font-bold text-slate-900 block mb-1">Toll, State Tax & Parking</span>
              For local and outstation trips, all actual toll plaza taxes, parking receipts, and state permits are paid directly by the client.
            </div>
            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100">
              <span className="font-bold text-slate-900 block mb-1">Night Duty Charges</span>
              A flat night allowance of ₹200 applies if any part of the driver duty falls between 10:00 PM and 06:00 AM.
            </div>
            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100">
              <span className="font-bold text-slate-900 block mb-1">Punctual Arrival</span>
              Drivers arrive in uniform with original ID and commercial driving license. Contact dispatch anytime at +91 98765 43210.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
