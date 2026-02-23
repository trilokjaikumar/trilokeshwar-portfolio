import { motion, type Variants } from 'framer-motion'
import { GraduationCap } from 'lucide-react'

const COURSES = [
  'Data Structures & Algorithms',
  'Operating Systems',
  'System Design',
  'Computer Architecture',
  'Embedded Systems',
  'Signals & Systems',
  'Linear Algebra',
  'Microcontrollers',
]

const pillVariants: Variants = {
  hidden: { opacity: 0, scale: 0.88, y: 10 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.35 } },
}

export default function Education() {
  return (
    <section id="education" className="py-28 px-5 sm:px-8">
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
            Academic Background
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Education</h2>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/8 bg-white/[0.03] p-7 max-w-2xl hover:border-cyan-400/25 hover:bg-white/[0.05] transition-all duration-300"
        >
          {/* Header */}
          <div className="flex items-start gap-4 mb-6">
            <span className="p-2.5 rounded-xl bg-cyan-400/10 text-cyan-400 mt-0.5 shrink-0">
              <GraduationCap size={22} />
            </span>
            <div>
              <h3 className="text-white font-bold text-xl">The Ohio State University</h3>
              <p className="text-cyan-400 text-sm font-medium mt-0.5">B.S. Computer Engineering</p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-gray-500 text-xs">
                <span>Aug 2023 – Present</span>
                <span>Columbus, OH</span>
                <span className="text-gray-400 font-medium">GPA 3.21</span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/5 mb-5" />

          {/* Courses */}
          <p className="text-gray-500 text-xs font-semibold tracking-wider uppercase mb-3">
            Relevant Coursework
          </p>
          <motion.div
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap gap-2"
          >
            {COURSES.map(course => (
              <motion.span
                key={course}
                variants={pillVariants}
                className="text-xs font-medium px-3 py-1.5 rounded-full border border-cyan-400/20 bg-cyan-400/5 text-cyan-300"
              >
                {course}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
