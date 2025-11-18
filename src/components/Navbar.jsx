import { useState, useEffect } from 'react'
import { Menu, X, Moon, SunMedium } from 'lucide-react'

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'internship', label: 'Internship' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    if (stored) {
      setIsDark(stored === 'dark')
      document.documentElement.classList.toggle('dark', stored === 'dark')
    }
  }, [])

  const toggleTheme = () => {
    const next = !isDark
    setIsDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (!el) return
    const y = el.getBoundingClientRect().top + window.pageYOffset - 80
    window.scrollTo({ top: y, behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-white/70 dark:bg-[#0b1220]/70 border-b border-[#0056D2]/10">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#0056D2] to-[#00C4FF] shadow-[0_10px_30px_rgba(0,100,255,0.35)]" />
          <div className="leading-tight">
            <p className="font-semibold text-[#0D1B2A] dark:text-white">Prathamesh Garad</p>
            <p className="text-xs text-[#2E2E2E]/70 dark:text-blue-200/70">CSE • AI/ML & Agritech</p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className="relative text-sm font-medium text-[#0D1B2A]/80 dark:text-blue-100/80 hover:text-[#0056D2] dark:hover:text-[#00C4FF] transition-colors group"
            >
              {s.label}
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-[#0056D2] to-[#00C4FF] group-hover:w-full transition-all" />
            </button>
          ))}
          <button onClick={toggleTheme} aria-label="Toggle theme" className="p-2 rounded-lg border border-slate-200/70 dark:border-white/10 hover:shadow hover:shadow-[#00C4FF]/20 transition">
            {isDark ? <SunMedium size={18} className="text-[#00C4FF]"/> : <Moon size={18} className="text-[#0056D2]"/>}
          </button>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button onClick={toggleTheme} aria-label="Toggle theme" className="p-2 rounded-lg border border-slate-200/70 dark:border-white/10">
            {isDark ? <SunMedium size={18} className="text-[#00C4FF]"/> : <Moon size={18} className="text-[#0056D2]"/>}
          </button>
          <button onClick={() => setOpen(!open)} className="p-2 rounded-lg border border-slate-200/70 dark:border-white/10">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white/80 dark:bg-[#0b1220]/80">
          {sections.map((s) => (
            <button key={s.id} onClick={() => scrollTo(s.id)} className="block w-full text-left py-2 text-[#0D1B2A] dark:text-blue-100 hover:text-[#0056D2]">
              {s.label}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}
