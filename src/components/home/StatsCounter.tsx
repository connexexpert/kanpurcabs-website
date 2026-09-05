'use client'
import React, { useEffect, useState, useRef } from 'react'
import { MapPin, Users, Car, Award } from 'lucide-react'
import { cn } from '@/lib/utils'

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
    { icon: MapPin, value: 5000, suffix: '+', label: 'Trips Completed' },
    { icon: Users, value: 500, suffix: '+', label: 'Happy Customers' },
    { icon: Car, value: 50, suffix: '+', label: 'Cars Available' },
    { icon: Award, value: 10, suffix: '+', label: 'Years Experience' }
  ]

  return (
    <section ref={ref} className="bg-gradient-to-r from-blue-800 to-blue-600 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center text-white">
              <div className="bg-white/20 p-4 rounded-full mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2">
                {isVisible ? stat.value : 0}{stat.suffix}
              </div>
              <div className="text-blue-100 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
