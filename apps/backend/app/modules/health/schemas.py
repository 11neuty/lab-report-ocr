from pydantic import BaseModel


class HealthResponse(BaseModel):
    status: str = 'ok'
    service: str = 'lab-report-ocr'
    version: str = '0.1.0'
