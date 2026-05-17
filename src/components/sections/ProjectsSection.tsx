import { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'
import { ArrowRight, ArrowUpRight, CheckCircle2, Layers3, X } from 'lucide-react'
import { clsx } from 'clsx'
import { projects } from '../../data/projects'
import type { Project } from '../../types'
import { SectionHeader } from '../common/SectionHeader'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'

type DetailListProps = {
  title: string
  items: string[]
}

function DetailList({ title, items }: DetailListProps) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
      <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">{title}</h4>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li className="flex gap-3 text-sm leading-6 text-slate-300" key={item}>
            <CheckCircle2 className="mt-0.5 shrink-0 text-cyan-300" size={17} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const closeButtonRef = useRef<HTMLButtonElement | null>(null)
  const previouslyFocusedElementRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!selectedProject) {
      return
    }

    previouslyFocusedElementRef.current = document.activeElement as HTMLElement | null

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedProject(null)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    window.setTimeout(() => closeButtonRef.current?.focus(), 0)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
      previouslyFocusedElementRef.current?.focus()
    }
  }, [selectedProject])

  return (
    <>
      <section
        id="projects"
        className="relative border-y border-white/10 bg-white/[0.025] px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Featured Projects"
            title="Selected systems across MCP, RAG, automation, and intelligent backends."
            description="These projects reflect the kind of AI engineering I focus on: practical workflows, safe execution, strong backend architecture, and reliability from the start."
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
                  <div className="mt-auto flex flex-col gap-3 pt-7 sm:flex-row sm:items-center">
                    <Button
                      type="button"
                      variant="secondary"
                      className="sm:min-w-36"
                      onClick={() => setSelectedProject(project)}
                    >
                      View Details
                      <ArrowUpRight size={17} />
                    </Button>
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

      {selectedProject ? (
        <div
          className="fixed inset-0 z-[80] flex items-end justify-center bg-slate-950/82 px-4 py-4 backdrop-blur-md sm:items-center sm:py-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-detail-title"
          aria-describedby="project-detail-description"
          onMouseDown={() => setSelectedProject(null)}
        >
          <motion.div
            className="max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-lg border border-white/10 bg-slate-950 shadow-2xl shadow-cyan-950/30"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-white/10 bg-slate-950/95 p-5 backdrop-blur sm:p-6">
              <div>
                <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
                  <Layers3 size={14} />
                  {selectedProject.category}
                </p>
                <h3
                  id="project-detail-title"
                  className="text-2xl font-semibold leading-tight text-white sm:text-3xl"
                >
                  {selectedProject.title}
                </h3>
              </div>
              <button
                ref={closeButtonRef}
                className="grid size-10 shrink-0 place-items-center rounded-md border border-white/10 text-slate-300 transition hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                type="button"
                aria-label="Close project details"
                onClick={() => setSelectedProject(null)}
              >
                <X size={19} />
              </button>
            </div>

            <div className="p-5 sm:p-6">
              <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-lg border border-white/10 bg-white/[0.035] p-5">
                <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">
                  Architecture Overview
                </h4>
                  <p id="project-detail-description" className="mt-4 leading-7 text-slate-300">
                    {selectedProject.architecture}
                  </p>
                </div>
                <div className="rounded-lg border border-emerald-300/15 bg-emerald-300/10 p-5">
                  <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-200">
                    Primary Outcome
                  </h4>
                  <p className="mt-4 leading-7 text-emerald-50">{selectedProject.impact}</p>
                </div>
              </div>

              <div className="mt-5 grid gap-5 lg:grid-cols-3">
                <DetailList title="Technical Challenges" items={selectedProject.challenges} />
                <DetailList title="Engineering Decisions" items={selectedProject.decisions} />
                <DetailList title="Outcomes" items={selectedProject.outcomes} />
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {selectedProject.stack.map((tech) => (
                  <span
                    className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5 text-xs font-medium text-slate-300"
                    key={tech}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm leading-6 text-slate-400">
                  Built with a reliability-first approach: clear execution boundaries, observable
                  workflows, and practical backend architecture.
                </p>
                <Button href="#contact" className="shrink-0" onClick={() => setSelectedProject(null)}>
                  Discuss this kind of system
                  <ArrowRight size={17} />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      ) : null}
    </>
  )
}
