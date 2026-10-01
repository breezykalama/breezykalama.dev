import { useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { ArrowRight, Download } from 'lucide-react'
import { hero } from '../../data/profile'
import { SITE } from '../../lib/constants'
import { Button } from '../ui/Button'

export function HeroSection() {
  const [profileImageFailed, setProfileImageFailed] = useState(false)
  const reducedMotion = useReducedMotion()

  return (
    <section className="section-shell pb-12 pt-10 sm:pb-18 sm:pt-14 lg:pt-18" aria-labelledby="hero-title">
      <motion.div
        className="relative grid items-center md:grid-cols-[1.65fr_0.75fr] md:gap-10 lg:gap-16"
        initial={reducedMotion ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        <div className="min-w-0">
          <p className="section-label mb-6 flex min-h-14 items-center md:min-h-0">{SITE.role}</p>
          <h1 id="hero-title" className="max-w-2xl text-[2.5rem] font-medium leading-[1.12] text-zinc-100 sm:text-5xl lg:text-[3.5rem]">
            {hero.headline}
          </h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">
            {hero.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 min-[400px]:flex-row sm:mt-9">
            <Button href="#projects">
              View selected work <ArrowRight size={17} aria-hidden="true" />
            </Button>
            <Button href={SITE.cv} variant="secondary" download target="_blank" rel="noopener noreferrer">
              Download CV <Download size={17} aria-hidden="true" />
            </Button>
          </div>
          <div className="mt-5 flex gap-7">
            <a className="text-link" href={SITE.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="text-link" href={SITE.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
        <div className="absolute right-0 top-0 md:static md:justify-self-end">
          <div className="relative size-14 overflow-hidden rounded-full border border-white/10 bg-zinc-900 md:size-52 lg:size-64">
            {profileImageFailed ? (
              <span className="absolute inset-0 grid place-items-center text-2xl font-medium text-zinc-400" role="img" aria-label="Breezy Kalama profile image unavailable">BK</span>
            ) : (
              <img
                src="/profile.jpg"
                alt="Breezy Kalama, AI Engineer"
                className="h-full w-full object-cover"
                width="601"
                height="900"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                onError={() => setProfileImageFailed(true)}
              />
            )}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
