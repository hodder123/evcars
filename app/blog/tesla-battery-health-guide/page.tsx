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
              <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full">Maintenance</span>
              <span>7 min read</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Tesla Battery Health: What You Need to Know
            </h1>
            
            <div className="flex items-center space-x-6 text-gray-400 mb-8">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>EV Store Team</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>February 15, 2025</span>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-gray-300 leading-relaxed mb-6">
                One of the most common questions we hear from prospective Tesla owners is about battery health and longevity. Understanding how Tesla batteries work, what degradation to expect, and how to maximize your battery&apos;s life is crucial for any EV owner. Let&apos;s dive into everything you need to know.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Understanding Battery Degradation</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                All lithium-ion batteries experience some degradation over time, and Tesla batteries are no exception. However, Tesla&apos;s battery technology is among the best in the industry. Here&apos;s what you can typically expect:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li><strong>First year:</strong> 5-7% capacity loss (normal and expected)</li>
                <li><strong>Years 2-5:</strong> 1-2% loss per year</li>
                <li><strong>After 5 years:</strong> Less than 1% loss per year</li>
                <li><strong>Total over 8 years:</strong> Typically 10-15% total degradation</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mb-4">
                This means a Tesla with 400 km of range when new might have 340-360 km of range after 8 years—still plenty for daily driving and most road trips.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">How to Check Your Battery Health</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Checking your Tesla&apos;s battery health is straightforward:
              </p>
              <ol className="list-decimal list-inside text-gray-300 space-y-2 mb-6">
                <li>Fully charge your vehicle to 100%</li>
                <li>Note the rated range displayed</li>
                <li>Compare this to the original EPA rating when new</li>
                <li>Use the percentage to calculate degradation</li>
              </ol>
              <p className="text-gray-300 leading-relaxed mb-4">
                For example, if your Model 3 Long Range originally had 580 km of range and now shows 540 km at 100%, you have about 7% degradation—which is completely normal.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Tips for Maximizing Battery Life</h2>
              
              <h3 className="text-xl font-semibold text-white mt-6 mb-3">1. Daily Charging Habits</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                For daily use, keep your battery between 20% and 80%. Only charge to 100% when you need the extra range for a long trip. Tesla&apos;s battery management system is designed for this usage pattern.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">2. Minimize DC Fast Charging</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                While Tesla Superchargers are convenient for road trips, frequent DC fast charging can accelerate degradation slightly. Use Level 2 home charging for daily use when possible.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">3. Avoid Extreme Temperatures</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Tesla batteries have excellent thermal management, but extreme heat or cold can stress the battery. When possible:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>Park in shade during hot summer days</li>
                <li>Precondition the battery before driving in extreme cold</li>
                <li>Keep the vehicle plugged in during very cold weather</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">4. Drive Efficiently</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Aggressive acceleration and high speeds put more stress on the battery. While Teslas are fun to drive fast, gentle acceleration and moderate speeds will help preserve battery health over time.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Tesla&apos;s Battery Warranty</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Tesla provides excellent battery warranty coverage:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li><strong>Model S and X:</strong> 8 years or 240,000 km with minimum 70% retention</li>
                <li><strong>Model 3 and Y (Standard Range):</strong> 8 years or 160,000 km with minimum 70% retention</li>
                <li><strong>Model 3 and Y (Long Range/Performance):</strong> 8 years or 192,000 km with minimum 70% retention</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mb-4">
                This means if your battery degrades more than 30% within the warranty period, Tesla will repair or replace it at no cost.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">When to Be Concerned</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                While some degradation is normal, contact Tesla service if you experience:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>Sudden range drop of more than 10% in a short period</li>
                <li>Battery error messages or warnings</li>
                <li>Inability to charge to previous maximum levels</li>
                <li>Range significantly below warranty threshold</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">The Bottom Line</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Tesla batteries are designed to last the life of the vehicle. With proper care, you can expect your battery to maintain 85-90% of its original capacity even after 10 years of ownership. The key is understanding that some degradation is normal and following best practices for charging and driving.
              </p>
              <p className="text-gray-300 leading-relaxed">
                At The EV Store, we provide detailed battery health reports for every vehicle in our inventory, so you know exactly what you&apos;re getting before you buy.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-12 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-2">Questions About Battery Health?</h3>
              <p className="text-gray-400 mb-4">Our team can help you understand battery condition for any Tesla in our inventory.</p>
              <Link 
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold rounded-lg transition-all"
              >
                Contact Us
              </Link>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  )
}
