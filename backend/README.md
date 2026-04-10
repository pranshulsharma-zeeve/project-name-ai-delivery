# Backend Service Foundation

Bootstrap backend service for the GPT Protocol Node Sale platform.

## Included in this scaffold
- Express API with modular route structure.
- Admin auth middleware scaffold.
- Contract adapter abstraction with EVM implementation placeholder.
- Observability hooks via structured logging (`pino`) and health routes.

## Local setup

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

## Quality checks

```bash
npm run lint
npm run test
npm run build
```
