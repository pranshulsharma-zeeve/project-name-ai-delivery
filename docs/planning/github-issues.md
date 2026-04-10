# GitHub-Ready Implementation Issues

## Issue 1 — Frontend bootstrap (Next.js app shell)
### title
Frontend bootstrap: initialize Next.js buyer application
### objective
Create the buyer-facing Next.js codebase with a runnable local setup and baseline project structure.
### context docs
- docs/product/srs.md
- docs/product/brief.md
- docs/design/design-system.md
### scope
- Initialize Next.js app with TypeScript.
- Add base folder structure: app/routes, components, lib, hooks, styles.
- Add base layout, header, and placeholder homepage.
- Add npm scripts for dev/build/start.
### acceptance criteria
- `npm run dev` starts app locally.
- Homepage renders base shell without runtime errors.
- Build completes with `npm run build`.
### deliverables
- Frontend app scaffold.
- Initial README section for frontend run steps.
### instructions for Codex
Implement minimum viable scaffold first; do not build deep features in this issue.

## Issue 2 — Frontend design tokens and UI primitives
### title
Frontend foundation: design tokens and shared UI primitives
### objective
Implement shared visual primitives aligned with design-system guidance.
### context docs
- docs/design/design-system.md
- docs/product/srs.md
### scope
- Add color, spacing, typography tokens.
- Add reusable Button, Input, Select, Card, Badge components.
- Add global CSS/theme setup.
### acceptance criteria
- Tokenized styles are used in homepage shell.
- Components support default/disabled/loading and error states where relevant.
### deliverables
- UI primitive component library.
- Token definitions and usage examples.
### instructions for Codex
Keep components minimal and practical for MVP flows.

## Issue 3 — Frontend wallet connection scaffold
### title
Frontend wallet scaffold: connect/disconnect and network checks
### objective
Add wallet integration scaffolding for MetaMask and Trust Wallet with wrong-network handling.
### context docs
- docs/flows/user-flows.md
- docs/product/srs.md
- docs/api/openapi.yaml
### scope
- Add wallet connect modal and provider selection UI.
- Add connected/disconnected/wrong-network states.
- Add disconnect control and address truncation helper.
### acceptance criteria
- User can trigger wallet connect flow.
- Unsupported network shows blocking banner and switch guidance.
### deliverables
- Wallet connection module and UI state hooks.
### instructions for Codex
Implement state management and UX; defer purchase transaction signing details to feature issues.

## Issue 4 — Backend bootstrap (API service skeleton)
### title
Backend bootstrap: initialize API service and module layout
### objective
Create backend service skeleton with routing, config loading, and standard error handling.
### context docs
- docs/product/srs.md
- docs/architecture/overview.md
- docs/api/openapi.yaml
### scope
- Initialize backend project (TypeScript/Node preferred).
- Add route modules for public/admin placeholders.
- Add config loader and centralized error middleware.
- Add health endpoint.
### acceptance criteria
- Service starts locally with one command.
- Health endpoint returns 200.
- Route stubs compile and run.
### deliverables
- Backend app scaffold.
- Backend run instructions in README.
### instructions for Codex
Create clean module boundaries now; avoid implementing feature logic in bootstrap.

## Issue 5 — Backend contract adapter foundation
### title
Backend foundation: blockchain contract adapter layer
### objective
Create reusable adapters for read operations to central and sale contracts.
### context docs
- docs/product/srs.md
- docs/architecture/overview.md
### scope
- Add provider client setup (primary/fallback RPC support).
- Add adapter interfaces for CentralStore, Delegate, DA reads.
- Add basic read methods used by quote/config endpoints.
### acceptance criteria
- Adapter module can be initialized with env config.
- Stubbed read methods are callable in service layer.
### deliverables
- Contract adapter interfaces and base implementation.
### instructions for Codex
Keep adapter API explicit and test-friendly; no hidden globals.

## Issue 6 — Shared repository lint/format/testing baseline
### title
Shared foundation: lint, format, and test tooling for frontend/backend
### objective
Set repository-wide quality standards and local scripts.
### context docs
- AGENTS.md
- docs/product/foundation-audit.md
### scope
- Add ESLint + Prettier configs.
- Add test runner setup for frontend and backend.
- Add root scripts for lint/format/test.
### acceptance criteria
- Root lint/test commands run successfully.
- Pre-commit quality checks are documented.
### deliverables
- Shared config files and scripts.
### instructions for Codex
Prefer simple, maintainable defaults.

