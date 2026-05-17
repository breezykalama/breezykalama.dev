import { motion } from 'motion/react'
import { ArrowRight, Mail, MapPin } from 'lucide-react'
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
          Building something that needs reliable AI?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
          I can help design the architecture, build the automation, and connect the AI layer to a
          backend your team can trust.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 text-sm text-slate-300 sm:flex-row">
          <span className="inline-flex items-center gap-2">
            <Mail size={17} className="text-cyan-300" />
            {SITE.email}
          </span>
          <span className="hidden text-slate-600 sm:inline">/</span>
          <span className="inline-flex items-center gap-2">
            <MapPin size={17} className="text-cyan-300" />
            {SITE.location}
          </span>
        </div>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href={`mailto:${SITE.email}`}>
            Email me
            <ArrowRight size={18} />
          </Button>
          <Button href="#projects" variant="secondary">
            See project examples
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
