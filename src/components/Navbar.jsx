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
  const [active, setActive] = useState('home')

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    if (stored) {
      setIsDark(stored === 'dark')
      document.documentElement.classList.toggle('dark', stored === 'dark')
    }
  }, [])

  useEffect(() => {
    const onScroll = () => {
      let current = 'home'
      sections.forEach((s) => {
        const el = document.getElementById(s.id)
        if (!el) return
        const rect = el.getBoundingClientRect()
        const offsetTop = rect.top + window.scrollY
        if (window.scrollY + 120 >= offsetTop) {
          current = s.id
        }
      })
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
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
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-[#F5F7FA]/70 dark:bg-[#0D1B2A]/70 border-b border-[#1A73E8]/10 shadow-[0_8px_30px_rgba(0,86,210,0.08)]">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-[linear-gradient(135deg,#0056D2,#00C4FF)] shadow-[0_10px_30px_rgba(0,196,255,0.35)] ring-1 ring-white/30 dark:ring-white/10" />
          <div className="leading-tight">
            <p className="font-semibold text-[#0D1B2A] dark:text-white">Prathamesh Garad</p>
            <p className="text-xs text-[#2E3A45]/70 dark:text-blue-200/70">CSE • AI/ML & Agritech</p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6">
          {sections.map((s) => {
            const isActive = active === s.id
            return (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={`relative text-sm font-medium tracking-wide transition-all group px-1 ${
                  isActive
                    ? 'text-[#00C4FF] drop-shadow-[0_0_12px_rgba(0,196,255,0.55)]'
                    : 'text-[#0D1B2A]/80 dark:text-blue-100/80 hover:text-[#0A84FF] dark:hover:text-[#00C4FF]'
                }`}
              >
                {s.label}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[linear-gradient(90deg,#0056D2,#00C4FF)] group-hover:w-full transition-all duration-300" />
              </button>
            )
          })}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-lg border border-slate-200/70 dark:border-white/10 hover:shadow hover:shadow-[#00C4FF]/20 transition"
          >
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

      {/* Mobile slide-in drawer */}
      <div className={`md:hidden fixed inset-0 z-40 transition ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        {/* Backdrop */}
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
        />
        {/* Panel */}
        <div
          className={`absolute left-0 top-0 h-full w-72 bg-white/80 dark:bg-[#0D1B2A]/80 backdrop-blur-xl border-r border-white/40 dark:border-white/10 shadow-2xl transform transition-transform duration-300 ${
            open ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="h-20 flex items-center justify-between px-4 border-b border-white/40 dark:border-white/10">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-[linear-gradient(135deg,#0056D2,#00C4FF)] shadow-[0_10px_30px_rgba(0,196,255,0.35)]" />
              <span className="font-semibold text-[#0D1B2A] dark:text-white">Menu</span>
            </div>
            <button onClick={() => setOpen(false)} className="p-2 rounded-lg border border-slate-200/70 dark:border-white/10">
              <X />
            </button>
          </div>
          <div className="px-4 py-3 space-y-1">
            {sections.map((s) => {
              const isActive = active === s.id
              return (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  className={`block w-full text-left py-3 px-2 rounded-lg transition-all ${
                    isActive
                      ? 'text-[#00C4FF] bg-white/70 dark:bg-white/5 drop-shadow-[0_0_12px_rgba(0,196,255,0.45)]'
                      : 'text-[#0D1B2A] dark:text-blue-100 hover:text-[#0A84FF] hover:bg-white/70 dark:hover:bg-white/5'
                  }`}
                >
                  {s.label}
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </header>
  )
}
