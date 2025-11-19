import { useState } from 'react'
import { motion } from 'framer-motion'
import { Leaf, Store, Sprout, Brain } from 'lucide-react'

const projects = [
  {
    title: 'SkillLens – AI-Powered Career Intelligence Platform',
    description:
      'Created a modern AI-based platform for resume analysis, role recommendations, skill gap detection, learning paths, and career insights.',
    icon: Brain,
    link: 'https://skill-lens-pi.vercel.app/',
  },
  {
    title: 'AgriSakha — Smart Crop Advisory (SIH 2025)',
    description: 'Farmer platform with crop advisory, weather, and market insights',
    icon: Sprout,
  },
  {
    title: 'Jai Kissan – Agritech Digital Marketplace',
    description:
      'A digital platform to connect farmers directly with buyers, view crop trends, and receive market insights.',
    icon: Store,
    link: 'https://jai-kissan.vercel.app/',
  },
  {
    title: 'FertiSpray — Smart Fertilization Kit',
    description: 'Sprinkler-based fertilizer spraying system',
    icon: Leaf,
  },
]

function ProjectCard({ p, idx }) {
  const [transform, setTransform] = useState('rotateX(0deg) rotateY(0deg) scale(1)')

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const midX = rect.width / 2
    const midY = rect.height / 2
    const rotateY = ((x - midX) / midX) * 6 // left/right
    const rotateX = -((y - midY) / midY) * 6 // up/down
    setTransform(`rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`) 
  }

  const reset = () => setTransform('rotateX(0deg) rotateY(0deg) scale(1)')

  return (
    <motion.div
      initial={{ opacity: 0, y: 18, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.06, duration: 0.65, ease: 'easeOut' }}
      className="relative"
      style={{ perspective: '1000px' }}
    >
      <div
        onMouseMove={handleMove}
        onMouseLeave={reset}
        className="group relative p-6 rounded-2xl bg-white/70 dark:bg-white/5 border border-white/60 dark:border-white/10 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_rgba(0,196,255,0.25)] transition-transform duration-300 will-change-transform"
        style={{ transform, transformStyle: 'preserve-3d' }}
      >
        {/* Gradient top border */}
        <span className="pointer-events-none absolute inset-x-0 -top-px h-[3px] rounded-t-2xl bg-[linear-gradient(90deg,#0056D2,#0A84FF,#00C4FF)]" />
        {/* Soft cyan halo */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#0056D2]/0 via-[#00C4FF]/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="relative" style={{ transform: 'translateZ(30px)' }}>
          <div className="h-12 w-12 rounded-xl grid place-items-center bg-[linear-gradient(135deg,#0056D2,#00C4FF)] text-white shadow-[0_10px_30px_rgba(0,196,255,0.35)]">
            <p.icon size={22} />
          </div>
          <h3 className="mt-4 text-lg font-semibold text-[#0D1B2A] dark:text-white tracking-wide">
            {p.title}
          </h3>
          <p className="mt-2 text-[#2E3A45]/80 dark:text-blue-100/80">
            {p.description}
          </p>
          {p.link && (
            <a
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl text-white text-sm font-semibold shadow-[0_8px_30px_rgba(0,86,210,0.35)] hover:shadow-[0_10px_40px_rgba(0,196,255,0.45)] hover:-translate-y-0.5 active:translate-y-0 transition-transform bg-[linear-gradient(90deg,#0056D2,#00C4FF)]"
              style={{ transform: 'translateZ(20px)' }}
            >
              Visit Project
            </a>
          )}
        </div>
        {/* Neon glow ring */}
        <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" style={{ boxShadow: '0 0 40px 6px rgba(0,196,255,0.25), inset 0 0 0 1px rgba(0,196,255,0.25)' }} />
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-3xl md:text-4xl font-extrabold tracking-wide text-transparent bg-clip-text bg-[linear-gradient(90deg,#0056D2,#0A84FF,#00C4FF)] text-center"
        >
          Projects
        </motion.h2>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <ProjectCard key={p.title} p={p} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}
