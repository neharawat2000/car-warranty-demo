"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { X, Gift, Phone, Star, Clock } from "lucide-react"

const ScrollPopup = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    phone: "",
    vehicleYear: "",
    zipCode: ""
  })

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollPercentage = scrolled / (documentHeight - windowHeight)

      // Show popup when user has scrolled 40% of the page
      if (scrollPercentage > 0.4 && !isVisible && !localStorage.getItem('popupShown')) {
        setIsVisible(true)
        localStorage.setItem('popupShown', 'true')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isVisible])

  const handleClose = () => {
    setIsVisible(false)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Here you would normally send to your CRM
    console.log('Popup form submitted:', formData)

    setIsSubmitted(true)

    // Close popup after 3 seconds
    setTimeout(() => {
      setIsVisible(false)
    }, 3000)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  if (!isVisible) return null

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
        {/* Popup Modal */}
        <div className="bg-white rounded-lg shadow-2xl max-w-md w-full relative animate-in zoom-in duration-300">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10"
          >
            <X size={24} />
          </button>

          {!isSubmitted ? (
            <>
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-t-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Gift className="text-yellow-300" size={24} />
                  <span className="text-sm font-semibold bg-yellow-400 text-black px-2 py-1 rounded">
                    EXCLUSIVE OFFER
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  Get $750 OFF Your Auto Warranty!
                </h3>
                <p className="text-blue-100">
                  Limited spots available - secure yours now!
                </p>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Trust Elements */}
                <div className="flex items-center justify-center gap-4 mb-6 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Star className="text-yellow-400 fill-current" size={16} />
                    <span>4.9/5 Rating</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>2-Min Quote</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Phone size={16} />
                    <span>No Spam Calls</span>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="popup-firstName" className="text-sm font-medium">
                      First Name*
                    </Label>
                    <Input
                      id="popup-firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      required
                      className="mt-1"
                      placeholder="Your first name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="popup-phone" className="text-sm font-medium">
                      Phone Number*
                    </Label>
                    <Input
                      id="popup-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      required
                      className="mt-1"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label htmlFor="popup-year" className="text-sm font-medium">
                        Vehicle Year*
                      </Label>
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
                      <Label htmlFor="popup-zipCode" className="text-sm font-medium">
                        ZIP Code*
                      </Label>
                      <Input
                        id="popup-zipCode"
                        type="text"
                        value={formData.zipCode}
                        onChange={(e) => handleInputChange('zipCode', e.target.value)}
                        required
                        className="mt-1"
                        placeholder="12345"
                      />
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 text-lg shadow-lg"
                  >
                    🎁 Claim My $750 Discount
                  </Button>
                </form>

                {/* Fine Print */}
                <div className="mt-4 text-center">
                  <p className="text-xs text-gray-500">
                    No obligation. Your information is secure and won't be shared.
                  </p>
                  <div className="flex items-center justify-center gap-2 mt-2 text-xs text-gray-400">
                    <span>🔒 SSL Secured</span>
                    <span>•</span>
                    <span>📞 No Spam Calls</span>
                    <span>•</span>
                    <span>⚡ Instant Quotes</span>
                  </div>
                </div>
              </div>
            </>
          ) : (
            /* Success State */
            <div className="p-8 text-center">
              <div className="text-green-500 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                🎉 Success!
              </h3>
              <p className="text-gray-600 mb-4">
                Your $750 discount has been reserved! You'll receive your personalized quotes within 2 minutes.
              </p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                <p className="text-sm text-green-800">
                  ✅ Discount Locked In<br/>
                  ✅ Quotes Being Prepared<br/>
                  ✅ No Obligation
                </p>
              </div>
              <p className="text-xs text-gray-500">
                This popup will close automatically in a few seconds...
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default ScrollPopup
