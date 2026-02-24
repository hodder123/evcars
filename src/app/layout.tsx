import type { Metadata } from 'next'
import { Inter, Orbitron, Exo_2 } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const orbitron = Orbitron({ 
  subsets: ['latin'], 
  variable: '--font-orbitron',
  weight: ['400', '500', '600', '700', '800', '900']
})
const exo2 = Exo_2({ 
  subsets: ['latin'], 
  variable: '--font-exo2',
  weight: ['300', '400', '500', '600', '700', '800']
})

export const metadata: Metadata = {
  title: 'Used Tesla for Sale Kamloops | The EV Store | Electric Vehicles',
  description: 'The EV Store specializes in pre-owned Tesla vehicles in Kamloops. Quality inspected, competitively priced. Model 3, Y, S, X available. Call (250) 828-8761.',
  keywords: 'used tesla kamloops, electric vehicles for sale kamloops, used ev kamloops, tesla model 3 kamloops, ev charging kamloops, pre-owned electric cars',
  icons: {
    icon: '/tesla.png',
  },
  openGraph: {
    title: 'Used Tesla for Sale Kamloops | The EV Store',
    description: 'Quality pre-owned Tesla vehicles in Kamloops. Tesla Model 3, Y, S, X available. Competitive financing.',
    url: 'https://theevstore.ca',
    siteName: 'The EV Store',
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The EV Store | Used Tesla Kamloops',
    description: 'Quality pre-owned Tesla vehicles in Kamloops.',
  },
  robots: 'index, follow',
  alternates: {
    canonical: 'https://theevstore.ca'
  },
  verification: {
    google: 'LuRseNzQqfqak0m-8EGC2x4hrJn6YVnOjDQocDyzbsk',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoDealer",
              "name": "The EV Store",
              "alternateName": "The EV Store Kamloops",
              "url": "https://theevstore.ca",
              "logo": "https://theevstore.ca/tesla.png",
              "image": [
                "https://theevstore.ca/images/showroom.jpg",
                "https://theevstore.ca/images/tesla-model-3.jpg"
              ],
              "description": "The EV Store specializes in pre-owned Tesla vehicles in Kamloops. Quality inspected, competitive pricing. Model 3, Y, S, X available. Call (250) 828-8761.",
              "telephone": "+12508288761",
              "email": "info@theevstore.ca",
              "priceRange": "$$$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "419 Mt. Paul Way",
                "addressLocality": "Kamloops",
                "addressRegion": "BC",
                "postalCode": "V2H 1A7",
                "addressCountry": "CA"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "50.6745",
                "longitude": "-120.3273"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  "opens": "09:00",
                  "closes": "18:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Sunday"],
                  "opens": "10:00",
                  "closes": "17:00"
                }
              ],
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Kamloops"
                },
                {
                  "@type": "City",
                  "name": "Kelowna"
                },
                {
                  "@type": "City",
                  "name": "Vernon"
                },
                {
                  "@type": "City",
                  "name": "Penticton"
                }
              ],
              "makesOffer": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "EV Financing",
                    "description": "Competitive financing options for electric vehicles"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "EV Trade-In",
                    "description": "Trade in your current vehicle toward an EV"
                  }
                }
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.7",
                "reviewCount": "23"
              },
              "sameAs": [
                "https://www.facebook.com/theevstorekamloops",
                "https://www.instagram.com/theevstorekamloops"
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.variable} ${orbitron.variable} ${exo2.variable} antialiased bg-black text-white overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}
