# User Flows — GPT Protocol Node Sale Platform

## 1) Buyer Wallet Connection Flow
```mermaid
flowchart TD
  A[Open homepage] --> B[Click Connect Wallet]
  B --> C{Provider available?}
  C -- No --> D[Show install wallet guidance]
  C -- Yes --> E[Choose MetaMask / Trust Wallet]
  E --> F[Wallet permission prompt]
  F --> G{Approved?}
  G -- No --> H[Show connect rejected message]
  G -- Yes --> I[Show connected address + enable purchase]
```

## 2) Delegate Purchase Flow (with optional referral)
```mermaid
flowchart TD
  A[Connected user selects Delegate tab] --> B[Enter quantity]
  B --> C[Select payment token]
  C --> D[Optional referral code]
  D --> E[Validate qty/cap/tier/referral]
  E --> F{Valid?}
  F -- No --> G[Show inline errors]
  F -- Yes --> H[Click Pay Now]
  H --> I[Wallet tx confirmation]
  I --> J{Submitted?}
  J -- No --> K[Show rejected/failed state]
  J -- Yes --> L[Wait for chain confirmation]
  L --> M[Mint NFTs to buyer wallet]
  M --> N[Show success + explorer link]
```

## 3) DA Purchase Flow
```mermaid
flowchart TD
  A[Connected user selects DA tab] --> B[Enter quantity]
  B --> C[Select payment token]
  C --> D[Validate qty/cap/supply]
  D --> E{Valid?}
  E -- No --> F[Show validation message]
  E -- Yes --> G[Pay Now -> wallet prompt]
  G --> H[Tx confirmed]
  H --> I[Mint DA NFTs]
  I --> J[Show success]
```

## 4) Referral Code Generation Flow
```mermaid
flowchart TD
  A[Connected user opens referral widget] --> B[Generate referral code]
  B --> C[Validate code format 6-10 chars, no spaces]
  C --> D{Unique + user eligible?}
  D -- No --> E[Show reason and retry]
  D -- Yes --> F[Store code mapping on-chain]
  F --> G[Show code + copy action]
```

## 5) Admin Tier Management Flow
```mermaid
flowchart TD
  A[Admin login] --> B[Open Tiers module]
  B --> C[Create/Edit tier details]
  C --> D[Set status Draft/Ready/Live]
  D --> E[Save and publish]
  E --> F[Verify public page tier + availability]
```

## 6) Admin Orders Investigation Flow
1. Open Orders module.
2. Apply filters (referral/date/qty/amount/token/status).
3. Inspect order details (wallet, tx hash, node type, quantity).
4. Cross-check explorer if status mismatch exists.
5. Export CSV for support/finance follow-up.

## 7) Critical Edge Cases
- User tries to buy above wallet cap.
- Tier inventory depleted between quote and submit.
- ERC20 allowance insufficient after user changes quantity.
- User enters inactive referral code.
- RPC latency causes delayed confirmation in UI.
