import type { ExperienceItem } from '../types'

export const experience: ExperienceItem[] = [
  {
    role: 'AI Engineer',
    company: 'NTT DATA Inc.',
    period: 'Feb 2025 \u2013 Present',
    location: 'Nairobi, Kenya',
    summary: 'Design and build AI, backend, automation, and digital-transformation solutions for enterprise clients.',
    responsibilities: [
      {
        title: 'AI & backend engineering',
        items: [
          'Build AI agents and enterprise AI solutions using Azure AI Foundry and Microsoft Copilot Studio, integrating models with workflows, APIs, knowledge sources, and internal systems.',
          'Develop backend services and REST APIs connecting AI applications, enterprise platforms, and data sources, working with Python, FastAPI, Azure Cosmos DB, PostgreSQL, Redis, Azure services, n8n, and UiPath.',
          'Engineer for reliability through unit, API, integration, and functional testing, with attention to validation, system behaviour, integrations, and business requirements.',
          'Analyse end-to-end operations and translate business requirements into technical requirements, workflows, integrations, future-state solution designs, and automation opportunities across Payments, Reconciliation, Trade Operations, Customer Onboarding, and Records.',
          'Collaborate with 30+ stakeholders across business, operations, architecture, technology, and engineering teams to validate requirements, shape solutions, and support enterprise delivery.',
        ],
      },
    ],
  },
  {
    role: 'Software Tester Engineer',
    company: 'Microsoft via Techno Brain',
    period: 'Jul 2024 \u2013 Feb 2025',
    location: 'Nairobi, Kenya',
    summary: 'Worked on Windows product quality, reliability, and validation across different system and device environments.',
    responsibilities: [
      {
        title: 'Quality & validation',
        items: [
          'Executed functional, integration, regression, exploratory, and reliability testing across different system and device environments.',
          'Investigated system failures, unexpected behaviour, and compatibility issues, producing structured defect reports and validation evidence for engineering teams.',
          'Worked with distributed Microsoft engineering teams to validate fixes and verify behaviour before release.',
          'Developed the software-quality mindset that now influences how I design and test AI and backend systems.',
        ],
      },
    ],
  },
]
