# Design System Basics — GPT Protocol Node Sale Platform

## 1) Branding Essentials
- **Brand tone:** trustable, technical, clear.
- **Primary color:** `#0E1A2B`
- **Accent color:** `#6C5CE7`
- **Success:** `#1DB954`
- **Warning:** `#F39C12`
- **Error:** `#E74C3C`
- **Background:** `#F7F9FC`

## 2) Typography
- Primary: **Inter** (fallback: system sans-serif)
- Recommended scale:
  - H1 40px
  - H2 32px
  - H3 24px
  - Body 16px
  - Caption 13px

## 3) Layout and Spacing
- 8px spacing grid
- Card radius: 10–12px
- Button radius: 8px
- Use consistent vertical rhythm and field spacing

## 4) Core Components (MVP)
1. **Header** with wallet state indicator
2. **Tabs** for Delegate / DA
3. **Purchase card** with quantity, token selector, totals
4. **Referral widget** with generate + copy
5. **Transaction modals** (pending/success/fail)
6. **Admin KPI cards/charts/tables**
7. **Filter bar** for orders

## 5) Interaction States
- Buttons: default / hover / loading / disabled
- Inputs: default / focus / error / disabled
- Wallet state: disconnected / connecting / connected / wrong-network
- Transaction state: awaiting-signature / submitted / confirmed / failed

## 6) UX Copy Guidelines
- Keep user prompts short and actionable.
- Always explain next step in transaction states.
- Show concrete errors (e.g., “Insufficient USDC allowance”).

### Suggested Copy Snippets
- Connect CTA: `Connect Wallet`
- Submit CTA: `Pay Now`
- Pending: `Transaction submitted. Waiting for blockchain confirmation...`
- Success: `You have successfully purchased {quantity} Licence(s).`

## 7) Accessibility Basics
- Minimum color contrast AA for text and controls
- Keyboard navigable forms and modal actions
- Visible focus styles
- Error messages tied to form fields
