'use client'

import React, { useState } from 'react'
import { Search, Filter, RotateCcw, ChevronDown, Sliders, TrendingUp, Calendar, DollarSign, Gauge } from 'lucide-react'

interface FilterBarProps {
  searchTerm: string
  setSearchTerm: (term: string) => void
  sortBy: string
  setSortBy: (sort: string) => void
  filters: {
    model: string
    yearRange: [number, number]
    priceRange: [number, number]
    mileageRange: [number, number]
  }
  setFilters: (filters: {
    model: string
    yearRange: [number, number]
    priceRange: [number, number]
    mileageRange: [number, number]
  }) => void
  totalCount: number
  filteredCount: number
}

const FilterBar: React.FC<FilterBarProps> = ({
  searchTerm,
  setSearchTerm,
  sortBy,
  setSortBy,
  filters,
  setFilters,
  totalCount,
  filteredCount
}) => {
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false)
  const [isSearchFocused, setIsSearchFocused] = useState(false)

  const resetFilters = () => {
    setFilters({
      model: '',
      yearRange: [2015, 2025],
      priceRange: [0, 150000],
      mileageRange: [0, 300000]
    })
    setSearchTerm('')
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-CA', { 
      style: 'currency', 
      currency: 'CAD', 
      minimumFractionDigits: 0,
      maximumFractionDigits: 0 
    }).format(price)
  }

  const formatMileage = (mileage: number) => {
    return new Intl.NumberFormat('en-CA').format(mileage)
  }

  const sortOptions = [
    { value: 'price-low', label: 'Price: Low → High', icon: TrendingUp },
    { value: 'price-high', label: 'Price: High → Low', icon: TrendingUp },
    { value: 'year-new', label: 'Year: Newest First', icon: Calendar },
    { value: 'year-old', label: 'Year: Oldest First', icon: Calendar },
    { value: 'mileage-low', label: 'Mileage: Low → High', icon: Gauge },
    { value: 'mileage-high', label: 'Mileage: High → Low', icon: Gauge }
  ]

  const modelOptions = [
    { value: '', label: 'All Models', description: 'View entire inventory' },
    { value: 'Model S', label: 'Model S', description: 'Luxury sedan' },
    { value: 'Model 3', label: 'Model 3', description: 'Compact sedan' },
    { value: 'Model X', label: 'Model X', description: 'Luxury SUV' },
    { value: 'Model Y', label: 'Model Y', description: 'Compact SUV' }
  ]

  return (
    <div className="space-y-6">
      {/* Main Search and Sort Bar */}
      <div className="relative bg-gradient-to-r from-gray-900/80 via-black/90 to-gray-900/80 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 shadow-2xl shadow-cyan-500/5">
        {/* Animated background pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-blue-500/5 rounded-2xl"></div>
        
        <div className="relative flex flex-col lg:flex-row gap-6">
          {/* Enhanced Search */}
          <div className="flex-1 relative group">
            <div className={`absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl blur transition-all duration-300 ${
              isSearchFocused ? 'opacity-100' : 'opacity-0'
            }`}></div>
            <div className="relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 transition-all duration-300">
                <Search className={`w-5 h-5 transition-colors ${isSearchFocused ? 'text-cyan-400' : 'text-gray-400'}`} />
              </div>
              <input
                type="text"
                placeholder="Search by model, year, or features..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                className="w-full pl-12 pr-4 py-4 bg-black/50 border border-gray-600/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-300 text-lg"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  ×
                </button>
              )}
            </div>
          </div>

          {/* Modern Sort Dropdown */}
          <div className="relative lg:w-64">
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full appearance-none pl-12 pr-12 py-4 bg-black/50 border border-gray-600/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-300 cursor-pointer"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
              <TrendingUp className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
            </div>
          </div>

          {/* Advanced Filters Toggle */}
          <button
            onClick={() => setIsAdvancedOpen(!isAdvancedOpen)}
            className={`flex items-center space-x-2 px-6 py-4 rounded-xl border transition-all duration-300 ${
              isAdvancedOpen 
                ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-cyan-400/50 text-cyan-400' 
                : 'bg-gray-900/50 border-gray-600/30 text-gray-300 hover:border-cyan-400/30 hover:text-cyan-400'
            }`}
          >
            <Sliders className="w-5 h-5" />
            <span className="font-medium">Filters</span>
            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isAdvancedOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Results Summary */}
        <div className="flex justify-between items-center mt-6 pt-6 border-t border-gray-700/30">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-gray-400 text-sm">Showing</span>
              <span className="text-cyan-400 font-bold text-lg">{filteredCount}</span>
              <span className="text-gray-400 text-sm">of {totalCount} vehicles</span>
            </div>
            {filteredCount !== totalCount && (
              <div className="px-3 py-1 bg-cyan-500/10 border border-cyan-400/30 rounded-full">
                <span className="text-cyan-400 text-xs font-medium">Filtered</span>
              </div>
            )}
          </div>
          
          <button
            onClick={resetFilters}
            className="group flex items-center space-x-2 px-4 py-2 text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:bg-gray-800/50 rounded-lg"
          >
            <RotateCcw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
            <span className="text-sm font-medium">Reset All</span>
          </button>
        </div>
      </div>

      {/* Advanced Filters Panel */}
      <div className={`overflow-hidden transition-all duration-500 ${
        isAdvancedOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-gradient-to-br from-gray-900/90 via-black/95 to-gray-900/90 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Model Filter */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg flex items-center justify-center">
                  <Filter className="w-4 h-4 text-cyan-400" />
                </div>
                <label className="text-white font-medium">Model</label>
              </div>
              <select
                value={filters.model}
                onChange={(e) => setFilters({...filters, model: e.target.value})}
                className="w-full px-4 py-3 bg-black/50 border border-gray-600/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all appearance-none"
              >
                {modelOptions.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
              <p className="text-xs text-gray-400">
                {modelOptions.find(opt => opt.value === filters.model)?.description}
              </p>
            </div>

            {/* Year Range */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-lg flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-purple-400" />
                </div>
                <label className="text-white font-medium">Year Range</label>
              </div>
              <div className="space-y-2">
                <div className="flex gap-2">
                  <input
                    type="number"
                    min="2015"
                    max="2025"
                    value={filters.yearRange[0]}
                    onChange={(e) => setFilters({...filters, yearRange: [parseInt(e.target.value) || 2015, filters.yearRange[1]]})}
                    className="w-1/2 px-3 py-2.5 bg-black/50 border border-gray-600/30 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-400/50"
                    placeholder="Min"
                  />
                  <input
                    type="number"
                    min="2015"
                    max="2025"
                    value={filters.yearRange[1]}
                    onChange={(e) => setFilters({...filters, yearRange: [filters.yearRange[0], parseInt(e.target.value) || 2025]})}
                    className="w-1/2 px-3 py-2.5 bg-black/50 border border-gray-600/30 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-400/50"
                    placeholder="Max"
                  />
                </div>
                <p className="text-xs text-gray-400">
                  {filters.yearRange[0]} - {filters.yearRange[1]}
                </p>
              </div>
            </div>

            {/* Price Range */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500/20 to-emerald-600/20 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-4 h-4 text-green-400" />
                </div>
                <label className="text-white font-medium">Price Range</label>
              </div>
              <div className="space-y-2">
                <div className="flex gap-2">
                  <input
                    type="number"
                    min="0"
                    max="150000"
                    step="5000"
                    value={filters.priceRange[0]}
                    onChange={(e) => setFilters({...filters, priceRange: [parseInt(e.target.value) || 0, filters.priceRange[1]]})}
                    className="w-1/2 px-3 py-2.5 bg-black/50 border border-gray-600/30 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-green-400/50"
                    placeholder="Min"
                  />
                  <input
                    type="number"
                    min="0"
                    max="150000"
                    step="5000"
                    value={filters.priceRange[1]}
                    onChange={(e) => setFilters({...filters, priceRange: [filters.priceRange[0], parseInt(e.target.value) || 150000]})}
                    className="w-1/2 px-3 py-2.5 bg-black/50 border border-gray-600/30 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-green-400/50"
                    placeholder="Max"
                  />
                </div>
                <p className="text-xs text-gray-400">
                  {formatPrice(filters.priceRange[0])} - {formatPrice(filters.priceRange[1])}
                </p>
              </div>
            </div>

            {/* Mileage Range */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-lg flex items-center justify-center">
                  <Gauge className="w-4 h-4 text-orange-400" />
                </div>
                <label className="text-white font-medium">Mileage</label>
              </div>
              <div className="space-y-2">
                <div className="flex gap-2">
                  <input
                    type="number"
                    min="0"
                    max="300000"
                    step="5000"
                    value={filters.mileageRange[0]}
                    onChange={(e) => setFilters({...filters, mileageRange: [parseInt(e.target.value) || 0, filters.mileageRange[1]]})}
                    className="w-1/2 px-3 py-2.5 bg-black/50 border border-gray-600/30 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-orange-400/50"
                    placeholder="Min"
                  />
                  <input
                    type="number"
                    min="0"
                    max="300000"
                    step="5000"
                    value={filters.mileageRange[1]}
                    onChange={(e) => setFilters({...filters, mileageRange: [filters.mileageRange[0], parseInt(e.target.value) || 300000]})}
                    className="w-1/2 px-3 py-2.5 bg-black/50 border border-gray-600/30 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-orange-400/50"
                    placeholder="Max"
                  />
                </div>
                <p className="text-xs text-gray-400">
                  {formatMileage(filters.mileageRange[0])} - {formatMileage(filters.mileageRange[1])} km
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterBar