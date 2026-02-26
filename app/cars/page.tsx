import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { allTeslas } from '../lib/teslaData'
import Image from 'next/image'
import { Phone, Gauge, Battery, Zap, Users } from 'lucide-react'

export default function CarsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <Header />
      
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Vehicles for Sale
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Browse our selection of quality pre-owned Tesla vehicles. Each vehicle is inspected and comes with a detailed history report.
            </p>
          </div>

          {/* Vehicle Count */}
          <div className="mb-8">
            <p className="text-gray-400">
              Showing <span className="text-cyan-400 font-bold">{allTeslas.length}</span> vehicles
            </p>
          </div>

          {/* Vehicles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allTeslas.map((car) => (
              <div key={car.id} className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-cyan-500 transition-all hover:shadow-xl hover:shadow-cyan-500/10">
                {/* Image */}
                <Link href={`/cars/${car.id}`}>
                  <div className="relative h-56">
                    <Image
                      src={car.image}
                      alt={`${car.year} Tesla ${car.model}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        car.condition === 'Excellent' ? 'bg-green-500 text-white' :
                        car.condition === 'Very Good' ? 'bg-blue-500 text-white' :
                        'bg-yellow-500 text-black'
                      }`}>
                        {car.condition}
                      </span>
                    </div>
                    {car.autopilot && (
                      <div className="absolute top-4 right-16">
                        <span className="px-3 py-1 bg-purple-600 text-white text-xs font-bold rounded-full">
                          Autopilot
                        </span>
                      </div>
                    )}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-black/80 text-cyan-400 font-bold rounded-lg border border-cyan-400/30">
                        ${car.price.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </Link>

                {/* Content */}
                <div className="p-5">
                  <Link href={`/cars/${car.id}`}>
                    <h3 className="text-xl font-bold text-white hover:text-cyan-400 transition-colors">
                      {car.year} Tesla {car.model}
                    </h3>
                  </Link>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-3 mt-4 text-sm">
                    <div className="flex items-center space-x-2 text-gray-400">
                      <Gauge className="w-4 h-4" />
                      <span>{car.mileage.toLocaleString()} km</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400">
                      <Battery className="w-4 h-4" />
                      <span>{car.range} km</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400">
                      <Zap className="w-4 h-4" />
                      <span>{car.acceleration}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400">
                      <Users className="w-4 h-4" />
                      <span>{car.seats} seats</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mt-4 line-clamp-2">
                    {car.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {car.features.slice(0, 3).map((feature, idx) => (
                      <span key={idx} className="px-2 py-1 bg-cyan-500/10 text-cyan-400 border border-cyan-400/30 text-xs rounded">
                        {feature}
                      </span>
                    ))}
                    {car.features.length > 3 && (
                      <span className="px-2 py-1 bg-gray-700 text-gray-400 text-xs rounded">
                        +{car.features.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-3 mt-5">
                    <Link 
                      href={`/cars/${car.id}`}
                      className="flex-1 bg-gray-700 hover:bg-gray-600 text-white text-center py-2.5 rounded-lg transition-colors font-medium"
                    >
                      View Details
                    </Link>
                    <a 
                      href="tel:2508288761"
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-bold py-2.5 rounded-lg transition-all flex items-center justify-center space-x-1"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
