"use client";

import { Card, CardContent } from "@/components/ui/card"
import { Shield, Star } from "lucide-react"
import GoogleAnalytics from "@/components/GoogleAnalytics"
import Conversion from "@/components/Conversion";

export const dynamic = 'force-dynamic';

const ThankYouPage = () => {
    return (
        <div className="flex justify-center items-center h-[70%]">
            <GoogleAnalytics />
            <Conversion />
            <Card className="max-w-2xl mx-auto bg-white">
                <CardContent className="p-8 text-center">
                    <div className="flex justify-center my-4">
                        <Shield className="text-green-500" size={64} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 my-4">Thank You!</h3>
                    <p className="text-gray-700 my-6">
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
        </div>
    )
}

export default ThankYouPage