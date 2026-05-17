import { motion } from 'motion/react'
import { Blocks, Gauge, ShieldCheck } from 'lucide-react'
import { SectionHeader } from '../common/SectionHeader'
import { Card } from '../ui/Card'

const principles = [
  {
    title: 'Testing instincts',
    description:
      'I think in edge cases, review paths, logs, and failure modes before I think in demos.',
    icon: Blocks,
  },
  {
    title: 'Controlled execution',
    description:
      'Agent actions should pass through permissions, approvals, limits, and records that humans can inspect.',
    icon: ShieldCheck,
  },
  {
    title: 'Product-shaped systems',
    description:
      'I connect model capability to APIs, interfaces, databases, integrations, and workflows people can actually use.',
    icon: Gauge,
  },
]

export function AboutSection() {
  return (
    <section id="about" className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="About"
          title="My testing background changes how I build AI."
          description="I approach intelligent systems as software that must be inspected, constrained, and maintained, not just prompted into a convincing response."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {principles.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                key={item.title}
              >
                <Card className="h-full">
                  <Icon className="mb-5 text-cyan-300" size={28} />
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{item.description}</p>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
