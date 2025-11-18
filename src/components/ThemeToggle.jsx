import { useState } from 'react'
import { Moon, Sun, Palette } from 'lucide-react'

const THEMES = [
  {
    id: 'neon',
    name: 'Neon',
    accentFrom: 'from-cyan-400',
    accentTo: 'to-fuchsia-500',
    ring: 'ring-cyan-400/40',
    glowA: 'bg-cyan-500/20',
    glowB: 'bg-fuchsia-500/20',
    button: 'bg-white text-slate-900',
  },
  {
    id: 'mythic',
    name: 'Mythic',
    accentFrom: 'from-amber-300',
    accentTo: 'to-rose-500',
    ring: 'ring-amber-300/40',
    glowA: 'bg-amber-400/20',
    glowB: 'bg-rose-500/20',
    button: 'bg-amber-300 text-slate-900',
  },
  {
    id: 'cosmic',
    name: 'Cosmic',
    accentFrom: 'from-indigo-300',
    accentTo: 'to-purple-500',
    ring: 'ring-indigo-300/40',
    glowA: 'bg-indigo-400/20',
    glowB: 'bg-purple-500/20',
    button: 'bg-indigo-300 text-slate-900',
  },
]

export default function ThemeToggle({ value, onChange }) {
  const [open, setOpen] = useState(false)
  const active = THEMES.find(t => t.id === value) || THEMES[0]
  return (
    <div className="relative">
      <button
        onClick={() => setOpen(v => !v)}
        className="flex items-center gap-2 px-3 py-2 rounded-xl border border-white/10 text-slate-200 hover:bg-white/10 transition"
        aria-label="Change theme"
      >
        <Palette size={16} />
        <span className="hidden sm:block">{active.name}</span>
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-44 rounded-xl border border-white/10 bg-slate-900/90 backdrop-blur shadow-xl p-2 z-40">
          {THEMES.map(t => (
            <button
              key={t.id}
              onClick={() => { onChange(t.id); setOpen(false) }}
              className={`w-full text-left flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10 ${value === t.id ? 'bg-white/10' : ''}`}
            >
              <span className={`h-3 w-3 rounded-full bg-gradient-to-r ${t.accentFrom} ${t.accentTo}`} />
              <span className="text-sm text-slate-200">{t.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export { THEMES }
