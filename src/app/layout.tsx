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
  title: 'EVStore - Premium Tesla Dealership | Kamloops, BC',
  description: 'Premium pre-owned Tesla vehicles in Kamloops, BC. Tesla Model S, 3, X, Y available. Tesla service, parts & nationwide delivery across Canada.',
  keywords: 'Tesla dealership Kamloops, used Tesla BC, Tesla Model S 3 X Y, Tesla service Kamloops, Tesla parts Canada, electric vehicles BC',
  openGraph: {
    title: 'EVStore - Premium Tesla Dealership | Kamloops, BC',
    description: 'Premium pre-owned Tesla vehicles. Tesla service & parts. Nationwide delivery across Canada.',
    url: 'https://evstore.ca',
    siteName: 'EVStore',
    locale: 'en_CA',
    type: 'website',
  },
  robots: 'index, follow',
  alternates: {
    canonical: 'https://evstore.ca'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${orbitron.variable} ${exo2.variable} antialiased bg-black text-white overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}