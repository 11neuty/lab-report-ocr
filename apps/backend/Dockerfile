FROM python:3.14-slim AS base
COPY --from=ghcr.io/astral-sh/uv:latest /uv /uvx /bin/
WORKDIR /app

FROM base AS development
COPY pyproject.toml ./
RUN uv sync
COPY . .
EXPOSE 8000
CMD ["uv", "run", "uvicorn", "app.main:app", "--reload", "--host", "0.0.0.0"]
