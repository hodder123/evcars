import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The EV Store | Used Tesla Vehicles Kamloops',
  description: 'Premium pre-owned Tesla vehicles in Kamloops, BC. Model S, 3, X, Y available. Service, parts, and repairs. Call 250-828-8761.',
  keywords: 'Tesla, used Tesla, EV, electric vehicles, Kamloops, Model 3, Model Y, Model S, Model X',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
