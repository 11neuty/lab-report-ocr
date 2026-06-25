from pydantic import BaseModel


class ApiResponse[T](BaseModel):
    success: bool = True
    message: str | None = None
    data: T | None = None

    model_config = {
        'json_schema_extra': {
            'examples': [
                {
                    'success': True,
                    'message': 'Operation successful',
                    'data': {},
                },
            ],
        },
    }
