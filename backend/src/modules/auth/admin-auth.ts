import type { NextFunction, Request, Response } from 'express';
import { env } from '../../config/env.js';

export function requireAdminAuth(req: Request, res: Response, next: NextFunction): void {
  const authHeader = req.header('authorization');

  if (!authHeader?.startsWith('Bearer ')) {
    res.status(401).json({ message: 'Missing bearer token' });
    return;
  }

  const token = authHeader.slice('Bearer '.length);

  if (token !== env.ADMIN_JWT_SECRET) {
    res.status(403).json({ message: 'Invalid admin token' });
    return;
  }

  next();
}
