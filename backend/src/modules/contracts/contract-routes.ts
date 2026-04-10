import { Router } from 'express';
import { EvmChainAdapter } from './evm-chain-adapter.js';

export const contractRouter = Router();

const chainAdapter = new EvmChainAdapter();

contractRouter.get('/chain-info', async (_req, res) => {
  const chainInfo = await chainAdapter.getChainInfo();
  res.json(chainInfo);
});
