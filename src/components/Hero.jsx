import { motion } from 'framer-motion'
import { THEMES } from './ThemeToggle'

export default function Hero({ themeId = 'neon' }) {
  const theme = THEMES.find(t => t.id === themeId) || THEMES[0]
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className={`absolute -top-32 -left-32 w-[700px] h-[700px] ${theme.glowA} rounded-full blur-3xl`} />
        <div className={`absolute -bottom-24 -right-24 w-[600px] h-[600px] ${theme.glowB} rounded-full blur-3xl`} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.04),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.04),transparent_60%)]" />
      </div>
      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70`}
        >
          ZEUS
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="mt-6 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto"
        >
          Art culture × sci‑fi apparel engineered for the next frontier.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-10 flex items-center justify-center gap-3 sm:gap-4"
        >
          <a href="#drops" className={`px-5 py-3 rounded-xl font-semibold shadow/50 shadow-white/10 hover:shadow-white/20 transition ${theme.button}`}>Explore Drops</a>
          <a href="#subscribe" className="px-5 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition">Join The List</a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className={`mx-auto mt-12 h-[2px] w-64 bg-gradient-to-r ${theme.accentFrom} ${theme.accentTo} rounded-full`}
        />
      </div>
    </section>
  )
}
