import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

// Simple AI image placeholder using Unsplash + prompt keywords
const PROMPTS = [
  'futuristic fashion editorial neon cyberpunk portrait',
  'mythological techno armor runway dramatic lighting',
  'astral streetwear iridescent fabric volumetric fog',
  'architectural couture brutalist set design sci fi',
]

function buildImageUrl(prompt) {
  const q = encodeURIComponent(prompt)
  return `https://source.unsplash.com/1600x900/?${q}`
}

export default function AIShowcase({ theme }) {
  const [idx, setIdx] = useState(0)
  const prompt = PROMPTS[idx % PROMPTS.length]
  const img = useMemo(() => buildImageUrl(prompt), [prompt])

  useEffect(() => {
    const t = setInterval(() => setIdx(i => i + 1), 6000)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="relative max-w-6xl mx-auto px-6 py-16">
      <div className="flex items-center gap-2 mb-6">
        <Sparkles className="text-white/80" size={18} />
        <h2 className="text-white font-semibold">AI Vision Boards</h2>
      </div>
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
        <motion.img
          key={img}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          src={img}
          alt={prompt}
          className="w-full h-[360px] md:h-[520px] object-cover"
        />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950/80 to-transparent" />
        </div>
        <div className="absolute left-0 bottom-0 p-6">
          <p className="text-xs text-white/80 uppercase tracking-widest">Concept</p>
          <p className="text-white/90 font-medium max-w-xl">{prompt}</p>
        </div>
      </div>
    </section>
  )
}
