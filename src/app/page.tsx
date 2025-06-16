'use client'

import { useState, useMemo } from 'react'
import { Zap, Star } from 'lucide-react'
import Header from './components/Header'
import FilterBar from './components/FilterBar'
import TeslaCard from './components/TeslaCard'
import Footer from './components/Footer'
import ContactModal from './components/ContactModal'
import { getBasicTeslas } from './lib/teslaData'

const HomePage = () => {
  const [showContact, setShowContact] = useState(false)
  const [filters, setFilters] = useState({
    model: '',
    yearRange: [2015, 2025] as [number, number],
    priceRange: [0, 150000] as [number, number],
    mileageRange: [0, 300000] as [number, number]
  })
  const [sortBy, setSortBy] = useState('price-low')
  const [searchTerm, setSearchTerm] = useState('')

  // Get Tesla data from shared source
  const teslas = useMemo(() => getBasicTeslas(), [])

  const filteredAndSortedTeslas = useMemo(() => {
    const filtered = teslas.filter(tesla => {
      const matchesModel = !filters.model || tesla.model.toLowerCase().includes(filters.model.toLowerCase())
      const matchesYear = tesla.year >= filters.yearRange[0] && tesla.year <= filters.yearRange[1]
      const matchesPrice = tesla.price >= filters.priceRange[0] && tesla.price <= filters.priceRange[1]
      const matchesMileage = tesla.mileage >= filters.mileageRange[0] && tesla.mileage <= filters.mileageRange[1]
      const matchesSearch = !searchTerm || tesla.model.toLowerCase().includes(searchTerm.toLowerCase())
      
      return matchesModel && matchesYear && matchesPrice && matchesMileage && matchesSearch
    })

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price
        case 'price-high':
          return b.price - a.price
        case 'year-new':
          return b.year - a.year
        case 'year-old':
          return a.year - b.year
        case 'mileage-low':
          return a.mileage - b.mileage
        case 'mileage-high':
          return b.mileage - a.mileage
        default:
          return 0
      }
    })

    return filtered
  }, [teslas, filters, sortBy, searchTerm])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Header */}
      <Header onContactClick={() => setShowContact(true)} />

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-16 px-4 overflow-hidden">
          {/* Background Grid */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}></div>
          </div>

          <div className="relative max-w-7xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Zap className="w-12 h-12 text-cyan-400" />
              <h1 className="text-5xl md:text-7xl font-cyber font-black text-white">
                Tesla <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text">Unleashed</span>
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover premium pre-owned Tesla vehicles in Kamloops, BC. 
              From Model S to Model Y, find your perfect electric vehicle with full service support.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="px-4 py-2 bg-cyan-500/10 border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-medium">
                🔋 All Battery Health Certified
              </span>
              <span className="px-4 py-2 bg-cyan-500/10 border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-medium">
                🚚 Canada-Wide Delivery
              </span>
              <span className="px-4 py-2 bg-cyan-500/10 border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-medium">
                ⚡ Service & Parts Available
              </span>
            </div>
          </div>
        </section>

        {/* Inventory Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          {/* Filter Bar */}
          <FilterBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            sortBy={sortBy}
            setSortBy={setSortBy}
            filters={filters}
            setFilters={setFilters}
            totalCount={teslas.length}
            filteredCount={filteredAndSortedTeslas.length}
          />

          {/* Tesla Grid */}
          {filteredAndSortedTeslas.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredAndSortedTeslas.map((tesla) => (
                <TeslaCard
                  key={tesla.id}
                  tesla={tesla}
                  onContactClick={() => setShowContact(true)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 max-w-md mx-auto">
                <Star className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">No Tesla Found</h3>
                <p className="text-gray-400 mb-6">
                  No vehicles match your current filters. Try adjusting your search criteria.
                </p>
                <button
                  onClick={() => {
                    setFilters({
                      model: '',
                      yearRange: [2015, 2025],
                      priceRange: [0, 150000],
                      mileageRange: [0, 300000]
                    })
                    setSearchTerm('')
                  }}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold px-6 py-3 rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-300"
                >
                  Clear All Filters
                </button>
              </div>
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Contact Modal */}
      <ContactModal 
        isOpen={showContact} 
        onClose={() => setShowContact(false)} 
      />
    </div>
  )
}

export default HomePage