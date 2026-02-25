'use client'

import React from 'react'
import Link from 'next/link'
import { Phone, Mail, MapPin, Zap } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900/50 backdrop-blur-sm border-t border-gray-700/50 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative">
                <Zap className="w-8 h-8 text-cyan-400" />
                <div className="absolute inset-0 w-8 h-8 bg-cyan-400/20 rounded-full blur-lg"></div>
              </div>
              <div>
                <span className="text-2xl font-cyber font-black text-white">EVStore</span>
                <div className="text-sm text-cyan-400">Pre-Owned Tesla&apos;s for sale</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Your premier destination for pre-owned Tesla vehicles in Kamloops, BC. 
              We specialize in Tesla sales, service, and genuine parts with Canada-wide delivery.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a href="tel:2508288760" className="hover:text-cyan-400 transition-colors">
                  250-828-8761
                </a>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a href="mailto:info@evstore.ca" className="hover:text-cyan-400 transition-colors">
                  theevstore.ca@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>Kamloops, British Columbia, Canada</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Tesla Inventory
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Contact
                </Link>
              </li>
                         </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Our Services</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span>Pre-Owned Tesla Sales</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span>Tesla Service & Repair</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span>Genuine Tesla Parts</span>
              </li>
            
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span>Canada-Wide Delivery</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span>Trade-In Evaluations</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Tesla Models */}
        <div className="border-t border-gray-700/50 mt-8 pt-8">
          <h4 className="text-lg font-bold text-white mb-4 text-center">Tesla Models We Carry</h4>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="text-center">
              <div className="text-cyan-400 font-bold">Model S</div>
              <div className="text-gray-400">Luxury Sedan</div>
            </div>
            <div className="text-center">
              <div className="text-cyan-400 font-bold">Model 3</div>
              <div className="text-gray-400">Compact Sedan</div>
            </div>
            <div className="text-center">
              <div className="text-cyan-400 font-bold">Model X</div>
              <div className="text-gray-400">Luxury SUV</div>
            </div>
            <div className="text-center">
              <div className="text-cyan-400 font-bold">Model Y</div>
              <div className="text-gray-400">Compact SUV</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 EVStore. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
              Terms of Service
            </Link>
            
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
