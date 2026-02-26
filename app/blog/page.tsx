import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'
import { Calendar, User, ArrowRight } from 'lucide-react'

const blogPosts = [
  {
    slug: '5-things-to-check-when-buying-used-tesla',
    title: '5 Things to Check When Buying a Used Tesla',
    excerpt: 'Learn the key inspection points to ensure you\'re getting a quality pre-owned Tesla. From battery health to service history, we cover it all.',
    author: 'EV Store Team',
    date: 'Feb 20, 2025',
    category: 'Buying Guide',
    readTime: '5 min read'
  },
  {
    slug: 'tesla-battery-health-guide',
    title: 'Tesla Battery Health: What You Need to Know',
    excerpt: 'Understanding Tesla battery degradation, range expectations, and how to maintain optimal battery performance over time.',
    author: 'EV Store Team',
    date: 'Feb 15, 2025',
    category: 'Maintenance',
    readTime: '7 min read'
  },
  {
    slug: 'charging-in-kamloops-guide',
    title: 'Charging Your Tesla in Kamloops: A Complete Guide',
    excerpt: 'Everything you need to know about charging your Tesla in Kamloops and the surrounding area, including Supercharger locations and home charging setup.',
    author: 'EV Store Team',
    date: 'Feb 10, 2025',
    category: 'Charging',
    readTime: '6 min read'
  },
  {
    slug: 'model-3-vs-model-y',
    title: 'Model 3 vs Model Y: Which Tesla is Right for You?',
    excerpt: 'A detailed comparison of Tesla\'s most popular models to help you decide which one fits your lifestyle and needs.',
    author: 'EV Store Team',
    date: 'Feb 5, 2025',
    category: 'Comparison',
    readTime: '8 min read'
  }
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <Header />
      
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">EV Blog</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Tips, guides, and news about Tesla vehicles and electric vehicle ownership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-cyan-500 transition-all">
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-400">
                    <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full">
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>
                  
                  <p className="text-gray-400 mb-4">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
