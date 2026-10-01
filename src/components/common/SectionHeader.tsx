type SectionHeaderProps = {
  eyebrow: string
  title: string
  description?: string
}

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="mb-12 max-w-2xl sm:mb-16">
      <p className="section-label mb-5">{eyebrow}</p>
      <h2 className="text-3xl font-medium leading-tight text-zinc-100 sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-5 max-w-xl text-base leading-7 text-zinc-400">{description}</p>
      ) : null}
    </div>
  )
}
