import request from 'supertest';
import { beforeAll, describe, expect, it } from 'vitest';

let createApp: typeof import('../src/app.js').createApp;

beforeAll(async () => {
  process.env.NODE_ENV = 'test';
  process.env.PORT = '4100';
  process.env.API_PREFIX = '/api';
  process.env.ADMIN_JWT_SECRET = 'test-secret-token';
  process.env.RPC_URL = 'https://rpc.example.org';
  process.env.CHAIN_ID = '11155111';

  ({ createApp } = await import('../src/app.js'));
});

describe('health routes', () => {
  it('returns liveness', async () => {
    const response = await request(createApp()).get('/api/health/live');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ status: 'ok' });
  });

  it('protects contract route', async () => {
    const response = await request(createApp()).get('/api/contracts/chain-info');

    expect(response.status).toBe(401);
  });

  it('returns chain info for admin token', async () => {
    const response = await request(createApp())
      .get('/api/contracts/chain-info')
      .set('Authorization', 'Bearer test-secret-token');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      chainId: 11155111,
      rpcUrl: 'https://rpc.example.org'
    });
  });
});
