from fastapi import APIRouter, UploadFile

from app.modules.upload.schemas import UploadResponse
from app.modules.upload.service import save_upload

router = APIRouter(prefix='/upload', tags=['upload'])


@router.post('', response_model=UploadResponse)
async def upload_file(file: UploadFile) -> UploadResponse:
    dest, upload_id, file_size, mime_type = await save_upload(file)

    return UploadResponse(
        upload_id=upload_id,
        file_name=dest.name,
        file_size=file_size,
        mime_type=mime_type,
    )
