import type { ExperienceItem } from '../types'

export const experience: ExperienceItem[] = [
  {
    role: 'AI Engineer',
    company: 'Production AI Systems & Automation',
    period: '2024 - Present',
    summary:
      'Building practical AI systems that connect agents, RAG, MCP infrastructure, automation workflows, and backend platforms into production-ready software.',
    highlights: [
      'Built MCP infrastructure including OpenAPI-to-MCP generation, semantic tool routing, policy controls, mock execution, rate limiting, and circuit breakers.',
      'Designed AI agent interaction layers for real-world workflows with approval steps, audit logging, Redis-backed limits, and backend integration boundaries.',
      'Created RAG and knowledge-agent systems for enterprise retrieval, document intelligence, and agent-assisted knowledge workflows.',
    ],
  },
  {
    role: 'Software Testing & Reliability Engineer',
    company: 'Quality, Automation & Backend Reliability',
    period: 'Earlier Background',
    summary:
      'A software testing and reliability engineering foundation shapes how I approach AI: with safe execution paths, observability, failure handling, and maintainable delivery practices.',
    highlights: [
      'Applied testing discipline to system design, API integrations, automation workflows, and release readiness.',
      'Focused on reliability patterns such as audit trails, validation, controlled execution, monitoring, and graceful failure modes.',
      'Built a practical engineering style that prioritizes production behavior over demo-only AI experiences.',
    ],
  },
]
