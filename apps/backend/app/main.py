from collections.abc import AsyncGenerator
from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.core.config import settings
from app.core.exceptions import AppError, global_exception_handler
from app.core.logging import configure_logging
from app.modules.health.router import router as health_router
from app.modules.upload.router import router as upload_router


@asynccontextmanager
async def lifespan(app: FastAPI) -> AsyncGenerator[None]:
    configure_logging()
    yield


app = FastAPI(
    title=settings.app_name,
    description=(
        'Backend API for the Lab Report OCR system. Provides endpoints for'
        ' health monitoring, file upload, file retrieval, and file management.'
    ),
    version=settings.app_version,
    lifespan=lifespan,
    openapi_tags=[
        {
            'name': 'health',
            'description': 'Health check and service status endpoints.',
        },
        {
            'name': 'upload',
            'description': 'File upload, retrieval, and deletion endpoints.',
        },
    ],
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins,
    allow_credentials=settings.cors_allow_credentials,
    allow_methods=settings.cors_allow_methods,
    allow_headers=settings.cors_allow_headers,
)

app.add_exception_handler(AppError, global_exception_handler)  # type: ignore[arg-type]
app.add_exception_handler(Exception, global_exception_handler)

app.include_router(health_router)
app.include_router(upload_router)
