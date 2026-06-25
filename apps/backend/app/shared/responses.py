from pydantic import BaseModel


class ApiResponse[T](BaseModel):
    status: str = 'ok'
    data: T | None = None
    message: str | None = None
