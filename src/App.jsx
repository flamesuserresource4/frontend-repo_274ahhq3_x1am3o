import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import Internship from './components/Internship'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[#F5F7FA] dark:bg-[#0D1B2A] text-[#0D1B2A] dark:text-white font-sans">
      <Navbar />

      <main className="relative">
        {/* Subtle premium background accents */}
        <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(10,132,255,0.06),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(0,196,255,0.06),transparent_50%)] dark:bg-[radial-gradient(ellipse_at_top_right,rgba(26,115,232,0.08),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(0,196,255,0.08),transparent_50%)]" />

        <Hero />
        <About />
        <Skills />
        <Education />
        <Internship />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-[#1A73E8]/10 py-8 bg-transparent">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#2E3A45]/70 dark:text-blue-100/70">© {new Date().getFullYear()} Prathamesh Garad. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <a href="#home" className="text-sm text-[#0A84FF] dark:text-[#00C4FF] hover:underline">Back to top</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
