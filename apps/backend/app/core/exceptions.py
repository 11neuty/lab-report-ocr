from fastapi import Request
from fastapi.responses import JSONResponse


class AppError(Exception):
    def __init__(self, message: str, status_code: int = 500) -> None:
        self.message = message
        self.status_code = status_code
        super().__init__(message)


class NotFoundError(AppError):
    def __init__(self, message: str = 'Resource not found') -> None:
        super().__init__(message, status_code=404)


class ValidationError(AppError):
    def __init__(self, message: str = 'Validation failed') -> None:
        super().__init__(message, status_code=422)


async def global_exception_handler(request: Request, exc: Exception) -> JSONResponse:
    if isinstance(exc, AppError):
        return JSONResponse(
            status_code=exc.status_code,
            content={'detail': exc.message},
        )

    return JSONResponse(
        status_code=500,
        content={'detail': 'Internal server error'},
    )
