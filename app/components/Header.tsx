'use client'

import Link from 'next/link'
import { Phone, Menu, X, Zap } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Zap className="w-8 h-8 text-cyan-400" />
            <div>
              <span className="text-2xl font-bold text-white">EVStore</span>
              <p className="text-xs text-gray-400">Kamloops, BC</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/cars" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
              Cars for Sale
            </Link>
            <Link href="/parts" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
              Parts
            </Link>
            <Link href="/services" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
              Repairs & Service
            </Link>
            <Link href="/blog" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
              Blog
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
              About
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
              Contact
            </Link>
          </nav>

          {/* Phone & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="tel:2508288761" 
              className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-semibold">250-828-8761</span>
            </a>
            <Link 
              href="/contact"
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-bold rounded-full transition-all"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-4">
              <Link href="/cars" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
                Cars for Sale
              </Link>
              <Link href="/parts" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
                Parts
              </Link>
              <Link href="/services" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
                Repairs & Service
              </Link>
              <Link href="/blog" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
                Blog
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
                About
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
                Contact
              </Link>
              <a 
                href="tel:2508288761" 
                className="flex items-center space-x-2 text-cyan-400 font-semibold"
              >
                <Phone className="w-4 h-4" />
                <span>250-828-8761</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
