import React from 'react';
export function PurchaseShell() {
  return (
    <section className="card" style={{ marginTop: '1.5rem' }}>
      <h2 style={{ marginTop: 0 }}>Purchase Module (Scaffold)</h2>
      <p style={{ color: 'var(--color-text-muted)' }}>
        Delegate and DA tabs, quote API integration, and on-chain transaction states will be implemented in follow-up stories.
      </p>
      <ul>
        <li>Routing foundation in place (App Router)</li>
        <li>Design tokens wired for shared UI styling</li>
        <li>Wallet state model scaffolded for integration with provider SDKs</li>
      </ul>
    </section>
  );
}
