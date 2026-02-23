import { motion, type Variants } from 'framer-motion'
import { Github } from 'lucide-react'

const PROJECTS = [
  {
    name: 'FlowMeet',
    description:
      'Full-stack AI/ML platform that automates meeting intelligence and calendar workflows.',
    bullets: [
      'Ingested and processed 100+ calendar events through an AI/ML pipeline',
      'Cut processing time by 90% via parallelized task queues and caching',
      'Real-time monitoring dashboard with under 5-minute reporting lag',
    ],
    stack: ['Python', 'Node.js', 'React', 'OpenAI API', 'SQL', 'REST APIs', 'Git'],
    github: 'https://github.com/trilokjaikumar',
  },
  {
    name: 'Codexa',
    description:
      'AI-powered code review platform that surfaces actionable, severity-ranked feedback instantly.',
    bullets: [
      'Returns severity-ranked issues in under 2 seconds via Claude API integration',
      'Trained scikit-learn ML classifier for intelligent issue categorisation',
      'Fully Dockerized — FastAPI backend, PostgreSQL, SQLAlchemy ORM',
    ],
    stack: [
      'React',
      'TypeScript',
      'FastAPI',
      'Python',
      'Claude API',
      'PostgreSQL',
      'SQLAlchemy',
      'scikit-learn',
      'Docker',
    ],
    github: 'https://github.com/trilokjaikumar',
  },
]

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.18, duration: 0.65 },
  }),
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-5 sm:px-8">
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
            Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">What I've Built</h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.name}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="group flex flex-col rounded-2xl border border-white/8 bg-white/[0.03] p-7 hover:border-cyan-400/30 hover:bg-white/[0.05] transition-all duration-300"
            >
              {/* Card header */}
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-white">{project.name}</h3>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.name} on GitHub`}
                  className="p-1.5 text-gray-500 hover:text-cyan-400 transition-colors"
                >
                  <Github size={20} />
                </a>
              </div>

              <p className="text-gray-500 text-sm mb-5 leading-relaxed">{project.description}</p>

              {/* Bullets */}
              <ul className="space-y-2.5 mb-7 flex-1">
                {project.bullets.map(b => (
                  <li key={b} className="flex items-start gap-2.5 text-gray-400 text-sm">
                    <span className="text-cyan-400 mt-[3px] shrink-0 text-xs">▸</span>
                    {b}
                  </li>
                ))}
              </ul>

              {/* Tech pills */}
              <div className="flex flex-wrap gap-2">
                {project.stack.map(tech => (
                  <span
                    key={tech}
                    className="text-xs font-medium px-2.5 py-1 rounded-full border border-cyan-400/20 bg-cyan-400/5 text-cyan-300"
                  >
                    {tech}
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
