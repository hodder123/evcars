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
              <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full">Ownership Tips</span>
              <span>8 min read</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              How to Maximize Your Tesla's Range in Winter: Cold Weather Tips
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
                Winter driving in Kamloops and across BC presents unique challenges for Tesla owners. Cold temperatures can significantly impact your range, but with the right strategies, you can minimize losses and stay comfortable throughout the season.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Understanding Winter Range Impact</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Tesla vehicles, like all EVs, experience reduced range in cold weather. You can expect:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li><strong className="text-white">15-30% range reduction</strong> in temperatures around -10°C</li>
                <li><strong className="text-white">Up to 40% reduction</strong> in extreme cold (-20°C or lower)</li>
                <li><strong className="text-white">Cabin heating</strong> is the biggest energy drain, not the battery itself</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Pre-Conditioning: Your Winter Secret Weapon</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                <strong>What is pre-conditioning?</strong> Pre-conditioning warms your battery and cabin while still plugged in, using grid power instead of battery power.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4"><strong>How to do it:</strong></p>
              <ol className="list-decimal list-inside text-gray-300 space-y-2 mb-6">
                <li>Open the Tesla app 15-30 minutes before driving</li>
                <li>Turn on climate control</li>
                <li>Set your departure time in the car's scheduling</li>
                <li>For Supercharging: navigate to the charger to automatically pre-condition</li>
              </ol>
              <p className="text-gray-300 leading-relaxed mb-4"><strong>Benefits:</strong></p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>Maximum regen braking available immediately</li>
                <li>Comfortable cabin from the start</li>
                <li>Preserves battery range for driving</li>
                <li>Faster Supercharging speeds</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Cabin Heating Strategies</h2>
              <p className="text-gray-300 leading-relaxed mb-4"><strong>Seat heaters are your friend:</strong></p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>Use seat heaters instead of cabin heat when possible</li>
                <li>Seat heaters use ~100W vs 3-6kW for cabin heat</li>
                <li>Pre-heat the cabin, then maintain with seat heaters</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mb-4"><strong>Optimize climate settings:</strong></p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>Set temperature to 20-21°C (not higher)</li>
                <li>Use Auto mode for efficient airflow</li>
                <li>Reduce fan speed if comfortable</li>
                <li>Close unused vents</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Driving Techniques for Winter Efficiency</h2>
              <p className="text-gray-300 leading-relaxed mb-4"><strong>Smooth acceleration:</strong></p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>Gradual acceleration uses less energy</li>
                <li>Avoid jackrabbit starts, especially on snow</li>
                <li>Use Chill Mode if available for gentler acceleration</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mb-4"><strong>Speed and aerodynamics:</strong></p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>Highway speed has huge impact on range</li>
                <li>100 km/h vs 120 km/h can mean 20% more range</li>
                <li>Keep windows closed to reduce drag</li>
                <li>Remove roof racks when not needed</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Winter Tires Matter</h2>
              <p className="text-gray-300 leading-relaxed mb-4">Winter tires aren't just required by law on many BC highways—they're also more efficient than all-seasons in cold weather:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>Softer compound maintains grip below 7°C</li>
                <li>Better safety AND efficiency than all-seasons in cold</li>
                <li>Proper inflation is critical (check weekly)</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Charging Best Practices in Winter</h2>
              <p className="text-gray-300 leading-relaxed mb-4"><strong>Home charging:</strong></p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>Keep plugged in whenever possible</li>
                <li>Scheduled charging can warm battery overnight</li>
                <li>Even Level 1 (120V) helps maintain battery temperature</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mb-4"><strong>Supercharging in cold:</strong></p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>Always navigate to charger (pre-conditions battery)</li>
                <li>Expect slower speeds until battery warms</li>
                <li>First 10-15 minutes may be limited</li>
                <li>Plan for longer charging stops in winter</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Real-World Kamloops Winter Tips</h2>
              <p className="text-gray-300 leading-relaxed mb-4"><strong>Local considerations:</strong></p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>Sahali and Aberdeen can be icy in mornings</li>
                <li>Valley bottoms (Brocklehurst) see coldest temps</li>
                <li>Highway 5 to Sun Peaks requires winter tires</li>
                <li>Downtown parking garages help battery stay warm</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">The Bottom Line</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Winter range loss is normal and manageable. With pre-conditioning, efficient driving, and proper planning, you can comfortably drive your Tesla year-round in Kamloops. The convenience of home charging and growing Supercharger network makes winter EV ownership easier than ever.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-12 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-2">Need Winter Tire Recommendations?</h3>
              <p className="text-gray-400 mb-4">Contact The EV Store for advice on efficient winter tire options that maintain range.</p>
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