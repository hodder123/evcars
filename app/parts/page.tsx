import Header from '../components/Header'
import Footer from '../components/Footer'
import { Battery, Wrench, Cpu, Car, Phone, ChevronRight } from 'lucide-react'
import Link from 'next/link'

const partsCategories = [
  {
    icon: Battery,
    title: 'Battery Components',
    items: ['Battery Modules', 'BMS Units', 'Cooling Systems', 'Charging Ports']
  },
  {
    icon: Cpu,
    title: 'Electronics',
    items: ['Autopilot Cameras', 'Touchscreens', 'ECU Units', 'Sensors']
  },
  {
    icon: Car,
    title: 'Body & Interior',
    items: ['Door Handles', 'Window Regulators', 'Seats', 'Trim Pieces']
  },
  {
    icon: Wrench,
    title: 'Mechanical',
    items: ['Suspension Parts', 'Brake Components', 'Steering', 'HVAC Parts']
  }
]

export default function PartsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <Header />
      
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Parts & Accessories</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Genuine Tesla parts and aftermarket accessories. We stock components for all Tesla models.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {partsCategories.map((category, idx) => (
              <div key={idx} className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="text-gray-400 flex items-center">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Need a Specific Part?</h2>
            <p className="text-gray-400 mb-6">
              We can source hard-to-find Tesla parts. Contact us with your VIN and part number.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="tel:2508288761"
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold rounded-full transition-all flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call 250-828-8761</span>
              </a>
              <Link 
                href="/contact"
                className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-bold rounded-full transition-all"
              >
                Request Part
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
