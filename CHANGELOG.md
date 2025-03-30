# 📜 Changelog

## [1.0.0] - 2025-03-30

### ✨ Features

- Implementação completa do Backend com NestJS
- Implementação do Frontend com NextJS e VueJS (SSR e SPA)
- Integração com PostgreSQL via Prisma ORM
- Integração de Cache Redis utilizando cache-manager
- Implementação de sistema de autenticação com JWT
- Sistema de Votação (votes)
- Sistema de Propostas (proposals)
- Dashboard de Métricas com Prometheus + Grafana
- Dockerização do Backend, Frontend, Redis, PostgreSQL e Prometheus

### 🐛 Fixes

- Correção de tipagem `cache-manager-redis-store`
- Ajuste de dependências desatualizadas
- Correção de problemas no Dockerfile do frontend

### 🧹 Refactors

- Melhoria na organização de diretórios
- Separação de tipagens em `/src/@types`
- Ajustes no tsconfig para evitar conflitos

### 📝 Docs

- Criação do `README.md` detalhado
- Inclusão de exemplos de `.env`
- Documentação de comandos básicos e Makefile

### 🚀 Infraestrutura

- Configuração de `docker-compose` para orquestração local
- Makefile para facilitar build e up
- Preparação para ambiente de CI/CD

---
