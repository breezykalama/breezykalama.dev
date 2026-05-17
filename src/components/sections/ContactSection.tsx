import { motion } from 'motion/react'
import { ArrowRight, Code2, Download, Mail, MapPin, Network } from 'lucide-react'
import { SITE } from '../../lib/constants'
import { Button } from '../ui/Button'

export function ContactSection() {
  return (
    <section id="contact" className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <motion.div
        className="mx-auto max-w-4xl rounded-lg border border-cyan-300/20 bg-cyan-300/[0.07] p-6 text-center shadow-2xl shadow-cyan-950/20 sm:p-10"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">
          Contact
        </p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">
          Building an AI workflow that needs to be safe, useful, and production-ready?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
          I can help design the architecture, build the MCP or RAG layer, automate the workflow, and
          connect it to backend systems with the reliability controls your team needs.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 text-sm text-slate-300 sm:flex-row">
          <a
            className="inline-flex items-center gap-2 rounded-md transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            href={`mailto:${SITE.email}`}
          >
            <Mail size={17} className="text-cyan-300" />
            {SITE.email}
          </a>
          <span className="hidden text-slate-600 sm:inline">/</span>
          <span className="inline-flex items-center gap-2">
            <MapPin size={17} className="text-cyan-300" />
            {SITE.location}
          </span>
        </div>
        <div className="mt-5 flex flex-col items-center justify-center gap-3 text-sm text-slate-300 sm:flex-row">
          <a
            className="inline-flex items-center gap-2 rounded-md transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Code2 size={17} className="text-cyan-300" />
            GitHub
          </a>
          <span className="hidden text-slate-600 sm:inline">/</span>
          <a
            className="inline-flex items-center gap-2 rounded-md transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Network size={17} className="text-cyan-300" />
            LinkedIn
          </a>
        </div>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href={`mailto:${SITE.email}`}>
            Email me
            <ArrowRight size={18} />
          </Button>
          <Button
            href={SITE.cv}
            variant="secondary"
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
            <Download size={18} />
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
