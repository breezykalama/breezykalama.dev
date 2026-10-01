import { experience } from '../../data/experience'
import { SectionHeader } from '../common/SectionHeader'

export function ExperienceSection() {
  return (
    <section id="experience" className="section-space border-t border-white/10">
      <div className="section-shell">
        <SectionHeader eyebrow="Experience" title="Enterprise AI, backend engineering, and solution delivery." />
        <div className="space-y-14 sm:space-y-16">
          {experience.map((item, index) => (
            <article className="grid gap-7 border-t border-white/10 pt-8 md:grid-cols-[0.65fr_1.35fr] md:gap-12 sm:pt-10" key={item.company} aria-labelledby={`experience-role-${index}`}>
              <div className="text-sm leading-7">
                <p className="text-base font-medium text-zinc-100">{item.company}</p>
                <p className="mt-2 text-zinc-400">{item.period}</p>
                <p className="text-zinc-400">{item.location}</p>
              </div>
              <div className="min-w-0 max-w-2xl">
                <h3 id={`experience-role-${index}`} className="text-2xl font-medium text-zinc-100">{item.role}</h3>
                <p className="mt-4 text-base leading-7 text-zinc-300">{item.summary}</p>
                <div className="mt-7 space-y-8">
                  {item.responsibilities.map((group) => (
                    <div key={group.title}>
                      <h4 className="mb-4 text-sm font-medium text-zinc-200">{group.title}</h4>
                      <ul className="space-y-4">
                        {group.items.map((highlight) => (
                          <li className="flex gap-3 text-sm leading-7 text-zinc-400" key={highlight}>
                            <span className="mt-3 size-1 shrink-0 rounded-full bg-zinc-500" aria-hidden="true" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
