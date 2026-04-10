import React from 'react';
import { truncateWalletAddress, type WalletState } from '@/lib/wallet';

type HeaderProps = {
  wallet: WalletState;
  onConnect: () => void;
};

export function Header({ wallet, onConnect }: HeaderProps) {
  const label = wallet.address ? truncateWalletAddress(wallet.address) : 'Connect Wallet';

  return (
    <header className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <h1 style={{ margin: 0, fontSize: '1.25rem' }}>GPT Protocol Node Sale</h1>
        <p style={{ margin: '0.25rem 0 0', color: 'var(--color-text-muted)' }}>Buyer app foundation</p>
      </div>
      <button type="button" className="button" onClick={onConnect}>
        {label}
      </button>
    </header>
  );
}
