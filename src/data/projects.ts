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
    category: 'Insurance AI',
    title: 'BimaIntel',
    status: 'Full-stack product build',
    role: 'Full-stack AI product engineer',
    timeline: '2025 - 2026',
    repository: {
      label: 'Private repo',
      visibility: 'private',
    },
    description:
      'An AI copilot for insurance relationship managers that combines recommendations, rules, audit trails, and a full-stack product interface.',
    impact:
      'Helps relationship managers make more consistent, explainable recommendations while preserving business rules and review history.',
    scope: 'Recommendation engine, rules engine, FastAPI backend, React frontend, MySQL, audit logging',
    architecture:
      'BimaIntel combines a React workspace with a FastAPI backend, MySQL persistence, rules-based recommendation logic, and audit logging so insurance relationship managers can receive explainable guidance inside a structured workflow.',
    architectureFlow: [
      'React relationship-manager workspace',
      'FastAPI service layer',
      'Rules engine',
      'Recommendation engine',
      'MySQL persistence',
      'Audit log trail',
    ],
    challenges: [
      'Balancing intelligent recommendations with deterministic business rules.',
      'Making recommendations useful to relationship managers without hiding the reasoning path.',
      'Maintaining audit history for decisions, recommendations, and workflow activity.',
    ],
    decisions: [
      'Used a rules engine alongside recommendation logic to keep business constraints explicit.',
      'Kept the backend API-centered so the recommendation layer can evolve independently from the frontend.',
      'Designed audit logging as part of the core workflow rather than an afterthought.',
    ],
    reliability: [
      'Rules engine keeps recommendations constrained by explicit business logic.',
      'Audit logging preserves recommendation and workflow history.',
      'API-centered backend keeps product behavior testable and maintainable.',
    ],
    outcomes: [
      'A practical AI copilot concept for insurance relationship management.',
      'More consistent and explainable recommendation workflows.',
      'A full-stack platform foundation using FastAPI, React, and MySQL.',
    ],
    evidence: [
      'Combines deterministic rules with AI-assisted recommendation flows.',
      'Includes both backend architecture and recruiter-visible frontend workflow.',
      'Designed for traceability in relationship-manager decision support.',
    ],
    stack: ['FastAPI', 'React', 'TypeScript', 'MySQL', 'Rules Engine', 'Audit Logs'],
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
