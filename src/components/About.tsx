import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-28 px-5 sm:px-8 bg-white/[0.015]">
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
            Who I Am
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">About Me</h2>
        </motion.div>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="shrink-0"
          >
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-cyan-400/20 to-sky-500/10 border-2 border-cyan-400/25 flex items-center justify-center">
              <span className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-sky-500 select-none">
                TJ
              </span>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col gap-5 max-w-2xl"
          >
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              I'm a Computer Engineering student at{' '}
              <span className="text-cyan-400 font-medium">The Ohio State University</span> with a
              passion for building full-stack applications, AI-powered tools, and data pipelines.
            </p>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              I love turning complex problems into clean, scalable solutions.
            </p>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Currently building{' '}
              <span className="text-cyan-400 font-medium">FlowMeet</span> — an AI platform that automates meeting intelligence and calendar workflows.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