## Issue 7 — CI pipeline for lint/test/build
### title
CI foundation: add GitHub Actions quality gates
### objective
Automate lint, test, and build checks in CI.
### context docs
- AGENTS.md
- docs/product/foundation-audit.md
### scope
- Add CI workflow running install, lint, test, build for affected apps.
- Add status badges and failure guidance.
### acceptance criteria
- CI runs on PR and main branch pushes.
- Pipeline fails on lint/test/build errors.
### deliverables
- `.github/workflows/ci.yml` and documentation.
### instructions for Codex
Keep CI fast; split jobs only when clearly useful.

## Issue 8 — Environment templates and dev scripts
### title
Environment foundation: env templates and local dev scripts
### objective
Standardize environment setup for frontend, backend, and workers.
### context docs
- docs/architecture/overview.md
- docs/product/open-questions.md
### scope
- Add `.env.example` files with required variables.
- Add scripts for local startup and dependency checks.
- Document required external services (DB/RPC).
### acceptance criteria
- New developer can bootstrap local env from docs/templates.
### deliverables
- Env templates and setup docs.
### instructions for Codex
Avoid hardcoded secrets and environment-specific values.

## Issue 9 — Database and Prisma bootstrap
### title
Data foundation: initialize Prisma schema and migration pipeline
### objective
Set up Prisma and initial schema for users, referrals, tiers, orders, and audit logs.
### context docs
- docs/product/srs.md
- docs/architecture/overview.md
### scope
- Add Prisma setup and first migration.
- Model core entities from SRS.
- Add DB client module.
### acceptance criteria
- Migration applies cleanly on local database.
- Prisma client generates and compiles.
### deliverables
- `schema.prisma`, migration files, DB module.
### instructions for Codex
Model only MVP-required tables first.

## Issue 10 — Seed data and migration workflow docs
### title
Data foundation: seed scripts and migration workflow documentation
### objective
Enable reproducible local/staging initialization of reference data.
### context docs
- docs/product/brief.md
- docs/product/srs.md
### scope
- Add seed scripts for tier/status/token reference data.
- Document migration + rollback workflow.
### acceptance criteria
- Seed script runs without manual SQL edits.
### deliverables
- Seed scripts and migration runbook.
### instructions for Codex
Keep seeds deterministic and idempotent.

## Issue 11 — Admin auth/session foundation
### title
Auth foundation: admin login and session lifecycle
### objective
Implement secure admin login, token issuance, refresh, and logout flow.
### context docs
- docs/api/openapi.yaml
- docs/product/srs.md
### scope
- Implement `/admin/auth/login`.
- Add JWT/session strategy with secure expiration policy.
- Add middleware for protected admin routes.
### acceptance criteria
- Authenticated admins can access protected routes.
- Invalid tokens are rejected.
### deliverables
- Auth module + middleware.
### instructions for Codex
Favor explicit security defaults and minimal surface area.

## Issue 12 — RBAC for admin operations
### title
Auth foundation: RBAC enforcement for admin and super-admin actions
### objective
Protect sensitive configuration and control endpoints with role checks.
### context docs
- docs/product/srs.md
- docs/api/openapi.yaml
### scope
- Define roles and permissions map.
- Enforce role checks on config/control endpoints.
- Add audit log entries for protected changes.
### acceptance criteria
- Unauthorized role actions return 403.
- Allowed actions are logged with actor and timestamp.
### deliverables
- RBAC module and route guards.
### instructions for Codex
Keep permission matrix simple and auditable.

## Issue 13 — Public sale config and quote APIs
### title
Core feature: implement public sale-config and quote endpoints
### objective
Expose buyer-facing config and quote calculations for Delegate/DA purchase forms.
### context docs
- docs/api/openapi.yaml
- docs/product/srs.md
### scope
- Implement `GET /public/sale-config`.
- Implement `GET /public/network-config`.
- Implement `POST /public/quote` with validation rules.
### acceptance criteria
- API returns active tier/DA info and limits.
- Quote endpoint validates caps, availability, referral eligibility.
### deliverables
- Public endpoint implementations + tests.
### instructions for Codex
Keep quote logic deterministic and reusable by UI.

