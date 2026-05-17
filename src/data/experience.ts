import type { ExperienceItem } from '../types'

export const experience: ExperienceItem[] = [
  {
    role: 'AI Engineer',
    company: 'Independent Systems Builder',
    period: '2024 - Present',
    summary:
      'Designing reliable AI products that combine model capabilities with backend discipline, evaluation, and operational clarity.',
    highlights: [
      'Built RAG pipelines with structured ingestion, retrieval controls, and quality feedback loops.',
      'Created MCP tools and automation workflows for internal operations and developer productivity.',
      'Designed backend services that keep AI features observable, recoverable, and safe to iterate.',
    ],
  },
  {
    role: 'Backend & Automation Engineer',
    company: 'Client Platforms',
    period: '2021 - 2024',
    summary:
      'Delivered APIs, data flows, and workflow automation for teams that needed dependable software under real constraints.',
    highlights: [
      'Shipped integrations across third-party APIs, internal tools, and data services.',
      'Improved operational workflows by replacing manual handoffs with resilient automation.',
      'Partnered with product teams to turn ambiguous requirements into maintainable systems.',
    ],
  },
]
