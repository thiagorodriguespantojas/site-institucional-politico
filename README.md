# Solução Política · 🇧🇷💡

![Build](https://img.shields.io/github/actions/workflow/status/thiagorodriguespantojas/solucao-politica/deploy-backend.yml)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Vercel](https://img.shields.io/badge/Frontend-Vercel-black?logo=vercel)
![Railway](https://img.shields.io/badge/Backend-Railway-purple?logo=railway)

---

## Tecnologias

- Next.js + Tailwind (Frontend)
- NestJS + Prisma + Redis (Backend)
- Prometheus + Grafana (Monitoring)
- CI/CD GitHub Actions
- Docker Compose

---

## Rodando Local

```bash
cp .env.example .env
docker-compose up --build

Endpoints:
Frontend: http://localhost:3000

Backend: http://localhost:3001

Prometheus: http://localhost:9090

Grafana: http://localhost:3002
```
