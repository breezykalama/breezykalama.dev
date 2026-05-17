import { motion } from 'motion/react'

type SectionHeaderProps = {
  eyebrow: string
  title: string
  description?: string
}

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <motion.div
      className="mx-auto mb-9 max-w-3xl text-center sm:mb-12 md:mb-14"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">{description}</p>
      ) : null}
    </motion.div>
  )
}
