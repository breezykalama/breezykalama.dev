import { aboutParagraphs } from '../../data/profile'

export function AboutSection() {
  return (
    <section id="about" className="section-space border-t border-white/10" aria-labelledby="about-title">
      <div className="section-shell grid gap-9 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div>
          <p className="section-label mb-5">About</p>
          <h2 id="about-title" className="max-w-md text-3xl font-medium leading-tight text-zinc-100 sm:text-4xl">
            I work across the problem, the solution, and the engineering.
          </h2>
        </div>
        <div className="max-w-2xl space-y-6 text-base leading-8 text-zinc-400">
          {aboutParagraphs.map((paragraph, index) => (
            <p className={index === 0 ? 'text-zinc-300' : undefined} key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
