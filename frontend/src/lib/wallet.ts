export type WalletStatus = 'disconnected' | 'connecting' | 'connected' | 'unsupported-network';

export type WalletState = {
  address?: string;
  status: WalletStatus;
};

export function truncateWalletAddress(address: string): string {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}
