from pydantic import BaseModel


class HealthResponse(BaseModel):
    status: str = 'ok'
    service: str = 'lab-report-ocr'
    version: str = '0.1.0'

    model_config = {
        'json_schema_extra': {
            'examples': [
                {
                    'status': 'ok',
                    'service': 'lab-report-ocr',
                    'version': '0.1.0',
                },
            ],
        },
    }
