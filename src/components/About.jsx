import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-5">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#0056D2] via-[#0A84FF] to-[#00C4FF]"
            >
              About Me
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-4 text-[#2E2E2E] dark:text-blue-100"
            >
              Skilled in Java, Python, and MySQL, I love solving problems and building real-world solutions. I'm passionate about AI/ML, data, and agritech innovation, and I'm actively seeking internships and practical opportunities to apply my skills.
            </motion.p>
          </div>
          <div className="md:col-span-7 grid sm:grid-cols-2 gap-6">
            {[
              { title: 'Java', level: 85 },
              { title: 'Python', level: 90 },
              { title: 'MySQL', level: 80 },
              { title: 'Problem Solving', level: 88 },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.45, ease: 'easeOut' }}
                className="p-5 rounded-2xl bg-white/70 dark:bg-white/5 border border-white/60 dark:border-white/10 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
              >
                <div className="flex items-center justify-between mb-2">
                  <p className="font-semibold text-[#0D1B2A] dark:text-white tracking-wide">{item.title}</p>
                  <p className="text-sm text-[#0056D2] dark:text-[#00C4FF]">{item.level}%</p>
                </div>
                <div className="h-2 w-full rounded-full bg-slate-100 dark:bg-white/5 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#0056D2] via-[#0A84FF] to-[#00C4FF]"
                    style={{ width: `${item.level}%` }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
