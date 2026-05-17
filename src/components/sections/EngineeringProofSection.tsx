import { motion } from 'motion/react'
import { ExternalLink, LockKeyhole, ShieldCheck } from 'lucide-react'
import { projects } from '../../data/projects'

const publicProjects = projects.filter((project) => project.repository.visibility === 'public')
const privateProjects = projects.filter((project) =>
  ['private', 'mostly-private'].includes(project.repository.visibility),
)

export function EngineeringProofSection() {
  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <motion.div
        className="mx-auto max-w-7xl rounded-lg border border-white/10 bg-white/[0.035] p-5 shadow-2xl shadow-slate-950/20 sm:p-6"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
              <ShieldCheck size={15} />
              Engineering Proof
            </p>
            <h2 className="text-2xl font-semibold leading-tight text-white sm:text-3xl">
              Public repos for technical review.
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-slate-300">
              Two projects are open for inspection. The rest are labeled honestly, so reviewers can
              tell what is public and what is better discussed in conversation.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-cyan-300/15 bg-cyan-300/[0.06] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
                Public Repositories
              </p>
              <div className="mt-4 space-y-3">
                {publicProjects.map((project) => (
                  <a
                    className="flex items-start justify-between gap-4 rounded-md border border-white/10 bg-slate-950/45 p-4 transition hover:border-cyan-300/30 hover:bg-slate-950/65 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                    href={project.repository.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={project.title}
                  >
                    <span>
                      <span className="block font-semibold text-white">{project.title}</span>
                      <span className="mt-1 block text-sm leading-6 text-slate-300">
                        {project.scope}
                      </span>
                    </span>
                    <ExternalLink className="mt-1 shrink-0 text-cyan-300" size={18} />
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-white/10 bg-slate-950/45 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Private / Restricted Work
              </p>
              <div className="mt-4 space-y-3">
                {privateProjects.map((project) => (
                  <div
                    className="flex items-start gap-3 rounded-md border border-white/10 bg-white/[0.035] p-4"
                    key={project.title}
                  >
                    <LockKeyhole className="mt-1 shrink-0 text-amber-200" size={17} />
                    <div>
                      <p className="font-semibold text-white">{project.title}</p>
                      <p className="mt-1 text-sm leading-6 text-slate-300">
                        {project.repository.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
