import { motion } from 'framer-motion'
import { Github, Linkedin, ArrowDown } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay },
})

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 text-center overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] rounded-full bg-cyan-500/5 blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <motion.p
          {...fadeUp(0.1)}
          className="text-cyan-400 text-xs font-semibold tracking-[0.25em] uppercase mb-5"
        >
          Hey, I'm
        </motion.p>

        <motion.h1
          {...fadeUp(0.25)}
          className="text-5xl sm:text-7xl lg:text-8xl font-extrabold text-white leading-[1.05] tracking-tight mb-5"
        >
          Trilokeshwar
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-500">
            Jaikumar
          </span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.4)}
          className="text-gray-400 text-sm sm:text-base max-w-lg mx-auto leading-relaxed mb-10"
        >
          Computer Engineering @ Ohio State · Full-Stack Developer · Data &amp; AI Enthusiast
        </motion.p>

        <motion.div
          {...fadeUp(0.55)}
          className="flex items-center justify-center gap-3 flex-wrap"
        >
          <a
            href="https://github.com/trilokjaikumar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-cyan-400/5 transition-all duration-200 text-sm font-medium"
          >
            <Github size={17} />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/trilokeshwar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-cyan-400/5 transition-all duration-200 text-sm font-medium"
          >
            <Linkedin size={17} />
            LinkedIn
          </a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-10 flex flex-col items-center gap-2 text-gray-600"
      >
        <span className="text-[11px] tracking-widest uppercase">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  )
}
