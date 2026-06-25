from pydantic import BaseModel


class UploadResponse(BaseModel):
    upload_id: str
    file_name: str
    file_size: int
    mime_type: str

    model_config = {
        'json_schema_extra': {
            'examples': [
                {
                    'upload_id': 'abc123def456',
                    'file_name': 'lab_report.pdf',
                    'file_size': 1048576,
                    'mime_type': 'application/pdf',
                },
            ],
        },
    }
