# AGENTS.md

## Working Rules for Codex
1. **Read first:** Before making changes, read `docs/product/srs.md` and any directly related docs/files for the task.
2. **Foundation before backlog:** Create/refine core foundation docs (architecture, setup, conventions, scope) before generating backlog/issues.
3. **Greenfield priority:** In an empty/new repo, prioritize bootstrap/setup issues first (project skeleton, tooling, CI, env, docs).
4. **Keep issues practical:** Write issues that are implementation-ready and GitHub-ready (clear scope, acceptance criteria, dependencies).
5. **Avoid over-engineering:** Prefer the simplest approach that satisfies the SRS and current phase.
6. **Clarify critical gaps:** If a critical requirement is ambiguous or missing, ask for clarification before implementation.
7. **Docs must stay current:** When introducing architecture/setup decisions, update relevant docs in the same change.
8. **Quality gate before done:** Run lint, tests, and build (as applicable) before declaring work complete.
