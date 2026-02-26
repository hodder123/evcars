'use client'

import Link from 'next/link'
import { Phone, Mail, MapPin, Zap, Facebook, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Zap className="w-8 h-8 text-cyan-400" />
              <span className="text-2xl font-bold text-white">EVStore</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted source for pre-owned Tesla vehicles in Kamloops, BC. Quality inspected, competitively priced.
            </p>
            <div className="space-y-2">
              <a href="tel:2508288761" className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors">
                <Phone className="w-4 h-4" />
                <span>250-828-8761</span>
              </a>
              <a href="mailto:theevstore@gmail.com" className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors">
                <Mail className="w-4 h-4" />
                <span>theevstore@gmail.com</span>
              </a>
              <div className="flex items-start space-x-2 text-gray-300">
                <MapPin className="w-4 h-4 mt-1" />
                <span>419 Mount Paul Way<br />Kamloops, BC</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/cars" className="text-gray-400 hover:text-cyan-400 transition-colors">Cars for Sale</Link></li>
              <li><Link href="/parts" className="text-gray-400 hover:text-cyan-400 transition-colors">Parts & Accessories</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-cyan-400 transition-colors">Service & Repairs</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-cyan-400 transition-colors">Blog</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-cyan-400 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-cyan-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Tesla Sales</li>
              <li className="text-gray-400">Parts & Accessories</li>
              <li className="text-gray-400">Maintenance</li>
              <li className="text-gray-400">Repairs</li>
              <li className="text-gray-400">Battery Service</li>
              <li className="text-gray-400">Charging Installation</li>
              <li className="text-gray-400">Trade-Ins</li>
            </ul>
          </div>

          {/* Hours & Social */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Business Hours</h4>
            <ul className="space-y-2 text-gray-400 mb-6">
              <li>Mon - Fri: 8:00 AM - 4:00 PM</li>
              <li>Saturday: Closed</li>
              <li>Sunday: Closed</li>
            </ul>
            <div className="flex space-x-4">
              <a href="https://facebook.com/theevstore" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://instagram.com/theevstore" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} The EV Store. All rights reserved. | 
            <Link href="/privacy" className="hover:text-cyan-400 ml-2">Privacy Policy</Link> | 
            <Link href="/terms" className="hover:text-cyan-400 ml-2">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
