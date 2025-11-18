import { motion } from 'framer-motion'

const drops = [
  {
    title: 'Arc Fragments — Capsule 01',
    desc: 'Monochrome silhouettes with reflective accents inspired by deep‑space EVA suits.',
    image: 'https://images.unsplash.com/photo-1705023868869-92166eff39c1?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBcmMlMjBGcmFnbWVudHMlMjAlRTIlODAlOTQlMjBDYXBzdWxlJTIwMDF8ZW58MHwwfHx8MTc2MzQ0OTgyN3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'MythOS — Capsule 02',
    desc: 'Symbolic prints blending classical mythology with glitch aesthetics.',
    image: 'https://images.unsplash.com/photo-1674088792577-75c9f594097a?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNeXRoT1MlMjAlRTIlODAlOTQlMjBDYXBzdWxlJTIwMDJ8ZW58MHwwfHx8MTc2MzQ0OTgyOHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Quantum Drift — Capsule 03',
    desc: 'Technical streetwear engineered for motion with iridescent details.',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1600&auto=format&fit=crop',
  },
]

export default function Drops() {
  return (
    <section id="drops" className="relative max-w-6xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-3 gap-6">
        {drops.map((d, i) => (
          <motion.article
            key={d.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: i * 0.05 }}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur hover:bg-white/10 transition"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img src={d.image} alt={d.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
            </div>
            <div className="p-5">
              <h3 className="text-white font-semibold text-lg">{d.title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{d.desc}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
