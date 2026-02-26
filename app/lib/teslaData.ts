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
  gallery: string[]
  description: string
  features: string[]
  condition: 'Excellent' | 'Very Good' | 'Good'
  stockNumber: string
  vin: string
  exteriorColor: string
  interiorColor: string
  bodyStyle: string
  drivetrain: string
  fuelType: string
  transmission: string
  doors: number
  history: string
  warranty: string
}

export const allTeslas: Tesla[] = [
  {
    id: 1,
    model: 'Model S Plaid',
    year: 2023,
    price: 80000,
    mileage: 8500,
    battery: '100 kWh',
    range: 628,
    acceleration: '1.99s',
    seats: 5,
    autopilot: true,
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&h=500&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&h=500&fit=crop'
    ],
    description: 'The ultimate Tesla sedan with tri-motor setup and incredible performance. This vehicle represents the pinnacle of electric vehicle technology with mind-bending acceleration and luxury appointments throughout.',
    features: ['Tri-Motor AWD', 'Full Self-Driving', 'Carbon Fiber Interior', '21" Wheels', 'Premium Audio', 'Heated Seats', 'Glass Roof', 'Autopilot', 'Navigation', 'Bluetooth'],
    condition: 'Excellent',
    stockNumber: 'TSLA-001',
    vin: '5YJ3E1EA8PF000001',
    exteriorColor: 'Pearl White',
    interiorColor: 'Black',
    bodyStyle: 'Sedan',
    drivetrain: 'AWD',
    fuelType: 'Electric',
    transmission: 'Automatic',
    doors: 4,
    history: 'One owner, meticulously maintained. All service records available. No accidents.',
    warranty: 'Remaining factory warranty + extended service plan available'
  },
  {
    id: 2,
    model: 'Model 3 Performance',
    year: 2022,
    price: 54900,
    mileage: 12000,
    battery: '82 kWh',
    range: 547,
    acceleration: '3.1s',
    seats: 5,
    autopilot: true,
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&h=500&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&h=500&fit=crop'
    ],
    description: 'Track-ready performance sedan with dual motor all-wheel drive. This vehicle offers exceptional handling and acceleration with track mode capabilities.',
    features: ['Dual-Motor AWD', 'Track Mode', 'Performance Brakes', '20" Wheels', 'Premium Audio', 'Heated Seats', 'Glass Roof', 'Autopilot', 'Navigation', 'Bluetooth'],
    condition: 'Excellent',
    stockNumber: 'TSLA-002',
    vin: '5YJ3E1EB8NF000002',
    exteriorColor: 'Midnight Silver',
    interiorColor: 'White',
    bodyStyle: 'Sedan',
    drivetrain: 'AWD',
    fuelType: 'Electric',
    transmission: 'Automatic',
    doors: 4,
    history: 'Single owner, garage kept. All Tesla service history documented.',
    warranty: 'Balance of factory warranty'
  },
  {
    id: 3,
    model: 'Model Y Long Range',
    year: 2023,
    price: 67900,
    mileage: 5200,
    battery: '75 kWh',
    range: 533,
    acceleration: '4.8s',
    seats: 7,
    autopilot: true,
    image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=500&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=500&fit=crop'
    ],
    description: 'Versatile SUV with 7-seat configuration and impressive range. Perfect family vehicle with cutting-edge technology.',
    features: ['Dual-Motor AWD', '7-Seat Interior', 'Autopilot', '19" Wheels', 'Premium Audio', 'Heated Seats', 'Panoramic Glass Roof', 'Navigation', 'Bluetooth', 'Power Liftgate'],
    condition: 'Excellent',
    stockNumber: 'TSLA-003',
    vin: '7SAYGDEE8PF000003',
    exteriorColor: 'Deep Blue',
    interiorColor: 'Black',
    bodyStyle: 'SUV',
    drivetrain: 'AWD',
    fuelType: 'Electric',
    transmission: 'Automatic',
    doors: 4,
    history: 'Like new condition. All service up to date. No accidents.',
    warranty: 'Full factory warranty remaining'
  },
  {
    id: 4,
    model: 'Model X Plaid',
    year: 2022,
    price: 112900,
    mileage: 15000,
    battery: '100 kWh',
    range: 543,
    acceleration: '2.5s',
    seats: 7,
    autopilot: true,
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=500&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=500&fit=crop'
    ],
    description: 'Luxury SUV with falcon wing doors and tri-motor performance. The ultimate in Tesla luxury and capability.',
    features: ['Tri-Motor AWD', 'Falcon Wing Doors', 'Full Self-Driving', '22" Wheels', 'Premium Audio', 'Heated & Ventilated Seats', 'Panoramic Windshield', 'Autopilot', 'Navigation', 'Bluetooth'],
    condition: 'Very Good',
    stockNumber: 'TSLA-004',
    vin: '7SAXCBE50NF000004',
    exteriorColor: 'Ultra Red',
    interiorColor: 'Cream',
    bodyStyle: 'SUV',
    drivetrain: 'AWD',
    fuelType: 'Electric',
    transmission: 'Automatic',
    doors: 5,
    history: 'Two owners, well maintained. Complete service history.',
    warranty: 'Extended warranty available'
  },
  {
    id: 5,
    model: 'Model 3 Standard Range',
    year: 2021,
    price: 37900,
    mileage: 28000,
    battery: '60 kWh',
    range: 423,
    acceleration: '5.8s',
    seats: 5,
    autopilot: false,
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&h=500&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&h=500&fit=crop'
    ],
    description: 'Entry-level Tesla with excellent efficiency and modern features. Perfect introduction to electric driving.',
    features: ['RWD', 'Standard Autopilot', '18" Wheels', 'Premium Audio', 'Heated Seats', 'Glass Roof', 'Navigation', 'Bluetooth', 'Backup Camera'],
    condition: 'Good',
    stockNumber: 'TSLA-005',
    vin: '5YJ3E1EA0MF000005',
    exteriorColor: 'Solid Black',
    interiorColor: 'Black',
    bodyStyle: 'Sedan',
    drivetrain: 'RWD',
    fuelType: 'Electric',
    transmission: 'Automatic',
    doors: 4,
    history: 'Clean history, regular maintenance. One owner vehicle.',
    warranty: 'Limited warranty available'
  }
]

export const getTeslaById = (id: string): Tesla | undefined => {
  return allTeslas.find(tesla => tesla.id.toString() === id)
}

export const getBasicTeslas = () => allTeslas
