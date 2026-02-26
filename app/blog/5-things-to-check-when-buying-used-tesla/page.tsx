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
              <span>5 min read</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              5 Things to Check When Buying a Used Tesla
            </h1>
            
            <div className="flex items-center space-x-6 text-gray-400 mb-8">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>EV Store Team</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>February 20, 2025</span>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-gray-300 leading-relaxed mb-6">
                Buying a used Tesla can be an excellent way to get into electric vehicle ownership at a more affordable price point. However, there are several key factors you should check before making your purchase. Here are the five most important things to inspect:
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Battery Health and Range</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                The battery is the heart of any electric vehicle, and Tesla batteries are no exception. When evaluating a used Tesla, check the current maximum range compared to the original EPA rating. Some degradation is normal (typically 5-10% over several years), but excessive loss could indicate a problem. You can view this information in the vehicle&apos;s energy app or settings menu.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Also ask about the battery warranty. Tesla provides an 8-year warranty on battery and drive units, so check how much coverage remains.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Service History and Maintenance Records</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Request the complete service history from the seller or Tesla directly. Regular maintenance items to look for include:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>Tire rotations and replacements</li>
                <li>Brake fluid changes (every 2 years)</li>
                <li>Cabin air filter replacements</li>
                <li>Software updates</li>
                <li>Any warranty work or repairs</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Autopilot and Full Self-Driving (FSD)</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Not all Teslas come with the same software packages. Verify which features are included:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li><strong>Basic Autopilot:</strong> Included on most newer Teslas (lane keeping, adaptive cruise)</li>
                <li><strong>Enhanced Autopilot:</strong> Adds Navigate on Autopilot, Auto Lane Change, Summon</li>
                <li><strong>Full Self-Driving:</strong> Most comprehensive package with all current and future features</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mb-4">
                Remember that FSD can be purchased separately and transfers with the vehicle, adding significant value.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Physical Condition</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                While Teslas have fewer moving parts than gas cars, you should still inspect:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>Door seals and window operation (common issue areas)</li>
                <li>Panel gaps and alignment</li>
                <li>Paint condition and any touch-ups</li>
                <li>Wheel condition and tire tread depth</li>
                <li>Interior wear, especially seats and touchscreen</li>
                <li>Glass roof condition (no cracks or excessive wind noise)</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Charging Equipment and Setup</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Make sure you understand what charging equipment comes with the vehicle. Most used Teslas include:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>Mobile Connector with adapters (110V and 240V)</li>
                <li>Any wall connectors installed at the previous owner&apos;s home (these usually stay)</li>
                <li>Supercharging credits (rare, but sometimes transferable)</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Ready to Find Your Tesla?</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                At The EV Store, every Tesla in our inventory undergoes a comprehensive inspection covering all these points and more. We provide full transparency with battery health reports, service histories, and detailed condition assessments.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Browse our current inventory or contact us to discuss what you&apos;re looking for. We&apos;re here to help you find the perfect Tesla with confidence.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-12 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-2">Ready to Find Your Tesla?</h3>
              <p className="text-gray-400 mb-4">Browse our inspected inventory of pre-owned Tesla vehicles.</p>
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
