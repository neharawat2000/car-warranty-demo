"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Loader2, Shield, Star } from "lucide-react"
import { redirect, useRouter } from "next/navigation"

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  zipCode: string
  vehicleYear: string
  vehicleMake: string
  vehicleModel: string
  mileage: string
  currentWarranty: string
  contactTime: string
  agreeToTerms: boolean
}

const make = [
  {
    name: "Acura",
    models: [
      "ADX",
      "Integra",
      "MDX",
      "RDX",
      "TLX",
      "ZDX"
    ]
  },
  {
    name: "Alfa Romeo",
    models: [
      "Giulia",
      "Stelvio",
      "Tonale",
      "Tonale Hybrid",
      "Tonale Tributo Italiano"
    ]
  },
  {
    name: "Aston Martin",
    models: [
      "DB12",
      "DBX",
      "Vanquish",
      "Vantage",
    ]
  },
  {
    name: "Audi",
    models: [
      "A3", "A4", "A4 allroad", "A5", "A5 Sportback", "A6",
      "A6 allroad", "A6 Sportback e-tron", "A7", "A8 L",
      "Q3", "Q4 e-tron", "Q4 e-tron Sportback", "Q4 Sportback e-tron",
      "Q5", "Q5 Sportback", "Q6 e-tron", "Q6 Sportback e-tron",
      "Q7", "Q8", "RS 3", "RS 5 Sportback", "RS 6 Avant",
      "RS 6 Avant performance", "RS 7", "RS 7 performance",
      "RS e-tron GT", "RS e-tron GT performance", "RS Q8",
      "RS Q8 performance", "S e-tron GT", "S3", "S4", "S5",
      "S5 Sportback", "S6", "S6 Sportback e-tron", "S7",
      "S8", "SQ5", "SQ5 Sportback", "SQ6 e-tron",
      "SQ6 Sportback e-tron", "SQ7", "SQ8"
    ]
  },
  {
    name: "Bentley",
    models: [
      "Bentayga",
      "Continental",
      "Bentayga EWB",
      "Flying Spur"
    ]
  },
  {
    name: "BMW",
    models: [
      "2 Series", "3 Series", "4 Series", "5 Series", "7 Series", "8 Series",
      "i4", "i5", "i7", "iX", "M2", "M3", "M4", "M5", "M8",
      "X1", "X2", "X3", "X4", "X4 M", "X5", "X5 M", "X6", "X6 M",
      "X7", "XM", "Z4"
    ]
  },
  {
    name: "Buick",
    models: [
      "Enclave",
      "Encore GX",
      "Envision",
      "Envista",
    ]
  },
  {
    name: "Cadillac",
    models: [
      "CELESTIQ", "CT4", "CT4-V", "CT5", "CT5-V",
      "Escalade", "Escalade ESV", "Escalade IQ",
      "Escalade-V", "Escalade-V ESV", "LYRIQ",
      "OPTIQ", "XT4", "XT5", "XT6"
    ]
  },
  {
    name: "Chevrolet",
    models: [
      "Blazer",
      "Blazer EV",
      "Colorado",
      "Corvette",
      "Equinox",
      "Equinox EV",
      "Express",
      "Malibu",
      "Silverado 1500",
      "Silverado 2500HD",
      "Silverado 3500HD",
      "Silverado 3500HD CC",
      "Silverado EV",
      "Suburban",
      "Tahoe",
      "Trailblazer",
      "Traverse",
      "Trax"
    ]
  },
  {
    name: "Chrysler",
    models: [
      "Pacifica",
      "Pacifica Plug-In Hybrid",
      "Voyager"
    ]
  },
  {
    name: "Dodge",
    models: [
      "Charger",
      "Durango",
      "Hornet"
    ]
  },
  {
    name: "Ferrari",
    models: [
      "12Cilindri",
      "12Cilindri Spider",
      "296 GTB",
      "296 GTS",
      "Daytona SP3",
      "Purosangue",
      "Roma Spider",
      "SF90 Spider",
      "SF90 XX Spider",
      "SF90 XX Stradale"
    ]
  },
  {
    name: "FIAT",
    models: [
      "500e"
    ]
  },
  {
    name: "Ford",
    models: [
      "Bronco",
      "Bronco Sport",
      "E-Series",
      "E-Transit",
      "Escape",
      "Escape Hybrid",
      "Escape Plug-In Hybrid",
      "Expedition",
      "Expedition MAX",
      "Explorer",
      "Explorer Hybrid",
      "F-150",
      "F-150 Lightning",
      "F-250 Super Duty",
      "F-350 Super Duty",
      "F-450 Super Duty",
      "Maverick",
      "Mustang",
      "Mustang Mach-E",
      "Ranger",
      "Transit"
    ]
  },
  {
    name: "Genesis",
    models: [
      "Electrified G80",
      "Electrified GV70",
      "G70", "G80", "G90", "GV60", "GV70", "GV80", "GV80 Coupe"
    ]
  },
  {
    name: "GMC",
    models: [
      "Acadia",
      "Canyon",
      "HUMMER EV",
      "Savana",
      "Sierra 1500",
      "Sierra 2500HD",
      "Sierra 3500HD",
      "Sierra 3500HD CC",
      "Sierra EV",
      "Terrain",
      "Yukon",
      "Yukon XL"
    ]
  },
  {
    name: "Honda",
    models: [
      "Accord",
      "Accord Hybrid",
      "Civic",
      "Civic Hybrid",
      "CR-V",
      "CR-V Fuel Cell",
      "CR-V Hybrid",
      "HR-V",
      "Odyssey",
      "Passport",
      "Pilot",
      "Prologue",
      "Ridgeline"
    ]
  },
  {
    name: "Hyundai",
    models: [
      "ELANTRA",
      "ELANTRA Hybrid",
      "ELANTRA N",
      "IONIQ 5",
      "IONIQ 5 N",
      "IONIQ 6",
      "KONA",
      "KONA Electric",
      "NEXO",
      "PALISADE",
      "SANTA CRUZ",
      "SANTA FE",
      "SANTA FE Hybrid",
      "SONATA",
      "SONATA Hybrid",
      "TUCSON",
      "TUCSON Hybrid",
      "TUCSON Plug-in Hybrid",
      "VENUE"
    ]
  },
  {
    name: "Ineos",
    models: [
      "Grenadier",
      "Quartermaster"
    ]
  },
  {
    name: "INFINITI",
    models: [
      "QX50", "QX55", "QX60", "QX80"
    ]
  },
  {
    name: "Jaguar",
    models: [
      "F-PACE"
    ]
  },
  {
    name: "Jeep",
    models: [
      "Compass",
      "Gladiator",
      "Grand Cherokee",
      "Grand Cherokee L",
      "Grand Wagoneer",
      "Grand Wagoneer L",
      "Wagoneer",
      "Wagoneer L",
      "Wagoneer S",
      "Wrangler"
    ]
  },
  {
    name: "Karma",
    models: [
      "Revero"
    ]
  },
  {
    name: "Kia",
    models: [
      "Carnival",
      "Carnival Hybrid",
      "EV6",
      "EV9",
      "K4",
      "K5",
      "Niro",
      "Niro EV",
      "Niro Plug-In Hybrid",
      "Seltos",
      "Sorento",
      "Sorento Hybrid",
      "Sorento Plug-In Hybrid",
      "Soul",
      "Sportage",
      "Sportage Hybrid",
      "Sportage Plug-In Hybrid",
      "Telluride"
    ]
  },
  {
    name: "Lamborghini",
    models: [
      "Revuelto", "Urus"
    ]
  },
  {
    name: "Land Rover",
    models: [
      "Defender",
      "Discovery",
      "Discovery Sport",
      "Range Rover",
      "Range Rover Evoque",
      "Range Rover Sport",
      "Range Rover Velar"
    ]
  },
  {
    name: "Lexus",
    models: [
      "ES 250",
      "ES 300h",
      "ES 350",
      "GX 550",
      "IS 300",
      "IS 350",
      "IS 500",
      "LC 500",
      "LC 500 Convertible",
      "LC 500h",
      "LS 500",
      "LS 500h",
      "LX 600",
      "LX 700h",
      "NX 250",
      "NX 350",
      "NX 350h",
      "NX 450h+",
      "RC 300",
      "RC 350",
      "RC F",
      "RX 350",
      "RX 350h",
      "RX 450h+",
      "RX 500h",
      "RZ 300e",
      "RZ 450e",
      "TX 350",
      "TX 500h",
      "TX 550h+",
      "UX 300h"
    ]
  },
  {
    name: "Lincoln",
    models: [
      "Aviator",
      "Corsair",
      "Nautilus",
      "Nautilus Hybrid",
      "Navigator",
      "Navigator L"
    ]
  },
  {
    name: "Lotus",
    models: [
      "Eletre", "Emira"
    ]
  },
  {
    name: "Lucid",
    models: [
      "Air", "Gravity"
    ]
  },
  {
    name: "Maserati",
    models: [
      "GranCabrio", "GranTurismo", "Grecale", "GT2 Stradale", "MC20", "MC20 Cielo"
    ]
  },
  {
    name: "Mazda",
    models: [
      "CX-30",
      "CX-5",
      "CX-50",
      "CX-50 Hybrid",
      "CX-70",
      "CX-70 PHEV",
      "CX-70 Plug-in Hybrid",
      "CX-90",
      "CX-90 PHEV",
      "CX-90 Plug-in Hybrid",
      "Mazda3 Hatchback",
      "Mazda3 Sedan",
      "MX-5 Miata",
      "MX-5 Miata RF"
    ]
  },
  {
    name: "McLaren",
    models: [
      "750S", "750S Spider", "Artura", "Artura Spider", "GTS"
    ]
  },
  {
    name: "Mercedes-Benz",
    models: [
      "AMG GT",
      "C-Class",
      "CLA",
      "CLE",
      "E-Class",
      "EQB",
      "EQE",
      "EQS",
      "eSprinter",
      "G-Class",
      "GLA",
      "GLB",
      "GLC",
      "GLE",
      "GLS",
      "S-Class",
      "SL-Class",
      "Sprinter"
    ]
  },
  {
    name: "MINI",
    models: [
      "Convertible", "Countryman", "Hardtop 2 Door", "Hardtop 4 Door"
    ]
  },
  {
    name: "Mitsubishi",
    models: [
      "Eclipse Cross", "Outlander", "Outlander PHEV", "Outlander Sport",
    ]
  },
  {
    name: "Nissan",
    models: [
      "Altima",
      "Ariya",
      "Armada",
      "Frontier",
      "Kicks",
      "Kicks Play",
      "LEAF",
      "Murano",
      "Pathfinder",
      "Rogue",
      "Sentra",
      "Versa",
      "Z"
    ]
  },
  {
    name: "Polestar",
    models: [
      "2", "3", "4"
    ]
  },
  {
    name: "Porsche",
    models: [
      "718 Boxster",
      "718 Cayman",
      "911",
      "Cayenne",
      "Macan",
      "Panamera",
      "Taycan"
    ]
  },
  {
    name: "Ram",
    models: [
      "1500", "2500", "3500", "ProMaster", "ProMaster EV"
    ]
  },
  {
    name: "Rivian",
    models: [
      "R1S", "R1T"
    ]
  },
  {
    name: "Rolls-Royce",
    models: [
      "Black Badge Cullinan", "Black Badge Ghost", "Black Badge Spectre", "Cullinan", "Ghost", "Phantom", "Spectre"
    ]
  },
  {
    name: "Subaru",
    models: [
      "Ascent",
      "BRZ",
      "Crosstrek",
      "Forester",
      "Impreza",
      "Legacy",
      "Outback",
      "Solterra",
      "WRX"
    ]
  },
  {
    name: "Tesla",
    models: [
      "Cybertruck", "Model 3", "Model S", "Model X", "Model Y"
    ]
  },
  {
    name: "Toyota",
    models: [
      "4Runner",
      "bZ4X",
      "Camry",
      "Corolla",
      "Corolla Cross",
      "Corolla Cross Hybrid",
      "Corolla Hatchback",
      "Corolla Hybrid",
      "Crown",
      "Crown Signia",
      "GR Corolla",
      "GR Supra",
      "GR86",
      "Grand Highlander",
      "Grand Highlander Hybrid",
      "Highlander",
      "Highlander Hybrid",
      "Land Cruiser",
      "Mirai",
      "Prius",
      "Prius Plug-in Hybrid",
      "RAV4",
      "RAV4 Hybrid",
      "RAV4 Plug-in Hybrid",
      "Sequoia",
      "Sienna",
      "Tacoma",
      "Tundra"
    ]
  },
  {
    name: "VinFast",
    models: [
      "VF8"
    ]
  },
  {
    name: "Volkswagen",
    models: [
      "Atlas",
      "Atlas Cross Sport",
      "Golf GTI",
      "Golf R",
      "ID. Buzz",
      "ID.4",
      "ID.Buzz",
      "Jetta",
      "Jetta GLI",
      "Taos",
      "Tiguan"
    ]
  },
  {
    name: "Volvo",
    models: [
      "EC40",
      "EX30",
      "EX40",
      "EX90",
      "S60",
      "S90",
      "V60",
      "V60 Cross Country",
      "V90 Cross Country",
      "XC40",
      "XC60",
      "XC90"
    ]
  }
]

