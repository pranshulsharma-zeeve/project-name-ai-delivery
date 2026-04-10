# Product Brief — GPT Protocol Node Sale Platform

## 1) Product Summary
GPT Protocol Node Sale Platform is a web application for selling node licenses as ERC-721 NFTs on Ethereum. It supports two products:
- **Delegate Node Licenses** (tier-based sale; only one tier live at a time)
- **DA Node Licenses** (single-price sale)

Users connect EVM wallets (MetaMask, Trust Wallet), select quantity/payment token, submit an on-chain transaction, and receive minted NFTs in their wallet after confirmation.

## 2) MVP Goals
1. Launch secure primary sale of Delegate and DA node licenses.
2. Support payment in `ETH`, `USDT`, `USDC`, and `GPT`.
3. Support referral discounts/commissions for Delegate purchases only.
4. Provide operational admin controls for tiers, chain config, and reporting.
5. Maintain clear on-chain/off-chain traceability for support and reconciliation.

## 3) Core User Outcomes
- Buyers can complete purchase in a few steps with clear transaction states.
- Referrers can generate a code and earn commission on valid Delegate purchases.
- Admins can configure tiers and monitor sales/referral performance without manual chain analysis.

## 4) Product Scope (MVP)
### In Scope
- Wallet connect/disconnect
- Delegate purchase flow (with optional referral)
- DA purchase flow (no referral benefit)
- On-chain minting + transfer to buyer wallet
- Referral code generation (one code per wallet)
- Admin portal: tiers, config, orders, dashboard analytics

### Out of Scope (MVP)
- Fiat checkout
- KYC/AML integration
- Custodial wallet support
- Native mobile app
- Secondary marketplace features

## 5) Business Rules (MVP)
- Delegate cap per wallet: default 100 (configurable)
- DA cap per wallet: default 1 (configurable)
- Delegate referral discount: default 10% (configurable)
- Delegate referral commission: default 10% (configurable)
- Delegate purchase cannot auto-split across tiers in one order
- Transfer lock: 365 days from minting (contract-enforced)

## 6) Pricing and Conversion Rules
- Base pricing currency: USD
- ETH conversion: oracle feed (Chainlink style)
- GPT conversion: manually updated on-chain config (`gptTokensInOneUSD`)
- USDT/USDC assumed 1:1 USD for pricing logic (subject to contract implementation)

## 7) Key Risks
- RPC instability during sale spikes
- Oracle read failures or stale pricing
- User confusion around wallet rejects/allowances
- Indexing lag causing dashboard mismatch vs chain truth

## 8) Success Metrics
- Wallet connect success >= 98%
- Purchase completion rate >= 85%
- Median confirmation-to-success UI update <= 2 min (network dependent)
- Unreconciled order discrepancy <= 0.5%

## 9) Release Readiness Checklist
- Contracts deployed and audited for target network
- Tier and payment token configuration completed
- Admin roles validated
- Order/referral analytics validated against chain events
- Support playbook and incident contacts finalized
