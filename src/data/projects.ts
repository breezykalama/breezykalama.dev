import type { Project } from '../types'

export const projects: Project[] = [
  {
    title: 'MCPGen',
    category: 'Open-Source AI Infrastructure',
    description:
      'An open-source framework that generates policy-aware MCP servers from OpenAPI specifications, helping AI agents interact with existing APIs through controlled and observable tool interfaces.',
    scope:
      'OpenAPI parsing, automated tool generation, semantic routing, policy controls, authentication support, rate limiting, audit logging, circuit breakers, mock execution, response validation, runtime monitoring, and automated testing.',
    stack: ['Python', 'FastAPI', 'OpenAPI', 'MCP', 'httpx', 'sentence-transformers', 'pytest'],
    evidence: [
      '120+ automated tests across core framework behaviour.',
      'Published as an open-source package.',
      'Built and maintained independently.',
    ],
    repository: {
      label: 'Public repository',
      visibility: 'public',
      href: 'https://github.com/breezykalama/mcpgen.git',
    },
  },
  {
    title: 'M-Pesa MCP Server',
    category: 'Agentic Payments Infrastructure',
    description:
      'A controlled interaction layer for AI-assisted M-Pesa workflows, designed around approvals, transaction limits, idempotency, auditability, and backend safety controls.',
    scope:
      'STK Push workflows, transaction status tools, receipts, approvals, idempotency controls, transaction limits, Redis rate limiting, audit logging, callback validation, structured logging, sandbox integration, PostgreSQL persistence, and CI validation.',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'MCP', 'Daraja Sandbox', 'GitHub Actions'],
    evidence: [
      'Working sandbox implementation.',
      '180+ automated tests across backend and workflow behaviour.',
      'Built around explicit controls for sensitive payment actions.',
    ],
    repository: {
      label: 'Public repository',
      visibility: 'public',
      href: 'https://github.com/breezykalama/mpesa-mcp-server.git',
    },
  },
  {
    title: 'Driving School Copilot',
    category: 'AI Analytics & Operations Platform',
    description:
      'An AI-powered platform that allows business users to query operational data conversationally while keeping structured analytics grounded in deterministic SQL and business logic.',
    scope:
      'Natural-language analytics, revenue and branch-performance analysis, role-aware dashboards, scheduling workflows, instructor availability checks, role and branch access controls, SQL-backed business tools, LLM fallback handling, and shared web/messaging assistant logic.',
    decisions: [
      'Structured operational questions are answered using deterministic SQL and business logic, while the LLM is used where language understanding and reasoning add value.',
    ],
    stack: ['FastAPI', 'React', 'MySQL', 'Azure OpenAI', 'APIs', 'CI/CD'],
    repository: {
      label: 'Private project',
      visibility: 'private',
    },
  },
]
