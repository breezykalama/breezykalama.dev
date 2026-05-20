import type { Project } from '../types'

export const projects: Project[] = [
  {
    category: 'MCP Infrastructure',
    title: 'MCPGen',
    status: 'Active build',
    role: 'Sole builder / AI infrastructure engineer',
    timeline: '2026',
    repository: {
      label: 'Public repo',
      visibility: 'public',
      href: 'https://github.com/breezykalama/mcpgen.git',
    },
    description:
      'An OpenAPI-to-MCP server generator for turning API specifications into production-minded agent tools with semantic routing, observability, and control points.',
    impact: 'Creates a cleaner path from existing APIs to agent-ready tooling without losing safety, traceability, or operational discipline.',
    scope:
      'OpenAPI parsing, semantic tool routing, policy enforcement, mock execution, rate limits, circuit breakers',
    architecture:
      'MCPGen is structured as a generator pipeline: OpenAPI contracts are parsed into tool definitions, routed through semantic metadata, and wrapped with runtime controls for execution, policy, logging, and resilience.',
    architectureFlow: [
      'OpenAPI specification',
      'Schema parser',
      'Tool manifest generator',
      'Semantic routing layer',
      'Policy and resilience middleware',
      'MCP server runtime',
    ],
    challenges: [
      'Mapping broad OpenAPI specifications into agent-friendly tools without losing parameter clarity.',
      'Keeping generated tools safe enough for experimentation through mock execution and explicit policy checks.',
      'Designing observability hooks that make tool usage understandable during agent runs.',
    ],
    decisions: [
      'Separated generation concerns from runtime enforcement so policy, rate limits, and circuit breakers remain composable.',
      'Added semantic routing metadata to help agents choose the right generated tool with less ambiguity.',
      'Included mock execution paths to validate behavior before connecting real downstream services.',
    ],
    reliability: [
      'Circuit breakers for unsafe or unstable downstream calls.',
      'Rate limiting to prevent accidental tool-call bursts.',
      'Structured observability around generated tool execution.',
    ],
    outcomes: [
      'A production-minded bridge from existing APIs to MCP server infrastructure.',
      'Improved safety posture through explicit limits, policies, and execution boundaries.',
      'A reusable foundation for turning API ecosystems into agent-capable platforms.',
    ],
    evidence: [
      'Generator-first design rather than hand-written one-off MCP tools.',
      'Mock execution support for safe testing before live integrations.',
      'Policy layer designed into the runtime path.',
    ],
    stack: ['MCP', 'OpenAPI', 'Python', 'FastAPI', 'Observability', 'Policy'],
  },
  {
    category: 'Financial Automation',
    title: 'M-Pesa MCP Server',
    status: 'Prototype architecture',
    role: 'Backend and MCP systems designer',
    timeline: '2026',
    repository: {
      label: 'Public repo',
      visibility: 'public',
      href: 'https://github.com/breezykalama/mpesa-mcp-server.git',
    },
    description:
      'An AI agent interaction layer for M-Pesa workflows, designed around approvals, auditability, rate limiting, and backend integration boundaries.',
    impact:
      'Shows how sensitive payment workflows can be exposed to agents through controlled, reviewable, backend-first architecture.',
    scope:
      'Approval workflows, audit logging, Redis rate limiting, mock Daraja integration, backend architecture',
    architecture:
      'The server acts as a controlled interaction layer between AI agents and M-Pesa-style workflows, placing approval gates, audit logs, Redis-backed limits, and mocked Daraja execution between agent intent and financial operations.',
    architectureFlow: [
      'AI agent request',
      'MCP tool contract',
      'Approval workflow',
      'Redis rate limiter',
      'Audit logger',
      'Mock Daraja adapter',
    ],
    challenges: [
      'Designing agent-accessible payment workflows without allowing uncontrolled execution.',
      'Capturing enough audit context to make every proposed or executed action reviewable.',
      'Simulating Daraja behavior safely while preserving realistic backend integration patterns.',
    ],
    decisions: [
      'Placed approval workflows at the center of sensitive operations instead of treating them as a UI-only concern.',
      'Used Redis rate limiting to protect backend endpoints from repeated or accidental agent calls.',
      'Kept Daraja integration mocked for safe development while preserving clean adapter boundaries.',
    ],
    reliability: [
      'Approval gates before sensitive workflow execution.',
      'Audit logs for every agent-triggered request path.',
      'Redis-backed throttling around repeated tool calls.',
    ],
    outcomes: [
      'A safer blueprint for exposing financial workflows to AI agents.',
      'Clear auditability around approvals, requests, and backend execution attempts.',
      'Backend architecture that can evolve toward real payment integrations without changing the agent contract.',
    ],
    evidence: [
      'Mock Daraja integration keeps development safe and inspectable.',
      'Agent actions are modeled as auditable backend workflows.',
      'Rate limits and approvals are core architecture pieces, not presentation-layer extras.',
    ],
    stack: ['MCP', 'Redis', 'Daraja API', 'Backend Architecture', 'Audit Logs'],
  },
  {
    category: 'SaaS Operations',
    title: 'SafishaHQ',
    status: 'Production-minded MVP',
    role: 'End-to-end full-stack builder',
    timeline: '2025 - 2026',
    repository: {
      label: 'Private repo',
      visibility: 'private',
    },
    description:
      'A multi-tenant SaaS MVP for laundry businesses in Kenya, covering orders, pickups, payments, staff workflows, customer engagement, finance, analytics, and AI-ready business intelligence.',
    impact:
      'Turns manual laundry operations into a structured dashboard for daily work, payment tracking, profitability visibility, and customer retention.',
    scope:
      'Multi-tenant SaaS, role-based access, pickup scheduling, order management, payments, SMS notifications, finance analytics, customer retention',
    architecture:
      'SafishaHQ uses a modular FastAPI backend with PostgreSQL, SQLAlchemy, Alembic migrations, JWT role-based access, and a React/TypeScript frontend. Provider-style boundaries keep payment, SMS, receipt, analytics, and AI assistant capabilities separate from core tenant workflows.',
    architectureFlow: [
      'Tenant onboarding and auth',
      'Customer and pickup workflows',
      'Order and staff operations',
      'Payment and notification providers',
      'Finance and analytics modules',
      'AI-ready business intelligence layer',
    ],
    challenges: [
      'Designing tenant-safe data access for multiple laundry businesses on one platform.',
      'Coordinating orders, staff assignment, customer notifications, payments, and receipts in one workflow.',
      'Keeping analytics useful for small businesses without overcomplicating the daily operations UI.',
    ],
    decisions: [
      'Separated backend modules by business domain to keep the system maintainable as features grew.',
      'Used provider abstractions for payment, SMS, and AI assistant integrations to avoid coupling workflows to one vendor.',
      'Designed the AI assistant as read-only and business-intelligence oriented rather than action-taking by default.',
    ],
    reliability: [
      'Role-based JWT access separates customers, staff, admins, and platform-owner workflows.',
      'Tenant-aware backend patterns reduce the risk of cross-business data exposure.',
      'CI-ready checks cover backend validation, frontend validation, linting, and build readiness.',
    ],
    outcomes: [
      'A working SaaS MVP for laundry order management, customer operations, payments, and finance visibility.',
      'Dashboards for revenue, profitability, retention signals, loyalty campaigns, and tenant administration.',
      'A platform foundation prepared for deployment across Render, Vercel, and Supabase-style infrastructure.',
    ],
    evidence: [
      'Includes tenant management, operational workflows, finance modules, and analytics rather than a single-feature demo.',
      'Uses migrations, modular backend structure, typed frontend workflows, and deployment-oriented configuration.',
      'Models AI as a controlled business-intelligence layer instead of an unrestricted operational actor.',
    ],
    stack: ['FastAPI', 'React', 'TypeScript', 'PostgreSQL', 'Multi-Tenant', 'Analytics'],
  },
  {
    category: 'Business AI Product',
    title: 'Driving School Copilot',
    status: 'Private product build',
    role: 'Full-stack AI product engineer',
    timeline: '2025 - 2026',
    repository: {
      label: 'Private repo',
      visibility: 'private',
    },
    description:
      'A role-aware AI assistant for a driving school business, combining web chat, dashboards, conversational analytics, lesson scheduling, and messaging-channel support.',
    impact:
      'Shows how AI can support real business operations without sending every request directly to a model.',
    scope:
      'Role-aware assistant, executive analytics, lesson booking, branch dashboards, messaging integration, CI/testing',
    architecture:
      'Driving School Copilot uses a React frontend and FastAPI backend with MySQL persistence. Web chat and messaging channels route through a shared assistant service, where deterministic SQL and business rules handle operational questions while the LLM supports conversational reasoning and fallback responses.',
    architectureFlow: [
      'React dashboard and chat UI',
      'FastAPI assistant service',
      'Role and branch context',
      'Intent routing and normalization',
      'SQL-backed business tools',
      'LLM fallback and messaging response',
    ],
    challenges: [
      'Keeping operational analytics auditable instead of routing every question through an LLM.',
      'Enforcing role and branch scoping for admins, branch managers, instructors, and students.',
      'Sharing assistant behavior across web and messaging channels without duplicating business logic.',
    ],
    decisions: [
      'Used deterministic SQL and business rules for structured operational answers.',
      'Kept the LLM focused on conversational reasoning, fallback handling, and response shaping.',
      'Centralized assistant execution so dashboards and messaging channels use the same backend path.',
    ],
    reliability: [
      'Backend role checks prevent branch-scoped users from seeing school-wide data.',
      'Scheduling checks account for instructor availability and time-off before booking.',
      'CI runs backend tests, frontend linting, and frontend production builds.',
    ],
    outcomes: [
      'A role-aware assistant for CEOs, branch managers, instructors, and students.',
      'Conversational analytics for revenue, branch performance, risks, and growth opportunities.',
      'A multi-channel assistant architecture spanning web chat and messaging channels.',
    ],
    evidence: [
      'Hybrid SQL-plus-LLM design keeps common business answers fast and reviewable.',
      'Shared assistant service avoids separate chatbot logic for each channel.',
      'Demo flow covers dashboards, executive analytics, scheduling, messaging, and CI checks.',
    ],
    stack: ['FastAPI', 'React', 'MySQL', 'Azure OpenAI', 'Twilio', 'CI/CD'],
  },
]
