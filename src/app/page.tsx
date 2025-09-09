"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Star, Shield, Clock, Users, CheckCircle, Award } from "lucide-react"
import QuoteForm from "@/components/QuoteForm"
import Header from "@/components/Header"
import ComparisonTable from "@/components/ComparisonTable"
import LimitedTimeOffer from "@/components/LimitedTimeOffer"
import ScrollPopup from "@/components/ScrollPopup"

export default function Home() {
  const warrantyCompanies = [
    {
      id: 1,
      name: "EnduraShield",
      logo: "🛡️",
      rating: 9.8,
      description: "Comprehensive coverage with 24/7 roadside assistance",
      features: [
        "Up to $300 off your new policy",
        "Free roadside assistance",
        "24/7 claim support",
        "ASE-certified mechanics"
      ],
      phoneNumber: "(855) 247-3939",
      badge: "Our Top Pick",
      badgeColor: "bg-blue-600",
      color: "border-blue-200 bg-blue-50"
    },
    {
      id: 2,
      name: "AutoGuard Pro",
      logo: "🚗",
      rating: 9.5,
      description: "Reliable protection with quick, customized setup",
      features: [
        "Personalized coverage plans",
        "From $200 annual premium",
        "Any ASE certified mechanic",
        "Fast claim processing"
      ],
      phoneNumber: "(888) 555-0123",
      badge: "Best Value",
      badgeColor: "bg-emerald-500",
      color: "border-emerald-200 bg-emerald-50"
    },
    {
      id: 3,
      name: "WarrantyMax",
      logo: "🔧",
      rating: 9.3,
      description: "Basic protection available for all vehicle types",
      features: [
        "Wide range of policies",
        "$200-$750 annual premium",
        "Any licensed mechanic",
        "Flexible payment options"
      ],
      phoneNumber: "(877) 555-0156",
      badge: "Most Flexible",
      badgeColor: "bg-blue-500",
      color: "border-blue-200 bg-blue-50"
    },
    {
      id: 4,
      name: "Shield Motors",
      logo: "⚡",
      rating: 9.1,
      description: "Flexible and affordable car warranty plans",
      features: [
        "Competitive pricing",
        "Multiple coverage levels",
        "Quick quote process",
        "Excellent customer service"
      ],
      phoneNumber: "(833) 555-0187",
      badge: "Fast Quotes",
      badgeColor: "bg-orange-500",
      color: "border-orange-200 bg-orange-50"
    },
    {
      id: 5,
      name: "TotalCare Auto",
      logo: "🏆",
      rating: 8.9,
      description: "Avoid expensive surprises with full-coverage protection",
      features: [
        "Comprehensive protection",
        "No surprise charges",
        "Transparent pricing",
        "Extended coverage options"
      ],
      phoneNumber: "(866) 555-0198",
      badge: "Transparent",
      badgeColor: "bg-purple-500",
      color: "border-purple-200 bg-purple-50"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#0b1220] via-[#1d2e4a] to-[#243a5c] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10"></div>
        {/* <div
          className="absolute inset-0 bg-cover bg-center opacity-20 bg-no-repeat bg-gradient-to-r from-[#0b1220] via-[#1d2e4a] to-[#243a5c]"
          style={{
            backgroundImage: "url('https://letacars.com/_ipx/f_webp&s_600x600/images/leta-cars-happy-customer-driving-summer.png')"
          }}
        ></div> */}
        <div className="container mx-auto relative z-20 px-20 ">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="text-blue-400" size={20} />
              <span className="text-blue-400 font-medium">Last Updated: September 2025</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              The Top <span className="text-blue-400">Auto Warranty</span> Companies of 2025
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl">
              Compare the best extended auto warranty providers and save thousands on unexpected repairs.
              Get instant quotes from top-rated companies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className=" hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold"
              style={{backgroundColor:"#33405d !important"}}
              // bg-blue-600
                onClick={() => {
                document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
              >
                Get Free Quotes Now
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white/20 px-8 py-4 text-lg"
                onClick={() => {
                  document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Compare Plans
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Shield className="text-blue-600 mb-3" size={48} />
              <h3 className="text-2xl font-bold text-gray-900">$2,500+</h3>
              <p className="text-gray-600">Average repair cost savings</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="text-blue-600 mb-3" size={48} />
              <h3 className="text-2xl font-bold text-gray-900">500K+</h3>
              <p className="text-gray-600">Satisfied customers protected</p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="text-blue-600 mb-3" size={48} />
              <h3 className="text-2xl font-bold text-gray-900">24/7</h3>
              <p className="text-gray-600">Customer support available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Limited Time Offer Section */}
      <LimitedTimeOffer />

      {/* Main Comparison Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Overall Top Choice for 2025
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've done the research for you. Compare the best extended auto warranty companies
              and find the perfect protection for your vehicle.
            </p>
          </div>

          {/* Warranty Company Cards */}
          <div className="space-y-6">
            {warrantyCompanies.map((company, index) => (
              <Card key={company.id} className={`relative overflow-hidden ${company.color} border-2 hover:shadow-lg transition-shadow`}>
                {company.badge && (
                  <div className="absolute top-4 left-4 z-10">
                    <Badge className={`${company.badgeColor} text-white font-semibold px-3 py-1`}>
                      {company.badge}
                    </Badge>
                  </div>
                )}

                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                    {/* Ranking and Logo */}
                    <div className="lg:col-span-2 text-center">
                      <div className="text-4xl font-bold text-gray-400 mb-2">{index + 1}</div>
                      <div className="text-6xl mb-2">{company.logo}</div>
                      <h3 className="text-xl font-bold text-gray-900">{company.name}</h3>
                    </div>

                    {/* Company Info */}
                    <div className="lg:col-span-5">
                      <p className="text-gray-700 font-medium mb-4">{company.description}</p>
                      <div className="space-y-2">
                        {company.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="lg:col-span-2 text-center">
                      <div className="text-2xl font-bold text-gray-900 mb-1">{company.rating}</div>
                      <div className="flex justify-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="text-yellow-400 fill-current" size={20} />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600 font-medium">Excellent</span>
                    </div>

                    {/* CTA Buttons */}
                    <div className="lg:col-span-3 flex flex-col gap-3">
                      <Button
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3"
                        onClick={() => {
                          // This will be handled by the QuoteForm component
                          document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        Get Free Quote
                      </Button>
                      <Button
                        variant="outline"
                        className="border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3"
                        asChild
                      >
                        <a href={`tel:${company.phoneNumber}`} className="flex items-center justify-center gap-2">
                          <Phone size={16} />
                          {company.phoneNumber}
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Comparison Table */}
      <ComparisonTable />

      {/* Quote Form Section */}
      <section id="quote-form" className="py-16 bg-gradient-to-r from-[#0b1220] via-[#1d2e4a] to-[#243a5c]">
        {/* bg-gradient-to-r from-blue-600 to-blue-700 */}
        <div className="container mx-auto px-4">
          <div className="text-center text-white mb-12">
            <h2 className="text-4xl font-bold mb-4">Get Your Free Quote Today</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Compare quotes from top warranty providers in minutes. No obligation, completely free.
            </p>
          </div>
          <QuoteForm />
        </div>
      </section>

      {/* Educational Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Why Choose Extended Auto Warranty Coverage?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">What is Extended Auto Warranty?</h3>
                <p className="text-gray-700 mb-4">
                  An extended auto warranty is a service contract that covers your vehicle after your manufacturer's
                  warranty expires. It protects you from expensive repair costs and provides peace of mind.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={16} />
                    <span>Covers major mechanical breakdowns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={16} />
                    <span>24/7 roadside assistance included</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={16} />
                    <span>Protection against unexpected repair costs</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Types of Coverage</h3>
                <p className="text-gray-700 mb-4">
                  Different warranty plans offer varying levels of protection to suit your needs and budget:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Powertrain:</strong> Engine, transmission, drivetrain</li>
                  <li><strong>Bumper-to-Bumper:</strong> Comprehensive coverage</li>
                  <li><strong>Named Component:</strong> Specific parts listed</li>
                  <li><strong>Wrap Coverage:</strong> Extends manufacturer warranty</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Don't Wait Until It's Too Late
              </h3>
              <p className="text-gray-700 mb-6">
                The average car repair costs $1,986 according to AAA. Protect yourself today with comprehensive warranty coverage.
              </p>
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4"
                onClick={() => {
                  document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get Protected Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 mb-4">
            © 2025 Auto Warranty Comparison. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            We earn commissions from brands listed on this site, which influences how listings are presented.
          </p>
        </div>
      </footer>

      {/* Scroll-triggered Popup */}
      <ScrollPopup />
    </div>
  )
}
