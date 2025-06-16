'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Phone, MapPin, Menu, X } from 'lucide-react'

interface HeaderProps {
  onContactClick: () => void
}

const Header: React.FC<HeaderProps> = ({ onContactClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-xl' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Brand Name Only */}
          <Link href="/" className="group">
            <div>
              <div className="text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                EVStore
              </div>
              <div className="flex items-center space-x-1 text-sm text-gray-400">
                <MapPin className="w-3 h-3" />
                <span>Kamloops, BC</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            <Link 
              href="/" 
              className="text-gray-300 hover:text-white font-medium text-lg transition-colors duration-200"
            >
              Inventory
            </Link>
            <Link 
              href="/services" 
              className="text-gray-300 hover:text-white font-medium text-lg transition-colors duration-200"
            >
              Services
            </Link>
            <Link 
              href="/about" 
              className="text-gray-300 hover:text-white font-medium text-lg transition-colors duration-200"
            >
              About
            </Link>
          </nav>

          {/* Contact Section */}
          <div className="hidden lg:flex items-center space-x-5">
            {/* Phone */}
            <a 
              href="tel:2508288760" 
              className="flex items-center space-x-2 px-5 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/50 rounded-full transition-all duration-300 group"
            >
              <Phone className="w-4 h-4 text-cyan-400" />
              <span className="text-white font-medium text-lg">250-828-8760</span>
            </a>

            {/* Get Quote Button */}
            <button
              onClick={onContactClick}
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-3 text-white hover:text-cyan-400 transition-colors duration-200"
          >
            {isMenuOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-xl">
          <nav className="px-4 py-8 space-y-6">
            <Link 
              href="/" 
              className="block text-white hover:text-cyan-400 font-medium py-3 text-lg transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Inventory
            </Link>
            <Link 
              href="/services" 
              className="block text-white hover:text-cyan-400 font-medium py-3 text-lg transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/about" 
              className="block text-white hover:text-cyan-400 font-medium py-3 text-lg transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            
            <div className="pt-6 border-t border-white/10 space-y-4">
              <a 
                href="tel:2508288760" 
                className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-200"
              >
                <Phone className="w-5 h-5 text-cyan-400" />
                <div>
                  <div className="text-white font-medium text-lg">Call Now</div>
                  <div className="text-gray-400">250-828-8760</div>
                </div>
              </a>
              
              <button
                onClick={() => {
                  onContactClick()
                  setIsMenuOpen(false)
                }}
                className="w-full p-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-lg rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-300"
              >
                Get Quote
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header