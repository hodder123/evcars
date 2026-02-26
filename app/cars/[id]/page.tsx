import Link from 'next/link'
import { notFound } from 'next/navigation'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { getTeslaById, allTeslas } from '../../lib/teslaData'
import Image from 'next/image'
import { Phone, Mail, Gauge, Battery, Zap, Users, CheckCircle, ArrowLeft } from 'lucide-react'

interface PageProps {
  params: { id: string }
}

export function generateStaticParams() {
  return allTeslas.map((tesla) => ({
    id: tesla.id.toString(),
  }))
}

export default function CarDetailPage({ params }: PageProps) {
  const car = getTeslaById(params.id)
  
  if (!car) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <Header />
      
      <main className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Back Link */}
          <Link 
            href="/cars" 
            className="inline-flex items-center text-gray-400 hover:text-cyan-400 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Inventory
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Image Gallery */}
            <div>
              <div className="relative h-96 rounded-xl overflow-hidden">
                <Image
                  src={car.image}
                  alt={`${car.year} Tesla ${car.model}`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="grid grid-cols-3 gap-2 mt-2">
                {car.gallery.map((img, idx) => (
                  <div key={idx} className="relative h-24 rounded-lg overflow-hidden">
                    <Image
                      src={img}
                      alt={`View ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Vehicle Info */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                  car.condition === 'Excellent' ? 'bg-green-500/20 text-green-400 border border-green-400/50' :
                  car.condition === 'Very Good' ? 'bg-blue-500/20 text-blue-400 border border-blue-400/50' :
                  'bg-yellow-500/20 text-yellow-400 border border-yellow-400/50'
                }`}>
                  {car.condition}
                </span>
                {car.autopilot && (
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 border border-purple-400/50 rounded-full text-sm font-bold">
                    Autopilot
                  </span>
                )}
              </div>

              <h1 className="text-4xl font-bold text-white mb-2">
                {car.year} Tesla {car.model}
              </h1>
              
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-6">
                ${car.price.toLocaleString()}
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                  <div className="flex items-center space-x-2 text-cyan-400 mb-1">
                    <Gauge className="w-5 h-5" />
                    <span className="text-sm">Mileage</span>
                  </div>
                  <p className="text-white font-semibold">{car.mileage.toLocaleString()} km</p>
                </div>
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                  <div className="flex items-center space-x-2 text-cyan-400 mb-1">
                    <Battery className="w-5 h-5" />
                    <span className="text-sm">Range</span>
                  </div>
                  <p className="text-white font-semibold">{car.range} km</p>
                </div>
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                  <div className="flex items-center space-x-2 text-cyan-400 mb-1">
                    <Zap className="w-5 h-5" />
                    <span className="text-sm">0-100 km/h</span>
                  </div>
                  <p className="text-white font-semibold">{car.acceleration}</p>
                </div>
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                  <div className="flex items-center space-x-2 text-cyan-400 mb-1">
                    <Users className="w-5 h-5" />
                    <span className="text-sm">Seating</span>
                  </div>
                  <p className="text-white font-semibold">{car.seats} seats</p>
                </div>
              </div>

              {/* Contact Buttons */}
              <div className="space-y-3 mb-6">
                <a 
                  href="tel:2508288761"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-bold py-4 rounded-lg transition-all flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call 250-828-8761</span>
                </a>
                <div className="grid grid-cols-2 gap-3">
                  <a 
                    href="mailto:info@theevstore.ca"
                    className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 rounded-lg transition-all flex items-center justify-center space-x-2"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Email Us</span>
                  </a>
                  <Link 
                    href="/contact"
                    className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 rounded-lg transition-all text-center"
                  >
                    Schedule Visit
                  </Link>
                </div>
              </div>

              {/* Vehicle Details */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 mb-6">
                <h3 className="text-lg font-bold text-white mb-3">Vehicle Details</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Stock #:</span>
                    <span className="text-white">{car.stockNumber}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">VIN:</span>
                    <span className="text-white">{car.vin}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Exterior:</span>
                    <span className="text-white">{car.exteriorColor}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Interior:</span>
                    <span className="text-white">{car.interiorColor}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Drivetrain:</span>
                    <span className="text-white">{car.drivetrain}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Description & Features */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-white mb-4">Description</h2>
              <p className="text-gray-400 leading-relaxed">{car.description}</p>
              
              <h3 className="text-xl font-bold text-white mt-8 mb-4">Vehicle History</h3>
              <p className="text-gray-400 leading-relaxed">{car.history}</p>
              
              <h3 className="text-xl font-bold text-white mt-8 mb-4">Warranty</h3>
              <p className="text-gray-400 leading-relaxed">{car.warranty}</p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Features</h2>
              <div className="space-y-2">
                {car.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
