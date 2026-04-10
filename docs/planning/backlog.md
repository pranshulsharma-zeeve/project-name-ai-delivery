# Backlog (User Stories)

## Epic E1 — Frontend Bootstrap and Buyer App Foundation
1. As an engineer, I need a Next.js buyer app scaffold so feature teams can build on a stable frontend base.
2. As an engineer, I need a baseline UI shell and design token layer so all screens share consistent styling.
3. As a buyer, I need wallet connection scaffolding with supported chain checks so I can start transactions safely.
4. As an engineer, I need frontend test and lint scaffolding so regressions are caught early.

## Epic E2 — Backend Bootstrap and Service Foundation
5. As an engineer, I need a backend API service scaffold so public/admin endpoints can be implemented consistently.
6. As an engineer, I need a modular contract adapter layer so chain reads/writes are isolated and testable.
7. As an operator, I need structured logging and health checks so I can monitor service health.

## Epic E3 — Shared Tooling, CI, Quality Gates, and Environment Management
8. As an engineer, I need shared lint/format rules so code quality is consistent across frontend/backend.
9. As a team, I need CI pipelines for lint/test/build so merges are gated by objective checks.
10. As an engineer, I need env templates and local run scripts so setup is repeatable in a greenfield repo.

## Epic E4 — Database and Prisma Foundation
11. As an engineer, I need a Prisma schema and initial migrations so order/referral/admin data can be persisted.
12. As an engineer, I need DB seed scripts and migration workflow docs so local/staging setup is reliable.
13. As an engineer, I need repository-level data access conventions so services query data consistently.

## Epic E5 — Auth and Session Foundation
14. As an admin user, I need secure login and session lifecycle so only authorized users can use admin modules.
15. As a security reviewer, I need RBAC enforcement for admin endpoints so sensitive operations are protected.

## Epic E6 — Core Product Features (Buyer + Admin + Indexing)
16. As a buyer, I need public sale configuration and quote APIs so UI can show real-time purchase details.
17. As a buyer, I need Delegate purchase UI with referral support and validations so I can buy correctly.
18. As a buyer, I need DA purchase UI without referral behavior so flow matches product rules.
19. As a buyer, I need referral code generation and availability validation so code creation is predictable.
20. As a platform, I need event indexing and order read models so admin and buyer order history is available.
21. As an admin, I need tier management APIs/UI so sales can be configured and transitioned safely.
22. As an admin, I need blockchain and commission config APIs/UI so runtime settings are controlled.
23. As an admin, I need referral activeness and user blacklist controls so fraud/abuse can be managed.
24. As an admin, I need orders search/filter/export so support and finance can resolve issues quickly.
25. As an admin, I need analytics summary endpoints/UI so operational trends are visible.

## Epic E7 — Polish, Monitoring, and Non-Critical Enhancements
26. As a buyer, I need clear transaction and failure UX states so I understand next steps.
27. As an operator, I need monitoring/alerting dashboards so incidents are detected quickly.
28. As an operator, I need reconciliation jobs and reports so chain vs DB consistency is verified.
29. As a team, I need launch hardening and non-critical UX refinements so production readiness is improved.
