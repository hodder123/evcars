import Header from '../components/Header'
import Footer from '../components/Footer'
import { Wrench, Battery, Zap, Shield, Phone } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Wrench,
    title: 'General Maintenance',
    description: 'Regular service including tire rotation, brake inspection, fluid checks, and software updates.',
    price: 'From $149'
  },
  {
    icon: Battery,
    title: 'Battery Service',
    description: 'Battery health diagnostics, module replacement, cooling system service, and range optimization.',
    price: 'From $299'
  },
  {
    icon: Zap,
    title: 'Charging System',
    description: 'Charging port repair, onboard charger service, and home charging installation consultation.',
    price: 'From $199'
  },
  {
    icon: Shield,
    title: 'Body & Paint',
    description: 'Minor dent repair, paint touch-ups, and collision repair coordination with certified shops.',
    price: 'Quote'
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <Header />
      
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Service & Repairs</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Expert Tesla service and repairs in Kamloops. Our technicians are trained to work on all Tesla models.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {services.map((service, idx) => (
              <div key={idx} className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-cyan-500 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                    <service.icon className="w-7 h-7 text-cyan-400" />
                  </div>
                  <span className="text-cyan-400 font-bold">{service.price}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 text-center">
              <h4 className="text-lg font-bold text-white mb-2">Why Choose Us?</h4>
              <p className="text-gray-400 text-sm">Tesla-trained technicians with years of experience</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 text-center">
              <h4 className="text-lg font-bold text-white mb-2">Genuine Parts</h4>
              <p className="text-gray-400 text-sm">We use only quality OEM and aftermarket parts</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 text-center">
              <h4 className="text-lg font-bold text-white mb-2">Warranty</h4>
              <p className="text-gray-400 text-sm">All repairs come with our service warranty</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Book a Service Appointment</h2>
            <p className="text-gray-400 mb-6">
              Call us or visit our service center at 419 Mount Paul Way, Kamloops
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="tel:2508288761"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-bold rounded-full transition-all flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call 250-828-8761</span>
              </a>
              <Link 
                href="/contact"
                className="px-8 py-4 bg-gray-700 hover:bg-gray-600 text-white font-bold rounded-full transition-all"
              >
                Schedule Online
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
