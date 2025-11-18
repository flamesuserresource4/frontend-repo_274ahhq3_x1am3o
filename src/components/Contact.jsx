import { motion } from 'framer-motion'
import { Phone, Mail, Github, Linkedin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-to-b from-white to-blue-50/40 dark:from-[#0b1220] dark:to-[#0e1628]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#0056D2] via-[#0A84FF] to-[#00C4FF] text-center"
        >
          Contact
        </motion.h2>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="p-6 rounded-2xl bg-white/70 dark:bg-white/5 border border-white/60 dark:border-white/10 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
          >
            <div className="space-y-4">
              <a href="tel:9730299895" className="flex items-center gap-3 text-[#0D1B2A] dark:text-blue-100 hover:text-[#0056D2] dark:hover:text-[#00C4FF] transition-colors">
                <Phone className="text-[#0056D2] dark:text-[#00C4FF]" size={18} /> 9730299895
              </a>
              <a href="mailto:garadprathamesh98@gmail.com" className="flex items-center gap-3 text-[#0D1B2A] dark:text-blue-100 hover:text-[#0056D2] dark:hover:text-[#00C4FF] transition-colors">
                <Mail className="text-[#0056D2] dark:text-[#00C4FF]" size={18} /> garadprathamesh98@gmail.com
              </a>
              <a href="https://github.com/Prathamesh-98" target="_blank" className="flex items-center gap-3 text-[#0D1B2A] dark:text-blue-100 hover:text-[#0056D2] dark:hover:text-[#00C4FF] transition-colors">
                <Github className="text-[#0056D2] dark:text-[#00C4FF]" size={18} /> github.com/Prathamesh-98
              </a>
              <a href="https://linkedin.com/in/prathamesh-garad-1748a3287" target="_blank" className="flex items-center gap-3 text-[#0D1B2A] dark:text-blue-100 hover:text-[#0056D2] dark:hover:text-[#00C4FF] transition-colors">
                <Linkedin className="text-[#0056D2] dark:text-[#00C4FF]" size={18} /> linkedin.com/in/prathamesh-garad-1748a3287
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="p-6 rounded-2xl bg-white/70 dark:bg-white/5 border border-white/60 dark:border-white/10 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
          >
            <form className="space-y-4">
              <div>
                <label className="text-sm text-[#2E2E2E] dark:text-blue-100">Name</label>
                <input className="mt-1 w-full rounded-lg border border-[#0056D2]/20 bg-white/80 dark:bg-white/5 px-3 py-2 outline-none focus:ring-2 focus:ring-[#00C4FF]/50" placeholder="Your name" />
              </div>
              <div>
                <label className="text-sm text-[#2E2E2E] dark:text-blue-100">Email</label>
                <input type="email" className="mt-1 w-full rounded-lg border border-[#0056D2]/20 bg-white/80 dark:bg-white/5 px-3 py-2 outline-none focus:ring-2 focus:ring-[#00C4FF]/50" placeholder="you@example.com" />
              </div>
              <div>
                <label className="text-sm text-[#2E2E2E] dark:text-blue-100">Message</label>
                <textarea rows="4" className="mt-1 w-full rounded-lg border border-[#0056D2]/20 bg-white/80 dark:bg-white/5 px-3 py-2 outline-none focus:ring-2 focus:ring-[#00C4FF]/50" placeholder="How can I help?"/>
              </div>
              <button type="button" className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-[#0056D2] to-[#00C4FF] text-white font-semibold shadow-[0_8px_30px_rgba(0,86,210,0.35)] hover:shadow-[0_10px_40px_rgba(0,196,255,0.45)] hover:-translate-y-0.5 active:translate-y-0 transition-transform">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
