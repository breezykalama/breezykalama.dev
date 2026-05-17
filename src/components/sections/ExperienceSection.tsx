import { motion } from 'motion/react'
import { BriefcaseBusiness } from 'lucide-react'
import { experience } from '../../data/experience'
import { SectionHeader } from '../common/SectionHeader'

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative border-y border-white/10 bg-white/[0.025] px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="Experience"
          title="Engineering judgment for AI-era products."
          description="A concise path through the work that shaped how I design reliable automation and backend platforms."
        />
        <div className="space-y-5">
          {experience.map((item, index) => (
            <motion.article
              className="rounded-lg border border-white/10 bg-slate-950/70 p-5 shadow-2xl shadow-slate-950/20 sm:p-6"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              key={`${item.company}-${item.role}`}
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-md bg-cyan-300/10 text-cyan-200">
                    <BriefcaseBusiness size={21} />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                    <p className="mt-1 text-slate-300">{item.company}</p>
                  </div>
                </div>
                <p className="text-sm font-medium text-cyan-200">{item.period}</p>
              </div>
              <p className="mt-5 leading-7 text-slate-300">{item.summary}</p>
              <ul className="mt-5 space-y-3">
                {item.highlights.map((highlight) => (
                  <li className="flex gap-3 text-sm leading-6 text-slate-300" key={highlight}>
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-300" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
