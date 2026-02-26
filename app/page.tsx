import Link from 'next/link'
import Header from './components/Header'
import Footer from './components/Footer'
import { Zap, Battery, Wrench, Phone, ChevronRight, Shield, Truck } from 'lucide-react'
import { allTeslas } from './lib/teslaData'
import Image from 'next/image'

export default function Home() {
  const featuredCars = allTeslas.slice(0, 3)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Tesla</span> Vehicles
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Kamloops&apos; trusted source for pre-owned Tesla vehicles. Quality inspected, competitively priced, with full service and parts support.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/cars"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-bold rounded-full transition-all flex items-center space-x-2"
              >
                <span>View Inventory</span>
                <ChevronRight className="w-5 h-5" />
              </Link>
              <a 
                href="tel:2508288761"
                className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-bold rounded-full transition-all flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call 250-828-8761</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Quality Inspected</h3>
              <p className="text-gray-400">Every vehicle undergoes rigorous inspection and comes with a detailed history report.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Full Service Center</h3>
              <p className="text-gray-400">Expert Tesla service, repairs, and maintenance by certified technicians.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Canada-Wide Delivery</h3>
              <p className="text-gray-400">We deliver vehicles across Canada. Ask about our transportation options.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Vehicles */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Featured Vehicles</h2>
              <p className="text-gray-400">Hand-picked premium Tesla vehicles</p>
            </div>
            <Link href="/cars" className="hidden sm:flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
              <span>View All</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ display: 'grid', visibility: 'visible' }}>
            {featuredCars.map((car) => (
              <Link key={car.id} href={`/cars/${car.id}`} className="group block" style={{ display: 'block', visibility: 'visible' }}>
                <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-cyan-500 transition-all hover:shadow-xl hover:shadow-cyan-500/10" style={{ backgroundColor: '#1f2937', visibility: 'visible' }}>
                  <div className="relative h-48" style={{ height: '192px', position: 'relative', overflow: 'hidden' }}>
                    <Image
                      src={car.image}
                      alt={`${car.year} Tesla ${car.model}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      style={{ objectFit: 'cover', width: '100%', height: '100%' }}
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
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-black/80 text-cyan-400 font-bold rounded-lg">
                        ${car.price.toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {car.year} Tesla {car.model}
                    </h3>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-gray-400">
                      <span>{car.mileage.toLocaleString()} km</span>
                      <span>{car.range} km range</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {car.features.slice(0, 3).map((feature, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-8 text-center sm:hidden">
            <Link href="/cars" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
              <span>View All Vehicles</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From sales to service, we&apos;re your complete Tesla solution in Kamloops
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/cars" className="group">
              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-cyan-500 transition-all text-center">
                <Zap className="w-12 h-12 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold text-white mb-2">Vehicle Sales</h3>
                <p className="text-gray-400 text-sm">Quality pre-owned Tesla vehicles with warranty options</p>
              </div>
            </Link>
            <Link href="/parts" className="group">
              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-cyan-500 transition-all text-center">
                <Battery className="w-12 h-12 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold text-white mb-2">Parts & Accessories</h3>
                <p className="text-gray-400 text-sm">Genuine Tesla parts and aftermarket accessories</p>
              </div>
            </Link>
            <Link href="/services" className="group">
              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-cyan-500 transition-all text-center">
                <Wrench className="w-12 h-12 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold text-white mb-2">Service & Repairs</h3>
                <p className="text-gray-400 text-sm">Expert maintenance and repair services</p>
              </div>
            </Link>
            <Link href="/contact" className="group">
              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-cyan-500 transition-all text-center">
                <Phone className="w-12 h-12 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold text-white mb-2">Get in Touch</h3>
                <p className="text-gray-400 text-sm">Questions? We&apos;re here to help</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Go Electric?</h2>
          <p className="text-gray-400 mb-8">
            Visit our showroom in Kamloops or give us a call. Let us help you find the perfect Tesla.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-bold rounded-full transition-all"
            >
              Schedule a Test Drive
            </Link>
            <a 
              href="tel:2508288761"
              className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-bold rounded-full transition-all"
            >
              Call 250-828-8761
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
