# Deployment

## Overview

<!-- Deployment architecture and environments. -->

## Prerequisites

<!-- Required infrastructure, credentials, and tools. -->

## Environment Configuration

### `VITE_API_URL`

Set `VITE_API_URL` to the public-facing backend URL for the frontend build:

```bash
VITE_API_URL=https://api.example.com pnpm build
```

In development, the default `http://localhost:8000` is correct (see [Development Guide](./Development-Guide.md#networking)).

## Docker Deployment

### Build Images

```bash
docker compose build
```

### Run Services

```bash
docker compose up -d
```

## Manual Deployment

<!-- Step-by-step manual deployment instructions for each service. -->

## Database Migrations

<!-- How to run and manage database schema changes. -->

## Monitoring and Logging

<!-- Tools and procedures for monitoring production. -->

## Backup and Recovery

<!-- Backup strategy and recovery procedures. -->

## Rollback

<!-- How to roll back a failed deployment. -->
