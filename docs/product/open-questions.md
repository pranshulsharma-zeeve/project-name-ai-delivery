# Open Questions and Unresolved Assumptions

## A. Commercial / Business
1. Final tier inventory and pricing values (currently placeholders in SRS).
2. Should DA cap remain exactly 1 wallet-wide forever, or be configurable per campaign?
3. Are referral discount and commission both always token-agnostic, or token-specific in future?
4. Is there any regional/jurisdiction restriction for buyers?

## B. Product / UX
5. Should quantity input support keyboard stepper only or free numeric input + validation?
6. Should users see estimated gas and slippage guidance before clicking Pay?
7. Should referral input perform pre-validation (on blur) or validate only on submit?
8. Should we expose owned token IDs in UI or only tx hash + explorer link?

## C. Blockchain / Contract
9. Confirm exact contract addresses per environment (dev/stage/prod).
10. Confirm whether DA and Delegate withdrawals always split 97:3 across two wallets.
11. Confirm fallback behavior if oracle is stale/unavailable at purchase time.
12. Confirm whether commission transfer is atomic in purchase tx or batched settlement.
13. Confirm if delegated tiers are pre-deployed or deployed just-in-time per tier.

## D. Backend / Data
14. What is the target indexing lag SLA (e.g., <= 60s)?
15. Is there a canonical `order_id` generated off-chain, on-chain, or both?
16. Should admin dashboard read from indexer DB only, or mixed on-demand chain reads?
17. Retention policy for audit logs and order export files?

## E. Security / Ops
18. Is MFA mandatory for all admin users in MVP?
19. Is IP allowlisting required for admin login?
20. Is emergency pause available in contracts or only via admin deactivation workflows?
21. Which alerting channels are mandatory for launch (PagerDuty/Slack/Email)?

## F. Delivery
22. Which environments are required before production (dev + staging only, or QA/UAT split)?
23. Required minimum test coverage targets for contracts and backend?
24. Do we need external penetration test sign-off before launch?
