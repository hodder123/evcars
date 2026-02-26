'use client'

import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactModal from '../components/ContactModal'
import { Wrench, Zap, Package, CheckCircle, Phone, Mail } from 'lucide-react'

const ServicesPage = () => {
  const [showContact, setShowContact] = useState(false)

  const services = [
    {
      icon: Wrench,
      title: "Tesla Maintenance",
      description: "Expert Tesla maintenance and repair services by certified technicians",
      features: [
        "Regular maintenance schedules",
        "Battery health diagnostics",
        "Software updates",
        "Brake service",
        "Tire rotation & replacement",
        "HVAC system service"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Charging Solutions",
      description: "Complete charging infrastructure setup and consultation",
      features: [
        "Home charger installation",
        "Commercial charging stations",
        "Charging network guidance",
        "Mobile charging service",
        "Charging optimization",
        "Emergency charging"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Package,
      title: "Tesla Parts Sales",
      description: "Genuine Tesla parts and accessories for your vehicle",
      features: [
        "OEM Tesla parts",
        "Performance upgrades",
        "Interior accessories",
        "Exterior accessories",
        "Charging accessories",
        "Maintenance consumables"
      ],
      color: "from-purple-500 to-pink-500"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Header onContactClick={() => setShowContact(true)} />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h1 className="text-5xl font-cyber font-black mb-6 bg-gradient-to-r from-white via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Tesla Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Professional Tesla maintenance, charging solutions, and genuine parts available 24/7. 
            On-call service throughout Kamloops, BC and the Thompson Valley region.
          </p>
        </div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative group bg-gradient-to-br from-gray-900/90 via-black/95 to-gray-900/90 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300"
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                
                <div className="relative">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                  {/* Features */}
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => setShowContact(true)}
                    className={`mt-6 w-full bg-gradient-to-r ${service.color} text-white font-bold py-3 px-6 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg`}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-2xl border border-cyan-400/30 p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Available 24/7 On-Call</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Our Tesla specialists are available around the clock for emergency assistance, 
              consultations, and service requests. We come to you when you need us most.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:2508288760"
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold py-4 px-8 rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                <span>Call: 250-828-8761</span>
              </a>
              
              <button
                onClick={() => setShowContact(true)}
                className="flex items-center justify-center space-x-2 bg-gray-700/50 hover:bg-gray-600/50 text-white font-bold py-4 px-8 rounded-xl transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <ContactModal isOpen={showContact} onClose={() => setShowContact(false)} />
    </div>
  )
}

export default ServicesPage