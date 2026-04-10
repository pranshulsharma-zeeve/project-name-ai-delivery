import { env } from '../../config/env.js';
import type { ChainAdapter } from './chain-adapter.js';

export class EvmChainAdapter implements ChainAdapter {
  async getChainInfo(): Promise<{ chainId: number; rpcUrl: string }> {
    return {
      chainId: env.CHAIN_ID,
      rpcUrl: env.RPC_URL
    };
  }
}
