# lab-report-ocr

A web-based OCR application that converts handwritten laboratory forms into CSV using AI OCR and Excel templates.

## Overview

lab-report-ocr streamlines the digitization of handwritten lab reports. Users upload scanned forms, the system applies AI-powered OCR to extract data, maps results to Excel templates, and produces structured CSV output.

## Architecture

```
lab-report-ocr/
├── apps/
│   ├── frontend/       # Web UI (React / Vite)
│   └── backend/        # API server (FastAPI / Python)
├── packages/           # Shared libraries and utilities
├── templates/          # Excel templates (e.g. LHU)
├── uploads/            # Uploaded form images
├── output/             # Generated CSV output
├── docs/               # Project documentation
├── docker/             # Dockerfiles and container config
├── scripts/            # Dev, build, and deployment scripts
├── config/             # Shared tooling configuration
├── tests/              # Test suites and fixtures
└── .vscode/            # Editor settings and extensions
```

## Technology Stack

| Layer       | Technology            |
| ----------- | --------------------- |
| Frontend    | React, Vite, Tailwind |
| Backend     | FastAPI, Python       |
| OCR         | AI-based OCR engine   |
| Database    | PostgreSQL            |
| Deployment  | Docker, Docker Compose|
| Monorepo    | pnpm workspaces       |

## Folder Structure

| Path                  | Description                         |
| --------------------- | ----------------------------------- |
| `apps/frontend`       | Frontend application source         |
| `apps/backend`        | Backend API server source           |
| `packages/`           | Shared packages and utilities       |
| `templates/`          | Excel template definitions          |
| `uploads/`            | Uploaded file storage               |
| `output/`             | Generated CSV output                |
| `docs/`               | Project documentation               |
| `docker/`             | Docker configuration                |
| `scripts/`            | Utility scripts                     |
| `config/`             | Shared linting and formatting config|
| `tests/frontend`      | Frontend unit and integration tests |
| `tests/backend`       | Backend unit and integration tests  |
| `tests/fixtures`      | Test data and sample files          |
| `.vscode/`            | VS Code workspace settings          |
| `.github/`            | GitHub templates and workflows      |

## Documentation Structure

| Document               | Description                           |
| ---------------------- | ------------------------------------- |
| `docs/Architecture.md` | System architecture and data flow     |
| `docs/BRD.md`          | Business Requirements Document        |
| `docs/Roadmap.md`      | Version roadmap and milestones        |
| `docs/API.md`          | API endpoint reference                |
| `docs/Data-Mapping.md` | OCR-to-template field mapping         |
| `docs/Development-Guide.md` | Setup and development procedures |
| `docs/Deployment.md`   | Deployment and operations guide       |

## Roadmap

### v0.1.0 — Foundation
- [x] Repository setup and monorepo configuration
- [x] Developer tooling and linting configuration
- [ ] Backend scaffold (FastAPI)
- [ ] Frontend scaffold (React + Vite)
- [ ] Docker Compose development environment
- [ ] Basic CI pipeline

### v0.2.0 — Upload & OCR
- [ ] File upload endpoint
- [ ] AI OCR integration
- [ ] OCR result preview
- [ ] Basic error handling

### v0.3.0 — Template Mapping
- [ ] Excel template parsing
- [ ] Field mapping configuration
- [ ] CSV generation from OCR + template

### v0.4.0 — Web UI
- [ ] Upload page with drag-and-drop
- [ ] Results review and editing
- [ ] Download CSV

### v0.5.0 — Quality of Life
- [ ] User authentication (basic)
- [ ] Batch upload support
- [ ] OCR confidence indicators
- [ ] Export history

### v1.0.0 — Production
- [ ] Production Docker Compose
- [ ] Error monitoring and logging
- [ ] Performance optimization
- [ ] End-to-end testing
- [ ] Documentation complete

## Development Workflow

1. **Clone** the repository and copy `.env.example` to `.env`.
2. **Install** dependencies:
   - Frontend: `pnpm install`
   - Backend: `pip install -r requirements.txt`
3. **Start** the development environment via `docker compose up` or run each service individually.
4. **Develop** on a feature branch (see Branch Strategy below).
5. **Commit** following the project's commit convention.
6. **Open a pull request** against the `develop` branch.
7. **Await review** — all checks must pass before merging.

## Branch Strategy

| Branch        | Purpose                                    |
| ------------- | ------------------------------------------ |
| `main`        | Production-ready code. Merged from `release` branches. |
| `develop`     | Integration branch for ongoing work.       |
| `feature/*`   | New features — branch from `develop`.      |
| `fix/*`       | Bug fixes — branch from `develop`.         |
| `release/*`   | Release candidates — branch from `develop`, merge to `main` and back to `develop`. |
| `hotfix/*`    | Urgent production fixes — branch from `main`, merge to `main` and `develop`. |

## Commit Convention

This project follows [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <description>

[optional body]
```

**Types**: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`, `ci`, `perf`

**Examples**:
- `feat(upload): add file upload endpoint`
- `fix(ocr): handle empty field in template mapping`
- `docs(readme): update development workflow`

## Testing Strategy

| Layer      | Framework      | Scope                                 |
| ---------- | -------------- | ------------------------------------- |
| Frontend   | Vitest         | Component and hook unit tests         |
| Backend    | pytest         | API endpoint and service unit tests   |
| Integration| pytest         | End-to-end upload-to-CSV pipeline     |
| E2E        | Playwright     | Full browser-based workflows          |

Tests live in `tests/` mirroring the `apps/` structure. Fixtures (sample images, expected CSVs) reside in `tests/fixtures/`.

## Future CI/CD

| Stage            | Tools / Actions                           |
| ---------------- | ----------------------------------------- |
| Lint             | ESLint (frontend), Ruff (backend)         |
| Type Check       | TypeScript (frontend), mypy / Pyright (backend) |
| Test             | Vitest (frontend), pytest (backend)       |
| Build            | Vite (frontend), Docker (backend)         |
| Publish          | Docker Hub or GitHub Container Registry   |
| Deploy           | Docker Compose or orchestrator            |

## Contributing

Contributions are welcome. Please read the contributing guidelines before submitting a pull request.

## Issues

Report bugs and request features via the GitHub issue tracker. Use the provided issue templates.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
