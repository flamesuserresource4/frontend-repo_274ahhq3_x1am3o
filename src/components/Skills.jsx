import { motion } from 'framer-motion'
import { Code2, Database, Wrench, Palette } from 'lucide-react'

const skillGroups = [
  {
    title: 'Programming',
    icon: Code2,
    items: ['Python', 'Java', 'C++', 'HTML'],
  },
  {
    title: 'Databases',
    icon: Database,
    items: ['MySQL', 'SQL'],
  },
  {
    title: 'Frameworks & Tools',
    icon: Wrench,
    items: ['React', 'Android Studio', 'IntelliJ IDEA', 'Canva', 'Adobe Express', 'Filmora'],
  },
  {
    title: 'Creative Skills',
    icon: Palette,
    items: ['Graphic Designing', 'Social Media Post Designing'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 bg-gradient-to-b from-white to-blue-50/40 dark:from-[#0b1220] dark:to-[#0e1628]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold tracking-tight text-[#0D1B2A] dark:text-white text-center">
          Skills
        </motion.h2>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group, groupIdx) => (
            <motion.div key={group.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: groupIdx * 0.05 }} className="p-6 rounded-2xl bg-white dark:bg-[#0b1220] border border-[#0056D2]/10 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
              <div className="flex items-center gap-3">
                <group.icon className="text-[#0056D2] dark:text-[#00C4FF]" />
                <h3 className="font-semibold text-[#0D1B2A] dark:text-white">{group.title}</h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item, idx) => (
                  <span key={item} className="text-xs px-3 py-1 rounded-full bg-[#0056D2]/10 text-[#0056D2] border border-[#0056D2]/20">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
