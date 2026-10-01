import { skillGroups } from '../../data/skills'
import { SectionHeader } from '../common/SectionHeader'

export function SkillsSection() {
  return (
    <section id="skills" className="section-space border-t border-white/10">
      <div className="section-shell">
        <SectionHeader eyebrow="Skills" title="Tools I use to move from problem to working system." />
        <div className="grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, groupIndex) => (
            <div className={`min-w-0 border-t border-white/10 pt-5 ${groupIndex === skillGroups.length - 1 ? 'md:col-span-2 lg:col-span-3' : ''}`} key={group.title}>
              <h3 className="text-base font-medium text-zinc-100">{group.title}</h3>
              <ul className="mt-4 flex max-w-3xl flex-wrap gap-x-0 gap-y-1 text-sm leading-7 text-zinc-400">
                {group.skills.map((skill, index) => (
                  <li className="inline" key={skill}>
                    {index > 0 ? <span className="px-2 text-zinc-600" aria-hidden="true">/</span> : null}
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
