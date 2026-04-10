import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import { pinoHttp } from 'pino-http';
import { env } from './config/env.js';
import { logger } from './lib/logger.js';
import { errorHandler } from './middleware/error-handler.js';
import { requireAdminAuth } from './modules/auth/admin-auth.js';
import { contractRouter } from './modules/contracts/contract-routes.js';
import { healthRouter } from './modules/health/health-routes.js';

export function createApp() {
  const app = express();

  app.use(helmet());
  app.use(cors());
  app.use(express.json());
  app.use(pinoHttp({ logger }));

  app.use(`${env.API_PREFIX}/health`, healthRouter);
  app.use(`${env.API_PREFIX}/contracts`, requireAdminAuth, contractRouter);

  app.use(errorHandler);

  return app;
}