## Issue 14 — Referral validation and availability APIs
### title
Core feature: implement referral validation and availability endpoints
### objective
Support buyer referral UX with fast server-side checks.
### context docs
- docs/api/openapi.yaml
- docs/flows/user-flows.md
### scope
- Implement `POST /referrals/validate`.
- Implement `POST /referrals/check-availability`.
- Wire reads to on-chain state and/or indexed read model.
### acceptance criteria
- Valid and invalid scenarios return clear, consistent response payloads.
### deliverables
- Referral endpoints + tests.
### instructions for Codex
Do not duplicate referral rules across modules; centralize validation logic.

## Issue 15 — Buyer UI: Delegate purchase module
### title
Core feature: build Delegate purchase UI and validations
### objective
Implement full Delegate purchase form experience with referral handling and transaction state UX.
### context docs
- docs/product/srs.md
- docs/flows/user-flows.md
- docs/design/design-system.md
### scope
- Build Delegate tab UI.
- Integrate quote/referral validation calls.
- Add wallet transaction lifecycle UI states.
### acceptance criteria
- Valid purchase path reaches signed tx submission flow.
- Invalid quantity/referral/cap conditions block submit with clear error.
### deliverables
- Delegate purchase module + tests.
### instructions for Codex
Focus on correct validations and state transitions before visual polish.

## Issue 16 — Buyer UI: DA purchase module
### title
Core feature: build DA purchase UI and validations
### objective
Implement DA purchase flow with no referral behavior.
### context docs
- docs/product/srs.md
- docs/flows/user-flows.md
### scope
- Build DA tab UI.
- Integrate quote flow without referral fields.
- Add tx status modals matching shared UX patterns.
### acceptance criteria
- DA flow functions with supported payment methods.
- Referral benefit is not exposed in DA flow.
### deliverables
- DA purchase module + tests.
### instructions for Codex
Keep DA flow as simple variant of Delegate with explicit referral exclusion.

## Issue 17 — Buyer referral generation UI + integration
### title
Core feature: referral code generation UX and integration
### objective
Enable wallet users to generate and copy their referral code.
### context docs
- docs/product/srs.md
- docs/flows/user-flows.md
### scope
- Build referral widget with generate/copy states.
- Add availability pre-check before on-chain submission.
- Show one-code-per-wallet messaging.
### acceptance criteria
- User can generate and copy code.
- Duplicate and invalid code attempts are clearly handled.
### deliverables
- Referral widget + tests.
### instructions for Codex
Prioritize clear UX feedback for all failure states.

## Issue 18 — Event indexer and order read-model foundation
### title
Core feature: implement chain event indexing for orders/referrals
### objective
Create worker pipeline to persist order/referral events for dashboard and history endpoints.
### context docs
- docs/architecture/overview.md
- docs/product/srs.md
### scope
- Implement event listeners for relevant contract events.
- Persist normalized order/referral records.
- Add idempotency and restart-safe cursor handling.
### acceptance criteria
- Indexed data appears in DB from test events.
- Reprocessing does not create duplicates.
### deliverables
- Indexer worker + persistence layer + tests.
### instructions for Codex
Implement reorg-safe logic and deterministic dedupe keys.

## Issue 19 — Admin tiers module (API + UI)
### title
Core feature: admin tier management implementation
### objective
Allow admins to create, update, and manage tier lifecycle safely.
### context docs
- docs/api/openapi.yaml
- docs/product/srs.md
### scope
- Implement `GET/POST /admin/tiers` and `PATCH /admin/tiers/{tierId}`.
- Build admin UI for tier CRUD and status transitions.
### acceptance criteria
- Tier updates persist and are reflected in public sale config.
### deliverables
- Tier API endpoints + admin screens + tests.
### instructions for Codex
Validate lifecycle transitions to prevent invalid live-state combinations.

## Issue 20 — Admin blockchain/commission config module
### title
Core feature: admin blockchain and commission configuration
### objective
Implement configuration endpoints and UI for chain settings and percentages.
### context docs
- docs/api/openapi.yaml
- docs/product/srs.md
### scope
- Implement `GET/PATCH /admin/config/blockchain`.
- Implement `PATCH /admin/config/commissions`.
- Implement `PATCH /admin/config/gpt-rate`.
- Build corresponding admin UI forms.
### acceptance criteria
- Config writes are validated and audited.
- Updated values are consumed by quote/read logic.
### deliverables
- Config endpoints + admin UI + tests.
### instructions for Codex
Enforce strict server-side validation and audit logging.

