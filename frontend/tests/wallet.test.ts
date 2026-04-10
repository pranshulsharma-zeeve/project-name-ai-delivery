import { describe, expect, it } from 'vitest';
import { truncateWalletAddress } from '@/lib/wallet';

describe('truncateWalletAddress', () => {
  it('truncates hex addresses for UI display', () => {
    const output = truncateWalletAddress('0x1234567890abcdef1234567890abcdef12345678');
    expect(output).toBe('0x1234...5678');
  });
});
