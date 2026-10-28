"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Car, Bike, CheckCircle2, Info, ArrowRight, ShieldCheck, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState<"cars" | "bikes">("cars");

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-primary-800 text-xs font-semibold px-3 py-1 rounded-full mb-3">
            <Clock className="w-3.5 h-3.5" /> 100% Transparent Tariff — Zero Hidden Costs
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-3">
            Transparent Rental Pricing for Kanpur
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            No surge pricing, no surprise fees. Review our standard hourly and outstation tariffs for cars and two-wheelers.
          </p>
        </div>

        {/* Tab Switcher: Cars vs Bikes */}
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
              <Car className="w-4 h-4" /> Car Rental Tariff
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
              <Bike className="w-4 h-4" /> Bike & Scooter Tariff
            </button>
          </div>
        </div>

        {/* CAR PRICING CONTENT */}
        {activeTab === "cars" && (
          <div className="space-y-10 max-w-5xl mx-auto">
            {/* Table 1: Local Hourly Trip Charges */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="bg-primary-900 text-white px-6 py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <div>
                  <h3 className="font-bold text-lg sm:text-xl">Local City Rental Charges (Kanpur)</h3>
                  <p className="text-xs text-blue-200">Ideal for shopping, local meetings, hospital visits & city errands</p>
                </div>
                <span className="text-xs font-semibold bg-primary-800 text-accent-300 px-3 py-1 rounded-full border border-primary-700">
                  Includes Chauffeur & Fuel
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700 font-semibold border-b border-slate-200">
                      <th className="py-3.5 px-4 sm:px-6">Package Duration</th>
                      <th className="py-3.5 px-4 text-center">Hatchback (Swift/i20)</th>
                      <th className="py-3.5 px-4 text-center">Sedan (Dzire/Aura)</th>
                      <th className="py-3.5 px-4 text-center">SUV (Innova/Ertiga)</th>
                      <th className="py-3.5 px-4 text-center">Tempo (12-Seater)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 sm:px-6 font-medium text-slate-900">
                        4 Hours / 40 KMs
                      </td>
                      <td className="py-3.5 px-4 text-center font-bold text-slate-900">₹1,200</td>
                      <td className="py-3.5 px-4 text-center font-bold text-slate-900">₹1,400</td>
                      <td className="py-3.5 px-4 text-center font-bold text-primary-800">₹2,000</td>
                      <td className="py-3.5 px-4 text-center font-bold text-slate-900">₹3,200</td>
                    </tr>
                    <tr className="bg-slate-50/50 hover:bg-slate-50">
                      <td className="py-3.5 px-4 sm:px-6 font-medium text-slate-900">
                        8 Hours / 80 KMs <span className="text-xs text-accent-600 font-bold ml-1">(Popular)</span>
                      </td>
                      <td className="py-3.5 px-4 text-center font-bold text-slate-900">₹2,000</td>
                      <td className="py-3.5 px-4 text-center font-bold text-slate-900">₹2,400</td>
                      <td className="py-3.5 px-4 text-center font-bold text-primary-800">₹3,400</td>
                      <td className="py-3.5 px-4 text-center font-bold text-slate-900">₹5,200</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 sm:px-6 font-medium text-slate-900">
                        12 Hours / 120 KMs (Full Day)
                      </td>
                      <td className="py-3.5 px-4 text-center font-bold text-slate-900">₹2,800</td>
                      <td className="py-3.5 px-4 text-center font-bold text-slate-900">₹3,200</td>
                      <td className="py-3.5 px-4 text-center font-bold text-primary-800">₹4,500</td>
                      <td className="py-3.5 px-4 text-center font-bold text-slate-900">₹6,800</td>
                    </tr>
                    <tr className="bg-slate-50/50 hover:bg-slate-50 text-xs">
                      <td className="py-3 px-4 sm:px-6 font-medium text-slate-600">
                        Per Hour Overtime
                      </td>
                      <td className="py-3 px-4 text-center text-slate-800 font-semibold">₹120/hr</td>
                      <td className="py-3 px-4 text-center text-slate-800 font-semibold">₹150/hr</td>
                      <td className="py-3 px-4 text-center text-slate-800 font-semibold">₹200/hr</td>
                      <td className="py-3 px-4 text-center text-slate-800 font-semibold">₹300/hr</td>
                    </tr>
                    <tr className="hover:bg-slate-50 text-xs">
                      <td className="py-3 px-4 sm:px-6 font-medium text-slate-600">
                        Extra Distance Charge
                      </td>
                      <td className="py-3 px-4 text-center text-slate-800 font-semibold">₹11/km</td>
                      <td className="py-3 px-4 text-center text-slate-800 font-semibold">₹12/km</td>
                      <td className="py-3 px-4 text-center text-slate-800 font-semibold">₹16/km</td>
                      <td className="py-3 px-4 text-center text-slate-800 font-semibold">₹24/km</td>
                    </tr>
                    <tr className="bg-slate-50/50 hover:bg-slate-50 text-xs">
                      <td className="py-3 px-4 sm:px-6 font-medium text-slate-600">
                        Night Allowance (10:00 PM – 06:00 AM)
                      </td>
                      <td className="py-3 px-4 text-center text-slate-800">₹250</td>
                      <td className="py-3 px-4 text-center text-slate-800">₹250</td>
                      <td className="py-3 px-4 text-center text-slate-800">₹300</td>
                      <td className="py-3 px-4 text-center text-slate-800">₹400</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table 2: Outstation Trip Charges */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="bg-slate-900 text-white px-6 py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <div>
                  <h3 className="font-bold text-lg sm:text-xl">Outstation Trip Charges (One-Way & Round-Trip)</h3>
                  <p className="text-xs text-slate-300">From Kanpur to Lucknow, Agra, Ayodhya, Varanasi, Delhi, Prayagraj & beyond</p>
                </div>
                <span className="text-xs font-semibold bg-slate-800 text-emerald-400 px-3 py-1 rounded-full border border-slate-700">
                  Minimum 250 km / Day
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700 font-semibold border-b border-slate-200">
                      <th className="py-3.5 px-4 sm:px-6">Particulars</th>
                      <th className="py-3.5 px-4 text-center">Hatchback</th>
                      <th className="py-3.5 px-4 text-center">Sedan (Dzire)</th>
                      <th className="py-3.5 px-4 text-center">SUV (Innova/Ertiga)</th>
                      <th className="py-3.5 px-4 text-center">Innova Crysta</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 sm:px-6 font-medium text-slate-900">
                        Outstation Per Km Rate
                      </td>
                      <td className="py-3.5 px-4 text-center font-bold text-slate-900">₹10/km</td>
                      <td className="py-3.5 px-4 text-center font-bold text-slate-900">₹11/km</td>
                      <td className="py-3.5 px-4 text-center font-bold text-slate-900">₹15/km</td>
                      <td className="py-3.5 px-4 text-center font-bold text-primary-800">₹18/km</td>
                    </tr>
                    <tr className="bg-slate-50/50 hover:bg-slate-50">
                      <td className="py-3.5 px-4 sm:px-6 font-medium text-slate-900">
                        Driver Daily Allowance (DA / Food)
                      </td>
                      <td className="py-3.5 px-4 text-center font-semibold text-slate-800">₹300/day</td>
                      <td className="py-3.5 px-4 text-center font-semibold text-slate-800">₹300/day</td>
                      <td className="py-3.5 px-4 text-center font-semibold text-slate-800">₹350/day</td>
                      <td className="py-3.5 px-4 text-center font-semibold text-slate-800">₹400/day</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 sm:px-6 font-medium text-slate-900">
                        Night Halting Charge (Outstation Stay)
                      </td>
                      <td className="py-3.5 px-4 text-center font-semibold text-slate-800">₹250/night</td>
                      <td className="py-3.5 px-4 text-center font-semibold text-slate-800">₹250/night</td>
                      <td className="py-3.5 px-4 text-center font-semibold text-slate-800">₹300/night</td>
                      <td className="py-3.5 px-4 text-center font-semibold text-slate-800">₹350/night</td>
                    </tr>
                    <tr className="bg-slate-50/50 hover:bg-slate-50 text-xs">
                      <td className="py-3 px-4 sm:px-6 font-medium text-slate-600">
                        Tolls, Parking & State Border Taxes
                      </td>
                      <td colSpan={4} className="py-3 px-4 text-center text-slate-600 font-medium">
                        Billed as per actual Fastag receipts. No extra commissions.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* BIKE PRICING CONTENT */}
        {activeTab === "bikes" && (
          <div className="space-y-10 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="bg-primary-900 text-white px-6 py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <div>
                  <h3 className="font-bold text-lg sm:text-xl">Two-Wheeler Rental Rate Chart (Kanpur)</h3>
                  <p className="text-xs text-blue-200">Self-drive scooters and motorbikes for flexible city riding</p>
                </div>
                <span className="text-xs font-semibold bg-accent-500 text-white px-3 py-1 rounded-full">
                  Free Helmet & Insurance Included
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700 font-semibold border-b border-slate-200">
                      <th className="py-3.5 px-4 sm:px-6">Package Duration</th>
                      <th className="py-3.5 px-4 text-center">Scooters (Activa/Jupiter)</th>
                      <th className="py-3.5 px-4 text-center">Commuter (Splendor/Shine)</th>
                      <th className="py-3.5 px-4 text-center">Sports (Pulsar/Apache)</th>
                      <th className="py-3.5 px-4 text-center">Cruiser (Classic 350)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 sm:px-6 font-medium text-slate-900">
                        4 Hours (40 km limit)
                      </td>
                      <td className="py-3.5 px-4 text-center font-bold text-slate-900">₹250</td>
                      <td className="py-3.5 px-4 text-center font-bold text-slate-900">₹250</td>
                      <td className="py-3.5 px-4 text-center font-bold text-slate-900">₹350</td>
                      <td className="py-3.5 px-4 text-center font-bold text-primary-800">₹600</td>
                    </tr>
                    <tr className="bg-slate-50/50 hover:bg-slate-50">
                      <td className="py-3.5 px-4 sm:px-6 font-medium text-slate-900">
                        8 Hours (80 km limit)
                      </td>
                      <td className="py-3.5 px-4 text-center font-bold text-slate-900">₹400</td>
                      <td className="py-3.5 px-4 text-center font-bold text-slate-900">₹400</td>
                      <td className="py-3.5 px-4 text-center font-bold text-slate-900">₹550</td>
                      <td className="py-3.5 px-4 text-center font-bold text-primary-800">₹950</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 sm:px-6 font-medium text-slate-900">
                        12 Hours (120 km limit)
                      </td>
                      <td className="py-3.5 px-4 text-center font-bold text-slate-900">₹500</td>
                      <td className="py-3.5 px-4 text-center font-bold text-slate-900">₹500</td>
                      <td className="py-3.5 px-4 text-center font-bold text-slate-900">₹700</td>
                      <td className="py-3.5 px-4 text-center font-bold text-primary-800">₹1,200</td>
                    </tr>
                    <tr className="bg-slate-50/50 hover:bg-slate-50">
                      <td className="py-3.5 px-4 sm:px-6 font-medium text-slate-900">
                        24 Hours / Full Day (200 km) <span className="text-xs text-accent-600 font-bold ml-1">(Best Value)</span>
                      </td>
                      <td className="py-3.5 px-4 text-center font-bold text-accent-600">₹650</td>
                      <td className="py-3.5 px-4 text-center font-bold text-accent-600">₹650</td>
                      <td className="py-3.5 px-4 text-center font-bold text-accent-600">₹900</td>
                      <td className="py-3.5 px-4 text-center font-bold text-primary-800">₹1,500</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 sm:px-6 font-medium text-slate-900">
                        7 Days (Weekly Unlimited)
                      </td>
                      <td className="py-3.5 px-4 text-center font-bold text-slate-900">₹3,800</td>
                      <td className="py-3.5 px-4 text-center font-bold text-slate-900">₹3,800</td>
                      <td className="py-3.5 px-4 text-center font-bold text-slate-900">₹5,200</td>
                      <td className="py-3.5 px-4 text-center font-bold text-primary-800">₹8,500</td>
                    </tr>
                    <tr className="bg-slate-50/50 hover:bg-slate-50 text-xs">
                      <td className="py-3 px-4 sm:px-6 font-medium text-slate-600">
                        Extra Distance Charge
                      </td>
                      <td className="py-3 px-4 text-center text-slate-800 font-semibold">₹4/km</td>
                      <td className="py-3 px-4 text-center text-slate-800 font-semibold">₹4/km</td>
                      <td className="py-3 px-4 text-center text-slate-800 font-semibold">₹5/km</td>
                      <td className="py-3 px-4 text-center text-slate-800 font-semibold">₹6/km</td>
                    </tr>
                    <tr className="hover:bg-slate-50 text-xs">
                      <td className="py-3 px-4 sm:px-6 font-medium text-slate-600">
                        Refundable Security Deposit
                      </td>
                      <td className="py-3 px-4 text-center text-slate-800 font-semibold">₹1,000</td>
                      <td className="py-3 px-4 text-center text-slate-800 font-semibold">₹1,000</td>
                      <td className="py-3 px-4 text-center text-slate-800 font-semibold">₹1,500</td>
                      <td className="py-3 px-4 text-center text-slate-800 font-semibold">₹2,500</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Transparent Terms & Inclusions (DriverSuvidha & DriversKatta pattern) */}
        <div className="max-w-5xl mx-auto mt-8 grid md:grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-xl border border-slate-200 text-xs text-slate-600 space-y-2">
            <div className="font-bold text-slate-900 text-sm flex items-center gap-1.5 mb-2">
              <ShieldCheck className="w-4 h-4 text-primary-700" />
              What is Always Included:
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
              <span>Dedicated verified commercial driver (for cars)</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
              <span>Full fuel and vehicle maintenance for all hourly car packages</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
              <span>Sanitized ISI helmet & comprehensive insurance (for bikes)</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
              <span>24/7 on-road breakdown and replacement assistance across Kanpur</span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 text-xs text-slate-600 space-y-2">
            <div className="font-bold text-slate-900 text-sm flex items-center gap-1.5 mb-2">
              <Info className="w-4 h-4 text-accent-600" />
              Clear & Honest Billing Policies:
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
              <span>Starting odometer/time counts from scheduled pickup location</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
              <span>Outstation calendar day begins at 12:00 AM and ends at 11:59 PM</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
              <span>Bike security deposits are refunded immediately via UPI/Cash on return</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
              <span>No surge pricing during rain, festivals, or peak traffic hours</span>
            </div>
          </div>
        </div>

        {/* CTA Bar */}
        <div className="mt-10 text-center">
          <Link
            href="/booking"
            className="inline-flex items-center gap-2 bg-primary-900 hover:bg-primary-950 text-white font-bold px-8 py-3.5 rounded-xl shadow-md transition-all hover:gap-3 text-sm sm:text-base"
          >
            <span>Book Your Ride At These Rates</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
