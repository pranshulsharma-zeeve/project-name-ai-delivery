# MVP Acceptance Matrix — GPT Protocol Node Sale Platform

## Legend
- **P0**: Must pass for launch
- **P1**: Should pass for launch
- **P2**: Nice-to-have for launch

## 1) Buyer Journey Acceptance

| ID | Priority | Scenario | Acceptance Criteria |
|---|---|---|---|
| BUY-01 | P0 | Connect MetaMask | User connects MetaMask and sees connected wallet state. |
| BUY-02 | P0 | Connect Trust Wallet | User connects Trust Wallet and sees connected wallet state. |
| BUY-03 | P0 | Delegate purchase with ETH | Valid quantity + valid wallet cap + active tier -> tx confirms -> NFTs minted to wallet. |
| BUY-04 | P0 | Delegate purchase with USDC/USDT/GPT | ERC20 allowance + valid purchase -> tx confirms -> NFTs minted. |
| BUY-05 | P0 | DA purchase without referral | DA tab has no referral benefit; purchase succeeds for valid input. |
| BUY-06 | P0 | Transaction state clarity | User sees clear statuses: awaiting signature, submitted, confirmed, failed. |
| BUY-07 | P1 | Explorer links | Success/pending modals include valid explorer links. |

## 2) Referral Acceptance

| ID | Priority | Scenario | Acceptance Criteria |
|---|---|---|---|
| REF-01 | P0 | Generate referral code | Connected, eligible wallet can generate one unique code (6–10 chars, no spaces). |
| REF-02 | P0 | Reuse code blocked | Wallet with existing code cannot generate second code. |
| REF-03 | P0 | Delegate discount applied | Valid referral on Delegate purchase applies configured discount. |
| REF-04 | P0 | Referrer commission credited | Valid referral purchase results in commission settlement as configured. |
| REF-05 | P0 | DA ignores referral | Referral input/benefit not available for DA purchase path. |

## 3) Tier and Inventory Acceptance

| ID | Priority | Scenario | Acceptance Criteria |
|---|---|---|---|
| TIER-01 | P0 | One live Delegate tier | System enforces one active Delegate tier at a time. |
| TIER-02 | P0 | Availability enforcement | Purchase cannot exceed remaining licenses in active bucket. |
| TIER-03 | P0 | Cap enforcement | Delegate and DA wallet caps enforced per config. |
| TIER-04 | P1 | Tier transition | Admin can move next tier to Live and frontend reflects update. |

## 4) Admin Acceptance

| ID | Priority | Scenario | Acceptance Criteria |
|---|---|---|---|
| ADM-01 | P0 | Admin auth | Valid admin can authenticate and access protected modules. |
| ADM-02 | P0 | Manage tiers | Admin can create/edit tier details and status changes persist. |
| ADM-03 | P0 | Configure blockchain values | Chain/RPC/contract/token config can be updated and validated. |
| ADM-04 | P0 | Orders filter | Admin can filter orders by referral/date/qty/amount/token/status. |
| ADM-05 | P1 | Dashboard metrics | Summary metrics align with indexed order/referral data. |

## 5) Smart Contract and Chain Safety Acceptance

| ID | Priority | Scenario | Acceptance Criteria |
|---|---|---|---|
| CHAIN-01 | P0 | Blacklist block | Blacklisted user cannot buy Delegate/DA or generate referral code. |
| CHAIN-02 | P0 | Transfer lock | NFT transfers blocked for 365 days from mint. |
| CHAIN-03 | P0 | Payment token support | ETH/USDT/USDC/GPT purchase methods function as specified. |
| CHAIN-04 | P0 | Event emission | Trade/order/referral/admin update events are emitted and indexable. |
| CHAIN-05 | P1 | Oracle dependency | ETH pricing logic handles oracle read path correctly. |

## 6) Operational Acceptance

| ID | Priority | Scenario | Acceptance Criteria |
|---|---|---|---|
| OPS-01 | P0 | Reconciliation baseline | Indexed orders reconcile against chain events within agreed tolerance. |
| OPS-02 | P1 | Monitoring readiness | Alerts configured for API errors, indexing lag, and tx failure spikes. |
| OPS-03 | P1 | Export support | Filtered order exports (CSV) are correct and usable by ops/finance. |

## 7) Launch Exit Criteria
- All **P0** cases pass in staging.
- No unresolved critical security findings.
- Contract addresses and admin roles verified.
- Support runbook and escalation path approved.
