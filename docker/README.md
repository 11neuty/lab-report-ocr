# Docker

Dockerfiles and container configuration for lab-report-ocr.

## Files

| File                  | Description                                |
| --------------------- | ------------------------------------------ |
| `../docker-compose.yml` | Multi-service orchestration               |
| `../apps/frontend/Dockerfile` | Frontend (Node + Vite dev server)    |
| `../apps/backend/Dockerfile`  | Backend (Python + uv + Uvicorn)      |

## Quick Start

```bash
cp .env.example .env
docker compose up --build
```

- Frontend: http://localhost:5173
- Backend:  http://localhost:8000
- Health:   http://localhost:8000/health
