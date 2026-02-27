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
              <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full">Buying Guide</span>
              <span>7 min read</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Understanding EV Tax Incentives and Rebates in Canada (2026)
            </h1>
            
            <div className="flex items-center space-x-6 text-gray-400 mb-8">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>EV Store Team</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>February 27, 2026</span>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-gray-300 leading-relaxed mb-6">
                Thinking about making the switch to electric? There&apos;s never been a better time. Canada offers several federal and provincial incentives that can significantly reduce the upfront cost of your EV purchase.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Federal iZEV Program</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                The Incentives for Zero-Emission Vehicles (iZEV) program offers up to <strong className="text-white">$5,000 off</strong> the purchase or lease of a qualifying battery electric vehicle (BEV) or long-range plug-in hybrid (PHEV).
              </p>
              <p className="text-gray-300 leading-relaxed mb-4"><strong>Key details:</strong></p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>Purchase price must be below $60,000 (MSRP)</li>
                <li>Vehicle must be new and registered in Canada</li>
                <li>Applies to both personal and business use</li>
                <li>Dealers apply the incentive at point of sale</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">British Columbia Provincial Rebates</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                BC residents can stack provincial incentives on top of federal ones:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li><strong>CleanBC Go Electric rebate:</strong> Up to $4,000 for new EVs</li>
                <li><strong>Scrap-It program:</strong> Up to $6,000 when you scrap an old gas vehicle</li>
                <li><strong>Used EV rebate:</strong> Up to $2,000 for qualifying used EVs</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mb-6">
                <strong className="text-cyan-400">Combined savings potential: Up to $15,000 off your EV!</strong>
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Business Tax Benefits</h2>
              <p className="text-gray-300 leading-relaxed mb-4">If you&apos;re purchasing for business use, additional advantages include:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>Accelerated Capital Cost Allowance (CCA) – write off up to 100% in the first year</li>
                <li>GST/HST input tax credits on operating costs</li>
                <li>Reduced taxable benefit for company car usage</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Charging Infrastructure Credits</h2>
              <p className="text-gray-300 leading-relaxed mb-4">Don&apos;t forget about home charging:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li><strong>EV charger rebates:</strong> Up to $350 for Level 2 home charger installation</li>
                <li><strong>Federal tax credit:</strong> 15% of installation costs (up to $500)</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Maximizing Your Savings</h2>
              <p className="text-gray-300 leading-relaxed mb-4"><strong>Tips to get the most value:</strong></p>
              <ol className="list-decimal list-inside text-gray-300 space-y-2 mb-6">
                <li>Stack federal + provincial rebates when possible</li>
                <li>Consider a qualifying used EV for lower upfront costs</li>
                <li>Time your purchase around program deadlines</li>
                <li>Keep documentation for tax filing</li>
              </ol>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">The Bottom Line</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Between incentives, lower fuel costs (about 1/5th of gas), reduced maintenance, and environmental benefits, EVs are increasingly the smart financial choice for Canadian drivers.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-12 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-2">Ready to Claim Your Rebates?</h3>
              <p className="text-gray-400 mb-4">Browse our qualifying EV inventory and start saving today.</p>
              <Link 
                href="/cars"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold rounded-lg transition-all"
              >
                View EV Inventory
              </Link>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  )
}