## Issue 21 — Admin abuse controls (referral activeness + blacklist)
### title
Core feature: admin referral and blacklist controls
### objective
Provide operational controls to activate/deactivate referral codes and blacklist users.
### context docs
- docs/api/openapi.yaml
- docs/flows/user-flows.md
- docs/qa/acceptance-matrix.md
### scope
- Implement `PATCH /admin/referrals/{code}/activeness`.
- Implement `PATCH /admin/users/{walletAddress}/blacklist`.
- Build admin UI actions and status indicators.
### acceptance criteria
- Control actions are reflected in referral validation and quote/purchase eligibility.
### deliverables
- Control endpoints + admin UI + tests.
### instructions for Codex
Treat these operations as high-impact; include confirmation UX and audit logs.

## Issue 22 — Orders API, admin filters, and export
### title
Core feature: implement orders listing/detail/filter/export
### objective
Enable buyer and admin order retrieval workflows with practical filters and CSV export.
### context docs
- docs/api/openapi.yaml
- docs/product/srs.md
### scope
- Implement `GET /orders`, `GET /admin/orders`, `GET /admin/orders/{orderId}`.
- Add filter handling and pagination.
- Add CSV export endpoint or job flow and admin trigger.
### acceptance criteria
- Filters return correct subsets.
- Export files match filtered dataset.
### deliverables
- Orders endpoints + export flow + tests.
### instructions for Codex
Keep filter semantics explicit and documented.

## Issue 23 — Analytics summary API and admin dashboard widgets
### title
Core feature: analytics summary and dashboard integration
### objective
Provide operational metrics for admins with stable read-model queries.
### context docs
- docs/api/openapi.yaml
- docs/qa/acceptance-matrix.md
### scope
- Implement `GET /admin/analytics/summary`.
- Build dashboard widgets for KPIs, top referrers, and popular codes.
### acceptance criteria
- Dashboard values align with indexed data and defined formulas.
### deliverables
- Analytics endpoint + dashboard components + tests.
### instructions for Codex
Document metric definitions in code comments and docs.

## Issue 24 — Transaction UX polish and error taxonomy
### title
Polish: standardized transaction UX states and error taxonomy
### objective
Improve clarity of user feedback across all transaction and validation failure paths.
### context docs
- docs/design/design-system.md
- docs/flows/user-flows.md
### scope
- Standardize pending/success/failure modal copy and visuals.
- Map common wallet/API/contract errors to user-friendly messages.
### acceptance criteria
- All key failure paths show deterministic, actionable messages.
### deliverables
- Unified transaction UX state components.
### instructions for Codex
Do not change core business logic in this issue.

## Issue 25 — Monitoring, alerting, and runbook wiring
### title
Ops polish: monitoring, alerting, and operational runbook integration
### objective
Establish baseline observability and incident response hooks for launch.
### context docs
- docs/architecture/overview.md
- docs/product/srs.md
- docs/qa/acceptance-matrix.md
### scope
- Add metrics for API errors, tx failures, indexer lag.
- Configure alert routes.
- Publish runbook links in ops docs.
### acceptance criteria
- Simulated failure conditions trigger expected alerts.
### deliverables
- Monitoring dashboard and alert configuration.
### instructions for Codex
Keep initial alert set small and high-signal.

## Issue 26 — Reconciliation job and launch hardening
### title
Ops polish: reconciliation reporting and launch hardening tasks
### objective
Add chain-vs-DB reconciliation and finalize non-critical launch readiness items.
### context docs
- docs/product/foundation-audit.md
- docs/product/open-questions.md
- docs/qa/acceptance-matrix.md
### scope
- Implement reconciliation job/report for orders and referral settlements.
- Add operational checklist automation where feasible.
- Resolve non-critical UX/perf polish items from staging feedback.
### acceptance criteria
- Reconciliation report runs on schedule and flags mismatches.
- Launch checklist items are tracked and complete.
### deliverables
- Reconciliation tooling + final hardening updates.
### instructions for Codex
Limit scope to non-critical polish and readiness tasks; avoid introducing new platform primitives.
