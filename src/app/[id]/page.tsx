'use client'

import React, { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactModal from '../components/ContactModal'
import { ArrowLeft, Gauge, Battery, Zap, Star, Phone, CheckCircle, AlertCircle } from 'lucide-react'
import { getTeslaById } from '../lib/teslaData'

const TeslaDetailPage = () => {
  const params = useParams()
  const router = useRouter()
  const [showContact, setShowContact] = useState(false)
  const [selectedImage, setSelectedImage] = useState(0)

  const tesla = getTeslaById(params.id as string)

  if (!tesla) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Tesla Not Found</h1>
          <Link href="/" className="text-cyan-400 hover:text-cyan-300">
            Return to Inventory
          </Link>
        </div>
      </div>
    )
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-CA', {
      style: 'currency',
      currency: 'CAD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  const formatMileage = (mileage: number) => {
    return new Intl.NumberFormat('en-CA').format(mileage)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Header onContactClick={() => setShowContact(true)} />

      <main className="pt-16">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <button
            onClick={() => router.back()}
            className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Inventory</span>
          </button>
        </div>

        {/* Tesla Details */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Image Gallery */}
            <div>
              <div className="mb-4">
                <Image
                  src={tesla.gallery[selectedImage]}
                  alt={`${tesla.year} Tesla ${tesla.model}`}
                  width={800}
                  height={600}
                  className="w-full h-96 object-cover rounded-xl"
                  priority
                />
              </div>
              <div className="grid grid-cols-3 gap-2">
                {tesla.gallery.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative h-24 rounded-lg overflow-hidden ${
                      selectedImage === index ? 'ring-2 ring-cyan-400' : ''
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`View ${index + 1}`}
                      width={200}
                      height={150}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Vehicle Info */}
            <div>
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-center space-x-3 mb-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                    tesla.condition === 'Excellent' ? 'bg-green-500/20 text-green-400 border border-green-400/50' :
                    tesla.condition === 'Very Good' ? 'bg-blue-500/20 text-blue-400 border border-blue-400/50' :
                    'bg-yellow-500/20 text-yellow-400 border border-yellow-400/50'
                  }`}>
                    {tesla.condition}
                  </span>
                  {tesla.autopilot && (
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 border border-purple-400/50 rounded-full text-sm font-bold">
                      Autopilot
                    </span>
                  )}
                </div>
                <h1 className="text-4xl font-bold text-white mb-2">
                  {tesla.year} Tesla {tesla.model}
                </h1>
                <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text">
                  {formatPrice(tesla.price)}
                </div>
              </div>

              {/* Key Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4">
                  <p className="text-sm text-gray-400">Year</p>
                  <p className="font-bold text-white">{tesla.year}</p>
                </div>
                <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4">
                  <Gauge className="w-6 h-6 text-cyan-400 mb-2" />
                  <p className="text-sm text-gray-400">Mileage</p>
                  <p className="font-bold text-white">{formatMileage(tesla.mileage)} km</p>
                </div>
                <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4">
                  <Battery className="w-6 h-6 text-cyan-400 mb-2" />
                  <p className="text-sm text-gray-400">Range</p>
                  <p className="font-bold text-white">{tesla.range} km</p>
                </div>
                <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4">
                  <Zap className="w-6 h-6 text-cyan-400 mb-2" />
                  <p className="text-sm text-gray-400">0-100 km/h</p>
                  <p className="font-bold text-white">{tesla.acceleration}</p>
                </div>
              </div>

              {/* Contact Actions */}
              <div className="space-y-3 mb-6">
                <button
                  onClick={() => setShowContact(true)}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold py-4 px-6 rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Contact About This Tesla</span>
                </button>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="tel:2508288760"
                    className="bg-gray-700/50 hover:bg-gray-600/50 text-white font-bold py-3 px-4 rounded-lg transition-colors text-center"
                  >
                    Call Now
                  </a>
                  <a
                    href="mailto:theevstore.ca@gmail.com"
                    className="bg-gray-700/50 hover:bg-gray-600/50 text-white font-bold py-3 px-4 rounded-lg transition-colors text-center"
                  >
                    Email Us
                  </a>
                </div>
              </div>

              {/* Quick Info */}
              <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-lg border border-cyan-400/30 p-4">
                <h4 className="font-bold text-cyan-400 mb-2">Quick Info</h4>
                <div className="space-y-1 text-sm text-gray-300">
                  <div>Stock #: {tesla.stockNumber}</div>
                  <div>VIN: {tesla.vin}</div>
                  <div>Exterior: {tesla.exteriorColor}</div>
                  <div>Interior: {tesla.interiorColor}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Information Tabs */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Description */}
            <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Description</h3>
              <p className="text-gray-300 leading-relaxed">{tesla.description}</p>
            </div>

            {/* Features */}
            <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Features</h3>
              <div className="space-y-2">
                {tesla.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Vehicle Details */}
            <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Vehicle Details</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Body Style:</span>
                  <span className="text-white">{tesla.bodyStyle}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Drivetrain:</span>
                  <span className="text-white">{tesla.drivetrain}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Fuel Type:</span>
                  <span className="text-white">{tesla.fuelType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Transmission:</span>
                  <span className="text-white">{tesla.transmission}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Doors:</span>
                  <span className="text-white">{tesla.doors}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Seats:</span>
                  <span className="text-white">{tesla.seats}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {/* Vehicle History */}
            <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
                <AlertCircle className="w-5 h-5 text-cyan-400" />
                <span>Vehicle History</span>
              </h3>
              <p className="text-gray-300">{tesla.history}</p>
            </div>

            {/* Warranty */}
            <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
                <Star className="w-5 h-5 text-cyan-400" />
                <span>Warranty</span>
              </h3>
              <p className="text-gray-300">{tesla.warranty}</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <ContactModal isOpen={showContact} onClose={() => setShowContact(false)} />
    </div>
  )
}

export default TeslaDetailPage
