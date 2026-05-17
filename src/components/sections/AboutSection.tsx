import { motion } from 'motion/react'
import { Blocks, Gauge, ShieldCheck } from 'lucide-react'
import { SectionHeader } from '../common/SectionHeader'
import { Card } from '../ui/Card'

const principles = [
  {
    title: 'Systems over prompts',
    description: 'I pair model behavior with retrieval, typed tools, guardrails, and deterministic services.',
    icon: Blocks,
  },
  {
    title: 'Reliability by design',
    description: 'Observability, evaluation, retries, and human review paths are part of the architecture.',
    icon: ShieldCheck,
  },
  {
    title: 'Fast feedback loops',
    description: 'I ship in small increments so AI quality, product value, and platform risk stay visible.',
    icon: Gauge,
  },
]

export function AboutSection() {
  return (
    <section id="about" className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="About"
          title="I build AI features like production systems."
          description="My work sits where applied AI meets backend engineering: connecting models to data, tools, workflows, and real users without losing control of quality."
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
