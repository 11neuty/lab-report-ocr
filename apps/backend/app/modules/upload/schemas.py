from pydantic import BaseModel


class UploadResponse(BaseModel):
    upload_id: str
    file_name: str
    file_size: int
    mime_type: str
