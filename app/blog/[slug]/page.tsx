import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { blogPosts } from '../blog-data'
import { Calendar, Clock, User, ArrowLeft, Share2, Facebook, Twitter, Linkedin, Tag, Zap } from 'lucide-react'
import BlogHeader from '../BlogHeader'
import Footer from '../../components/Footer'

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  
  if (!post) {
    return {
      title: 'Post Not Found | The EV Store',
    }
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.tags,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `https://theevstore.ca/blog/${post.slug}`,
      siteName: 'The EV Store',
      locale: 'en_CA',
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle,
      description: post.metaDescription,
    },
    alternates: {
      canonical: `https://theevstore.ca/blog/${post.slug}`,
    },
  }
}

// JSON-LD structured data for the blog post
function generateStructuredData(post: typeof blogPosts[0]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: `https://theevstore.ca${post.image}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: post.author,
      url: 'https://theevstore.ca',
    },
    publisher: {
      '@type': 'Organization',
      name: 'The EV Store',
      logo: {
        '@type': 'ImageObject',
        url: 'https://theevstore.ca/tesla.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://theevstore.ca/blog/${post.slug}`,
    },
    keywords: post.tags.join(', '),
    articleSection: post.category,
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  const structuredData = generateStructuredData(post)

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <BlogHeader />

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <span className="inline-block px-4 py-1 bg-cyan-500 text-black text-sm font-semibold rounded-full mb-4">
            {post.category}
          </span>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-300">
            <span className="flex items-center gap-2">
              <User className="w-5 h-5 text-cyan-400" />
              {post.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-cyan-400" />
              {new Date(post.date).toLocaleDateString('en-CA', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-cyan-400" />
              {post.readTime} min read
            </span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Image Placeholder */}
          <div className="relative h-80 lg:h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden mb-12 border border-cyan-500/20">
            <div className="absolute inset-0 flex items-center justify-center">
              <Zap className="w-24 h-24 text-cyan-500/30" />
            </div>
          </div>

          {/* Social Sharing */}
          <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-800">
            <span className="flex items-center gap-2 text-gray-400 font-medium">
              <Share2 className="w-5 h-5" />
              Share:
            </span>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://theevstore.ca/blog/${post.slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
              aria-label="Share on Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`https://theevstore.ca/blog/${post.slug}`)}&text=${encodeURIComponent(post.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition-colors"
              aria-label="Share on Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://theevstore.ca/blog/${post.slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors"
              aria-label="Share on LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          {/* Blog Content */}
          <div 
            className="prose prose-lg prose-invert max-w-none
              prose-headings:font-black prose-headings:text-white
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-cyan-400
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-gray-200
              prose-p:text-gray-300 prose-p:leading-relaxed
              prose-strong:text-white
              prose-ul:list-disc prose-ul:pl-6 prose-ul:space-y-2
              prose-li:text-gray-300
              prose-a:text-cyan-400 prose-a:no-underline hover:prose-a:underline
            "
            dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
          />

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex items-center gap-2 mb-4">
              <Tag className="w-5 h-5 text-cyan-400" />
              <span className="font-semibold text-white">Tags:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-900/30 border-y border-cyan-500/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <article
                  key={relatedPost.slug}
                  className="bg-gray-900/50 rounded-xl border border-cyan-500/20 overflow-hidden hover:border-cyan-500/50 transition-all"
                >
                  <div className="h-40 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <Zap className="w-12 h-12 text-cyan-500/30" />
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wide">
                      {relatedPost.category}
                    </span>
                    <h3 className="text-lg font-bold text-white mt-2 mb-3 line-clamp-2">
                      <Link href={`/blog/${relatedPost.slug}`} className="hover:text-cyan-400 transition-colors">
                        {relatedPost.title}
                      </Link>
                    </h3>
                    <Link
                      href={`/blog/${relatedPost.slug}`}
                      className="text-cyan-400 font-semibold text-sm hover:text-cyan-300 transition-colors inline-flex items-center gap-1"
                    >
                      Read More
                      <ArrowLeft className="w-3 h-3 rotate-180" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-500/10 to-blue-600/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Make the Switch?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Browse our inventory of quality pre-owned Tesla vehicles or visit our Kamloops showroom for a test drive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="tel:250-828-8761"
              className="inline-flex items-center justify-center gap-2 bg-cyan-500 text-black px-8 py-4 rounded-full font-bold hover:bg-cyan-400 transition-colors"
            >
              Call (250) 828-8761
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-full font-bold hover:bg-cyan-500 hover:text-black transition-colors"
            >
              View Inventory
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

// Helper function to convert markdown-like content to HTML
function formatContent(content: string): string {
  const html = content
    // Headers
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    // Bold
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    // Lists
    .replace(/^- (.*$)/gim, '<li>$1</li>')
    // Paragraphs
    .replace(/\n\n/g, '</p><p>')
    .replace(/^(?!<[hlu])(.+)$/gim, '<p>$1</p>')
    // Clean up
    .replace(/<p><\/p>/g, '')
    .replace(/<\/li>\n<li>/g, '</li><li>')
    .replace(/<p><li>/g, '<ul><li>')
    .replace(/<\/li><\/p>/g, '</li></ul>')
  
  return html
}
