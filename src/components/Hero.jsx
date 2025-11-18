import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-[500px] h-[500px] bg-fuchsia-500/20 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60"
        >
          ZEUS
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-6 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto"
        >
          A revolutionary clothing brand born at the intersection of art culture and science fiction. Designed for the next frontier.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <a href="#drops" className="px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold shadow/50 shadow-white/10 hover:shadow-white/20 transition">Explore Drops</a>
          <a href="#subscribe" className="px-5 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition">Join The List</a>
        </motion.div>
      </div>
    </section>
  )
}
