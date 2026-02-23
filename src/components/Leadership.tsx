import { motion } from 'framer-motion'
import { Users } from 'lucide-react'

const LEADERSHIP = [
  {
    org: 'Midwest Cricket Club',
    role: 'Founder & Coach',
    period: 'March 2018 – Present',
    location: 'Cincinnati, OH',
    icon: Users,
  },
]

export default function Leadership() {
  return (
    <section id="leadership" className="py-28 px-5 sm:px-8 bg-white/[0.015]">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="mb-14"
        >
          <p className="text-cyan-400 text-xs font-semibold tracking-[0.22em] uppercase mb-2">
            Community
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Leadership</h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {LEADERSHIP.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.org}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.15 }}
                className="rounded-2xl border border-white/8 bg-white/[0.03] p-7 hover:border-cyan-400/25 hover:bg-white/[0.05] transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <span className="p-2.5 rounded-xl bg-cyan-400/10 text-cyan-400 mt-0.5 shrink-0">
                    <Icon size={20} />
                  </span>
                  <div>
                    <h3 className="text-white font-bold text-lg leading-tight">{item.org}</h3>
                    <p className="text-cyan-400 text-sm font-medium mt-0.5">{item.role}</p>
                    <div className="flex flex-wrap gap-x-3 gap-y-1 mt-2 text-gray-500 text-xs">
                      <span>{item.period}</span>
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
