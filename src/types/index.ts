export type NavItem = {
  label: string
  href: `#${string}`
}

export type Project = {
  category: string
  title: string
  status: string
  role: string
  timeline: string
  repository: {
    label: string
    visibility: 'public' | 'private' | 'mostly-private' | 'available-on-request'
    href?: string
  }
  description: string
  impact: string
  scope: string
  architecture: string
  architectureFlow: string[]
  challenges: string[]
  decisions: string[]
  reliability: string[]
  outcomes: string[]
  evidence: string[]
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
