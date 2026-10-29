'use client'
import React, { useEffect, useState, useRef } from 'react'
import { MapPin, Users, ShieldCheck, Award } from 'lucide-react'

export default function StatsCounter() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const stats = [
    { icon: MapPin, value: 95000, suffix: '+', label: 'Safe Drives Completed' },
    { icon: Users, value: 12000, suffix: '+', label: 'Car & Bike Owners' },
    { icon: ShieldCheck, value: 8500, suffix: '+', label: 'Verified Drivers & Riders' },
    { icon: Award, value: 8, suffix: '+', label: 'Years Serving Kanpur' }
  ]

  return (
    <section ref={ref} className="bg-gradient-to-r from-primary-950 via-primary-900 to-slate-900 py-12 border-y border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center text-white">
              <div className="bg-white/10 p-3.5 rounded-2xl mb-3 border border-white/10">
                <stat.icon className="w-7 h-7 text-accent-400" />
              </div>
              <div className="text-2xl md:text-3xl font-extrabold mb-1 tracking-tight text-white">
                {isVisible ? stat.value.toLocaleString('en-IN') : 0}{stat.suffix}
              </div>
              <div className="text-slate-300 text-xs sm:text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
