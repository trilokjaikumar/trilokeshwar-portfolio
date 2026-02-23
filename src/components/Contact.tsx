import { motion } from 'framer-motion'
import { Mail, Github, Linkedin } from 'lucide-react'

const LINKS = [
  {
    label: 'Email',
    href: 'mailto:trilokeshwarjaikumar@gmail.com',
    display: 'trilokeshwarjaikumar@gmail.com',
    icon: Mail,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/trilokjaikumar',
    display: 'github.com/trilokjaikumar',
    icon: Github,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/trilokeshwar',
    display: 'linkedin.com/in/trilokeshwar',
    icon: Linkedin,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-5 sm:px-8">
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
            Get in Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Contact</h2>
        </motion.div>

        {/* Body */}
        <div className="max-w-xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-400 text-sm sm:text-base leading-relaxed mb-10"
          >
            I'm currently open to new opportunities. Whether you have a question, a project idea,
            or just want to say hi — feel free to reach out.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            className="flex flex-col gap-4"
          >
            {LINKS.map(({ label, href, display, icon: Icon }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                variants={{
                  hidden: { opacity: 0, x: -16 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.45 } },
                }}
                className="group flex items-center gap-4 p-4 rounded-xl border border-white/8 bg-white/[0.03] hover:border-cyan-400/30 hover:bg-white/[0.06] transition-all duration-200"
              >
                <span className="p-2 rounded-lg bg-cyan-400/10 text-cyan-400 group-hover:bg-cyan-400/15 transition-colors">
                  <Icon size={18} />
                </span>
                <div className="flex flex-col min-w-0">
                  <span className="text-gray-500 text-[11px] font-medium uppercase tracking-wider">
                    {label}
                  </span>
                  <span className="text-gray-300 text-sm group-hover:text-cyan-300 transition-colors truncate">
                    {display}
                  </span>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-24 text-gray-700 text-xs text-center"
        >
          © {new Date().getFullYear()} Trilokeshwar Jaikumar
        </motion.p>
      </div>
    </section>
  )
}
