export type NavItem = {
  label: string
  href: `#${string}`
}

export type Project = {
  category: string
  title: string
  repository: {
    label: string
    visibility: 'public' | 'private' | 'mostly-private' | 'available-on-request'
    href?: string
  }
  description: string
  scope: string
  decisions?: string[]
  reliability?: string[]
  evidence?: string[]
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
  location: string
  summary: string
  responsibilities: {
    title: string
    items: string[]
  }[]
}
