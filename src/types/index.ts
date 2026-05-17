export type NavItem = {
  label: string
  href: `#${string}`
}

export type Project = {
  category: string
  title: string
  description: string
  impact: string
  scope: string
  architecture: string
  challenges: string[]
  decisions: string[]
  outcomes: string[]
  stack: string[]
  links?: {
    label: string
    href: string
  }[]
}

export type SkillGroup = {
  title: string
  skills: string[]
}

export type ExperienceItem = {
  role: string
  company: string
  period: string
  summary: string
  highlights: string[]
}
