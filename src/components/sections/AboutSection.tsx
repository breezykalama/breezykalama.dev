import { motion } from 'motion/react'
import { Blocks, Gauge, ShieldCheck } from 'lucide-react'
import { SectionHeader } from '../common/SectionHeader'
import { Card } from '../ui/Card'

const principles = [
  {
    title: 'Reliability-first AI',
    description:
      'My testing background shows up in how I design AI systems: observable, recoverable, reviewable, and built around failure modes.',
    icon: Blocks,
  },
  {
    title: 'Controlled agent execution',
    description:
      'I build MCP tools and automation layers with policy enforcement, approval workflows, rate limits, audit trails, and safe mock execution.',
    icon: ShieldCheck,
  },
  {
    title: 'Practical backend platforms',
    description:
      'I connect AI capability to real products through FastAPI services, React interfaces, databases, integrations, and deployment pipelines.',
    icon: Gauge,
  },
]

export function AboutSection() {
  return (
    <section id="about" className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="About"
          title="AI engineering shaped by testing, reliability, and backend discipline."
          description="My work sits where applied AI meets dependable software engineering: MCP servers, RAG systems, automation workflows, and backend platforms that can be tested, observed, and safely operated."
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
