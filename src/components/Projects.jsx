import { motion } from 'framer-motion'
import { Leaf, Store, Sprout } from 'lucide-react'

const projects = [
  {
    title: 'AgriSakha — Smart Crop Advisory (SIH 2025)',
    description: 'Farmer platform with crop advisory, weather, and market insights',
    icon: Sprout,
  },
  {
    title: 'Jai Kissan — Agritech Marketplace',
    description: 'Connecting farmers directly to buyers; reducing middlemen',
    icon: Store,
  },
  {
    title: 'FertiSpray — Smart Fertilization Kit',
    description: 'Sprinkler-based fertilizer spraying system',
    icon: Leaf,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold tracking-tight text-[#0D1B2A] dark:text-white text-center">
          Projects
        </motion.h2>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }}
              className="group relative p-6 rounded-2xl bg-white dark:bg-[#0b1220] border border-[#0056D2]/10 shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(0,86,210,0.15)] transition transform hover:-translate-y-1">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#0056D2]/0 via-[#00C4FF]/0 to-transparent opacity-0 group-hover:opacity-100 transition" />
              <div className="relative">
                <div className="h-12 w-12 rounded-xl grid place-items-center bg-gradient-to-br from-[#0056D2] to-[#00C4FF] text-white shadow-[0_10px_30px_rgba(0,100,255,0.35)]">
                  <p.icon size={22} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#0D1B2A] dark:text-white">{p.title}</h3>
                <p className="mt-2 text-[#2E2E2E]/80 dark:text-blue-100/80">{p.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
