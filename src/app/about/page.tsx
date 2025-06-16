'use client'

import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactModal from '../components/ContactModal'
import { MapPin, Users, Award, Clock, Phone, Mail, CheckCircle } from 'lucide-react'

const AboutPage = () => {
  const [showContact, setShowContact] = useState(false)

  const stats = [
    { number: "31+", label: "Teslas Sold", icon: Award },
    { number: "5+", label: "Years Experience", icon: Clock },
    { number: "98%", label: "Customer Satisfaction", icon: Users },
    { number: "24/7", label: "Available On-Call", icon: Phone }
  ]

  const values = [
    {
      title: "Tesla Expertise",
      description: "Deep knowledge of Tesla vehicles, technology, and the electric vehicle ecosystem.",
      icon: Award
    },
    {
      title: "Customer First",
      description: "Every decision is made with our customers' best interests and satisfaction in mind.",
      icon: Users
    },
    {
      title: "Quality Assurance",
      description: "Rigorous inspection and certification process for every Tesla in our inventory.",
      icon: CheckCircle
    },
    {
      title: "Local Community",
      description: "Proud to serve Kamloops and surrounding areas with premium electric vehicles.",
      icon: MapPin
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Header onContactClick={() => setShowContact(true)} />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h1 className="text-5xl font-cyber font-black mb-6 bg-gradient-to-r from-white via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            About EVStore
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
         Trusted Tesla specialists of Kamloops, providing 24/7 on-call services for 
            Tesla sales, maintenance, and support throughout the Thompson Valley region.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900/90 via-black/95 to-gray-900/90 backdrop-blur-xl border border-cyan-500/20 rounded-xl p-6 text-center hover:border-cyan-400/40 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Our Story */}
            <div className="bg-gradient-to-br from-gray-900/90 via-black/95 to-gray-900/90 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Founded in Kamloops, British Columbia, EVStore emerged from a passion for 
                  sustainable transportation and cutting-edge automotive technology. We recognized 
                  the growing demand for premium electric vehicles in the Thompson Valley region.
                </p>
                <p>
                  What started as a small operation has grown into the most trusted Tesla 
                  service provider in the interior of BC. Our team combines deep automotive expertise 
                  with specialized knowledge of Tesla&apos;s revolutionary technology.
                </p>
                <p>
                  We are not just selling cars - we are helping our community transition to 
                  sustainable transportation while providing an exceptional ownership experience 
                  that extends far beyond the initial purchase.
                </p>
              </div>
            </div>

            {/* Our Mission */}
            <div className="bg-gradient-to-br from-gray-900/90 via-black/95 to-gray-900/90 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  To accelerate the adoption of sustainable transportation in Kamloops and 
                  across British Columbia by providing 24/7 access to Tesla expertise, 
                  quality vehicles, and comprehensive support services.
                </p>
                <p>
                  We believe that every customer deserves transparency, expertise, and 
                  exceptional service when making one of life&apos;s most important purchases. 
                  Our mission extends beyond sales to include education, support, and 
                  building a community of Tesla enthusiasts.
                </p>
                <p>
                  Through our comprehensive on-call services, from vehicle consultation to maintenance 
                  and charging solutions, we are creating an ecosystem that makes Tesla 
                  ownership seamless and enjoyable.
                </p>
              </div>
            </div>
          </div>

          {/* Our Values */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center text-white mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-900/90 via-black/95 to-gray-900/90 backdrop-blur-xl border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Location & Contact */}
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-2xl border border-cyan-400/30 p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Available 24/7 On-Call</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-6 h-6 text-cyan-400" />
                    <div>
                      <div className="text-white font-medium">Serving Kamloops, BC</div>
                      <div className="text-gray-400">Mobile service throughout Thompson Valley</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Clock className="w-6 h-6 text-cyan-400" />
                    <div>
                      <div className="text-white font-medium">Available 24/7</div>
                      <div className="text-gray-400">On-call service • By appointment</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 space-y-3">
                  <p className="text-gray-300">
                    We come to you! Our mobile Tesla specialists are available around the clock 
                    to help with purchases, inspections, maintenance guidance, and any Tesla-related 
                    questions or services you need.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white mb-4">Get In Touch</h3>
                
                <a
                  href="tel:2508288760"
                  className="flex items-center justify-center space-x-3 w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold py-4 px-6 rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call: 250-828-8760</span>
                </a>
                
                <button
                  onClick={() => setShowContact(true)}
                  className="flex items-center justify-center space-x-3 w-full bg-gray-700/50 hover:bg-gray-600/50 text-white font-bold py-4 px-6 rounded-xl transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>Send Us a Message</span>
                </button>

                <div className="text-center pt-4">
                  <p className="text-gray-400 text-sm">
                    Available 24/7 for emergencies and consultations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <ContactModal isOpen={showContact} onClose={() => setShowContact(false)} />
    </div>
  )
}

export default AboutPage