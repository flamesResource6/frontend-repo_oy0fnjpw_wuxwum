import { useState } from 'react'
import Hero from './components/Hero'
import Drops from './components/Drops'
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'
import ThemeToggle, { THEMES } from './components/ThemeToggle'
import AIShowcase from './components/AIShowcase'

function App() {
  const [theme, setTheme] = useState('neon')
  const active = THEMES.find(t => t.id === theme) || THEMES[0]

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-extrabold tracking-widest">ZEUS</span>
            <span className="text-xs text-slate-400">/ art culture • sci‑fi</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-300">
            <a href="#drops" className="hover:text-white">Drops</a>
            <a href="#subscribe" className="hover:text-white">Join</a>
            <ThemeToggle value={theme} onChange={setTheme} />
          </nav>
        </div>
      </header>

      <main>
        <Hero themeId={theme} />
        <AIShowcase theme={active} />
        <Drops />
        <Subscribe />
      </main>

      <Footer />
    </div>
  )
}

export default App
