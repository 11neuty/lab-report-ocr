from pydantic import BaseModel


class SaveFileResult(BaseModel):
    upload_id: str
    stored_filename: str
    original_filename: str
    file_size: int
    mime_type: str
    absolute_path: str
    relative_path: str
