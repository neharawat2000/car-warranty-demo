"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Clock, Zap, Shield } from "lucide-react"

export default function LimitedTimeOffer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    // Set target date to 2 days from now
    const targetDate = new Date()
    targetDate.setDate(targetDate.getDate() + 2)
    targetDate.setHours(23, 59, 59, 999) // End of day

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate.getTime() - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        })
      } else {
        // Reset to 2 days when timer expires (for demo purposes)
        const newTarget = new Date()
        newTarget.setDate(newTarget.getDate() + 2)
        newTarget.setHours(23, 59, 59, 999)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-8 bg-gradient-to-r from-[#0b1220] via-[#1d2e4a] to-[#243a5c] text-white relative overflow-hidden">
      {/* bg-gradient-to-r from-blue-600 to-blue-700 */}
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-6xl">⚡</div>
        <div className="absolute top-20 right-20 text-4xl">🔥</div>
        <div className="absolute bottom-10 left-20 text-5xl">💰</div>
        <div className="absolute bottom-20 right-10 text-3xl">⏰</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Alert Badge */}
          <div className="inline-flex items-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded-full font-bold text-sm mb-4">
            <Zap className="animate-pulse" size={16} />
            LIMITED TIME FLASH SALE
            <Zap className="animate-pulse" size={16} />
          </div>

          {/* Main Headline */}
          <h2 className="text-2xl md:text-3xl font-bold mb-2 leading-tight">
            {/* Save <span className="text-yellow-300">$500</span> on Any Extended Warranty! */}
            Save up to Any Extended Warranty!
          </h2>

          <p className="text-base md:text-lg mb-4 opacity-90">
            🎉 Limited time offer - act fast!
          </p>

          {/* Better Countdown Timer */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-6 max-w-md mx-auto">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Clock className="text-yellow-300 animate-pulse" size={18} />
              <span className="text-sm font-semibold">Offer ends in:</span>
            </div>
            <div className="flex justify-center gap-3">
              <div className="text-center">
                <div className="bg-yellow-400 text-black rounded-lg px-2 py-1 font-bold text-lg">
                  {timeLeft.days.toString().padStart(2, '0')}
                </div>
                <div className="text-xs mt-1 opacity-80">DAYS</div>
              </div>
              <div className="text-center">
                <div className="bg-yellow-400 text-black rounded-lg px-2 py-1 font-bold text-lg">
                  {timeLeft.hours.toString().padStart(2, '0')}
                </div>
                <div className="text-xs mt-1 opacity-80">HRS</div>
              </div>
              <div className="text-center">
                <div className="bg-yellow-400 text-black rounded-lg px-2 py-1 font-bold text-lg">
                  {timeLeft.minutes.toString().padStart(2, '0')}
                </div>
                <div className="text-xs mt-1 opacity-80">MIN</div>
              </div>
              <div className="text-center">
                <div className="bg-yellow-400 text-black rounded-lg px-2 py-1 font-bold text-lg animate-pulse">
                  {timeLeft.seconds.toString().padStart(2, '0')}
                </div>
                <div className="text-xs mt-1 opacity-80">SEC</div>
              </div>
            </div>
          </div>

          {/* Benefits List */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-left">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Shield className="text-yellow-300 mb-2" size={24} />
              <h3 className="font-bold text-base mb-1">Comprehensive Coverage</h3>
              <p className="text-sm opacity-90">Protect against expensive repairs with full bumper-to-bumper coverage</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Clock className="text-yellow-300 mb-2" size={24} />
              <h3 className="font-bold text-base mb-1">24/7 Support</h3>
              <p className="text-sm opacity-90">Round-the-clock roadside assistance and customer service</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Zap className="text-yellow-300 mb-2" size={24} />
              <h3 className="font-bold text-base mb-1">Instant Approval</h3>
              <p className="text-sm opacity-90">Get approved in minutes, not days. No waiting around!</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-3">
            <Button
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => {
                document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              🚀 CLAIM MY $500 DISCOUNT NOW
            </Button>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Button
                variant="outline"
                size="lg"
                className="bg-white/20 border-white text-white hover:bg-white hover:text-black font-semibold px-6 py-2"
                asChild
              >
                <a href="tel:(855) 247-3939" className="flex items-center gap-2">
                  📞 Call (855) 247-3939
                </a>
              </Button>

              <div className="text-sm opacity-80">
                ⭐ Over 50,000 customers saved this year!
              </div>
            </div>
          </div>

          {/* Fine Print */}
          <div className="mt-6 text-xs opacity-70 max-w-2xl mx-auto">
            <p>
              * $500 discount applies to comprehensive warranty plans only. Cannot be combined with other offers.
              Offer valid for new customers only. Terms and conditions apply.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
