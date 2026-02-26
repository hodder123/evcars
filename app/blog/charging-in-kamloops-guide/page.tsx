import Link from 'next/link'
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <Header />
      
      <main className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Link */}
          <Link 
            href="/blog" 
            className="inline-flex items-center text-gray-400 hover:text-cyan-400 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          {/* Article Header */}
          <article>
            <div className="flex items-center space-x-4 mb-4 text-sm text-gray-400">
              <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full">Charging</span>
              <span>6 min read</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Charging Your Tesla in Kamloops: A Complete Guide
            </h1>
            
            <div className="flex items-center space-x-6 text-gray-400 mb-8">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>EV Store Team</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>February 10, 2025</span>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-gray-300 leading-relaxed mb-6">
                Living in Kamloops with a Tesla is easier than ever, thanks to the growing charging infrastructure in and around the city. Whether you&apos;re a new Tesla owner or considering your first EV, here&apos;s everything you need to know about charging in Kamloops.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Tesla Superchargers in Kamloops</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Kamloops is well-served by Tesla&apos;s Supercharger network. Here are the current locations:
              </p>
              
              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 mb-6">
                <h3 className="text-lg font-bold text-white mb-3">Aberdeen Mall Supercharger</h3>
                <ul className="text-gray-300 space-y-1">
                  <li><strong>Location:</strong> 1320 West Trans Canada Highway</li>
                  <li><strong>Stalls:</strong> 8 V3 Superchargers (250kW)</li>
                  <li><strong>Parking:</strong> Free while charging</li>
                  <li><strong>Amenities:</strong> Shopping, restaurants, washrooms</li>
                  <li><strong>Best for:</strong> Quick top-ups while shopping</li>
                </ul>
              </div>

              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 mb-6">
                <h3 className="text-lg font-bold text-white mb-3">Columbia Street Supercharger</h3>
                <ul className="text-gray-300 space-y-1">
                  <li><strong>Location:</strong> 450 Columbia Street (Downtown)</li>
                  <li><strong>Stalls:</strong> 6 V3 Superchargers (250kW)</li>
                  <li><strong>Parking:</strong> 2-hour limit</li>
                  <li><strong>Amenities:</strong> Downtown restaurants, Riverside Park nearby</li>
                  <li><strong>Best for:</strong> Day trips to downtown</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Home Charging Options</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                For daily driving, home charging is the most convenient and cost-effective option. Here are your choices:
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">Level 1: Standard Household Outlet (120V)</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li><strong>Speed:</strong> 6-8 km of range per hour</li>
                <li><strong>Best for:</strong> Overnight charging with short daily commutes</li>
                <li><strong>Cost:</strong> No installation needed, uses standard outlet</li>
                <li><strong>Full charge:</strong> 40-60 hours</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">Level 2: 240V Home Charging</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li><strong>Speed:</strong> 40-50 km of range per hour</li>
                <li><strong>Best for:</strong> Most Tesla owners—charges overnight</li>
                <li><strong>Installation:</strong> Requires electrician, NEMA 14-50 outlet or Wall Connector</li>
                <li><strong>Full charge:</strong> 6-10 hours</li>
                <li><strong>Cost:</strong> $500-$2,000 depending on electrical work needed</li>
              </ul>

              <p className="text-gray-300 leading-relaxed mb-4">
                <strong>Pro tip:</strong> Many Kamloops homeowners find that even Level 1 charging is sufficient for daily commuting, as the average Canadian drives less than 50 km per day.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Public Charging Networks</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Beyond Tesla Superchargers, Kamloops has growing options for other charging networks:
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">Flo Network (ChargePoint)</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>Multiple locations including Thompson Rivers University</li>
                <li>Level 2 chargers available</li>
                <li>App-based payment system</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">Petro-Canada</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>Highway 1 location for road trips</li>
                <li>DC fast charging available</li>
                <li>Compatible with Tesla adapter</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">BC Hydro EV Network</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>Expanding network across BC</li>
                <li>Reliable DC fast charging</li>
                <li>Good coverage for trips to Vancouver or the Okanagan</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Charging Costs in Kamloops</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Here&apos;s what you can expect to pay for charging:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li><strong>Home charging (BC Hydro):</strong> ~$0.15/kWh = $12-$15 for a full charge</li>
                <li><strong>Tesla Supercharger:</strong> ~$0.40-$0.50/kWh = $30-$40 for a full charge</li>
                <li><strong>Public Level 2:</strong> Often free or $1-$2/hour</li>
                <li><strong>Public DC Fast Charging:</strong> $0.30-$0.60/kWh depending on network</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mb-4">
                For perspective, driving 20,000 km per year in a Tesla Model 3 costs approximately $400-$500 in electricity if charging mostly at home—compared to $2,000+ in gas for a comparable gas vehicle.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Winter Charging Tips</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Kamloops winters can be cold, which affects battery performance:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>Keep your Tesla plugged in during very cold weather</li>
                <li>Precondition the battery while still plugged in</li>
                <li>Expect 15-30% reduced range in winter months</li>
                <li>Use seat heaters instead of cabin heat when possible</li>
                <li>Store the vehicle in a garage if available</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Road Trips from Kamloops</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Kamloops is perfectly positioned for EV road trips:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li><strong>To Vancouver:</strong> Superchargers in Hope and Chilliwack</li>
                <li><strong>To Kelowna:</strong> Supercharger in Merritt</li>
                <li><strong>To Banff:</strong> Superchargers in Revelstoke and Golden</li>
                <li><strong>To Jasper:</strong> Chargers in Blue River and Valemount</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mb-4">
                Tesla&apos;s trip planner makes long-distance travel seamless, automatically routing you through Superchargers and showing charging times.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Need Help with Charging Setup?</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                At The EV Store, we don&apos;t just sell Tesla vehicles—we help you integrate EV ownership into your life. From recommending electricians for home charging installation to showing you how to use the Tesla app, we&apos;re here to help.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Visit us at 419 Mount Paul Way, or give us a call at 250-828-8761 to learn more about charging your Tesla in Kamloops.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-12 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-2">Ready to Go Electric?</h3>
              <p className="text-gray-400 mb-4">Browse our selection of pre-owned Tesla vehicles, all ready for Kamloops driving.</p>
              <Link 
                href="/cars"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold rounded-lg transition-all"
              >
                View Inventory
              </Link>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  )
}
