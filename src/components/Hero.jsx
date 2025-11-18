import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 md:pt-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-gradient-to-br from-[#0A84FF]/30 to-[#00C4FF]/30 blur-3xl" />
        <div className="absolute top-40 -left-24 h-72 w-72 rounded-full bg-gradient-to-br from-[#0056D2]/30 to-[#00C4FF]/30 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0056D2]/10 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full bg-[#0056D2]/10 text-[#0056D2] border border-[#0056D2]/20"
          >
            Aspiring AI/ML Engineer
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-4xl md:text-6xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#0056D2] via-[#0A84FF] to-[#00C4FF]"
          >
            Prathamesh Garad
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-3 text-lg md:text-xl text-[#2E2E2E] dark:text-blue-100"
          >
            CSE Student • AI/ML & Agritech Enthusiast
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-base md:text-lg text-[#2E2E2E]/90 dark:text-blue-100/90"
          >
            "Aspiring AI/ML Engineer | Problem Solver | Agritech Innovator"
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#0056D2] to-[#00C4FF] text-white font-semibold shadow-[0_8px_30px_rgba(0,86,210,0.35)] hover:shadow-[0_10px_40px_rgba(0,196,255,0.45)] hover:-translate-y-0.5 active:translate-y-0 transition-transform"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl border border-[#0056D2]/30 text-[#0056D2] dark:text-[#00C4FF] hover:bg-[#0056D2]/5 transition-colors font-semibold hover:-translate-y-0.5 active:translate-y-0 transform"
            >
              Contact
            </a>
          </motion.div>
        </div>

        <div className="md:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl bg-white/70 dark:bg-white/5 border border-white/60 dark:border-white/10 shadow-2xl overflow-hidden backdrop-blur-xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,196,255,0.15),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(10,132,255,0.12),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(0,86,210,0.12),transparent_35%)]" />
              <div className="absolute inset-6 rounded-2xl border border-white/60 dark:border-white/5 backdrop-blur-sm" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/80 dark:bg-white/10 backdrop-blur border border-[#0056D2]/10">
                <p className="text-sm font-medium text-[#0D1B2A] dark:text-white">CSE • AI/ML & Agritech</p>
                <p className="text-xs text-[#2E2E2E]/70 dark:text-blue-100/70">Pune, India</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
