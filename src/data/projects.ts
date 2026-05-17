import type { Project } from '../types'

export const projects: Project[] = [
  {
    category: 'Retrieval AI',
    title: 'RAG Knowledge Platform',
    description:
      'A production-minded knowledge platform with structured ingestion, hybrid retrieval, answer evaluation, and source-level observability.',
    impact: 'Cut research turnaround from hours to minutes while keeping every answer traceable.',
    scope: 'Architecture, retrieval pipeline, evaluation harness, API layer',
    stack: ['TypeScript', 'Python', 'Vector Search', 'RAG', 'Evals'],
  },
  {
    category: 'Agent Tooling',
    title: 'MCP Automation Toolkit',
    description:
      'Composable MCP tools for safe agent access to internal workflows, developer operations, and structured business actions.',
    impact: 'Turned repeatable engineering work into auditable, permission-aware agent capabilities.',
    scope: 'Tool contracts, auth boundaries, workflow adapters, logging',
    stack: ['MCP', 'Node.js', 'API Design', 'Auth', 'Tooling'],
  },
  {
    category: 'AI Platform',
    title: 'AI Workflow Orchestrator',
    description:
      'A backend platform for routing tasks through AI services, deterministic workers, queues, and human review checkpoints.',
    impact: 'Improved reliability by separating model reasoning from business-critical execution paths.',
    scope: 'Service design, queues, worker orchestration, review states',
    stack: ['React', 'TypeScript', 'Queues', 'PostgreSQL', 'Workers'],
  },
]
