import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { ArrowUpRight, X } from 'lucide-react'
import { projects } from '../../data/projects'
import type { Project } from '../../types'
import { SectionHeader } from '../common/SectionHeader'
import { Button } from '../ui/Button'

function DetailList({ title, items }: { title: string; items?: string[] }) {
  if (!items?.length) return null

  return (
    <section className="border-t border-white/10 pt-6">
      <h3 className="text-base font-medium text-zinc-100">{title}</h3>
      <ul className="mt-4 space-y-3 text-sm leading-7 text-zinc-400">
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </section>
  )
}

function ProjectDetails({ project, onClose }: { project: Project; onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    const opener = document.activeElement instanceof HTMLElement ? document.activeElement : null
    const previousOverflow = document.body.style.overflow
    // Native dialogs make the rest of the document inert and contain keyboard focus.
    dialog.showModal()
    document.body.style.overflow = 'hidden'

    return () => {
      dialog.close()
      document.body.style.overflow = previousOverflow
      opener?.focus({ preventScroll: true })
    }
  }, [])

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="project-detail-title"
      aria-describedby="project-detail-description"
      className="m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-3xl overflow-y-auto overscroll-contain rounded-lg border border-white/15 bg-zinc-950 p-0 text-zinc-300 shadow-2xl"
      onCancel={(event) => { event.preventDefault(); onClose() }}
      onClose={(event) => {
        // Ignore a queued cleanup close if StrictMode has already reopened the dialog.
        if (!event.currentTarget.open) onClose()
      }}
      onClick={(event) => {
        if (event.target !== event.currentTarget) return
        const bounds = event.currentTarget.getBoundingClientRect()
        if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) onClose()
      }}
    >
      <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-white/10 bg-zinc-950 px-6 py-5 sm:px-9">
        <div className="min-w-0">
          <p className="section-label mb-2">{project.category}</p>
          <h2 id="project-detail-title" className="text-2xl font-medium text-zinc-100">{project.title}</h2>
        </div>
        <button className="grid size-11 shrink-0 place-items-center rounded-md text-zinc-400 transition hover:bg-white/5 hover:text-white" type="button" aria-label="Close project details" onClick={onClose} autoFocus>
          <X size={20} aria-hidden="true" />
        </button>
      </div>
      <motion.div
        className="space-y-7 px-6 py-7 sm:px-9 sm:py-9"
        initial={reducedMotion ? false : { opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.18 }}
      >
        <section>
          <h3 className="text-base font-medium text-zinc-100">Overview</h3>
          <p id="project-detail-description" className="mt-4 text-base leading-8 text-zinc-400">{project.description}</p>
          <p className="mt-3 text-xs text-zinc-400">{project.repository.label}</p>
        </section>
        <section className="border-t border-white/10 pt-6">
          <h3 className="text-base font-medium text-zinc-100">What I built</h3>
          <p className="mt-4 text-sm leading-8 text-zinc-400">{project.scope}</p>
        </section>
        <DetailList title="Engineering decisions" items={project.decisions} />
        <DetailList title="Reliability / controls" items={project.reliability} />
        <section className="border-t border-white/10 pt-6">
          <h3 className="text-base font-medium text-zinc-100">Technology</h3>
          <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm leading-6 text-zinc-400">
            {project.stack.map((tech) => <li key={tech}>{tech}</li>)}
          </ul>
        </section>
        <DetailList title="Evidence" items={project.evidence} />
        {project.repository.href || project.links?.length ? (
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-6">
            {project.repository.href ? (
              <>
                <Button href={project.repository.href} variant="secondary" target="_blank" rel="noopener noreferrer">
                  View GitHub <ArrowUpRight size={16} aria-hidden="true" />
                </Button>
                <a className="text-link" href={`${project.repository.href.replace(/\.git$/, '')}#readme`} target="_blank" rel="noopener noreferrer">Read README</a>
              </>
            ) : null}
            {project.links?.map((link) => (
              <a className="text-link" href={link.href} target="_blank" rel="noopener noreferrer" key={link.href}>{link.label}</a>
            ))}
          </div>
        ) : null}
      </motion.div>
    </dialog>
  )
}

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <>
      <section id="projects" className="section-space border-t border-white/10 bg-white/[0.015]">
        <div className="section-shell">
          <SectionHeader
            eyebrow="Selected Work"
            title="A few systems that show how I engineer."
            description="Selected projects across agent infrastructure, financial workflows, and AI-powered business operations."
          />
          <div>
            {projects.map((project, index) => (
              <article className="grid gap-6 border-t border-white/10 py-10 md:grid-cols-[0.65fr_1.35fr] md:gap-12 sm:py-12" key={project.title} aria-labelledby={`project-title-${index}`}>
                <div>
                  <p className="section-label mb-4">{project.category}</p>
                  <h3 id={`project-title-${index}`} className={`font-semibold leading-tight text-zinc-100 ${index === 0 ? 'text-3xl' : 'text-2xl'}`}>{project.title}</h3>
                  {!project.repository.href ? <p className="mt-4 text-sm text-zinc-400">{project.repository.label}</p> : null}
                </div>
                <div className="min-w-0 max-w-2xl">
                  <p className="text-base leading-8 text-zinc-400">{project.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-xs leading-6 text-zinc-400" aria-label="Selected technologies">
                    {project.stack.slice(0, 4).map((tech) => <li key={tech}>{tech}</li>)}
                  </ul>
                  {project.evidence?.length ? (
                    <ul className="mt-5 space-y-2 text-sm leading-6 text-zinc-300">
                      {project.evidence.slice(0, 2).map((point) => <li key={point}>{point}</li>)}
                    </ul>
                  ) : null}
                  <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
                    <Button type="button" variant="secondary" aria-haspopup="dialog" aria-label={`View details for ${project.title}`} onClick={() => setSelectedProject(project)}>View Details</Button>
                    {project.repository.href ? (
                      <a className="text-link" href={project.repository.href} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} on GitHub`}>
                        View GitHub <ArrowUpRight size={16} aria-hidden="true" />
                      </a>
                    ) : null}
                    {project.links?.map((link) => <a className="text-link" href={link.href} target="_blank" rel="noopener noreferrer" key={link.href}>{link.label}</a>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      {selectedProject ? <ProjectDetails project={selectedProject} onClose={() => setSelectedProject(null)} /> : null}
    </>
  )
}
