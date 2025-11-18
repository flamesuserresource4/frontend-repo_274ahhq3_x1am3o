import { motion } from 'framer-motion'

export default function Internship() {
  return (
    <section id="internship" className="py-20 md:py-28 bg-gradient-to-b from-white to-blue-50/40 dark:from-[#0b1220] dark:to-[#0e1628]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold tracking-tight text-[#0D1B2A] dark:text-white text-center">
          Internship
        </motion.h2>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-6 rounded-2xl bg-white dark:bg-[#0b1220] border border-[#0056D2]/10 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
            <h3 className="text-xl font-semibold text-[#0D1B2A] dark:text-white">Google AI-ML Virtual Internship — Eduskills Academy</h3>
            <ul className="mt-3 space-y-2 text-[#2E2E2E] dark:text-blue-100">
              <li>• ML using Python, TensorFlow, Scikit-Learn</li>
              <li>• Data preprocessing, model training, evaluation</li>
              <li>• Worked with real-world datasets</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
