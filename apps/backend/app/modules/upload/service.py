from fastapi import UploadFile

from app.modules.storage.schemas import SaveFileResult
from app.modules.storage.service import storage_service


async def save_upload(file: UploadFile) -> SaveFileResult:
    return await storage_service.save_file(file)
