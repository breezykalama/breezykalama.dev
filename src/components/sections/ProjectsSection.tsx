import { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  GitBranch,
  Layers3,
  LockKeyhole,
  ShieldCheck,
  X,
} from 'lucide-react'
import { clsx } from 'clsx'
import { projects } from '../../data/projects'
import type { Project } from '../../types'
import { SectionHeader } from '../common/SectionHeader'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'

type DetailListProps = {
  title: string
  items: string[]
  tone?: 'cyan' | 'emerald'
  className?: string
}

function DetailList({ title, items, tone = 'cyan', className }: DetailListProps) {
  const iconClassName = tone === 'emerald' ? 'text-emerald-300' : 'text-cyan-300'

  return (
    <div className={clsx('rounded-lg border border-white/10 bg-white/[0.035] p-4', className)}>
      <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">{title}</h4>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li className="flex gap-3 text-sm leading-6 text-slate-300" key={item}>
            <CheckCircle2 className={clsx('mt-0.5 shrink-0', iconClassName)} size={17} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function getGitHubReadmeUrl(href: string) {
  return `${href.replace(/\.git$/, '')}#readme`
}

function RepositoryBadge({ project }: { project: Project }) {
  if (project.repository.href) {
    return (
      <a
        className="inline-flex items-center gap-1.5 rounded-full border border-cyan-300/15 bg-cyan-300/10 px-3 py-1 text-cyan-100 transition hover:border-cyan-300/30 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
        href={project.repository.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <ExternalLink size={13} />
        {project.repository.label}
      </a>
    )
  }

  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1.5 rounded-full border px-3 py-1',
        ['private', 'mostly-private'].includes(project.repository.visibility)
          ? 'border-amber-300/20 bg-amber-300/10 text-amber-100'
          : 'border-cyan-300/15 bg-cyan-300/10 text-cyan-100',
      )}
    >
      {['private', 'mostly-private'].includes(project.repository.visibility) ? (
        <LockKeyhole size={13} />
      ) : null}
      {project.repository.label}
    </span>
  )
}

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [activeProjectIndex, setActiveProjectIndex] = useState(0)
  const closeButtonRef = useRef<HTMLButtonElement | null>(null)
  const previouslyFocusedElementRef = useRef<HTMLElement | null>(null)
  const activeProject = projects[activeProjectIndex]

  const showPreviousProject = () => {
    setActiveProjectIndex((current) => (current === 0 ? projects.length - 1 : current - 1))
  }

  const showNextProject = () => {
    setActiveProjectIndex((current) => (current === projects.length - 1 ? 0 : current + 1))
  }

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
            title="Selected builds with real architecture behind them."
            description="Move through one project at a time: tool generation, payment workflow control, insurance decision support, and knowledge retrieval."
          />

          <div className="mx-auto max-w-5xl">
            <div className="mb-5 flex items-center justify-between gap-4">
              <p className="text-sm text-slate-400">
                Project {activeProjectIndex + 1} of {projects.length}
              </p>
              <div className="flex items-center gap-2">
                <button
                  className="grid size-10 place-items-center rounded-md border border-white/10 text-slate-300 transition hover:border-cyan-300/30 hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                  type="button"
                  aria-label="Show previous project"
                  onClick={showPreviousProject}
                >
                  <ChevronLeft size={19} />
                </button>
                <button
                  className="grid size-10 place-items-center rounded-md border border-white/10 text-slate-300 transition hover:border-cyan-300/30 hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                  type="button"
                  aria-label="Show next project"
                  onClick={showNextProject}
                >
                  <ChevronRight size={19} />
                </button>
              </div>
            </div>

            <motion.article
              className="outline-none"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              key={activeProject.title}
            >
              <Card className="group flex min-h-[560px] flex-col overflow-hidden">
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
                      <Layers3 size={14} />
                      {activeProject.category}
                    </p>
                    <h3 className="text-2xl font-semibold leading-tight text-white sm:text-3xl">
                      {activeProject.title}
                    </h3>
                  </div>
                  <span className="grid size-10 shrink-0 place-items-center rounded-md border border-white/10 text-cyan-300 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:border-cyan-300/30">
                    <ArrowUpRight size={20} />
                  </span>
                </div>

                <div className="mb-5 flex flex-wrap gap-2 text-xs font-medium text-slate-300">
                  <span className="rounded-full border border-emerald-300/15 bg-emerald-300/10 px-3 py-1 text-emerald-100">
                    {activeProject.status}
                  </span>
                  <span className="rounded-full border border-white/10 bg-slate-950/50 px-3 py-1">
                    {activeProject.role}
                  </span>
                  <span className="rounded-full border border-white/10 bg-slate-950/50 px-3 py-1">
                    {activeProject.timeline}
                  </span>
                  <RepositoryBadge project={activeProject} />
                </div>

                <p className="max-w-3xl leading-7 text-slate-300">{activeProject.description}</p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-md border border-emerald-300/15 bg-emerald-300/10 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200">
                      Outcome
                    </p>
                    <p className="mt-2 text-sm leading-6 text-emerald-50">
                      {activeProject.impact}
                    </p>
                  </div>
                  <div className="rounded-md border border-white/10 bg-slate-950/50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                      Scope
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-200">{activeProject.scope}</p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {activeProject.stack.map((tech) => (
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
                    onClick={() => setSelectedProject(activeProject)}
                  >
                    View Details
                    <ArrowUpRight size={17} />
                  </Button>
                  {activeProject.repository.href ? (
                    <>
                      <Button
                        href={activeProject.repository.href}
                        variant="ghost"
                        className="px-0"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View repo
                        <ExternalLink size={17} />
                      </Button>
                      <Button
                        href={getGitHubReadmeUrl(activeProject.repository.href)}
                        variant="ghost"
                        className="px-0"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Read README
                        <ArrowRight size={17} />
                      </Button>
                    </>
                  ) : null}
                  <Button href="#contact" variant="ghost" className="px-0">
                    Discuss a similar build
                    <ArrowRight size={17} />
                  </Button>
                </div>
              </Card>
            </motion.article>

            <div className="mt-5 flex justify-center gap-2">
              {projects.map((project, index) => (
                <button
                  className={clsx(
                    'h-2.5 rounded-full transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300',
                    index === activeProjectIndex ? 'w-8 bg-cyan-300' : 'w-2.5 bg-white/20',
                  )}
                  type="button"
                  aria-label={`Show ${project.title}`}
                  aria-current={index === activeProjectIndex}
                  onClick={() => setActiveProjectIndex(index)}
                  key={project.title}
                />
              ))}
            </div>
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
              <div className="mb-5 grid gap-3 sm:grid-cols-3">
                {[
                  ['Status', selectedProject.status],
                  ['Role', selectedProject.role],
                  ['Timeline', selectedProject.timeline],
                  ['Repo', selectedProject.repository.label],
                ].map(([label, value]) => (
                  <div
                    className="rounded-lg border border-white/10 bg-white/[0.035] p-4"
                    key={label}
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                      {label}
                    </p>
                    <p className="mt-2 text-sm font-semibold leading-6 text-white">{value}</p>
                  </div>
                ))}
              </div>

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

              <div className="mt-5 rounded-lg border border-white/10 bg-white/[0.035] p-5">
                <div className="mb-5 flex items-center gap-3">
                  <span className="grid size-9 place-items-center rounded-md bg-cyan-300/10 text-cyan-200">
                    <GitBranch size={18} />
                  </span>
                  <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">
                    Architecture Flow
                  </h4>
                </div>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {selectedProject.architectureFlow.map((step, index) => (
                    <div
                      className="rounded-md border border-white/10 bg-slate-950/55 p-4"
                      key={step}
                    >
                      <p className="text-xs font-semibold text-cyan-200">
                        Step {String(index + 1).padStart(2, '0')}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-200">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 grid gap-5 lg:grid-cols-3">
                <DetailList title="Technical Challenges" items={selectedProject.challenges} />
                <DetailList title="Engineering Decisions" items={selectedProject.decisions} />
                <DetailList title="Outcomes" items={selectedProject.outcomes} />
              </div>

              <div className="mt-5 grid gap-5 lg:grid-cols-2">
                <div className="rounded-lg border border-emerald-300/15 bg-emerald-300/10 p-5">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="grid size-9 place-items-center rounded-md bg-emerald-300/10 text-emerald-200">
                      <ShieldCheck size={18} />
                    </span>
                    <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-200">
                      Reliability / Testing Notes
                    </h4>
                  </div>
                  <ul className="space-y-3">
                    {selectedProject.reliability.map((item) => (
                      <li className="flex gap-3 text-sm leading-6 text-emerald-50" key={item}>
                        <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-300" size={17} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <DetailList title="Evidence This Is Real" items={selectedProject.evidence} />
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
                  Built around clear execution boundaries, reviewable actions, and practical backend
                  design.
                </p>
                <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                  {selectedProject.repository.href ? (
                    <>
                      <Button
                        href={selectedProject.repository.href}
                        variant="secondary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View repo
                        <ExternalLink size={17} />
                      </Button>
                      <Button
                        href={getGitHubReadmeUrl(selectedProject.repository.href)}
                        variant="secondary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Read README
                        <ArrowRight size={17} />
                      </Button>
                    </>
                  ) : null}
                  <Button href="#contact" onClick={() => setSelectedProject(null)}>
                    Discuss this kind of system
                    <ArrowRight size={17} />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      ) : null}
    </>
  )
}