export default function QuoteForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    zipCode: "",
    vehicleYear: "",
    vehicleMake: "",
    vehicleModel: "",
    mileage: "",
    currentWarranty: "",
    contactTime: "",
    agreeToTerms: false
  })
  const [makeOptions, setMakeOptions] = useState<{ value: string; label: string }[]>([])
  const [modelOptions, setModelOptions] = useState<{ value: string; label: string }[]>([])

  const [isSubmitting, setIsSubmitting] = useState(false)
  // const [isSubmitted, setIsSubmitted] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setMakeOptions(make.map(make => ({
      value: make.name,
      label: make.name
    })))
  }, [])

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleMakeChange = (field: keyof FormData, value: string) => {
    handleInputChange(field, value);
    setFormData(prev => ({
      ...prev,
      vehicleModel: ""
    }));

    const models = make.find(make => make.name === value)?.models;
    if (models?.length) {
      setModelOptions(models.map(model => ({
        value: model,
        label: model
      })))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      // VanillaSoft CRM integration
      const crmData = {
        // Map form data to VanillaSoft fields
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        zip_code: formData.zipCode,
        vehicle_year: formData.vehicleYear,
        vehicle_make: formData.vehicleMake,
        vehicle_model: formData.vehicleModel,
        mileage: formData.mileage,
        current_warranty: formData.currentWarranty,
        preferred_contact_time: formData.contactTime,
        source: "Auto Warranty Comparison Site",
        campaign: "Extended Warranty Lead",
        timestamp: new Date().toISOString(),
        ip_address: "unknown", // Would need server-side implementation for real IP
        user_agent: navigator.userAgent
      }
      console.log('Form submission data:', crmData)

      // Redirect to partner warranty sites
      setTimeout(() => {
        router.push('/thank-you')
      }, 1000)
    } catch (error) {
      console.log('Error submitting form:', error)
      alert('There was an error submitting your request. Please try again or call us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // if (isSubmitted) {
  //   return (
  //     <Card className="max-w-2xl mx-auto bg-white">
  //       <CardContent className="p-8 text-center">
  //         <div className="flex justify-center mb-4">
  //           <Shield className="text-green-500" size={64} />
  //         </div>
  //         <h3 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h3>
  //         <p className="text-gray-700 mb-6">
  //           Your request has been submitted successfully. You'll be redirected to our top-rated warranty providers
  //           to compare personalized quotes. Our partners will contact you within 15 minutes during business hours.
  //         </p>
  //         <div className="flex items-center justify-center gap-2 text-yellow-500 mb-4">
  //           {[...Array(5)].map((_, i) => (
  //             <Star key={i} className="fill-current" size={20} />
  //           ))}
  //         </div>
  //         <p className="text-sm text-gray-600">
  //           Over 95% of our customers save money on their extended warranty coverage!
  //         </p>
  //       </CardContent>
  //     </Card>
  //   )
  // }

  return (
    <Card className="max-w-2xl mx-auto bg-white">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-gray-900">
          Get Your Free Auto Warranty Quote
        </CardTitle>
        <CardDescription className="text-gray-600">
          Compare quotes from top providers in under 2 minutes. No obligation.
        </CardDescription>
      </CardHeader>

      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">First Name*</Label>
              <Input
                id="firstName"
                type="text"
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="lastName">Last Name*</Label>
              <Input
                id="lastName"
                type="text"
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                required
                className="mt-1"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email">Email Address*</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number*</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                required
                className="mt-1"
                placeholder="(555) 123-4567"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="zipCode">ZIP Code*</Label>
              <Input
                id="zipCode"
                type="text"
                value={formData.zipCode}
                onChange={(e) => handleInputChange('zipCode', e.target.value)}
                required
                className="mt-1"
                placeholder="12345"
              />
            </div>
            <div>
              <Label htmlFor="contactTime">Best Time to Call</Label>
              <Select value={formData.contactTime} onValueChange={(value) => handleInputChange('contactTime', value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="morning">Morning (8AM - 12PM)</SelectItem>
                  <SelectItem value="afternoon">Afternoon (12PM - 5PM)</SelectItem>
                  <SelectItem value="evening">Evening (5PM - 8PM)</SelectItem>
                  <SelectItem value="anytime">Anytime</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Vehicle Information */}
          <div className="border-t pt-4 mt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Vehicle Information</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="vehicleYear">Year*</Label>
                <Select value={formData.vehicleYear} onValueChange={(value) => handleInputChange('vehicleYear', value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Year" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 25 }, (_, i) => 2025 - i).map(year => (
                      <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="vehicleMake">Make*</Label>
                <Select value={formData.vehicleMake} onValueChange={(value) => handleMakeChange('vehicleMake', value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Make" />
                  </SelectTrigger>
                  <SelectContent>
                    {makeOptions.map(make => (
                      <SelectItem key={make.value} value={make.value}>{make.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="vehicleModel">Model*</Label>
                <Select value={formData.vehicleModel} onValueChange={(value) => handleInputChange('vehicleModel', value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Model" />
                  </SelectTrigger>
                  <SelectContent>
                    {modelOptions.map(model => (
                      <SelectItem key={model.value} value={model.value}>{model.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <Label htmlFor="mileage">Current Mileage*</Label>
                <Select value={formData.mileage} onValueChange={(value) => handleInputChange('mileage', value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select mileage" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-25000">0 - 25,000 miles</SelectItem>
                    <SelectItem value="25001-50000">25,001 - 50,000 miles</SelectItem>
                    <SelectItem value="50001-75000">50,001 - 75,000 miles</SelectItem>
                    <SelectItem value="75001-100000">75,001 - 100,000 miles</SelectItem>
                    <SelectItem value="100001-150000">100,001 - 150,000 miles</SelectItem>
                    <SelectItem value="150000+">150,000+ miles</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="currentWarranty">Current Warranty Status</Label>
                <Select value={formData.currentWarranty} onValueChange={(value) => handleInputChange('currentWarranty', value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="expired">Expired</SelectItem>
                    <SelectItem value="expiring-soon">Expiring Soon</SelectItem>
                    <SelectItem value="active">Still Active</SelectItem>
                    <SelectItem value="none">Never Had One</SelectItem>
                    <SelectItem value="unsure">Not Sure</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-start space-x-2 pt-4">
            <Checkbox
              id="agreeToTerms"
              checked={formData.agreeToTerms}
              onCheckedChange={(checked) => handleInputChange('agreeToTerms', checked as boolean)}
              required
            />
            <Label htmlFor="agreeToTerms" className="text-sm text-gray-600 leading-relaxed">
              I agree to receive quotes and information from warranty providers and understand that
              my information may be shared with partner companies for the purpose of providing quotes.
              I can opt out at any time.*
            </Label>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold mt-6"
            disabled={isSubmitting || !formData.agreeToTerms}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Getting Your Quotes...
              </>
            ) : (
              'Get My Free Quotes Now'
            )}
          </Button>

          <p className="text-xs text-gray-500 text-center mt-4">
            Your information is secure and will not be sold to third parties.
            By submitting this form, you may be contacted by phone, email, or text.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
