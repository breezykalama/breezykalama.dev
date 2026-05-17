import { motion } from 'motion/react'
import { ArrowRight, ArrowUpRight, Layers3 } from 'lucide-react'
import { clsx } from 'clsx'
import { projects } from '../../data/projects'
import { SectionHeader } from '../common/SectionHeader'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative border-y border-white/10 bg-white/[0.025] px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Featured Projects"
          title="Selected work shaped around reliability, not novelty."
          description="Representative systems for grounded retrieval, agent tooling, workflow automation, and backend execution."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              className={clsx(index === 0 && 'lg:col-span-2')}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              key={project.title}
            >
              <Card className="group flex h-full flex-col overflow-hidden">
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
                      <Layers3 size={14} />
                      {project.category}
                    </p>
                    <h3 className="text-2xl font-semibold leading-tight text-white">
                      {project.title}
                    </h3>
                  </div>
                  <span className="grid size-10 shrink-0 place-items-center rounded-md border border-white/10 text-cyan-300 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:border-cyan-300/30">
                    <ArrowUpRight size={20} />
                  </span>
                </div>
                <p className="max-w-2xl leading-7 text-slate-300">{project.description}</p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-md border border-emerald-300/15 bg-emerald-300/10 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200">
                      Outcome
                    </p>
                    <p className="mt-2 text-sm leading-6 text-emerald-50">{project.impact}</p>
                  </div>
                  <div className="rounded-md border border-white/10 bg-slate-950/50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                      Scope
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-200">{project.scope}</p>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      className="rounded-full border border-white/10 bg-slate-950/60 px-3 py-1.5 text-xs font-medium text-slate-300"
                      key={tech}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-7 pt-1">
                  <Button href="#contact" variant="ghost" className="px-0">
                    Discuss a similar build
                    <ArrowRight size={17} />
                  </Button>
                </div>
              </Card>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
