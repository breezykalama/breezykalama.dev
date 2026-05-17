import { Code2, Mail, Network } from 'lucide-react'
import { SITE } from '../../lib/constants'

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>(c) 2026 {SITE.name}. Reliable AI systems and backend platforms.</p>
        <div className="flex items-center gap-3">
          <a
            className="rounded-md p-2 transition hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            href={`mailto:${SITE.email}`}
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
          <a
            className="rounded-md p-2 transition hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            href="#projects"
            aria-label="Projects"
          >
            <Code2 size={18} />
          </a>
          <a
            className="rounded-md p-2 transition hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            href="#experience"
            aria-label="Experience"
          >
            <Network size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
