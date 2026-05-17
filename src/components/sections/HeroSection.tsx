import { motion } from 'motion/react'
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  CheckCircle2,
  Cpu,
  DatabaseZap,
  Sparkles,
} from 'lucide-react'
import { SITE } from '../../lib/constants'
import { Button } from '../ui/Button'

const capabilities = [
  { label: 'RAG systems', detail: 'Grounded retrieval and evaluation', icon: DatabaseZap },
  { label: 'MCP tools', detail: 'Typed tool contracts and safe execution', icon: Bot },
  { label: 'Automation', detail: 'Human-aware workflow orchestration', icon: Sparkles },
]

const proofPoints = [
  'Production-first AI architecture',
  'Backend platforms with observable workflows',
  'Clean handoff from prototype to reliable system',
]

const stats = [
  { value: 'AI', label: 'systems' },
  { value: 'RAG', label: 'architecture' },
  { value: 'MCP', label: 'tooling' },
]

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden px-4 pb-16 pt-16 sm:px-6 sm:pb-24 sm:pt-20 lg:px-8 lg:pb-28 lg:pt-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(103,232,249,0.18),transparent_30%),radial-gradient(circle_at_82%_4%,rgba(52,211,153,0.14),transparent_26%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-px bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] xl:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200 sm:mb-6">
            <Cpu size={15} />
            {SITE.role}
          </div>
          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            I build reliable AI systems that make it safely past the prototype.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:mt-6 sm:text-lg sm:leading-8">
            I build production-ready AI workflows, MCP tools, RAG platforms, automation systems,
            and backend services that make intelligent software measurable and dependable.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row">
            <Button href="#contact" className="sm:min-w-44">
              Book a project call
              <ArrowRight size={18} />
            </Button>
            <Button href="#projects" variant="secondary" className="sm:min-w-40">
              View selected work
            </Button>
          </div>
          <ul className="mt-7 grid gap-3 text-sm text-slate-300 sm:mt-8 sm:grid-cols-3">
            {proofPoints.map((point) => (
              <li className="flex gap-2.5" key={point}>
                <CheckCircle2 className="mt-0.5 shrink-0 text-cyan-300" size={17} />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute -inset-4 -z-10 rounded-2xl bg-cyan-300/10 blur-3xl" />
          <div className="rounded-lg border border-white/10 bg-slate-900/88 p-4 shadow-2xl shadow-cyan-950/30 sm:p-6">
            <div className="mb-5 flex items-start justify-between gap-4 border-b border-white/10 pb-5">
              <div>
                <p className="text-sm font-semibold text-white">AI delivery cockpit</p>
                <p className="mt-1 text-xs leading-5 text-slate-400">{SITE.availability}</p>
              </div>
              <span className="grid size-11 shrink-0 place-items-center rounded-md bg-cyan-300/10 text-cyan-200">
                <BrainCircuit size={24} />
              </span>
            </div>
            <div className="grid grid-cols-3 gap-3 border-b border-white/10 pb-5">
              {stats.map((stat) => (
                <div className="rounded-md bg-white/[0.045] p-3" key={stat.label}>
                  <p className="text-lg font-semibold text-white">{stat.value}</p>
                  <p className="mt-1 text-xs text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 space-y-3">
              {capabilities.map((item, index) => {
                const Icon = item.icon

                return (
                  <motion.div
                    className="flex items-start gap-4 rounded-md border border-white/10 bg-white/[0.04] p-4"
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.45, delay: 0.25 + index * 0.1 }}
                    key={item.label}
                  >
                    <span className="grid size-10 place-items-center rounded-md bg-cyan-300/10 text-cyan-200">
                      <Icon size={19} />
                    </span>
                    <div>
                      <p className="font-semibold text-white">{item.label}</p>
                      <p className="mt-1 text-sm leading-6 text-slate-400">{item.detail}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
