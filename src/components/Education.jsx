import { motion } from 'framer-motion'

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#0056D2] via-[#0A84FF] to-[#00C4FF] text-center"
        >
          Education
        </motion.h2>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="p-6 rounded-2xl bg-white/70 dark:bg-white/5 border border-white/60 dark:border-white/10 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
          >
            <h3 className="text-xl font-semibold text-[#0D1B2A] dark:text-white tracking-wide">B.Tech in Computer Engineering (Core)</h3>
            <p className="text-[#2E2E2E]/80 dark:text-blue-100/80">MIT ADT University, Pune (2023–Present)</p>
            <div className="mt-4">
              <p className="text-sm font-medium text-[#0D1B2A] dark:text-white">Relevant Coursework</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {['AIML', 'Advanced Databases', 'DS & Algorithms', 'Software Engineering', 'CN', 'OS', 'Data Science'].map((c) => (
                  <span
                    key={c}
                    className="text-xs px-3 py-1 rounded-full bg-[#0056D2]/10 text-[#0056D2] border border-[#0056D2]/20 hover:bg-[#0056D2]/15 transition-colors"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
