'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Gauge, Battery, Zap, Users, Phone } from 'lucide-react'

export interface Tesla {
  id: number
  model: string
  year: number
  price: number
  mileage: number
  battery: string
  range: number
  acceleration: string
  seats: number
  autopilot: boolean
  image: string
  description: string
  features: string[]
  condition: 'Excellent' | 'Very Good' | 'Good'
}

interface TeslaCardProps {
  tesla: Tesla
  onContactClick: () => void
}

const TeslaCard: React.FC<TeslaCardProps> = ({ tesla, onContactClick }) => {
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
    <div className="group relative bg-gray-800 border border-gray-600 rounded-xl overflow-hidden shadow-lg hover:border-cyan-400 transition-all duration-300 hover:shadow-cyan-500/20 hover:shadow-xl">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Link href={`/${tesla.id}`}>
          <Image 
            src={tesla.image} 
            alt={`${tesla.year} Tesla ${tesla.model}`}
            width={400}
            height={300}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </Link>
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col space-y-1">
          <span className={`px-2 py-1 rounded-full text-xs font-bold ${
            tesla.condition === 'Excellent' ? 'bg-green-500 text-white' :
            tesla.condition === 'Very Good' ? 'bg-blue-500 text-white' :
            'bg-yellow-500 text-black'
          }`}>
            {tesla.condition}
          </span>
          {tesla.autopilot && (
            <span className="px-2 py-1 bg-purple-600 text-white rounded-full text-xs font-bold">
              Autopilot
            </span>
          )}
        </div>

        {/* Price Badge */}
        <div className="absolute top-3 right-3">
          <span className="px-3 py-1.5 bg-black/80 text-cyan-400 font-bold text-lg rounded-lg border border-cyan-400/30">
            {formatPrice(tesla.price)}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Title */}
        <Link href={`/${tesla.id}`}>
          <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors mb-2 truncate">
            {tesla.year} Tesla {tesla.model}
          </h3>
        </Link>

        {/* Key Stats */}
        <div className="grid grid-cols-2 gap-2 mb-3 text-sm">
          <div className="flex items-center space-x-1 text-gray-400">
            <Gauge className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="truncate">{formatMileage(tesla.mileage)} km</span>
          </div>
          <div className="flex items-center space-x-1 text-gray-400">
            <Battery className="w-3.5 h-3.5 flex-shrink-0" />
            <span>{tesla.range} km</span>
          </div>
          <div className="flex items-center space-x-1 text-gray-400">
            <Zap className="w-3.5 h-3.5 flex-shrink-0" />
            <span>{tesla.acceleration}s</span>
          </div>
          <div className="flex items-center space-x-1 text-gray-400">
            <Users className="w-3.5 h-3.5 flex-shrink-0" />
            <span>{tesla.seats} seats</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm mb-4 line-clamp-2">
          {tesla.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-1 mb-4">
          {tesla.features.slice(0, 2).map((feature, index) => (
            <span key={index} className="px-2 py-1 bg-cyan-500/10 text-cyan-400 border border-cyan-400/30 rounded text-xs">
              {feature}
            </span>
          ))}
          {tesla.features.length > 2 && (
            <span className="px-2 py-1 bg-gray-700 text-gray-400 rounded text-xs">
              +{tesla.features.length - 2} more
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex space-x-2">
          <Link 
            href={`/${tesla.id}`}
            className="flex-1 bg-gray-700 hover:bg-gray-600 text-white text-center py-2 px-3 rounded-lg transition-colors text-sm font-medium"
          >
            View Details
          </Link>
          <button
            onClick={onContactClick}
            className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-bold py-2 px-3 rounded-lg transition-all duration-300 text-sm flex items-center justify-center space-x-1"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Contact</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default TeslaCard