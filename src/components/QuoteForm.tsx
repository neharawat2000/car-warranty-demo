"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Loader2, Shield, Star } from "lucide-react"

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

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
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

      // For static deployment - simulate successful submission
      // In production with a backend, this would send to your CRM
      console.log('Form submission data:', crmData)

      // Simulate successful submission
      setIsSubmitted(true)

      // Redirect to partner warranty sites
      setTimeout(() => {
        // Example redirect to top warranty provider
        window.open('https://endurancewarranty.com/lp/nat1/', '_blank')
      }, 2000)
    } catch (error) {
      console.error('Error submitting form:', error)
      // In production, you'd want better error handling
      alert('There was an error submitting your request. Please try again or call us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <Card className="max-w-2xl mx-auto bg-white">
        <CardContent className="p-8 text-center">
          <div className="flex justify-center mb-4">
            <Shield className="text-green-500" size={64} />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h3>
          <p className="text-gray-700 mb-6">
            Your request has been submitted successfully. You'll be redirected to our top-rated warranty providers
            to compare personalized quotes. Our partners will contact you within 15 minutes during business hours.
          </p>
          <div className="flex items-center justify-center gap-2 text-yellow-500 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="fill-current" size={20} />
            ))}
          </div>
          <p className="text-sm text-gray-600">
            Over 95% of our customers save money on their extended warranty coverage!
          </p>
        </CardContent>
      </Card>
    )
  }

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
                <Input
                  id="vehicleMake"
                  type="text"
                  value={formData.vehicleMake}
                  onChange={(e) => handleInputChange('vehicleMake', e.target.value)}
                  required
                  className="mt-1"
                  placeholder="Toyota, Ford, etc."
                />
              </div>
              <div>
                <Label htmlFor="vehicleModel">Model*</Label>
                <Input
                  id="vehicleModel"
                  type="text"
                  value={formData.vehicleModel}
                  onChange={(e) => handleInputChange('vehicleModel', e.target.value)}
                  required
                  className="mt-1"
                  placeholder="Camry, F-150, etc."
                />
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
