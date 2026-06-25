# Backend

API server for lab-report-ocr.

## Tech Stack

- Python 3.14
- FastAPI
- Uvicorn
- Pydantic v2
- uv (package manager)

## Architecture

```
app/
├── core/
│   ├── config.py         # Application settings (pydantic-settings)
│   ├── logging.py        # Logging configuration
│   └── exceptions.py     # Error classes and global handler
├── modules/
│   ├── health/           # Health check endpoint
│   │   ├── router.py
│   │   ├── service.py
│   │   └── schemas.py
│   ├── upload/           # Upload — file upload and storage
│   ├── ocr/              # OCR — AI text extraction
│   ├── template/         # Template — Excel parsing and mapping
│   ├── review/           # Review — OCR result correction
│   └── export/           # Export — CSV generation
├── shared/
│   ├── responses.py      # Centralized API response model
│   ├── dependencies.py   # Dependency injection layer
│   └── utils.py          # Utility functions
└── main.py               # FastAPI app creation and routing
```

## Getting Started

```bash
uv run uvicorn app.main:app --reload
```

The API will be available at `http://localhost:8000`.

## Endpoints

| Method | Path       | Description       |
| ------ | ---------- | ----------------- |
| GET    | `/health`  | Service health    |

## Scripts

| Command                                               | Description          |
| ----------------------------------------------------- | -------------------- |
| `uv run uvicorn app.main:app --reload`                | Start dev server     |
| `uv run ruff check .`                                 | Lint                 |
| `uv run ruff format .`                                | Format               |
