# Development Guide

## Prerequisites

<!-- Required tools and versions. -->

## Getting Started

1. Clone the repository.
2. Copy `.env.example` to `.env`.
3. Install dependencies:
   - Frontend: `pnpm install`
   - Backend: `pip install -r requirements.txt` (or `poetry install`)
4. Start the development environment:
   - `docker compose up`
   - Or run services individually.

## Networking

### Why the browser must use localhost

The frontend JavaScript runs inside the user's browser, **not** inside the Docker network.
The browser can only resolve hostnames that exist on the machine or network it runs on.

- `http://localhost:8000` — resolves to the user's machine, where Docker maps the backend container port. ✅
- `http://backend:8000` — `backend` is a Docker service name that only resolves inside the Docker network. Browsers cannot resolve it. ❌

### Why backend only works between containers

Docker Compose creates a virtual network (`lab-report-network`) where each service is reachable
by its service name. Inside that network, `backend` resolves to the backend container's IP.
Outside that network (i.e., from the browser), that name has no meaning.

### How to configure for production

In production the backend is served behind a real domain (e.g., `https://api.example.com`).
Set `VITE_API_URL` at build time to that domain:

```bash
VITE_API_URL=https://api.example.com pnpm build
```

The build process inlines the value; the browser uses the public domain, which resolves normally.
The default `http://localhost:8000` is safe for development because it requires no DNS — it
always resolves to the local machine.

## Project Structure

<!-- Detailed explanation of the codebase organization. -->

## Code Style

<!-- Linting, formatting, and naming conventions. -->

## Testing

<!-- How to run tests, where to find them, and how to write new ones. -->

## Debugging

<!-- Debugging tips and tools. -->

## Building for Production

<!-- Build commands and output locations. -->

## Common Tasks

<!-- Frequent development tasks and commands. -->
