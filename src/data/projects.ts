import type { Project } from '../types'

export const projects: Project[] = [
  {
    category: 'MCP Infrastructure',
    title: 'MCPGen',
    description:
      'An OpenAPI-to-MCP server generator for turning API specifications into production-minded agent tools with semantic routing, observability, and control points.',
    impact: 'Creates a cleaner path from existing APIs to agent-ready tooling without losing safety, traceability, or operational discipline.',
    scope:
      'OpenAPI parsing, semantic tool routing, policy enforcement, mock execution, rate limits, circuit breakers',
    architecture:
      'MCPGen is structured as a generator pipeline: OpenAPI contracts are parsed into tool definitions, routed through semantic metadata, and wrapped with runtime controls for execution, policy, logging, and resilience.',
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
    outcomes: [
      'A production-minded bridge from existing APIs to MCP server infrastructure.',
      'Improved safety posture through explicit limits, policies, and execution boundaries.',
      'A reusable foundation for turning API ecosystems into agent-capable platforms.',
    ],
    stack: ['MCP', 'OpenAPI', 'Python', 'FastAPI', 'Observability', 'Policy'],
  },
  {
    category: 'Financial Automation',
    title: 'M-Pesa MCP Server',
    description:
      'An AI agent interaction layer for M-Pesa workflows, designed around approvals, auditability, rate limiting, and backend integration boundaries.',
    impact:
      'Shows how sensitive payment workflows can be exposed to agents through controlled, reviewable, backend-first architecture.',
    scope:
      'Approval workflows, audit logging, Redis rate limiting, mock Daraja integration, backend architecture',
    architecture:
      'The server acts as a controlled interaction layer between AI agents and M-Pesa-style workflows, placing approval gates, audit logs, Redis-backed limits, and mocked Daraja execution between agent intent and financial operations.',
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
    outcomes: [
      'A safer blueprint for exposing financial workflows to AI agents.',
      'Clear auditability around approvals, requests, and backend execution attempts.',
      'Backend architecture that can evolve toward real payment integrations without changing the agent contract.',
    ],
    stack: ['MCP', 'Redis', 'Daraja API', 'Backend Architecture', 'Audit Logs'],
  },
  {
    category: 'Insurance AI',
    title: 'BimaIntel',
    description:
      'An AI copilot for insurance relationship managers that combines recommendations, rules, audit trails, and a full-stack product interface.',
    impact:
      'Helps relationship managers make more consistent, explainable recommendations while preserving business rules and review history.',
    scope: 'Recommendation engine, rules engine, FastAPI backend, React frontend, MySQL, audit logging',
    architecture:
      'BimaIntel combines a React workspace with a FastAPI backend, MySQL persistence, rules-based recommendation logic, and audit logging so insurance relationship managers can receive explainable guidance inside a structured workflow.',
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
    outcomes: [
      'A practical AI copilot concept for insurance relationship management.',
      'More consistent and explainable recommendation workflows.',
      'A full-stack platform foundation using FastAPI, React, and MySQL.',
    ],
    stack: ['FastAPI', 'React', 'TypeScript', 'MySQL', 'Rules Engine', 'Audit Logs'],
  },
  {
    category: 'Knowledge AI',
    title: 'Knowledge Agent / RAG Systems',
    description:
      'Enterprise knowledge retrieval systems that combine document intelligence, grounded search, and agent workflows for practical information access.',
    impact:
      'Turns scattered internal knowledge into searchable, source-aware workflows that support decision-making and automation.',
    scope: 'Document intelligence, retrieval design, agent workflows, evaluation, knowledge operations',
    architecture:
      'Knowledge Agent systems combine document ingestion, retrieval pipelines, source-aware answer generation, and agent workflows that can search, summarize, and route knowledge tasks across enterprise content.',
    challenges: [
      'Handling messy enterprise documents while preserving useful retrieval context.',
      'Reducing hallucination risk by grounding answers in source material.',
      'Designing agent workflows that support knowledge work without becoming opaque.',
    ],
    decisions: [
      'Focused on retrieval design and document intelligence before adding more agent autonomy.',
      'Used source-aware outputs to make answers easier to verify and trust.',
      'Kept evaluation loops close to retrieval quality so improvements can be measured.',
    ],
    outcomes: [
      'A reusable pattern for enterprise knowledge retrieval and agent-assisted workflows.',
      'Better access to internal documents, policies, and operational knowledge.',
      'A foundation for expanding RAG systems into practical workflow automation.',
    ],
    stack: ['RAG', 'AI Agents', 'Document Intelligence', 'Python', 'PostgreSQL'],
  },
]
