"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Shield, Phone } from "lucide-react"
import Image from "next/image";
import logo from "../assets/Logo.svg";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="bg-gray-900 text-white py-2">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            We earn commissions from brands listed on this site, which influences how listings are presented.
          </p>
        </div>
      </div>

      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            {/* <Shield className="text-blue-600" size={32} /> */}
            {/* <div>
              <h1 className="text-xl font-bold text-gray-900">WarrantyCompare</h1>
              <p className="text-xs text-gray-500">Auto Protection Experts</p>
            </div> */}
            <Image src={logo} alt="company-logo" className="h-[50px] w-fit" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#comparison-table" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Compare
            </Link>
            {/* <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Reviews
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Articles
            </a> */}
            {/* <a href="tel:(855) 247-3939" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold">
              <Phone size={16} />
              (855) 247-3939
            </a> */}
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => {
                router.push('/#quote-form')
                document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200">
            <div className="space-y-4">
              <Link href="/#comparison-table" className="block text-gray-700 hover:text-blue-600 font-medium">
                Compare
              </Link>
              {/* <a href="#" className="block text-gray-700 hover:text-blue-600 font-medium">
                Reviews
              </a>
              <a href="#" className="block text-gray-700 hover:text-blue-600 font-medium">
                Articles
              </a> */}
              {/* <a href="tel:(855) 247-3939" className="flex items-center gap-2 text-pink-600 font-semibold">
                <Phone size={16} />
                (855) 247-3939
              </a> */}
              <Button
                className="bg-pink-500 hover:bg-pink-600 text-white w-full"
                onClick={() => {
                  setIsMenuOpen(false);
                  router.push('/#quote-form')
                  document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get Quote
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
