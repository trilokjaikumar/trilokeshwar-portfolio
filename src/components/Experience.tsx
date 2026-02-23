import { motion } from 'framer-motion'

const ROLES = [
  {
    company: 'Beats By Dre',
    role: 'Data Analytics Apprentice',
    period: 'Feb 2026 – Present',
    bullets: [
      'Evaluated business challenges across product and marketing, delivering insight reports across 3+ active campaigns.',
      'Reduced reporting turnaround by ~30%.',
    ],
  },
  {
    company: 'The Ohio State University',
    role: 'AI Research Assistant',
    period: 'June 2025 – Dec 2025',
    bullets: [
      'Built Python/Pandas pipeline processing 2,000+ research samples, cutting data prep time ~60%.',
      'Built modular validation scripts across 5+ workflows.',
    ],
  },
  {
    company: 'Twinmars LLC',
    role: 'Software Engineering Intern',
    period: 'June 2023 – Aug 2023',
    bullets: [
      'Built Python cleaning pipelines across 30+ datasets reducing prep time ~40%.',
      'Wrote PyTest unit tests with ~85% coverage.',
      'Contributed to 2 Agile sprints/month.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-5 sm:px-8">
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
            Career
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Experience</h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-cyan-400/50 via-cyan-400/20 to-transparent" />

          <div className="flex flex-col gap-12">
            {ROLES.map((item, i) => (
              <motion.div
                key={item.company}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.15 }}
                className="relative pl-10"
              >
                {/* Dot */}
                <span className="absolute left-0 top-[22px] w-[15px] h-[15px] rounded-full bg-gray-950 border-2 border-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.35)]" />

                {/* Card */}
                <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-6 hover:border-cyan-400/25 hover:bg-white/[0.05] transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-4">
                    <div>
                      <h3 className="text-white font-bold text-lg leading-tight">{item.company}</h3>
                      <p className="text-cyan-400 text-sm font-medium mt-0.5">{item.role}</p>
                    </div>
                    <span className="text-gray-600 text-xs font-medium shrink-0 sm:mt-0.5">{item.period}</span>
                  </div>
                  <ul className="space-y-2.5">
                    {item.bullets.map(b => (
                      <li key={b} className="flex items-start gap-2.5 text-gray-400 text-sm">
                        <span className="text-cyan-400 mt-[3px] shrink-0 text-xs">▸</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
