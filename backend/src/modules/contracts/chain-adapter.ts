export interface ChainAdapter {
  getChainInfo(): Promise<{ chainId: number; rpcUrl: string }>;
}
