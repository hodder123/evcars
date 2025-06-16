'use client'

import React from 'react'
import { Phone, Mail, MapPin, X, Clock } from 'lucide-react'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-gray-900/90 backdrop-blur-lg border border-gray-700/50 rounded-xl max-w-lg w-full">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-2xl font-bold text-white">Contact EVStore</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-4 p-4 bg-black/30 rounded-lg border border-gray-700/50">
              <Phone className="w-6 h-6 text-cyan-400" />
              <div>
                <p className="font-bold text-white">Phone</p>
                <a 
                  href="tel:2508288760" 
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  250-828-8760
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 p-4 bg-black/30 rounded-lg border border-gray-700/50">
              <Mail className="w-6 h-6 text-cyan-400" />
              <div>
                <p className="font-bold text-white">Email</p>
                <a 
                  href="mailto:info@evstore.ca" 
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  info@evstore.ca
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 p-4 bg-black/30 rounded-lg border border-gray-700/50">
              <MapPin className="w-6 h-6 text-cyan-400" />
              <div>
                <p className="font-bold text-white">Location</p>
                <p className="text-gray-300">Kamloops, British Columbia</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 bg-black/30 rounded-lg border border-gray-700/50">
              <Clock className="w-6 h-6 text-cyan-400" />
              <div>
                <p className="font-bold text-white">Business Hours</p>
                <div className="text-gray-300 text-sm">
                  <div>Mon-Fri: 8:00 AM - 4:00 PM</div>
                  <div>Saturday: Closed</div>
                  <div>Sunday: Closed</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-lg border border-cyan-400/30">
            <h4 className="font-bold text-cyan-400 mb-2">Our Services</h4>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• Premium Pre-Owned Tesla Sales</li>
              <li>• Tesla Service & Maintenance</li>
              <li>• Genuine Tesla Parts</li>
              <li>• Canada-Wide Delivery</li>

            </ul>
          </div>

          <div className="mt-6 flex space-x-3">
            <a 
              href="tel:2508288760" 
              className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold py-3 px-4 rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 text-center"
            >
              Call Now
            </a>
            <a 
              href="mailto:info@evstore.ca" 
              className="flex-1 bg-gray-700/50 hover:bg-gray-600/50 text-white font-bold py-3 px-4 rounded-lg transition-colors text-center"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactModal