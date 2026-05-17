import { useState } from 'react'
import { motion } from 'motion/react'
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  CheckCircle2,
  Cpu,
  DatabaseZap,
  Download,
  ImageOff,
  Sparkles,
} from 'lucide-react'
import { SITE } from '../../lib/constants'
import { Button } from '../ui/Button'

const capabilities = [
  { label: 'MCP infrastructure', detail: 'Agent tools with policies, limits, and observability', icon: Bot },
  { label: 'RAG architectures', detail: 'Enterprise knowledge retrieval and document intelligence', icon: DatabaseZap },
  { label: 'Automation workflows', detail: 'Backend-first orchestration with human approval paths', icon: Sparkles },
]

const proofPoints = [
  'Software testing and reliability engineering foundation',
  'Observable, policy-aware agent and automation systems',
  'Backend platforms designed for production constraints',
]

const stats = [
  { value: 'MCP', label: 'infrastructure' },
  { value: 'RAG', label: 'systems' },
  { value: 'QA', label: 'reliability lens' },
]

const engineeringMetrics = [
  { value: '4+', label: 'production-minded AI projects' },
  { value: '8', label: 'reliability controls designed in' },
  { value: '3', label: 'automation layers: MCP, RAG, workflows' },
]

export function HeroSection() {
  const [profileImageFailed, setProfileImageFailed] = useState(false)

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
            I build practical AI systems that are designed to survive production.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:mt-6 sm:text-lg sm:leading-8">
            I design and build MCP infrastructure, RAG architectures, intelligent backend
            platforms, and automation workflows with the reliability mindset of a software testing
            engineer.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row">
            <Button href="#contact" className="sm:min-w-44">
              Book a project call
              <ArrowRight size={18} />
            </Button>
            <Button href="#projects" variant="secondary" className="sm:min-w-40">
              View selected work
            </Button>
            <Button
              href={SITE.cv}
              variant="ghost"
              className="sm:min-w-36"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
              <Download size={18} />
            </Button>
          </div>
          <div className="mt-7 grid gap-3 sm:mt-8 sm:grid-cols-3">
            {engineeringMetrics.map((metric, index) => (
              <motion.div
                className="rounded-lg border border-white/10 bg-white/[0.045] p-4 shadow-xl shadow-slate-950/10 backdrop-blur"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: 0.22 + index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                key={metric.label}
              >
                <p className="text-2xl font-semibold text-white">{metric.value}</p>
                <p className="mt-1 text-sm leading-5 text-slate-400">{metric.label}</p>
              </motion.div>
            ))}
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
            <div className="mb-5 flex flex-col gap-4 rounded-lg border border-white/10 bg-white/[0.035] p-4 sm:flex-row sm:items-center">
              <div className="relative mx-auto size-36 shrink-0 overflow-hidden rounded-full border border-cyan-300/25 bg-slate-950 shadow-2xl shadow-cyan-950/40 sm:mx-0 sm:size-32 lg:size-36">
                <div className="absolute inset-0 grid place-items-center bg-[radial-gradient(circle_at_50%_35%,rgba(103,232,249,0.18),rgba(15,23,42,0.92)_62%)] text-cyan-200">
                  <ImageOff size={32} aria-hidden="true" />
                </div>
                {!profileImageFailed ? (
                  <img
                    className="relative h-full w-full object-cover"
                    src="/profile.jpg"
                    alt="Breezy Kalama, AI Engineer"
                    width="900"
                    height="900"
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                    onError={() => setProfileImageFailed(true)}
                  />
                ) : null}
              </div>
              <div className="text-center sm:text-left">
                <p className="text-lg font-semibold text-white">Breezy Kalama</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  AI Engineer focused on MCP infrastructure, RAG systems, automation workflows,
                  and reliable backend platforms.
                </p>
              </div>
            </div>
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
