'use client';

import { useState } from 'react';
import { Header } from '@/components/header';
import { PurchaseShell } from '@/components/purchase-shell';
import type { WalletState } from '@/lib/wallet';

const MOCK_ADDRESS = '0x1234567890abcdef1234567890abcdef12345678';

export default function HomePage() {
  const [wallet, setWallet] = useState<WalletState>({ status: 'disconnected' });

  const handleConnect = () => {
    setWallet({ status: 'connected', address: MOCK_ADDRESS });
  };

  return (
    <main>
      <Header wallet={wallet} onConnect={handleConnect} />
      <PurchaseShell />
    </main>
  );
}
