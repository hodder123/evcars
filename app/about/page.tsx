import Header from '../components/Header'
import Footer from '../components/Footer'
import { MapPin, Phone, Mail, Clock, Zap, Shield, Truck } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <Header />
      
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About The EV Store</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Kamloops&apos; premier destination for pre-owned Tesla vehicles and expert EV service.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Our Story</h2>
              <p className="text-gray-400 mb-4">
                The EV Store was founded with a simple mission: to make premium electric vehicles accessible to everyone in Kamloops and the surrounding region. We believe in the future of sustainable transportation and are committed to helping our customers make the switch to electric.
              </p>
              <p className="text-gray-400 mb-4">
                Every vehicle in our inventory undergoes a rigorous inspection process to ensure it meets our high standards for quality and reliability. We stand behind every car we sell with comprehensive warranties and ongoing support.
              </p>
              <p className="text-gray-400">
                Beyond sales, we offer full-service maintenance and repairs for all Tesla models. Our technicians are trained to handle everything from routine maintenance to complex repairs, using only quality parts and the latest diagnostic equipment.
              </p>
            </div>

            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-cyan-400 mt-1" />
                  <div>
                    <p className="text-white font-medium">Address</p>
                    <p className="text-gray-400">419 Mount Paul Way<br />Kamloops, BC</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-cyan-400 mt-1" />
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <a href="tel:2508288761" className="text-gray-400 hover:text-cyan-400 transition-colors">
                      250-828-8761
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-cyan-400 mt-1" />
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <a href="mailto:theevstore.ca@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
                      theevstore.ca@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-cyan-400 mt-1" />
                  <div>
                    <p className="text-white font-medium">Hours</p>
                    <p className="text-gray-400">
                      Mon - Fri: 8:00 AM - 4:00 PM<br />
                      Saturday: Closed<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 text-center">
              <Zap className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Expert Knowledge</h3>
              <p className="text-gray-400">Our team knows Tesla vehicles inside and out</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 text-center">
              <Shield className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Quality Guaranteed</h3>
              <p className="text-gray-400">Every vehicle inspected and warrantied</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 text-center">
              <Truck className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Canada-Wide</h3>
              <p className="text-gray-400">Delivery available across Canada</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
