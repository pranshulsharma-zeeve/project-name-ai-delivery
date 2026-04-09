# Architecture Overview — GPT Protocol Node Sale Platform

## 1) Architecture at a Glance
The platform combines a wallet-first web client, admin portal, backend APIs, event indexers, and Ethereum smart contracts.

```mermaid
flowchart LR
  U[Buyer] --> FE[Web App (Next.js)]
  A[Admin] --> ADM[Admin Portal]

  FE --> API[Backend API]
  ADM --> API

  API --> DB[(PostgreSQL)]
  API --> REDIS[(Redis optional)]
  API --> RPC[Ethereum RPC]
  API --> ORACLE[ETH/USD Oracle]

  FE --> RPC

  RPC --> CENTRAL[GPTCentralStore]
  RPC --> DA[GPTDANodeLicense]
  RPC --> DEL[GPTDelegateNodeLicenseX]

  IDX[Indexer Worker] --> RPC
  IDX --> DB
```

## 2) Primary Components
- **Web App (Buyer):** wallet connect, product tabs, transaction UX, referral generation.
- **Admin Portal:** tier/config management, order exploration, reporting.
- **Backend API:** admin auth, read models, config APIs, analytics endpoints.
- **Indexer Worker:** consumes contract events and updates reporting tables.
- **Smart Contracts:** authoritative purchase, referral, cap, minting, transfer lock behavior.

## 3) Key Architecture Decisions
1. **On-chain source of truth for ownership and purchase validity.**
2. **Off-chain indexed read model** for fast dashboards and filters.
3. **Separation of buyer UI and admin concerns** with role-guarded APIs.
4. **One live Delegate tier at a time** to reduce purchase complexity and edge-case pricing.
5. **Configurable commission/discount parameters** managed via admin roles and recorded on-chain.

## 4) Data Ownership Boundaries
- **On-chain authoritative:** minted token ownership, transfer lock rules, referral/cap constraints.
- **Off-chain authoritative:** admin metadata, analytics aggregations, operational audit trails.
- **Reconciliation required:** order states and referral payout records between chain events and DB.

## 5) Reliability and Failure Handling
- Use primary + fallback RPC endpoints.
- Retry event indexing with idempotent processing.
- Surface wallet and chain failures with actionable UI messages.
- Alert on indexer lag, tx failure spikes, and stale oracle reads.

## 6) Security Considerations
- RBAC for admin operations.
- No private key storage in frontend/backend services.
- Strict validation for all admin configuration writes.
- Immutable audit logs for sensitive admin changes.

## 7) Environment Strategy
- **Dev:** rapid integration and contract iteration.
- **Staging:** production-like chain/config validation.
- **Production:** audited contracts, monitored indexer, operational runbook active.
