import { motion, type Variants } from 'framer-motion'

const SKILL_GROUPS = [
  {
    label: 'Languages',
    color: 'cyan',
    skills: [
      'Python', 'JavaScript', 'TypeScript', 'SQL',
      'Java', 'C/C++', 'HTML/CSS', 'Swift', 'Assembly',
    ],
  },
  {
    label: 'Frameworks & Tools',
    color: 'sky',
    skills: [
      'React', 'Node.js', 'FastAPI', 'Flask',
      'pandas', 'NumPy', 'scikit-learn', 'PyTest',
      'Docker', 'Git', 'Linux/Unix',
    ],
  },
  {
    label: 'Libraries & APIs',
    color: 'indigo',
    skills: [
      'REST APIs', 'PostgreSQL', 'SQLAlchemy',
      'OpenAI API', 'Claude API', 'Google Calendar API',
    ],
  },
]

const COLOR = {
  cyan:   { pill: 'border-cyan-400/20 bg-cyan-400/5 text-cyan-300',   dot: 'bg-cyan-400' },
  sky:    { pill: 'border-sky-400/20 bg-sky-400/5 text-sky-300',      dot: 'bg-sky-400'  },
  indigo: { pill: 'border-indigo-400/20 bg-indigo-400/5 text-indigo-300', dot: 'bg-indigo-400' },
} as const

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const pillVariants: Variants = {
  hidden: { opacity: 0, scale: 0.88, y: 10 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.35 } },
}

const groupVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.55 },
  }),
}

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-5 sm:px-8 bg-white/[0.015]">
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
            Expertise
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Tech Stack</h2>
        </motion.div>

        {/* Groups */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_GROUPS.map((group, gi) => {
            const c = COLOR[group.color as keyof typeof COLOR]
            return (
              <motion.div
                key={group.label}
                custom={gi}
                variants={groupVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                className="rounded-2xl border border-white/8 bg-white/[0.03] p-6"
              >
                {/* Group header */}
                <div className="flex items-center gap-2.5 mb-5">
                  <span className={`w-2 h-2 rounded-full ${c.dot}`} />
                  <h3 className="text-white text-sm font-semibold">{group.label}</h3>
                </div>

                {/* Pills */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-2"
                >
                  {group.skills.map(skill => (
                    <motion.span
                      key={skill}
                      variants={pillVariants}
                      className={`text-xs font-medium px-3 py-1.5 rounded-full border ${c.pill}`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
