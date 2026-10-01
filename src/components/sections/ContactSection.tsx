import { ArrowUpRight, Download, Mail } from 'lucide-react'
import { contactParagraphs } from '../../data/profile'
import { SITE } from '../../lib/constants'
import { Button } from '../ui/Button'

export function ContactSection() {
  return (
    <section id="contact" className="section-space border-t border-white/10 bg-white/[0.02]" aria-labelledby="contact-title">
      <div className="section-shell grid gap-9 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div>
          <p className="section-label mb-5">Contact</p>
          <h2 id="contact-title" className="max-w-md text-3xl font-medium leading-tight text-zinc-100 sm:text-4xl">
            Interested in building AI that works in real environments?
          </h2>
        </div>
        <div className="max-w-xl">
          <div className="space-y-5 text-base leading-8 text-zinc-400">
            {contactParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <p className="mt-6 text-sm leading-6 text-zinc-400">{SITE.location}</p>
          <div className="mt-7 flex flex-col gap-3 min-[400px]:flex-row">
            <Button href={`mailto:${SITE.email}`}><Mail size={17} aria-hidden="true" /> Email</Button>
            <Button href={SITE.cv} variant="secondary" download target="_blank" rel="noopener noreferrer">Download CV <Download size={17} aria-hidden="true" /></Button>
          </div>
          <a className="text-link mt-4 break-all" href={`mailto:${SITE.email}`}>{SITE.email}</a>
          <div className="mt-1 flex gap-7">
            <a className="text-link" href={SITE.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={15} aria-hidden="true" /></a>
            <a className="text-link" href={SITE.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={15} aria-hidden="true" /></a>
          </div>
        </div>
      </div>
    </section>
  )
}
