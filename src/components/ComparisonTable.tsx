"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, X, Phone, Star } from "lucide-react"
import { useState } from "react"

const ComparisonTable = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const companies = [
    {
      name: "EnduraShield",
      logo: "🛡️",
      rating: 9.8,
      badge: "Our Top Pick",
      badgeColor: "bg-blue-600",
      phoneNumber: "(855) 247-3939",
      features: {
        comprehensive: true,
        powertrain: true,
        roadside: true,
        rental: true,
        towing: true,
        lockout: true,
        battery: true,
        ase_certified: true,
        nationwide: true,
        transfer: true,
        cancel_anytime: true,
        money_back: true
      },
      pricing: "From $89/month",
      discount: "$300 OFF"
    },
    {
      name: "AutoGuard Pro",
      logo: "🚗",
      rating: 9.5,
      badge: "Best Value",
      badgeColor: "bg-emerald-500",
      phoneNumber: "(888) 555-0123",
      features: {
        comprehensive: true,
        powertrain: true,
        roadside: true,
        rental: true,
        towing: true,
        lockout: false,
        battery: true,
        ase_certified: true,
        nationwide: true,
        transfer: true,
        cancel_anytime: false,
        money_back: true
      },
      pricing: "From $67/month",
      discount: "$200 OFF"
    },
    {
      name: "WarrantyMax",
      logo: "🔧",
      rating: 9.3,
      badge: "Most Flexible",
      badgeColor: "bg-blue-500",
      phoneNumber: "(877) 555-0156",
      features: {
        comprehensive: true,
        powertrain: true,
        roadside: true,
        rental: false,
        towing: true,
        lockout: true,
        battery: false,
        ase_certified: false,
        nationwide: true,
        transfer: true,
        cancel_anytime: true,
        money_back: false
      },
      pricing: "From $45/month",
      discount: "$150 OFF"
    },
    {
      name: "Shield Motors",
      logo: "⚡",
      rating: 9.1,
      badge: "Fast Quotes",
      badgeColor: "bg-orange-500",
      phoneNumber: "(833) 555-0187",
      features: {
        comprehensive: false,
        powertrain: true,
        roadside: true,
        rental: true,
        towing: true,
        lockout: false,
        battery: true,
        ase_certified: true,
        nationwide: false,
        transfer: false,
        cancel_anytime: true,
        money_back: true
      },
      pricing: "From $39/month",
      discount: "$100 OFF"
    },
    {
      name: "TotalCare Auto",
      logo: "🏆",
      rating: 8.9,
      badge: "Transparent",
      badgeColor: "bg-purple-500",
      phoneNumber: "(866) 555-0198",
      features: {
        comprehensive: true,
        powertrain: true,
        roadside: false,
        rental: false,
        towing: false,
        lockout: false,
        battery: false,
        ase_certified: true,
        nationwide: true,
        transfer: true,
        cancel_anytime: false,
        money_back: true
      },
      pricing: "From $52/month",
      discount: "$175 OFF"
    }
  ]

  const featureLabels = {
    comprehensive: "Comprehensive Coverage",
    powertrain: "Powertrain Protection",
    roadside: "24/7 Roadside Assistance",
    rental: "Rental Car Reimbursement",
    towing: "Towing Service",
    lockout: "Lockout Assistance",
    battery: "Battery Jump Start",
    ase_certified: "ASE Certified Mechanics",
    nationwide: "Nationwide Coverage",
    transfer: "Transferable Warranty",
    cancel_anytime: "Cancel Anytime",
    money_back: "Money Back Guarantee"
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Compare Features Side-by-Side
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See exactly what's included with each warranty plan. Make the smart choice for your vehicle.
          </p>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-[1200px] bg-white rounded-lg shadow-lg">
            {/* Header Row */}
            <div className="grid grid-cols-6 gap-4 p-6 border-b bg-gray-50">
              <div className="font-semibold text-gray-900">Features</div>
              {companies.map((company) => (
                <div key={company.name} className="text-center">
                  <div className="text-3xl mb-2">{company.logo}</div>
                  <h3 className="font-bold text-gray-900 mb-1">{company.name}</h3>
                  <Badge className={`${company.badgeColor} text-white text-xs mb-2`}>
                    {company.badge}
                  </Badge>
                  <div className="flex justify-center items-center gap-1 mb-1">
                    <span className="font-bold text-lg">{company.rating}</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="text-yellow-400 fill-current" size={14} />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{company.pricing}</p>
                  <div className="text-sm font-bold text-blue-600 mb-3">{company.discount}</div>
                  <div className="space-y-2">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm py-2"
                     onClick={() => {
                        setIsMenuOpen(false);
                        document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      Get Quote
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 text-sm py-2"
                      asChild
                    >
                      <a href={`tel:${company.phoneNumber}`} className="flex items-center justify-center gap-1">
                        <Phone size={12} />
                        Call Now
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Feature Rows */}
            {Object.entries(featureLabels).map(([key, label], index) => (
              <div
                key={key}
                className={`grid grid-cols-6 gap-4 p-4 border-b ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
              >
                <div className="font-medium text-gray-900 py-2">{label}</div>
                {companies.map((company) => (
                  <div key={`${company.name}-${key}`} className="flex justify-center py-2">
                    {company.features[key as keyof typeof company.features] ? (
                      <Check className="text-green-500" size={24} />
                    ) : (
                      <X className="text-red-400" size={24} />
                    )}
                  </div>
                ))}
              </div>
            ))}

            {/* Bottom CTA Row */}
            <div className="grid grid-cols-6 gap-4 p-6 bg-gray-100">
              <div className="font-semibold text-gray-900 flex items-center">
                Get Started Today
              </div>
              {companies.map((company) => (
                <div key={`cta-${company.name}`} className="text-center">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 mb-2"
                    onClick={() => {
                      document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Choose Plan
                  </Button>
                  <p className="text-xs text-gray-600">No obligation quote</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            * All features subject to terms and conditions. Coverage varies by plan and vehicle.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ComparisonTable
