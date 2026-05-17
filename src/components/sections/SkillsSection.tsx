import { motion } from 'motion/react'
import { CheckCircle2 } from 'lucide-react'
import { skillGroups } from '../../data/skills'
import { SectionHeader } from '../common/SectionHeader'
import { Card } from '../ui/Card'

export function SkillsSection() {
  return (
    <section id="skills" className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Skills"
          title="Tools I use to move from idea to working system."
          description="My stack spans Python services, React interfaces, databases, queues, automation tools, integrations, and the testing practices that keep projects grounded."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              key={group.title}
            >
              <Card className="h-full">
                <h3 className="text-xl font-semibold text-white">{group.title}</h3>
                <ul className="mt-5 space-y-3">
                  {group.skills.map((skill) => (
                    <li className="flex items-center gap-3 text-slate-300" key={skill}>
                      <CheckCircle2 className="shrink-0 text-cyan-300" size={18} />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
