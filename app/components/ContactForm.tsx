'use client'

import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'

const EMAIL = 'theevstore@gmail.com'
// Set NEXT_PUBLIC_FORM_ENDPOINT (e.g. a Formspree URL) in Vercel to receive
// submissions directly. Without it, the form opens the visitor's email app.
const ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT

const TOPICS = [
  'Current inventory & availability',
  'A specific vehicle',
  'Schedule a test drive',
  'Service & repairs',
  'Parts',
  'Something else',
]

const field =
  'w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>
    const name = `${data.firstName} ${data.lastName}`.trim()

    if (!ENDPOINT) {
      const body = `${data.message}\n\nName: ${name}\nPhone: ${data.phone || 'n/a'}\nEmail: ${data.email}`
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(`${data.topic} - ${name}`)}&body=${encodeURIComponent(body)}`
      setStatus('sent')
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...data, name, _subject: `${data.topic} - ${name}` }),
      })
      setStatus(res.ok ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="text-center py-8">
        <CheckCircle className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-white mb-2">Thanks, we&apos;ll be in touch</h3>
        <p className="text-gray-400">
          For a faster answer, call{' '}
          <a href="tel:2508288761" className="text-cyan-400">250-828-8761</a>.
        </p>
      </div>
    )
  }

  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-gray-300 text-sm font-medium mb-2">First Name</label>
          <input id="firstName" name="firstName" type="text" required className={field} placeholder="John" />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-gray-300 text-sm font-medium mb-2">Last Name</label>
          <input id="lastName" name="lastName" type="text" required className={field} placeholder="Doe" />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">Email</label>
        <input id="email" name="email" type="email" required className={field} placeholder="john@example.com" />
      </div>

      <div>
        <label htmlFor="phone" className="block text-gray-300 text-sm font-medium mb-2">Phone</label>
        <input id="phone" name="phone" type="tel" className={field} placeholder="(250) 123-4567" />
      </div>

      <div>
        <label htmlFor="topic" className="block text-gray-300 text-sm font-medium mb-2">I&apos;m interested in</label>
        <select id="topic" name="topic" defaultValue={TOPICS[0]} className={field}>
          {TOPICS.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">Message</label>
        <textarea id="message" name="message" rows={4} required className={field} placeholder="Which models, budget, timing? We'll tell you what we have." />
      </div>

      {status === 'error' && (
        <p className="text-red-400 text-sm">
          Something went wrong. Please call 250-828-8761 or email {EMAIL}.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:opacity-60 text-black font-bold rounded-lg transition-all flex items-center justify-center space-x-2"
      >
        <Send className="w-5 h-5" />
        <span>{status === 'sending' ? 'Sending...' : 'Send Message'}</span>
      </button>
    </form>
  )
}
