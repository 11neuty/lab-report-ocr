from app.core.exceptions import AppError


class TemplateNotFoundError(AppError):
    def __init__(self, message: str = 'Template not found') -> None:
        super().__init__(message, status_code=404)


class InvalidTemplateSchemaError(AppError):
    def __init__(self, message: str = 'Invalid template schema') -> None:
        super().__init__(message, status_code=422)
