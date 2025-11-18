import { useState } from 'react'

export default function Subscribe() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [status, setStatus] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const base = import.meta.env.VITE_BACKEND_URL || ''
      const res = await fetch(`${base}/api/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name, source: 'landing' })
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('success')
      setEmail('')
      setName('')
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section id="subscribe" className="max-w-xl mx-auto px-6 py-16 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-white">Join the ZEUS early access</h2>
      <p className="mt-2 text-slate-300">Get first dibs on limited drops, collaborations, and secret events.</p>
      <form onSubmit={submit} className="mt-6 flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          placeholder="Your name (optional)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
        />
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
        />
        <button
          type="submit"
          className="px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold disabled:opacity-60"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Joining…' : 'Join'}
        </button>
      </form>
      {status === 'success' && <p className="mt-3 text-emerald-400">You’re in. Check your inbox.</p>}
      {status === 'error' && <p className="mt-3 text-rose-400">Something went wrong. Try again.</p>}
    </section>
  )
}
